import { Router } from 'express';

export const healthRouter = Router();

healthRouter.get('/', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

healthRouter.get('/ready', async (req, res) => {
  // Check if C++ backend is available
  const cppBackendUrl = process.env.CPP_BACKEND_URL || 'http://localhost:8080';
  
  try {
    const response = await fetch(`${cppBackendUrl}/health`, {
      signal: AbortSignal.timeout(2000),
    });
    
    if (response.ok) {
      res.json({
        status: 'ready',
        backend: 'connected',
        timestamp: new Date().toISOString(),
      });
    } else {
      res.status(503).json({
        status: 'degraded',
        backend: 'unhealthy',
        timestamp: new Date().toISOString(),
      });
    }
  } catch (error) {
    res.status(503).json({
      status: 'degraded',
      backend: 'unavailable',
      fallback: 'algolia',
      timestamp: new Date().toISOString(),
    });
  }
});
