import React from 'react';
import styles from './SupportPanel.module.css';
import FeedbackWidget from './FeedbackWidget';

interface SupportPanelProps {
  /** Current page path for feedback tracking */
  pagePath?: string;
}

const DISCUSSIONS_URL = 'https://github.com/iqmcorp/docs/discussions';

export default function SupportPanel({ pagePath }: SupportPanelProps) {
  const buildDiscussionUrl = () => {
    const currentPath = pagePath || (typeof window !== 'undefined' ? window.location.pathname : '');
    const title = encodeURIComponent('Question about IQM API');
    const body = encodeURIComponent(`**Page:** ${currentPath}\n\n**Question:**\n\n---\n*Please describe what you're trying to accomplish or what's unclear.*`);
    return `${DISCUSSIONS_URL}/new?category=q-a&title=${title}&body=${body}`;
  };

  return (
    <div className={styles.container}>
      {/* Ask a Question Section */}
      <div className={styles.section}>
        <span className={styles.label}>Have a question?</span>
        <div className={styles.buttons}>
          <a
            href={buildDiscussionUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            Ask the Community
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Feedback Section - uses FeedbackWidget with GA + GitHub Issues */}
      <FeedbackWidget pagePath={pagePath} inline />
    </div>
  );
}
