import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react';
import { useDocNavigator, Message, KnowledgeContext } from '../../hooks/useDocNavigator';
import SearchResults, { SearchResult } from '../../components/AIAssistant/SearchResults';
import styles from './AIAssistantNavbarItem.module.css';

// API endpoint - dev vs production
// doc_assistant_server runs on port 8088 with llama.cpp + KnowledgeResolver
const AI_API_ENDPOINT = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  ? 'http://localhost:8088/api/ai/chat'
  : '/api/ai/chat';

const AI_SEARCH_ENDPOINT = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  ? 'http://localhost:8088/api/ai/search'
  : '/api/ai/search';

// Valid documentation paths (prevent navigation to hallucinated URLs)
// Uses startsWith matching, so '/guidelines/' will match '/guidelines/campaign-api'
const VALID_DOC_PATHS = [
  '/getting-started/',
  '/guidelines/',
  '/quickstart-guides/',
  '/tutorials/',
  '/migration-guides/',
  '/political-vertical/',
  '/healthcare-vertical/',
];

const isValidDocPath = (path: string): boolean => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return VALID_DOC_PATHS.some(p => normalized.startsWith(p));
};

export default function AIAssistantNavbarItem() {
  const {
    state,
    toggleOpen,
    addMessage,
    setLoading,
    setError,
    clearConversation,
    navigateToPage,
    scrollToSection,
    highlightText,
    clearHighlights,
    getCurrentContext,
  } = useDocNavigator();

  const [input, setInput] = useState('');
  const [isScrolling, setIsScrolling] = useState(false);
  const [pendingHighlights, setPendingHighlights] = useState<string[] | null>(null);
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [aiSummary, setAiSummary] = useState('');
  const [viewMode, setViewMode] = useState<'chat' | 'search'>('chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Detect page scroll to fade the chat panel (stays faded until hover)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
    };

    const handlePanelMouseEnter = () => {
      setIsScrolling(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const panel = panelRef.current;
    if (panel) {
      panel.addEventListener('mouseenter', handlePanelMouseEnter);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (panel) {
        panel.removeEventListener('mouseenter', handlePanelMouseEnter);
      }
    };
  }, [state.isOpen]);

  // Apply pending highlights after navigation completes
  useEffect(() => {
    if (pendingHighlights && pendingHighlights.length > 0) {
      const timer = setTimeout(() => {
        highlightText(pendingHighlights);
        setPendingHighlights(null);
      }, 500); // Wait for page to render
      return () => clearTimeout(timer);
    }
  }, [pendingHighlights, highlightText]);

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        const button = document.querySelector(`.${styles.assistantButton}`);
        if (button && !button.contains(event.target as Node) && state.isOpen) {
          toggleOpen();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [state.isOpen, toggleOpen]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);

  // Focus input when opened
  useEffect(() => {
    if (state.isOpen) {
      inputRef.current?.focus();
    }
  }, [state.isOpen]);

  // Handle agent actions from response
  const handleAgentActions = (actions: Message['actions']) => {
    if (!actions) return;

    let hasNavigation = false;
    let highlightTerms: string[] = [];

    // First pass: collect actions
    actions.forEach((action) => {
      switch (action.tool) {
        case 'navigate':
          if (action.params.path && isValidDocPath(action.params.path as string)) {
            hasNavigation = true;
            navigateToPage(action.params.path as string);
          } else {
            console.warn('Invalid navigation path:', action.params.path);
          }
          break;
        case 'scroll':
          if (action.params.section) {
            scrollToSection(action.params.section as string);
          }
          break;
        case 'highlight':
          if (action.params.terms) {
            highlightTerms = action.params.terms as string[];
          }
          break;
        case 'clear_highlights':
          clearHighlights();
          break;
      }
    });

    // If navigating, delay highlights until page loads; otherwise apply immediately
    if (highlightTerms.length > 0) {
      if (hasNavigation) {
        setPendingHighlights(highlightTerms);
      } else {
        highlightText(highlightTerms);
      }
    }
  };

  // Send message to AI backend
  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    addMessage('user', content);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const context = getCurrentContext();
      
      // Use AbortController for timeout (LLM can take 30-60s)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 90000); // 90 second timeout
      
      const response = await fetch(AI_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          context: {
            currentPage: context.url,
            pageTitle: context.title,
            headings: context.headings,
            conversationHistory: state.messages.slice(-10),
          },
        }),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Add assistant response with knowledge context (validated links)
      const assistantMessage = addMessage('assistant', data.response, data.actions, data.knowledge);
      
      // Auto-navigate to primary doc if available
      if (data.knowledge?.primaryDoc) {
        navigateToPage(data.knowledge.primaryDoc);
      }
      
      // Execute agent actions (navigation validated against whitelist)
      if (data.actions) {
        handleAgentActions(data.actions);
      }
    } catch (error) {
      // Fallback: Use Algolia search if available
      const algoliaResults = await searchWithAlgolia(content);
      
      if (algoliaResults.length > 0) {
        const fallbackResponse = formatAlgoliaResults(algoliaResults);
        addMessage('assistant', fallbackResponse);
      } else {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        setError(errorMessage);
        addMessage('assistant', `I'm having trouble connecting right now. Try using the search bar, or check the [API Guidelines](/guidelines/) for reference.`);
      }
    } finally {
      setLoading(false);
    }
  };

  // Algolia fallback search - uses the Algolia API directly
  const searchWithAlgolia = async (query: string): Promise<Array<{title: string; url: string; snippet?: string}>> => {
    try {
      // Algolia credentials from docusaurus.config.js
      const appId = '09FZUVDE53';
      const apiKey = '***REMOVED***';
      const indexName = 'IQM API Docs';

      const response = await fetch(
        `https://${appId}-dsn.algolia.net/1/indexes/${encodeURIComponent(indexName)}/query`,
        {
          method: 'POST',
          headers: {
            'X-Algolia-Application-Id': appId,
            'X-Algolia-API-Key': apiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            hitsPerPage: 5,
            attributesToRetrieve: ['hierarchy', 'url', 'content'],
            attributesToSnippet: ['content:50'],
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Algolia search failed');
      }

      const data = await response.json();
      
      return data.hits.map((hit: any) => {
        // Use the deepest hierarchy level available for the best title
        const hierarchy = hit.hierarchy || {};
        const title = hierarchy.lvl4 || hierarchy.lvl3 || hierarchy.lvl2 || hierarchy.lvl1 || hierarchy.lvl0 || 'Documentation';
        return {
          title,
          url: hit.url?.replace('https://developers.iqm.com', '') || '/',
          snippet: hit._snippetResult?.content?.value?.replace(/<[^>]*>/g, '') || '',
        };
      });
    } catch (error) {
      console.warn('Algolia search failed:', error);
      return [];
    }
  };

  const formatAlgoliaResults = (results: Array<{title: string; url: string; snippet?: string}>): string => {
    if (results.length === 0) return "I couldn't find relevant documentation for that query.";
    
    let response = "Hmm, I'm not sure how to answer that. Here are some search results based on your query:\n\n";
    results.slice(0, 3).forEach((result) => {
      // Extract just the first sentence or a brief description
      let description = '';
      if (result.snippet) {
        // Get first sentence (up to first period, question mark, or 100 chars)
        const firstSentence = result.snippet.split(/[.!?]/)[0];
        description = firstSentence.slice(0, 100).trim();
        if (description && !description.endsWith('.')) {
          description += '...';
        }
      }
      response += `• [${result.title}](${result.url})`;
      if (description) {
        response += ` - ${description}`;
      }
      response += '\n';
    });
    return response;
  };

  // Perform enhanced search with taxonomy
  const performSearch = async (query: string) => {
    if (!query.trim()) return;
    
    setSearchQuery(query);
    setLoading(true);
    
    try {
      const response = await fetch(AI_SEARCH_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.results || []);
        setAiSummary(data.summary || '');
        setViewMode('search');
      } else {
        // Fallback to Algolia
        const algoliaResults = await searchWithAlgolia(query);
        const results: SearchResult[] = algoliaResults.map((r, i) => ({
          id: `algolia-${i}`,
          title: r.title,
          url: r.url,
          snippet: r.snippet || '',
          category: inferCategory(r.url),
          topic: inferTopic(r.url, r.title),
          complexity: 'intermediate' as const,
          relevance: 100 - (i * 10),
          isRecommended: i === 0,
        }));
        setSearchResults(results);
        setAiSummary('');
        setViewMode('search');
      }
    } catch {
      // Fallback to Algolia on error
      const algoliaResults = await searchWithAlgolia(query);
      const results: SearchResult[] = algoliaResults.map((r, i) => ({
        id: `algolia-${i}`,
        title: r.title,
        url: r.url,
        snippet: r.snippet || '',
        category: inferCategory(r.url),
        topic: inferTopic(r.url, r.title),
        complexity: 'intermediate' as const,
        relevance: 100 - (i * 10),
        isRecommended: i === 0,
      }));
      setSearchResults(results);
      setAiSummary('');
      setViewMode('search');
    } finally {
      setLoading(false);
    }
  };

  // Infer category from URL
  const inferCategory = (url: string): string => {
    if (url.includes('quickstart')) return 'quickstart';
    if (url.includes('guidelines')) return 'guidelines';
    if (url.includes('tutorials')) return 'tutorials';
    return 'reference';
  };

  // Infer topic from URL/title
  const inferTopic = (url: string, title: string): string => {
    const text = (url + title).toLowerCase();
    if (text.includes('campaign')) return 'campaign';
    if (text.includes('creative')) return 'creative';
    if (text.includes('audience')) return 'audience';
    if (text.includes('report')) return 'reports';
    if (text.includes('auth')) return 'auth';
    if (text.includes('conversion')) return 'conversion';
    if (text.includes('inventory')) return 'inventory';
    if (text.includes('finance') || text.includes('billing')) return 'finance';
    return 'campaign';
  };

  // Handle search result click
  const handleResultClick = (result: SearchResult) => {
    const targetUrl = result.path || result.url || '/';
    setViewMode('chat');
    navigateToPage(targetUrl);
    addMessage('assistant', `Navigating to **${result.title}**...`);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  // Render inline elements (links, code, bold)
  const renderInlineContent = (text: string, keyPrefix: string = '') => {
    // Split by markdown patterns: **bold**, `code`, [text](url)
    const elements: React.ReactNode[] = [];
    let remaining = text;
    let partIndex = 0;

    while (remaining.length > 0) {
      // Check for markdown link: [text](url)
      const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        const [full, linkText, linkUrl] = linkMatch;
        elements.push(
          <a 
            key={`${keyPrefix}-link-${partIndex}`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigateToPage(linkUrl);
            }}
            className={styles.inlineLink}
          >
            {linkText}
          </a>
        );
        remaining = remaining.slice(full.length);
        partIndex++;
        continue;
      }

      // Check for bold: **text**
      const boldMatch = remaining.match(/^\*\*([^*]+)\*\*/);
      if (boldMatch) {
        const [full, boldText] = boldMatch;
        elements.push(<strong key={`${keyPrefix}-bold-${partIndex}`}>{boldText}</strong>);
        remaining = remaining.slice(full.length);
        partIndex++;
        continue;
      }

      // Check for inline code: `code`
      const codeMatch = remaining.match(/^`([^`]+)`/);
      if (codeMatch) {
        const [full, codeText] = codeMatch;
        elements.push(<code key={`${keyPrefix}-code-${partIndex}`}>{codeText}</code>);
        remaining = remaining.slice(full.length);
        partIndex++;
        continue;
      }

      // Check for bare doc path: /guidelines/... or /quickstart-guides/...
      const pathMatch = remaining.match(/^(\/(?:getting-started|guidelines|quickstart-guides|tutorials|migration-guides|political-vertical|healthcare-vertical)[a-z0-9\-\/#]*)/i);
      if (pathMatch) {
        const [full, path] = pathMatch;
        elements.push(
          <a 
            key={`${keyPrefix}-path-${partIndex}`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigateToPage(path);
            }}
            className={styles.inlineLink}
          >
            {path}
          </a>
        );
        remaining = remaining.slice(full.length);
        partIndex++;
        continue;
      }

      // No special pattern - consume one character (or until next special char)
      const nextSpecial = remaining.slice(1).search(/[\[*`\/]/);
      const plainEnd = nextSpecial === -1 ? remaining.length : nextSpecial + 1;
      const plainText = remaining.slice(0, plainEnd);
      if (plainText) {
        elements.push(plainText);
      }
      remaining = remaining.slice(plainEnd);
      partIndex++;
    }

    return elements;
  };

  // Render message content (handle markdown-like formatting)
  const renderMessageContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      // List items
      if (line.startsWith('• ') || line.startsWith('- ')) {
        return <li key={i}>{renderInlineContent(line.slice(2), `line-${i}`)}</li>;
      }
      // Numbered list items
      if (/^\d+\.\s/.test(line)) {
        const textPart = line.replace(/^\d+\.\s/, '');
        return <li key={i}>{renderInlineContent(textPart, `line-${i}`)}</li>;
      }
      // Regular paragraph with inline formatting
      return line ? <p key={i}>{renderInlineContent(line, `line-${i}`)}</p> : null;
    });
  };

  // Render validated knowledge links (from knowledge layer, not LLM)
  const renderKnowledgeLinks = (knowledge: KnowledgeContext | undefined) => {
    if (!knowledge) return null;

    const links: React.ReactNode[] = [];

    // Primary documentation link with human-readable title
    if (knowledge.primaryDoc) {
      const displayTitle = knowledge.primaryDocTitle || knowledge.primaryDoc;
      links.push(
        <div key="primary" className={styles.knowledgeSection}>
          <span className={styles.knowledgeLabel}>📄 Documentation:</span>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateToPage(knowledge.primaryDoc!); }}
            className={styles.knowledgeLink}
          >
            {displayTitle}
          </a>
        </div>
      );
    }

    // Consolidated Related Sections - combines moreActions and relatedSections
    const allRelated: Array<{ title: string; url: string }> = [];
    
    // Add moreActions first (these are from intent's related_sections)
    if (knowledge.moreActions) {
      knowledge.moreActions.forEach(action => {
        allRelated.push({ title: action.title, url: action.url });
      });
    }
    
    // Add relatedSections (endpoint anchors)
    if (knowledge.relatedSections) {
      knowledge.relatedSections.forEach(section => {
        // Avoid duplicates by URL
        if (!allRelated.some(r => r.url === section.url)) {
          allRelated.push({ title: section.title, url: section.url });
        }
      });
    }
    
    if (allRelated.length > 0) {
      links.push(
        <div key="sections" className={styles.knowledgeSection}>
          <span className={styles.knowledgeLabel}>🔗 Related:</span>
          <ul className={styles.relatedSections}>
            {allRelated.slice(0, 5).map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); navigateToPage(item.url); }}
                  className={styles.knowledgeLink}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return links.length > 0 ? <div className={styles.knowledgeLinks}>{links}</div> : null;
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.assistantButton}
        onClick={toggleOpen}
        aria-label={state.isOpen ? 'Close AI Assistant' : 'Open AI Assistant'}
        title="AI Assistant"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />
        </svg>
        <span>Ask AI</span>
      </button>

      {state.isOpen && (
        <div 
          className={`${styles.panel} ${isScrolling ? styles.panelFaded : ''}`} 
          ref={panelRef}
        >
          <div className={styles.header}>
            <div className={styles.headerTitle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>AI Assistant</span>
            </div>
            <div className={styles.headerActions}>
              <div className={styles.modeToggle}>
                <button
                  className={`${styles.modeButton} ${viewMode === 'chat' ? styles.modeActive : ''}`}
                  onClick={() => setViewMode('chat')}
                  title="Chat mode"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </button>
                <button
                  className={`${styles.modeButton} ${viewMode === 'search' ? styles.modeActive : ''}`}
                  onClick={() => setViewMode('search')}
                  title="Search mode"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              </div>
              <button
                className={styles.clearButton}
                onClick={clearConversation}
                title="Clear conversation"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </button>
            </div>
          </div>

          {viewMode === 'chat' ? (
            <div className={styles.messages}>
              {state.messages.length === 0 && (
                <div className={styles.welcome}>
                  <p>Hi! I can help you find information in the documentation. What would you like to know?</p>
                </div>
              )}
              
              {state.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${styles.message} ${styles[msg.role]}`}
                >
                  <div className={styles.messageContent}>
                    {renderMessageContent(msg.content)}
                    {msg.role === 'assistant' && renderKnowledgeLinks(msg.knowledge)}
                  </div>
                </div>
              ))}
              
              {state.isLoading && (
                <div className={`${styles.message} ${styles.assistant}`}>
                  <div className={styles.typing}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          ) : (
            <SearchResults
              results={searchResults || []}
              query={searchQuery}
              aiSummary={aiSummary}
              isLoading={state.isLoading}
              onResultClick={handleResultClick}
            />
          )}

          <form className={styles.inputArea} onSubmit={viewMode === 'search' ? (e) => { e.preventDefault(); performSearch(input); } : handleSubmit}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={viewMode === 'search' ? "Search documentation..." : "Ask a question..."}
              rows={1}
              disabled={state.isLoading}
            />
            {viewMode === 'search' ? (
              <button
                type="submit"
                disabled={!input.trim() || state.isLoading}
                title="Search documentation"
                className={styles.searchButton}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                disabled={!input.trim() || state.isLoading}
                title="Send message"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
