import { Router } from 'express';
import { AIService } from '../services/aiService.js';
import { algoliaService } from '../services/algoliaService.js';

export const chatRouter = Router();
const aiService = new AIService();

/**
 * POST /api/ai/chat
 * Main chat endpoint for AI assistant
 */
chatRouter.post('/chat', async (req, res, next) => {
  try {
    const { message, context } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        error: 'Invalid request',
        details: 'Message is required and must be a string',
      });
    }

    if (message.length > 2000) {
      return res.status(400).json({
        error: 'Message too long',
        details: 'Message must be 2000 characters or less',
      });
    }

    const response = await aiService.chat(message, context);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/ai/search
 * Algolia-powered semantic search across documentation
 */
chatRouter.post('/search', async (req, res, next) => {
  try {
    const { query, filters, limit } = req.body;

    if (!query || typeof query !== 'string') {
      return res.status(400).json({
        error: 'Invalid request',
        details: 'Query is required and must be a string',
      });
    }

    // Use Algolia for real search
    const searchResult = await algoliaService.search(query, { 
      limit: limit || 10,
      filters,
    });

    res.json({
      results: searchResult.hits || [],
      query: searchResult.query,
      totalCount: searchResult.nbHits || 0,
      processingTimeMS: searchResult.processingTimeMS,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/ai/search/suggest
 * Get quick suggestions for autocomplete
 */
chatRouter.get('/search/suggest', async (req, res, next) => {
  try {
    const { q } = req.query;

    if (!q || typeof q !== 'string') {
      return res.status(400).json({ error: 'Query parameter q is required' });
    }

    const results = await algoliaService.search(q, { limit: 5 });
    
    // Return simplified suggestions
    const suggestions = results.hits.map(hit => ({
      title: hit.title,
      url: hit.url,
      category: hit.category,
    }));

    res.json({ suggestions });
  } catch (error) {
    next(error);
  }
});
