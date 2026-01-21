/**
 * DocAssistant HTTP Server
 * 
 * A simple HTTP server that wraps the DocAssistant service
 * and provides REST API endpoints for the frontend.
 * 
 * This can replace the llama-server for a more integrated experience.
 */

#include "DocAssistant.h"
#include <iostream>
#include <sstream>
#include <thread>
#include <atomic>
#include <csignal>
#include <cstring>
#include <sys/socket.h>
#include <netinet/in.h>
#include <unistd.h>
#include <nlohmann/json.hpp>

using json = nlohmann::json;
using namespace iqm::docs;

// Global for signal handling
std::atomic<bool> running{true};
DocAssistant* globalAssistant = nullptr;

void signalHandler(int signum) {
    std::cout << "\nShutting down server..." << std::endl;
    running = false;
}

// Simple HTTP response helper
std::string httpResponse(int status, const std::string& contentType, const std::string& body) {
    std::ostringstream response;
    response << "HTTP/1.1 " << status;
    
    switch (status) {
        case 200: response << " OK"; break;
        case 400: response << " Bad Request"; break;
        case 404: response << " Not Found"; break;
        case 500: response << " Internal Server Error"; break;
    }
    
    response << "\r\n";
    response << "Content-Type: " << contentType << "\r\n";
    response << "Content-Length: " << body.length() << "\r\n";
    response << "Access-Control-Allow-Origin: *\r\n";
    response << "Access-Control-Allow-Methods: GET, POST, OPTIONS\r\n";
    response << "Access-Control-Allow-Headers: Content-Type\r\n";
    response << "Connection: close\r\n";
    response << "\r\n";
    response << body;
    
    return response.str();
}

// Parse HTTP request
struct HttpRequest {
    std::string method;
    std::string path;
    std::string body;
    std::map<std::string, std::string> headers;
};

HttpRequest parseRequest(const std::string& raw) {
    HttpRequest req;
    std::istringstream stream(raw);
    std::string line;
    
    // First line: METHOD PATH HTTP/1.1
    if (std::getline(stream, line)) {
        std::istringstream firstLine(line);
        firstLine >> req.method >> req.path;
    }
    
    // Headers
    while (std::getline(stream, line) && line != "\r" && !line.empty()) {
        size_t pos = line.find(':');
        if (pos != std::string::npos) {
            std::string key = line.substr(0, pos);
            std::string value = line.substr(pos + 2);
            // Remove \r if present
            if (!value.empty() && value.back() == '\r') value.pop_back();
            req.headers[key] = value;
        }
    }
    
    // Body (rest of content)
    std::ostringstream bodyStream;
    while (std::getline(stream, line)) {
        bodyStream << line;
    }
    req.body = bodyStream.str();
    
    return req;
}

// Handle HTTP request
std::string handleRequest(const HttpRequest& req, DocAssistant& assistant) {
    // CORS preflight
    if (req.method == "OPTIONS") {
        return httpResponse(200, "text/plain", "");
    }
    
    // Health check
    if (req.path == "/health" || req.path == "/api/health") {
        json response = {
            {"status", "healthy"},
            {"timestamp", std::time(nullptr)}
        };
        return httpResponse(200, "application/json", response.dump());
    }
    
    // Chat endpoint
    if (req.path == "/v1/chat" || req.path == "/api/ai/chat" || req.path == "/completion") {
        if (req.method != "POST") {
            return httpResponse(400, "application/json", R"({"error": "Method not allowed"})");
        }
        
        try {
            json requestJson = json::parse(req.body);
            
            std::string message;
            std::vector<ChatMessage> history;
            json pageContext;
            
            // Handle OpenAI-compatible format
            if (requestJson.contains("messages")) {
                auto& messages = requestJson["messages"];
                if (!messages.empty()) {
                    // Last message is the user query
                    message = messages.back()["content"].get<std::string>();
                    
                    // Previous messages are history
                    for (size_t i = 0; i < messages.size() - 1; i++) {
                        history.push_back({
                            messages[i]["role"].get<std::string>(),
                            messages[i]["content"].get<std::string>()
                        });
                    }
                }
            }
            // Handle our custom format
            else if (requestJson.contains("message")) {
                message = requestJson["message"].get<std::string>();
                
                if (requestJson.contains("context")) {
                    pageContext = requestJson["context"];
                    
                    if (pageContext.contains("conversationHistory")) {
                        for (const auto& msg : pageContext["conversationHistory"]) {
                            history.push_back({
                                msg["role"].get<std::string>(),
                                msg["content"].get<std::string>()
                            });
                        }
                    }
                }
            }
            // Handle llama.cpp /completion format
            else if (requestJson.contains("prompt")) {
                message = requestJson["prompt"].get<std::string>();
            }
            else {
                return httpResponse(400, "application/json", R"({"error": "Missing message or prompt"})");
            }
            
            // Process chat
            auto result = assistant.chat(message, history, pageContext);
            
            // Build response
            json response;
            
            if (req.path == "/completion") {
                // llama.cpp compatible response
                response = {
                    {"content", result.text},
                    {"model", result.model},
                    {"stop", true}
                };
            } else {
                // Our API format
                response = {
                    {"response", result.text},
                    {"actions", result.actions},
                    {"model", result.model},
                    {"success", result.success}
                };
                if (!result.error.empty()) {
                    response["error"] = result.error;
                }
            }
            
            return httpResponse(200, "application/json", response.dump());
            
        } catch (const json::exception& e) {
            json error = {{"error", std::string("JSON parse error: ") + e.what()}};
            return httpResponse(400, "application/json", error.dump());
        } catch (const std::exception& e) {
            json error = {{"error", e.what()}};
            return httpResponse(500, "application/json", error.dump());
        }
    }
    
    // Search endpoint
    if (req.path == "/api/search" || req.path == "/v1/search") {
        if (req.method != "POST") {
            return httpResponse(400, "application/json", R"({"error": "Method not allowed"})");
        }
        
        try {
            json requestJson = json::parse(req.body);
            std::string query = requestJson.value("query", "");
            int maxResults = requestJson.value("max_results", 5);
            
            auto results = assistant.searchDocs(query, maxResults);
            
            json response = json::array();
            for (const auto& r : results) {
                response.push_back({
                    {"title", r.title},
                    {"url", r.url},
                    {"snippet", r.content},
                    {"score", r.relevanceScore}
                });
            }
            
            return httpResponse(200, "application/json", response.dump());
            
        } catch (const std::exception& e) {
            json error = {{"error", e.what()}};
            return httpResponse(500, "application/json", error.dump());
        }
    }
    
    // Not found
    return httpResponse(404, "application/json", R"({"error": "Not found"})");
}

int main(int argc, char* argv[]) {
    // Parse command line args
    int port = 8080;
    std::string llamaUrl = "http://localhost:8080";
    std::string algoliaAppId = "";
    std::string algoliaApiKey = "";
    std::string algoliaIndex = "IQM API Docs";
    
    for (int i = 1; i < argc; i++) {
        if (strcmp(argv[i], "--port") == 0 && i + 1 < argc) {
            port = std::stoi(argv[++i]);
        } else if ((strcmp(argv[i], "--llama-url") == 0 || strcmp(argv[i], "--model") == 0) && i + 1 < argc) {
            llamaUrl = argv[++i];
        } else if (strcmp(argv[i], "--algolia-app-id") == 0 && i + 1 < argc) {
            algoliaAppId = argv[++i];
        } else if (strcmp(argv[i], "--algolia-api-key") == 0 && i + 1 < argc) {
            algoliaApiKey = argv[++i];
        } else if (strcmp(argv[i], "--help") == 0) {
            std::cout << "Usage: " << argv[0] << " [options]\n"
                      << "Options:\n"
                      << "  --port PORT           HTTP server port (default: 8080)\n"
                      << "  --llama-url URL       llama-server URL (default: http://localhost:8080)\n"
                      << "  --algolia-app-id ID   Algolia application ID\n"
                      << "  --algolia-api-key KEY Algolia API key\n"
                      << std::endl;
            return 0;
        }
    }
    
    // Set up signal handler
    signal(SIGINT, signalHandler);
    signal(SIGTERM, signalHandler);
    
    // Initialize DocAssistant
    DocAssistant assistant;
    globalAssistant = &assistant;
    
    if (!algoliaAppId.empty() && !algoliaApiKey.empty()) {
        assistant.setAlgoliaConfig(algoliaAppId, algoliaApiKey, algoliaIndex);
        std::cout << "Algolia search enabled" << std::endl;
    }
    
    std::cout << "Connecting to llama-server at: " << llamaUrl << std::endl;
    if (!assistant.initialize(llamaUrl)) {
        std::cerr << "Failed to initialize DocAssistant" << std::endl;
        return 1;
    }
    
    // Create socket
    int serverSocket = socket(AF_INET, SOCK_STREAM, 0);
    if (serverSocket < 0) {
        std::cerr << "Failed to create socket" << std::endl;
        return 1;
    }
    
    // Allow socket reuse
    int opt = 1;
    setsockopt(serverSocket, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));
    
    // Bind
    sockaddr_in serverAddr{};
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_addr.s_addr = INADDR_ANY;
    serverAddr.sin_port = htons(port);
    
    if (bind(serverSocket, (sockaddr*)&serverAddr, sizeof(serverAddr)) < 0) {
        std::cerr << "Failed to bind to port " << port << std::endl;
        close(serverSocket);
        return 1;
    }
    
    // Listen
    listen(serverSocket, 10);
    
    std::cout << "🚀 DocAssistant server running on http://0.0.0.0:" << port << std::endl;
    std::cout << "   Endpoints:" << std::endl;
    std::cout << "     POST /api/ai/chat    - Chat with assistant" << std::endl;
    std::cout << "     POST /completion     - llama.cpp compatible" << std::endl;
    std::cout << "     POST /api/search     - Search documentation" << std::endl;
    std::cout << "     GET  /health         - Health check" << std::endl;
    
    // Accept connections
    while (running) {
        sockaddr_in clientAddr{};
        socklen_t clientLen = sizeof(clientAddr);
        
        int clientSocket = accept(serverSocket, (sockaddr*)&clientAddr, &clientLen);
        if (clientSocket < 0) {
            if (running) {
                std::cerr << "Accept failed" << std::endl;
            }
            continue;
        }
        
        // Read request (simple: read up to 64KB)
        char buffer[65536];
        ssize_t bytesRead = read(clientSocket, buffer, sizeof(buffer) - 1);
        
        if (bytesRead > 0) {
            buffer[bytesRead] = '\0';
            
            auto request = parseRequest(buffer);
            auto response = handleRequest(request, assistant);
            
            write(clientSocket, response.c_str(), response.length());
        }
        
        close(clientSocket);
    }
    
    close(serverSocket);
    std::cout << "Server stopped" << std::endl;
    
    return 0;
}
