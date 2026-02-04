#!/bin/bash

# IQM Docs AI Backend Launcher
# Uses llama.cpp's built-in server

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MODEL_PATH="${MODEL_PATH:-$SCRIPT_DIR/models/mistral-7b-instruct-v0.2.Q4_K_M.gguf}"

# Port configuration:
#   llama-server: 8080 (LLM inference)
#   doc_assistant_server: 8088 (API layer, connects to llama-server)
LLAMA_PORT="${LLAMA_PORT:-8080}"
N_CTX="${N_CTX:-4096}"
N_THREADS="${N_THREADS:-4}"
N_GPU_LAYERS="${N_GPU_LAYERS:-0}"

# llama-server binary
LLAMA_SERVER="$SCRIPT_DIR/external/llama.cpp/build/bin/llama-server"

if [ ! -f "$LLAMA_SERVER" ]; then
    echo "Error: llama-server not found at $LLAMA_SERVER"
    echo "Run: cd external/llama.cpp && mkdir build && cd build && cmake .. && make -j"
    exit 1
fi

if [ ! -f "$MODEL_PATH" ]; then
    echo "Error: Model not found at $MODEL_PATH"
    echo "Download a model to the models/ directory"
    exit 1
fi

echo "Starting IQM Docs AI Backend (llama-server)..."
echo "  Model: $MODEL_PATH"
echo "  Port: $LLAMA_PORT"
echo "  Context: $N_CTX"
echo "  Threads: $N_THREADS"
echo "  GPU Layers: $N_GPU_LAYERS"
echo ""
echo "After starting, run doc_assistant_server on port 8088:"
echo "  ./build/doc_assistant_server --port 8088"

# System prompt for the documentation assistant
SYSTEM_PROMPT="You are an AI assistant for IQM's API documentation. Help developers understand and use IQM's advertising APIs.

Guidelines:
- Be concise and technical
- Reference specific API endpoints when relevant
- Format responses with markdown
- If unsure, suggest checking the documentation

Documentation sections:
- /getting-started/ - Platform overview and setup
- /quickstart-guides/ - Step-by-step tutorials  
- /guidelines/ - Detailed API references (Campaign, Creative, Audience, etc.)
- /tutorials/ - Advanced use cases"

exec "$LLAMA_SERVER" \
    --model "$MODEL_PATH" \
    --port "$LLAMA_PORT" \
    --ctx-size "$N_CTX" \
    --threads "$N_THREADS" \
    --n-gpu-layers "$N_GPU_LAYERS" \
    --chat-template mistral \
    --host 0.0.0.0
