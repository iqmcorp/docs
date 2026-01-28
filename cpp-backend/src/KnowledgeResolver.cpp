#include "KnowledgeResolver.h"
#include <fstream>
#include <sstream>
#include <iostream>
#include <algorithm>
#include <cctype>
#include <set>

namespace iqm {

// =========================================
// Loading
// =========================================

bool KnowledgeResolver::loadFromFile(const std::string& path) {
    std::ifstream file(path);
    if (!file.is_open()) {
        std::cerr << "  [KR] Cannot open file: " << path << std::endl;
        return false;
    }
    
    std::stringstream buffer;
    buffer << file.rdbuf();
    std::string content = buffer.str();
    std::cout << "  [KR] Read " << content.size() << " bytes from " << path << std::endl;
    return loadFromJson(content);
}

bool KnowledgeResolver::loadFromJson(const std::string& jsonStr) {
    try {
        knowledge_ = json::parse(jsonStr);
        buildIndexes();
        loaded_ = true;
        std::cout << "  [KR] JSON parsed successfully" << std::endl;
        return true;
    } catch (const std::exception& e) {
        std::cerr << "  [KR] JSON parse error: " << e.what() << std::endl;
        loaded_ = false;
        return false;
    }
}

void KnowledgeResolver::buildIndexes() {
    // Build ID field index from skeleton
    if (knowledge_.contains("skeleton") && knowledge_["skeleton"].contains("entities")) {
        for (auto& [entityId, entity] : knowledge_["skeleton"]["entities"].items()) {
            // Index primary ID field (skip if null)
            if (entity.contains("id_field") && !entity["id_field"].is_null()) {
                idFieldIndex_[entity["id_field"].get<std::string>()] = entityId;
            }
            // Index aliases
            if (entity.contains("aliases") && entity["aliases"].is_array()) {
                for (const auto& alias : entity["aliases"]) {
                    if (!alias.is_null()) {
                        idFieldIndex_[alias.get<std::string>()] = entityId;
                    }
                }
            }
            // Index by API (skip if null)
            if (entity.contains("api") && !entity["api"].is_null()) {
                std::string api = entity["api"].get<std::string>();
                apiIndex_[api].push_back(entityId);
            }
        }
    }
    
    // Build intent pattern index from navigation
    if (knowledge_.contains("navigation") && knowledge_["navigation"].contains("intents")) {
        for (auto& [intentId, intent] : knowledge_["navigation"]["intents"].items()) {
            if (intent.contains("patterns")) {
                for (const auto& pattern : intent["patterns"]) {
                    std::string p = pattern.get<std::string>();
                    // Convert to lowercase for matching
                    std::transform(p.begin(), p.end(), p.begin(), ::tolower);
                    intentPatterns_.push_back({p, intentId});
                }
            }
        }
    }
    
    // Sort patterns by length (longer = more specific)
    std::sort(intentPatterns_.begin(), intentPatterns_.end(),
        [](const auto& a, const auto& b) {
            return a.first.length() > b.first.length();
        });
    
    // Build slug map index (doc file ID → URL)
    if (knowledge_.contains("slugMap")) {
        for (auto& [fileId, slug] : knowledge_["slugMap"].items()) {
            if (!slug.is_null()) {
                slugMap_[fileId] = slug.get<std::string>();
            }
        }
        std::cout << "  [KR] Loaded " << slugMap_.size() << " slug mappings" << std::endl;
    }
    
    // Build doc labels index (doc path → human-readable label)
    if (knowledge_.contains("indexes") && knowledge_["indexes"].contains("docLabels")) {
        for (auto& [docPath, label] : knowledge_["indexes"]["docLabels"].items()) {
            if (!label.is_null()) {
                docLabels_[docPath] = label.get<std::string>();
            }
        }
        std::cout << "  [KR] Loaded " << docLabels_.size() << " doc labels" << std::endl;
    }
    
    // Build heading/section indexes for anchor-level navigation
    buildHeadingIndexes();
}

void KnowledgeResolver::buildHeadingIndexes() {
    if (!knowledge_.contains("headings") || !knowledge_["headings"].contains("sections")) {
        std::cout << "  [KR] No headings data found" << std::endl;
        return;
    }
    
    const auto& sections = knowledge_["headings"]["sections"];
    allSections_.clear();
    sectionsByEntity_.clear();
    sectionsByAction_.clear();
    sectionsByEndpoint_.clear();
    sectionsByKeyword_.clear();
    sectionsByAllEntities_.clear();
    
    for (size_t i = 0; i < sections.size(); ++i) {
        const auto& section = sections[i];
        allSections_.push_back(section);
        
        // Index by primary entity
        if (section.contains("entity") && !section["entity"].is_null()) {
            std::string entity = section["entity"].get<std::string>();
            sectionsByEntity_[entity].push_back(i);
        }
        
        // Index by ALL mentioned entities (for secondary lookups)
        if (section.contains("allEntities") && section["allEntities"].is_array()) {
            for (const auto& ent : section["allEntities"]) {
                if (!ent.is_null()) {
                    std::string entity = ent.get<std::string>();
                    sectionsByAllEntities_[entity].push_back(i);
                }
            }
        }
        
        // Index by action
        if (section.contains("action") && !section["action"].is_null()) {
            std::string action = section["action"].get<std::string>();
            sectionsByAction_[action].push_back(i);
        }
        
        // Index by endpoint
        if (section.contains("endpoint") && !section["endpoint"].is_null()) {
            std::string endpoint = section["endpoint"].get<std::string>();
            std::string method = section.contains("method") && !section["method"].is_null() 
                ? section["method"].get<std::string>() : "";
            std::string key = method.empty() ? endpoint : method + " " + endpoint;
            sectionsByEndpoint_[key] = i;
        }
        
        // Index by keywords
        if (section.contains("keywords") && section["keywords"].is_array()) {
            for (const auto& kw : section["keywords"]) {
                if (!kw.is_null()) {
                    sectionsByKeyword_[kw.get<std::string>()].push_back(i);
                }
            }
        }
    }
    
    std::cout << "  [KR] Loaded " << allSections_.size() << " section anchors" << std::endl;
    std::cout << "  [KR] Indexed: " << sectionsByEntity_.size() << " primary entities, "
              << sectionsByAllEntities_.size() << " all entities, "
              << sectionsByAction_.size() << " actions, "
              << sectionsByEndpoint_.size() << " endpoints" << std::endl;
}

SectionAnchor KnowledgeResolver::jsonToSectionAnchor(const json& j, double relevance) const {
    SectionAnchor anchor;
    anchor.slug = j.contains("slug") && !j["slug"].is_null() ? j["slug"].get<std::string>() : "";
    anchor.title = j.contains("title") && !j["title"].is_null() ? j["title"].get<std::string>() : "";
    anchor.parent = j.contains("parent") && !j["parent"].is_null() ? j["parent"].get<std::string>() : "";
    anchor.pageSlug = j.contains("pageSlug") && !j["pageSlug"].is_null() ? j["pageSlug"].get<std::string>() : "";
    anchor.pageTitle = j.contains("pageTitle") && !j["pageTitle"].is_null() ? j["pageTitle"].get<std::string>() : "";
    anchor.endpoint = j.contains("endpoint") && !j["endpoint"].is_null() ? j["endpoint"].get<std::string>() : "";
    anchor.method = j.contains("method") && !j["method"].is_null() ? j["method"].get<std::string>() : "";
    anchor.entity = j.contains("entity") && !j["entity"].is_null() ? j["entity"].get<std::string>() : "";
    anchor.action = j.contains("action") && !j["action"].is_null() ? j["action"].get<std::string>() : "";
    anchor.api = j.contains("api") && !j["api"].is_null() ? j["api"].get<std::string>() : "";
    anchor.relevance = relevance;
    
    // Parse allEntities array
    if (j.contains("allEntities") && j["allEntities"].is_array()) {
        for (const auto& ent : j["allEntities"]) {
            if (!ent.is_null()) {
                anchor.allEntities.push_back(ent.get<std::string>());
            }
        }
    }
    
    if (j.contains("keywords") && j["keywords"].is_array()) {
        for (const auto& kw : j["keywords"]) {
            if (!kw.is_null()) {
                anchor.keywords.push_back(kw.get<std::string>());
            }
        }
    }
    
    return anchor;
}

// =========================================
// Section/Anchor Resolution
// =========================================

std::vector<SectionAnchor> KnowledgeResolver::findRelatedSections(
    const std::string& entity,
    const std::string& action,
    int limit
) const {
    std::vector<SectionAnchor> results;
    std::set<size_t> seenIndexes;
    
    // Expected API based on entity (e.g., "campaign" -> "campaign-api")
    std::string expectedApi = entity + "-api";
    
    // Find by PRIMARY entity + action (highest priority)
    // Only consider sections where the PRIMARY entity matches (not just allEntities)
    if (!entity.empty() && !action.empty()) {
        auto entityIt = sectionsByEntity_.find(entity);
        auto actionIt = sectionsByAction_.find(action);
        
        if (entityIt != sectionsByEntity_.end() && actionIt != sectionsByAction_.end()) {
            std::set<size_t> entitySet(entityIt->second.begin(), entityIt->second.end());
            for (size_t idx : actionIt->second) {
                if (entitySet.count(idx) > 0 && seenIndexes.count(idx) == 0) {
                    auto anchor = jsonToSectionAnchor(allSections_[idx], 1.0);
                    
                    // Boost sections from the expected API (e.g., campaign-api for campaign queries)
                    if (anchor.api == expectedApi) {
                        anchor.relevance = 1.2;  // 20% boost for same-API sections
                    }
                    
                    results.push_back(anchor);
                    seenIndexes.insert(idx);
                }
            }
        }
    }
    
    // Sort current results by relevance before adding lower-priority matches
    std::sort(results.begin(), results.end(), 
        [](const SectionAnchor& a, const SectionAnchor& b) {
            return a.relevance > b.relevance;
        });
    
    // If few primary entity+action matches, try allEntities + action (secondary)
    // This catches cases like "assign conversion to campaign" where the heading says
    // "Assign Conversion to a Campaign" with entity=campaign but allEntities=[campaign, conversion]
    if (!entity.empty() && !action.empty() && results.size() < 3) {
        auto allEntityIt = sectionsByAllEntities_.find(entity);
        auto actionIt = sectionsByAction_.find(action);
        
        if (allEntityIt != sectionsByAllEntities_.end() && actionIt != sectionsByAction_.end()) {
            std::set<size_t> entitySet(allEntityIt->second.begin(), allEntityIt->second.end());
            for (size_t idx : actionIt->second) {
                if (entitySet.count(idx) > 0 && seenIndexes.count(idx) == 0) {
                    auto anchor = jsonToSectionAnchor(allSections_[idx], 0.85);  // Slightly lower than primary
                    
                    // Boost if from the expected API
                    if (anchor.api == expectedApi) {
                        anchor.relevance = 0.95;
                    }
                    
                    results.push_back(anchor);
                    seenIndexes.insert(idx);
                    if (results.size() >= static_cast<size_t>(limit)) break;
                }
            }
        }
    }
    
    // Only add entity-only matches if we have fewer than limit results
    // AND we have very few good matches
    if (!entity.empty() && results.size() < 3 && results.size() < static_cast<size_t>(limit)) {
        auto entityIt = sectionsByEntity_.find(entity);
        if (entityIt != sectionsByEntity_.end()) {
            for (size_t idx : entityIt->second) {
                if (seenIndexes.count(idx) == 0) {
                    auto anchor = jsonToSectionAnchor(allSections_[idx], 0.5);
                    
                    // Boost same-API sections
                    if (anchor.api == expectedApi) {
                        anchor.relevance = 0.7;
                    }
                    
                    results.push_back(anchor);
                    seenIndexes.insert(idx);
                    if (results.size() >= static_cast<size_t>(limit)) break;
                }
            }
        }
    }
    
    // Sort final results by relevance
    std::sort(results.begin(), results.end(), 
        [](const SectionAnchor& a, const SectionAnchor& b) {
            return a.relevance > b.relevance;
        });
    
    if (results.size() > static_cast<size_t>(limit)) {
        results.resize(limit);
    }
    
    return results;
}

std::vector<SectionAnchor> KnowledgeResolver::searchSections(
    const std::string& query,
    int limit
) const {
    std::vector<SectionAnchor> results;
    std::unordered_map<size_t, double> scores;
    
    // Tokenize query
    std::vector<std::string> tokens;
    std::string current;
    std::string lowerQuery = query;
    std::transform(lowerQuery.begin(), lowerQuery.end(), lowerQuery.begin(), ::tolower);
    
    for (char c : lowerQuery) {
        if (std::isalnum(c)) {
            current += c;
        } else if (!current.empty()) {
            if (current.length() > 2) {
                tokens.push_back(current);
            }
            current.clear();
        }
    }
    if (!current.empty() && current.length() > 2) {
        tokens.push_back(current);
    }
    
    // Score sections by keyword matches
    for (const auto& token : tokens) {
        auto it = sectionsByKeyword_.find(token);
        if (it != sectionsByKeyword_.end()) {
            for (size_t idx : it->second) {
                scores[idx] += 1.0;
            }
        }
    }
    
    // Convert to results
    std::vector<std::pair<size_t, double>> scored;
    for (const auto& [idx, score] : scores) {
        scored.push_back({idx, score / tokens.size()});  // Normalize by query length
    }
    
    // Sort by score
    std::sort(scored.begin(), scored.end(),
        [](const auto& a, const auto& b) { return a.second > b.second; });
    
    // Take top results
    for (size_t i = 0; i < std::min(scored.size(), static_cast<size_t>(limit)); ++i) {
        results.push_back(jsonToSectionAnchor(allSections_[scored[i].first], scored[i].second));
    }
    
    return results;
}

std::optional<SectionAnchor> KnowledgeResolver::getSectionByEndpoint(
    const std::string& endpoint
) const {
    auto it = sectionsByEndpoint_.find(endpoint);
    if (it != sectionsByEndpoint_.end()) {
        return jsonToSectionAnchor(allSections_[it->second], 1.0);
    }
    return std::nullopt;
}

// =========================================
// URL Resolution
// =========================================

std::string KnowledgeResolver::resolveDocUrl(const std::string& docId) const {
    // Check slug map first (for bare file names)
    auto it = slugMap_.find(docId);
    if (it != slugMap_.end()) {
        return it->second;
    }
    
    // If it's a path, extract the file name and look that up
    if (docId.find('/') != std::string::npos) {
        // Extract file name: "/quickstart-guides/create-a-campaign" -> "create-a-campaign"
        std::string fileName = docId;
        size_t lastSlash = docId.rfind('/');
        if (lastSlash != std::string::npos && lastSlash < docId.length() - 1) {
            fileName = docId.substr(lastSlash + 1);
        }
        
        // Strip any section anchor: "campaign-api#insertion-orders" -> "campaign-api"
        size_t hashPos = fileName.find('#');
        std::string section;
        if (hashPos != std::string::npos) {
            section = fileName.substr(hashPos);  // Keep #anchor
            fileName = fileName.substr(0, hashPos);
        }
        
        // Look up the file name in slug map
        auto fileIt = slugMap_.find(fileName);
        if (fileIt != slugMap_.end()) {
            return fileIt->second + section;  // Return resolved slug + any section
        }
        
        // Return original path if not found in slugMap (already correct format)
        return docId;
    }
    
    // Return as-is, caller should handle
    return docId;
}

std::string KnowledgeResolver::getDocLabel(const std::string& docPath) const {
    // Remove any section anchor for lookup
    std::string pathOnly = docPath;
    size_t hashPos = docPath.find('#');
    if (hashPos != std::string::npos) {
        pathOnly = docPath.substr(0, hashPos);
    }
    
    // Check doc labels index first
    auto it = docLabels_.find(pathOnly);
    if (it != docLabels_.end()) {
        return it->second;
    }
    
    // Fallback: generate a readable title from the path
    // "/quickstart-guides/create-a-campaign-quickstart" → "Create a Campaign Quickstart"
    std::string fileName = pathOnly;
    size_t lastSlash = pathOnly.rfind('/');
    if (lastSlash != std::string::npos && lastSlash < pathOnly.length() - 1) {
        fileName = pathOnly.substr(lastSlash + 1);
    }
    
    // Convert kebab-case to Title Case
    std::string result;
    bool capitalizeNext = true;
    for (char c : fileName) {
        if (c == '-') {
            result += ' ';
            capitalizeNext = true;
        } else if (capitalizeNext) {
            result += std::toupper(c);
            capitalizeNext = false;
        } else {
            result += c;
        }
    }
    
    return result;
}

// =========================================
// Layer 1: Entity Resolution
// =========================================

std::optional<Entity> KnowledgeResolver::getEntity(const std::string& entityId) const {
    if (!loaded_) return std::nullopt;
    
    try {
        const auto& entities = knowledge_["skeleton"]["entities"];
        if (!entities.contains(entityId)) {
            return std::nullopt;
        }
        
        const auto& e = entities[entityId];
        Entity entity;
        entity.id = entityId;
        entity.id_field = e.value("id_field", "");
        entity.level = e.value("level", 0);
        entity.parent = e.value("parent", "");
        entity.description = e.value("description", "");
        entity.api = e.value("api", "");
        entity.relationship_type = e.value("relationship_type", "parent_child");
        
        // Handle docs
        if (e.contains("docs")) {
            entity.primary_doc = e["docs"].value("primary", "");
            if (e["docs"].contains("related")) {
                for (const auto& doc : e["docs"]["related"]) {
                    entity.related_docs.push_back(doc.get<std::string>());
                }
            }
        }
        
        // Handle children
        if (e.contains("children")) {
            for (const auto& child : e["children"]) {
                entity.children.push_back(child.get<std::string>());
            }
        }
        
        // Handle endpoints
        if (e.contains("endpoints")) {
            for (auto& [action, endpoint] : e["endpoints"].items()) {
                entity.endpoints[action] = endpoint.get<std::string>();
            }
        }
        
        entity.help_center = e.value("help_center", "");
        
        return entity;
    } catch (const std::exception& e) {
        return std::nullopt;
    }
}

std::optional<Entity> KnowledgeResolver::getEntityByIdField(const std::string& idField) const {
    auto it = idFieldIndex_.find(idField);
    if (it != idFieldIndex_.end()) {
        return getEntity(it->second);
    }
    return std::nullopt;
}

std::vector<Entity> KnowledgeResolver::getEntitiesByApi(const std::string& apiId) const {
    std::vector<Entity> result;
    auto it = apiIndex_.find(apiId);
    if (it != apiIndex_.end()) {
        for (const auto& entityId : it->second) {
            if (auto entity = getEntity(entityId)) {
                result.push_back(*entity);
            }
        }
    }
    return result;
}

std::optional<Entity> KnowledgeResolver::getParentEntity(const std::string& entityId) const {
    if (auto entity = getEntity(entityId)) {
        if (!entity->parent.empty()) {
            return getEntity(entity->parent);
        }
    }
    return std::nullopt;
}

std::vector<Entity> KnowledgeResolver::getChildEntities(const std::string& entityId) const {
    std::vector<Entity> result;
    if (auto entity = getEntity(entityId)) {
        for (const auto& childId : entity->children) {
            if (auto child = getEntity(childId)) {
                result.push_back(*child);
            }
        }
    }
    return result;
}

std::vector<Entity> KnowledgeResolver::getEntityHierarchy(const std::string& entityId) const {
    std::vector<Entity> hierarchy;
    
    // Get ancestors (walk up)
    std::vector<Entity> ancestors;
    std::string currentId = entityId;
    while (auto parent = getParentEntity(currentId)) {
        ancestors.push_back(*parent);
        currentId = parent->id;
    }
    // Reverse to get root-first order
    std::reverse(ancestors.begin(), ancestors.end());
    hierarchy.insert(hierarchy.end(), ancestors.begin(), ancestors.end());
    
    // Add current entity
    if (auto current = getEntity(entityId)) {
        hierarchy.push_back(*current);
    }
    
    // Get descendants (walk down - just immediate children for now)
    auto children = getChildEntities(entityId);
    hierarchy.insert(hierarchy.end(), children.begin(), children.end());
    
    return hierarchy;
}

// =========================================
// Layer 2: Pattern Matching
// =========================================

std::optional<Workflow> KnowledgeResolver::getWorkflow(const std::string& workflowId) const {
    if (!loaded_) return std::nullopt;
    
    try {
        const auto& patterns = knowledge_["taxonomy"]["workflow_patterns"];
        if (!patterns.contains(workflowId)) {
            return std::nullopt;
        }
        
        const auto& w = patterns[workflowId];
        Workflow workflow;
        workflow.id = workflowId;
        workflow.name = w.value("name", "");
        workflow.description = w.value("description", "");
        workflow.primary_doc = w.value("primary_doc", "");
        
        if (w.contains("sequence")) {
            for (const auto& s : w["sequence"]) {
                WorkflowStep step;
                step.step_name = s.value("step", "");
                step.entity = s.value("entity", "");
                step.endpoint = s.value("endpoint", "");
                step.doc = s.value("doc", "");
                step.description = s.value("description", "");
                step.optional = s.value("optional", false);
                workflow.steps.push_back(step);
            }
        }
        
        // Parse optional more_actions
        if (w.contains("more_actions")) {
            for (const auto& s : w["more_actions"]) {
                WorkflowStep step;
                step.step_name = s.value("step", "");
                step.entity = s.value("entity", "");
                step.endpoint = s.value("endpoint", "");
                step.doc = s.value("doc", "");
                step.description = s.value("description", "");
                step.optional = true;  // All more_actions are optional
                workflow.more_actions.push_back(step);
            }
        }
        
        return workflow;
    } catch (const std::exception& e) {
        return std::nullopt;
    }
}

std::vector<Workflow> KnowledgeResolver::findWorkflowsForEntity(const std::string& entityId) const {
    std::vector<Workflow> result;
    
    if (!loaded_) return result;
    
    try {
        const auto& patterns = knowledge_["taxonomy"]["workflow_patterns"];
        for (auto& [workflowId, w] : patterns.items()) {
            if (w.contains("sequence")) {
                for (const auto& step : w["sequence"]) {
                    if (step.value("entity", "") == entityId) {
                        if (auto workflow = getWorkflow(workflowId)) {
                            result.push_back(*workflow);
                        }
                        break;  // Don't add same workflow twice
                    }
                }
            }
        }
    } catch (const std::exception& e) {
        // Ignore errors
    }
    
    return result;
}

json KnowledgeResolver::getApiGroup(const std::string& apiId) const {
    if (!loaded_) return nullptr;
    
    try {
        const auto& groups = knowledge_["taxonomy"]["api_groups"];
        for (auto& [groupId, group] : groups.items()) {
            if (group.contains("apis")) {
                for (const auto& api : group["apis"]) {
                    if (api.get<std::string>() == apiId) {
                        return group;
                    }
                }
            }
        }
    } catch (const std::exception& e) {
        // Ignore errors
    }
    
    return nullptr;
}

// =========================================
// Layer 3: Intent Resolution
// =========================================

double KnowledgeResolver::calculatePatternMatch(const std::string& query, const std::string& pattern) const {
    // Exact match
    if (query == pattern) {
        return 1.0;
    }
    
    // Word-based matching: split both into words and compute overlap
    auto splitWords = [](const std::string& s) {
        std::vector<std::string> words;
        std::istringstream iss(s);
        std::string word;
        while (iss >> word) {
            // Simple stemming: remove trailing 's' for plurals
            if (word.length() > 2 && word.back() == 's') {
                word.pop_back();
            }
            words.push_back(word);
        }
        return words;
    };
    
    auto queryWords = splitWords(query);
    auto patternWords = splitWords(pattern);
    
    if (patternWords.empty()) return 0.0;
    
    // Count matching words (order-independent)
    int matchCount = 0;
    for (const auto& pw : patternWords) {
        for (const auto& qw : queryWords) {
            if (qw == pw || 
                qw.find(pw) != std::string::npos || 
                pw.find(qw) != std::string::npos) {
                matchCount++;
                break;
            }
        }
    }
    
    // Score based on how many pattern words were found
    double score = static_cast<double>(matchCount) / patternWords.size();
    
    // Bonus if all pattern words are present
    if (matchCount == static_cast<int>(patternWords.size())) {
        score = std::min(0.95, score + 0.2);
    }
    
    // Penalty for very short queries matching long patterns
    if (queryWords.size() < patternWords.size() / 2) {
        score *= 0.7;
    }
    
    return score > 0.4 ? score : 0.0;  // Threshold to avoid weak matches
}

std::vector<IntentMatch> KnowledgeResolver::matchIntent(const std::string& query) const {
    std::vector<IntentMatch> matches;
    
    if (!loaded_) return matches;
    
    // Normalize query
    std::string normalizedQuery = query;
    std::transform(normalizedQuery.begin(), normalizedQuery.end(), 
                   normalizedQuery.begin(), ::tolower);
    
    // Find matching patterns
    std::unordered_map<std::string, double> intentScores;
    
    for (const auto& [pattern, intentId] : intentPatterns_) {
        double score = calculatePatternMatch(normalizedQuery, pattern);
        if (score > 0.0) {
            // Keep highest score for each intent
            if (intentScores.find(intentId) == intentScores.end() || 
                intentScores[intentId] < score) {
                intentScores[intentId] = score;
            }
        }
    }
    
    // Convert to IntentMatch objects
    try {
        const auto& intents = knowledge_["navigation"]["intents"];
        
        for (const auto& [intentId, score] : intentScores) {
            if (!intents.contains(intentId)) continue;
            
            const auto& i = intents[intentId];
            IntentMatch match;
            match.intent_id = intentId;
            match.entity = i.value("entity", "");
            match.action = i.value("action", "");
            match.intent_type = i.value("intent_type", "action");  // Default to "action"
            match.primary_doc = i.value("primary_doc", "");
            match.section = i.value("section", "");
            match.endpoint = i.value("endpoint", "");
            match.confidence = score;
            
            if (i.contains("related_docs")) {
                for (const auto& doc : i["related_docs"]) {
                    match.related_docs.push_back(doc.get<std::string>());
                }
            }
            
            // Parse pre-defined related_sections for informational intents
            if (i.contains("related_sections")) {
                for (const auto& sec : i["related_sections"]) {
                    match.related_sections.push_back(sec.get<std::string>());
                }
            }
            
            if (i.contains("prerequisites")) {
                for (const auto& prereq : i["prerequisites"]) {
                    match.prerequisites.push_back(prereq.get<std::string>());
                }
            }
            
            if (i.contains("clarifying_questions")) {
                for (const auto& q : i["clarifying_questions"]) {
                    match.clarifying_questions.push_back(q.get<std::string>());
                }
            }
            
            matches.push_back(match);
        }
    } catch (const std::exception& e) {
        // Ignore errors
    }
    
    // Sort by confidence (highest first)
    std::sort(matches.begin(), matches.end(),
        [](const IntentMatch& a, const IntentMatch& b) {
            return a.confidence > b.confidence;
        });
    
    return matches;
}

// =========================================
// Combined Resolution
// =========================================

std::vector<std::string> KnowledgeResolver::extractEntities(const std::string& text) const {
    std::vector<std::string> found;
    
    if (!loaded_) return found;
    
    std::string normalizedText = text;
    std::transform(normalizedText.begin(), normalizedText.end(), 
                   normalizedText.begin(), ::tolower);
    
    // Check for entity names and ID fields
    try {
        const auto& entities = knowledge_["skeleton"]["entities"];
        for (auto& [entityId, entity] : entities.items()) {
            // Check entity name
            std::string entityLower = entityId;
            std::transform(entityLower.begin(), entityLower.end(), 
                           entityLower.begin(), ::tolower);
            
            // Replace underscores with spaces for matching
            std::string entitySpaced = entityLower;
            std::replace(entitySpaced.begin(), entitySpaced.end(), '_', ' ');
            
            if (normalizedText.find(entityLower) != std::string::npos ||
                normalizedText.find(entitySpaced) != std::string::npos) {
                found.push_back(entityId);
            }
        }
    } catch (const std::exception& e) {
        // Ignore errors
    }
    
    return found;
}

KnowledgeContext KnowledgeResolver::resolveQuery(const std::string& query) const {
    KnowledgeContext context;
    
    if (!loaded_) return context;
    
    // 1. Extract entity mentions
    auto entityIds = extractEntities(query);
    for (const auto& entityId : entityIds) {
        if (auto entity = getEntity(entityId)) {
            context.entities.push_back(*entity);
        }
    }
    
    // 2. Match intents
    context.intents = matchIntent(query);
    
    // Check if this is an informational query (no workflow needed)
    bool isInformational = false;
    for (const auto& intent : context.intents) {
        if (intent.intent_type == "informational") {
            isInformational = true;
            break;
        }
    }
    
    // 3. Find relevant workflow (if entity is mentioned AND not informational)
    if (!entityIds.empty() && !isInformational) {
        auto workflows = findWorkflowsForEntity(entityIds[0]);
        if (!workflows.empty()) {
            context.workflow = workflows[0];
        }
    }
    
    // 4. Collect suggested docs (deduplicated, ordered) and resolve to URLs
    // Use vector to maintain order: intent primary_doc FIRST, then others
    std::vector<std::string> docList;
    std::set<std::string> docSeen;  // For deduplication
    
    // Helper to resolve and add doc (maintains insertion order)
    auto addDoc = [&](const std::string& doc) {
        if (!doc.empty()) {
            std::string resolved = resolveDocUrl(doc);
            if (docSeen.find(resolved) == docSeen.end()) {
                docSeen.insert(resolved);
                docList.push_back(resolved);
            }
        }
    };
    
    // FIRST: Intent primary_doc (this should be the main recommendation)
    for (const auto& intent : context.intents) {
        if (!intent.primary_doc.empty()) {
            addDoc(intent.primary_doc + intent.section);
        }
    }
    
    // SECOND: Intent related_docs
    for (const auto& intent : context.intents) {
        for (const auto& doc : intent.related_docs) {
            addDoc(doc);
        }
    }
    
    // THIRD: Entity docs (lower priority)
    for (const auto& entity : context.entities) {
        addDoc(entity.primary_doc);
        for (const auto& doc : entity.related_docs) {
            addDoc(doc);
        }
    }
    
    context.suggested_docs = docList;
    
    // 5. Collect prerequisites
    for (const auto& intent : context.intents) {
        for (const auto& prereq : intent.prerequisites) {
            context.prerequisites.push_back(prereq);
        }
    }
    
    // 6. Collect clarifying questions
    for (const auto& intent : context.intents) {
        for (const auto& q : intent.clarifying_questions) {
            context.clarifying_questions.push_back(q);
        }
    }
    
    // 7. Collect endpoints
    for (const auto& entity : context.entities) {
        for (const auto& [action, endpoint] : entity.endpoints) {
            context.endpoints.push_back(endpoint);
        }
    }
    for (const auto& intent : context.intents) {
        if (!intent.endpoint.empty()) {
            context.endpoints.push_back(intent.endpoint);
        }
    }
    
    // 8. Find related sections/anchors for subsection-level links
    // ONLY include anchors from /guidelines pages (not quickstarts/tutorials/getting-started)
    auto isGuidelineSection = [](const SectionAnchor& section) {
        return section.pageSlug.find("/guidelines/") == 0;
    };
    
    // Check for pre-defined related_sections from informational intents
    bool usedPredefinedSections = false;
    for (const auto& intent : context.intents) {
        if (!intent.related_sections.empty()) {
            for (const auto& sectionSlug : intent.related_sections) {
                SectionAnchor anchor;
                anchor.slug = sectionSlug;
                // Extract title from slug (e.g., #matched-audiences -> Matched Audiences)
                size_t hashPos = sectionSlug.rfind('#');
                if (hashPos != std::string::npos) {
                    std::string anchorPart = sectionSlug.substr(hashPos + 1);
                    // Convert kebab-case to Title Case
                    std::string title;
                    bool capitalize = true;
                    for (char c : anchorPart) {
                        if (c == '-') {
                            title += ' ';
                            capitalize = true;
                        } else if (capitalize) {
                            title += std::toupper(c);
                            capitalize = false;
                        } else {
                            title += c;
                        }
                    }
                    anchor.title = title;
                    anchor.pageSlug = sectionSlug.substr(0, hashPos);
                }
                anchor.relevance = 1.0;
                context.related_sections.push_back(anchor);
            }
            usedPredefinedSections = true;
        }
    }
    
    // If no pre-defined sections, use automatic discovery
    if (!usedPredefinedSections) {
        // Minimum relevance thresholds
        const double HIGH_RELEVANCE = 0.9;   // Entity+action from same API
        const double MIN_RELEVANCE = 0.5;    // Entity-only matches
        
        // First, try entity + action combinations from intents (highest priority)
        std::set<std::string> seenSlugs;
        for (const auto& intent : context.intents) {
            if (!intent.entity.empty()) {
                auto sections = findRelatedSections(intent.entity, intent.action, 5);
                for (const auto& section : sections) {
                    if (isGuidelineSection(section) && 
                        section.relevance >= HIGH_RELEVANCE &&
                        seenSlugs.count(section.slug) == 0) {
                        context.related_sections.push_back(section);
                        seenSlugs.insert(section.slug);
                    }
                }
            }
        }
        
        // Only add entity-only sections if we have NO high-relevance intent matches
        if (context.related_sections.empty()) {
            for (const auto& entity : context.entities) {
                auto sections = findRelatedSections(entity.id, "", 4);
                for (const auto& section : sections) {
                    if (isGuidelineSection(section) && 
                        section.relevance >= MIN_RELEVANCE &&
                        seenSlugs.count(section.slug) == 0) {
                        context.related_sections.push_back(section);
                        seenSlugs.insert(section.slug);
                    }
                }
            }
        }
        
        // Add a few more from same API if we have few results
        if (context.related_sections.size() < 3 && !context.intents.empty()) {
            for (const auto& intent : context.intents) {
                if (!intent.entity.empty()) {
                    auto sections = findRelatedSections(intent.entity, intent.action, 5);
                    for (const auto& section : sections) {
                        if (isGuidelineSection(section) && 
                            section.relevance >= MIN_RELEVANCE &&
                            seenSlugs.count(section.slug) == 0) {
                            context.related_sections.push_back(section);
                            seenSlugs.insert(section.slug);
                            if (context.related_sections.size() >= 4) break;
                        }
                    }
                }
                if (context.related_sections.size() >= 4) break;
            }
        }
    }  // end if (!usedPredefinedSections)
    
    // Sort by relevance and limit to top 6
    std::sort(context.related_sections.begin(), context.related_sections.end(),
        [](const SectionAnchor& a, const SectionAnchor& b) {
            return a.relevance > b.relevance;
        });
    
    if (context.related_sections.size() > 6) {
        context.related_sections.resize(6);
    }
    
    return context;
}

// =========================================
// Prompt Context Generation
// =========================================

std::string KnowledgeContext::toPromptContext() const {
    std::stringstream ss;
    
    // Entity context
    if (!entities.empty()) {
        ss << "ENTITIES MENTIONED:\n";
        for (const auto& entity : entities) {
            ss << "- " << entity.id << ": " << entity.description << "\n";
            if (!entity.parent.empty()) {
                ss << "  Parent: " << entity.parent << "\n";
            }
            if (!entity.children.empty()) {
                ss << "  Children: ";
                for (size_t i = 0; i < entity.children.size(); i++) {
                    if (i > 0) ss << ", ";
                    ss << entity.children[i];
                }
                ss << "\n";
            }
        }
        ss << "\n";
    }
    
    // Intent context
    if (!intents.empty()) {
        ss << "DETECTED INTENTS:\n";
        for (const auto& intent : intents) {
            if (intent.confidence > 0.3) {  // Only high-confidence intents
                ss << "- " << intent.intent_id << " (confidence: " 
                   << static_cast<int>(intent.confidence * 100) << "%)\n";
                if (!intent.endpoint.empty()) {
                    ss << "  Endpoint: " << intent.endpoint << "\n";
                }
            }
        }
        ss << "\n";
    }
    
    // Workflow context
    if (workflow) {
        ss << "RELEVANT WORKFLOW: " << workflow->name << "\n";
        ss << "Steps:\n";
        for (size_t i = 0; i < workflow->steps.size(); i++) {
            const auto& step = workflow->steps[i];
            ss << "  " << (i + 1) << ". " << step.step_name;
            if (!step.entity.empty()) {
                ss << " (" << step.entity << ")";
            }
            ss << "\n";
        }
        
        // Display optional more_actions if present
        if (!workflow->more_actions.empty()) {
            ss << "More Actions:\n";
            for (const auto& action : workflow->more_actions) {
                ss << "  - " << action.step_name;
                if (!action.description.empty()) {
                    ss << ": " << action.description;
                } else if (!action.entity.empty()) {
                    ss << " (" << action.entity << ")";
                }
                ss << "\n";
            }
        }
        ss << "\n";
    }
    
    // Suggested docs - CRITICAL: These are the ONLY URLs you may use
    if (!suggested_docs.empty()) {
        ss << "PRIMARY DOCUMENTATION (recommend these first):\n";
        for (const auto& doc : suggested_docs) {
            ss << "- " << doc << "\n";
        }
        ss << "\n";
    }
    
    // Related subsections with anchor links - for specific actions
    if (!related_sections.empty()) {
        ss << "RELATED ENDPOINT SECTIONS (link directly to these anchors):\n";
        for (const auto& section : related_sections) {
            ss << "- [" << section.title << "](" << section.slug << ")";
            if (!section.method.empty() && !section.endpoint.empty()) {
                ss << " - " << section.method << " " << section.endpoint;
            }
            ss << "\n";
        }
        ss << "\n";
    }
    
    // Prerequisites
    if (!prerequisites.empty()) {
        ss << "PREREQUISITES:\n";
        for (const auto& prereq : prerequisites) {
            ss << "- " << prereq << "\n";
        }
        ss << "\n";
    }
    
    return ss.str();
}

json KnowledgeContext::toJson(const KnowledgeResolver* resolver) const {
    json result;
    
    // Primary documentation link (first one is the main target)
    if (!suggested_docs.empty()) {
        result["primaryDoc"] = suggested_docs[0];
        
        // Get human-readable title for the primary doc
        if (resolver) {
            result["primaryDocTitle"] = resolver->getDocLabel(suggested_docs[0]);
        }
        
        result["suggestedDocs"] = suggested_docs;
    }
    
    // More actions from intent (replaces workflow section)
    // These are optional related actions a user might want after the primary task
    if (!intents.empty()) {
        const auto& intent = intents[0];
        if (!intent.related_sections.empty()) {
            json actions = json::array();
            for (const auto& section : intent.related_sections) {
                json a;
                // Parse section format: "/guidelines/campaign-api#change-campaign-status"
                std::string path = section;
                std::string title = section;
                
                // Extract title from section anchor or use the path
                size_t hashPos = section.find('#');
                if (hashPos != std::string::npos && hashPos < section.length() - 1) {
                    // Convert #change-campaign-status → "Change Campaign Status"
                    std::string anchor = section.substr(hashPos + 1);
                    title = "";
                    bool capitalizeNext = true;
                    for (char c : anchor) {
                        if (c == '-') {
                            title += ' ';
                            capitalizeNext = true;
                        } else if (capitalizeNext) {
                            title += std::toupper(c);
                            capitalizeNext = false;
                        } else {
                            title += c;
                        }
                    }
                } else if (resolver) {
                    title = resolver->getDocLabel(section);
                }
                
                a["title"] = title;
                a["url"] = section;
                actions.push_back(a);
            }
            if (!actions.empty()) {
                result["moreActions"] = actions;
            }
        }
    }
    
    // Related sections with validated URLs
    if (!related_sections.empty()) {
        json sections = json::array();
        for (const auto& section : related_sections) {
            json s;
            s["title"] = section.title;
            s["url"] = section.slug;
            if (!section.method.empty()) {
                s["method"] = section.method;
            }
            if (!section.endpoint.empty()) {
                s["endpoint"] = section.endpoint;
            }
            sections.push_back(s);
        }
        result["relatedSections"] = sections;
    }
    
    // Detected intent (for debugging/transparency)
    if (!intents.empty() && intents[0].confidence > 0.3) {
        result["detectedIntent"] = intents[0].intent_id;
        result["intentConfidence"] = intents[0].confidence;
    }
    
    return result;
}

} // namespace iqm
