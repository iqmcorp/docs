/**
 * Test KnowledgeResolver with common user queries
 * 
 * Tests the PVLT-weighted query resolution system.
 */

#include "KnowledgeResolver.h"
#include <iostream>
#include <cassert>

using namespace iqm;

void printSeparator(const std::string& title) {
    std::cout << "\n========================================\n";
    std::cout << title << "\n";
    std::cout << "========================================\n";
}

void testEntityResolution(KnowledgeResolver& resolver) {
    printSeparator("TEST: Entity Resolution (Layer 1)");
    
    // Test direct entity lookup
    auto campaign = resolver.getEntity("campaign");
    assert(campaign.has_value());
    std::cout << "✓ Found entity: campaign\n";
    std::cout << "  - ID field: " << campaign->id_field << "\n";
    std::cout << "  - Level: " << campaign->level << "\n";
    std::cout << "  - Parent: " << campaign->parent << "\n";
    std::cout << "  - Children: ";
    for (const auto& c : campaign->children) std::cout << c << " ";
    std::cout << "\n";
    
    // Test ID field lookup
    auto fromIdField = resolver.getEntityByIdField("campaignId");
    assert(fromIdField.has_value());
    assert(fromIdField->id == "campaign");
    std::cout << "✓ Resolved campaignId → campaign\n";
    
    // Test owId lookup (should map to workspace or customer)
    auto fromOwId = resolver.getEntityByIdField("owId");
    assert(fromOwId.has_value());
    std::cout << "✓ Resolved owId → " << fromOwId->id << "\n";
    
    // Test hierarchy
    auto parent = resolver.getParentEntity("campaign");
    assert(parent.has_value());
    assert(parent->id == "insertion_order");
    std::cout << "✓ Campaign parent: " << parent->id << "\n";
    
    auto children = resolver.getChildEntities("campaign");
    std::cout << "✓ Campaign children (" << children.size() << "): ";
    for (const auto& c : children) std::cout << c.id << " ";
    std::cout << "\n";
}

void testIntentMatching(KnowledgeResolver& resolver) {
    printSeparator("TEST: Intent Matching (Layer 3)");
    
    struct TestCase {
        std::string query;
        std::string expectedEntity;
        std::string expectedAction;
    };
    
    std::vector<TestCase> testCases = {
        {"How do I create a campaign?", "campaign", "create"},
        {"I need to upload a creative", "creative", "create"},
        {"How do I add a conversion to my campaign?", "conversion", "assign"},
        {"How to set up authentication?", "workspace_user", "authenticate"},
        {"What is the endpoint to list audiences?", "audience", "list"},
        {"How do I generate a report?", "report", "create"},
        {"I want to configure bid modeling", "bid_model", "configure"},
        {"How to target inventory?", "inventory", "target"},
    };
    
    for (const auto& tc : testCases) {
        auto intents = resolver.matchIntent(tc.query);
        
        std::cout << "\nQuery: \"" << tc.query << "\"\n";
        
        if (intents.empty()) {
            std::cout << "  ✗ No intents matched\n";
            continue;
        }
        
        auto& top = intents[0];
        std::cout << "  Top intent: " << top.intent_id 
                  << " (confidence: " << top.confidence << ")\n";
        std::cout << "  - Entity: " << top.entity << "\n";
        std::cout << "  - Action: " << top.action << "\n";
        std::cout << "  - Primary doc: " << top.primary_doc << "\n";
        
        if (!top.endpoint.empty()) {
            std::cout << "  - Endpoint: " << top.endpoint << "\n";
        }
        
        if (top.entity == tc.expectedEntity) {
            std::cout << "  ✓ Entity match\n";
        } else {
            std::cout << "  ✗ Expected entity: " << tc.expectedEntity << "\n";
        }
    }
}

void testWorkflowResolution(KnowledgeResolver& resolver) {
    printSeparator("TEST: Workflow Resolution (Layer 2)");
    
    auto workflow = resolver.getWorkflow("full_campaign_setup");
    if (workflow) {
        std::cout << "✓ Found workflow: " << workflow->name << "\n";
        std::cout << "  Description: " << workflow->description << "\n";
        std::cout << "  Steps:\n";
        for (size_t i = 0; i < workflow->steps.size(); ++i) {
            const auto& step = workflow->steps[i];
            std::cout << "    " << (i+1) << ". " << step.step_name;
            if (!step.entity.empty()) {
                std::cout << " [" << step.entity << "]";
            }
            std::cout << "\n";
        }
    } else {
        std::cout << "✗ Workflow not found\n";
    }
    
    // Test finding workflows by entity
    auto campaignWorkflows = resolver.findWorkflowsForEntity("campaign");
    std::cout << "\n✓ Workflows involving 'campaign': " << campaignWorkflows.size() << "\n";
    for (const auto& wf : campaignWorkflows) {
        std::cout << "  - " << wf.name << "\n";
    }
}

void testQueryResolution(KnowledgeResolver& resolver) {
    printSeparator("TEST: Full Query Resolution");
    
    std::vector<std::string> queries = {
        "How do I create a campaign?",  // Your primary use case
        "How do I add a conversion to my campaign?",
        "I'm migrating from Beeswax, where do I start?",
        "What's the difference between matched and contextual audiences?",
        "How do I set up bid modeling for my campaigns?",
        "What endpoints do I need to create a full campaign setup?",
    };
    
    for (const auto& query : queries) {
        std::cout << "\nQuery: \"" << query << "\"\n";
        std::cout << "----------------------------------------\n";
        
        auto context = resolver.resolveQuery(query);
        
        // Print the formatted prompt context
        std::string promptCtx = context.toPromptContext();
        if (!promptCtx.empty()) {
            std::cout << promptCtx << "\n";
        } else {
            std::cout << "(No context generated)\n";
        }
    }
}

int main() {
    std::cout << "==============================================\n";
    std::cout << "  KnowledgeResolver Test Suite\n";
    std::cout << "  Testing PVLT-weighted query understanding\n";
    std::cout << "==============================================\n";
    
    KnowledgeResolver resolver;
    
    // Load knowledge
    if (!resolver.loadFromFile("knowledge/build/knowledge.json")) {
        std::cerr << "Failed to load knowledge.json\n";
        std::cerr << "Run 'node tools/build-knowledge.js' first\n";
        return 1;
    }
    std::cout << "✓ Loaded knowledge layers\n";
    
    testEntityResolution(resolver);
    testIntentMatching(resolver);
    testWorkflowResolution(resolver);
    testQueryResolution(resolver);
    
    printSeparator("TEST COMPLETE");
    std::cout << "All tests passed!\n";
    
    return 0;
}
