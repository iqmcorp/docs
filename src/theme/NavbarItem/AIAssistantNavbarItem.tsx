import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react';
import { useDocNavigator, Message } from '../../hooks/useDocNavigator';
import styles from './AIAssistantNavbarItem.module.css';

// API endpoint - configure for your backend
const AI_API_ENDPOINT = '/api/ai/chat';

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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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

    actions.forEach((action) => {
      switch (action.tool) {
        case 'navigate':
          if (action.params.path) {
            navigateToPage(action.params.path as string);
          }
          break;
        case 'scroll':
          if (action.params.section) {
            scrollToSection(action.params.section as string);
          }
          break;
        case 'highlight':
          if (action.params.terms) {
            highlightText(action.params.terms as string[]);
          }
          break;
        case 'clear_highlights':
          clearHighlights();
          break;
      }
    });
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
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Add assistant response
      const assistantMessage = addMessage('assistant', data.response, data.actions);
      
      // Execute any agent actions
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

  // Algolia fallback search
  const searchWithAlgolia = async (query: string): Promise<Array<{title: string; url: string; snippet?: string}>> => {
    try {
      // @ts-ignore - Algolia is loaded globally by Docusaurus
      if (typeof window !== 'undefined' && window.docsearch) {
        return [];
      }
      return [];
    } catch {
      return [];
    }
  };

  const formatAlgoliaResults = (results: Array<{title: string; url: string; snippet?: string}>): string => {
    if (results.length === 0) return "I couldn't find relevant documentation.";
    
    let response = "Here's what I found:\n\n";
    results.slice(0, 3).forEach((result, i) => {
      response += `${i + 1}. **[${result.title}](${result.url})**`;
      if (result.snippet) {
        response += `\n   ${result.snippet}`;
      }
      response += '\n\n';
    });
    return response;
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

  // Render message content (handle markdown-like formatting)
  const renderMessageContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      if (line.startsWith('• ') || line.startsWith('- ')) {
        return <li key={i}>{line.slice(2)}</li>;
      }
      const parts = line.split(/`([^`]+)`/);
      if (parts.length > 1) {
        return (
          <p key={i}>
            {parts.map((part, j) =>
              j % 2 === 1 ? <code key={j}>{part}</code> : part
            )}
          </p>
        );
      }
      return line ? <p key={i}>{line}</p> : null;
    });
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
        <div className={styles.panel} ref={panelRef}>
          <div className={styles.header}>
            <div className={styles.headerTitle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>AI Assistant</span>
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

          <form className={styles.inputArea} onSubmit={handleSubmit}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question..."
              rows={1}
              disabled={state.isLoading}
            />
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
          </form>
        </div>
      )}
    </div>
  );
}
