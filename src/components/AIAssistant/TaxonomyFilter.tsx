import React from 'react';
import styles from './TaxonomyFilter.module.css';

export interface TaxonomyFilterState {
  category: string[];
  topic: string[];
  complexity: 'beginner' | 'intermediate' | 'advanced' | null;
}

interface TaxonomyFilterProps {
  filters: TaxonomyFilterState;
  onChange: (filters: TaxonomyFilterState) => void;
  resultCounts?: {
    category: Record<string, number>;
    topic: Record<string, number>;
  };
}

const CATEGORIES = [
  { id: 'quickstart', label: 'Quickstart Guides', icon: '🚀' },
  { id: 'guidelines', label: 'API Guidelines', icon: '📘' },
  { id: 'tutorials', label: 'Tutorials', icon: '📝' },
  { id: 'reference', label: 'Reference', icon: '📚' },
];

const TOPICS = [
  { id: 'campaign', label: 'Campaign' },
  { id: 'creative', label: 'Creative' },
  { id: 'audience', label: 'Audience' },
  { id: 'reports', label: 'Reports' },
  { id: 'auth', label: 'Authentication' },
  { id: 'conversion', label: 'Conversion' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'finance', label: 'Finance' },
];

const COMPLEXITY = [
  { id: 'beginner', label: 'Beginner', icon: '🟢' },
  { id: 'intermediate', label: 'Intermediate', icon: '🟡' },
  { id: 'advanced', label: 'Advanced', icon: '🔴' },
];

export default function TaxonomyFilter({ filters, onChange, resultCounts }: TaxonomyFilterProps) {
  const toggleCategory = (id: string) => {
    const newCategories = filters.category.includes(id)
      ? filters.category.filter(c => c !== id)
      : [...filters.category, id];
    onChange({ ...filters, category: newCategories });
  };

  const toggleTopic = (id: string) => {
    const newTopics = filters.topic.includes(id)
      ? filters.topic.filter(t => t !== id)
      : [...filters.topic, id];
    onChange({ ...filters, topic: newTopics });
  };

  const setComplexity = (level: typeof filters.complexity) => {
    onChange({ ...filters, complexity: filters.complexity === level ? null : level });
  };

  const clearAll = () => {
    onChange({ category: [], topic: [], complexity: null });
  };

  const hasFilters = filters.category.length > 0 || filters.topic.length > 0 || filters.complexity !== null;

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterHeader}>
        <span className={styles.filterTitle}>Filters</span>
        {hasFilters && (
          <button className={styles.clearButton} onClick={clearAll}>
            Clear all
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className={styles.filterSection}>
        <div className={styles.sectionTitle}>Category</div>
        <div className={styles.filterOptions}>
          {CATEGORIES.map(cat => (
            <label key={cat.id} className={styles.filterOption}>
              <input
                type="checkbox"
                checked={filters.category.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
              />
              <span className={styles.optionIcon}>{cat.icon}</span>
              <span className={styles.optionLabel}>{cat.label}</span>
              {resultCounts?.category[cat.id] !== undefined && (
                <span className={styles.optionCount}>({resultCounts.category[cat.id]})</span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Topic Filter */}
      <div className={styles.filterSection}>
        <div className={styles.sectionTitle}>Topic</div>
        <div className={styles.filterOptions}>
          {TOPICS.map(topic => (
            <label key={topic.id} className={styles.filterOption}>
              <input
                type="checkbox"
                checked={filters.topic.includes(topic.id)}
                onChange={() => toggleTopic(topic.id)}
              />
              <span className={styles.optionLabel}>{topic.label}</span>
              {resultCounts?.topic[topic.id] !== undefined && (
                <span className={styles.optionCount}>({resultCounts.topic[topic.id]})</span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Complexity Filter */}
      <div className={styles.filterSection}>
        <div className={styles.sectionTitle}>Complexity</div>
        <div className={styles.complexityOptions}>
          {COMPLEXITY.map(level => (
            <button
              key={level.id}
              className={`${styles.complexityButton} ${filters.complexity === level.id ? styles.active : ''}`}
              onClick={() => setComplexity(level.id as typeof filters.complexity)}
            >
              <span>{level.icon}</span>
              <span>{level.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
