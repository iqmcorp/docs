#!/usr/bin/env node
/**
 * Build Knowledge Layers
 * 
 * Compiles YAML layer files into a single JSON for C++ runtime.
 * Also validates layer integrity and cross-references.
 * Resolves doc IDs to actual URL slugs from frontmatter.
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const KNOWLEDGE_DIR = path.join(__dirname, '..', 'knowledge');
const BUILD_DIR = path.join(KNOWLEDGE_DIR, 'build');
const DOCS_DIR = path.join(__dirname, '..', '..', 'docs');

// Layer files in order of precedence (highest first)
const LAYERS = [
  { name: 'skeleton', weight: 4, file: 'skeleton.yaml' },
  { name: 'taxonomy', weight: 3, file: 'taxonomy.yaml' },
  { name: 'navigation', weight: 2, file: 'navigation.yaml' },
];

/**
 * Build a mapping from file IDs to actual URL slugs by scanning mdx files
 */
function buildSlugMap() {
  const slugMap = {};
  
  function scanDir(dir, basePath = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('_')) {
        scanDir(fullPath, `${basePath}/${entry.name}`);
      } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
        
        if (frontmatterMatch) {
          try {
            const frontmatter = yaml.load(frontmatterMatch[1]);
            const fileId = entry.name.replace(/\.mdx?$/, '');
            
            // Use slug from frontmatter if present, otherwise construct from path
            let slug;
            if (frontmatter.slug) {
              slug = frontmatter.slug;
            } else {
              // Default Docusaurus slug: /folder/filename (without extension)
              slug = `${basePath}/${fileId}`;
            }
            
            // Normalize: ensure starts with /
            if (!slug.startsWith('/')) {
              slug = '/' + slug;
            }
            
            slugMap[fileId] = slug;
          } catch (e) {
            // Skip files with invalid frontmatter
          }
        }
      }
    }
  }
  
  if (fs.existsSync(DOCS_DIR)) {
    scanDir(DOCS_DIR);
    console.log(`📁 Scanned docs: ${Object.keys(slugMap).length} files with slugs`);
  } else {
    console.warn(`⚠️  Docs directory not found: ${DOCS_DIR}`);
  }
  
  return slugMap;
}

function loadLayer(layerConfig) {
  const filePath = path.join(KNOWLEDGE_DIR, layerConfig.file);
  
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  Layer file not found: ${layerConfig.file}`);
    return null;
  }
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(content);
    console.log(`✅ Loaded ${layerConfig.name} layer (weight: ${layerConfig.weight})`);
    return data;
  } catch (err) {
    console.error(`❌ Error loading ${layerConfig.file}:`, err.message);
    process.exit(1);
  }
}

function validateReferences(knowledge) {
  const errors = [];
  const warnings = [];
  
  // Get all entity IDs from skeleton
  const entityIds = Object.keys(knowledge.skeleton?.entities || {});
  
  // Check taxonomy references skeleton entities
  const taxonomy = knowledge.taxonomy || {};
  
  // Check doc_categories entity_focus references
  Object.entries(taxonomy.doc_categories || {}).forEach(([catId, cat]) => {
    (cat.docs || []).forEach(doc => {
      (doc.entity_focus || []).forEach(entity => {
        if (!entityIds.includes(entity)) {
          warnings.push(`Taxonomy: doc "${doc.id}" references unknown entity "${entity}"`);
        }
      });
    });
  });
  
  // Check navigation intents reference skeleton entities
  const navigation = knowledge.navigation || {};
  Object.entries(navigation.intents || {}).forEach(([intentId, intent]) => {
    if (intent.entity && !entityIds.includes(intent.entity)) {
      warnings.push(`Navigation: intent "${intentId}" references unknown entity "${intent.entity}"`);
    }
  });
  
  return { errors, warnings };
}

function buildEntityIndex(skeleton) {
  /**
   * Build a fast-lookup index for entity queries:
   * - By ID field (campaignId → campaign)
   * - By API (campaign-api → [insertion_order, campaign])
   * - By doc path (/guidelines/campaign-api → [insertion_order, campaign])
   */
  const index = {
    byIdField: {},
    byApi: {},
    byDoc: {},
    byLevel: {},
    byParent: {},
  };
  
  Object.entries(skeleton.entities || {}).forEach(([entityId, entity]) => {
    // Index by ID field
    index.byIdField[entity.id_field] = entityId;
    
    // Index aliases
    (entity.aliases || []).forEach(alias => {
      index.byIdField[alias] = entityId;
    });
    
    // Index by API
    const api = entity.api;
    if (api) {
      if (!index.byApi[api]) index.byApi[api] = [];
      index.byApi[api].push(entityId);
    }
    
    // Index by doc
    const docs = entity.docs || {};
    if (docs.primary) {
      const docPath = docs.primary.split('#')[0]; // Remove section
      if (!index.byDoc[docPath]) index.byDoc[docPath] = [];
      index.byDoc[docPath].push(entityId);
    }
    
    // Index by level
    const level = entity.level;
    if (level !== undefined) {
      if (!index.byLevel[level]) index.byLevel[level] = [];
      index.byLevel[level].push(entityId);
    }
    
    // Index by parent
    const parent = entity.parent;
    if (parent) {
      if (!index.byParent[parent]) index.byParent[parent] = [];
      index.byParent[parent].push(entityId);
    }
  });
  
  return index;
}

function buildIntentIndex(navigation) {
  /**
   * Build searchable intent index for query matching
   */
  const index = {
    patterns: [],  // For substring matching
    byEntity: {},  // entity → [intent_ids]
    byAction: {},  // action → [intent_ids]
  };
  
  Object.entries(navigation.intents || {}).forEach(([intentId, intent]) => {
    // Index patterns
    (intent.patterns || []).forEach(pattern => {
      index.patterns.push({
        pattern: pattern.toLowerCase(),
        intent: intentId,
      });
    });
    
    // Index by entity
    if (intent.entity) {
      if (!index.byEntity[intent.entity]) index.byEntity[intent.entity] = [];
      index.byEntity[intent.entity].push(intentId);
    }
    
    // Index by action
    if (intent.action) {
      if (!index.byAction[intent.action]) index.byAction[intent.action] = [];
      index.byAction[intent.action].push(intentId);
    }
  });
  
  // Sort patterns by length (longer = more specific = check first)
  index.patterns.sort((a, b) => b.pattern.length - a.pattern.length);
  
  return index;
}

function buildWorkflowIndex(taxonomy) {
  /**
   * Build workflow lookup for multi-step guidance
   */
  const index = {};
  
  Object.entries(taxonomy.workflow_patterns || {}).forEach(([workflowId, workflow]) => {
    index[workflowId] = {
      name: workflow.name,
      description: workflow.description,
      steps: workflow.sequence.map(step => ({
        ...step,
        entity: step.entity,
      })),
      primary_doc: workflow.primary_doc,
      related_doc: workflow.related_doc,
    };
  });
  
  return index;
}

function main() {
  console.log('🔨 Building knowledge layers...\n');
  
  // Build slug map from actual docs
  const slugMap = buildSlugMap();
  
  // Load all layers
  const knowledge = {
    version: '1.0.0',
    buildTime: new Date().toISOString(),
    layers: {},
    slugMap,  // Add slug map for ID → URL resolution
  };
  
  for (const layerConfig of LAYERS) {
    const data = loadLayer(layerConfig);
    if (data) {
      knowledge.layers[layerConfig.name] = {
        weight: layerConfig.weight,
        data,
      };
      knowledge[layerConfig.name] = data;
    }
  }
  
  console.log('');
  
  // Validate cross-references
  console.log('🔍 Validating cross-references...');
  const { errors, warnings } = validateReferences(knowledge);
  
  if (errors.length > 0) {
    console.error('❌ Validation errors:');
    errors.forEach(e => console.error(`   ${e}`));
    process.exit(1);
  }
  
  if (warnings.length > 0) {
    console.warn('⚠️  Validation warnings:');
    warnings.forEach(w => console.warn(`   ${w}`));
  } else {
    console.log('✅ All references valid');
  }
  
  console.log('');
  
  // Build indexes for fast runtime lookup
  console.log('📇 Building runtime indexes...');
  
  knowledge.indexes = {
    entities: buildEntityIndex(knowledge.skeleton || {}),
    intents: buildIntentIndex(knowledge.navigation || {}),
    workflows: buildWorkflowIndex(knowledge.taxonomy || {}),
  };
  
  console.log(`   - Entity index: ${Object.keys(knowledge.indexes.entities.byIdField).length} ID fields`);
  console.log(`   - Intent index: ${knowledge.indexes.intents.patterns.length} patterns`);
  console.log(`   - Workflow index: ${Object.keys(knowledge.indexes.workflows).length} workflows`);
  
  console.log('');
  
  // Load headings index if it exists (run extract-headings.js first)
  console.log('📑 Loading headings index...');
  const headingsPath = path.join(BUILD_DIR, 'headings.json');
  if (fs.existsSync(headingsPath)) {
    try {
      const headings = JSON.parse(fs.readFileSync(headingsPath, 'utf8'));
      knowledge.headings = {
        sections: headings.sections,
        indexes: headings.indexes
      };
      console.log(`   - Loaded ${headings.totalSections} section anchors`);
      console.log(`   - Entities: ${Object.keys(headings.indexes.byEntity).length}`);
      console.log(`   - Actions: ${Object.keys(headings.indexes.byAction).length}`);
      console.log(`   - Endpoints: ${Object.keys(headings.indexes.byEndpoint).length}`);
      console.log(`   - Keywords: ${Object.keys(headings.indexes.byKeyword).length}`);
    } catch (e) {
      console.warn(`   ⚠️  Failed to load headings: ${e.message}`);
    }
  } else {
    console.log('   ⚠️  headings.json not found. Run extract-headings.js first.');
  }
  
  console.log('');
  
  // Write output
  if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirSync(BUILD_DIR, { recursive: true });
  }
  
  const outputPath = path.join(BUILD_DIR, 'knowledge.json');
  fs.writeFileSync(outputPath, JSON.stringify(knowledge, null, 2));
  
  console.log(`✅ Written to: ${outputPath}`);
  console.log(`   Size: ${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB`);
  
  // Also write a minified version for production
  const minPath = path.join(BUILD_DIR, 'knowledge.min.json');
  fs.writeFileSync(minPath, JSON.stringify(knowledge));
  console.log(`   Minified: ${(fs.statSync(minPath).size / 1024).toFixed(1)} KB`);
  
  console.log('\n🎉 Build complete!');
}

main();
