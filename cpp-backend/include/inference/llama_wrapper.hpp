#pragma once

#include <string>
#include <vector>
#include <memory>
#include <functional>

namespace iqm {

/**
 * LlamaWrapper - C++ wrapper around llama.cpp
 * Provides a clean interface for inference
 */
class LlamaWrapper {
public:
    struct Config {
        std::string model_path;
        int n_ctx = 4096;           // Context size
        int n_batch = 512;          // Batch size
        int n_threads = 4;          // CPU threads
        int n_gpu_layers = 0;       // GPU offload layers (0 = CPU only)
        float temperature = 0.7f;
        float top_p = 0.9f;
        int top_k = 40;
        int max_tokens = 1024;
    };

    struct Message {
        std::string role;    // "user", "assistant", "system"
        std::string content;
    };

    struct ChatContext {
        std::string current_page;
        std::string page_title;
        std::vector<std::string> headings;
        std::vector<Message> conversation_history;
    };

    struct ChatResponse {
        std::string response;
        std::vector<std::string> suggested_pages;
        bool success = true;
        std::string error;
    };

    // Callback for streaming responses
    using StreamCallback = std::function<void(const std::string& token)>;

    LlamaWrapper();
    ~LlamaWrapper();

    // Initialize with config
    bool init(const Config& config);

    // Chat completion
    ChatResponse chat(const std::string& message, const ChatContext& context);

    // Streaming chat completion
    void chat_stream(const std::string& message, const ChatContext& context, StreamCallback callback);

    // Check if model is loaded
    bool is_ready() const;

    // Get model info
    std::string get_model_name() const;

private:
    class Impl;
    std::unique_ptr<Impl> impl_;
};

} // namespace iqm
