# IQM Docs AI Backend

C++ backend for the IQM Documentation AI Assistant.

> **Last Updated:** January 27, 2026  
> **Status:** Development - All core components working locally

## Architecture Overview

The AI assistant uses a **4-layer knowledge architecture** (PVLT-aligned) to understand user queries:

```
┌─────────────────────────────────────────────────────────────────┐
│  LAYER 1: SKELETON (Foundation - Weight 4)                      │
│  Entity structure: Campaign → Creative, Conversion, Audience    │
│  Source: knowledge/skeleton.yaml                                │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 2: TAXONOMY (Patterns - Weight 3)                        │
│  Doc categories, API groupings, workflow patterns               │
│  Source: knowledge/taxonomy.yaml                                │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 3: NAVIGATION (Experience - Weight 2)                    │
│  Intent mapping, user journeys, related docs                    │
│  Source: knowledge/navigation.yaml                              │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 4: CONTENT (Details - Weight 1)                          │
│  Actual text, code examples (via Algolia)                       │
│  Source: Algolia DocSearch index                                │
└─────────────────────────────────────────────────────────────────┘
```

**Key Insight:** The LLM fails when it starts at Layer 4 (Content) without Layer 1-3 context.
It's like choosing paint colors before building the foundation.

See [KNOWLEDGE_LAYERS.md](./KNOWLEDGE_LAYERS.md) for detailed architecture documentation.

---

## Component Registry

> ⚠️ **IMPORTANT:** Before adding new components, check this registry to avoid redundancy.  
> All components must have a clear purpose and be documented here.

### C++ Backend Components

| Component | File | Purpose | Status |
|-----------|------|---------|--------|
| **KnowledgeResolver** | `src/KnowledgeResolver.cpp` | PVLT-weighted query resolution, entity matching, intent detection | ✅ Active |
| **DocAssistant** | `src/DocAssistant.cpp` | LLM orchestration, system prompt construction, context injection | ✅ Active |
| **ApiMetadataRegistry** | `src/ApiMetadataRegistry.cpp` | Endpoint metadata for LLM context (772 lines of API info) | ✅ Active |
| **doc_assistant_server** | `src/doc_assistant_server.cpp` | HTTP server exposing `/api/ai/chat` endpoint | ✅ Active |

### Knowledge Layers

| Layer | File | Weight | Purpose |
|-------|------|--------|---------|
| **Skeleton** | `knowledge/skeleton.yaml` | 4 | Entity structure, relationships, ID field mappings |
| **Taxonomy** | `knowledge/taxonomy.yaml` | 3 | Doc categories, API groupings, entity→doc mappings |
| **Navigation** | `knowledge/navigation.yaml` | 2 | Intent patterns (145+), user journeys, related sections |

### Build Tools

| Tool | File | Purpose |
|------|------|---------|
| **build-knowledge.js** | `tools/build-knowledge.js` | Compiles YAML → JSON, extracts frontmatter slugs |
| **extract-headings.js** | `tools/extract-headings.js` | Parses MDX for ### anchors, indexes by entity/action/endpoint |

### Frontend Components (in `/src`)

| Component | File | Purpose | Status |
|-----------|------|---------|--------|
| **AIAssistantNavbarItem** | `src/theme/NavbarItem/AIAssistantNavbarItem.tsx` | Main chat UI, search mode toggle, LLM interaction | ✅ Active |
| **SearchResults** | `src/components/AIAssistant/SearchResults.tsx` | Search mode result display | ✅ Active |
| **TaxonomyFilter** | `src/components/AIAssistant/TaxonomyFilter.tsx` | Filter controls for search results | ✅ Active |
| **SupportPanel** | `src/components/Support/SupportPanel.tsx` | Doc footer with community links, feedback | ✅ Active |
| **FeedbackWidget** | `src/components/Support/FeedbackWidget.tsx` | Thumbs up/down feedback collection | ✅ Active |
| **CommunitySection** | `src/components/Support/CommunitySection.tsx` | Discord/GitHub links | ✅ Active |

### External Dependencies

| Dependency | Source | Purpose | Status |
|------------|--------|---------|--------|
| **llama-server** | Homebrew (`brew install llama.cpp`) | LLM inference server | ✅ Using Homebrew |
| **iqm-sdk** | `iqm-sdk/` (OpenAPI-generated) | Type-safe IQM API models | 🔄 Optional (disabled) |

---

## Port Configuration

| Server | Default Port | Purpose |
|--------|-------------|----------|
| **Docusaurus** | 3000 | Frontend documentation site |
| **llama-server** | 8080 | LLM inference (Mistral model) |
| **doc_assistant_server** | 8088 | API layer (connects to llama-server) |

> ⚠️ **Important:** Both servers must be running for the AI assistant to work.
> The doc_assistant_server forwards LLM requests to llama-server.

---

## Server Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Docusaurus Frontend                          │
│                     http://localhost:3000                        │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  AIAssistantNavbarItem.tsx                                  ││
│  │  - Chat mode: sends to doc_assistant_server                 ││
│  │  - Search mode: uses Algolia + SearchResults.tsx            ││
│  └──────────────────────────┬──────────────────────────────────┘│
└─────────────────────────────┼───────────────────────────────────┘
                              │ POST /api/ai/chat
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                  doc_assistant_server (C++)                      │
│                  http://localhost:8088                           │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  DocAssistant                                               ││
│  │  ├── KnowledgeResolver (query → entities, intents, docs)    ││
│  │  ├── ApiMetadataRegistry (endpoint context)                 ││
│  │  └── LLM client (calls llama-server)                        ││
│  └──────────────────────────┬──────────────────────────────────┘│
└─────────────────────────────┼───────────────────────────────────┘
                              │ POST /completion
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                  llama-server (Homebrew)                         │
│                  http://localhost:8080                           │
│  Model: mistral-7b-instruct-v0.2.Q4_K_M.gguf                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## Directory Structure

```
cpp-backend/
├── knowledge/              # Knowledge layer definitions
│   ├── skeleton.yaml       # Layer 1: Entity structure (weight 4)
│   ├── taxonomy.yaml       # Layer 2: Organizational patterns (weight 3)
│   ├── navigation.yaml     # Layer 3: User journeys & intents (weight 2)
│   └── build/              # Compiled JSON for runtime
│       ├── knowledge.json  # Combined layers
│       └── headings.json   # Section anchors index
├── include/                # Header files
│   ├── KnowledgeResolver.h
│   ├── DocAssistant.h
│   └── ApiMetadataRegistry.h
├── src/                    # Source files
│   ├── KnowledgeResolver.cpp      # Query resolution engine
│   ├── DocAssistant.cpp           # LLM orchestration
│   ├── ApiMetadataRegistry.cpp    # API endpoint metadata
│   └── doc_assistant_server.cpp   # HTTP server
├── tools/                  # Build tools (Node.js)
│   ├── build-knowledge.js         # YAML → JSON compiler
│   └── extract-headings.js        # MDX heading extractor
├── tests/                  # Test files
│   └── test_knowledge_resolver.cpp
├── iqm-sdk/                # IQM C++ REST SDK (optional, OpenAPI-generated)
├── models/                 # GGUF model files
│   └── mistral-7b-instruct-v0.2.Q4_K_M.gguf
├── CMakeLists.txt          # Build configuration
└── README.md               # This file
```

### Deleted Components (for reference)

| Component | Reason for Deletion | Date |
|-----------|---------------------|------|
| `/api-server/` (Node.js) | Replaced by C++ doc_assistant_server | Jan 27, 2026 |
| `src/main.cpp` | Dead code, referenced non-existent headers | Jan 27, 2026 |
| `external/llama.cpp/` (~100MB) | Using Homebrew llama-server instead | Jan 27, 2026 |
| `src/components/Support/AskQuestion.tsx` | Redundant with SupportPanel | Jan 27, 2026 |

## Prerequisites

```bash
# macOS
brew install cmake cpprestsdk curl llama.cpp

# Node.js (for knowledge build)
brew install node
cd tools && npm install js-yaml

# The Mistral model (download separately ~4GB)
# Place in: models/mistral-7b-instruct-v0.2.Q4_K_M.gguf
```

## Quick Start

### Option 1: Unified Script (Recommended)

The `start-servers.sh` script manages both servers with proper health checks and cleanup:

```bash
cd cpp-backend

# Build knowledge layers first
node tools/build-knowledge.js

# Start both servers
./start-servers.sh start

# Check status anytime
./start-servers.sh status

# View logs
./start-servers.sh logs

# Stop both servers
./start-servers.sh stop

# Restart both servers
./start-servers.sh restart
```

The script will:
- Kill any existing processes on ports 8080 and 8088
- Start llama-server with the model and wait for it to be healthy
- Start doc_assistant_server and wait for it to be healthy
- Report status with URLs and PIDs
- Store logs in `logs/` directory

### Option 2: Manual Steps

#### Step 1: Build Knowledge Layers

```bash
cd cpp-backend

# Build knowledge JSON from YAML layers
node tools/build-knowledge.js

# Outputs:
#   knowledge/build/knowledge.json   - Combined layers
#   knowledge/build/headings.json    - Section anchors
```

#### Step 2: Start llama-server (Port 8080)

```bash
# Start llama-server on port 8080 (LLM inference)
llama-server \
  -m models/mistral-7b-instruct-v0.2.Q4_K_M.gguf \
  -c 4096 \
  --port 8080 &

# Verify it's running
curl http://localhost:8080/health
# Expected: {"status":"ok"}
```

#### Step 3: Build and Run doc_assistant_server (Port 8088)

```bash
cd cpp-backend
mkdir -p build && cd build
cmake ..
make -j4

# Run the server on port 8088 (connects to llama-server on 8080)
./doc_assistant_server --port 8088 &

# Verify it's running
curl http://localhost:8088/health
# Expected: {"status":"healthy","timestamp":...}
```

#### Step 4: Start Docusaurus

```bash
cd /path/to/docs
npm start
# Opens http://localhost:3000
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/ai/chat` | POST | Chat with the assistant |
| `/health` | GET | Health check |

### Chat Request

```json
{
  "message": "How do I create a campaign?",
  "context": {
    "currentPage": "/getting-started/"
  }
}
```

### Chat Response

```json
{
  "response": "To create a campaign, use the POST /api/v3/campaign endpoint...",
  "relatedSections": [
    "/quickstart-guides/create-a-campaign-quickstart",
    "/guidelines/campaign-api#add-a-campaign"
  ],
  "model": "mistral-7b-local",
  "success": true
}
```

---

## IQM SDK Integration (Optional)

The IQM C++ SDK (in `iqm-sdk/`) provides type-safe API models. Currently disabled but available for future use.

**Build with SDK:**
```bash
cmake .. -DUSE_IQM_SDK=ON
make -j4
```

**SDK provides:**
- Type-safe API models for all IQM endpoints
- `CampaignsApi`, `ReportsApi`, `AudiencesApi`, `CreativesApi`, etc.
- OpenAPI-generated from IQM's unified API spec

---

## Memory Requirements

| Model | RAM Required | GPU VRAM |
|-------|-------------|----------|
| Mistral 7B Q4_K_M | ~6GB | ~5GB |
| Mistral 7B Q8_0 | ~9GB | ~8GB |

## Performance Tips

1. Use GPU offloading: `llama-server --n-gpu-layers 35`
2. Adjust context size: `--ctx-size 2048` for lower memory
3. Use quantized models (Q4_K_M is a good balance)

---

## Deployment Notes

**Current:** Local development only (3 servers on localhost)

**Production Options (TBD - coordinate with backend team):**
- Docusaurus → GitHub Pages (static)
- doc_assistant_server + llama-server → Azure Container Apps / Railway / Fly.io
- Alternative: Use Groq API / OpenAI instead of self-hosted LLM
