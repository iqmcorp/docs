import { useReducer, useCallback } from 'react';

// Types
export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  actions?: AgentAction[];
}

export interface Highlight {
  id: string;
  selector: string;
  type: 'text' | 'code';
  terms: string[];
}

export interface AgentAction {
  tool: string;
  params: Record<string, unknown>;
  result?: unknown;
  status: 'pending' | 'success' | 'error';
}

export interface SearchResult {
  objectID: string;
  title: string;
  url: string;
  snippet?: string;
  score?: number;
}

export interface TaxonomyFilter {
  category?: string;
  topic?: string;
  complexity?: 'beginner' | 'intermediate' | 'advanced';
}

export interface PageContext {
  url: string;
  title: string;
  headings: string[];
  hasCodeBlocks: boolean;
}

export interface AIAssistantState {
  // Conversation
  messages: Message[];
  isLoading: boolean;
  error: string | null;

  // Navigation
  currentPage: string;
  currentSection: string | null;

  // Highlights
  highlights: Highlight[];

  // Search
  searchResults: SearchResult[];
  activeFilters: TaxonomyFilter;

  // UI
  isOpen: boolean;
}

// Actions
type AIAction =
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_PAGE'; payload: string }
  | { type: 'SET_SECTION'; payload: string | null }
  | { type: 'ADD_HIGHLIGHT'; payload: Highlight }
  | { type: 'CLEAR_HIGHLIGHTS' }
  | { type: 'SET_SEARCH_RESULTS'; payload: SearchResult[] }
  | { type: 'SET_FILTERS'; payload: TaxonomyFilter }
  | { type: 'TOGGLE_OPEN' }
  | { type: 'SET_OPEN'; payload: boolean }
  | { type: 'CLEAR_CONVERSATION' };

// Initial state
const initialState: AIAssistantState = {
  messages: [],
  isLoading: false,
  error: null,
  currentPage: '',
  currentSection: null,
  highlights: [],
  searchResults: [],
  activeFilters: {},
  isOpen: false,
};

// Reducer
function aiReducer(state: AIAssistantState, action: AIAction): AIAssistantState {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };

    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    case 'SET_ERROR':
      return { ...state, error: action.payload };

    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };

    case 'SET_SECTION':
      return { ...state, currentSection: action.payload };

    case 'ADD_HIGHLIGHT':
      return { ...state, highlights: [...state.highlights, action.payload] };

    case 'CLEAR_HIGHLIGHTS':
      return { ...state, highlights: [] };

    case 'SET_SEARCH_RESULTS':
      return { ...state, searchResults: action.payload };

    case 'SET_FILTERS':
      return { ...state, activeFilters: action.payload };

    case 'TOGGLE_OPEN':
      return { ...state, isOpen: !state.isOpen };

    case 'SET_OPEN':
      return { ...state, isOpen: action.payload };

    case 'CLEAR_CONVERSATION':
      return { ...state, messages: [], searchResults: [], error: null };

    default:
      return state;
  }
}

// Generate unique ID
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Hook
export function useDocNavigator() {
  const [state, dispatch] = useReducer(aiReducer, initialState);

  // Navigation - use window.location for SSR safety
  const navigateToPage = useCallback((path: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = path;
    }
    dispatch({ type: 'SET_PAGE', payload: path });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    if (typeof document === 'undefined') return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      dispatch({ type: 'SET_SECTION', payload: sectionId });
    }
  }, []);

  // Highlighting
  const highlightText = useCallback((terms: string[]) => {
    if (typeof document === 'undefined') return;
    // Clear previous highlights first
    clearHighlights();

    const contentArea = document.querySelector('.markdown, article');
    if (!contentArea) return;

    terms.forEach((term) => {
      const highlight: Highlight = {
        id: generateId(),
        selector: '.markdown',
        type: 'text',
        terms: [term],
      };
      dispatch({ type: 'ADD_HIGHLIGHT', payload: highlight });

      // Apply visual highlighting using TreeWalker for text nodes
      const walker = document.createTreeWalker(
        contentArea,
        NodeFilter.SHOW_TEXT,
        null
      );

      const textNodes: Text[] = [];
      let node: Text | null;
      while ((node = walker.nextNode() as Text)) {
        if (node.textContent?.toLowerCase().includes(term.toLowerCase())) {
          textNodes.push(node);
        }
      }

      textNodes.forEach((textNode) => {
        const parent = textNode.parentNode;
        if (!parent || parent.nodeName === 'SCRIPT' || parent.nodeName === 'STYLE') return;

        const text = textNode.textContent || '';
        const regex = new RegExp(`(${term})`, 'gi');
        const parts = text.split(regex);

        if (parts.length > 1) {
          const fragment = document.createDocumentFragment();
          parts.forEach((part) => {
            if (part.toLowerCase() === term.toLowerCase()) {
              const mark = document.createElement('mark');
              mark.className = 'ai-highlight';
              mark.textContent = part;
              fragment.appendChild(mark);
            } else {
              fragment.appendChild(document.createTextNode(part));
            }
          });
          parent.replaceChild(fragment, textNode);
        }
      });
    });
  }, []);

  const highlightCodeBlock = useCallback((index: number) => {
    if (typeof document === 'undefined') return;
    const codeBlocks = document.querySelectorAll('pre');
    if (codeBlocks[index]) {
      codeBlocks[index].classList.add('ai-highlight-code');
      const highlight: Highlight = {
        id: generateId(),
        selector: `pre:nth-of-type(${index + 1})`,
        type: 'code',
        terms: [],
      };
      dispatch({ type: 'ADD_HIGHLIGHT', payload: highlight });
    }
  }, []);

  const clearHighlights = useCallback(() => {
    if (typeof document === 'undefined') {
      dispatch({ type: 'CLEAR_HIGHLIGHTS' });
      return;
    }
    // Remove text highlights
    document.querySelectorAll('mark.ai-highlight').forEach((mark) => {
      const parent = mark.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(mark.textContent || ''), mark);
        parent.normalize();
      }
    });

    // Remove code block highlights
    document.querySelectorAll('.ai-highlight-code').forEach((el) => {
      el.classList.remove('ai-highlight-code');
    });

    dispatch({ type: 'CLEAR_HIGHLIGHTS' });
  }, []);

  // Messages
  const addMessage = useCallback((role: Message['role'], content: string, actions?: AgentAction[]) => {
    const message: Message = {
      id: generateId(),
      role,
      content,
      timestamp: new Date(),
      actions,
    };
    dispatch({ type: 'ADD_MESSAGE', payload: message });
    return message;
  }, []);

  // Search
  const setSearchResults = useCallback((results: SearchResult[]) => {
    dispatch({ type: 'SET_SEARCH_RESULTS', payload: results });
  }, []);

  const applyFilter = useCallback((filter: TaxonomyFilter) => {
    dispatch({ type: 'SET_FILTERS', payload: filter });
  }, []);

  // Context
  const getCurrentContext = useCallback((): PageContext => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3'))
      .map((h) => h.textContent || '')
      .filter(Boolean);

    return {
      url: typeof window !== 'undefined' ? window.location.pathname : '',
      title: typeof document !== 'undefined' ? document.title : '',
      headings,
      hasCodeBlocks: typeof document !== 'undefined' 
        ? document.querySelectorAll('pre code').length > 0 
        : false,
    };
  }, []);

  const getConversationHistory = useCallback((): Message[] => {
    return state.messages;
  }, [state.messages]);

  // UI controls
  const toggleOpen = useCallback(() => {
    dispatch({ type: 'TOGGLE_OPEN' });
  }, []);

  const setOpen = useCallback((isOpen: boolean) => {
    dispatch({ type: 'SET_OPEN', payload: isOpen });
  }, []);

  const clearConversation = useCallback(() => {
    dispatch({ type: 'CLEAR_CONVERSATION' });
  }, []);

  const setLoading = useCallback((loading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  }, []);

  const setError = useCallback((error: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  }, []);

  return {
    // State
    state,

    // Navigation
    navigateToPage,
    scrollToSection,

    // Highlighting
    highlightText,
    highlightCodeBlock,
    clearHighlights,

    // Messages
    addMessage,

    // Search
    setSearchResults,
    applyFilter,

    // Context
    getCurrentContext,
    getConversationHistory,

    // UI
    toggleOpen,
    setOpen,
    clearConversation,
    setLoading,
    setError,
  };
}

export type DocNavigator = ReturnType<typeof useDocNavigator>;
