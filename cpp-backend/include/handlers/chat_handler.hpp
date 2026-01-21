#pragma once

#include "server/http_server.hpp"
#include "inference/llama_wrapper.hpp"

namespace iqm {

/**
 * ChatHandler - Handles /v1/chat and /v1/search endpoints
 */
class ChatHandler {
public:
    explicit ChatHandler(LlamaWrapper& llm);

    HttpServer::Response handle(const HttpServer::Request& req);
    HttpServer::Response handle_search(const HttpServer::Request& req);

private:
    LlamaWrapper& llm_;
    
    // System prompt for the documentation assistant
    static constexpr const char* SYSTEM_PROMPT = R"(You are an AI assistant for IQM's API documentation. Your role is to help developers understand and use IQM's advertising APIs.

Guidelines:
- Be concise and technical
- Reference specific API endpoints when relevant
- Suggest relevant documentation pages
- If unsure, recommend using the search or browsing the docs
- Format responses with markdown for readability

Available documentation sections:
- /getting-started/ - Platform overview and setup
- /quickstart-guides/ - Step-by-step tutorials
- /guidelines/ - Detailed API references
- /tutorials/ - Advanced use cases)";

    // Parse JSON request body
    LlamaWrapper::ChatContext parse_context(const std::string& body);
    
    // Format response as JSON
    std::string format_response(const LlamaWrapper::ChatResponse& response);
};

} // namespace iqm
