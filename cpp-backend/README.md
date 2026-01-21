# IQM Docs AI Backend

C++ backend for the IQM Documentation AI Assistant.

## Components

### DocAssistant
The main AI service that integrates:
- **llama.cpp** for local LLM inference (Mistral 7B)
- **IQM C++ SDK** for API documentation context
- **Algolia** for documentation search (RAG)
- **Tool orchestration** for agentic behaviors

### Servers

1. **llama-server** (from llama.cpp) - Standalone inference server
2. **doc_assistant_server** - Integrated server with RAG and SDK

## Directory Structure

```
cpp-backend/
├── include/           # Header files
│   ├── DocAssistant.h
│   └── ...
├── src/               # Source files
│   ├── DocAssistant.cpp
│   └── doc_assistant_server.cpp
├── iqm-sdk/           # IQM C++ REST SDK (auto-generated)
├── external/
│   └── llama.cpp/     # llama.cpp submodule
├── models/            # GGUF model files
└── CMakeLists.txt
```

## Prerequisites

```bash
# macOS
brew install cmake cpprestsdk curl

# The Mistral model (downloaded separately)
# models/mistral-7b-instruct-v0.2.Q4_K_M.gguf
```

## Quick Start

### Option 1: Use llama-server (current setup)

```bash
# Build llama.cpp
cd external/llama.cpp
mkdir -p build && cd build
cmake .. -DLLAMA_BUILD_SERVER=ON
make -j$(sysctl -n hw.ncpu)

# Run llama-server
./bin/llama-server \
  --model ../../models/mistral-7b-instruct-v0.2.Q4_K_M.gguf \
  --port 8080 --ctx-size 4096
```

### Option 2: Build DocAssistant server (full integration)

```bash
cd cpp-backend
mkdir -p build && cd build
cmake ..
make -j$(sysctl -n hw.ncpu)

# Run the integrated server (requires llama-server running on 8080)
./doc_assistant_server \
  --port 8088 \
  --llama-url http://localhost:8080 \
  --algolia-app-id YOUR_APP_ID \
  --algolia-api-key YOUR_API_KEY
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/ai/chat` | POST | Chat with the assistant |
| `/completion` | POST | llama.cpp compatible endpoint |
| `/api/search` | POST | Search documentation |
| `/health` | GET | Health check |

### Chat Request

```json
{
  "message": "How do I create a campaign?",
  "context": {
    "currentPage": "/getting-started/",
    "conversationHistory": []
  }
}
```

### Chat Response

```json
{
  "response": "To create a campaign, use the POST /api/v3/campaign endpoint...",
  "actions": [],
  "model": "mistral-7b-local",
  "success": true
}
```

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   Frontend (React)                       │
│                  AIAssistantNavbarItem                   │
└─────────────────────────┬───────────────────────────────┘
                          │ HTTP
                          ▼
┌─────────────────────────────────────────────────────────┐
│                 Node.js API Gateway                      │
│                    (port 3333)                           │
│           - CORS, rate limiting, routing                 │
└─────────────────────────┬───────────────────────────────┘
                          │ HTTP
                          ▼
┌─────────────────────────────────────────────────────────┐
│              C++ DocAssistant Server                     │
│                    (port 8080)                           │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │ DocAssistant │  │  IQM SDK     │  │  llama.cpp   │   │
│  │   Service    │◄►│  (API info)  │  │  (inference) │   │
│  └──────────────┘  └──────────────┘  └──────────────┘   │
│         │                                                │
│         ▼                                                │
│  ┌──────────────────────────────────────────────────┐   │
│  │              Algolia Search (RAG)                 │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

## IQM SDK Integration

The IQM C++ SDK (in `iqm-sdk/`) is fully integrated when building with `-DUSE_IQM_SDK=ON`.

**Build with SDK:**
```bash
# First build the SDK
cd iqm-sdk && mkdir -p build && cd build && cmake .. && make -j$(sysctl -n hw.ncpu)
cd ../..

# Then build DocAssistant with SDK
cd build && cmake .. -DUSE_IQM_SDK=ON && make -j$(sysctl -n hw.ncpu)
```

**SDK provides:**
- Type-safe API models for all IQM endpoints
- `CampaignsApi`, `ReportsApi`, `AudiencesApi`, `CreativesApi`, etc.
- OpenAPI-generated from IQM's unified API spec

**Example usage:**
```cpp
#include "CppRestOpenAPIClient/api/CampaignsApi.h"
using namespace org::openapitools::client::api;

// Get campaign info
auto apiClient = std::make_shared<ApiClient>();
CampaignsApi campaigns(apiClient);
```

## Memory Requirements

| Model | RAM Required | GPU VRAM |
|-------|-------------|----------|
| Mistral 7B Q4_K_M | ~6GB | ~5GB |
| Mistral 7B Q8_0 | ~9GB | ~8GB |

## Performance Tips

1. Use GPU offloading: `--n-gpu-layers 35`
2. Adjust context size: `--ctx-size 2048` for lower memory
3. Use quantized models (Q4_K_M is a good balance)
