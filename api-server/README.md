# IQM Docs AI Gateway

Express.js API gateway for the AI assistant. Proxies requests to the C++ llama.cpp backend and provides fallback responses when unavailable.

## Quick Start

```bash
cd api-server
npm install
cp .env.example .env
npm run dev
```

## Endpoints

### POST /api/ai/chat
Main chat endpoint.

**Request:**
```json
{
  "message": "How do I create a campaign?",
  "context": {
    "currentPage": "/guidelines/campaign-api/",
    "pageTitle": "Campaign API",
    "headings": ["Overview", "Create Campaign"],
    "conversationHistory": []
  }
}
```

**Response:**
```json
{
  "response": "To create a campaign, you'll need to...",
  "actions": [
    {
      "tool": "navigate",
      "params": { "path": "/quickstart-guides/create-a-campaign-quickstart/" },
      "status": "pending"
    }
  ]
}
```

### POST /api/ai/search
Semantic search across documentation.

### GET /api/health
Health check.

### GET /api/health/ready
Readiness check (includes backend connectivity).

## Architecture

```
Frontend (React) 
    ↓
API Gateway (this server)
    ↓
C++ Backend (llama.cpp)
```

## Fallback Behavior

When C++ backend is unavailable:
1. Returns keyword-based routing to relevant docs
2. Suggests using search bar
3. Sets `fallback: true` in response

## Rate Limiting

- 20 requests per minute per IP
- Returns 429 with retry-after header when exceeded
