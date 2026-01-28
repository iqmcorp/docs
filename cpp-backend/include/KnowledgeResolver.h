#ifndef KNOWLEDGE_RESOLVER_H
#define KNOWLEDGE_RESOLVER_H

#include <string>
#include <vector>
#include <unordered_map>
#include <optional>
#include <nlohmann/json.hpp>

using json = nlohmann::json;

namespace iqm {

/**
 * Entity information from Layer 1 (Skeleton)
 */
struct Entity {
    std::string id;
    std::string id_field;
    int level;
    std::string parent;
    std::string description;
    std::string api;
    std::string primary_doc;
    std::vector<std::string> related_docs;
    std::vector<std::string> children;
    std::unordered_map<std::string, std::string> endpoints;
    std::string help_center;
    std::string relationship_type;  // parent_child, assignment, targeting, configuration
};

/**
 * Intent match from Layer 3 (Navigation)
 */
struct IntentMatch {
    std::string intent_id;
    std::string entity;
    std::string action;
    std::string intent_type;  // "action" (default) or "informational"
    std::string primary_doc;
    std::string section;
    std::string endpoint;
    std::vector<std::string> related_docs;
    std::vector<std::string> related_sections;  // Pre-defined sections for informational queries
    std::vector<std::string> prerequisites;
    std::vector<std::string> clarifying_questions;
    double confidence;  // 0.0 - 1.0
};

/**
 * Section anchor for subsection-level navigation
 */
struct SectionAnchor {
    std::string slug;        // Full URL with anchor: /guidelines/campaign-api#update-campaign
    std::string title;       // Section heading: "Update Campaign"
    std::string parent;      // Parent section: "Campaign Management"
    std::string pageSlug;    // Page URL: /guidelines/campaign-api
    std::string pageTitle;   // Page title: "Campaign API"
    std::string endpoint;    // API endpoint if applicable
    std::string method;      // HTTP method
    std::string entity;      // Primary entity type (campaign, creative, etc.)
    std::string action;      // Action type (create, update, get, etc.)
    std::vector<std::string> allEntities;  // All entities mentioned in heading
    std::string api;         // API this section belongs to (e.g., "campaign-api")
    std::vector<std::string> keywords;
    double relevance;        // Match relevance score
};

/**
 * Workflow step from Layer 2 (Taxonomy)
 */
struct WorkflowStep {
    std::string step_name;
    std::string entity;
    std::string endpoint;
    std::string doc;
    std::string description;
    bool optional;
};

/**
 * Workflow pattern from Layer 2 (Taxonomy)
 */
struct Workflow {
    std::string id;
    std::string name;
    std::string description;
    std::vector<WorkflowStep> steps;        // Required steps
    std::vector<WorkflowStep> more_actions;  // Optional additional actions
    std::string primary_doc;
};

/**
 * Context for LLM prompt construction
 */
struct KnowledgeContext {
    // Matched entities from query
    std::vector<Entity> entities;
    
    // Matched intents
    std::vector<IntentMatch> intents;
    
    // Relevant workflow (if applicable)
    std::optional<Workflow> workflow;
    
    // Suggested docs (deduplicated, ranked)
    std::vector<std::string> suggested_docs;
    
    // Related subsections with anchor links
    std::vector<SectionAnchor> related_sections;
    
    // Prerequisites user might be missing
    std::vector<std::string> prerequisites;
    
    // Questions to clarify user intent
    std::vector<std::string> clarifying_questions;
    
    // Relevant endpoints
    std::vector<std::string> endpoints;
    
    // Format as context string for LLM
    std::string toPromptContext() const;
    
    // Export as JSON for structured API response
    // Pass resolver to get doc labels for titles
    nlohmann::json toJson(const class KnowledgeResolver* resolver = nullptr) const;
};

/**
 * KnowledgeResolver - Traverse knowledge layers to understand user queries
 * 
 * Implements PVLT-weighted lookup:
 * - Layer 1 (Skeleton, weight 4): Entity structure and relationships
 * - Layer 2 (Taxonomy, weight 3): Organizational patterns
 * - Layer 3 (Navigation, weight 2): User journey mapping
 * - Layer 4 (Content, weight 1): Algolia search results (external)
 */
class KnowledgeResolver {
public:
    /**
     * Load knowledge from compiled JSON file
     */
    bool loadFromFile(const std::string& path);
    
    /**
     * Load knowledge from JSON string
     */
    bool loadFromJson(const std::string& jsonStr);
    
    /**
     * Check if knowledge is loaded
     */
    bool isLoaded() const { return loaded_; }
    
    // =========================================
    // Layer 1: Entity Resolution (Skeleton)
    // =========================================
    
    /**
     * Get entity by its ID (e.g., "campaign", "insertion_order")
     */
    std::optional<Entity> getEntity(const std::string& entityId) const;
    
    /**
     * Get entity by its ID field (e.g., "campaignId" → "campaign")
     */
    std::optional<Entity> getEntityByIdField(const std::string& idField) const;
    
    /**
     * Get entities managed by an API (e.g., "campaign-api" → [insertion_order, campaign])
     */
    std::vector<Entity> getEntitiesByApi(const std::string& apiId) const;
    
    /**
     * Get entity hierarchy (ancestors + descendants)
     */
    std::vector<Entity> getEntityHierarchy(const std::string& entityId) const;
    
    /**
     * Get parent entity
     */
    std::optional<Entity> getParentEntity(const std::string& entityId) const;
    
    /**
     * Get child entities
     */
    std::vector<Entity> getChildEntities(const std::string& entityId) const;
    
    // =========================================
    // Layer 2: Pattern Matching (Taxonomy)
    // =========================================
    
    /**
     * Get workflow by ID
     */
    std::optional<Workflow> getWorkflow(const std::string& workflowId) const;
    
    /**
     * Find workflows involving an entity
     */
    std::vector<Workflow> findWorkflowsForEntity(const std::string& entityId) const;
    
    /**
     * Get API group info
     */
    json getApiGroup(const std::string& apiId) const;
    
    // =========================================
    // Layer 3: Intent Resolution (Navigation)
    // =========================================
    
    /**
     * Match user query to intents
     * Returns ranked list of matching intents
     */
    std::vector<IntentMatch> matchIntent(const std::string& query) const;
    
    /**
     * Get page navigation info
     */
    json getPageNavigation(const std::string& docPath) const;
    
    /**
     * Get error handling info
     */
    json getErrorHandling(const std::string& errorType) const;
    
    // =========================================
    // URL Resolution
    // =========================================
    
    /**
     * Resolve a doc ID to its actual URL slug
     * Uses the slugMap built from frontmatter
     */
    std::string resolveDocUrl(const std::string& docId) const;
    
    /**
     * Get human-readable label for a doc path
     * Falls back to generating a title from the path if not found
     */
    std::string getDocLabel(const std::string& docPath) const;
    
    // =========================================
    // Section/Anchor Resolution (Headings)
    // =========================================
    
    /**
     * Find related subsections by entity and action
     * Returns anchor-level links like /guidelines/campaign-api#update-campaign
     */
    std::vector<SectionAnchor> findRelatedSections(
        const std::string& entity,
        const std::string& action = "",
        int limit = 5
    ) const;
    
    /**
     * Find sections by keyword search
     */
    std::vector<SectionAnchor> searchSections(
        const std::string& query,
        int limit = 10
    ) const;
    
    /**
     * Get section by endpoint
     */
    std::optional<SectionAnchor> getSectionByEndpoint(
        const std::string& endpoint
    ) const;
    
    // =========================================
    // Combined Resolution
    // =========================================
    
    /**
     * Resolve full knowledge context for a user query
     * This is the main entry point for AI prompt construction
     */
    KnowledgeContext resolveQuery(const std::string& query) const;
    
    /**
     * Extract entity mentions from text
     */
    std::vector<std::string> extractEntities(const std::string& text) const;
    
private:
    json knowledge_;
    bool loaded_ = false;
    
    // Cached indexes for fast lookup
    std::unordered_map<std::string, std::string> idFieldIndex_;  // campaignId → campaign
    std::unordered_map<std::string, std::vector<std::string>> apiIndex_;  // api → [entities]
    std::vector<std::pair<std::string, std::string>> intentPatterns_;  // pattern → intent_id
    std::unordered_map<std::string, std::string> slugMap_;  // docId → URL slug
    std::unordered_map<std::string, std::string> docLabels_;  // docPath → human-readable label
    
    // Heading/section indexes for anchor-level navigation
    std::vector<json> allSections_;  // All section data
    std::unordered_map<std::string, std::vector<size_t>> sectionsByEntity_;       // primary entity → section indexes
    std::unordered_map<std::string, std::vector<size_t>> sectionsByAllEntities_;  // any mentioned entity → section indexes
    std::unordered_map<std::string, std::vector<size_t>> sectionsByAction_;       // action → section indexes
    std::unordered_map<std::string, size_t> sectionsByEndpoint_;                  // endpoint → section index
    std::unordered_map<std::string, std::vector<size_t>> sectionsByKeyword_;      // keyword → section indexes
    
    void buildIndexes();
    void buildHeadingIndexes();
    double calculatePatternMatch(const std::string& query, const std::string& pattern) const;
    SectionAnchor jsonToSectionAnchor(const json& j, double relevance = 1.0) const;
};

} // namespace iqm

#endif // KNOWLEDGE_RESOLVER_H
