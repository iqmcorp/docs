#pragma once

#include "server/http_server.hpp"
#include "inference/llama_wrapper.hpp"

namespace iqm {

/**
 * HealthHandler - Handles /health endpoints
 */
class HealthHandler {
public:
    explicit HealthHandler(LlamaWrapper& llm);

    HttpServer::Response handle(const HttpServer::Request& req);

private:
    LlamaWrapper& llm_;
};

} // namespace iqm
