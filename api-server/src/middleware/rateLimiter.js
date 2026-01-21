/**
 * Simple in-memory rate limiter
 * For production, use Redis-based solution
 */
const requestCounts = new Map();

const WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 60000; // 1 minute
const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 20;

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, data] of requestCounts.entries()) {
    if (now - data.windowStart > WINDOW_MS) {
      requestCounts.delete(key);
    }
  }
}, WINDOW_MS);

export function rateLimiter(req, res, next) {
  // Use IP as identifier (in production, consider using user ID if authenticated)
  const identifier = req.ip || req.headers['x-forwarded-for'] || 'unknown';
  const now = Date.now();

  let data = requestCounts.get(identifier);

  if (!data || now - data.windowStart > WINDOW_MS) {
    // New window
    data = { count: 1, windowStart: now };
    requestCounts.set(identifier, data);
  } else {
    data.count++;
  }

  // Set rate limit headers
  res.setHeader('X-RateLimit-Limit', MAX_REQUESTS);
  res.setHeader('X-RateLimit-Remaining', Math.max(0, MAX_REQUESTS - data.count));
  res.setHeader('X-RateLimit-Reset', Math.ceil((data.windowStart + WINDOW_MS) / 1000));

  if (data.count > MAX_REQUESTS) {
    return res.status(429).json({
      error: 'Too many requests',
      retryAfter: Math.ceil((data.windowStart + WINDOW_MS - now) / 1000),
    });
  }

  next();
}
