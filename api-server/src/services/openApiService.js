import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * OpenAPIService - Dynamically loads and searches OpenAPI specs
 * No hardcoding - reads directly from /static/openapi/*.json files
 */
class OpenAPIService {
  constructor() {
    this.specs = new Map(); // specName -> parsed OpenAPI spec
    this.endpoints = [];    // Flattened list of all endpoints for search
    this.loaded = false;
    // Path: from /api-server/src/services -> /static/openapi (3 levels up, then into docs root)
    this.specsDir = path.resolve(__dirname, '../../../static/openapi');
  }

  /**
   * Load all OpenAPI spec files from the static directory
   * Called lazily on first search
   */
  async loadSpecs() {
    if (this.loaded) return;
    
    try {
      const files = fs.readdirSync(this.specsDir).filter(f => f.endsWith('.json'));
      console.log(`📂 Loading ${files.length} OpenAPI specs from ${this.specsDir}`);
      
      for (const file of files) {
        try {
          const filePath = path.join(this.specsDir, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          const spec = JSON.parse(content);
          
          const specName = file.replace('.json', '');
          this.specs.set(specName, spec);
          
          // Extract endpoints for searchable index
          this.extractEndpoints(spec, specName);
        } catch (err) {
          console.warn(`⚠️ Failed to load ${file}:`, err.message);
        }
      }
      
      this.loaded = true;
      console.log(`✅ Loaded ${this.endpoints.length} total endpoints from OpenAPI specs`);
    } catch (err) {
      console.error('❌ Failed to load OpenAPI directory:', err.message);
    }
  }

  /**
   * Extract searchable endpoint metadata from an OpenAPI spec
   */
  extractEndpoints(spec, specName) {
    if (!spec.paths) return;
    
    for (const [path, methods] of Object.entries(spec.paths)) {
      for (const [method, operation] of Object.entries(methods)) {
        if (method === 'parameters') continue; // Skip shared parameters
        
        const endpoint = {
          specName,
          path,
          method: method.toUpperCase(),
          operationId: operation.operationId || '',
          summary: operation.summary || '',
          description: operation.description || '',
          tags: operation.tags || [],
          // Build searchable text combining all relevant fields
          searchText: [
            operation.operationId,
            operation.summary,
            operation.description,
            path,
            ...(operation.tags || []),
          ].filter(Boolean).join(' ').toLowerCase(),
          // Keep the full operation for detailed context
          operation,
        };
        
        this.endpoints.push(endpoint);
      }
    }
  }

  /**
   * Search endpoints by keyword matching
   * Returns matching endpoints with relevance scores
   */
  async search(query, limit = 5) {
    await this.loadSpecs();
    
    const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 2);
    if (terms.length === 0) return [];
    
    const results = this.endpoints
      .map(endpoint => {
        let score = 0;
        
        for (const term of terms) {
          // Exact match in operationId gets highest score
          if (endpoint.operationId?.toLowerCase().includes(term)) {
            score += 10;
          }
          // Match in summary is very relevant
          if (endpoint.summary?.toLowerCase().includes(term)) {
            score += 8;
          }
          // Match in path
          if (endpoint.path?.toLowerCase().includes(term)) {
            score += 6;
          }
          // Match in description or tags
          if (endpoint.searchText.includes(term)) {
            score += 3;
          }
        }
        
        return { ...endpoint, score };
      })
      .filter(e => e.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
    
    return results;
  }

  /**
   * Format endpoint info for LLM context
   * Provides structured API details without hardcoding
   */
  formatEndpointContext(endpoint) {
    const { operation, method, path } = endpoint;
    
    let context = `\n=== API ENDPOINT ===\n`;
    context += `${method} ${path}\n`;
    context += `Summary: ${endpoint.summary}\n`;
    
    // Add parameters if present
    if (operation.parameters?.length > 0) {
      context += '\nParameters:\n';
      for (const param of operation.parameters) {
        const required = param.required ? '(required)' : '(optional)';
        context += `- ${param.name} [${param.in}] ${required}: ${param.description || 'No description'}\n`;
      }
    }
    
    // Add request body schema if present
    if (operation.requestBody?.content?.['application/json']?.schema) {
      const schema = operation.requestBody.content['application/json'].schema;
      if (schema.properties) {
        context += '\nRequest Body:\n';
        for (const [name, prop] of Object.entries(schema.properties)) {
          const required = schema.required?.includes(name) ? '(required)' : '(optional)';
          context += `- ${name} [${prop.type || 'any'}] ${required}`;
          if (prop.description) context += `: ${prop.description}`;
          if (prop.enum) context += ` | Values: ${prop.enum.join(', ')}`;
          context += '\n';
        }
      }
    }
    
    context += `===================\n`;
    return context;
  }

  /**
   * Search and format multiple endpoints as context
   */
  async getEndpointContext(query, limit = 3) {
    const matches = await this.search(query, limit);
    
    if (matches.length === 0) {
      return null;
    }
    
    let context = '\n--- Relevant API Endpoints (from OpenAPI specs) ---\n';
    for (const match of matches) {
      context += this.formatEndpointContext(match);
    }
    
    return {
      context,
      endpoints: matches.map(m => ({
        method: m.method,
        path: m.path,
        summary: m.summary,
        operationId: m.operationId,
      })),
    };
  }
}

export const openApiService = new OpenAPIService();
