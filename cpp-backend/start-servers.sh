#!/bin/bash
# ============================================
# Unified Server Startup Script
# Starts both llama-server and doc_assistant_server
# with proper health checks and cleanup
# ============================================

set -e

# Configuration
LLAMA_PORT=${LLAMA_PORT:-8080}
DOC_PORT=${DOC_PORT:-8088}
MODEL_PATH=${MODEL_PATH:-"models/mistral-7b-instruct-v0.2.Q4_K_M.gguf"}
LLAMA_SERVER=${LLAMA_SERVER:-"llama-server"}  # Use Homebrew version by default
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_DIR="$SCRIPT_DIR/logs"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Create logs directory
mkdir -p "$LOG_DIR"

# ============================================
# Helper Functions
# ============================================

log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[✓]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[!]${NC} $1"
}

log_error() {
    echo -e "${RED}[✗]${NC} $1"
}

# Check if a port is in use
port_in_use() {
    lsof -i :$1 >/dev/null 2>&1
}

# Get PID using a port
get_pid_on_port() {
    lsof -ti :$1 2>/dev/null || echo ""
}

# Kill process on port
kill_port() {
    local port=$1
    local pid=$(get_pid_on_port $port)
    if [ -n "$pid" ]; then
        log_warn "Killing existing process on port $port (PID: $pid)"
        kill -9 $pid 2>/dev/null || true
        sleep 1
    fi
}

# Wait for server to be healthy
wait_for_health() {
    local url=$1
    local name=$2
    local max_attempts=${3:-30}
    local attempt=1
    
    log_info "Waiting for $name to be healthy..."
    
    while [ $attempt -le $max_attempts ]; do
        if curl -sf "$url" >/dev/null 2>&1; then
            log_success "$name is healthy"
            return 0
        fi
        echo -n "."
        sleep 1
        attempt=$((attempt + 1))
    done
    
    echo ""
    log_error "$name failed to start after $max_attempts seconds"
    return 1
}

# ============================================
# Main Script
# ============================================

show_usage() {
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  start     Start both servers (default)"
    echo "  stop      Stop both servers"
    echo "  restart   Restart both servers"
    echo "  status    Show server status"
    echo "  logs      Tail server logs"
    echo ""
    echo "Environment variables:"
    echo "  LLAMA_PORT    Llama server port (default: 8080)"
    echo "  DOC_PORT      Doc assistant port (default: 8088)"
    echo "  MODEL_PATH    Path to model file (default: models/mistral-7b-instruct-v0.2.Q4_K_M.gguf)"
    echo "  LLAMA_SERVER  Path to llama-server binary (default: llama-server from PATH/Homebrew)"
}

do_stop() {
    log_info "Stopping servers..."
    
    # Kill doc_assistant_server first
    if port_in_use $DOC_PORT; then
        kill_port $DOC_PORT
        log_success "Stopped doc_assistant_server on port $DOC_PORT"
    else
        log_info "doc_assistant_server not running"
    fi
    
    # Kill llama-server
    if port_in_use $LLAMA_PORT; then
        kill_port $LLAMA_PORT
        log_success "Stopped llama-server on port $LLAMA_PORT"
    else
        log_info "llama-server not running"
    fi
    
    # Also kill any orphaned processes by name
    pkill -9 -f "doc_assistant_server" 2>/dev/null || true
    pkill -9 -f "llama-server" 2>/dev/null || true
    
    sleep 1
    log_success "All servers stopped"
}

do_status() {
    echo ""
    echo "Server Status"
    echo "============="
    
    # Check llama-server
    if port_in_use $LLAMA_PORT; then
        local llama_pid=$(get_pid_on_port $LLAMA_PORT)
        if curl -sf "http://localhost:$LLAMA_PORT/health" >/dev/null 2>&1; then
            log_success "llama-server: Running on port $LLAMA_PORT (PID: $llama_pid) - HEALTHY"
        else
            log_warn "llama-server: Running on port $LLAMA_PORT (PID: $llama_pid) - NOT HEALTHY"
        fi
    else
        log_error "llama-server: Not running"
    fi
    
    # Check doc_assistant_server
    if port_in_use $DOC_PORT; then
        local doc_pid=$(get_pid_on_port $DOC_PORT)
        if curl -sf "http://localhost:$DOC_PORT/health" >/dev/null 2>&1; then
            log_success "doc_assistant_server: Running on port $DOC_PORT (PID: $doc_pid) - HEALTHY"
        else
            log_warn "doc_assistant_server: Running on port $DOC_PORT (PID: $doc_pid) - NOT HEALTHY"
        fi
    else
        log_error "doc_assistant_server: Not running"
    fi
    
    echo ""
}

do_start() {
    log_info "Starting servers..."
    echo ""
    
    # Ensure we're in the right directory
    cd "$SCRIPT_DIR"
    
    # Check for model file
    if [ ! -f "$MODEL_PATH" ]; then
        log_error "Model file not found: $MODEL_PATH"
        log_info "Please download a model or set MODEL_PATH environment variable"
        exit 1
    fi
    
    # Check for doc_assistant_server binary
    if [ ! -f "build/doc_assistant_server" ]; then
        log_error "doc_assistant_server binary not found"
        log_info "Please run: cd build && cmake .. && make"
        exit 1
    fi
    
    # Check for knowledge.json
    if [ ! -f "knowledge/build/knowledge.json" ]; then
        log_warn "knowledge.json not found, building..."
        node tools/build-knowledge.js
    fi
    
    # Stop any existing servers first
    do_stop
    
    echo ""
    log_info "Starting llama-server on port $LLAMA_PORT..."
    
    # Start llama-server (using Homebrew or custom binary)
    $LLAMA_SERVER \
        --model "$MODEL_PATH" \
        --port $LLAMA_PORT \
        --ctx-size 4096 \
        --n-gpu-layers 1 \
        > "$LOG_DIR/llama-server.log" 2>&1 &
    
    LLAMA_PID=$!
    echo $LLAMA_PID > "$LOG_DIR/llama-server.pid"
    
    # Wait for llama-server to be healthy (longer timeout for model loading)
    if ! wait_for_health "http://localhost:$LLAMA_PORT/health" "llama-server" 60; then
        log_error "Failed to start llama-server. Check logs: $LOG_DIR/llama-server.log"
        tail -20 "$LOG_DIR/llama-server.log"
        exit 1
    fi
    
    echo ""
    log_info "Starting doc_assistant_server on port $DOC_PORT..."
    
    # Start doc_assistant_server
    ./build/doc_assistant_server \
        --port $DOC_PORT \
        > "$LOG_DIR/doc-assistant.log" 2>&1 &
    
    DOC_PID=$!
    echo $DOC_PID > "$LOG_DIR/doc-assistant.pid"
    
    # Wait for doc_assistant_server to be healthy
    if ! wait_for_health "http://localhost:$DOC_PORT/health" "doc_assistant_server" 10; then
        log_error "Failed to start doc_assistant_server. Check logs: $LOG_DIR/doc-assistant.log"
        tail -20 "$LOG_DIR/doc-assistant.log"
        exit 1
    fi
    
    echo ""
    echo "============================================"
    log_success "All servers started successfully!"
    echo "============================================"
    echo ""
    echo "  llama-server:         http://localhost:$LLAMA_PORT"
    echo "  doc_assistant_server: http://localhost:$DOC_PORT"
    echo ""
    echo "  Logs: $LOG_DIR/"
    echo ""
    echo "  To stop:   $0 stop"
    echo "  To status: $0 status"
    echo ""
}

do_logs() {
    log_info "Tailing server logs (Ctrl+C to exit)..."
    echo ""
    tail -f "$LOG_DIR/llama-server.log" "$LOG_DIR/doc-assistant.log"
}

# ============================================
# Command Router
# ============================================

COMMAND=${1:-start}

case $COMMAND in
    start)
        do_start
        ;;
    stop)
        do_stop
        ;;
    restart)
        do_stop
        sleep 2
        do_start
        ;;
    status)
        do_status
        ;;
    logs)
        do_logs
        ;;
    -h|--help|help)
        show_usage
        ;;
    *)
        log_error "Unknown command: $COMMAND"
        show_usage
        exit 1
        ;;
esac
