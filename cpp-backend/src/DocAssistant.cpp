/**
 * DocAssistant Implementation
 * 
 * Uses HTTP calls to llama-server for inference.
 * Integrates IQM SDK for API context when available.
 */

#include "DocAssistant.h"
#include <iostream>
#include <sstream>
#include <regex>
#include <curl/curl.h>

#ifdef USE_IQM_SDK
#include "CppRestOpenAPIClient/api/CampaignsApi.h"
#include "CppRestOpenAPIClient/api/ReportsApi.h"
#include "CppRestOpenAPIClient/api/AudiencesApi.h"
#include "CppRestOpenAPIClient/api/CreativesApi.h"
#include "CppRestOpenAPIClient/ApiClient.h"
#endif

namespace iqm {
namespace docs {

// CURL write callback
static size_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* userp) {
    userp->append((char*)contents, size * nmemb);
    return size * nmemb;
}

/**
 * Private implementation (PIMPL pattern)
 */
class DocAssistant::Impl {
public:
    // Configuration
    std::string llamaServerUrl = "http://localhost:8080";
    std::string apiBaseUrl;
    
    // Algolia config
    std::string algoliaAppId;
    std::string algoliaApiKey;
    std::string algoliaIndexName = "iqm_docs";
    
    // Registered tools
    std::vector<Tool> tools;
    
    // System prompt - grounded in actual IQM doc structure
    std::string systemPrompt = R"(You are an AI assistant for IQM's programmatic advertising API documentation.

## Available Documentation Pages

Getting Started:
- /getting-started/ - Overview of IQM platform
- /getting-started/before-you-begin - Prerequisites
- /getting-started/api-pagination-guide - Pagination patterns
- /getting-started/typescript-prerequisites - TypeScript setup

API Guidelines:
- /guidelines/campaign-api - Campaign management
- /guidelines/creative-api - Creative upload/management  
- /guidelines/audience-api - Audience targeting
- /guidelines/reports-api - Reporting endpoints
- /guidelines/conversion-api - Conversion tracking
- /guidelines/dashboard-api - Dashboard metrics
- /guidelines/insights-api - Performance insights

Quickstarts:
- /quickstart-guides/authentication-quickstart-guide - Auth setup
- /quickstart-guides/create-a-campaign-quickstart - Campaign creation
- /quickstart-guides/reporting-api-quickstart-guide - Reporting
- /quickstart-guides/upload-a-creative-quickstart - Creative upload

RULES:
- Be concise and accurate
- Only reference pages that exist above
- Provide code examples when helpful
- Use markdown formatting)";

    bool initialized = false;
    
    // HTTP request helper
    std::string httpPost(const std::string& url, const std::string& body, 
                        const std::vector<std::string>& headers = {}) {
        CURL* curl = curl_easy_init();
        std::string response;
        
        if (curl) {
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, body.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);
            
            struct curl_slist* headerList = nullptr;
            headerList = curl_slist_append(headerList, "Content-Type: application/json");
            for (const auto& h : headers) {
                headerList = curl_slist_append(headerList, h.c_str());
            }
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headerList);
            
            CURLcode res = curl_easy_perform(curl);
            if (res != CURLE_OK) {
                std::cerr << "CURL error: " << curl_easy_strerror(res) << std::endl;
            }
            
            curl_slist_free_all(headerList);
            curl_easy_cleanup(curl);
        }
        
        return response;
    }
};

DocAssistant::DocAssistant() : pImpl(std::make_unique<Impl>()) {
    curl_global_init(CURL_GLOBAL_DEFAULT);
    
    // Register default tools
    registerTool({
        "search_docs",
        "Search the IQM documentation",
        {{"query", "string"}, {"max_results", "integer"}},
        [this](const json& params) { return toolSearchDocs(params); }
    });
    
    registerTool({
        "get_api_info",
        "Get details about an API endpoint",
        {{"endpoint", "string"}},
        [this](const json& params) { return toolGetApiInfo(params); }
    });
}

DocAssistant::~DocAssistant() {
    curl_global_cleanup();
}

bool DocAssistant::initialize(const std::string& modelPath, 
                             const std::string& apiBaseUrl,
                             int contextSize) {
    // modelPath is used as the llama-server URL in this implementation
    if (!modelPath.empty() && modelPath.find("http") == 0) {
        pImpl->llamaServerUrl = modelPath;
    }
    pImpl->apiBaseUrl = apiBaseUrl;
    pImpl->initialized = true;
    
    std::cout << "DocAssistant initialized, using llama-server at: " 
              << pImpl->llamaServerUrl << std::endl;
    
    return true;
}

void DocAssistant::setAlgoliaConfig(const std::string& appId, 
                                    const std::string& apiKey,
                                    const std::string& indexName) {
    pImpl->algoliaAppId = appId;
    pImpl->algoliaApiKey = apiKey;
    if (!indexName.empty()) {
        pImpl->algoliaIndexName = indexName;
    }
}

void DocAssistant::registerTool(const Tool& tool) {
    pImpl->tools.push_back(tool);
}

std::vector<DocSearchResult> DocAssistant::searchDocs(const std::string& query, 
                                                      int maxResults) {
    std::vector<DocSearchResult> results;
    
    if (pImpl->algoliaAppId.empty() || pImpl->algoliaApiKey.empty()) {
        // Return empty if Algolia not configured
        return results;
    }
    
    // Build Algolia search request
    std::string url = "https://" + pImpl->algoliaAppId + 
                      "-dsn.algolia.net/1/indexes/" + 
                      pImpl->algoliaIndexName + "/query";
    
    json requestBody = {
        {"query", query},
        {"hitsPerPage", maxResults}
    };
    
    std::vector<std::string> headers = {
        "X-Algolia-Application-Id: " + pImpl->algoliaAppId,
        "X-Algolia-API-Key: " + pImpl->algoliaApiKey
    };
    
    std::string response = pImpl->httpPost(url, requestBody.dump(), headers);
    
    try {
        auto j = json::parse(response);
        if (j.contains("hits")) {
            for (const auto& hit : j["hits"]) {
                DocSearchResult result;
                result.title = hit.value("title", "");
                result.url = hit.value("url", "");
                result.content = hit.value("content", "");
                result.relevanceScore = hit.value("_rankingInfo", json{}).value("matchedGeoLocation", 1.0);
                results.push_back(result);
            }
        }
    } catch (const std::exception& e) {
        std::cerr << "Error parsing Algolia response: " << e.what() << std::endl;
    }
    
    return results;
}

std::string DocAssistant::buildPrompt(const std::string& message,
                                     const std::vector<ChatMessage>& history,
                                     const json& pageContext,
                                     const std::string& ragContext) {
    std::ostringstream prompt;
    
    // Mistral instruct format
    prompt << "<s>[INST] " << pImpl->systemPrompt << "\n\n";
    
    // Add RAG context if available
    if (!ragContext.empty()) {
        prompt << "## Relevant Documentation\n" << ragContext << "\n\n";
    }
    
    // Add page context if available
    if (!pageContext.empty() && pageContext.contains("currentPage")) {
        prompt << "User is currently viewing: " << pageContext["currentPage"].get<std::string>() << "\n\n";
    }
    
    // Add conversation history
    for (const auto& msg : history) {
        if (msg.role == "user") {
            prompt << "User: " << msg.content << "\n";
        } else if (msg.role == "assistant") {
            prompt << "Assistant: " << msg.content << "\n";
        }
    }
    
    // Add current message
    prompt << "User: " << message << " [/INST]";
    
    return prompt.str();
}

AssistantResponse DocAssistant::chat(const std::string& message,
                                    const std::vector<ChatMessage>& history,
                                    const json& pageContext) {
    AssistantResponse response;
    
    if (!pImpl->initialized) {
        response.text = "DocAssistant is not initialized.";
        response.success = false;
        return response;
    }
    
    // Search documentation for context (RAG)
    std::string ragContext;
    auto searchResults = searchDocs(message, 3);
    for (const auto& result : searchResults) {
        ragContext += "### " + result.title + "\n";
        ragContext += result.content.substr(0, 500) + "...\n\n";
    }
    
    // Build prompt
    std::string fullPrompt = buildPrompt(message, history, pageContext, ragContext);
    
    // Call llama-server
    json requestBody = {
        {"prompt", fullPrompt},
        {"n_predict", 512},
        {"temperature", 0.7},
        {"top_p", 0.9},
        {"stop", {"</s>", "[INST]"}}
    };
    
    std::string llamaResponse = pImpl->httpPost(
        pImpl->llamaServerUrl + "/completion",
        requestBody.dump()
    );
    
    try {
        auto j = json::parse(llamaResponse);
        response.text = j.value("content", "");
        response.model = "mistral-7b-local";
        response.success = true;
        
        // Parse any actions from the response (simplified)
        response.actions = {};
    } catch (const std::exception& e) {
        response.text = "Error generating response: " + std::string(e.what());
        response.success = false;
    }
    
    return response;
}

json DocAssistant::getApiEndpointInfo(const std::string& endpoint) const {
    // This would normally load from the OpenAPI spec
    // For now, return basic info about known endpoints
    
    static const std::map<std::string, json> endpoints = {
        {"/api/v3/campaign", {
            {"method", "POST"},
            {"description", "Create a new campaign"},
            {"auth", "Bearer token required"}
        }},
        {"/api/v3/campaigns", {
            {"method", "GET"},
            {"description", "List all campaigns"},
            {"auth", "Bearer token required"}
        }},
        {"/api/v3/creative", {
            {"method", "POST"},
            {"description", "Upload a creative asset"},
            {"auth", "Bearer token required"}
        }}
    };
    
    auto it = endpoints.find(endpoint);
    if (it != endpoints.end()) {
        return it->second;
    }
    
    return {{"error", "Endpoint not found"}};
}

// Tool implementations
json DocAssistant::toolSearchDocs(const json& params) {
    std::string query = params.value("query", "");
    int maxResults = params.value("max_results", 5);
    
    auto results = searchDocs(query, maxResults);
    
    json response = json::array();
    for (const auto& result : results) {
        response.push_back({
            {"title", result.title},
            {"url", result.url},
            {"snippet", result.content.substr(0, 200)}
        });
    }
    
    return response;
}

json DocAssistant::toolGetApiInfo(const json& params) {
    std::string endpoint = params.value("endpoint", "");
    return getApiEndpointInfo(endpoint);
}

json DocAssistant::toolListEndpoints(const json& params) {
    // Return categorized endpoint list
    return {
        {"campaigns", {"/api/v3/campaign", "/api/v3/campaigns"}},
        {"creatives", {"/api/v3/creative", "/api/v3/creatives"}},
        {"reports", {"/api/v3/report", "/api/v3/report/schedule"}}
    };
}

json DocAssistant::toolGetExampleCode(const json& params) {
    std::string endpoint = params.value("endpoint", "");
    std::string language = params.value("language", "curl");
    
    // Return basic example
    if (language == "curl") {
        return {{"example", "curl -X POST '" + endpoint + "' -H 'Authorization: Bearer TOKEN'"}};
    }
    
    return {{"error", "Language not supported"}};
}

} // namespace docs
} // namespace iqm
