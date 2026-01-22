import path from 'path';
import { algoliaService } from './algoliaService.js';

/**
 * AIService - Handles communication with llama.cpp server
 * Uses the /completion endpoint with proper Mistral chat formatting
 * Integrates with Algolia for intelligent documentation search
 */
export class AIService {
  constructor() {
    this.cppBackendUrl = process.env.CPP_BACKEND_URL || 'http://localhost:8080';
    this.timeout = 60000; // 60 second timeout for LLM responses
    
    // System prompt for the documentation assistant - NO LINK GENERATION
    // Links are provided separately from Algolia results to prevent hallucinations
    this.systemPrompt = `You are a concise AI assistant for IQM's programmatic advertising API documentation.

=== IQM PLATFORM KNOWLEDGE ===

ADVERTISING HIERARCHY:
- Insertion Orders (IOs): Parent hierarchy. Contracts specifying campaign details, budget, and time period.
- Campaigns: Child of IOs. Targeted advertising runs with optimization strategies, audience targeting, and inventory placement.
- Creatives: The actual ad content (images, videos, audio, HTML) attached to campaigns.

ORGANIZATION HIERARCHY:
- Workspaces: Core organizational entity. Manage multiple accounts, permissions, credentials, and financial operations.
- Organizations/Advertisers: Companies that place ads. When assigned to a Workspace, they become "Customers."
- Users: Individuals operating within Workspaces with assigned Advertiser access.

AUDIENCE TYPES:
- Matched Audiences: First-party data uploaded (emails, device IDs, etc.) matched to IQM's identity graph.
- Contextual Audiences: Targeting based on content/context where ads appear.
- Segment Audiences: Pre-built demographic, geographic, interest-based, or behavioral segments.

API REFERENCE (which API to use for what):
- Campaign API: Create/manage Campaigns and Insertion Orders. Primary campaign operations.
- Audience API: Create/manage audience targeting (matched, contextual, segment audiences).
- Creative API: Upload and manage ad creatives (images, video, audio, HTML).
- Conversions API: Track user actions (purchases, signups) for attribution.
- Bid Model API: Optimize campaigns with bid strategies, priorities, and dimension targeting.
- Reports API: Generate and schedule custom reports.
- Insights API: Generate Voter Level Data (VLD) and Patient Level Data (PLD) reports.
- Inventory API: Manage ad placements, deals, and inventory groups.
- Planner API: Draft ad strategy proposals with reach/impression estimates.
- Finance API: Manage invoices, credits, payments between Workspaces and Advertisers.
- User API: User registration, login, profile management.
- Workspace API: Manage Organizations, Workspaces, Customers, Advertisers.
- Master API: Static reference data (geography, demographics, creative types).
- Assets API: Upload static assets (images, PDFs).
- Dashboard API: Create/manage dashboard configurations.

=== RESPONSE RULES ===

CRITICAL:
1. DO NOT generate any URLs, markdown links, or bracketed labels.
2. DO NOT add trailing references like "(see the guide)" or "refer to X".
3. Write 2-3 natural sentences explaining the concept and what API/page covers it.
4. DO NOT list steps or table of contents. User will see page navigation.
5. Use the platform knowledge above to give accurate, specific answers.

GOOD RESPONSE EXAMPLES:

"To create a campaign, you'll need an authenticated session and an active insertion order with budget. The Campaign API handles both IO creation and campaign setup."

"IQM supports several audience types: matched audiences from your first-party data, contextual targeting based on content, and pre-built demographic/behavioral segments. The Audience API covers all creation and management operations."

"A conversion tracks user actions after ad exposure, like purchases or signups. The Conversions API supports both pixel and postback tracking methods."

BAD (DO NOT DO):
- "...see the Campaign section for details." ❌
- "[quickstart]" or "(API Guidelines)" ❌
- Listing steps: "Step 1, Step 2..." ❌

Answer naturally. Links are added automatically.`;

    // Category priority scores for different query intents
    this.categoryPriority = {
      create: {
        'Quickstart Guides': 100,
        'Tutorials': 95,
        'Getting Started': 50,
        // API guidelines get base score
      },
      update: {
        // Guidelines should be top for specific operations
        'Quickstart Guides': 30,
        'Tutorials': 30,
      },
      get: {
        // Guidelines should be top for specific operations
        'Quickstart Guides': 20,
        'Tutorials': 20,
      },
      conceptual: {
        'Getting Started': 100,
        'Quickstart Guides': 60,
        'Tutorials': 50,
      },
    };

    // Categories to demote unless explicitly mentioned
    this.lowPriorityCategories = [
      'Xandr Migration',
      'DV360 Migration',
      'The Trade Desk Migration',
      'Beeswax Migration',
      'Healthcare',
      'Political',
    ];
  }

  /**
   * Extract key search terms from user's question for better Algolia results
   * Removes common filler words and question patterns
   */
  extractSearchTerms(message) {
    // Remove common question prefixes and filler words
    const stopWords = [
      'how', 'do', 'i', 'can', 'you', 'me', 'the', 'a', 'an', 'to', 'find', 
      'what', 'is', 'are', 'where', 'when', 'which', 'who', 'why', 'show', 'tell',
      'about', 'for', 'with', 'from', 'in', 'on', 'at', 'of', 'my', 'your', 'their',
      'please', 'help', 'need', 'want', 'would', 'like', 'should', 'could', 'using',
      'there', 'types', 'kind', 'kinds', 'different',
    ];
    
    // Split into words, filter out stop words, keep meaningful terms
    const words = message.toLowerCase()
      .replace(/[?!.,;:'"]/g, '') // Remove punctuation
      .split(/\s+/)
      .filter(word => word.length > 1 && !stopWords.includes(word));
    
    // Enhance query with API suffix for entity-focused queries
    // This helps Algolia find the right documentation section
    const entityKeywords = {
      // Core advertising entities
      'audience': 'audience api',
      'audiences': 'audience api',
      'targeting': 'audience api campaign',
      'matched': 'matched audience api',
      'contextual': 'contextual audience api',
      'segment': 'audience segment api',
      'campaign': 'campaign api',
      'campaigns': 'campaign api',
      'creative': 'creative api',
      'creatives': 'creative api',
      'conversion': 'conversion api',
      'conversions': 'conversion api',
      'tracking': 'conversion tracking api',
      'pixel': 'conversion pixel api',
      'postback': 'conversion postback api',
      
      // Insertion Orders
      'io': 'insertion order campaign api',
      'insertion': 'insertion order campaign api',
      
      // Reporting & Analytics
      'report': 'reports api',
      'reports': 'reports api',
      'reporting': 'reports api',
      'insights': 'insights api',
      'vld': 'voter level data insights api',
      'pld': 'patient level data insights api',
      'dashboard': 'dashboard api',
      
      // Inventory & Bidding
      'inventory': 'inventory api',
      'deal': 'inventory deal api',
      'deals': 'inventory deal api',
      'bid': 'bid model api',
      'bidding': 'bid model api',
      'priority': 'bid model priority api',
      
      // Organization entities
      'workspace': 'workspace api',
      'organization': 'workspace organization api',
      'advertiser': 'workspace advertiser api',
      'customer': 'workspace customer api',
      'user': 'user management api',
      'login': 'user authentication api',
      'authentication': 'user authentication api',
      
      // Finance
      'invoice': 'finance invoice api',
      'payment': 'finance payment api',
      'credit': 'finance credit api',
      'budget': 'campaign budget api',
      
      // Planner
      'planner': 'planner api',
      'proposal': 'planner proposal api',
      'reach': 'planner reach api',
    };
    
    // Check if query is about an entity and add API suffix
    for (const [keyword, enhanced] of Object.entries(entityKeywords)) {
      if (words.includes(keyword)) {
        // Replace the keyword with enhanced version
        const idx = words.indexOf(keyword);
        words.splice(idx, 1, enhanced);
        break;
      }
    }
    
    // If we have at least 1 meaningful word, use those
    if (words.length > 0) {
      return words.join(' ');
    }
    
    // Fallback to original message if everything was filtered
    return message;
  }

  /**
   * Detect the user's intent from their query
   * Returns: 'create' | 'update' | 'get' | 'conceptual' | 'specific'
   */
  detectQueryIntent(message) {
    const lower = message.toLowerCase();
    
    // Check for specific vertical/migration keywords first
    const hasSpecialCategory = /migration|migrate|healthcare|political|pld|vld/i.test(lower);
    if (hasSpecialCategory) {
      return { intent: 'specific', specialCategory: true };
    }
    
    // Create intent: user wants to make something new
    if (/\b(create|make|build|add|new|set up|setup|register|sign up|upload)\b/.test(lower)) {
      return { intent: 'create', specialCategory: false };
    }
    
    // Update intent: user wants to modify something
    if (/\b(update|edit|modify|change|patch|put|delete|remove)\b/.test(lower)) {
      return { intent: 'update', specialCategory: false };
    }
    
    // Get intent: user wants to retrieve/list data
    if (/\b(get|fetch|retrieve|list|find|search|query|read)\b/.test(lower)) {
      return { intent: 'get', specialCategory: false };
    }
    
    // Conceptual: user wants to understand something
    if (/\b(what is|what are|explain|understand|overview|concept|difference|between)\b/.test(lower)) {
      return { intent: 'conceptual', specialCategory: false };
    }
    
    // Default to 'get' for questions without clear intent
    return { intent: 'get', specialCategory: false };
  }

  /**
   * Rerank Algolia results based on query intent
   * Boosts tutorials for 'create', demotes migration/verticals for general queries
   */
  rerankResults(hits, queryIntent) {
    if (!hits || hits.length === 0) return hits;
    
    const { intent, specialCategory } = queryIntent;
    
    return hits.map(hit => {
      let score = 100; // Base score
      const category = hit.category || '';
      const url = hit.url || '';
      const title = (hit.title || '').toLowerCase();
      
      // Apply category priority boosts based on intent
      const priorityBoosts = this.categoryPriority[intent] || {};
      if (priorityBoosts[category]) {
        score += priorityBoosts[category];
      }
      
      // Boost tutorials/quickstarts for create intent
      if (intent === 'create') {
        if (url.includes('/quickstart-guides/')) {
          score += 100; // Strong preference for quickstarts
        } else if (url.includes('/tutorials/')) {
          score += 60; // Tutorials are good but secondary
        }
      }
      
      // Demote specialized content (PG, advanced) unless specifically mentioned
      if (title.includes('pg ') || url.includes('-pg-') || title.includes('programmatic guaranteed')) {
        score -= 30; // PG is specialized, prefer general content
      }
      
      // Demote low-priority categories unless specifically requested
      if (!specialCategory) {
        const isLowPriority = this.lowPriorityCategories.some(cat => 
          category.includes(cat) || url.includes('/migration-guides/') || 
          url.includes('/healthcare-vertical/') || url.includes('/political-vertical/')
        );
        if (isLowPriority) {
          score -= 50;
        }
      }
      
      // Boost exact section matches (has anchor)
      if (hit.anchor && hit.type === 'lvl3') {
        score += 20;
      }
      
      return { ...hit, _intentScore: score };
    }).sort((a, b) => b._intentScore - a._intentScore);
  }

  /**
   * Main chat method - uses llama.cpp server with Algolia search integration
   * Enriches context with Algolia search results for smarter navigation
   */
  async chat(message, context = {}) {
    try {
      // Detect query intent (create, update, get, conceptual)
      const queryIntent = this.detectQueryIntent(message);
      
      // Extract key terms for better Algolia search
      const searchQuery = this.extractSearchTerms(message);
      
      // Search Algolia for relevant documentation
      let algoliaContext = null;
      let algoliaResults = null;
      try {
        // Get more results so we can rerank effectively
        algoliaResults = await algoliaService.search(searchQuery, { limit: 10 });
        
        if (algoliaResults.hits.length > 0) {
          // Rerank results based on query intent
          algoliaResults.hits = this.rerankResults(algoliaResults.hits, queryIntent);
          
          // Take top results after reranking
          algoliaResults.hits = algoliaResults.hits.slice(0, 6);
          
          algoliaContext = this.formatAlgoliaContext(algoliaResults, queryIntent);
          console.log(`📚 Algolia found ${algoliaResults.nbHits} matches for: "${searchQuery}" (intent: ${queryIntent.intent})`);
        }
      } catch (searchError) {
        console.warn('Algolia search failed, continuing without:', searchError.message);
      }
      
      // Add Algolia context
      const enhancedContext = {
        ...context,
        queryIntent,
        algoliaContext,
        algoliaResults,
      };
      
      const response = await this.callLlamaServer(message, enhancedContext);
      
      // Build structured links from Algolia results (not from LLM)
      const structuredLinks = this.buildStructuredLinks(algoliaResults?.hits || []);
      
      // Strip any markdown links the LLM may have generated anyway
      response.response = this.stripMarkdownLinks(response.response);
      
      // Combine LLM prose with Algolia-sourced links
      response.response = this.combineResponseWithLinks(response.response, structuredLinks);
      
      // Set primary action from top Algolia result
      if (algoliaResults?.hits?.length > 0) {
        const topHit = algoliaResults.hits[0];
        response.actions = [{
          tool: 'navigate',
          params: { path: topHit.url },
          status: 'pending',
        }];
      }
      
      // Add metadata to response
      response.queryIntent = queryIntent;
      response.links = structuredLinks;
      if (algoliaResults?.hits?.length > 0) {
        response.searchResults = algoliaResults.hits;
      }
      
      return response;
    } catch (error) {
      console.warn('llama.cpp server unavailable, using fallback:', error.message);
      return this.generateFallbackResponse(message, context);
    }
  }

  /**
   * Build structured links from Algolia results
   * Smart filtering: For quickstarts/tutorials, related links come from guidelines
   * @param {Array} hits - Algolia search hits
   * @returns {Object} Primary link and related resources
   */
  buildStructuredLinks(hits) {
    if (!hits || hits.length === 0) return { primary: null, related: {} };
    
    const primaryHit = hits[0];
    const primaryCategory = primaryHit.category || this.getCategoryFromUrl(primaryHit.url);
    const primaryBasePath = primaryHit.url?.split('#')[0]; // Base URL without anchor
    
    // Use page-level URL for primary link (no deep anchor)
    // User lands on the page and can navigate via sidebar
    const primary = {
      title: this.getPageTitle(primaryHit),
      url: primaryBasePath, // Strip anchor - let user navigate via sidebar
      category: this.getCategoryLabel(primaryCategory),
    };
    
    // For quickstarts/tutorials: only show guidelines as related (skip same-page sections)
    const isQuickstartOrTutorial = ['quickstart', 'tutorials'].includes(primaryCategory);
    
    const related = {};
    const seenBaseUrls = new Set([primaryBasePath]); // Track pages we've already linked
    
    // If primary is a quickstart/tutorial, auto-add the corresponding guidelines page
    if (isQuickstartOrTutorial) {
      const guidelinesUrl = this.getCorrespondingGuidelinesUrl(primaryHit.url);
      if (guidelinesUrl) {
        const categoryLabel = this.getCategoryLabel('guidelines');
        related[categoryLabel] = [{
          title: this.getGuidelinesTitle(guidelinesUrl),
          url: guidelinesUrl,
        }];
        seenBaseUrls.add(guidelinesUrl);
      }
    }
    
    hits.slice(1).forEach(hit => {
      const hitCategory = hit.category || this.getCategoryFromUrl(hit.url);
      const hitBasePath = hit.url?.split('#')[0];
      
      // Skip if we've already linked to this page (avoid duplicate page links)
      if (seenBaseUrls.has(hitBasePath)) return;
      
      // For quickstarts/tutorials: only include guidelines as related resources
      if (isQuickstartOrTutorial && hitCategory !== 'guidelines') return;
      
      const categoryLabel = this.getCategoryLabel(hitCategory);
      if (!related[categoryLabel]) {
        related[categoryLabel] = [];
      }
      
      // Limit to 3 per category
      if (related[categoryLabel].length < 3) {
        related[categoryLabel].push({
          title: this.getPageTitle(hit), // Use page title, not section title
          url: hitBasePath, // Use page URL, not section anchor
        });
        seenBaseUrls.add(hitBasePath);
      }
    });
    
    return { primary, related };
  }
  
  /**
   * Get clean page title from hit (not section title)
   * For quickstarts: "Create a Campaign Quickstart"
   * For guidelines: "Campaign API Guidelines"
   */
  getPageTitle(hit) {
    // Use section (page title) not the subsection title
    if (hit.section) return hit.section;
    // hierarchy.lvl1 is usually the page title
    if (hit.hierarchy?.lvl1) return hit.hierarchy.lvl1;
    // Fallback to displayCategory or title
    if (hit.displayCategory) return hit.displayCategory;
    const title = hit.title || 'Documentation';
    return title.split(' | ')[0].split(' - ')[0].trim();
  }
  
  /**
   * Map quickstart URL to corresponding guidelines URL
   */
  getCorrespondingGuidelinesUrl(quickstartUrl) {
    if (!quickstartUrl) return null;
    
    const mappings = {
      'create-a-campaign': '/guidelines/campaign-api/',
      'campaign': '/guidelines/campaign-api/',
      'creative': '/guidelines/creative-api/',
      'upload-a-creative': '/guidelines/creative-api/',
      'upload-creative-and-create-a-campaign': '/guidelines/campaign-api/',
      'reporting': '/guidelines/reports-api/',
      'schedule-report': '/guidelines/reports-api/',
      'conversion': '/guidelines/conversion-api/',
      'inventory': '/guidelines/inventory-api/',
      'bid-model': '/guidelines/bid-model-api/',
      'insights': '/guidelines/insights-api/',
      'matched-audience': '/guidelines/audience-api/',
      'contextual-audience': '/guidelines/audience-api/',
      'authentication': '/getting-started/before-you-begin/',
    };
    
    for (const [pattern, guidelinesUrl] of Object.entries(mappings)) {
      if (quickstartUrl.includes(pattern)) {
        return guidelinesUrl;
      }
    }
    return null;
  }
  
  /**
   * Get title for guidelines page from URL
   */
  getGuidelinesTitle(url) {
    const titles = {
      '/guidelines/campaign-api/': 'Campaign API Guidelines',
      '/guidelines/creative-api/': 'Creative API Guidelines',
      '/guidelines/reports-api/': 'Reports API Guidelines',
      '/guidelines/conversion-api/': 'Conversion API Guidelines',
      '/guidelines/inventory-api/': 'Inventory API Guidelines',
      '/guidelines/bid-model-api/': 'Bid Model API Guidelines',
      '/guidelines/insights-api/': 'Insights API Guidelines',
      '/guidelines/audience-api/': 'Audience API Guidelines',
      '/getting-started/before-you-begin/': 'Before You Begin',
    };
    return titles[url] || 'API Guidelines';
  }
  
  /**
   * Extract category from URL path
   */
  getCategoryFromUrl(url) {
    if (!url) return null;
    if (url.includes('/quickstart-guides/')) return 'quickstart';
    if (url.includes('/guidelines/')) return 'guidelines';
    if (url.includes('/tutorials/')) return 'tutorials';
    if (url.includes('/getting-started/')) return 'reference';
    if (url.includes('/migration-guides/')) return 'migration';
    if (url.includes('/political-vertical/')) return 'political';
    if (url.includes('/healthcare-vertical/')) return 'healthcare';
    return null;
  }

  /**
   * Get human-readable category label
   */
  getCategoryLabel(category) {
    const labels = {
      'quickstart': 'Quickstart Guides',
      'guidelines': 'API Guidelines',
      'tutorials': 'Tutorials',
      'reference': 'Getting Started',
      'migration': 'Migration Guides',
      'political': 'Political Vertical',
      'healthcare': 'Healthcare Vertical',
    };
    return labels[category] || category || 'Documentation';
  }

  /**
   * Strip markdown links and trailing references from LLM response
   * - Removes [text](url) markdown links
   * - Removes trailing references that point users to docs
   * - Removes orphaned doc titles/labels at the end
   */
  stripMarkdownLinks(text) {
    let cleaned = text;
    
    // Remove markdown links: [text](url) -> text
    cleaned = cleaned.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    
    // Remove any [bracketed text] followed by (parenthetical) at the end
    cleaned = cleaned.replace(/\s*\[[^\]]+\]\s*\([^)]*\)\s*$/g, '');
    
    // Remove trailing parenthetical references containing keywords
    cleaned = cleaned.replace(/\s*\([^)]*(?:refer|see|check|visit|read|more|documentation|api|guide)[^)]*\)\s*$/gi, '');
    
    // Remove trailing parentheticals that are just titles/labels like "(Insertion Orders)" or "(Campaign API)"
    cleaned = cleaned.replace(/\s*\([A-Z][^)]{0,30}\)\s*$/g, '');
    
    // Remove trailing bracketed labels
    cleaned = cleaned.replace(/\s*\[[^\]]+\]\s*$/gi, '');
    
    // Remove sentences starting with reference phrases at the end
    cleaned = cleaned.replace(/\.\s*(?:For more|See the|Refer to|Check out|Visit|Read the|Please refer|Learn more)[^.]*\.?\s*$/gi, '.');
    
    // Remove standalone "Learn more" or similar at the end
    cleaned = cleaned.replace(/\s+(?:Learn more|Read more|See more|Find out more)\.?\s*$/gi, '');
    
    // Remove orphaned title-like fragments at the very end
    // Matches capitalized phrases like "Campaigns Overview", "Quickstart Guide", etc.
    cleaned = cleaned.replace(/\.\s*[A-Z][A-Za-z\s]+(?:Quickstart|Guide|Tutorial|Documentation|API|Overview|Article|Help|Center)\s*$/gi, '.');
    
    // Also remove any orphaned 2-3 word capitalized phrases at the end (likely doc titles)
    cleaned = cleaned.replace(/\.\s*[A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,2}\s*$/g, '.');
    
    // Clean up multiple periods or trailing whitespace
    cleaned = cleaned.replace(/\.{2,}/g, '.').trim();
    
    // Remove any LLM-generated "Recommended:" or "Related resources:" sections
    // These will be added programmatically from Algolia results
    cleaned = cleaned.replace(/\n*📍\s*\*?\*?Recommended:?\*?\*?[^\n]*/gi, '');
    cleaned = cleaned.replace(/\n*\*?\*?Related resources:?\*?\*?[\s\S]*$/gi, '');
    
    // Remove any bullet points that look like resource lists
    cleaned = cleaned.replace(/\n+[•\-\*]\s+[A-Z][^.\n]*(?:API|Guide|Tutorial|Quickstart)[^\n]*/g, '');
    
    // Clean up any trailing whitespace/newlines
    cleaned = cleaned.trim();
    
    return cleaned;
  }

  /**
   * Combine LLM prose response with structured links
   */
  combineResponseWithLinks(prose, links) {
    let response = prose.trim();
    
    // Add primary link reference
    if (links.primary) {
      response += `\n\n📍 **Recommended:** [${links.primary.title}](${links.primary.url})`;
    }
    
    // Add related links grouped by category
    const categories = Object.keys(links.related);
    if (categories.length > 0) {
      response += '\n\n**Related resources:**';
      categories.forEach(category => {
        response += `\n\n**${category}**`;
        links.related[category].forEach(link => {
          response += `\n• [${link.title}](${link.url})`;
        });
      });
    }
    
    return response;
  }

  /**
   * Format Algolia search results as context for the LLM
   * Groups results by page/category for cleaner "Related resources:" sections
   * Intent-aware: provides appropriate guidance based on query intent
   */
  formatAlgoliaContext(results, queryIntent = {}) {
    if (!results.hits || results.hits.length === 0) return null;
    
    const topHit = results.hits[0];
    const { intent } = queryIntent;
    
    // Provide context about what documentation is available WITHOUT URLs
    // The LLM should write prose only; links are added programmatically
    let context = '\n\nDOCUMENTATION CONTEXT (for your knowledge, do NOT mention URLs or link labels):';
    
    // Tell the LLM what type of content is available
    const topCategory = topHit.category || 'documentation';
    const isQuickstart = topHit.url?.includes('/quickstart-guides/');
    const isTutorial = topHit.url?.includes('/tutorials/');
    const isGuidelines = topHit.url?.includes('/guidelines/');
    
    if (isQuickstart || isTutorial) {
      context += `\n- A step-by-step ${isQuickstart ? 'quickstart' : 'tutorial'} exists for this topic`;
      context += `\n- It covers: authentication, setup, and implementation`;
    } else if (isGuidelines) {
      context += `\n- Detailed API documentation exists for this topic`;
      context += `\n- It includes: endpoints, parameters, request/response examples`;
    }
    
    // Add relevant content preview if available
    if (topHit.content) {
      const preview = topHit.content.substring(0, 300).replace(/\n/g, ' ').trim();
      if (preview) {
        context += `\n- Key info: ${preview}`;
      }
    }
    
    context += `\n\nWrite a brief 2-3 sentence answer. Links will be added automatically below your response.`;
    
    return context;
  }

  /**
   * Build Mistral-format prompt from messages
   * Format: <s>[INST] {system}\n\n{user message} [/INST] {assistant response}</s>[INST] {next user} [/INST]
   * Incorporates Algolia search context for accurate responses
   */
  buildMistralPrompt(systemPrompt, userMessage, context) {
    let prompt = '<s>[INST] ' + systemPrompt;
    
    // Add Algolia search results if available - this is the KEY enhancement
    if (context.algoliaContext) {
      prompt += context.algoliaContext;
      prompt += '\n\nIMPORTANT: Answer based on the BEST MATCH above. Link to that URL. Do not make up endpoints.';
    }
    
    // Add context about current page
    if (context.currentPage || context.pageTitle) {
      prompt += `\n\nContext: The user is viewing "${context.pageTitle || context.currentPage}".`;
      if (context.headings?.length > 0) {
        prompt += ` Page sections: ${context.headings.slice(0, 5).join(', ')}.`;
      }
    }
    
    // Add conversation history
    if (context.conversationHistory?.length > 0) {
      const recentHistory = context.conversationHistory.slice(-4); // Keep last 4 exchanges
      prompt += '\n\nRecent conversation:';
      for (const msg of recentHistory) {
        if (msg.role === 'user') {
          prompt += `\nUser: ${msg.content}`;
        } else {
          prompt += `\nAssistant: ${msg.content}`;
        }
      }
    }
    
    // Add current user message
    prompt += `\n\n${userMessage} [/INST]`;
    
    return prompt;
  }

  /**
   * Call llama.cpp server using /completion endpoint with Mistral format
   */
  async callLlamaServer(message, context) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    // Build properly formatted Mistral prompt
    const prompt = this.buildMistralPrompt(this.systemPrompt, message, context);

    try {
      const response = await fetch(`${this.cppBackendUrl}/completion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          temperature: 0.7,
          n_predict: 512, // Reduced for more focused responses
          stop: ['</s>', '[INST]', '\nUser:', '\nWhat ', '\nHow ', '\nCan I', '\nI want'],
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`llama-server returned ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      const assistantMessage = (data.content || 'No response generated.').trim();

      // Note: Link correction and action parsing now happens in chat() method
      // LLM response is prose-only, links come from Algolia results

      return {
        response: assistantMessage,
        model: data.model || 'mistral-7b-local',
      };
    } finally {
      clearTimeout(timeoutId);
    }
  }



  /**
   * Fallback response when backend is unavailable
   * Provides concise, actionable responses with related page suggestions
   */
  generateFallbackResponse(message, context) {
    const lowerMessage = message.toLowerCase();
    
    // Only match auth route if user EXPLICITLY asks about auth/login/sign up
    const isExplicitAuthQuestion = /\b(authenticate|authentication|login|log in|sign up|signup|oauth|bearer token|api key|access token)\b/.test(lowerMessage);
    
    // Auth route - ONLY for explicit auth questions
    const authRoute = { 
      keywords: ['authenticate', 'authentication', 'login', 'log in', 'sign up', 'signup', 'oauth', 'bearer token', 'api key', 'access token'], 
      url: '/quickstart-guides/authentication-quickstart-guide/', 
      title: 'Authentication Quickstart',
      related: [
        { title: 'Before You Begin', path: '/getting-started/before-you-begin/' },
        { title: 'REST API Reference', path: '/getting-started/rest-api-reference/' },
      ]
    };

    // Main content routes - prioritized by specificity
    const contentRoutes = [
      // Campaign operations - Quickstarts & Tutorials (entry points)
      { keywords: ['create campaign', 'new campaign', 'launch campaign', 'campaign quickstart'], url: '/quickstart-guides/create-a-campaign-quickstart/', title: 'Create a Campaign Quickstart', related: [
        { title: 'Campaign API', path: '/guidelines/campaign-api/' },
        { title: 'Create a PG Campaign', path: '/tutorials/create-a-pg-campaign/' },
      ]},
      { keywords: ['pg campaign', 'programmatic guaranteed campaign', 'programmatic guaranteed'], url: '/tutorials/create-a-pg-campaign/', title: 'Create a PG Campaign', related: [
        { title: 'Campaign API', path: '/guidelines/campaign-api/' },
        { title: 'Create a Deal', path: '/tutorials/deal-guide/' },
      ]},
      
      // Campaign Details - GET /api/v2/cmp/campaign/{campaignId} - get details by ID
      { keywords: ['get campaign', 'campaign details', 'campaign by id', 'find campaign', 'campaign info'], url: '/guidelines/campaign-api/#get-campaign-details-by-id', title: 'Get Campaign Details by ID', related: [
        { title: 'Get List of Campaigns', path: '/guidelines/campaign-api/#get-list-of-campaigns' },
        { title: 'Campaign Resource Properties', path: '/guidelines/campaign-api/#campaign-resource-properties' },
      ]},
      // Get List of Campaigns - GET /api/v2/cmp/campaigns/data
      { keywords: ['list campaigns', 'all campaigns', 'campaign list', 'search campaigns', 'filter campaigns'], url: '/guidelines/campaign-api/#get-list-of-campaigns', title: 'Get List of Campaigns', related: [
        { title: 'Get Campaign Details by ID', path: '/guidelines/campaign-api/#get-campaign-details-by-id' },
        { title: 'Get Campaign Count by Status', path: '/guidelines/campaign-api/#get-campaign-count-by-status' },
      ]},
      // Get Campaign Count by Status
      { keywords: ['campaign count', 'count campaigns', 'campaign status count', 'running campaigns', 'pending campaigns', 'paused campaigns'], url: '/guidelines/campaign-api/#get-campaign-count-by-status', title: 'Get Campaign Count by Status', related: [
        { title: 'Get List of Campaigns', path: '/guidelines/campaign-api/#get-list-of-campaigns' },
      ]},
      // Get Campaign Count with Campaign Type
      { keywords: ['campaign type count', 'campaign types', 'type of campaign', 'cpm campaign', 'cpc campaign'], url: '/guidelines/campaign-api/#get-campaign-count-with-campaign-type', title: 'Get Campaign Count with Campaign Type', related: [
        { title: 'Get List of Campaign Budget Types', path: '/guidelines/campaign-api/#get-list-of-campaign-budget-types' },
      ]},
      // Get List of Campaign Budget Types
      { keywords: ['budget type', 'campaign budget types', 'budget type list'], url: '/guidelines/campaign-api/#get-list-of-campaign-budget-types', title: 'Get List of Campaign Budget Types', related: [
        { title: 'Campaign Resource Properties', path: '/guidelines/campaign-api/#campaign-resource-properties' },
      ]},
      
      // Campaign Management - Create Campaign POST
      { keywords: ['add campaign', 'create campaign api', 'new campaign api', 'campaign create endpoint'], url: '/guidelines/campaign-api/#create-campaign', title: 'Create Campaign', related: [
        { title: 'Create a Campaign Quickstart', path: '/quickstart-guides/create-a-campaign-quickstart/' },
        { title: 'Campaign Resource Properties', path: '/guidelines/campaign-api/#campaign-resource-properties' },
      ]},
      // Update Campaign - PATCH
      { keywords: ['update campaign', 'modify campaign', 'edit campaign', 'change campaign', 'campaign update'], url: '/guidelines/campaign-api/#update-campaign', title: 'Update Campaign', related: [
        { title: 'Get Campaign Details by ID', path: '/guidelines/campaign-api/#get-campaign-details-by-id' },
      ]},
      // Update Audience Targeting
      { keywords: ['update audience targeting', 'modify audience targeting', 'edit audience targeting', 'change audience targeting'], url: '/guidelines/campaign-api/#update-audience-targeting-in-campaigns', title: 'Update Audience Targeting', related: [
        { title: 'Get Campaign Details by ID', path: '/guidelines/campaign-api/#get-campaign-details-by-id' },
        { title: 'Audience Details List', path: '/guidelines/audience-api/#audience-details-list' }
      ]},
      // Update Campaign Status
      { keywords: ['campaign status', 'pause campaign', 'resume campaign', 'start campaign', 'stop campaign', 'approve campaign', 'reject campaign'], url: '/guidelines/campaign-api/#update-campaign-status', title: 'Update Campaign Status', related: [
        { title: 'Get Campaign Count by Status', path: '/guidelines/campaign-api/#get-campaign-count-by-status' },
      ]},
      // Delete Campaign
      { keywords: ['delete campaign', 'remove campaign', 'delete campaigns'], url: '/guidelines/campaign-api/#delete-campaign', title: 'Delete Campaign', related: [
        { title: 'Get List of Campaigns', path: '/guidelines/campaign-api/#get-list-of-campaigns' },
      ]},
      // Duplicate Campaign
      { keywords: ['duplicate campaign', 'copy campaign', 'clone campaign'], url: '/guidelines/campaign-api/#duplicate-campaign', title: 'Duplicate Campaign', related: [
        { title: 'Create Campaign', path: '/guidelines/campaign-api/#create-campaign' },
      ]},
      
      // Insertion Order Operations
      { keywords: ['insertion order', 'io', 'create io', 'insertion order list', 'io details'], url: '/guidelines/campaign-api/#insertion-order-operations', title: 'Insertion Order Operations', related: [
        { title: 'Create Insertion Order', path: '/guidelines/campaign-api/#create-insertion-order' },
        { title: 'Campaign API', path: '/guidelines/campaign-api/' },
      ]},
      { keywords: ['create insertion order', 'new io', 'add io'], url: '/guidelines/campaign-api/#create-insertion-order', title: 'Create Insertion Order', related: [
        { title: 'Insertion Order Operations', path: '/guidelines/campaign-api/#insertion-order-operations' },
      ]},
      { keywords: ['update insertion order', 'edit io', 'modify io'], url: '/guidelines/campaign-api/#update-insertion-order', title: 'Update Insertion Order', related: [
        { title: 'Insertion Order Operations', path: '/guidelines/campaign-api/#insertion-order-operations' },
      ]},
      
      // General campaign fallback
      { keywords: ['campaign', 'campaign api', 'advertising campaign'], url: '/guidelines/campaign-api/', title: 'Campaign API', related: [
        { title: 'Create a Campaign', path: '/quickstart-guides/create-a-campaign-quickstart/' },
        { title: 'Create a PG Campaign', path: '/tutorials/create-a-pg-campaign/' },
      ]},
      
      // Creative operations - CRUD (ordered by specificity)
      // Add/Create Creative - POST /api/v3/crt/creatives - adds creatives with metadata and files
      { keywords: ['add creative', 'add new creative', 'create creative', 'new creative', 'batch creative', 'multipart creative'], url: '/guidelines/creative-api/#add-new-creative', title: 'Add New Creative', related: [
        { title: 'Upload a Creative Quickstart', path: '/quickstart-guides/upload-a-creative-quickstart/' },
        { title: 'Get Creative Types List', path: '/guidelines/creative-api/#get-creative-types-list' },
      ]},
      // Update Creative Details - PATCH /api/v3/crt/creatives/{creativeId} - update name, external ID, remarks
      { keywords: ['update creative', 'edit creative', 'modify creative', 'change creative name', 'creative name', 'rename creative', 'external creative id', 'creative remarks'], url: '/guidelines/creative-api/#update-creative-details', title: 'Update Creative Details', related: [
        { title: 'Update Creative Details', path: '/guidelines/creative-api/#update-creative-details' },
      ]},
      // Update Creative Status - PATCH /api/v3/crt/creatives/update-status - approve/reject/change status
      { keywords: ['creative status', 'update creative status', 'approve creative', 'reject creative', 'creative approval', 'creative rejection', 'rejection reason'], url: '/guidelines/creative-api/#update-creative-status', title: 'Update Creative Status', related: [
        { title: 'Get Creative Status List', path: '/guidelines/creative-api/#get-creative-status-list' },
        { title: 'Update Creative Status', path: '/guidelines/creative-api/#update-creative-status' },
      ]},
      // Get List of Creatives - POST /api/v3/crt/creatives/list - search and filter creatives
      { keywords: ['get creative', 'list creatives', 'creative details', 'creative by id', 'find creative', 'search creative', 'filter creative'], url: '/guidelines/creative-api/#get-list-of-creatives-and-details', title: 'Get List of Creatives', related: [
        { title: 'Get List of Creatives', path: '/guidelines/creative-api/#get-list-of-creatives-and-details' },
        { title: 'Creative Details by ID', path: '/guidelines/creative-api/#creative-details-by-id' },
        { title: 'Get Creative Count by Type', path: '/guidelines/creative-api/#get-creative-count-by-type' },
      ]},
      // Create Creative Group - POST /api/v3/crt/creatives/groups - create group and add creatives
      { keywords: ['create creative group', 'new creative group', 'add creative group', 'creative group'], url: '/guidelines/creative-api/#create-new-creative-group', title: 'Create Creative Group', related: [
        { title: 'Create Creative Group', path: '/guidelines/creative-api/#create-new-creative-group' },
      ]},
      // Delete Creative Group - DELETE /api/v3/crt/creatives/groups - delete groups by ID
      { keywords: ['delete creative group', 'remove creative group'], url: '/guidelines/creative-api/#delete-creative-group', title: 'Delete Creative Group', related: [
        { title: 'Delete Creative Group', path: '/guidelines/creative-api/#delete-creative-group' },      
      ]},
      // Update Creative Groups - POST /api/v3/crt/creatives/groups/modify-creatives - add/remove creatives from groups
      { keywords: ['add creatives to group', 'remove creatives from group', 'modify creative group', 'manage creative group'], url: '/guidelines/creative-api/#update-creative-groups', title: 'Update Creative Groups', related: [
        { title: 'Create Creative Group', path: '/guidelines/creative-api/#create-new-creative-group' },
        { title: 'Get List of Creative Groups', path: '/guidelines/creative-api/#get-list-of-creative-groups' },
      ]},
      // Update Creative Group Name - PATCH /api/v3/crt/creatives/groups/{id} - rename group
      { keywords: ['rename creative group', 'update creative group name', 'change creative group name', 'edit creative group name'], url: '/guidelines/creative-api/#update-creative-group-name', title: 'Update Creative Group Name', related: [
        { title: 'Update Creative Group Name', path: '/guidelines/creative-api/#update-creative-group-name' },
      ]},
      // Duplicate Creatives - POST /api/v3/crt/creatives/duplicate - copy one or more creatives
      { keywords: ['duplicate creative', 'copy creative', 'clone creative', 'duplicate creatives'], url: '/guidelines/creative-api/#duplicate-creatives', title: 'Duplicate Creatives', related: [
        { title: 'Duplicate Creatives', path: '/guidelines/creative-api/#duplicate-creatives' }
      ]},
      // Duplicate Creative Group - POST /api/v3/crt/creatives/groups/duplicate/{id} - copy group with creatives
      { keywords: ['duplicate creative group', 'copy creative group', 'clone creative group'], url: '/guidelines/creative-api/#duplicate-creative-group', title: 'Duplicate Creative Group', related: [
        { title: 'Duplicate Creatives', path: '/guidelines/creative-api/#duplicate-creatives' },
        { title: 'Create Creative Group', path: '/guidelines/creative-api/#create-new-creative-group' },
      ]},
      // Compress Image - POST /api/v3/crt/image/compress - compress uploaded images
      { keywords: ['compress image', 'compress creative', 'image compression', 'reduce image size', 'optimize image'], url: '/guidelines/creative-api/#compress-uploaded-image-creative', title: 'Compress Image Creative', related: [
        { title: 'Compress Uploaded Image Creative', path: '/guidelines/creative-api/#compress-uploaded-image-creative' }
      ]},
      // Update Pixel URL - PATCH /api/v3/crt/creatives/pixel-url - update impression tracking pixel
      { keywords: ['pixel url', 'update pixel url', 'impression pixel', 'tracking pixel', 'pixel conversion'], url: '/guidelines/creative-api/#update-pixel-url', title: 'Update Pixel URL', related: [
        { title: 'Update Pixel URL', path: '/guidelines/creative-api/#update-pixel-url' },
        { title: 'Conversion API', path: '/guidelines/conversion-api/' },
      ]},
      // Update Click URL - PATCH /api/v3/crt/creatives/click-url - update landing page URL
      { keywords: ['click url', 'update click url', 'landing page url', 'destination url', 'click through url'], url: '/guidelines/creative-api/#update-click-url', title: 'Update Click URL', related: [
        { title: 'Update Click URL', path: '/guidelines/creative-api/#update-click-url' },
        { title: 'Conversion API', path: '/guidelines/conversion-api/' },
      ]},
      // Get Creative Types - GET /api/v3/crt/master/static/creative-types - list available types
      { keywords: ['creative types', 'creative type list', 'platform creative type', 'rtb creative type'], url: '/guidelines/creative-api/#get-creative-types-list', title: 'Get Creative Types List', related: [
        { title: 'Get Creative Types List', path: '/guidelines/creative-api/#get-creative-types-list' },
        { title: 'Add New Creative', path: '/guidelines/creative-api/#add-new-creative' },
      ]},
      // Get Creative Status - static status values
      { keywords: ['creative status list', 'creative statuses', 'status id'], url: '/guidelines/creative-api/#get-creative-status-list', title: 'Get Creative Status List', related: [
        { title: 'Get Creative Status List', path: '/guidelines/creative-api/#get-creative-status-list' },
        { title: 'Update Creative Status', path: '/guidelines/creative-api/#update-creative-status' },
        
      ]},
      // General creative fallback - Upload a Creative quickstart
      { keywords: ['creative', 'upload creative', 'ad creative', 'banner', 'video ad', 'native ad', 'html5', 'vast', 'daast', 'audio ad'], url: '/quickstart-guides/upload-a-creative-quickstart/', title: 'Upload a Creative', related: [
        { title: 'Creative API', path: '/guidelines/creative-api/' },
        { title: 'Asset API', path: '/guidelines/asset-api/' },
      ]},
      
      // Inventory - Quickstarts & Tutorials (entry points)
      { keywords: ['inventory quickstart', 'inventory tutorial', 'inventory start'], url: '/quickstart-guides/inventory-quickstart/', title: 'Inventory Quickstart', related: [
        { title: 'Inventory API', path: '/guidelines/inventory-api/' },
        { title: 'Create a Deal', path: '/tutorials/deal-guide/' },
      ]},
      { keywords: ['deal', 'deals', 'pmp', 'pmp deal', 'private marketplace', 'create deal'], url: '/tutorials/deal-guide/', title: 'Create a Deal', related: [
        { title: 'Inventory API', path: '/guidelines/inventory-api/' },
        { title: 'Optimize Your Inventory', path: '/tutorials/optimize-your-inventory/' },
      ]},
      { keywords: ['optimize inventory', 'inventory optimization'], url: '/tutorials/optimize-your-inventory/', title: 'Optimize Your Inventory', related: [
        { title: 'Inventory API', path: '/guidelines/inventory-api/' },
        { title: 'Create a Deal', path: '/tutorials/deal-guide/' },
      ]},
      
      // Inventory Details - GET /api/v3/inv/inventories/list
      { keywords: ['list inventories', 'inventory list', 'get inventories', 'search inventories', 'filter inventories'], url: '/guidelines/inventory-api/#get-list-of-inventories', title: 'Get List of Inventories', related: [
        { title: 'Get Inventories Count', path: '/guidelines/inventory-api/#get-inventories-count' },
        { title: 'Get Inventory Distribution', path: '/guidelines/inventory-api/#get-inventory-distribution' },
      ]},
      // Get Inventory Distribution
      { keywords: ['inventory distribution', 'inventory breakdown', 'inventory by country', 'inventory by device'], url: '/guidelines/inventory-api/#get-inventory-distribution', title: 'Get Inventory Distribution', related: [
        { title: 'Get List of Inventories', path: '/guidelines/inventory-api/#get-list-of-inventories' },
      ]},
      // Get Inventories Count
      { keywords: ['inventory count', 'count inventories', 'how many inventories', 'total inventories'], url: '/guidelines/inventory-api/#get-inventories-count', title: 'Get Inventories Count', related: [
        { title: 'Get List of Inventories', path: '/guidelines/inventory-api/#get-list-of-inventories' },
      ]},
      // Get Inventory Group Types
      { keywords: ['inventory group types', 'inventory types', 'open exchange', 'contextual inventory'], url: '/guidelines/inventory-api/#get-inventory-group-types', title: 'Get Inventory Group Types', related: [
        { title: 'Get List of Inventory Groups', path: '/guidelines/inventory-api/#get-list-of-inventory-groups' },
      ]},
      // Get List of Blocked Inventories
      { keywords: ['blocked inventories', 'blocklist', 'block list', 'blocked inventory list'], url: '/guidelines/inventory-api/#get-list-of-blocked-inventories', title: 'Get List of Blocked Inventories', related: [
        { title: 'Block Inventories', path: '/guidelines/inventory-api/#block-inventories' },
      ]},
      
      // Inventory Group Management
      { keywords: ['inventory group', 'inventory groups', 'list inventory groups', 'get inventory groups'], url: '/guidelines/inventory-api/#get-list-of-inventory-groups', title: 'Get List of Inventory Groups', related: [
        { title: 'Create Inventory Group', path: '/guidelines/inventory-api/#create-inventory-group' },
      ]},
      { keywords: ['create inventory group', 'new inventory group', 'add inventory group'], url: '/guidelines/inventory-api/#create-inventory-group', title: 'Create Inventory Group', related: [
        { title: 'Update Inventory Group', path: '/guidelines/inventory-api/#update-inventory-group' },
      ]},
      { keywords: ['update inventory group', 'edit inventory group', 'modify inventory group'], url: '/guidelines/inventory-api/#update-inventory-group', title: 'Update Inventory Group', related: [
        { title: 'Delete Inventory Group', path: '/guidelines/inventory-api/#delete-inventory-group' },
      ]},
      { keywords: ['delete inventory group', 'remove inventory group'], url: '/guidelines/inventory-api/#delete-inventory-group', title: 'Delete Inventory Group', related: [
        { title: 'Get List of Inventory Groups', path: '/guidelines/inventory-api/#get-list-of-inventory-groups' },
      ]},
      
      // PMP Deals
      { keywords: ['pg deal', 'programmatic guaranteed deal', 'pmp deals', 'private marketplace deal'], url: '/guidelines/inventory-api/#pmp-deals', title: 'PMP Deals', related: [
        { title: 'Create a Deal', path: '/tutorials/deal-guide/' },
        { title: 'Get List of PMP Deals', path: '/guidelines/inventory-api/#get-list-of-pmp-deals' },
      ]},
      { keywords: ['list pmp deals', 'get pmp deals', 'pmp deal list'], url: '/guidelines/inventory-api/#get-list-of-pmp-deals', title: 'Get List of PMP Deals', related: [
        { title: 'Create PMP Deal', path: '/guidelines/inventory-api/#create-pmp-deal' },
      ]},
      { keywords: ['create pmp deal', 'add pmp deal', 'new pmp deal'], url: '/guidelines/inventory-api/#create-pmp-deal', title: 'Create PMP Deal', related: [
        { title: 'Update PMP Deal', path: '/guidelines/inventory-api/#update-pmp-deal' },
      ]},
      
      // Block/Unblock Inventories
      { keywords: ['block inventory', 'block inventories', 'add to blocklist'], url: '/guidelines/inventory-api/#block-inventories', title: 'Block Inventories', related: [
        { title: 'Unblock Inventories', path: '/guidelines/inventory-api/#unblock-inventories' },
      ]},
      { keywords: ['unblock inventory', 'unblock inventories', 'remove from blocklist'], url: '/guidelines/inventory-api/#unblock-inventories', title: 'Unblock Inventories', related: [
        { title: 'Get List of Blocked Inventories', path: '/guidelines/inventory-api/#get-list-of-blocked-inventories' },
      ]},
      
      // General inventory fallback
      { keywords: ['inventory', 'inventory targeting', 'inventory api'], url: '/guidelines/inventory-api/', title: 'Inventory API', related: [
        { title: 'Create a Deal', path: '/tutorials/deal-guide/' },
        { title: 'Optimize Your Inventory', path: '/tutorials/optimize-your-inventory/' },
      ]},
      
      // Reports API - Quickstarts & Tutorials (entry points)
      { keywords: ['report quickstart', 'reporting quickstart', 'report tutorial'], url: '/quickstart-guides/reporting-api-quickstart-guide/', title: 'Reporting API Quickstart', related: [
        { title: 'Reports API', path: '/guidelines/reports-api/' },
        { title: 'Schedule a Report', path: '/quickstart-guides/schedule-report-api-quickstart-guide/' },
      ]},
      { keywords: ['schedule report', 'schedule report quickstart', 'scheduled report tutorial'], url: '/quickstart-guides/schedule-report-api-quickstart-guide/', title: 'Schedule Report Quickstart', related: [
        { title: 'Reports API', path: '/guidelines/reports-api/' },
        { title: 'Run a Report', path: '/quickstart-guides/reporting-api-quickstart-guide/' },
      ]},
      
      // Report Details - GET operations
      { keywords: ['list reports', 'get reports', 'report list', 'all reports'], url: '/guidelines/reports-api/#get-a-list-of-reports', title: 'Get a List of Reports', related: [
        { title: 'Get Report by ID', path: '/guidelines/reports-api/#get-report-by-id' },
        { title: 'Create Report', path: '/guidelines/reports-api/#create-report' },
      ]},
      { keywords: ['get report by id', 'report by id', 'report details', 'specific report'], url: '/guidelines/reports-api/#get-report-by-id', title: 'Get Report by ID', related: [
        { title: 'Get a List of Reports', path: '/guidelines/reports-api/#get-a-list-of-reports' },
      ]},
      
      // Report CRUD Operations
      { keywords: ['create report', 'new report', 'add report', 'generate report'], url: '/guidelines/reports-api/#create-report', title: 'Create Report', related: [
        { title: 'Execute Report', path: '/guidelines/reports-api/#execute-report' },
        { title: 'Update Report', path: '/guidelines/reports-api/#update-report' },
      ]},
      { keywords: ['update report', 'edit report', 'modify report'], url: '/guidelines/reports-api/#update-report', title: 'Update Report', related: [
        { title: 'Create Report', path: '/guidelines/reports-api/#create-report' },
        { title: 'Delete Report', path: '/guidelines/reports-api/#delete-report' },
      ]},
      { keywords: ['delete report', 'remove report'], url: '/guidelines/reports-api/#delete-report', title: 'Delete Report', related: [
        { title: 'Get a List of Reports', path: '/guidelines/reports-api/#get-a-list-of-reports' },
      ]},
      { keywords: ['execute report', 'run report', 'trigger report'], url: '/guidelines/reports-api/#execute-report', title: 'Execute Report', related: [
        { title: 'Create Report', path: '/guidelines/reports-api/#create-report' },
        { title: 'Schedule Report', path: '/guidelines/reports-api/#schedule-report' },
      ]},
      
      // Report Scheduling
      { keywords: ['schedule report', 'report schedule', 'scheduled report', 'recurring report', 'email report'], url: '/guidelines/reports-api/#schedule-report', title: 'Schedule Report', related: [
        { title: 'Get Report Delivery Frequency Types', path: '/guidelines/reports-api/#get-report-delivery-frequency-types' },
        { title: 'Schedule Report Quickstart', path: '/quickstart-guides/schedule-report-api-quickstart-guide/' },
      ]},
      
      // Report Configuration Types
      { keywords: ['report delivery frequency', 'delivery frequency types', 'report frequency'], url: '/guidelines/reports-api/#get-report-delivery-frequency-types', title: 'Get Report Delivery Frequency Types', related: [
        { title: 'Schedule Report', path: '/guidelines/reports-api/#schedule-report' },
      ]},
      { keywords: ['report file types', 'report format', 'csv', 'xlsx', 'report export format'], url: '/guidelines/reports-api/#get-report-file-types', title: 'Get Report File Types', related: [
        { title: 'Create Report', path: '/guidelines/reports-api/#create-report' },
      ]},
      { keywords: ['report request types', 'report type'], url: '/guidelines/reports-api/#get-report-request-types', title: 'Get Report Request Types', related: [
        { title: 'Create Report', path: '/guidelines/reports-api/#create-report' },
      ]},
      
      // Report Dimensions & Metrics
      { keywords: ['report dimensions', 'report metrics', 'dimensions and metrics', 'available metrics', 'available dimensions'], url: '/guidelines/reports-api/#get-dimensions-and-metrics-details', title: 'Get Dimensions and Metrics Details', related: [
        { title: 'Create Report', path: '/guidelines/reports-api/#create-report' },
        { title: 'Dashboard Dimensions', path: '/guidelines/dashboard-api/#get-dimensions-and-metrics-for-dashboard' },
      ]},
      
      // General Reports fallback
      { keywords: ['report', 'reporting', 'analytics', 'metrics', 'performance', 'stats', 'reports api'], url: '/quickstart-guides/reporting-api-quickstart-guide/', title: 'Run a Report', related: [
        { title: 'Reports API', path: '/guidelines/reports-api/' },
        { title: 'Schedule a Report', path: '/quickstart-guides/schedule-report-api-quickstart-guide/' },
      ]},
      
      // Audience - Quickstarts & Tutorials (entry points)
      { keywords: ['contextual', 'contextual audience', 'contextual targeting', 'keyword targeting', 'url targeting'], url: '/quickstart-guides/contextual-audience-quickstart/', title: 'Create a Contextual Audience', related: [
        { title: 'Audience API', path: '/guidelines/audience-api/' },
        { title: 'Upload a Matched Audience', path: '/tutorials/upload-a-matched-audience/' },
      ]},
      { keywords: ['matched audience', 'upload audience', 'first party data', 'first party audience', 'customer list', 'csv audience'], url: '/tutorials/upload-a-matched-audience/', title: 'Upload a Matched Audience', related: [
        { title: 'Audience API', path: '/guidelines/audience-api/' },
        { title: 'Contextual Audience', path: '/quickstart-guides/contextual-audience-quickstart/' },
      ]},
      
      // Audience Details - GET /api/v3/audience/list - list Audiences with filtering
      { keywords: ['audience list', 'list audiences', 'get audiences', 'audience details', 'filter audiences', 'search audiences'], url: '/guidelines/audience-api/#audience-details-list', title: 'Audience Details List', related: [
        { title: 'Basic Audience Details', path: '/guidelines/audience-api/#basic-audience-details' },
        { title: 'Audience Type List', path: '/guidelines/audience-api/#audience-type-list' },
      ]},
      // Basic Audience Details - POST /api/v3/audience/basic/list - basic list of Audience details
      { keywords: ['basic audience details', 'audience basic list', 'simple audience list'], url: '/guidelines/audience-api/#basic-audience-details', title: 'Basic Audience Details', related: [
        { title: 'Audience Details List', path: '/guidelines/audience-api/#audience-details-list' },
      ]},
      // Audience Count by Status - POST /api/v3/audience/count-by-status
      { keywords: ['audience count status', 'count audiences', 'audience status count', 'how many audiences'], url: '/guidelines/audience-api/#audience-count-by-status', title: 'Audience Count by Status', related: [
        { title: 'Audience Status List', path: '/guidelines/audience-api/#audience-status-list' },
      ]},
      // Audience Count by Type - GET /api/v3/audience/count-by-type
      { keywords: ['audience count type', 'count audience types', 'audience type count'], url: '/guidelines/audience-api/#audience-count-by-type', title: 'Audience Count by Type', related: [
        { title: 'Audience Type List', path: '/guidelines/audience-api/#audience-type-list' },
      ]},
      
      // Audience Management - PATCH /api/v3/audience/{audienceId}/update-name
      { keywords: ['update audience name', 'rename audience', 'change audience name', 'edit audience name'], url: '/guidelines/audience-api/#update-audience-name', title: 'Update Audience Name', related: [
        { title: 'Audience Details List', path: '/guidelines/audience-api/#audience-details-list' },
      ]},
      // Regenerate Audience - PATCH /api/v3/audience/{audienceId}/regenerate
      { keywords: ['regenerate audience', 'failed audience', 'retry audience', 'reprocess audience'], url: '/guidelines/audience-api/#regenerate-audience', title: 'Regenerate Audience', related: [
        { title: 'Audience Status List', path: '/guidelines/audience-api/#audience-status-list' },
      ]},
      // Get Audience Insights - GET /api/v3/audience/{audienceId}/insights
      { keywords: ['audience insights', 'get audience insights', 'audience analytics', 'audience breakdown'], url: '/guidelines/audience-api/#get-audience-insights', title: 'Get Audience Insights', related: [
        { title: 'Create Audience Insights', path: '/guidelines/audience-api/#create-audience-insights' },
        { title: 'Insights API', path: '/guidelines/insights-api/' },
      ]},
      // Create Audience Insights - POST /api/v3/audience/insights/add
      { keywords: ['create audience insights', 'generate audience insights', 'add audience insights'], url: '/guidelines/audience-api/#create-audience-insights', title: 'Create Audience Insights', related: [
        { title: 'Get Audience Insights', path: '/guidelines/audience-api/#get-audience-insights' },
        { title: 'Insights API', path: '/guidelines/insights-api/' },
      ]},
      // Attach Data Partner - POST /api/v3/audience/attach-data-partner
      { keywords: ['attach data partner', 'data partner audience', 'add data partner', 'audience data partner'], url: '/guidelines/audience-api/#attach-data-partner', title: 'Attach Data Partner', related: [
        { title: 'Data Partners List', path: '/guidelines/audience-api/#data-partners-list-for-matched-audience' },
      ]},
      // Delete Audience - DELETE /api/v3/audience
      { keywords: ['delete audience', 'remove audience', 'delete audiences'], url: '/guidelines/audience-api/#delete-audience', title: 'Delete Audience', related: [
        { title: 'Audience Details List', path: '/guidelines/audience-api/#audience-details-list' },
      ]},
      
      // Matched Audiences - POST /api/v3/audience/matched - upload file with user data
      { keywords: ['create matched audience', 'new matched audience', 'upload matched audience', 'matched audience file', 'multipart audience'], url: '/guidelines/audience-api/#create-matched-audience', title: 'Create Matched Audience', related: [
        { title: 'Upload a Matched Audience Tutorial', path: '/tutorials/upload-a-matched-audience/' },
        { title: 'Data Formats List', path: '/guidelines/audience-api/#data-formats-list-for-matched-audience' },
      ]},
      // Update Matched Audience - PATCH /api/v3/audience/matched/{audienceId}
      { keywords: ['update matched audience', 'edit matched audience', 'matched audience status', 'matched audience data cost', 'reject matched audience'], url: '/guidelines/audience-api/#update-matched-audience', title: 'Update Matched Audience', related: [
        { title: 'Matched Audience Details', path: '/guidelines/audience-api/#matched-audience-details' },
      ]},
      // Data Partners List - GET for matched audience data partners
      { keywords: ['data partners', 'matched audience partners', 'data provider', 'audience provider'], url: '/guidelines/audience-api/#data-partners-list-for-matched-audience', title: 'Data Partners List', related: [
        { title: 'Attach Data Partner', path: '/guidelines/audience-api/#attach-data-partner' },
      ]},
      // Data Formats List - GET /api/v3/audience/static/data-formats - hashed data formats
      { keywords: ['data formats', 'hashed data', 'md5 hash', 'sha1 hash', 'sha256', 'audience hash format'], url: '/guidelines/audience-api/#data-formats-list-for-matched-audience', title: 'Data Formats List', related: [
        { title: 'Create Matched Audience', path: '/guidelines/audience-api/#create-matched-audience' },
      ]},
      // Download Matched Audience File - GET /api/v3/audience/matched/{audienceId}/file-url
      { keywords: ['download matched audience', 'audience file url', 'download audience file', 's3 audience url'], url: '/guidelines/audience-api/#download-matched-audience-file', title: 'Download Matched Audience File', related: [
        { title: 'Matched Audience Details', path: '/guidelines/audience-api/#matched-audience-details' },
      ]},
      
      // Segmented Audiences - POST /api/v3/audience/segmented - create with equation
      { keywords: ['create segmented audience', 'segmented audience', 'segment equation', 'audience segments', 'combine segments'], url: '/guidelines/audience-api/#create-segmented-audience', title: 'Create Segmented Audience', related: [
        { title: 'Master API', path: '/guidelines/master-api/' },
        { title: 'Update Segmented Audience', path: '/guidelines/audience-api/#update-segmented-audience' },
      ]},
      // Update Segmented Audience - PUT /api/v3/audience/segmented/{audienceId}
      { keywords: ['update segmented audience', 'edit segmented audience', 'modify segment equation', 'change audience segments'], url: '/guidelines/audience-api/#update-segmented-audience', title: 'Update Segmented Audience', related: [
        { title: 'Create Segmented Audience', path: '/guidelines/audience-api/#create-segmented-audience' },
      ]},
      
      // Retargeted Audiences - POST /api/v3/audience/retargeted - create with tracking tag
      { keywords: ['create retargeted audience', 'retargeted audience', 'retargeting tag', 'tracking tag', 'pixel tag', 'website retargeting'], url: '/guidelines/audience-api/#create-retargeted-audience', title: 'Create Retargeted Audience', related: [
        { title: 'Update Retargeted Audience', path: '/guidelines/audience-api/#update-retargeted-audience' },
        { title: 'Retargeted Audience Email Notification', path: '/guidelines/audience-api/#retargeted-audience-email-notification' },
      ]},
      // Update Retargeted Audience - PUT /api/v3/audience/retargeted/{audienceId}
      { keywords: ['update retargeted audience', 'edit retargeted audience', 'modify retargeting', 'change retarget settings'], url: '/guidelines/audience-api/#update-retargeted-audience', title: 'Update Retargeted Audience', related: [
        { title: 'Create Retargeted Audience', path: '/guidelines/audience-api/#create-retargeted-audience' },
      ]},
      // Retargeted Audience Email Notification - POST send pixel code via email
      { keywords: ['retarget email', 'pixel code email', 'send pixel code', 'email retarget pixel'], url: '/guidelines/audience-api/#retargeted-audience-email-notification', title: 'Retargeted Audience Email Notification', related: [
        { title: 'Create Retargeted Audience', path: '/guidelines/audience-api/#create-retargeted-audience' },
      ]},
      
      // Geofarmed Audiences - POST /api/v3/audience/geo-farmed - define by geographical area
      { keywords: ['geofarmed audience', 'geofarm', 'geo-farmed', 'geographical audience', 'location audience', 'geofence', 'custom area audience', 'radius targeting'], url: '/guidelines/audience-api/#create-geofarmed-audience', title: 'Create Geofarmed Audience', related: [
        { title: 'Geofarmed Audience Details', path: '/guidelines/audience-api/#geofarmed-audience-details' },
        { title: 'Frequency Type List', path: '/guidelines/audience-api/#frequency-type-list' },
      ]},
      
      // Contextual Audiences - POST /api/v3/audience/contextual - keywords/URLs targeting
      { keywords: ['create contextual audience', 'contextual keywords', 'contextual urls', 'content targeting', 'keyword audience'], url: '/guidelines/audience-api/#create-contextual-audience', title: 'Create Contextual Audience', related: [
        { title: 'Contextual Audience Quickstart', path: '/quickstart-guides/contextual-audience-quickstart/' },
        { title: 'Validate URL', path: '/guidelines/audience-api/#validate-url-for-contextual-audience' },
      ]},
      // Validate URL for Contextual Audience - POST validate URLs for targeting
      { keywords: ['validate contextual url', 'validate url', 'programmatic url', 'check url targeting'], url: '/guidelines/audience-api/#validate-url-for-contextual-audience', title: 'Validate URL for Contextual Audience', related: [
        { title: 'Create Contextual Audience', path: '/guidelines/audience-api/#create-contextual-audience' },
      ]},
      
      // Lookalike Audiences - GET/POST /api/v3/audience/lookalike
      { keywords: ['lookalike audience', 'similar audience', 'audience expansion', 'create lookalike', 'lookalike details', 'audience modeling'], url: '/guidelines/audience-api/#create-lookalike-audience', title: 'Create Lookalike Audience', related: [
        { title: 'Get Lookalike Audience Details', path: '/guidelines/audience-api/#get-lookalike-audience-details' },
        { title: 'Audience Details List', path: '/guidelines/audience-api/#audience-details-list' },
      ]},
      
      // Campaign Audiences - POST /api/v3/audience/campaign
      { keywords: ['campaign audience', 'retarget campaign', 'campaign retargeting', 'create campaign audience'], url: '/guidelines/audience-api/#create-campaign-audience', title: 'Create Campaign Audience', related: [
        { title: 'Campaign Audience Details', path: '/guidelines/audience-api/#campaign-audience-details' },
        { title: 'Campaign Audience History', path: '/guidelines/audience-api/#get-campaign-audience-history' },
      ]},
      // Campaign Audience History - POST /api/v3/audience/campaigns/audience-history
      { keywords: ['campaign audience history', 'audience history', 'historical audience', 'past campaign audiences'], url: '/guidelines/audience-api/#get-campaign-audience-history', title: 'Get Campaign Audience History', related: [
        { title: 'Campaign Audience Details', path: '/guidelines/audience-api/#campaign-audience-details' },
      ]},
      
      // Pre-bid Audiences
      { keywords: ['pre-bid audience', 'prebid audience', 'pre bid segment', 'prebid segment', 'third party audience'], url: '/guidelines/audience-api/#pre-bid-audiences', title: 'Pre-bid Audiences', related: [
        { title: 'Audience Type List', path: '/guidelines/audience-api/#audience-type-list' },
      ]},
      
      // Static/Reference - Audience Type List
      { keywords: ['audience types', 'audience type list', 'audience type id', 'type of audience'], url: '/guidelines/audience-api/#audience-type-list', title: 'Audience Type List', related: [
        { title: 'Audience Subtype List', path: '/guidelines/audience-api/#audience-subtype-list' },
      ]},
      // Audience Subtype List
      { keywords: ['audience subtypes', 'audience subtype list', 'audience subtype id', 'hcp audience', 'patient audience', 'nurse audience'], url: '/guidelines/audience-api/#audience-subtype-list', title: 'Audience Subtype List', related: [
        { title: 'Audience Type List', path: '/guidelines/audience-api/#audience-type-list' },
      ]},
      // Audience Status List
      { keywords: ['audience status', 'audience status list', 'ready audience', 'pending audience', 'failed audience status', 'rejected audience'], url: '/guidelines/audience-api/#audience-status-list', title: 'Audience Status List', related: [
        { title: 'Audience Count by Status', path: '/guidelines/audience-api/#audience-count-by-status' },
      ]},
      // Frequency Type List - for Geofarmed
      { keywords: ['frequency type', 'geofarmed frequency', 'visit frequency', 'weekly frequency', 'monthly frequency'], url: '/guidelines/audience-api/#frequency-type-list', title: 'Frequency Type List', related: [
        { title: 'Create Geofarmed Audience', path: '/guidelines/audience-api/#create-geofarmed-audience' },
      ]},
      // Reach Range List - for Segment filtering
      { keywords: ['reach range', 'audience reach', 'segment reach', 'filter by reach'], url: '/guidelines/audience-api/#reach-range-list-for-audience-segment', title: 'Reach Range List', related: [
        { title: 'Price Range List', path: '/guidelines/audience-api/#price-range-list-for-audience-segment' },
      ]},
      // Price Range List - for Segment filtering
      { keywords: ['price range', 'cpm range', 'segment price', 'filter by cpm', 'audience cost'], url: '/guidelines/audience-api/#price-range-list-for-audience-segment', title: 'Price Range List', related: [
        { title: 'Reach Range List', path: '/guidelines/audience-api/#reach-range-list-for-audience-segment' },
      ]},
      // General audience fallback
      { keywords: ['audience', 'targeting', 'audience api'], url: '/guidelines/audience-api/', title: 'Audience API', related: [
        { title: 'Upload a Matched Audience', path: '/tutorials/upload-a-matched-audience/' },
        { title: 'Contextual Audience Quickstart', path: '/quickstart-guides/contextual-audience-quickstart/' },
      ]},
      
      // Bid Model API - Quickstarts & Tutorials (entry points)
      { keywords: ['bid model quickstart', 'bid model tutorial', 'bid model start'], url: '/quickstart-guides/bid-model-quickstart/', title: 'Bid Model Quickstart', related: [
        { title: 'Bid Model API', path: '/guidelines/bid-model-api/' },
        { title: 'Create a Bid Model', path: '/tutorials/create-a-bid-model/' },
      ]},
      { keywords: ['create bid model', 'new bid model', 'bid model tutorial', 'make bid model'], url: '/tutorials/create-a-bid-model/', title: 'Create a Bid Model', related: [
        { title: 'Bid Model API', path: '/guidelines/bid-model-api/' },
        { title: 'Campaign API', path: '/guidelines/campaign-api/' },
      ]},
      
      // Bid Model API - Bundle Operations
      { keywords: ['bid model bundles', 'list bid model', 'get bid models', 'bid bundles'], url: '/guidelines/bid-model-api/#get-list-of-bid-model-bundles', title: 'Get List of Bid Model Bundles', related: [
        { title: 'Add Bid Model Bundles', path: '/guidelines/bid-model-api/#add-bid-model-bundles' },
      ]},
      { keywords: ['add bid model', 'create bid model bundle', 'new bid model bundle'], url: '/guidelines/bid-model-api/#add-bid-model-bundles', title: 'Add Bid Model Bundles', related: [
        { title: 'Update Bid Model', path: '/guidelines/bid-model-api/#manage-bid-modeling' },
      ]},
      { keywords: ['update bid model', 'edit bid model', 'modify bid model', 'manage bid model', 'create bid model'], url: '/guidelines/bid-model-api/#manage-bid-modeling', title: 'Update Bid Model', related: [
        { title: 'Get Modeled Entities', path: '/guidelines/bid-model-api/#get-modeled-entities' },
      ]},
      { keywords: ['delete bid model', 'remove bid model'], url: '/guidelines/bid-model-api/#delete-bid-model', title: 'Delete Bid Model', related: [
        { title: 'Get List of Bid Model Bundles', path: '/guidelines/bid-model-api/#get-list-of-bid-model-bundles' },
      ]},
      
      // Bid Model API - Dimension Statistics
      { keywords: ['modeled entities', 'bid model entities', 'entity statistics'], url: '/guidelines/bid-model-api/#get-modeled-entities', title: 'Get Modeled Entities', related: [
        { title: 'Campaign Dimension Statistics', path: '/guidelines/bid-model-api/#get-campaign-dimension-statistics' },
      ]},
      { keywords: ['campaign dimension statistics', 'dimension stats', 'bid model statistics'], url: '/guidelines/bid-model-api/#get-campaign-dimension-statistics', title: 'Get Campaign Dimension Statistics', related: [
        { title: 'Dimension Specific Spending', path: '/guidelines/bid-model-api/#get-dimension-specific-spending' },
      ]},
      { keywords: ['dimension spending', 'dimension specific spending', 'bid model spending'], url: '/guidelines/bid-model-api/#get-dimension-specific-spending', title: 'Get Dimension Specific Spending', related: [
        { title: 'Campaign Dimension Statistics', path: '/guidelines/bid-model-api/#get-campaign-dimension-statistics' },
      ]},
      
      // General Bid Model fallback
      { keywords: ['bid', 'bidding', 'bid model', 'cpm', 'cpc', 'optimization', 'bid model api'], url: '/guidelines/bid-model-api/', title: 'Bid Model API', related: [
        { title: 'Create a Bid Model', path: '/tutorials/create-a-bid-model/' },
        { title: 'Campaign API', path: '/guidelines/campaign-api/' },
      ]},
      
      // Conversion API - Quickstarts & Tutorials (entry points)
      { keywords: ['conversion quickstart', 'conversion tutorial', 'conversion start'], url: '/quickstart-guides/conversion-quickstart/', title: 'Conversion Quickstart', related: [
        { title: 'Conversion API', path: '/guidelines/conversion-api/' },
        { title: 'Create a Conversion', path: '/tutorials/create-a-conversion/' },
      ]},
      { keywords: ['create conversion tutorial', 'conversion tutorial', 'make conversion'], url: '/tutorials/create-a-conversion/', title: 'Create a Conversion', related: [
        { title: 'Conversion API', path: '/guidelines/conversion-api/' },
      ]},
      
      // Conversion API - GET Operations
      { keywords: ['conversion details', 'get conversion', 'conversion by id'], url: '/guidelines/conversion-api/#get-conversion-details-by-id', title: 'Get Conversion Details by ID', related: [
        { title: 'Get List of Conversions', path: '/guidelines/conversion-api/#get-list-of-conversions' },
      ]},
      { keywords: ['list conversions', 'get conversions', 'all conversions', 'conversion list'], url: '/guidelines/conversion-api/#get-list-of-conversions', title: 'Get List of Conversions', related: [
        { title: 'Create Pixel Conversion', path: '/guidelines/conversion-api/#create-pixel-conversion' },
      ]},
      { keywords: ['conversion types', 'list conversion types', 'available conversion types'], url: '/guidelines/conversion-api/#get-list-of-conversion-types', title: 'Get List of Conversion Types', related: [
        { title: 'Get List of Conversions', path: '/guidelines/conversion-api/#get-list-of-conversions' },
      ]},
      { keywords: ['conversion status', 'conversion status list', 'available conversion status'], url: '/guidelines/conversion-api/#get-list-of-conversion-status', title: 'Get List of Conversion Status', related: [
        { title: 'Get List of Conversions', path: '/guidelines/conversion-api/#get-list-of-conversions' },
      ]},
      
      // Conversion API - Create Operations
      { keywords: ['create pixel conversion', 'pixel conversion', 'new pixel', 'add pixel'], url: '/guidelines/conversion-api/#create-pixel-conversion', title: 'Create Pixel Conversion', related: [
        { title: 'Create Postback Conversion', path: '/guidelines/conversion-api/#create-postback-conversion' },
        { title: 'Update Conversion', path: '/guidelines/conversion-api/#update-conversion' },
      ]},
      { keywords: ['create postback', 'postback conversion', 'new postback', 's2s conversion'], url: '/guidelines/conversion-api/#create-postback-conversion', title: 'Create Postback Conversion', related: [
        { title: 'Create Pixel Conversion', path: '/guidelines/conversion-api/#create-pixel-conversion' },
      ]},
      
      // Conversion API - Update/Delete
      { keywords: ['update conversion', 'edit conversion', 'modify conversion'], url: '/guidelines/conversion-api/#update-conversion', title: 'Update Conversion', related: [
        { title: 'Delete Conversion', path: '/guidelines/conversion-api/#delete-conversion' },
      ]},
      { keywords: ['delete conversion', 'remove conversion'], url: '/guidelines/conversion-api/#delete-conversion', title: 'Delete Conversion', related: [
        { title: 'Get List of Conversions', path: '/guidelines/conversion-api/#get-list-of-conversions' },
      ]},
      
      // General Conversion fallback
      { keywords: ['conversion', 'tracking', 'pixel', 'attribution', 'postback', 'conversion api'], url: '/guidelines/conversion-api/', title: 'Conversion API', related: [
        { title: 'Create a Conversion', path: '/tutorials/create-a-conversion/' },
      ]},
      
      // Insights API - Quickstarts & Tutorials (entry points)
      { keywords: ['insights quickstart', 'insights tutorial', 'insights start'], url: '/quickstart-guides/insights-quickstart/', title: 'Insights Quickstart', related: [
        { title: 'Insights API', path: '/guidelines/insights-api/' },
        { title: 'Create an Insights Report', path: '/tutorials/create-an-insights-report/' },
      ]},
      { keywords: ['create insights report', 'insights report tutorial', 'make insights report'], url: '/tutorials/create-an-insights-report/', title: 'Create an Insights Report', related: [
        { title: 'Insights API', path: '/guidelines/insights-api/' },
      ]},
      
      // Insights API - GET Operations
      { keywords: ['list insights', 'get insights', 'insights list', 'all insights'], url: '/guidelines/insights-api/#get-a-list-of-insights', title: 'Get a List of Insights', related: [
        { title: 'Get Campaign Bidding Insights', path: '/guidelines/insights-api/#get-campaign-bidding-insights' },
      ]},
      { keywords: ['campaign bidding insights', 'bidding insights', 'campaign insights'], url: '/guidelines/insights-api/#get-campaign-bidding-insights', title: 'Get Campaign Bidding Insights', related: [
        { title: 'Get a List of Insights', path: '/guidelines/insights-api/#get-a-list-of-insights' },
      ]},
      { keywords: ['insights types', 'list insights types', 'available insights types'], url: '/guidelines/insights-api/#get-insights-types', title: 'Get Insights Types', related: [
        { title: 'Get Insights Status', path: '/guidelines/insights-api/#get-insights-status' },
      ]},
      { keywords: ['insights status', 'insights status list'], url: '/guidelines/insights-api/#get-insights-status', title: 'Get Insights Status', related: [
        { title: 'Get Insights Types', path: '/guidelines/insights-api/#get-insights-types' },
      ]},
      
      // Insights API - VLD/PLD Reports
      { keywords: ['vld report', 'voter level data', 'vld insights'], url: '/guidelines/insights-api/#vld-reports', title: 'VLD Reports', related: [
        { title: 'Political Vertical', path: '/political-vertical/' },
        { title: 'PLD Reports', path: '/guidelines/insights-api/#pld-reports' },
      ]},
      { keywords: ['pld report', 'provider level data', 'pld insights'], url: '/guidelines/insights-api/#pld-reports', title: 'PLD Reports', related: [
        { title: 'Healthcare Vertical', path: '/healthcare-vertical/' },
        { title: 'VLD Reports', path: '/guidelines/insights-api/#vld-reports' },
      ]},
      { keywords: ['sls report', 'sls insights', 'sales insights'], url: '/guidelines/insights-api/#sls-reports', title: 'SLS Reports', related: [
        { title: 'Get a List of Insights', path: '/guidelines/insights-api/#get-a-list-of-insights' },
      ]},
      
      // General Insights fallback
      { keywords: ['insights', 'audience insights', 'insights api'], url: '/guidelines/insights-api/', title: 'Insights API', related: [
        { title: 'Create an Insights Report', path: '/tutorials/create-an-insights-report/' },
      ]},
      
      // Planner API - Proposal Operations
      { keywords: ['proposal details', 'get proposal', 'proposal by id'], url: '/guidelines/planner-api/#get-proposal-details-by-id', title: 'Get Proposal Details by ID', related: [
        { title: 'Get List of Proposals', path: '/guidelines/planner-api/#get-list-of-proposals' },
      ]},
      { keywords: ['list proposals', 'get proposals', 'all proposals', 'proposal list'], url: '/guidelines/planner-api/#get-list-of-proposals', title: 'Get List of Proposals', related: [
        { title: 'Create Proposal', path: '/guidelines/planner-api/#create-proposal' },
      ]},
      { keywords: ['create proposal', 'new proposal', 'add proposal'], url: '/guidelines/planner-api/#create-proposal', title: 'Create Proposal', related: [
        { title: 'Update Proposal', path: '/guidelines/planner-api/#update-proposal' },
        { title: 'Validate Proposal', path: '/guidelines/planner-api/#validate-proposal' },
      ]},
      { keywords: ['update proposal', 'edit proposal', 'modify proposal'], url: '/guidelines/planner-api/#update-proposal', title: 'Update Proposal', related: [
        { title: 'Delete Proposal', path: '/guidelines/planner-api/#delete-proposal' },
      ]},
      { keywords: ['delete proposal', 'remove proposal'], url: '/guidelines/planner-api/#delete-proposal', title: 'Delete Proposal', related: [
        { title: 'Get List of Proposals', path: '/guidelines/planner-api/#get-list-of-proposals' },
      ]},
      { keywords: ['validate proposal', 'proposal validation', 'check proposal'], url: '/guidelines/planner-api/#validate-proposal', title: 'Validate Proposal', related: [
        { title: 'Generate IO from Proposal', path: '/guidelines/planner-api/#generate-io-from-proposal' },
      ]},
      { keywords: ['generate io', 'io from proposal', 'create io from proposal', 'proposal to io'], url: '/guidelines/planner-api/#generate-io-from-proposal', title: 'Generate IO from Proposal', related: [
        { title: 'Validate Proposal', path: '/guidelines/planner-api/#validate-proposal' },
        { title: 'Insertion Order Operations', path: '/guidelines/campaign-api/#insertion-order-operations' },
      ]},
      { keywords: ['proposal status', 'proposal status list'], url: '/guidelines/planner-api/#proposal-status-list', title: 'Proposal Status List', related: [
        { title: 'Get List of Proposals', path: '/guidelines/planner-api/#get-list-of-proposals' },
      ]},
      
      // General Planner fallback
      { keywords: ['planner', 'proposal', 'plan campaign', 'planner api'], url: '/guidelines/planner-api/', title: 'Planner API', related: [
        { title: 'Create a Campaign', path: '/quickstart-guides/create-a-campaign-quickstart/' },
      ]},
      
      // Tutorials - Additional entries (not covered above)
      { keywords: ['pg campaign', 'programmatic guaranteed campaign'], url: '/tutorials/create-a-pg-campaign/', title: 'Create a PG Campaign', related: [
        { title: 'Campaign API', path: '/guidelines/campaign-api/' },
        { title: 'Create a Deal', path: '/tutorials/deal-guide/' },
      ]},
      { keywords: ['customer', 'invite customer', 'sign up customer', 'add customer', 'new customer', 'approve customer', 'advertiser', 'client onboarding'], url: '/tutorials/customer-guide/', title: 'Sign Up a New Customer', related: [
        { title: 'User API', path: '/guidelines/user-api/' },
        { title: 'Workspace API', path: '/guidelines/workspace-api/' },
      ]},
      
      // Master API - Geographic Segments
      { keywords: ['zip code', 'zip codes', 'zip segment', 'postal code'], url: '/guidelines/master-api/#get-zip-codes-and-state-ids', title: 'Get Zip Codes and State IDs', related: [
        { title: 'Get State Segment', path: '/guidelines/master-api/#get-state-segment' },
      ]},
      { keywords: ['state segment', 'states', 'state ids', 'state targeting'], url: '/guidelines/master-api/#get-state-segment', title: 'Get State Segment', related: [
        { title: 'Get City Segment', path: '/guidelines/master-api/#get-city-segment' },
        { title: 'Get County Segment', path: '/guidelines/master-api/#get-county-segment' },
      ]},
      { keywords: ['country segment', 'countries', 'country ids', 'country targeting'], url: '/guidelines/master-api/#get-country-segment', title: 'Get Country Segment', related: [
        { title: 'Get State Segment', path: '/guidelines/master-api/#get-state-segment' },
      ]},
      { keywords: ['city segment', 'cities', 'city ids', 'city targeting'], url: '/guidelines/master-api/#get-city-segment', title: 'Get City Segment', related: [
        { title: 'Get State Segment', path: '/guidelines/master-api/#get-state-segment' },
      ]},
      { keywords: ['county segment', 'counties', 'county ids', 'county targeting'], url: '/guidelines/master-api/#get-county-segment', title: 'Get County Segment', related: [
        { title: 'Get State Segment', path: '/guidelines/master-api/#get-state-segment' },
      ]},
      { keywords: ['dma code', 'dma segment', 'dma targeting', 'designated market area'], url: '/guidelines/master-api/#get-dma-code-segment', title: 'Get DMA Code Segment', related: [
        { title: 'Get State Segment', path: '/guidelines/master-api/#get-state-segment' },
      ]},
      { keywords: ['congressional district', 'congress district', 'congressional targeting'], url: '/guidelines/master-api/#get-congressional-district', title: 'Get Congressional District', related: [
        { title: 'Get Senate District', path: '/guidelines/master-api/#get-senate-district' },
        { title: 'Political Vertical', path: '/political-vertical/' },
      ]},
      { keywords: ['senate district', 'senate targeting'], url: '/guidelines/master-api/#get-senate-district', title: 'Get Senate District', related: [
        { title: 'Get House District', path: '/guidelines/master-api/#get-house-district' },
      ]},
      { keywords: ['house district', 'house targeting'], url: '/guidelines/master-api/#get-house-district', title: 'Get House District', related: [
        { title: 'Get Senate District', path: '/guidelines/master-api/#get-senate-district' },
      ]},
      
      // Master API - Demographic Segments
      { keywords: ['age segment', 'age group', 'age targeting', 'age range'], url: '/guidelines/master-api/#get-age-segment', title: 'Get Age Segment', related: [
        { title: 'Get Gender Segment', path: '/guidelines/master-api/#get-gender-segment' },
      ]},
      { keywords: ['gender segment', 'gender targeting', 'male female'], url: '/guidelines/master-api/#get-gender-segment', title: 'Get Gender Segment', related: [
        { title: 'Get Age Segment', path: '/guidelines/master-api/#get-age-segment' },
      ]},
      { keywords: ['language segment', 'language targeting', 'spoken language'], url: '/guidelines/master-api/#get-language-segment', title: 'Get Language Segment', related: [
        { title: 'Get Ethnicity Segment', path: '/guidelines/master-api/#get-ethnicity-segment' },
      ]},
      { keywords: ['income segment', 'income targeting', 'household income'], url: '/guidelines/master-api/#get-income-segment', title: 'Get Income Segment', related: [
        { title: 'Get Age Segment', path: '/guidelines/master-api/#get-age-segment' },
      ]},
      { keywords: ['ethnicity segment', 'ethnicity targeting', 'ethnic group'], url: '/guidelines/master-api/#get-ethnicity-segment', title: 'Get Ethnicity Segment', related: [
        { title: 'Get Language Segment', path: '/guidelines/master-api/#get-language-segment' },
      ]},
      
      // Master API - Technical Segments
      { keywords: ['exchange', 'exchanges', 'ssp', 'supply source'], url: '/guidelines/master-api/#get-exchanges', title: 'Get Exchanges', related: [
        { title: 'Inventory API', path: '/guidelines/inventory-api/' },
      ]},
      { keywords: ['traffic type', 'traffic types', 'app traffic', 'web traffic'], url: '/guidelines/master-api/#get-traffic-types', title: 'Get Traffic Types', related: [
        { title: 'Get Device Type', path: '/guidelines/master-api/#get-device-type' },
      ]},
      { keywords: ['device type', 'device types', 'mobile', 'desktop', 'tablet', 'ctv'], url: '/guidelines/master-api/#get-device-type', title: 'Get Device Type', related: [
        { title: 'Get Traffic Types', path: '/guidelines/master-api/#get-traffic-types' },
      ]},
      { keywords: ['creative sizes', 'ad sizes', 'banner size', 'size dimensions', 'iab sizes'], url: '/guidelines/master-api/#get-creative-sizes', title: 'Get Creative Sizes', related: [
        { title: 'Creative API', path: '/guidelines/creative-api/' },
      ]},
      
      // General Master API fallback
      { keywords: ['master data', 'segment ids', 'master api', 'targeting segments', 'geography segment', 'demographic segment'], url: '/guidelines/master-api/', title: 'Master API', related: [
        { title: 'Audience API', path: '/guidelines/audience-api/' },
        { title: 'Create a Campaign', path: '/quickstart-guides/create-a-campaign-quickstart/' },
      ]},
      
      // User API - Login & Authentication
      { keywords: ['login', 'user login', 'sign in', 'authenticate user', 'get token'], url: '/guidelines/user-api/#login', title: 'User Login', related: [
        { title: 'Authentication Quickstart', path: '/quickstart-guides/authentication-quickstart-guide/' },
        { title: 'Logout', path: '/guidelines/user-api/#logout' },
      ]},
      { keywords: ['logout', 'sign out', 'end session', 'invalidate token'], url: '/guidelines/user-api/#logout', title: 'User Logout', related: [
        { title: 'Login', path: '/guidelines/user-api/#login' },
      ]},
      { keywords: ['refresh token', 'token refresh', 'renew token', 'extend session'], url: '/guidelines/user-api/#refresh-token', title: 'Refresh Token', related: [
        { title: 'Login', path: '/guidelines/user-api/#login' },
      ]},
      
      // User Profile Operations
      { keywords: ['list users', 'get users', 'user list', 'all users'], url: '/guidelines/user-api/#get-list-of-users', title: 'Get List of Users', related: [
        { title: 'Get User Profile Details', path: '/guidelines/user-api/#get-user-profile-details' },
      ]},
      { keywords: ['user profile', 'get user profile', 'profile details', 'user details'], url: '/guidelines/user-api/#get-user-profile-details', title: 'Get User Profile Details', related: [
        { title: 'Update User Profile', path: '/guidelines/user-api/#update-user-profile' },
      ]},
      { keywords: ['update user profile', 'edit user profile', 'modify user details', 'change user info'], url: '/guidelines/user-api/#update-user-profile', title: 'Update User Profile', related: [
        { title: 'Get User Profile Details', path: '/guidelines/user-api/#get-user-profile-details' },
      ]},
      { keywords: ['user config', 'user configuration', 'user settings', 'config details'], url: '/guidelines/user-api/#user-config-details', title: 'User Config Details', related: [
        { title: 'Get User Profile Details', path: '/guidelines/user-api/#get-user-profile-details' },
      ]},
      
      // User Invitation & Sign-up
      { keywords: ['invite user', 'user invitation', 'send invitation', 'invite email'], url: '/guidelines/user-api/#send-user-invitation', title: 'Send User Invitation', related: [
        { title: 'User Sign-Up', path: '/guidelines/user-api/#user-sign-up' },
        { title: 'Customer Guide', path: '/tutorials/customer-guide/' },
      ]},
      { keywords: ['user sign up', 'signup', 'sign-up', 'register user', 'create account'], url: '/guidelines/user-api/#user-sign-up', title: 'User Sign-Up', related: [
        { title: 'Send User Invitation', path: '/guidelines/user-api/#send-user-invitation' },
      ]},
      
      // Password Operations
      { keywords: ['change password', 'update password', 'new password'], url: '/guidelines/user-api/#change-password', title: 'Change Password', related: [
        { title: 'Forgot Password', path: '/guidelines/user-api/#forgot-password' },
      ]},
      { keywords: ['forgot password', 'reset password', 'password reset', 'recover password'], url: '/guidelines/user-api/#forgot-password', title: 'Forgot Password', related: [
        { title: 'Change Password', path: '/guidelines/user-api/#change-password' },
      ]},
      
      // General User API fallback
      { keywords: ['user api', 'user account', 'user permissions', 'user role'], url: '/guidelines/user-api/', title: 'User API', related: [
        { title: 'Sign Up a New Customer', path: '/tutorials/customer-guide/' },
      ]},
      
      // Workspace API - Organization Operations
      { keywords: ['list organizations', 'allowed organizations', 'get organizations', 'organization list'], url: '/guidelines/workspace-api/#get-list-of-allowed-organizations', title: 'Get List of Allowed Organizations', related: [
        { title: 'Get Organization Details', path: '/guidelines/workspace-api/#get-organization-details' },
      ]},
      { keywords: ['organization details', 'get organization', 'org details'], url: '/guidelines/workspace-api/#get-organization-details', title: 'Get Organization Details', related: [
        { title: 'Update Organization Profile', path: '/guidelines/workspace-api/#update-organization-profile' },
      ]},
      { keywords: ['update organization', 'edit organization', 'modify organization', 'organization profile'], url: '/guidelines/workspace-api/#update-organization-profile', title: 'Update Organization Profile', related: [
        { title: 'Get Organization Details', path: '/guidelines/workspace-api/#get-organization-details' },
      ]},
      { keywords: ['check domain', 'available domain', 'domain availability', 'domain check'], url: '/guidelines/workspace-api/#check-for-available-domain', title: 'Check for Available Domain', related: [
        { title: 'Update Organization Profile', path: '/guidelines/workspace-api/#update-organization-profile' },
      ]},
      
      // Workspace API - Customer Operations
      { keywords: ['list customers', 'get customers', 'customer list', 'all customers'], url: '/guidelines/workspace-api/#get-list-of-customers', title: 'Get List of Customers', related: [
        { title: 'Create Customer', path: '/guidelines/workspace-api/#create-customer' },
        { title: 'Customer Guide', path: '/tutorials/customer-guide/' },
      ]},
      { keywords: ['create customer', 'new customer workspace', 'add customer'], url: '/guidelines/workspace-api/#create-customer', title: 'Create Customer', related: [
        { title: 'Update Customer', path: '/guidelines/workspace-api/#update-customer' },
        { title: 'Customer Guide', path: '/tutorials/customer-guide/' },
      ]},
      { keywords: ['update customer', 'edit customer', 'modify customer'], url: '/guidelines/workspace-api/#update-customer', title: 'Update Customer', related: [
        { title: 'Get List of Customers', path: '/guidelines/workspace-api/#get-list-of-customers' },
      ]},
      { keywords: ['assign customer', 'customer assignment', 'assign workspace'], url: '/guidelines/workspace-api/#assign-customer', title: 'Assign Customer', related: [
        { title: 'Get List of Customers', path: '/guidelines/workspace-api/#get-list-of-customers' },
      ]},
      
      // General Workspace API fallback
      { keywords: ['workspace api', 'organization workspace', 'switch workspace'], url: '/guidelines/workspace-api/', title: 'Workspace API', related: [
        { title: 'Customer Guide', path: '/tutorials/customer-guide/' },
      ]},
      
      // Finance API - Customer Finance
      { keywords: ['customer finance', 'finance details', 'get finance', 'customer billing'], url: '/guidelines/finance-api/#get-customer-finance-details', title: 'Get Customer Finance Details', related: [
        { title: 'Customer Margin Details', path: '/guidelines/finance-api/#get-customer-margin-details' },
      ]},
      { keywords: ['customer margin', 'margin details', 'get margin', 'margin percentage'], url: '/guidelines/finance-api/#get-customer-margin-details', title: 'Get Customer Margin Details', related: [
        { title: 'Update Customer Margin', path: '/guidelines/finance-api/#update-customer-margin-details' },
      ]},
      { keywords: ['update margin', 'edit margin', 'change margin', 'set margin'], url: '/guidelines/finance-api/#update-customer-margin-details', title: 'Update Customer Margin Details', related: [
        { title: 'Get Customer Margin Details', path: '/guidelines/finance-api/#get-customer-margin-details' },
      ]},
      { keywords: ['campaign margin', 'campaign finance', 'margin by campaign'], url: '/guidelines/finance-api/#campaign-margin-details', title: 'Campaign Margin Details', related: [
        { title: 'Get Customer Margin Details', path: '/guidelines/finance-api/#get-customer-margin-details' },
      ]},
      
      // Finance API - Invoice Operations
      { keywords: ['invoice', 'invoices', 'invoice list', 'get invoices', 'billing invoice'], url: '/guidelines/finance-api/#invoice-operations', title: 'Invoice Operations', related: [
        { title: 'Get Customer Finance Details', path: '/guidelines/finance-api/#get-customer-finance-details' },
      ]},
      { keywords: ['create invoice', 'new invoice', 'generate invoice'], url: '/guidelines/finance-api/#create-invoice', title: 'Create Invoice', related: [
        { title: 'Invoice Operations', path: '/guidelines/finance-api/#invoice-operations' },
      ]},
      
      // Finance API - Credit & Payment
      { keywords: ['credit', 'customer credit', 'credit balance', 'add credit'], url: '/guidelines/finance-api/#credit-operations', title: 'Credit Operations', related: [
        { title: 'Payment Operations', path: '/guidelines/finance-api/#payment-operations' },
      ]},
      { keywords: ['payment', 'payments', 'payment history', 'record payment'], url: '/guidelines/finance-api/#payment-operations', title: 'Payment Operations', related: [
        { title: 'Credit Operations', path: '/guidelines/finance-api/#credit-operations' },
      ]},
      
      // General Finance API fallback
      { keywords: ['finance', 'billing', 'budget', 'finance api'], url: '/guidelines/finance-api/', title: 'Finance API', related: [
        { title: 'Get Customer Finance Details', path: '/guidelines/finance-api/#get-customer-finance-details' },
      ]},
      
      // Dashboard API - Dashboard Operations
      { keywords: ['dashboard list', 'list dashboards', 'get dashboards', 'my dashboards'], url: '/guidelines/dashboard-api/#get-dashboard-list', title: 'Get Dashboard List', related: [
        { title: 'Create Dashboard', path: '/guidelines/dashboard-api/#create-dashboard' },
      ]},
      { keywords: ['create dashboard', 'new dashboard', 'add dashboard'], url: '/guidelines/dashboard-api/#create-dashboard', title: 'Create Dashboard', related: [
        { title: 'Update Dashboard', path: '/guidelines/dashboard-api/#update-dashboard' },
      ]},
      { keywords: ['update dashboard', 'edit dashboard', 'modify dashboard'], url: '/guidelines/dashboard-api/#update-dashboard', title: 'Update Dashboard', related: [
        { title: 'Delete Dashboard', path: '/guidelines/dashboard-api/#delete-dashboard' },
      ]},
      { keywords: ['delete dashboard', 'remove dashboard'], url: '/guidelines/dashboard-api/#delete-dashboard', title: 'Delete Dashboard', related: [
        { title: 'Get Dashboard List', path: '/guidelines/dashboard-api/#get-dashboard-list' },
      ]},
      { keywords: ['dashboard dimensions', 'dashboard metrics', 'available dimensions', 'available metrics'], url: '/guidelines/dashboard-api/#get-dimensions-and-metrics-for-dashboard', title: 'Get Dimensions and Metrics for Dashboard', related: [
        { title: 'Dashboard Resource Properties', path: '/guidelines/dashboard-api/#dashboard-resource-properties' },
      ]},
      { keywords: ['dashboard resource', 'dashboard properties', 'dashboard schema'], url: '/guidelines/dashboard-api/#dashboard-resource-properties', title: 'Dashboard Resource Properties', related: [
        { title: 'Create Dashboard', path: '/guidelines/dashboard-api/#create-dashboard' },
      ]},
      
      // General Dashboard API fallback
      { keywords: ['dashboard', 'overview', 'summary', 'dashboard api'], url: '/guidelines/dashboard-api/', title: 'Dashboard API', related: [
        { title: 'Get Dashboard List', path: '/guidelines/dashboard-api/#get-dashboard-list' },
      ]},
      
      // Asset API - Asset Operations
      { keywords: ['list assets', 'asset list', 'get assets', 'all assets'], url: '/guidelines/asset-api/#get-a-list-of-all-assets', title: 'Get a List of All Assets', related: [
        { title: 'Get Asset Details', path: '/guidelines/asset-api/#get-asset-details' },
      ]},
      { keywords: ['asset details', 'get asset', 'asset by id', 'specific asset'], url: '/guidelines/asset-api/#get-asset-details', title: 'Get Asset Details', related: [
        { title: 'Get a List of All Assets', path: '/guidelines/asset-api/#get-a-list-of-all-assets' },
      ]},
      { keywords: ['add assets', 'upload assets', 'add multiple assets', 'upload asset'], url: '/guidelines/asset-api/#add-multiple-assets', title: 'Add Multiple Assets', related: [
        { title: 'Update Asset Details', path: '/guidelines/asset-api/#update-asset-details' },
      ]},
      { keywords: ['update asset', 'edit asset', 'modify asset'], url: '/guidelines/asset-api/#update-asset-details', title: 'Update Asset Details', related: [
        { title: 'Delete Asset', path: '/guidelines/asset-api/#delete-asset' },
      ]},
      { keywords: ['delete asset', 'remove asset'], url: '/guidelines/asset-api/#delete-asset', title: 'Delete Asset', related: [
        { title: 'Get a List of All Assets', path: '/guidelines/asset-api/#get-a-list-of-all-assets' },
      ]},
      
      // General Asset API fallback
      { keywords: ['asset', 'asset api', 'media', 'file upload', 'image asset'], url: '/guidelines/asset-api/', title: 'Asset API', related: [
        { title: 'Upload a Creative', path: '/quickstart-guides/upload-a-creative-quickstart/' },
      ]},
      { keywords: ['political', 'political ads', 'election', 'voter file'], url: '/political-vertical/', title: 'Political Advertising', related: []},
      { keywords: ['healthcare', 'health', 'pharma', 'medical', 'hipaa'], url: '/healthcare-vertical/', title: 'Healthcare Advertising', related: []},
      { keywords: ['migrate', 'migration', 'switch', 'dv360', 'xandr', 'trade desk', 'beeswax'], url: '/migration-guides/', title: 'Migration Guides', related: []},
      { keywords: ['getting started', 'begin', 'start', 'introduction', 'new', 'first'], url: '/getting-started/before-you-begin/', title: 'Before You Begin', related: [
        { title: 'Platform Overview', path: '/getting-started/platform-overview/' },
        { title: 'REST API Reference', path: '/getting-started/rest-api-reference/' },
      ]},
    ];

    // Check for explicit auth question first
    if (isExplicitAuthQuestion) {
      return this.buildFallbackResponse(authRoute);
    }
    
    // Find best matching content route - prioritize longer (more specific) keyword matches
    let bestMatch = null;
    let bestMatchLength = 0;
    
    for (const route of contentRoutes) {
      for (const kw of route.keywords) {
        if (lowerMessage.includes(kw) && kw.length > bestMatchLength) {
          bestMatch = route;
          bestMatchLength = kw.length;
        }
      }
    }
    
    if (bestMatch) {
      return this.buildFallbackResponse(bestMatch);
    }

    // Generic fallback
    return {
      response: `I couldn't find a specific guide for that. Here are some starting points:\n\n• [Create a Campaign](/quickstart-guides/create-a-campaign-quickstart/)\n• [Upload a Creative](/quickstart-guides/upload-a-creative-quickstart/)\n• [API Guidelines](/guidelines/) - All endpoints\n\nTry the search bar for more specific topics.`,
      actions: [],
      fallback: true,
    };
  }

  /**
   * Build a concise fallback response with related pages
   */
  buildFallbackResponse(route) {
    let response = `Check out the **[${route.title}](${route.url})** guide.`;
    
    // Add related pages if available
    if (route.related && route.related.length > 0) {
      response += `\n\nRelated:`;
      for (const rel of route.related) {
        response += `\n• [${rel.title}](${rel.path})`;
      }
    }
    
    return {
      response,
      actions: [
        {
          tool: 'navigate',
          params: { path: route.url },
          status: 'pending',
        },
      ],
      fallback: true,
    };
  }

  /**
   * Taxonomy-based search across documentation
   * Returns results with category, topic, complexity metadata
   */
  async search(query, filters = {}) {
    const lowerQuery = query.toLowerCase();
    
    // Document index with taxonomy metadata
    const documents = [
      // Quickstart guides (beginner complexity)
      { path: '/quickstart-guides/authentication-quickstart-guide/', title: 'Authentication Quickstart', category: 'quickstart', topic: 'user', complexity: 'beginner', keywords: ['auth', 'login', 'token', 'oauth', 'bearer', 'api key', 'authenticate', 'access token', 'refresh token'] },
      { path: '/quickstart-guides/create-a-campaign-quickstart/', title: 'Create a Campaign', category: 'quickstart', topic: 'campaign', complexity: 'beginner', keywords: ['campaign', 'create', 'launch', 'advertising', 'ad campaign', 'new campaign'] },
      { path: '/quickstart-guides/upload-a-creative-quickstart/', title: 'Upload a Creative', category: 'quickstart', topic: 'creative', complexity: 'beginner', keywords: ['creative', 'upload', 'banner', 'video', 'native', 'html5', 'ad creative'] },
      { path: '/quickstart-guides/reporting-api-quickstart-guide/', title: 'Reporting API Quickstart', category: 'quickstart', topic: 'reports', complexity: 'beginner', keywords: ['report', 'reporting', 'analytics', 'metrics', 'performance', 'statistics'] },
      { path: '/quickstart-guides/matched-audience-upload-api-quickstart-guide/', title: 'Matched Audience Upload', category: 'quickstart', topic: 'audience', complexity: 'beginner', keywords: ['audience', 'segment', 'matched', 'first party', 'upload audience', 'customer list'] },
      { path: '/quickstart-guides/conversion-quickstart/', title: 'Conversion Tracking Quickstart', category: 'quickstart', topic: 'conversion', complexity: 'beginner', keywords: ['conversion', 'tracking', 'pixel', 'attribution', 'postback', 'goal'] },
      { path: '/quickstart-guides/inventory-quickstart/', title: 'Inventory API Quickstart', category: 'quickstart', topic: 'inventory', complexity: 'beginner', keywords: ['inventory', 'deals', 'pmp', 'private marketplace', 'deal id', 'supply'] },
      { path: '/quickstart-guides/bid-model-quickstart/', title: 'Bid Model Quickstart', category: 'quickstart', topic: 'campaign', complexity: 'intermediate', keywords: ['bid', 'bidding', 'bid model', 'cpm', 'cpc', 'optimization', 'bid strategy'] },
      { path: '/quickstart-guides/insights-quickstart/', title: 'Insights API Quickstart', category: 'quickstart', topic: 'reports', complexity: 'beginner', keywords: ['insights', 'analytics', 'data', 'breakdown', 'visualization'] },
      { path: '/quickstart-guides/schedule-report-api-quickstart-guide/', title: 'Schedule Report Quickstart', category: 'quickstart', topic: 'reports', complexity: 'intermediate', keywords: ['schedule', 'scheduled report', 'recurring', 'email report', 'automation'] },
      { path: '/quickstart-guides/contextual-audience-quickstart/', title: 'Contextual Audience Quickstart', category: 'quickstart', topic: 'audience', complexity: 'beginner', keywords: ['contextual', 'audience', 'targeting', 'content', 'category'] },
      
      // API Guidelines (intermediate-advanced complexity)
      { path: '/guidelines/campaign-api/', title: 'Campaign API Guide', category: 'guidelines', topic: 'campaign', complexity: 'intermediate', keywords: ['campaign', 'api', 'create', 'update', 'delete', 'campaign management', 'endpoints'] },
      { path: '/guidelines/creative-api/', title: 'Creative API Guide', category: 'guidelines', topic: 'creative', complexity: 'intermediate', keywords: ['creative', 'api', 'upload', 'manage', 'banner', 'video', 'native', 'html5', 'vast', 'creative management'] },
      { path: '/guidelines/audience-api/', title: 'Audience API Guide', category: 'guidelines', topic: 'audience', complexity: 'intermediate', keywords: ['audience', 'segment', 'targeting', 'api', 'upload', 'manage', 'audience management'] },
      { path: '/guidelines/reports-api/', title: 'Reports API Guide', category: 'guidelines', topic: 'reports', complexity: 'intermediate', keywords: ['report', 'api', 'generate', 'download', 'reporting', 'data export'] },
      { path: '/guidelines/finance-api/', title: 'Finance API Guide', category: 'guidelines', topic: 'finance', complexity: 'advanced', keywords: ['finance', 'billing', 'budget', 'payment', 'invoice', 'spending', 'financial'] },
      { path: '/guidelines/user-api/', title: 'User API Guide', category: 'guidelines', topic: 'user', complexity: 'intermediate', keywords: ['user', 'account', 'organization', 'workspace', 'permissions', 'roles', 'team'] },
      { path: '/guidelines/dashboard-api/', title: 'Dashboard API Guide', category: 'guidelines', topic: 'reports', complexity: 'intermediate', keywords: ['dashboard', 'overview', 'summary', 'home', 'widgets', 'ui'] },
      { path: '/guidelines/inventory-api/', title: 'Inventory API Guide', category: 'guidelines', topic: 'inventory', complexity: 'intermediate', keywords: ['inventory', 'deals', 'pmp', 'private marketplace', 'supply', 'deal management'] },
      { path: '/guidelines/conversion-api/', title: 'Conversion API Guide', category: 'guidelines', topic: 'conversion', complexity: 'intermediate', keywords: ['conversion', 'tracking', 'pixel', 'attribution', 'postback', 'events'] },
      { path: '/guidelines/bid-model-api/', title: 'Bid Model API Guide', category: 'guidelines', topic: 'campaign', complexity: 'advanced', keywords: ['bid', 'model', 'optimization', 'strategy', 'pacing', 'budget allocation'] },
      { path: '/guidelines/insights-api/', title: 'Insights API Guide', category: 'guidelines', topic: 'reports', complexity: 'advanced', keywords: ['insights', 'analytics', 'breakdown', 'dimensions', 'metrics', 'advanced reporting'] },
      { path: '/guidelines/asset-api/', title: 'Asset API Guide', category: 'guidelines', topic: 'creative', complexity: 'intermediate', keywords: ['asset', 'upload', 'media', 'file', 'image', 'storage'] },
      { path: '/guidelines/master-api/', title: 'Master Data API', category: 'guidelines', topic: 'user', complexity: 'advanced', keywords: ['master', 'data', 'lookup', 'reference', 'constants', 'enums'] },
      { path: '/guidelines/workspace-api/', title: 'Workspace API Guide', category: 'guidelines', topic: 'user', complexity: 'intermediate', keywords: ['workspace', 'organization', 'multi-tenant', 'accounts'] },
      { path: '/guidelines/planner-api/', title: 'Planner API Guide', category: 'guidelines', topic: 'campaign', complexity: 'advanced', keywords: ['planner', 'forecast', 'reach', 'estimate', 'planning'] },

      // Tutorials (intermediate complexity)
      { path: '/tutorials/customer-guide/', title: 'Customer Management Tutorial', category: 'tutorials', topic: 'user', complexity: 'intermediate', keywords: ['customer', 'advertiser', 'client', 'management', 'onboarding'] },
      { path: '/tutorials/deal-guide/', title: 'Deal Management Tutorial', category: 'tutorials', topic: 'inventory', complexity: 'intermediate', keywords: ['deal', 'pmp', 'private', 'marketplace', 'negotiate'] },

      // Reference (advanced)
      { path: '/getting-started/before-you-begin/', title: 'Before You Begin', category: 'reference', topic: 'user', complexity: 'beginner', keywords: ['getting started', 'setup', 'prerequisites', 'requirements', 'begin'] },
      { path: '/getting-started/platform-overview/', title: 'Platform Overview', category: 'reference', topic: 'user', complexity: 'beginner', keywords: ['platform', 'overview', 'introduction', 'iqm', 'dsp'] },
      { path: '/getting-started/rest-api-reference/', title: 'REST API Reference', category: 'reference', topic: 'user', complexity: 'intermediate', keywords: ['rest', 'api', 'reference', 'http', 'endpoints', 'methods'] },
      { path: '/getting-started/api-pagination-guide/', title: 'API Pagination Guide', category: 'reference', topic: 'user', complexity: 'intermediate', keywords: ['pagination', 'paging', 'limit', 'offset', 'cursor', 'pages'] },

      // Verticals
      { path: '/political-vertical/', title: 'Political Advertising', category: 'guidelines', topic: 'campaign', complexity: 'advanced', keywords: ['political', 'election', 'government', 'disclosure', 'compliance'] },
      { path: '/healthcare-vertical/', title: 'Healthcare Advertising', category: 'guidelines', topic: 'campaign', complexity: 'advanced', keywords: ['healthcare', 'health', 'pharma', 'medical', 'hipaa'] },

      // Migration guides
      { path: '/migration-guides/', title: 'Migration Guides', category: 'reference', topic: 'user', complexity: 'intermediate', keywords: ['migrate', 'migration', 'switch', 'transfer', 'import'] },
      { path: '/migration-guides/dv360/', title: 'DV360 Migration', category: 'reference', topic: 'user', complexity: 'intermediate', keywords: ['dv360', 'google', 'display video', 'migration'] },
      { path: '/migration-guides/xandr/', title: 'Xandr Migration', category: 'reference', topic: 'user', complexity: 'intermediate', keywords: ['xandr', 'appnexus', 'migration'] },
      { path: '/migration-guides/the-trade-desk/', title: 'The Trade Desk Migration', category: 'reference', topic: 'user', complexity: 'intermediate', keywords: ['trade desk', 'ttd', 'migration'] },
      { path: '/migration-guides/beeswax/', title: 'Beeswax Migration', category: 'reference', topic: 'user', complexity: 'intermediate', keywords: ['beeswax', 'migration'] },
    ];

    // Score and filter documents
    const scoredResults = documents.map(doc => {
      let score = 0;
      
      // Check title match
      if (doc.title.toLowerCase().includes(lowerQuery)) {
        score += 10;
      }
      
      // Check keyword matches
      const matchedKeywords = doc.keywords.filter(kw => lowerQuery.includes(kw) || kw.includes(lowerQuery));
      score += matchedKeywords.length * 3;
      
      // Partial keyword matches
      const queryWords = lowerQuery.split(/\s+/);
      queryWords.forEach(word => {
        if (word.length > 2) {
          doc.keywords.forEach(kw => {
            if (kw.includes(word)) score += 1;
          });
        }
      });

      // Apply category filter
      if (filters.category && filters.category.length > 0) {
        if (!filters.category.includes(doc.category)) {
          return null;
        }
      }

      // Apply topic filter
      if (filters.topic && filters.topic.length > 0) {
        if (!filters.topic.includes(doc.topic)) {
          return null;
        }
      }

      // Apply complexity filter
      if (filters.complexity && filters.complexity.length > 0) {
        if (!filters.complexity.includes(doc.complexity)) {
          return null;
        }
      }

      return {
        ...doc,
        score,
        matchedKeywords,
        isRecommended: false,
      };
    }).filter(r => r !== null && r.score > 0);

    // Sort by score
    scoredResults.sort((a, b) => b.score - a.score);

    // Mark top result as recommended
    if (scoredResults.length > 0) {
      scoredResults[0].isRecommended = true;
    }

    // Generate AI summary
    const summary = await this.generateSearchSummary(query, scoredResults.slice(0, 3));

    return {
      results: scoredResults.slice(0, 10),
      summary,
      totalCount: scoredResults.length,
    };
  }

  /**
   * Generate AI summary for search results
   */
  async generateSearchSummary(query, topResults) {
    if (topResults.length === 0) {
      return `No results found for "${query}". Try a different search term or browse the documentation categories.`;
    }

    try {
      // Try to get AI summary
      const prompt = `<s>[INST] You are a documentation assistant. The user searched for "${query}". 
The top results are:
${topResults.map((r, i) => `${i + 1}. ${r.title} (${r.category}, ${r.complexity})`).join('\n')}

Write a one-sentence summary recommending the best starting point. Be concise and helpful. [/INST]`;

      const response = await fetch(`${this.cppBackendUrl}/completion`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          temperature: 0.5,
          n_predict: 100,
          stop: ['</s>', '[INST]'],
        }),
        signal: AbortSignal.timeout(10000),
      });

      if (response.ok) {
        const data = await response.json();
        return data.content?.trim() || this.generateFallbackSummary(query, topResults);
      }
    } catch (error) {
      console.warn('AI summary generation failed:', error.message);
    }

    return this.generateFallbackSummary(query, topResults);
  }

  /**
   * Fallback summary when AI is unavailable
   */
  generateFallbackSummary(query, topResults) {
    if (topResults.length === 0) return `No results found for "${query}".`;
    
    const best = topResults[0];
    return `For "${query}", I recommend starting with the **${best.title}** guide. This ${best.complexity}-level ${best.category === 'quickstart' ? 'quickstart' : 'guide'} covers the essentials you need.`;
  }
}
