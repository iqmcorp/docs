#!/usr/bin/env node
/**
 * Systematic Intent Testing Script
 * Tests all intents against doc_assistant_server to verify correct routing
 */

const yaml = require('js-yaml');
const fs = require('fs');
const http = require('http');
const path = require('path');

const KNOWLEDGE_DIR = path.join(__dirname, '..', 'knowledge');

// Load navigation.yaml
const nav = yaml.load(fs.readFileSync(path.join(KNOWLEDGE_DIR, 'navigation.yaml'), 'utf8'));

// Get all intents with their expected mappings
const intents = [];
for (const [name, data] of Object.entries(nav.intents || {})) {
  intents.push({
    name,
    entity: data.entity || '',
    action: data.action || '',
    primary_doc: data.primary_doc || '',
    section: data.section || '',
    patterns: data.patterns || []
  });
}

console.log(`Testing ${intents.length} intents against doc_assistant_server...`);
console.log('');

// Test function
async function testIntent(intent) {
  // Use first pattern or generate from intent name
  const query = intent.patterns[0] || intent.name.replace(/_/g, ' ');
  
  return new Promise((resolve) => {
    const postData = JSON.stringify({ message: query });
    const options = {
      hostname: 'localhost',
      port: 8088,
      path: '/api/ai/chat',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      },
      timeout: 60000
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          const knowledge = result.knowledge || {};
          const detected = knowledge.detectedIntent || '';
          const primaryDoc = knowledge.primaryDoc || '';
          
          // Check if intent matches
          const intentMatch = detected === intent.name;
          
          // Check if doc matches (normalize paths)
          const expectedDocNorm = intent.primary_doc.replace(/^\//, '').replace(/\/$/, '');
          const docMatch = primaryDoc.includes(expectedDocNorm) && expectedDocNorm.length > 0;
          
          resolve({
            query,
            expected: intent.name,
            detected,
            expectedDoc: intent.primary_doc,
            actualDoc: primaryDoc,
            intentMatch,
            docMatch,
            pass: intentMatch || docMatch
          });
        } catch (e) {
          resolve({ query, expected: intent.name, error: e.message, pass: false });
        }
      });
    });

    req.on('error', (e) => resolve({ query, expected: intent.name, error: e.message, pass: false }));
    req.on('timeout', () => { req.destroy(); resolve({ query, expected: intent.name, error: 'timeout', pass: false }); });
    req.write(postData);
    req.end();
  });
}

// Small delay helper
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Run tests
async function runTests() {
  let passed = 0;
  let failed = 0;
  const failures = [];
  
  // Parse command line for batch size
  const batchArg = process.argv.find(a => a.startsWith('--batch='));
  const batchSize = batchArg ? parseInt(batchArg.split('=')[1]) : intents.length;
  
  const startArg = process.argv.find(a => a.startsWith('--start='));
  const startIdx = startArg ? parseInt(startArg.split('=')[1]) : 0;
  
  const sample = intents.slice(startIdx, startIdx + batchSize);
  console.log(`Testing intents ${startIdx} to ${startIdx + sample.length - 1}`);
  console.log('');
  
  for (let i = 0; i < sample.length; i++) {
    const intent = sample[i];
    const result = await testIntent(intent);
    
    if (result.pass) {
      passed++;
      console.log(`✓ ${result.expected}`);
    } else {
      failed++;
      failures.push(result);
      console.log(`✗ ${result.expected} → detected: ${result.detected || result.error || 'none'}`);
    }
    
    // Small delay between requests to prevent overwhelming the servers
    await delay(100);
  }
  
  console.log('');
  console.log(`Results: ${passed}/${sample.length} passed (${Math.round(passed/sample.length*100)}%)`);
  
  if (failures.length > 0) {
    console.log('');
    console.log('Failures:');
    failures.forEach(f => {
      console.log(`  ${f.expected}:`);
      console.log(`    query: "${f.query}"`);
      console.log(`    detected: ${f.detected || f.error}`);
      if (f.expectedDoc) console.log(`    expectedDoc: ${f.expectedDoc}`);
      if (f.actualDoc) console.log(`    actualDoc: ${f.actualDoc}`);
    });
  }
  
  return { passed, failed, failures };
}

runTests().catch(console.error);
