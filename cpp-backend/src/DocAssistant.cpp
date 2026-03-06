/**
 * DocAssistant Implementation
 * 
 * Uses HTTP calls to llama-server for inference.
 * Integrates IQM SDK for API context when available.
 * Uses KnowledgeResolver for PVLT-weighted query understanding.
 */

#include "DocAssistant.h"
#include "ApiMetadataRegistry.h"
#include "KnowledgeResolver.h"
#include <iostream>
#include <sstream>
#include <regex>
#include <algorithm>
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
    
    // Knowledge resolver for PVLT-weighted understanding
    KnowledgeResolver knowledgeResolver;
    
    // Registered tools
    std::vector<Tool> tools;
    
    // System prompt - structured by knowledge layers
    std::string systemPrompt = R"PROMPT(You are a concise AI assistant for IQM's API documentation.

## CRITICAL INSTRUCTIONS
1. Be ULTRA BRIEF - 2-3 sentences maximum
2. DO NOT include any links, URLs, or API endpoint paths in your response - the UI adds them separately
3. DO NOT repeat workflow steps - the UI shows them in a structured format
4. DO NOT list "More Actions" or related endpoints - the UI shows these
5. Just give a quick, helpful answer to what the user asked
6. ALWAYS capitalize IQM entity names: Campaign, Insertion Order, Creative, Audience, Conversion, Bid Model, Report, Workspace, Customer, Advertiser, Inventory, Deal
7. NEVER mention specific API paths like "GET /api/v3/..." or endpoint URLs. The UI displays the correct endpoint. Use generic phrasing like "the listed endpoint" or "the endpoint detailed in the documentation".

## Good Response Example
"To list your Conversions, use the endpoint detailed in the Conversion API documentation below."

## Bad Response Examples
"Use the GET /api/v2/Conversion/list endpoint..." <- NEVER include API paths!
"To create a campaign, follow these steps: 1. Authenticate... 2. Upload creatives..." <- The UI shows steps!

## Entity Hierarchy (context only)
Workspace -> Customer -> Insertion Order -> Campaign
Campaign relates to: Creatives, Audiences, Conversions, Bid Models
Creatives can be organized into Creative Groups (a supported API feature for bulk management)
Inventory can be organized into Inventory Groups)PROMPT";



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
    
    registerTool({
        "get_entity_info",
        "Get entity information from knowledge layers (hierarchy, relationships, endpoints)",
        {{"entity", "string"}},
        [this](const json& params) { return toolGetEntityInfo(params); }
    });
    
    registerTool({
        "get_workflow",
        "Get workflow steps for common operations",
        {{"workflow", "string"}},
        [this](const json& params) { return toolGetWorkflow(params); }
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
    
    // Load knowledge layers - try multiple paths
    std::vector<std::string> knowledgePaths = {
        "../knowledge/build/knowledge.json",
        "knowledge/build/knowledge.json",
        "/Users/cteichiqm/IQM/docs/cpp-backend/knowledge/build/knowledge.json"
    };
    
    bool loaded = false;
    for (const auto& path : knowledgePaths) {
        std::cout << "Trying knowledge path: " << path << std::endl;
        if (pImpl->knowledgeResolver.loadFromFile(path)) {
            std::cout << "✓ Loaded PVLT knowledge layers from " << path << std::endl;
            loaded = true;
            break;
        } else {
            std::cout << "✗ Failed to load from " << path << std::endl;
        }
    }
    
    if (!loaded) {
        std::cerr << "Warning: Could not load knowledge layers" << std::endl;
        std::cerr << "AI responses will use basic mode without PVLT context." << std::endl;
    }
    
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

json DocAssistant::extractEntityAction(const std::string& query) {
    json result = {{"entity", ""}, {"action", ""}, {"confidence", 0.0}};
    
    if (!pImpl->initialized || !pImpl->knowledgeResolver.isLoaded()) {
        return result;
    }
    
    // Build extraction prompt with vocabulary
    std::ostringstream prompt;
    prompt << "<s>[INST] You are an API documentation assistant. Extract the entity and action from the user's query.\n\n";
    prompt << pImpl->knowledgeResolver.getEntityVocabulary() << "\n";
    prompt << pImpl->knowledgeResolver.getActionVocabulary() << "\n";
    prompt << "IMPORTANT DISTINCTIONS:\n";
    prompt << "- pld_report = 'PLD' = 'Provider Level Data' = HEALTHCARE vertical only\n";
    prompt << "- vld_report = 'VLD' = 'Voter Level Data' = POLITICAL vertical only\n";
    prompt << "- insertion_order = also called 'IO', a contract for campaigns\n";
    prompt << "- campaign = an advertising campaign that runs under an insertion order\n";
    prompt << "- conversion = tracking pixel or postback for measuring conversions/actions\n";
    prompt << "- reference_data = static lookup IDs (timezones, countries, states, cities, device types, age, gender, etc.)\n\n";
    prompt << "CRITICAL RULES:\n";
    prompt << "- 'PLD' or 'Provider Level Data' => entity='pld_report' (NOT vld_report)\n";
    prompt << "- 'VLD' or 'Voter Level Data' => entity='vld_report' (NOT pld_report)\n";
    prompt << "- PLD is healthcare, VLD is political - they are DIFFERENT\n";
    prompt << "- For 'what are timezone IDs', 'get country IDs', 'list states', 'device type IDs', 'age segment', etc. => entity='reference_data'\n";
    prompt << "- Questions about getting IDs for targeting (geographic, demographic, device, creative) => entity='reference_data'\n\n";
    prompt << "INSTRUCTIONS:\n";
    prompt << "- Respond ONLY with a single JSON object: {\"entity\": \"...\", \"action\": \"...\"}\n";
    prompt << "- Use exact entity and action names from the lists above\n";
    prompt << "- For 'what is X' questions, use action='explain' and set entity to X\n";
    prompt << "- For 'what is a conversion', use entity='conversion' and action='explain'\n";
    prompt << "- For 'what is an insertion order' or 'what is an IO', use entity='insertion_order' and action='explain'\n";
    prompt << "- For 'what is a campaign', use entity='campaign' and action='explain'\n";
    prompt << "- For 'what is an audience', use entity='audience' and action='explain'\n";
    prompt << "- If query mentions a specific entity (conversion, campaign, audience, etc.), ALWAYS set entity to that value\n";
    prompt << "- Only leave entity empty if truly no entity is mentioned\n\n";
    prompt << "User query: \"" << query << "\"\n\n";
    prompt << "JSON response: [/INST]";
    
    // Call LLM with low temperature for deterministic extraction
    json requestBody = {
        {"prompt", prompt.str()},
        {"n_predict", 100},
        {"temperature", 0.1},  // Low temperature for consistent extraction
        {"top_p", 0.9},
        {"stop", {"</s>", "[INST]", "\n\n"}}
    };
    
    std::string llamaResponse = pImpl->httpPost(
        pImpl->llamaServerUrl + "/completion",
        requestBody.dump()
    );
    
    try {
        auto respJson = json::parse(llamaResponse);
        std::string content = respJson.value("content", "");
        
        std::cout << "[DocAssistant] LLM extraction raw response: " << content << std::endl;
        
        // Remove LaTeX-style backslash escapes that Mistral sometimes adds (e.g., reference\_data -> reference_data)
        std::string cleanContent;
        for (size_t i = 0; i < content.size(); i++) {
            if (content[i] == '\\' && i + 1 < content.size() && content[i + 1] == '_') {
                // Skip the backslash, keep the underscore
                continue;
            }
            cleanContent += content[i];
        }
        content = cleanContent;
        
        // Extract JSON from response - handle multiple JSON objects by taking the last one
        // LLM sometimes outputs multiple options, and the last one is usually the correction
        size_t lastJsonEnd = content.rfind('}');
        if (lastJsonEnd != std::string::npos) {
            // Find the matching opening brace for this closing brace
            size_t braceCount = 1;
            size_t jsonStart = lastJsonEnd;
            while (jsonStart > 0 && braceCount > 0) {
                jsonStart--;
                if (content[jsonStart] == '}') braceCount++;
                else if (content[jsonStart] == '{') braceCount--;
            }
            
            if (braceCount == 0) {
                std::string jsonStr = content.substr(jsonStart, lastJsonEnd - jsonStart + 1);
                std::cout << "[DocAssistant] Parsing JSON: " << jsonStr << std::endl;
                auto extracted = json::parse(jsonStr);
                result["entity"] = extracted.value("entity", "");
                result["action"] = extracted.value("action", "");
                result["confidence"] = 0.8;  // Default confidence for successful extraction
                std::cout << "[DocAssistant] Extracted entity=" << result["entity"] 
                          << ", action=" << result["action"] << std::endl;
            }
        }
    } catch (const std::exception& e) {
        std::cerr << "Error extracting entity/action: " << e.what() << std::endl;
    }
    
    return result;
}

std::string DocAssistant::buildPrompt(const std::string& message,
                                     const std::vector<ChatMessage>& history,
                                     const json& pageContext,
                                     const std::string& ragContext,
                                     const std::string& knowledgeContext) {
    std::ostringstream prompt;
    
    // Mistral instruct format
    prompt << "<s>[INST] " << pImpl->systemPrompt << "\n\n";
    
    // LAYER 1-3: Add PVLT knowledge context
    if (!knowledgeContext.empty()) {
        prompt << "## QUERY CONTEXT (from Knowledge Layers)\n" << knowledgeContext << "\n";
        prompt << "⚠️ IMPORTANT: Do NOT include markdown links [text](url) in your response.\n";
        prompt << "Just describe the steps naturally. The UI will add proper links.\n\n";
    }
    
    // LAYER 4: Add Algolia RAG context if available
    if (!ragContext.empty()) {
        prompt << "## RELEVANT DOCUMENTATION (from Search)\n" << ragContext << "\n";
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

// Strip markdown links from LLM output - we'll provide validated links separately
static std::string stripMarkdownLinks(const std::string& text) {
    std::string result = text;
    std::regex linkPattern(R"(\[([^\]]+)\]\([^)]+\))");
    result = std::regex_replace(result, linkPattern, "$1");
    return result;
}

// Capitalize IQM entity names for consistency
static std::string capitalizeEntities(const std::string& text) {
    std::string result = text;
    
    // Entity patterns: lowercase -> Capitalized (with word boundaries)
    // Order matters - longer phrases first to avoid partial replacements
    std::vector<std::pair<std::regex, std::string>> patterns = {
        // Multi-word entities first
        {std::regex(R"(\binsertion orders?\b)", std::regex::icase), "Insertion Order"},
        {std::regex(R"(\bbid models?\b)", std::regex::icase), "Bid Model"},
        // Single-word entities
        {std::regex(R"(\bcampaigns?\b)", std::regex::icase), "Campaign"},
        {std::regex(R"(\bcreatives?\b)", std::regex::icase), "Creative"},
        {std::regex(R"(\baudiences?\b)", std::regex::icase), "Audience"},
        {std::regex(R"(\bconversions?\b)", std::regex::icase), "Conversion"},
        {std::regex(R"(\breports?\b)", std::regex::icase), "Report"},
        {std::regex(R"(\bworkspaces?\b)", std::regex::icase), "Workspace"},
        {std::regex(R"(\bcustomers?\b)", std::regex::icase), "Customer"},
        {std::regex(R"(\badvertisers?\b)", std::regex::icase), "Advertiser"},
        {std::regex(R"(\binventory\b)", std::regex::icase), "Inventory"},
        {std::regex(R"(\bdeals?\b)", std::regex::icase), "Deal"},
    };
    
    for (const auto& [pattern, replacement] : patterns) {
        // Check if plural form and preserve it
        std::smatch match;
        std::string temp = result;
        result = "";
        while (std::regex_search(temp, match, pattern)) {
            result += match.prefix();
            std::string matched = match[0];
            // If original ended with 's', make replacement plural
            if (!matched.empty() && (matched.back() == 's' || matched.back() == 'S')) {
                result += replacement + "s";
            } else {
                result += replacement;
            }
            temp = match.suffix();
        }
        result += temp;
    }
    
    return result;
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
    
    // LAYER 1-3: Resolve knowledge context using LLM extraction
    std::string knowledgeContextStr;
    KnowledgeContext kctx;
    std::string extractionMethod = "pattern";
    
    if (pImpl->knowledgeResolver.isLoaded()) {
        // PRIMARY: Use LLM to extract entity/action
        json extracted = extractEntityAction(message);
        std::string entity = extracted.value("entity", "");
        std::string action = extracted.value("action", "");
        
        if (!entity.empty()) {
            // LLM successfully extracted entity/action
            kctx = pImpl->knowledgeResolver.resolveByEntityAction(entity, action, message);
            extractionMethod = "llm";
            std::cout << "[DocAssistant] LLM extraction: entity=" << entity 
                      << ", action=" << action << std::endl;
        } else {
            // FALLBACK: Try pattern matching
            kctx = pImpl->knowledgeResolver.resolveQuery(message);
            extractionMethod = "pattern-fallback";
        }
        
        knowledgeContextStr = kctx.toPromptContext();
        response.knowledgeContext = kctx.toJson(&pImpl->knowledgeResolver);
    }
    
    // LAYER 4: Search documentation for context (RAG)
    // Use extracted entity for Algolia search - works better than full query
    std::string ragContext;
    std::string searchQuery = message;  // Default to full message
    
    // Build better search query from extracted knowledge
    if (response.knowledgeContext.contains("entity") && 
        !response.knowledgeContext["entity"].get<std::string>().empty()) {
        // Use entity name for search - Algolia works best with simple terms
        searchQuery = response.knowledgeContext["entity"].get<std::string>();
        // Replace underscores with spaces for better Algolia matching
        std::replace(searchQuery.begin(), searchQuery.end(), '_', ' ');
        std::cout << "[DocAssistant] Using entity for Algolia search: " << searchQuery << std::endl;
    } else if (!kctx.entities.empty()) {
        // Use first detected entity's ID
        searchQuery = kctx.entities[0].id;
        std::replace(searchQuery.begin(), searchQuery.end(), '_', ' ');
        std::cout << "[DocAssistant] Using pattern entity for Algolia search: " << searchQuery << std::endl;
    } else if (!kctx.intents.empty() && !kctx.intents[0].entity.empty()) {
        // Use intent's entity
        searchQuery = kctx.intents[0].entity;
        std::replace(searchQuery.begin(), searchQuery.end(), '_', ' ');
        std::cout << "[DocAssistant] Using intent entity for Algolia search: " << searchQuery << std::endl;
    }
    
    auto searchResults = searchDocs(searchQuery, 3);
    for (const auto& result : searchResults) {
        ragContext += "### " + result.title + "\n";
        ragContext += result.content.substr(0, 500) + "...\n\n";
    }
    
    // Build prompt
    std::string fullPrompt = buildPrompt(message, history, pageContext, ragContext, knowledgeContextStr);
    
    // Call llama-server for response generation
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
        std::string rawText = j.value("content", "");
        
        // Post-process: strip markdown links and capitalize entity names
        std::string processedText = stripMarkdownLinks(rawText);
        response.text = capitalizeEntities(processedText);
        response.model = "mistral-7b-local (" + extractionMethod + ")";
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
    // Use the ApiMetadataRegistry for rich endpoint information
    return ApiMetadataRegistry::instance().getEndpointJson(endpoint);
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
    std::string method = params.value("method", "");
    
    // If endpoint looks like a search query, search instead
    if (endpoint.find("/") == std::string::npos) {
        auto results = ApiMetadataRegistry::instance().searchEndpoints(endpoint);
        json response = json::array();
        for (const auto* meta : results) {
            response.push_back({
                {"path", meta->path},
                {"method", meta->method},
                {"summary", meta->summary},
                {"docPage", meta->docPage}
            });
        }
        return response;
    }
    
    return getApiEndpointInfo(endpoint);
}

json DocAssistant::toolListEndpoints(const json& params) {
    std::string category = params.value("category", "");
    auto& registry = ApiMetadataRegistry::instance();
    
    if (!category.empty()) {
        // Return endpoints for specific category
        auto endpoints = registry.getByCategory(category);
        json result = json::array();
        for (const auto* meta : endpoints) {
            result.push_back({
                {"path", meta->path},
                {"method", meta->method},
                {"summary", meta->summary}
            });
        }
        return {{category, result}};
    }
    
    // Return all categories with their endpoints
    json result;
    for (const auto& cat : registry.getCategories()) {
        auto endpoints = registry.getByCategory(cat);
        json catEndpoints = json::array();
        for (const auto* meta : endpoints) {
            catEndpoints.push_back(meta->path);
        }
        result[cat] = catEndpoints;
    }
    return result;
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

json DocAssistant::toolGetEntityInfo(const json& params) {
    std::string entityId = params.value("entity", "");
    
    if (!pImpl->knowledgeResolver.isLoaded()) {
        return {{"error", "Knowledge layers not loaded"}};
    }
    
    auto entity = pImpl->knowledgeResolver.getEntity(entityId);
    if (!entity) {
        // Try by ID field (e.g., "campaignId" → "campaign")
        entity = pImpl->knowledgeResolver.getEntityByIdField(entityId);
    }
    
    if (!entity) {
        return {{"error", "Entity not found: " + entityId}};
    }
    
    json result = {
        {"id", entity->id},
        {"id_field", entity->id_field},
        {"level", entity->level},
        {"description", entity->description},
        {"parent", entity->parent},
        {"children", entity->children},
        {"api", entity->api},
        {"primary_doc", entity->primary_doc},
        {"related_docs", entity->related_docs},
        {"relationship_type", entity->relationship_type},
        {"help_center", entity->help_center}
    };
    
    // Add endpoints
    json endpointsJson;
    for (const auto& [key, value] : entity->endpoints) {
        endpointsJson[key] = value;
    }
    result["endpoints"] = endpointsJson;
    
    // Add hierarchy context
    auto parent = pImpl->knowledgeResolver.getParentEntity(entityId);
    if (parent) {
        result["parent_info"] = {
            {"id", parent->id},
            {"id_field", parent->id_field}
        };
    }
    
    auto children = pImpl->knowledgeResolver.getChildEntities(entityId);
    json childrenInfo = json::array();
    for (const auto& child : children) {
        childrenInfo.push_back({
            {"id", child.id},
            {"relationship_type", child.relationship_type}
        });
    }
    result["children_info"] = childrenInfo;
    
    return result;
}

json DocAssistant::toolGetWorkflow(const json& params) {
    std::string workflowId = params.value("workflow", "");
    
    if (!pImpl->knowledgeResolver.isLoaded()) {
        return {{"error", "Knowledge layers not loaded"}};
    }
    
    auto workflow = pImpl->knowledgeResolver.getWorkflow(workflowId);
    if (!workflow) {
        // Try to find workflow by entity
        auto workflows = pImpl->knowledgeResolver.findWorkflowsForEntity(workflowId);
        if (!workflows.empty()) {
            workflow = workflows[0];
        }
    }
    
    if (!workflow) {
        return {{"error", "Workflow not found: " + workflowId}};
    }
    
    json stepsJson = json::array();
    for (const auto& step : workflow->steps) {
        stepsJson.push_back({
            {"step", step.step_name},
            {"entity", step.entity},
            {"endpoint", step.endpoint},
            {"doc", step.doc},
            {"description", step.description},
            {"optional", step.optional}
        });
    }
    
    return {
        {"id", workflow->id},
        {"name", workflow->name},
        {"description", workflow->description},
        {"primary_doc", workflow->primary_doc},
        {"steps", stepsJson}
    };
}

} // namespace docs
} // namespace iqm
