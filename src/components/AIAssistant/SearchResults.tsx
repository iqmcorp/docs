import React, { useState, useMemo } from 'react';
import TaxonomyFilter, { TaxonomyFilterState } from './TaxonomyFilter';
import styles from './SearchResults.module.css';

export interface SearchResult {
  id?: string;
  path?: string;
  title: string;
  url?: string;
  snippet?: string;
  category: string;
  topic: string;
  complexity: 'beginner' | 'intermediate' | 'advanced';
  relevance?: number;
  score?: number;
  isRecommended?: boolean;
  matchedKeywords?: string[];
}

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  aiSummary?: string;
  isLoading?: boolean;
  onResultClick: (result: SearchResult) => void;
}

export default function SearchResults({ 
  results, 
  query, 
  aiSummary,
  isLoading = false,
  onResultClick, 
}: SearchResultsProps) {
  const [filters, setFilters] = useState<TaxonomyFilterState>({
    category: [],
    topic: [],
    complexity: null,
  });

  const [showFilters, setShowFilters] = useState(false);

  // Calculate result counts per filter
  const resultCounts = useMemo(() => {
    const category: Record<string, number> = {};
    const topic: Record<string, number> = {};

    results.forEach(r => {
      category[r.category] = (category[r.category] || 0) + 1;
      topic[r.topic] = (topic[r.topic] || 0) + 1;
    });

    return { category, topic };
  }, [results]);

  // Filter results based on current filters
  const filteredResults = useMemo(() => {
    return results.filter(result => {
      if (filters.category.length > 0 && !filters.category.includes(result.category)) {
        return false;
      }
      if (filters.topic.length > 0 && !filters.topic.includes(result.topic)) {
        return false;
      }
      if (filters.complexity && result.complexity !== filters.complexity) {
        return false;
      }
      return true;
    });
  }, [results, filters]);

  // Separate recommended from other results
  const recommendedResult = filteredResults.find(r => r.isRecommended);
  const otherResults = filteredResults.filter(r => !r.isRecommended);

  const getComplexityBadge = (complexity: string) => {
    switch (complexity) {
      case 'beginner': return <span className={`${styles.badge} ${styles.beginner}`}>Beginner</span>;
      case 'intermediate': return <span className={`${styles.badge} ${styles.intermediate}`}>Intermediate</span>;
      case 'advanced': return <span className={`${styles.badge} ${styles.advanced}`}>Advanced</span>;
      default: return null;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'quickstart': return '🚀';
      case 'guidelines': return '📘';
      case 'tutorials': return '📝';
      case 'reference': return '📚';
      default: return '📄';
    }
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.loadingSpinner}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Searching documentation...</p>
        </div>
      </div>
    );
  }

  if (!query) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyState}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <p>Enter a search query to find documentation</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <span className={styles.resultCount}>
            {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} for "{query}"
          </span>
          <button 
            className={styles.filterToggle}
            onClick={() => setShowFilters(!showFilters)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            Filters {filters.category.length + filters.topic.length + (filters.complexity ? 1 : 0) > 0 && 
              <span className={styles.filterCount}>
                ({filters.category.length + filters.topic.length + (filters.complexity ? 1 : 0)})
              </span>
            }
          </button>
        </div>
      </div>

      <div className={styles.content}>
        {/* Collapsible Filter Sidebar */}
        {showFilters && (
          <div className={styles.sidebar}>
            <TaxonomyFilter 
              filters={filters} 
              onChange={setFilters}
              resultCounts={resultCounts}
            />
          </div>
        )}

        <div className={styles.resultsArea}>
          {/* AI Summary */}
          {aiSummary && (
            <div className={styles.aiSummary}>
              <div className={styles.summaryHeader}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2z" />
                  <path d="M9 18a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />
                </svg>
                <span>AI Summary</span>
              </div>
              <p className={styles.summaryText}>{aiSummary}</p>
            </div>
          )}

          {/* Recommended Result */}
          {recommendedResult && (
            <div className={styles.recommendedSection}>
              <div className={styles.sectionLabel}>
                <span className={styles.star}>★</span> Best Match (AI Recommended)
              </div>
              <button 
                className={styles.resultCard}
                onClick={() => onResultClick(recommendedResult)}
              >
                <div className={styles.resultHeader}>
                  <span className={styles.resultIcon}>{getCategoryIcon(recommendedResult.category)}</span>
                  <span className={styles.resultTitle}>{recommendedResult.title}</span>
                </div>
                {recommendedResult.matchedKeywords && recommendedResult.matchedKeywords.length > 0 && (
                  <p className={styles.resultSnippet}>
                    Matches: {recommendedResult.matchedKeywords.join(', ')}
                  </p>
                )}
                <div className={styles.resultMeta}>
                  <span className={styles.categoryTag}>{recommendedResult.category}</span>
                  {getComplexityBadge(recommendedResult.complexity)}
                </div>
              </button>
            </div>
          )}

          {/* Other Results */}
          {otherResults.length > 0 && (
            <div className={styles.otherResults}>
              <div className={styles.sectionLabel}>Related Results</div>
              <div className={styles.resultsList}>
                {otherResults.map((result, idx) => (
                  <button 
                    key={result.path || result.url || idx}
                    className={styles.resultItem}
                    onClick={() => onResultClick(result)}
                  >
                    <span className={styles.resultIcon}>{getCategoryIcon(result.category)}</span>
                    <span className={styles.resultTitle}>{result.title}</span>
                    {getComplexityBadge(result.complexity)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredResults.length === 0 && (
            <div className={styles.noResults}>
              <p>No results match your filters.</p>
              <button onClick={() => setFilters({ category: [], topic: [], complexity: null })}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
