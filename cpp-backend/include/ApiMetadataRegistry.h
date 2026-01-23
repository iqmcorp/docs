/**
 * ApiMetadataRegistry - Maps IQM SDK endpoints to documentation metadata
 * 
 * This registry provides endpoint information for the DocAssistant
 * by leveraging IQM C++ SDK model types.
 */

#ifndef API_METADATA_REGISTRY_H
#define API_METADATA_REGISTRY_H

#include <string>
#include <vector>
#include <map>
#include <nlohmann/json.hpp>

namespace iqm {
namespace docs {

using json = nlohmann::json;

/**
 * API endpoint metadata
 */
struct EndpointMeta {
    std::string path;
    std::string method;
    std::string summary;
    std::string description;
    std::string category;          // campaigns, reports, audiences, etc.
    std::string docPage;           // Link to doc page
    std::vector<std::string> tags;
    json requestBody;              // Schema for request
    json responseBody;             // Schema for response
    json parameters;               // Path/query parameters
    bool requiresAuth = true;
};

/**
 * Registry of all API endpoints with documentation metadata
 */
class ApiMetadataRegistry {
public:
    static ApiMetadataRegistry& instance();

    /**
     * Get metadata for a specific endpoint
     */
    const EndpointMeta* getEndpoint(const std::string& path, 
                                    const std::string& method = "") const;

    /**
     * Search endpoints by keyword
     */
    std::vector<const EndpointMeta*> searchEndpoints(const std::string& query) const;

    /**
     * Get all endpoints in a category
     */
    std::vector<const EndpointMeta*> getByCategory(const std::string& category) const;

    /**
     * Get endpoint as JSON (for LLM context)
     */
    json getEndpointJson(const std::string& path, 
                         const std::string& method = "") const;

    /**
     * Get all categories
     */
    std::vector<std::string> getCategories() const;

    /**
     * Get count of registered endpoints
     */
    size_t size() const { return endpoints_.size(); }

private:
    ApiMetadataRegistry();
    void registerEndpoints();
    void registerCampaignEndpoints();
    void registerReportEndpoints();
    void registerAudienceEndpoints();
    void registerCreativeEndpoints();
    void registerConversionEndpoints();
    void registerInventoryEndpoints();
    void registerDashboardEndpoints();

    std::map<std::string, EndpointMeta> endpoints_;
    std::map<std::string, std::vector<std::string>> categoryIndex_;
};

} // namespace docs
} // namespace iqm

#endif // API_METADATA_REGISTRY_H
