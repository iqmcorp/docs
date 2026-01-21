#include <iostream>
#include <csignal>
#include <atomic>

#include "server/http_server.hpp"
#include "inference/llama_wrapper.hpp"
#include "handlers/chat_handler.hpp"
#include "handlers/health_handler.hpp"
#include "utils/config.hpp"

namespace {
    std::atomic<bool> running{true};
    
    void signal_handler(int signal) {
        std::cout << "\nReceived signal " << signal << ", shutting down...\n";
        running = false;
    }
}

int main(int argc, char* argv[]) {
    // Load configuration
    iqm::Config config;
    if (!config.load_from_env()) {
        std::cerr << "Warning: Using default configuration\n";
    }

    // Initialize LLM
    iqm::LlamaWrapper llm;
    iqm::LlamaWrapper::Config llm_config;
    llm_config.model_path = config.get("MODEL_PATH", "./models/mistral-7b-instruct-v0.2.Q4_K_M.gguf");
    llm_config.n_ctx = config.get_int("N_CTX", 4096);
    llm_config.n_threads = config.get_int("N_THREADS", 4);
    llm_config.n_gpu_layers = config.get_int("N_GPU_LAYERS", 0);
    
    if (!llm.init(llm_config)) {
        std::cerr << "Warning: LLM initialization failed, running in fallback mode\n";
    } else {
        std::cout << "Loaded model: " << llm.get_model_name() << "\n";
    }

    // Create handlers
    iqm::ChatHandler chat_handler(llm);
    iqm::HealthHandler health_handler(llm);

    // Setup HTTP server
    iqm::HttpServer server;
    server.set_port(config.get_int("PORT", 8080));
    server.set_threads(config.get_int("SERVER_THREADS", 4));

    // Register routes
    server.get("/health", [&](const auto& req) { return health_handler.handle(req); });
    server.get("/v1/health", [&](const auto& req) { return health_handler.handle(req); });
    server.post("/v1/chat", [&](const auto& req) { return chat_handler.handle(req); });
    server.post("/v1/search", [&](const auto& req) { return chat_handler.handle_search(req); });

    // Setup signal handling
    std::signal(SIGINT, signal_handler);
    std::signal(SIGTERM, signal_handler);

    // Start server
    std::cout << "Starting IQM Docs AI Backend on port " << config.get_int("PORT", 8080) << "\n";
    if (!server.start()) {
        std::cerr << "Failed to start server\n";
        return 1;
    }

    std::cout << "Server running. Press Ctrl+C to stop.\n";

    // Wait for shutdown
    while (running && server.is_running()) {
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
    }

    server.stop();
    std::cout << "Server stopped.\n";

    return 0;
}
