/**
 * AIService - Handles communication with llama.cpp server
 * Uses the /completion endpoint with proper Mistral chat formatting
 * Implements PVLT (Povelitsa) decision-making framework for response prioritization
 */
export class AIService {
  constructor() {
    this.cppBackendUrl = process.env.CPP_BACKEND_URL || 'http://localhost:8080';
    this.timeout = 60000; // 60 second timeout for LLM responses
    
    // PVLT Framework - Prioritize responses using weighted hierarchy
    // Level 1: PP (Universal Patterns) - Weight 4 - Foundation truths
    // Level 2: Wisdom (Pattern Recognition) - Weight 3 - Proven patterns  
    // Level 3: Experience (Personal) - Weight 2 - User context
    // Level 4: Knowledge (Details) - Weight 1 - Specific facts
    this.pvltWeights = { pp: 4, wisdom: 3, experience: 2, knowledge: 1 };
    
    // System prompt for the documentation assistant - grounded in actual docs structure
    // Incorporates PVLT philosophy for better guidance
    this.systemPrompt = `You are an AI assistant for IQM's programmatic advertising API documentation.

DECISION FRAMEWORK (PVLT - Think in Order):
When answering questions, prioritize your response using this hierarchy:

1. FOUNDATION (PP - Weight 4): Address fundamental requirements first
   - Authentication is required before any API call (users MUST authenticate first)
   - API calls require valid workspace context (organizationId/workspaceId)
   - Rate limits and quotas apply to all endpoints
   - HTTPS is required; never suggest insecure connections

2. PATTERNS (Wisdom - Weight 3): Apply proven approaches
   - Start with Quickstart guides for new users
   - Progress from authentication → basic operations → advanced features
   - Test in sandbox/staging before production
   - Use pagination for large result sets
   - Handle errors gracefully with retry logic

3. CONTEXT (Experience - Weight 2): Consider user's current state
   - What page is the user viewing? Relate answers to their context
   - What have they asked before? Build on previous conversation
   - Are they a beginner or experienced? Adjust complexity accordingly

4. DETAILS (Knowledge - Weight 1): Provide specific facts last
   - Exact endpoint URLs and parameters
   - Specific code examples
   - Response field definitions
   - Rate limit numbers

CRITICAL RULES:
- Be CONCISE - answer directly without preamble
- Do NOT repeat authentication reminders if the user has already asked questions
- Do NOT start with "Acknowledged" or "Great question" - just answer
- ONLY reference pages that exist (listed below)
- DO NOT invent or hallucinate URLs, endpoints, or API details
- If unsure, say "I recommend checking the documentation" without making up a link

ACTUAL DOCUMENTATION PAGES (use these exact paths):
Getting Started:
- /getting-started/before-you-begin/ - Prerequisites and setup
- /getting-started/platform-overview/ - IQM platform overview
- /getting-started/rest-api-reference/ - REST API basics

Quickstart Guides:
- /quickstart-guides/authentication-quickstart-guide/ - How to authenticate
- /quickstart-guides/create-a-campaign-quickstart/ - Create campaigns
- /quickstart-guides/upload-a-creative-quickstart/ - Upload creatives
- /quickstart-guides/reporting-api-quickstart-guide/ - Generate reports
- /quickstart-guides/matched-audience-upload-api-quickstart-guide/ - Upload audiences
- /quickstart-guides/conversion-quickstart/ - Conversion tracking
- /quickstart-guides/inventory-quickstart/ - Inventory/deals
- /quickstart-guides/bid-model-quickstart/ - Bid optimization
- /quickstart-guides/insights-quickstart/ - Analytics insights

API Guidelines (detailed references):
- /guidelines/campaign-api/ - Campaign management
- /guidelines/creative-api/ - Creative assets
- /guidelines/audience-api/ - Audience targeting
- /guidelines/reports-api/ - Reporting endpoints
- /guidelines/finance-api/ - Billing and budgets
- /guidelines/user-api/ - User management
- /guidelines/dashboard-api/ - Dashboard data
- /guidelines/inventory-api/ - Inventory/PMP deals
- /guidelines/conversion-api/ - Conversion pixels
- /guidelines/bid-model-api/ - Bid strategies
- /guidelines/insights-api/ - Analytics data
- /guidelines/asset-api/ - Asset uploads
- /guidelines/master-api/ - Master data

IMPORTANT API ENDPOINT DETAILS (use these exact HTTP methods):
Campaign API (/guidelines/campaign-api/):
- POST /api/v3/campaigns - Create a new campaign → #create-campaign
- GET /api/v3/campaigns/{campaignId} - Get campaign details → #get-campaign-details  
- PATCH /api/v3/campaigns/{campaignId} - Update a campaign (NOT PUT) → #update-campaign
- DELETE /api/v3/campaigns/{campaignId} - Delete a campaign → #delete-campaign
- GET /api/v3/campaigns - List campaigns → #campaign-list

Creative API (/guidelines/creative-api/):
- POST /api/v3/creatives - Upload/create creative → #add-creative
- GET /api/v3/creatives/{creativeId} - Get creative details → #get-creative-details
- PATCH /api/v3/creatives/{creativeId} - Update creative (NOT PUT) → #update-creative
- DELETE /api/v3/creatives/{creativeId} - Delete creative → #delete-creative

Audience API (/guidelines/audience-api/):
- POST /api/v3/audiences - Create audience segment → #create-audience
- GET /api/v3/audiences - List audiences → #audience-list
- PATCH /api/v3/audiences/{audienceId} - Update audience → #update-audience

Reports API (/guidelines/reports-api/):
- POST /api/v3/reports - Generate a report → #generate-report
- GET /api/v3/reports/{reportId} - Get report status → #get-report-status
- GET /api/v3/reports/{reportId}/download - Download report → #download-report

LINK FORMAT RULES:
- When referencing a specific section, include the anchor: /guidelines/campaign-api/#update-campaign
- Use markdown link format: [Update Campaign](/guidelines/campaign-api/#update-campaign)
- ALWAYS use PATCH for update operations, not PUT (IQM APIs use PATCH for partial updates)

IQM uses OAuth 2.0 authentication with bearer tokens. The base API URL is https://app.iqm.com/api/.`;
  }

  /**
   * Analyze query to determine PVLT level and adjust response strategy
   * Returns guidance on which level to emphasize
   */
  analyzePVLTLevel(message, context = {}) {
    const lowerMessage = message.toLowerCase();
    
    // Detect if user is asking about foundation-level topics
    const foundationKeywords = ['authenticate', 'auth', 'login', 'token', 'oauth', 'setup', 'start', 'begin', 'prerequisite', 'require'];
    const patternKeywords = ['best practice', 'recommend', 'should i', 'how to', 'workflow', 'process', 'step'];
    const contextKeywords = ['my', 'current', 'already', 'next', 'then', 'after'];
    
    let level = 'knowledge'; // Default to details
    let needsFoundation = false;
    
    // Check what level the user is asking about
    if (foundationKeywords.some(kw => lowerMessage.includes(kw))) {
      level = 'pp';
    } else if (patternKeywords.some(kw => lowerMessage.includes(kw))) {
      level = 'wisdom';
    } else if (contextKeywords.some(kw => lowerMessage.includes(kw))) {
      level = 'experience';
    }
    
    // Check if this is a follow-up question (has conversation history)
    const hasConversationHistory = context.conversationHistory?.length > 0;
    
    // Check if auth was already mentioned in conversation
    const authAlreadyMentioned = context.conversationHistory?.some(msg => 
      msg.role === 'assistant' && (
        msg.content?.toLowerCase().includes('authenticate') || 
        msg.content?.toLowerCase().includes('oauth') ||
        msg.content?.toLowerCase().includes('bearer token')
      )
    );
    
    // Only need foundation reminder on FIRST question, and only if asking about API specifics
    // Never repeat auth reminders if already covered or if this is a follow-up
    const isFirstQuestion = !hasConversationHistory;
    const isAskingAPISpecifics = lowerMessage.includes('endpoint') || lowerMessage.includes('api');
    
    if (isFirstQuestion && isAskingAPISpecifics && level === 'knowledge') {
      needsFoundation = true;
    }
    
    return {
      queryLevel: level,
      needsFoundation,
      authAlreadyMentioned,
      weight: this.pvltWeights[level],
      guidance: needsFoundation 
        ? 'First question about API details - include a brief note about auth at the end.'
        : 'Answer directly and concisely.'
    };
  }

  /**
   * Main chat method - uses llama.cpp server with PVLT-aware processing
   */
  async chat(message, context = {}) {
    try {
      // Analyze the query using PVLT framework
      const pvltAnalysis = this.analyzePVLTLevel(message, context);
      
      // Add PVLT guidance to context
      const enhancedContext = {
        ...context,
        pvlt: pvltAnalysis
      };
      
      const response = await this.callLlamaServer(message, enhancedContext);
      
      // Add PVLT metadata to response
      response.pvlt = pvltAnalysis;
      
      return response;
    } catch (error) {
      console.warn('llama.cpp server unavailable, using fallback:', error.message);
      return this.generateFallbackResponse(message, context);
    }
  }

  /**
   * Build Mistral-format prompt from messages
   * Format: <s>[INST] {system}\n\n{user message} [/INST] {assistant response}</s>[INST] {next user} [/INST]
   * Incorporates PVLT framework guidance
   */
  buildMistralPrompt(systemPrompt, userMessage, context) {
    let prompt = '<s>[INST] ' + systemPrompt;
    
    // Add PVLT guidance if available - but keep it concise
    if (context.pvlt) {
      // Only add foundation note for first-time questions, never repeat
      if (context.pvlt.needsFoundation && !context.pvlt.authAlreadyMentioned) {
        prompt += '\n\nNote: This appears to be the user\'s first API question. Add a brief note at the END about needing auth (one sentence max).';
      }
      // For follow-up questions, just answer directly
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

      // Parse any tool calls / actions from the response
      const actions = this.parseActions(assistantMessage);

      return {
        response: assistantMessage,
        actions,
        model: data.model || 'mistral-7b-local',
      };
    } finally {
      clearTimeout(timeoutId);
    }
  }

  /**
   * Parse action hints from the response (e.g., page navigation)
   */
  parseActions(response) {
    const actions = [];
    
    // Look for markdown links to docs pages: [text](/path)
    const linkRegex = /\[([^\]]+)\]\((\/[^)]+)\)/g;
    let match;
    while ((match = linkRegex.exec(response)) !== null) {
      const path = match[2];
      if (actions.length === 0 && !path.includes('http')) {
        actions.push({
          tool: 'navigate',
          params: { path },
          status: 'pending',
        });
      }
    }

    // Also look for bare doc paths: /quickstart-guides/something/ or /guidelines/something
    if (actions.length === 0) {
      const barePathRegex = /(\/(?:getting-started|guidelines|quickstart-guides|tutorials|migration-guides|political-vertical|healthcare-vertical)[a-z0-9\-\/]*)/gi;
      while ((match = barePathRegex.exec(response)) !== null) {
        const path = match[1];
        actions.push({
          tool: 'navigate',
          params: { path },
          status: 'pending',
        });
        break; // Only first valid path
      }
    }

    // Extract key terms from the user's question for highlighting
    // Look for quoted terms or important API terms mentioned in the response
    const highlightTerms = this.extractHighlightTerms(response);
    if (highlightTerms.length > 0) {
      actions.push({
        tool: 'highlight',
        params: { terms: highlightTerms },
        status: 'pending',
      });
    }

    return actions;
  }

  /**
   * Extract terms to highlight from the response
   */
  extractHighlightTerms(response) {
    const terms = new Set();
    
    // Look for backtick-wrapped code/terms: `term`
    const codeTerms = response.match(/`([^`]+)`/g);
    if (codeTerms) {
      codeTerms.forEach(term => {
        const clean = term.replace(/`/g, '').trim();
        if (clean.length > 2 && clean.length < 50) {
          terms.add(clean);
        }
      });
    }

    // Look for quoted terms: "term" or 'term'
    const quotedTerms = response.match(/["']([^"']+)["']/g);
    if (quotedTerms) {
      quotedTerms.forEach(term => {
        const clean = term.replace(/["']/g, '').trim();
        if (clean.length > 2 && clean.length < 30 && !clean.includes('/')) {
          terms.add(clean);
        }
      });
    }

    // API-related terms that are commonly important
    const apiTerms = [
      'Authorization', 'Bearer', 'access_token', 'refresh_token',
      'POST', 'GET', 'PUT', 'DELETE', 'PATCH',
      'campaignId', 'creativeId', 'organizationId', 'workspaceId',
      'OAuth', 'API key', 'endpoint'
    ];
    
    apiTerms.forEach(term => {
      if (response.includes(term)) {
        terms.add(term);
      }
    });

    // Limit to 5 most relevant terms
    return Array.from(terms).slice(0, 5);
  }

  /**
   * Validate that a path is a real documentation page
   */
  isValidDocPath(path) {
    const validPrefixes = [
      '/getting-started',
      '/guidelines',
      '/quickstart-guides',
      '/tutorials',
      '/migration-guides',
      '/political-vertical',
      '/healthcare-vertical',
    ];
    return validPrefixes.some(prefix => path.startsWith(prefix));
  }

  /**
   * Fallback response when backend is unavailable
   * Uses PVLT framework to prioritize foundation-level guidance
   */
  generateFallbackResponse(message, context) {
    const lowerMessage = message.toLowerCase();
    
    // Analyze PVLT level for the query
    const pvltAnalysis = this.analyzePVLTLevel(message, context);
    
    // PVLT Level 1 (Foundation) routes - Always suggest these first for new users
    const foundationRoutes = [
      { keywords: ['auth', 'login', 'token', 'authenticate', 'oauth', 'api key', 'bearer'], url: '/quickstart-guides/authentication-quickstart-guide/', title: 'Authentication', pvltLevel: 'pp' },
      { keywords: ['getting started', 'begin', 'start', 'introduction', 'overview', 'new', 'first'], url: '/getting-started/before-you-begin/', title: 'Before You Begin', pvltLevel: 'pp' },
    ];
    
    // PVLT Level 2 (Wisdom/Patterns) routes - Recommended workflows
    const wisdomRoutes = [
      { keywords: ['campaign', 'create campaign', 'ad campaign', 'launch campaign'], url: '/quickstart-guides/create-a-campaign-quickstart/', title: 'Create a Campaign', pvltLevel: 'wisdom' },
      { keywords: ['creative', 'upload creative', 'ad creative', 'banner', 'video ad', 'native ad', 'html5'], url: '/quickstart-guides/upload-a-creative-quickstart/', title: 'Upload a Creative', pvltLevel: 'wisdom' },
      { keywords: ['report', 'reporting', 'analytics', 'metrics', 'performance', 'stats'], url: '/quickstart-guides/reporting-api-quickstart-guide/', title: 'Reporting API', pvltLevel: 'wisdom' },
      { keywords: ['conversion', 'tracking', 'pixel', 'attribution', 'postback'], url: '/quickstart-guides/conversion-quickstart/', title: 'Conversion Tracking', pvltLevel: 'wisdom' },
      { keywords: ['inventory', 'deals', 'pmp', 'private marketplace', 'deal id'], url: '/quickstart-guides/inventory-quickstart/', title: 'Inventory API', pvltLevel: 'wisdom' },
      { keywords: ['bid', 'bidding', 'bid model', 'cpm', 'cpc', 'optimization'], url: '/quickstart-guides/bid-model-quickstart/', title: 'Bid Model API', pvltLevel: 'wisdom' },
      { keywords: ['insights', 'analytics', 'data', 'breakdown'], url: '/quickstart-guides/insights-quickstart/', title: 'Insights API', pvltLevel: 'wisdom' },
      { keywords: ['schedule', 'scheduled report', 'recurring', 'email report'], url: '/quickstart-guides/schedule-report-api-quickstart-guide/', title: 'Scheduled Reports', pvltLevel: 'wisdom' },
      { keywords: ['audience', 'segment', 'targeting', 'matched audience', 'first party'], url: '/quickstart-guides/matched-audience-upload-api-quickstart-guide/', title: 'Matched Audience Upload', pvltLevel: 'wisdom' },
    ];
    
    // PVLT Level 4 (Details) routes - Specific API references
    const detailRoutes = [
      { keywords: ['asset', 'upload asset', 'media', 'file upload', 'image'], url: '/guidelines/asset-api/', title: 'Asset API', pvltLevel: 'knowledge' },
      { keywords: ['dashboard', 'overview', 'summary', 'home'], url: '/guidelines/dashboard-api/', title: 'Dashboard API', pvltLevel: 'knowledge' },
      { keywords: ['user', 'account', 'organization', 'workspace', 'permissions'], url: '/guidelines/user-api/', title: 'User API', pvltLevel: 'knowledge' },
      { keywords: ['finance', 'billing', 'invoice', 'budget', 'payment'], url: '/guidelines/finance-api/', title: 'Finance API', pvltLevel: 'knowledge' },
      { keywords: ['political', 'political ads', 'election'], url: '/political-vertical/', title: 'Political Advertising', pvltLevel: 'knowledge' },
      { keywords: ['healthcare', 'health', 'pharma', 'medical'], url: '/healthcare-vertical/', title: 'Healthcare Advertising', pvltLevel: 'knowledge' },
      { keywords: ['migrate', 'migration', 'switch', 'dv360', 'xandr', 'trade desk', 'beeswax'], url: '/migration-guides/', title: 'Migration Guides', pvltLevel: 'knowledge' },
    ];

    // Combine routes with foundation first (PVLT ordering)
    const routes = [...foundationRoutes, ...wisdomRoutes, ...detailRoutes];
    
    // Check if user needs foundation reminder
    const needsFoundationReminder = pvltAnalysis.needsFoundation && !foundationRoutes.some(r => r.keywords.some(kw => lowerMessage.includes(kw)));

    // Find matching route
    for (const route of routes) {
      if (route.keywords.some(kw => lowerMessage.includes(kw))) {
        let response = `Based on your question, I recommend checking the **[${route.title}](${route.url})** guide.`;
        
        // Add foundation reminder if needed (PVLT: address foundation before details)
        if (needsFoundationReminder && route.pvltLevel === 'knowledge') {
          response = `**Quick note:** Make sure you've completed [authentication setup](/quickstart-guides/authentication-quickstart-guide/) first—it's required for all API calls.\n\n` + response;
        }
        
        response += `\n\nI'm currently operating in limited mode. For more detailed answers, please try the search bar or browse the documentation.`;
        
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
          pvlt: pvltAnalysis,
        };
      }
    }

    // Generic fallback with PVLT-ordered suggestions (Foundation → Patterns → Details)
    return {
      response: `I'm currently operating in limited mode. Here's the recommended learning path:\n\n**1. Foundation (Start Here):**\n• [Before You Begin](/getting-started/before-you-begin/) - Prerequisites\n• [Authentication Guide](/quickstart-guides/authentication-quickstart-guide/) - Required for all API calls\n\n**2. Quickstart Guides:**\n• [Create a Campaign](/quickstart-guides/create-a-campaign-quickstart/)\n• [Upload a Creative](/quickstart-guides/upload-a-creative-quickstart/)\n\n**3. API Reference:**\n• [API Guidelines](/guidelines/) - Detailed endpoints\n\nYou can also use the search bar to find specific topics.`,
      actions: [],
      fallback: true,
      pvlt: pvltAnalysis,
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
