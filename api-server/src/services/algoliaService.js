/**
 * AlgoliaService - Searches IQM documentation using Algolia
 * Provides semantic search capabilities for the AI assistant
 * Uses Algolia v5 API
 */
import { algoliasearch } from 'algoliasearch';

export class AlgoliaService {
  constructor() {
    // Use the same credentials from docusaurus.config.js
    this.appId = process.env.ALGOLIA_APP_ID || '09FZUVDE53';
    this.apiKey = process.env.ALGOLIA_API_KEY || '***REMOVED***';
    this.indexName = process.env.ALGOLIA_INDEX_NAME || 'IQM API Docs';
    
    this.client = null;
    this.initialized = false;
  }

  /**
   * Initialize the Algolia client
   */
  init() {
    if (this.initialized) return;
    
    try {
      this.client = algoliasearch(this.appId, this.apiKey);
      this.initialized = true;
      console.log('✅ Algolia client initialized');
    } catch (error) {
      console.error('❌ Failed to initialize Algolia:', error.message);
    }
  }

  /**
   * Search documentation
   * @param {string} query - Search query
   * @param {Object} options - Search options
   * @returns {Promise<Object>} Search results with hits and metadata
   */
  async search(query, options = {}) {
    if (!this.initialized) {
      this.init();
    }

    if (!this.client) {
      console.warn('Algolia not available, returning empty results');
      return { hits: [], nbHits: 0, query };
    }

    try {
      const searchParams = {
        hitsPerPage: options.limit || 5,
        attributesToRetrieve: [
          'objectID',
          'url',
          'content',
          'hierarchy',
          'type',
          'anchor',
          'category',
          'topic',
        ],
        attributesToHighlight: ['content', 'hierarchy.lvl0', 'hierarchy.lvl1', 'hierarchy.lvl2'],
        highlightPreTag: '**',
        highlightPostTag: '**',
      };

      // Add filters if provided (e.g., category, topic)
      if (options.filters) {
        searchParams.filters = options.filters;
      }

      // Algolia v5 uses searchSingleIndex
      const results = await this.client.searchSingleIndex({
        indexName: this.indexName,
        searchParams: {
          query,
          ...searchParams,
        },
      });
      
      // Transform results for AI consumption
      const transformedHits = results.hits.map(hit => this.transformHit(hit));
      
      return {
        hits: transformedHits,
        nbHits: results.nbHits,
        query: results.query || query,
        processingTimeMS: results.processingTimeMS,
      };
    } catch (error) {
      console.error('Algolia search error:', error.message);
      return { hits: [], nbHits: 0, query, error: error.message };
    }
  }

  /**
   * Derive taxonomy category from URL path
   * Used when Algolia index doesn't have custom category attribute
   * @param {string} url - The document URL
   * @returns {string} Normalized category ID
   */
  getCategoryFromUrl(url) {
    if (url.includes('/quickstart-guides/')) return 'quickstart';
    if (url.includes('/guidelines/')) return 'guidelines';
    if (url.includes('/tutorials/')) return 'tutorials';
    if (url.includes('/getting-started/')) return 'reference';
    if (url.includes('/migration-guides/')) return 'migration';
    if (url.includes('/political-vertical/')) return 'political';
    if (url.includes('/healthcare-vertical/')) return 'healthcare';
    return 'reference';
  }

  /**
   * Derive topic from URL path
   * Extracts the API type from guidelines URLs
   * @param {string} url - The document URL
   * @returns {string} Topic ID (e.g., 'campaign', 'creative', 'audience')
   */
  getTopicFromUrl(url) {
    // Extract topic from guidelines URLs: /guidelines/campaign-api/ → 'campaign'
    const guidelinesMatch = url.match(/\/guidelines\/([^\/]+)-api/);
    if (guidelinesMatch) {
      return guidelinesMatch[1]; // e.g., 'campaign', 'creative', 'audience'
    }
    
    // Check for specific topics in other URLs
    if (url.includes('campaign') || url.includes('pg-campaign')) return 'campaign';
    if (url.includes('creative')) return 'creative';
    if (url.includes('audience') || url.includes('matched-audience') || url.includes('contextual')) return 'audience';
    if (url.includes('report') || url.includes('insights')) return 'reports';
    if (url.includes('auth') || url.includes('login') || url.includes('sign-up')) return 'auth';
    if (url.includes('conversion')) return 'conversion';
    if (url.includes('inventory') || url.includes('deal')) return 'inventory';
    if (url.includes('finance')) return 'finance';
    if (url.includes('bid-model')) return 'bidmodel';
    
    return 'general';
  }

  /**
   * Transform an Algolia hit into a cleaner format for AI
   * @param {Object} hit - Raw Algolia hit
   * @returns {Object} Transformed hit
   */
  transformHit(hit) {
    // Build the page title from hierarchy
    const hierarchy = hit.hierarchy || {};
    const title = hierarchy.lvl2 || hierarchy.lvl1 || hierarchy.lvl0 || 'Untitled';
    const section = hierarchy.lvl2 ? hierarchy.lvl1 : null;
    const displayCategory = hierarchy.lvl0 || 'Documentation';

    // Clean up the URL - remove domain and /docs/ prefix
    let url = hit.url || '';
    // Remove domain (https://developers.iqm.com)
    url = url.replace(/^https?:\/\/[^\/]+/, '');
    // Remove /docs/ prefix if present
    url = url.replace(/^\/docs\//, '/');
    
    // Add anchor if present and not already in URL
    if (hit.anchor && !url.includes('#')) {
      url = `${url}#${hit.anchor}`;
    }

    // Use custom category from Algolia if present, otherwise derive from URL
    // This supports Option B: when Algolia crawler is updated with custom attributes
    const category = hit.category || this.getCategoryFromUrl(url);
    
    // Use custom topic from Algolia if present, otherwise derive from URL
    const topic = hit.topic || this.getTopicFromUrl(url);

    // Get highlighted content or fallback to raw content
    const highlightResult = hit._highlightResult || {};
    const content = highlightResult.content?.value || hit.content || '';

    return {
      title,
      section,
      displayCategory, // Original hierarchy.lvl0 for display purposes
      category,        // Normalized category for filtering (quickstart, guidelines, etc.)
      topic,           // Topic for filtering (campaign, creative, etc.)
      url,
      content: this.truncateContent(content, 200),
      anchor: hit.anchor,
      type: hit.type, // 'lvl0', 'lvl1', 'lvl2', 'content'
      relevance: hit._rankingInfo?.matchedWords || 0,
    };
  }

  /**
   * Truncate content to a max length, preserving word boundaries
   */
  truncateContent(content, maxLength) {
    if (!content || content.length <= maxLength) return content;
    
    const truncated = content.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
  }

  /**
   * Search and format results as context for LLM
   * @param {string} query - User's question
   * @returns {Promise<string>} Formatted context string for LLM prompt
   */
  async getContextForQuery(query) {
    const results = await this.search(query, { limit: 5 });
    
    if (results.hits.length === 0) {
      return null;
    }

    // Format results as context for the LLM
    let context = `\n\nRelevant documentation found (${results.nbHits} total matches):\n`;
    
    results.hits.forEach((hit, i) => {
      context += `\n${i + 1}. **${hit.title}**`;
      if (hit.section) {
        context += ` (${hit.section})`;
      }
      context += `\n   URL: ${hit.url}`;
      if (hit.content) {
        context += `\n   Preview: ${hit.content}`;
      }
      context += '\n';
    });

    return context;
  }

  /**
   * Get the best matching page for a query
   * @param {string} query - Search query
   * @returns {Promise<Object|null>} Best match or null
   */
  async getBestMatch(query) {
    const results = await this.search(query, { limit: 1 });
    return results.hits[0] || null;
  }

  /**
   * Search with taxonomy filters
   * @param {string} query - Search query
   * @param {Object} taxonomy - Taxonomy filters
   * @returns {Promise<Object>} Filtered search results
   */
  async searchWithTaxonomy(query, taxonomy = {}) {
    const filters = [];
    
    if (taxonomy.category) {
      filters.push(`hierarchy.lvl0:"${taxonomy.category}"`);
    }
    if (taxonomy.topic) {
      filters.push(`hierarchy.lvl1:"${taxonomy.topic}"`);
    }

    return this.search(query, {
      limit: 10,
      filters: filters.length > 0 ? filters.join(' AND ') : undefined,
    });
  }
}

// Singleton instance
export const algoliaService = new AlgoliaService();
