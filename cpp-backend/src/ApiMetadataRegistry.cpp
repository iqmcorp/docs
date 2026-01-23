/**
 * ApiMetadataRegistry Implementation
 * 
 * Provides rich endpoint metadata derived from IQM SDK types and OpenAPI spec.
 */

#include "ApiMetadataRegistry.h"
#include <algorithm>
#include <cctype>
#include <sstream>

#ifdef USE_IQM_SDK
// Include SDK model headers for type information
#include "CppRestOpenAPIClient/model/AddCampaignRequestVO.h"
#include "CppRestOpenAPIClient/model/CampaignBasicListResponse.h"
#include "CppRestOpenAPIClient/model/GetCampaign_200_response.h"
#include "CppRestOpenAPIClient/model/ReportRequestVO.h"
#include "CppRestOpenAPIClient/model/AudienceResponse.h"
#include "CppRestOpenAPIClient/model/CreateCreativeResponse.h"
#include "CppRestOpenAPIClient/model/ConversionDetailsResponse.h"
#include "CppRestOpenAPIClient/model/InventoryGroupResponse.h"
#include "CppRestOpenAPIClient/model/DashboardRequestVO.h"
#endif

namespace iqm {
namespace docs {

ApiMetadataRegistry& ApiMetadataRegistry::instance() {
    static ApiMetadataRegistry registry;
    return registry;
}

ApiMetadataRegistry::ApiMetadataRegistry() {
    registerEndpoints();
}

void ApiMetadataRegistry::registerEndpoints() {
    registerCampaignEndpoints();
    registerReportEndpoints();
    registerAudienceEndpoints();
    registerCreativeEndpoints();
    registerConversionEndpoints();
    registerInventoryEndpoints();
    registerDashboardEndpoints();
}

void ApiMetadataRegistry::registerCampaignEndpoints() {
    // POST /api/v3/campaign - Create campaign
    endpoints_["POST:/api/v3/campaign"] = {
        .path = "/api/v3/campaign",
        .method = "POST",
        .summary = "Create a new campaign",
        .description = "Creates a new advertising campaign with specified targeting, budget, and creative settings.",
        .category = "campaigns",
        .docPage = "/guidelines/campaign-api#create-a-campaign",
        .tags = {"campaign", "create"},
        .requestBody = {
            {"type", "object"},
            {"required", {"campaignName", "advertiserId", "startDate", "endDate", "budgetTotal"}},
            {"properties", {
                {"campaignName", {{"type", "string"}, {"description", "Name of the campaign"}}},
                {"advertiserId", {{"type", "integer"}, {"description", "Advertiser/customer ID"}}},
                {"startDate", {{"type", "string"}, {"format", "date"}, {"description", "Campaign start date"}}},
                {"endDate", {{"type", "string"}, {"format", "date"}, {"description", "Campaign end date"}}},
                {"budgetTotal", {{"type", "number"}, {"description", "Total campaign budget in dollars"}}},
                {"budgetDay", {{"type", "number"}, {"description", "Daily budget cap"}}},
                {"maxBid", {{"type", "number"}, {"description", "Maximum bid price"}}},
                {"campaignTypeId", {{"type", "integer"}, {"description", "Campaign type (1=standard, 14=PG)"}}},
                {"creativeIds", {{"type", "array"}, {"items", {{"type", "integer"}}}}},
                {"audienceIds", {{"type", "array"}, {"items", {{"type", "integer"}}}}}
            }}
        },
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"success", {{"type", "boolean"}}},
                {"data", {
                    {"type", "object"},
                    {"properties", {
                        {"campaignId", {{"type", "integer"}}},
                        {"campaignStatus", {{"type", "string"}}}
                    }}
                }}
            }}
        },
        .parameters = json::array(),
        .requiresAuth = true
    };
    categoryIndex_["campaigns"].push_back("POST:/api/v3/campaign");

    // GET /api/v3/campaign/{id} - Get campaign details
    endpoints_["GET:/api/v3/campaign/{id}"] = {
        .path = "/api/v3/campaign/{id}",
        .method = "GET",
        .summary = "Get campaign details",
        .description = "Retrieves detailed information about a specific campaign including targeting, budget, and performance data.",
        .category = "campaigns",
        .docPage = "/guidelines/campaign-api#get-campaign-details",
        .tags = {"campaign", "read", "details"},
        .requestBody = {},
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"success", {{"type", "boolean"}}},
                {"responseObject", {
                    {"type", "object"},
                    {"properties", {
                        {"campaignId", {{"type", "integer"}}},
                        {"campaignName", {{"type", "string"}}},
                        {"campaignStatus", {{"type", "string"}}},
                        {"startDate", {{"type", "string"}}},
                        {"endDate", {{"type", "string"}}},
                        {"budgetTotal", {{"type", "number"}}},
                        {"spent", {{"type", "number"}}}
                    }}
                }}
            }}
        },
        .parameters = {
            {{"name", "id"}, {"in", "path"}, {"type", "integer"}, {"required", true}, {"description", "Campaign ID"}}
        },
        .requiresAuth = true
    };
    categoryIndex_["campaigns"].push_back("GET:/api/v3/campaign/{id}");

    // GET /api/v3/campaign/basic/list - List campaigns
    endpoints_["POST:/api/v3/campaign/basic/list"] = {
        .path = "/api/v3/campaign/basic/list",
        .method = "POST",
        .summary = "List campaigns with filters",
        .description = "Retrieves a paginated list of campaigns with optional filtering by status, date range, and search terms.",
        .category = "campaigns",
        .docPage = "/guidelines/campaign-api#get-campaign-list",
        .tags = {"campaign", "list", "search"},
        .requestBody = {
            {"type", "object"},
            {"properties", {
                {"status", {{"type", "string"}, {"enum", {"running", "paused", "pending", "expired", "deleted"}}}},
                {"searchField", {{"type", "string"}}},
                {"pageNo", {{"type", "integer"}, {"default", 1}}},
                {"pageSize", {{"type", "integer"}, {"default", 25}}},
                {"sortBy", {{"type", "string"}}},
                {"sortOrder", {{"type", "string"}, {"enum", {"asc", "desc"}}}}
            }}
        },
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"data", {{"type", "array"}, {"items", {{"type", "object"}}}}},
                {"totalRecords", {{"type", "integer"}}},
                {"filteredRecords", {{"type", "integer"}}}
            }}
        },
        .parameters = json::array(),
        .requiresAuth = true
    };
    categoryIndex_["campaigns"].push_back("POST:/api/v3/campaign/basic/list");

    // PATCH /api/v3/campaign/budget - Update budget
    endpoints_["PATCH:/api/v3/campaign/budget"] = {
        .path = "/api/v3/campaign/budget",
        .method = "PATCH",
        .summary = "Update campaign budget",
        .description = "Updates the total budget, daily budget, or max bid for one or more campaigns.",
        .category = "campaigns",
        .docPage = "/guidelines/campaign-api#update-campaign-budget",
        .tags = {"campaign", "update", "budget"},
        .requestBody = {
            {"type", "object"},
            {"required", {"campaignIds"}},
            {"properties", {
                {"campaignIds", {{"type", "string"}, {"description", "Comma-separated campaign IDs"}}},
                {"totalBudget", {{"type", "number"}}},
                {"dailyBudget", {{"type", "number"}}},
                {"maxBid", {{"type", "number"}}},
                {"totalBudgetUpdateType", {{"type", "string"}, {"enum", {"change", "addition", "distribution"}}}}
            }}
        },
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"success", {{"type", "boolean"}}},
                {"message", {{"type", "string"}}}
            }}
        },
        .parameters = json::array(),
        .requiresAuth = true
    };
    categoryIndex_["campaigns"].push_back("PATCH:/api/v3/campaign/budget");

    // PUT /api/v3/campaign/status - Update status
    endpoints_["PUT:/api/v3/campaign/status"] = {
        .path = "/api/v3/campaign/status",
        .method = "PUT",
        .summary = "Update campaign status",
        .description = "Changes the status of one or more campaigns (pause, resume, delete).",
        .category = "campaigns",
        .docPage = "/guidelines/campaign-api#update-campaign-status",
        .tags = {"campaign", "update", "status"},
        .requestBody = {
            {"type", "object"},
            {"required", {"campaignIds", "status"}},
            {"properties", {
                {"campaignIds", {{"type", "string"}, {"description", "Comma-separated campaign IDs"}}},
                {"status", {{"type", "string"}, {"enum", {"running", "paused", "deleted"}}}}
            }}
        },
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"success", {{"type", "boolean"}}},
                {"data", {{"type", "array"}, {"items", {{"type", "object"}}}}}
            }}
        },
        .parameters = json::array(),
        .requiresAuth = true
    };
    categoryIndex_["campaigns"].push_back("PUT:/api/v3/campaign/status");
}

void ApiMetadataRegistry::registerReportEndpoints() {
    // POST /api/v3/ra/report/execute - Execute report
    endpoints_["POST:/api/v3/ra/report/execute"] = {
        .path = "/api/v3/ra/report/execute",
        .method = "POST",
        .summary = "Execute a report",
        .description = "Generates a report based on specified dimensions, metrics, and filters.",
        .category = "reports",
        .docPage = "/guidelines/reports-api#execute-report",
        .tags = {"report", "execute", "analytics"},
        .requestBody = {
            {"type", "object"},
            {"required", {"startDate", "endDate", "dimensions", "metrics"}},
            {"properties", {
                {"startDate", {{"type", "string"}, {"format", "date"}}},
                {"endDate", {{"type", "string"}, {"format", "date"}}},
                {"dimensions", {{"type", "array"}, {"items", {{"type", "string"}}}}},
                {"metrics", {{"type", "array"}, {"items", {{"type", "string"}}}}},
                {"campaignIds", {{"type", "array"}, {"items", {{"type", "integer"}}}}},
                {"timezoneId", {{"type", "integer"}}},
                {"pageNo", {{"type", "integer"}}},
                {"pageSize", {{"type", "integer"}}}
            }}
        },
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"reportData", {{"type", "array"}}},
                {"totalRecords", {{"type", "integer"}}}
            }}
        },
        .parameters = json::array(),
        .requiresAuth = true
    };
    categoryIndex_["reports"].push_back("POST:/api/v3/ra/report/execute");

    // POST /api/v3/ra/report/schedule - Schedule report
    endpoints_["POST:/api/v3/ra/report/schedule"] = {
        .path = "/api/v3/ra/report/schedule",
        .method = "POST",
        .summary = "Schedule a recurring report",
        .description = "Creates a scheduled report that runs automatically at specified intervals.",
        .category = "reports",
        .docPage = "/guidelines/reports-api#schedule-report",
        .tags = {"report", "schedule", "automation"},
        .requestBody = {
            {"type", "object"},
            {"required", {"reportName", "startDate", "endDate", "dimensions", "metrics", "frequency"}},
            {"properties", {
                {"reportName", {{"type", "string"}}},
                {"frequency", {{"type", "string"}, {"enum", {"daily", "weekly", "monthly"}}}},
                {"emailRecipients", {{"type", "array"}, {"items", {{"type", "string"}}}}},
                {"format", {{"type", "string"}, {"enum", {"csv", "xlsx"}}}}
            }}
        },
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"success", {{"type", "boolean"}}},
                {"scheduleId", {{"type", "integer"}}}
            }}
        },
        .parameters = json::array(),
        .requiresAuth = true
    };
    categoryIndex_["reports"].push_back("POST:/api/v3/ra/report/schedule");
}

void ApiMetadataRegistry::registerAudienceEndpoints() {
    // POST /api/v2/audience/matched/add - Upload matched audience
    endpoints_["POST:/api/v2/audience/matched/add"] = {
        .path = "/api/v2/audience/matched/add",
        .method = "POST",
        .summary = "Upload a matched audience",
        .description = "Creates a new matched audience by uploading hashed identifiers (emails, MAIDs, etc.).",
        .category = "audiences",
        .docPage = "/guidelines/audience-api#upload-matched-audience",
        .tags = {"audience", "matched", "upload"},
        .requestBody = {
            {"type", "multipart/form-data"},
            {"properties", {
                {"audienceName", {{"type", "string"}}},
                {"audienceFile", {{"type", "file"}, {"description", "CSV file with hashed identifiers"}}},
                {"columnMapping", {{"type", "array"}, {"description", "Mapping of columns to identifier types"}}}
            }}
        },
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"success", {{"type", "boolean"}}},
                {"data", {
                    {"type", "object"},
                    {"properties", {
                        {"audienceId", {{"type", "integer"}}},
                        {"matchRate", {{"type", "number"}}}
                    }}
                }}
            }}
        },
        .parameters = json::array(),
        .requiresAuth = true
    };
    categoryIndex_["audiences"].push_back("POST:/api/v2/audience/matched/add");

    // POST /api/v3/audience/contextual/create - Create contextual audience
    endpoints_["POST:/api/v3/audience/contextual/create"] = {
        .path = "/api/v3/audience/contextual/create",
        .method = "POST",
        .summary = "Create a contextual audience",
        .description = "Creates a new contextual audience based on keywords, topics, or URL patterns.",
        .category = "audiences",
        .docPage = "/guidelines/audience-api#create-contextual-audience",
        .tags = {"audience", "contextual", "create"},
        .requestBody = {
            {"type", "object"},
            {"required", {"audienceName", "keywords"}},
            {"properties", {
                {"audienceName", {{"type", "string"}}},
                {"keywords", {{"type", "array"}, {"items", {{"type", "string"}}}}},
                {"topics", {{"type", "array"}, {"items", {{"type", "integer"}}}}},
                {"urlPatterns", {{"type", "array"}, {"items", {{"type", "string"}}}}}
            }}
        },
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"success", {{"type", "boolean"}}},
                {"data", {{"audienceId", {{"type", "integer"}}}}}
            }}
        },
        .parameters = json::array(),
        .requiresAuth = true
    };
    categoryIndex_["audiences"].push_back("POST:/api/v3/audience/contextual/create");

    // GET /api/v2/audience/list - List audiences
    endpoints_["POST:/api/v2/audience/search"] = {
        .path = "/api/v2/audience/search",
        .method = "POST",
        .summary = "Search and list audiences",
        .description = "Retrieves a paginated list of audiences with optional filtering.",
        .category = "audiences",
        .docPage = "/guidelines/audience-api#list-audiences",
        .tags = {"audience", "list", "search"},
        .requestBody = {
            {"type", "object"},
            {"properties", {
                {"audienceTypeIds", {{"type", "array"}, {"items", {{"type", "integer"}}}}},
                {"statusIds", {{"type", "array"}, {"items", {{"type", "integer"}}}}},
                {"searchField", {{"type", "string"}}},
                {"pageNo", {{"type", "integer"}}},
                {"pageSize", {{"type", "integer"}}}
            }}
        },
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"data", {{"type", "array"}}},
                {"totalRecords", {{"type", "integer"}}}
            }}
        },
        .parameters = json::array(),
        .requiresAuth = true
    };
    categoryIndex_["audiences"].push_back("POST:/api/v2/audience/search");
}

void ApiMetadataRegistry::registerCreativeEndpoints() {
    // POST /api/v3/creative/add - Upload creative
    endpoints_["POST:/api/v3/creative/add"] = {
        .path = "/api/v3/creative/add",
        .method = "POST",
        .summary = "Upload a creative asset",
        .description = "Uploads a new creative asset (image, video, HTML5, native, or audio).",
        .category = "creatives",
        .docPage = "/guidelines/creative-api#upload-creative",
        .tags = {"creative", "upload", "asset"},
        .requestBody = {
            {"type", "multipart/form-data"},
            {"required", {"creativeName", "creativeTypeId"}},
            {"properties", {
                {"creativeName", {{"type", "string"}}},
                {"creativeTypeId", {{"type", "integer"}, {"description", "11=image, 13=video, 14=HTML5, 15=native, 17=audio"}}},
                {"creativeFile", {{"type", "file"}}},
                {"clickUrl", {{"type", "string"}}},
                {"width", {{"type", "integer"}}},
                {"height", {{"type", "integer"}}}
            }}
        },
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"success", {{"type", "boolean"}}},
                {"data", {
                    {"type", "object"},
                    {"properties", {
                        {"creativeId", {{"type", "integer"}}},
                        {"creativeStatus", {{"type", "string"}}}
                    }}
                }}
            }}
        },
        .parameters = json::array(),
        .requiresAuth = true
    };
    categoryIndex_["creatives"].push_back("POST:/api/v3/creative/add");

    // GET /api/v3/creative/{id} - Get creative details
    endpoints_["GET:/api/v3/creative/{id}"] = {
        .path = "/api/v3/creative/{id}",
        .method = "GET",
        .summary = "Get creative details",
        .description = "Retrieves detailed information about a specific creative asset.",
        .category = "creatives",
        .docPage = "/guidelines/creative-api#get-creative-details",
        .tags = {"creative", "read", "details"},
        .requestBody = {},
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"success", {{"type", "boolean"}}},
                {"data", {
                    {"type", "object"},
                    {"properties", {
                        {"creativeId", {{"type", "integer"}}},
                        {"creativeName", {{"type", "string"}}},
                        {"creativeTypeId", {{"type", "integer"}}},
                        {"status", {{"type", "string"}}},
                        {"width", {{"type", "integer"}}},
                        {"height", {{"type", "integer"}}},
                        {"clickUrl", {{"type", "string"}}}
                    }}
                }}
            }}
        },
        .parameters = {
            {{"name", "id"}, {"in", "path"}, {"type", "integer"}, {"required", true}}
        },
        .requiresAuth = true
    };
    categoryIndex_["creatives"].push_back("GET:/api/v3/creative/{id}");

    // POST /api/v2/creative/list - List creatives
    endpoints_["POST:/api/v2/creative/list"] = {
        .path = "/api/v2/creative/list",
        .method = "POST",
        .summary = "List creative assets",
        .description = "Retrieves a paginated list of creative assets with optional filtering.",
        .category = "creatives",
        .docPage = "/guidelines/creative-api#list-creatives",
        .tags = {"creative", "list", "search"},
        .requestBody = {
            {"type", "object"},
            {"properties", {
                {"creativeTypeIds", {{"type", "array"}, {"items", {{"type", "integer"}}}}},
                {"statusIds", {{"type", "array"}, {"items", {{"type", "integer"}}}}},
                {"searchField", {{"type", "string"}}},
                {"pageNo", {{"type", "integer"}}},
                {"pageSize", {{"type", "integer"}}}
            }}
        },
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"data", {{"type", "array"}}},
                {"totalRecords", {{"type", "integer"}}}
            }}
        },
        .parameters = json::array(),
        .requiresAuth = true
    };
    categoryIndex_["creatives"].push_back("POST:/api/v2/creative/list");
}

void ApiMetadataRegistry::registerConversionEndpoints() {
    // POST /api/v3/conversion/add - Create conversion
    endpoints_["POST:/api/v3/conversion/add"] = {
        .path = "/api/v3/conversion/add",
        .method = "POST",
        .summary = "Create a conversion tracker",
        .description = "Creates a new conversion tracking pixel or postback.",
        .category = "conversions",
        .docPage = "/guidelines/conversion-api#create-conversion",
        .tags = {"conversion", "tracking", "create"},
        .requestBody = {
            {"type", "object"},
            {"required", {"conversionName", "conversionTypeId"}},
            {"properties", {
                {"conversionName", {{"type", "string"}}},
                {"conversionTypeId", {{"type", "integer"}, {"description", "1=pixel, 2=postback"}}},
                {"advertiserDomain", {{"type", "string"}}},
                {"attributionWindow", {{"type", "integer"}, {"description", "Days for click attribution"}}},
                {"viewAttributionWindow", {{"type", "integer"}, {"description", "Days for view attribution"}}}
            }}
        },
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"success", {{"type", "boolean"}}},
                {"data", {
                    {"conversionId", {{"type", "integer"}}},
                    {"pixelCode", {{"type", "string"}}}
                }}
            }}
        },
        .parameters = json::array(),
        .requiresAuth = true
    };
    categoryIndex_["conversions"].push_back("POST:/api/v3/conversion/add");

    // GET /api/v3/conversion/{id} - Get conversion details
    endpoints_["GET:/api/v3/conversion/{id}"] = {
        .path = "/api/v3/conversion/{id}",
        .method = "GET",
        .summary = "Get conversion details",
        .description = "Retrieves detailed information about a conversion tracker.",
        .category = "conversions",
        .docPage = "/guidelines/conversion-api#get-conversion-details",
        .tags = {"conversion", "read", "details"},
        .requestBody = {},
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"success", {{"type", "boolean"}}},
                {"data", {
                    {"type", "object"},
                    {"properties", {
                        {"conversionId", {{"type", "integer"}}},
                        {"conversionName", {{"type", "string"}}},
                        {"pixelCode", {{"type", "string"}}},
                        {"totalConversions", {{"type", "integer"}}}
                    }}
                }}
            }}
        },
        .parameters = {
            {{"name", "id"}, {"in", "path"}, {"type", "integer"}, {"required", true}}
        },
        .requiresAuth = true
    };
    categoryIndex_["conversions"].push_back("GET:/api/v3/conversion/{id}");
}

void ApiMetadataRegistry::registerInventoryEndpoints() {
    // POST /api/v2/inv/pmp/deal/list - List PMP deals
    endpoints_["POST:/api/v2/inv/pmp/deal/list"] = {
        .path = "/api/v2/inv/pmp/deal/list",
        .method = "POST",
        .summary = "List PMP deals",
        .description = "Retrieves a list of available Private Marketplace deals.",
        .category = "inventory",
        .docPage = "/guidelines/inventory-api#list-pmp-deals",
        .tags = {"inventory", "pmp", "deals", "list"},
        .requestBody = {
            {"type", "object"},
            {"properties", {
                {"searchField", {{"type", "string"}}},
                {"statusIds", {{"type", "array"}, {"items", {{"type", "integer"}}}}},
                {"pageNo", {{"type", "integer"}}},
                {"pageSize", {{"type", "integer"}}}
            }}
        },
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"data", {{"type", "array"}}},
                {"totalRecords", {{"type", "integer"}}}
            }}
        },
        .parameters = json::array(),
        .requiresAuth = true
    };
    categoryIndex_["inventory"].push_back("POST:/api/v2/inv/pmp/deal/list");

    // POST /api/v3/inv/group/add - Create inventory group
    endpoints_["POST:/api/v3/inv/group/add"] = {
        .path = "/api/v3/inv/group/add",
        .method = "POST",
        .summary = "Create inventory group",
        .description = "Creates a new inventory group for organizing and targeting inventory.",
        .category = "inventory",
        .docPage = "/guidelines/inventory-api#create-inventory-group",
        .tags = {"inventory", "group", "create"},
        .requestBody = {
            {"type", "object"},
            {"required", {"groupName", "inventoryGroupTypeId"}},
            {"properties", {
                {"groupName", {{"type", "string"}}},
                {"inventoryGroupTypeId", {{"type", "integer"}}},
                {"inventoryIds", {{"type", "array"}, {"items", {{"type", "integer"}}}}}
            }}
        },
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"success", {{"type", "boolean"}}},
                {"data", {{"groupId", {{"type", "integer"}}}}}
            }}
        },
        .parameters = json::array(),
        .requiresAuth = true
    };
    categoryIndex_["inventory"].push_back("POST:/api/v3/inv/group/add");
}

void ApiMetadataRegistry::registerDashboardEndpoints() {
    // POST /api/v2/rb/resultDashboard - Dashboard metrics
    endpoints_["POST:/api/v2/rb/resultDashboard"] = {
        .path = "/api/v2/rb/resultDashboard",
        .method = "POST",
        .summary = "Get dashboard performance data",
        .description = "Retrieves aggregated performance metrics for the dashboard view.",
        .category = "dashboard",
        .docPage = "/guidelines/dashboard-api#get-dashboard-data",
        .tags = {"dashboard", "metrics", "performance"},
        .requestBody = {
            {"type", "object"},
            {"required", {"dateRange"}},
            {"properties", {
                {"dateRange", {
                    {"type", "object"},
                    {"properties", {
                        {"startDate", {{"type", "string"}}},
                        {"endDate", {{"type", "string"}}}
                    }}
                }},
                {"dimension", {
                    {"type", "object"},
                    {"properties", {
                        {"filter", {{"type", "object"}}},
                        {"value", {{"type", "array"}}}
                    }}
                }},
                {"timezone", {{"type", "object"}}},
                {"campaignIds", {{"type", "array"}}},
                {"sortBy", {{"type", "string"}}},
                {"sortType", {{"type", "string"}}}
            }}
        },
        .responseBody = {
            {"type", "object"},
            {"properties", {
                {"data", {{"type", "array"}}},
                {"totalRecords", {{"type", "integer"}}},
                {"aggregations", {{"type", "object"}}}
            }}
        },
        .parameters = json::array(),
        .requiresAuth = true
    };
    categoryIndex_["dashboard"].push_back("POST:/api/v2/rb/resultDashboard");
}

const EndpointMeta* ApiMetadataRegistry::getEndpoint(const std::string& path, 
                                                      const std::string& method) const {
    // Try exact match first
    if (!method.empty()) {
        std::string key = method + ":" + path;
        auto it = endpoints_.find(key);
        if (it != endpoints_.end()) {
            return &it->second;
        }
    }
    
    // Try path-only match (first matching method)
    for (const auto& [key, meta] : endpoints_) {
        if (meta.path == path || key.find(":" + path) != std::string::npos) {
            return &meta;
        }
    }
    
    // Try partial path match
    for (const auto& [key, meta] : endpoints_) {
        if (path.find(meta.path) != std::string::npos || 
            meta.path.find(path) != std::string::npos) {
            return &meta;
        }
    }
    
    return nullptr;
}

std::vector<const EndpointMeta*> ApiMetadataRegistry::searchEndpoints(const std::string& query) const {
    std::vector<const EndpointMeta*> results;
    std::string lowerQuery = query;
    std::transform(lowerQuery.begin(), lowerQuery.end(), lowerQuery.begin(), ::tolower);
    
    for (const auto& [key, meta] : endpoints_) {
        // Search in path, summary, description, and tags
        std::string searchText = meta.path + " " + meta.summary + " " + meta.description;
        for (const auto& tag : meta.tags) {
            searchText += " " + tag;
        }
        std::transform(searchText.begin(), searchText.end(), searchText.begin(), ::tolower);
        
        if (searchText.find(lowerQuery) != std::string::npos) {
            results.push_back(&meta);
        }
    }
    
    return results;
}

std::vector<const EndpointMeta*> ApiMetadataRegistry::getByCategory(const std::string& category) const {
    std::vector<const EndpointMeta*> results;
    
    auto it = categoryIndex_.find(category);
    if (it != categoryIndex_.end()) {
        for (const auto& key : it->second) {
            auto epIt = endpoints_.find(key);
            if (epIt != endpoints_.end()) {
                results.push_back(&epIt->second);
            }
        }
    }
    
    return results;
}

json ApiMetadataRegistry::getEndpointJson(const std::string& path, 
                                          const std::string& method) const {
    const EndpointMeta* meta = getEndpoint(path, method);
    if (!meta) {
        return {{"error", "Endpoint not found"}, {"path", path}};
    }
    
    return {
        {"path", meta->path},
        {"method", meta->method},
        {"summary", meta->summary},
        {"description", meta->description},
        {"category", meta->category},
        {"docPage", meta->docPage},
        {"tags", meta->tags},
        {"requestBody", meta->requestBody},
        {"responseBody", meta->responseBody},
        {"parameters", meta->parameters},
        {"requiresAuth", meta->requiresAuth}
    };
}

std::vector<std::string> ApiMetadataRegistry::getCategories() const {
    std::vector<std::string> categories;
    for (const auto& [cat, _] : categoryIndex_) {
        categories.push_back(cat);
    }
    return categories;
}

} // namespace docs
} // namespace iqm
