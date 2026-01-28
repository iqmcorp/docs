# AI Chat Knowledge Layers

> **Applying the PVLT / 4-Layer approach to LLM knowledge architecture**

The LLM currently struggles to navigate docs and recommend related resources because it lacks **structured understanding** of the IQM ecosystem. Raw Algolia search returns text fragments—it doesn't understand *relationships* between concepts.

The solution: **Build knowledge layers that the LLM can traverse**, just like the API spec layers in `api-sdk-pipeline/layers/`.

---

## The Problem

```
USER: "How do I add a conversion to my campaign?"

CURRENT AI BEHAVIOR:
├── Searches Algolia for "conversion campaign"
├── Gets 5 random doc snippets
├── Summarizes them (often incorrectly)
└── No understanding of: Entity hierarchy, API relationships, workflow sequence

DESIRED AI BEHAVIOR:
├── Recognizes: Conversion → Campaign is an ASSIGNMENT operation
├── Knows: Conversion must exist before assignment
├── Knows: Campaign must exist within an IO
├── Suggests: POST /api/v3/conversion/assign-to/campaign endpoint
├── Links: Conversion Quickstart + Conversion API Guide + Campaign API Guide
└── Asks: "Do you have a conversion created? What's your campaign ID?"
```

---

## Knowledge Layer Architecture

Adapting from `api-sdk-pipeline/layers/` with PVLT weighting:

```
┌─────────────────────────────────────────────────────────────────┐
│  LAYER 1: SKELETON (Foundation - Weight 4)                      │
│  What entities exist? What are their relationships?             │
│  Source: entity-hierarchy.yaml, OpenAPI paths                   │
│  Contains: Entity tree, ID fields, parent-child relationships   │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 2: TAXONOMY (Patterns - Weight 3)                        │
│  How are entities organized? What patterns exist?               │
│  Source: sidebars.js, API groupings, vertical bifurcation       │
│  Contains: Doc categories, API groupings, workflow patterns     │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 3: NAVIGATION (Experience - Weight 2)                    │
│  How do users navigate? What are common paths?                  │
│  Source: Doc structure, help.iqm.com links, user analytics      │
│  Contains: Related docs, next steps, common sequences           │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 4: CONTENT (Details - Weight 1)                          │
│  What's the actual content? Specific text and code.             │
│  Source: Algolia index, MDX content, code examples              │
│  Contains: Searchable text, code snippets, parameter details    │
└─────────────────────────────────────────────────────────────────┘
```

**Critical Rule: Higher layers ALWAYS inform lower layer interpretation.**

---

## Layer 1: SKELETON (Foundation)

### Purpose
Define the **entity model** and **relationships** that govern the entire platform.

### Data Structure
```yaml
# knowledge/skeleton.yaml
entities:
  workspace:
    id_field: owId
    level: 0
    children: [workspace_user]
    docs: ["/getting-started/platform-overview"]
    api: user-api
    
  workspace_user:
    id_field: userId
    level: 1
    parent: workspace
    children: [customer]
    docs: ["/guidelines/user-api"]
    api: user-api
    
  customer:
    id_field: customerId
    aliases: [advertiserId, organizationId]
    level: 2
    parent: workspace_user
    children: [insertion_order]
    docs: ["/tutorials/customer-guide"]
    api: workspace-api
    
  insertion_order:
    id_field: ioId
    level: 3
    parent: customer
    children: [campaign]
    docs: ["/guidelines/campaign-api#insertion-orders"]
    api: campaign-api
    endpoints:
      create: POST /api/v3/cmp/io/add
      list: POST /api/v3/cmp/io/basic/list
      
  campaign:
    id_field: campaignId
    level: 4
    parent: insertion_order
    children: [creative, audience, conversion, inventory]
    docs: 
      - "/quickstart-guides/create-a-campaign-quickstart"
      - "/guidelines/campaign-api"
    api: campaign-api
    related_apis: [bid-model-api, conversion-api, inventory-api, insights-api]
    endpoints:
      create: POST /api/v2/cmp/campaigns/add
      create_pg: POST /api/v3/cmp/pg/campaigns/add
      get: GET /api/v2/cmp/campaign/{campaignId}
      
  creative:
    id_field: creativeId
    level: 5
    parent: campaign
    docs: ["/quickstart-guides/upload-a-creative-quickstart", "/guidelines/creative-api"]
    api: creative-api
    types: [image, video, audio, html, native]
    
  audience:
    id_field: audienceId
    level: 5
    parent: campaign  # assigned to campaign
    docs: ["/quickstart-guides/matched-audience-upload-api-quickstart-guide", "/guidelines/audience-api"]
    api: audience-api
    types: [matched, retargeting, lookalike, segment]
    
  conversion:
    id_field: conversionId
    level: 5
    parent: campaign  # assigned to campaign
    docs: ["/quickstart-guides/conversion-quickstart", "/guidelines/conversion-api"]
    api: conversion-api
    endpoints:
      assign_to_campaign: POST /api/v3/conversion/assign-to/campaign
      
  inventory:
    id_field: inventoryId
    level: 5
    parent: campaign  # targeted by campaign
    docs: ["/quickstart-guides/inventory-quickstart", "/guidelines/inventory-api"]
    api: inventory-api

# Relationship types
relationships:
  - type: parent_child
    description: Hierarchical containment (IO contains Campaigns)
  - type: assignment
    description: Entity assigned to another (Conversion assigned to Campaign)
  - type: targeting
    description: Entity used for targeting (Audience targeted by Campaign)
  - type: configuration
    description: Entity configures another (Bid Model configures Campaign)
```

### LLM Usage
When user asks about any entity:
1. Look up entity in skeleton
2. Understand its **level** in hierarchy
3. Know what **parent** must exist first
4. Know what **children** can be created after
5. Map to **primary doc** and **API**

---

## Layer 2: TAXONOMY (Patterns)

### Purpose
Define **organizational patterns** and **groupings** that help users find related content.

### Data Structure
```yaml
# knowledge/taxonomy.yaml

# Documentation categories (from sidebars.js structure)
doc_categories:
  getting-started:
    description: "Foundation knowledge for new users"
    weight: 4  # Most fundamental
    includes:
      - platform-overview
      - rest-api-reference
      - before-you-begin
      - api-pagination-guide
    leads_to: [quickstart-guides]
    
  quickstart-guides:
    description: "Task-oriented tutorials for specific actions"
    weight: 3
    includes:
      - authentication-quickstart-guide
      - create-a-campaign-quickstart
      - upload-a-creative-quickstart
      - conversion-quickstart
      - inventory-quickstart
      - insights-quickstart
      - reporting-api-quickstart-guide
    requires: [getting-started]
    leads_to: [guidelines]
    
  guidelines:
    description: "Complete API reference documentation"
    weight: 2
    includes:
      - campaign-api
      - creative-api
      - audience-api
      - conversion-api
      - inventory-api
      - reports-api
      - bid-model-api
      - insights-api
      - user-api
      - workspace-api
      - finance-api
    requires: [quickstart-guides]
    
  migration-guides:
    description: "Platform-specific migration from other DSPs"
    weight: 2
    verticals: [beeswax, dv360, xandr, the-trade-desk]
    standalone: true
    
  vertical-guides:
    description: "Industry-specific features"
    weight: 2
    verticals: [political, healthcare]
    requires: [guidelines]

# API groupings (from api-sdk-pipeline taxonomy)
api_groups:
  core:
    apis: [campaign-api, creative-api]
    description: "Core advertising entities"
    
  targeting:
    apis: [audience-api, inventory-api]
    description: "Targeting and placement"
    
  measurement:
    apis: [conversion-api, insights-api, reports-api, dashboard-api]
    description: "Tracking and analytics"
    
  optimization:
    apis: [bid-model-api]
    description: "Bid strategies and optimization"
    
  management:
    apis: [user-api, workspace-api, finance-api]
    description: "Organization and user management"

# Common workflow patterns
workflow_patterns:
  campaign_creation:
    name: "Create a Campaign"
    sequence:
      - authenticate
      - select_customer
      - create_io
      - create_campaign
      - upload_creatives
      - assign_audience
      - assign_conversions
      - set_inventory
      - activate
    docs:
      - /quickstart-guides/create-a-campaign-quickstart
      - /quickstart-guides/upload-creative-and-create-a-campaign-api-quickstart-guide
      
  conversion_tracking:
    name: "Set Up Conversion Tracking"
    sequence:
      - create_conversion_pixel
      - implement_pixel
      - assign_to_campaign
      - verify_tracking
    docs:
      - /quickstart-guides/conversion-quickstart
      - /guidelines/conversion-api
      
  reporting:
    name: "Generate Reports"
    sequence:
      - define_metrics
      - set_filters
      - run_report
      - schedule_report
    docs:
      - /quickstart-guides/reporting-api-quickstart-guide
      - /quickstart-guides/schedule-report-api-quickstart-guide
```

### LLM Usage
When user asks a question:
1. Identify which **category** it belongs to
2. Understand **prerequisite** knowledge
3. Suggest **next steps** in workflow
4. Find **related APIs** in same group

---

## Layer 3: NAVIGATION (Experience)

### Purpose
Define **user journey paths** and **related content** connections.

### Data Structure
```yaml
# knowledge/navigation.yaml

# Page-to-page connections
page_graph:
  /quickstart-guides/create-a-campaign-quickstart:
    related:
      - path: /guidelines/campaign-api
        relationship: "detailed reference"
      - path: /quickstart-guides/upload-a-creative-quickstart
        relationship: "next step"
      - path: /quickstart-guides/conversion-quickstart
        relationship: "related task"
    prerequisites:
      - /getting-started/before-you-begin
      - /quickstart-guides/authentication-quickstart-guide
    external:
      - url: https://help.iqm.com/en/articles/11497668-campaigns-overview
        relationship: "help center"
        
  /guidelines/conversion-api:
    related:
      - path: /guidelines/campaign-api
        relationship: "assignment target"
      - path: /quickstart-guides/conversion-quickstart
        relationship: "quickstart"
    api_endpoints:
      - POST /api/v3/conversion/assign-to/campaign
      - GET /api/v3/conversion/{conversionId}

# Common user intents mapped to resources
intent_mapping:
  "create campaign":
    primary: /quickstart-guides/create-a-campaign-quickstart
    related:
      - /guidelines/campaign-api
      - /quickstart-guides/upload-a-creative-quickstart
    endpoint: POST /api/v2/cmp/campaigns/add
    
  "add conversion to campaign":
    primary: /quickstart-guides/conversion-quickstart
    related:
      - /guidelines/conversion-api
      - /guidelines/campaign-api
    endpoint: POST /api/v3/conversion/assign-to/campaign
    clarifying_questions:
      - "Do you already have a conversion pixel created?"
      - "What's your campaign ID?"
      
  "run a report":
    primary: /quickstart-guides/reporting-api-quickstart-guide
    related:
      - /guidelines/reports-api
      - /quickstart-guides/schedule-report-api-quickstart-guide
    endpoint: POST /api/v3/ra/report/add
    
  "target specific audience":
    primary: /quickstart-guides/matched-audience-upload-api-quickstart-guide
    related:
      - /guidelines/audience-api
      - /quickstart-guides/contextual-audience-quickstart
    endpoint: POST /api/v2/audience/matched/add

# Error state navigation
error_handling:
  401_unauthorized:
    likely_cause: "Token expired or invalid"
    solution_doc: /quickstart-guides/authentication-quickstart-guide#refresh-token
    
  403_forbidden:
    likely_cause: "Missing X-IAA-OW-ID header or insufficient permissions"
    solution_doc: /getting-started/before-you-begin#workspace-id
    
  missing_io:
    likely_cause: "Campaign requires Insertion Order"
    solution_doc: /guidelines/campaign-api#insertion-orders
```

### LLM Usage
When user asks about a topic:
1. Map to **primary resource**
2. Suggest **related content**
3. Identify **prerequisites** they may have missed
4. Ask **clarifying questions** if ambiguous

---

## Layer 4: CONTENT (Details)

### Purpose
The actual searchable content—text, code examples, parameter details.

### Data Source
- **Algolia index** (existing)
- **OpenAPI spec** (from api-sdk-pipeline)
- **MDX content** (raw documentation)

### Enhanced Algolia Record Structure
```json
{
  "objectID": "campaign-api-create-campaign",
  "title": "Create a Campaign",
  "content": "Use POST /api/v2/cmp/campaigns/add to create...",
  "url": "/guidelines/campaign-api#create-campaign",
  
  // Layer 1 enrichment
  "entity": "campaign",
  "entity_level": 4,
  "parent_entity": "insertion_order",
  
  // Layer 2 enrichment
  "category": "guidelines",
  "api_group": "core",
  "workflow": "campaign_creation",
  
  // Layer 3 enrichment
  "related_docs": [
    "/quickstart-guides/create-a-campaign-quickstart",
    "/guidelines/creative-api"
  ],
  "prerequisites": ["/guidelines/campaign-api#insertion-orders"],
  
  // Existing Algolia fields
  "hierarchy": {...},
  "type": "content"
}
```

---

## Implementation Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                      Frontend (React)                                │
│                    AIAssistantNavbarItem                             │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  User Message: "How do I add a conversion to my campaign?"      │ │
│  └─────────────────────────────────────┬───────────────────────────┘ │
└────────────────────────────────────────┼────────────────────────────┘
                                         │
                                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    C++ DocAssistant Server                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                  KNOWLEDGE LAYER RESOLVER                     │   │
│  │                                                               │   │
│  │  1. Parse query → Extract entities: [conversion, campaign]   │   │
│  │                                                               │   │
│  │  2. Layer 1 (Skeleton) lookup:                               │   │
│  │     ├── conversion.parent = campaign (assignment)            │   │
│  │     ├── campaign.parent = insertion_order                    │   │
│  │     └── endpoint = POST /api/v3/conversion/assign-to/campaign│   │
│  │                                                               │   │
│  │  3. Layer 2 (Taxonomy) lookup:                               │   │
│  │     ├── category = measurement                               │   │
│  │     └── workflow = conversion_tracking                       │   │
│  │                                                               │   │
│  │  4. Layer 3 (Navigation) lookup:                             │   │
│  │     ├── primary_doc = /quickstart-guides/conversion-quickstart│   │
│  │     ├── related = [/guidelines/conversion-api]               │   │
│  │     └── clarifying_questions = ["Do you have conversion?"]   │   │
│  │                                                               │   │
│  │  5. Layer 4 (Content) - Algolia search with context:         │   │
│  │     └── Search "assign conversion campaign" + entity filter  │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                          │                                           │
│                          ▼                                           │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                  LLM PROMPT CONSTRUCTION                      │   │
│  │                                                               │   │
│  │  SYSTEM: You are an IQM documentation assistant.             │   │
│  │                                                               │   │
│  │  CONTEXT (Layer 1-3 knowledge):                              │   │
│  │  - User wants to assign Conversion to Campaign               │   │
│  │  - Conversion is assigned to Campaign (not contained)        │   │
│  │  - Required endpoint: POST /api/v3/conversion/assign-to/campaign │
│  │  - Prerequisite: Conversion must exist first                 │   │
│  │                                                               │   │
│  │  RELEVANT DOCS (Layer 4):                                    │   │
│  │  - [Conversion Quickstart](/quickstart-guides/conversion...) │   │
│  │  - [Conversion API](/guidelines/conversion-api)              │   │
│  │                                                               │   │
│  │  USER: "How do I add a conversion to my campaign?"           │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                          │                                           │
│                          ▼                                           │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                    llama.cpp Inference                        │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                          │                                           │
│                          ▼                                           │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                    RESPONSE                                   │   │
│  │                                                               │   │
│  │  "To add a conversion to your campaign, use the              │   │
│  │   POST /api/v3/conversion/assign-to/campaign endpoint.       │   │
│  │                                                               │   │
│  │   First, make sure you have:                                 │   │
│  │   1. Created a conversion pixel                              │   │
│  │   2. Have your campaign ID ready                             │   │
│  │                                                               │   │
│  │   See the [Conversion Quickstart] for step-by-step guide."   │   │
│  │                                                               │   │
│  │   Actions: [Navigate to Conversion Quickstart]               │   │
│  │            [Highlight endpoint in API docs]                  │   │
│  └──────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

---

## File Structure

```
cpp-backend/
├── knowledge/
│   ├── skeleton.yaml          # Layer 1: Entity structure
│   ├── taxonomy.yaml          # Layer 2: Organizational patterns
│   ├── navigation.yaml        # Layer 3: User journey paths
│   └── build/
│       └── knowledge.json     # Compiled layers for runtime
│
├── include/
│   ├── KnowledgeResolver.h    # Layer lookup interface
│   └── DocAssistant.h
│
├── src/
│   ├── KnowledgeResolver.cpp  # Layer traversal logic
│   └── DocAssistant.cpp
│
├── tools/
│   └── build-knowledge.js     # Compile YAML → JSON
│
└── scripts/
    └── sync-from-api-pipeline.sh  # Pull entity-hierarchy.yaml
```

---

## Build Process

```bash
# 1. Sync entity hierarchy from api-sdk-pipeline
./scripts/sync-from-api-pipeline.sh

# 2. Build knowledge layers
node tools/build-knowledge.js

# 3. Compile C++ with knowledge
cd build && cmake .. -DKNOWLEDGE_PATH=../knowledge/build && make

# 4. Run server with knowledge layers loaded
./doc_assistant_server --knowledge ../knowledge/build/knowledge.json
```

---

## Implementation Phases

### Phase 1: Knowledge Layer Files (Week 1)
- [ ] Create `knowledge/skeleton.yaml` from `entity-hierarchy.yaml`
- [ ] Create `knowledge/taxonomy.yaml` from `sidebars.js` analysis
- [ ] Create `knowledge/navigation.yaml` with doc relationships
- [ ] Build script to compile YAML → JSON

### Phase 2: KnowledgeResolver C++ Module (Week 2)
- [ ] Create `KnowledgeResolver.h` interface
- [ ] Implement entity lookup
- [ ] Implement taxonomy matching
- [ ] Implement navigation suggestions

### Phase 3: DocAssistant Integration (Week 3)
- [ ] Update prompt construction to include layer context
- [ ] Add entity extraction from user queries
- [ ] Add action suggestions (navigate, highlight)
- [ ] Test with common user intents

### Phase 4: Algolia Enhancement (Week 4)
- [ ] Add layer metadata to Algolia records
- [ ] Update crawler to include enriched fields
- [ ] Update search to use entity filters
- [ ] Connect enhanced search to KnowledgeResolver

---

## Example Query Processing

**User:** "How do I add a conversion to my campaign?"

**Layer 1 (Skeleton):**
```yaml
entities_mentioned: [conversion, campaign]
relationship: assignment (conversion → campaign)
endpoint: POST /api/v3/conversion/assign-to/campaign
prerequisite: conversion must exist
```

**Layer 2 (Taxonomy):**
```yaml
category: measurement
workflow: conversion_tracking
api_group: measurement
```

**Layer 3 (Navigation):**
```yaml
primary_doc: /quickstart-guides/conversion-quickstart
related: [/guidelines/conversion-api, /guidelines/campaign-api]
clarifying: "Do you have a conversion pixel created?"
```

**Layer 4 (Content):**
```yaml
algolia_results:
  - title: "Assign Conversion to Campaign"
    snippet: "Use POST /api/v3/conversion/assign-to/campaign..."
  - title: "Conversion Quickstart"
    snippet: "Step 1: Create a conversion pixel..."
```

**Generated Response:**
> To add a conversion to your campaign, use `POST /api/v3/conversion/assign-to/campaign`.
>
> **Prerequisites:**
> 1. You need to have created a conversion pixel first
> 2. You need your campaign ID
>
> **Quick Start:**
> - [Conversion Quickstart](/quickstart-guides/conversion-quickstart) - Step-by-step guide
>
> **API Reference:**
> - [Conversion API](/guidelines/conversion-api) - Full endpoint documentation
>
> Do you already have a conversion pixel created, or would you like help with that first?

---

## Key Insight: PVLT Applied

| Layer | PVLT Level | What It Does | Why It Matters |
|-------|------------|--------------|----------------|
| Skeleton | PP (Foundation) | Entity structure & relationships | Can't understand docs without knowing what entities exist |
| Taxonomy | Wisdom (Patterns) | Organizational groupings | Knows how content is organized, finds related topics |
| Navigation | Experience (Personal) | User journey paths | Suggests next steps, knows prerequisites |
| Content | Knowledge (Details) | Actual text & code | Provides specific answers |

**The LLM fails when it starts at Layer 4 (Content) without Layer 1-3 context.**

It's like choosing paint colors before building the foundation.

---

## Next Action

Start with Layer 1: Create `knowledge/skeleton.yaml` by adapting `api-sdk-pipeline/layers/taxonomy/entity-hierarchy.yaml` for documentation context.
