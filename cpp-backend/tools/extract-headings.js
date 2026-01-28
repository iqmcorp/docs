#!/usr/bin/env node
/**
 * Extract headings from MDX files to build anchor-level navigation index
 * 
 * Output: knowledge/build/headings.json
 * 
 * Structure:
 * {
 *   sections: [
 *     {
 *       slug: "/guidelines/campaign-api#update-campaign",
 *       title: "Update Campaign",
 *       parent: "Campaign Management", 
 *       parentSlug: "/guidelines/campaign-api#campaign-management",
 *       pageSlug: "/guidelines/campaign-api",
 *       pageTitle: "Campaign API",
 *       level: 3,
 *       endpoint: "PATCH /api/v2/cmp/campaigns",
 *       method: "PATCH",
 *       entity: "campaign",
 *       action: "update",
 *       keywords: ["update", "modify", "edit", "campaign"]
 *     }
 *   ],
 *   byEntity: { campaign: [...slugs], creative: [...slugs] },
 *   byAction: { create: [...slugs], update: [...slugs] },
 *   byEndpoint: { "POST /api/v2/cmp/campaigns/add": "slug" }
 * }
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const DOCS_DIR = path.join(__dirname, '../../docs');
const OUTPUT_DIR = path.join(__dirname, '../knowledge/build');

// Entity detection from heading text
const ENTITY_PATTERNS = {
  campaign: /campaign/i,
  insertion_order: /insertion order|io\b/i,
  creative: /creative/i,
  audience: /audience|segment/i,
  conversion: /conversion/i,
  report: /report/i,
  user: /user|login|auth/i,
  workspace: /workspace|organization/i,
  inventory: /inventory|deal|pmp|pg deal/i,
  bid_model: /bid model|bidding/i,
  finance: /finance|invoice|payment|margin/i
};

// Action detection from heading text
const ACTION_PATTERNS = {
  create: /create|add|new|upload/i,
  get: /get|list|retrieve|fetch|details/i,
  update: /update|modify|edit|change|patch/i,
  delete: /delete|remove/i,
  assign: /assign|attach|associate/i,
  search: /search|filter|find/i,
  count: /count|total/i,
  export: /export|download/i
};

// Convert heading text to anchor slug (Docusaurus style)
function headingToAnchor(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')  // Remove special chars
    .replace(/\s+/g, '-')       // Spaces to hyphens
    .replace(/-+/g, '-')        // Collapse multiple hyphens
    .trim();
}

// Extract method from heading or nearby content
function extractMethod(heading, nearbyContent) {
  const methodMatch = nearbyContent.match(/(GET|POST|PUT|PATCH|DELETE)\s+/);
  if (methodMatch) return methodMatch[1];
  
  // Infer from heading
  if (/^get|^list|^retrieve|details$/i.test(heading)) return 'GET';
  if (/^create|^add|^upload/i.test(heading)) return 'POST';
  if (/^update|^modify|^change/i.test(heading)) return 'PATCH';
  if (/^delete|^remove/i.test(heading)) return 'DELETE';
  
  return null;
}

// Extract endpoint URL from nearby CopyUrl component or content
function extractEndpoint(content, startLine, lines) {
  // Look at next 20 lines for CopyUrl component
  for (let i = startLine; i < Math.min(startLine + 20, lines.length); i++) {
    const line = lines[i];
    const copyUrlMatch = line.match(/CopyUrl.*url="([^"]+)"/);
    if (copyUrlMatch) {
      return copyUrlMatch[1].replace('https://api.iqm.com', '');
    }
    // Also check for plain URL patterns
    const urlMatch = line.match(/api\.iqm\.com(\/api\/v\d+\/[^\s"<]+)/);
    if (urlMatch) {
      return urlMatch[1];
    }
  }
  return null;
}

// Detect entity from heading text
// Uses LAST match strategy: "Create Campaign Audience" -> entity is "audience" (object of action)
// "Get Campaign Details" -> entity is "campaign" (only match)
function detectEntity(heading) {
  const matches = [];
  
  for (const [entity, pattern] of Object.entries(ENTITY_PATTERNS)) {
    const match = heading.match(pattern);
    if (match) {
      matches.push({
        entity,
        index: match.index
      });
    }
  }
  
  if (matches.length === 0) return null;
  
  // Sort by position - return the LAST entity mentioned (usually the object being acted upon)
  matches.sort((a, b) => b.index - a.index);
  return matches[0].entity;
}

// Detect ALL entities in heading (for secondary indexing)
// Returns array of all entities mentioned
function detectAllEntities(heading) {
  const matches = [];
  
  for (const [entity, pattern] of Object.entries(ENTITY_PATTERNS)) {
    if (pattern.test(heading)) {
      matches.push(entity);
    }
  }
  
  return matches;
}

// Extract API name from page slug (e.g., "/guidelines/campaign-api" -> "campaign-api")
function extractApiFromSlug(pageSlug) {
  const match = pageSlug.match(/\/guidelines\/([^\/]+)/);
  return match ? match[1] : null;
}

// Detect action from heading text
function detectAction(heading) {
  for (const [action, pattern] of Object.entries(ACTION_PATTERNS)) {
    if (pattern.test(heading)) return action;
  }
  return null;
}

// Generate keywords from heading
function generateKeywords(heading, entity, action) {
  const words = heading.toLowerCase().split(/\s+/);
  const keywords = new Set(words.filter(w => w.length > 2));
  
  if (entity) keywords.add(entity.replace('_', ' '));
  if (action) keywords.add(action);
  
  // Add common synonyms
  if (keywords.has('get')) keywords.add('retrieve').add('fetch');
  if (keywords.has('create')) keywords.add('add').add('new');
  if (keywords.has('update')) keywords.add('modify').add('edit').add('change');
  if (keywords.has('list')) keywords.add('all').add('multiple');
  
  return [...keywords];
}

// Process a single MDX file
function processFile(filePath, relativePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter } = matter(content);
  const lines = content.split('\n');
  
  const sections = [];
  let currentH2 = null;
  let currentH2Anchor = null;
  
  // Get page slug from frontmatter or derive from path
  const pageSlug = frontmatter.slug || '/' + relativePath
    .replace(/\.mdx?$/, '')
    .replace(/\/index$/, '');
  
  const pageTitle = frontmatter.title || path.basename(relativePath, '.mdx');
  
  lines.forEach((line, lineNum) => {
    // Match ## headings
    const h2Match = line.match(/^## (.+)$/);
    if (h2Match) {
      currentH2 = h2Match[1].trim();
      currentH2Anchor = headingToAnchor(currentH2);
    }
    
    // Match ### headings (our target level)
    const h3Match = line.match(/^### (.+)$/);
    if (h3Match) {
      const title = h3Match[1].trim();
      const anchor = headingToAnchor(title);
      const endpoint = extractEndpoint(content, lineNum, lines);
      const entity = detectEntity(title);
      const allEntities = detectAllEntities(title);
      const action = detectAction(title);
      const method = extractMethod(title, lines.slice(lineNum, lineNum + 15).join('\n'));
      const api = extractApiFromSlug(pageSlug);
      
      sections.push({
        slug: `${pageSlug}#${anchor}`,
        title,
        parent: currentH2,
        parentSlug: currentH2Anchor ? `${pageSlug}#${currentH2Anchor}` : null,
        pageSlug,
        pageTitle,
        level: 3,
        endpoint,
        method,
        entity,
        allEntities,  // All entities mentioned (for secondary indexing)
        api,          // API this section belongs to (e.g., "campaign-api")
        action,
        keywords: generateKeywords(title, entity, action),
        line: lineNum + 1
      });
    }
  });
  
  return sections;
}

// Recursively find all MDX files
function findMdxFiles(dir, relativeTo = dir) {
  const files = [];
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(relativeTo, fullPath);
    
    if (entry.isDirectory()) {
      // Skip _partials and node_modules
      if (!entry.name.startsWith('_') && entry.name !== 'node_modules') {
        files.push(...findMdxFiles(fullPath, relativeTo));
      }
    } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
      files.push({ fullPath, relativePath });
    }
  }
  
  return files;
}

// Build indexes for fast lookup
function buildIndexes(sections) {
  const byEntity = {};
  const byAllEntities = {};  // Index by all mentioned entities (not just primary)
  const byAction = {};
  const byEndpoint = {};
  const byKeyword = {};
  
  for (const section of sections) {
    // Index by primary entity
    if (section.entity) {
      if (!byEntity[section.entity]) byEntity[section.entity] = [];
      byEntity[section.entity].push(section.slug);
    }
    
    // Index by ALL entities mentioned (for secondary lookups)
    if (section.allEntities && section.allEntities.length > 0) {
      for (const entity of section.allEntities) {
        if (!byAllEntities[entity]) byAllEntities[entity] = [];
        byAllEntities[entity].push(section.slug);
      }
    }
    
    // Index by action
    if (section.action) {
      if (!byAction[section.action]) byAction[section.action] = [];
      byAction[section.action].push(section.slug);
    }
    
    // Index by endpoint
    if (section.endpoint) {
      const key = section.method 
        ? `${section.method} ${section.endpoint}`
        : section.endpoint;
      byEndpoint[key] = section.slug;
    }
    
    // Index by keyword
    for (const keyword of section.keywords) {
      if (!byKeyword[keyword]) byKeyword[keyword] = [];
      if (!byKeyword[keyword].includes(section.slug)) {
        byKeyword[keyword].push(section.slug);
      }
    }
  }
  
  return { byEntity, byAllEntities, byAction, byEndpoint, byKeyword };
}

// Main
function main() {
  console.log('Extracting headings from MDX files...\n');
  
  const mdxFiles = findMdxFiles(DOCS_DIR);
  console.log(`Found ${mdxFiles.length} MDX files`);
  
  const allSections = [];
  
  for (const { fullPath, relativePath } of mdxFiles) {
    const sections = processFile(fullPath, relativePath);
    if (sections.length > 0) {
      console.log(`  ${relativePath}: ${sections.length} sections`);
      allSections.push(...sections);
    }
  }
  
  console.log(`\nTotal sections extracted: ${allSections.length}`);
  
  // Build indexes
  const indexes = buildIndexes(allSections);
  
  console.log(`\nIndexes built:`);
  console.log(`  - By entity: ${Object.keys(indexes.byEntity).length} entities`);
  console.log(`  - By action: ${Object.keys(indexes.byAction).length} actions`);
  console.log(`  - By endpoint: ${Object.keys(indexes.byEndpoint).length} endpoints`);
  console.log(`  - By keyword: ${Object.keys(indexes.byKeyword).length} keywords`);
  
  // Prepare output
  const output = {
    version: '1.0.0',
    buildTime: new Date().toISOString(),
    totalSections: allSections.length,
    sections: allSections,
    indexes
  };
  
  // Write output
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const outputPath = path.join(OUTPUT_DIR, 'headings.json');
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  
  console.log(`\nOutput written to: ${outputPath}`);
  console.log(`File size: ${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB`);
  
  // Show sample
  console.log('\n--- Sample Sections ---');
  const samples = allSections.filter(s => s.entity === 'campaign' && s.action).slice(0, 5);
  for (const s of samples) {
    console.log(`\n${s.title}`);
    console.log(`  Slug: ${s.slug}`);
    console.log(`  Entity: ${s.entity}, Action: ${s.action}`);
    console.log(`  Endpoint: ${s.method || ''} ${s.endpoint || 'N/A'}`);
  }
}

main();
