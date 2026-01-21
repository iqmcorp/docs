import { Router } from 'express';
import { AIService } from '../services/aiService.js';

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
 * Semantic search across documentation
 */
chatRouter.post('/search', async (req, res, next) => {
  try {
    const { query, filters } = req.body;

    if (!query || typeof query !== 'string') {
      return res.status(400).json({
        error: 'Invalid request',
        details: 'Query is required and must be a string',
      });
    }

    const searchResult = await aiService.search(query, filters);

    // Return results, summary, and totalCount directly
    res.json({
      results: searchResult.results || [],
      summary: searchResult.summary || '',
      totalCount: searchResult.totalCount || 0,
    });
  } catch (error) {
    next(error);
  }
});
