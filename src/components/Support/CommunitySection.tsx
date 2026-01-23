import React from 'react';
import styles from './CommunitySection.module.css';

const DISCUSSIONS_URL = 'https://github.com/iqmcorp/docs/discussions';

export default function CommunitySection() {
  return (
    <div className={styles.container}>
      
      <div className={styles.cards}>
        {/* GitHub Discussions */}
        <a
          href={DISCUSSIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <div className={styles.cardIcon}>
            <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h3>Discussions</h3>
            <p>Ask questions, share ideas, and connect with the community</p>
          </div>
          <span className={styles.arrow}>→</span>
        </a>

        {/* Ask a Question */}
        <a
          href={`${DISCUSSIONS_URL}/new?category=q-a`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <div className={styles.cardIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h3>Ask a Question</h3>
            <p>Get help from the community and IQM team</p>
          </div>
          <span className={styles.arrow}>→</span>
        </a>

        {/* Feature Requests */}
        <a
          href={`${DISCUSSIONS_URL}/new?category=ideas`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <div className={styles.cardIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h3>Feature Requests</h3>
            <p>Suggest improvements and vote on ideas</p>
          </div>
          <span className={styles.arrow}>→</span>
        </a>

        {/* Help Center */}
        <a
          href="https://help.iqm.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <div className={styles.cardIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h3>Help Center</h3>
            <p>Browse articles and FAQs about the IQM platform</p>
          </div>
          <span className={styles.arrow}>→</span>
        </a>
      </div>
    </div>
  );
}
