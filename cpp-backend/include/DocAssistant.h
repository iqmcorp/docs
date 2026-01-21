/**
 * DocAssistant - AI Documentation Assistant Service
 * 
 * Integrates:
 * - llama.cpp for LLM inference
 * - IQM C++ SDK for API documentation context
 * - Tool orchestration for agentic behaviors
 */

#ifndef DOC_ASSISTANT_H
#define DOC_ASSISTANT_H

#include <string>
#include <vector>
#include <map>
#include <functional>
#include <memory>
#include <nlohmann/json.hpp>

// Forward declarations for IQM SDK types
namespace org::openapitools::client::api {
    class ApiClient;
    class CampaignsApi;
    class ReportsApi;
    class AudiencesApi;
}

namespace iqm {
namespace docs {

using json = nlohmann::json;

/**
 * Tool definition for the LLM to invoke
 */
struct Tool {
    std::string name;
    std::string description;
    json parameters_schema;
    std::function<json(const json&)> execute;
};

/**
 * Search result from documentation
 */
struct DocSearchResult {
    std::string title;
    std::string url;
    std::string content;
    float relevanceScore = 0.0f;
};

/**
 * Chat message in a conversation
 */
struct ChatMessage {
    std::string role;      // "user", "assistant", "system"
    std::string content;
};

/**
 * Response from the assistant
 */
struct AssistantResponse {
    std::string text;
    std::vector<json> actions;  // Tool calls to execute
    std::string model;
    bool success = false;
    std::string error;
};

/**
 * Main DocAssistant class
 */
class DocAssistant {
public:
    DocAssistant();
    ~DocAssistant();

    /**
     * Initialize the assistant with model and SDK configuration
     */
    bool initialize(const std::string& modelPath, 
                   const std::string& apiBaseUrl = "https://api.iqm.com",
                   int contextSize = 4096);

    /**
     * Process a chat message and return a response
     */
    AssistantResponse chat(const std::string& message,
                          const std::vector<ChatMessage>& history = {},
                          const json& pageContext = {});

    /**
     * Search documentation using Algolia
     */
    std::vector<DocSearchResult> searchDocs(const std::string& query,
                                            int maxResults = 5);

    /**
     * Get API endpoint information from OpenAPI spec
     */
    json getApiEndpointInfo(const std::string& endpoint) const;

    /**
     * Register a custom tool
     */
    void registerTool(const Tool& tool);

    /**
     * Set Algolia credentials
     */
    void setAlgoliaConfig(const std::string& appId, 
                         const std::string& apiKey,
                         const std::string& indexName = "");

private:
    class Impl;
    std::unique_ptr<Impl> pImpl;

    // Tool implementations
    json toolSearchDocs(const json& params);
    json toolGetApiInfo(const json& params);
    json toolListEndpoints(const json& params);
    json toolGetExampleCode(const json& params);

    // Build prompt with context
    std::string buildPrompt(const std::string& message,
                           const std::vector<ChatMessage>& history,
                           const json& pageContext,
                           const std::string& ragContext = "");
};

} // namespace docs
} // namespace iqm

#endif // DOC_ASSISTANT_H
