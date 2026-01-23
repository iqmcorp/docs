import React, { useState } from 'react';
import styles from './FeedbackWidget.module.css';

interface FeedbackWidgetProps {
  /** Current page path for tracking */
  pagePath?: string;
  /** Page title for GitHub Discussion/Issue */
  pageTitle?: string;
  /** Callback when feedback is submitted */
  onFeedback?: (helpful: boolean, comment?: string) => void;
  /** When true, renders without container styling (for embedding in other components) */
  inline?: boolean;
}

type FeedbackState = 'initial' | 'commenting' | 'submitted' | 'skipped';

const GITHUB_REPO = 'iqmcorp/docs';
const ISSUES_URL = `https://github.com/${GITHUB_REPO}/issues`;
const DISCUSSIONS_URL = `https://github.com/${GITHUB_REPO}/discussions`;

// Helper to send GA4 events
const sendGAEvent = (action: string, params: Record<string, string | boolean>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, params);
  }
};

export default function FeedbackWidget({
  pagePath,
  pageTitle,
  onFeedback,
  inline = false,
}: FeedbackWidgetProps) {
  const [state, setState] = useState<FeedbackState>('initial');
  const [helpful, setHelpful] = useState<boolean | null>(null);
  const [comment, setComment] = useState('');

  const getCurrentPath = () => pagePath || (typeof window !== 'undefined' ? window.location.pathname : '');

  const buildIssueUrl = () => {
    const title = encodeURIComponent(`[Docs Feedback] ${pageTitle || getCurrentPath()}`);
    const currentPath = getCurrentPath();
    const body = encodeURIComponent(
`## Page
${currentPath}

## Feedback
${comment || '_No details provided_'}

## What would make this page more helpful?
<!-- Please describe what information is missing, unclear, or incorrect -->

---
_Submitted via documentation feedback widget_`
    );
    return `${ISSUES_URL}/new?labels=documentation,feedback&title=${title}&body=${body}`;
  };

  const buildDiscussionUrl = () => {
    const title = encodeURIComponent(`Question about: ${pageTitle || getCurrentPath()}`);
    const body = encodeURIComponent(
`**Page:** ${getCurrentPath()}

**Question:**
${comment || '_Please describe what you need help with_'}

---
*Submitted via documentation feedback widget*`
    );
    return `${DISCUSSIONS_URL}/new?category=q-a&title=${title}&body=${body}`;
  };

  const handleVote = (isHelpful: boolean) => {
    setHelpful(isHelpful);
    
    // Send GA event for the vote
    sendGAEvent('page_feedback', {
      page_path: getCurrentPath(),
      helpful: isHelpful,
      feedback_type: isHelpful ? 'positive' : 'negative',
    });

    if (!isHelpful) {
      // Show comment form for negative feedback
      setState('commenting');
    } else {
      // Show thanks immediately for positive feedback
      onFeedback?.(isHelpful);
      setState('submitted');
    }
  };

  const handleSubmitWithComment = () => {
    // Send GA event with comment indicator
    sendGAEvent('page_feedback_comment', {
      page_path: getCurrentPath(),
      has_comment: comment.length > 0,
    });
    
    onFeedback?.(false, comment);
    
    // Auto-open GitHub Issue with pre-filled feedback
    const issueUrl = buildIssueUrl();
    window.open(issueUrl, '_blank', 'noopener,noreferrer');
    sendGAEvent('feedback_create_issue', { page_path: getCurrentPath(), auto_opened: true });
    
    setState('submitted');
  };

  const handleSkipComment = () => {
    onFeedback?.(false);
    setState('skipped');
  };

  if (state === 'submitted') {
    return (
      <div className={inline ? styles.inlineContainer : styles.container}>
        <div className={styles.thanks}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span>Thanks! Issue created.</span>
        </div>
      </div>
    );
  }

  if (state === 'skipped') {
    return (
      <div className={inline ? styles.inlineContainer : styles.container}>
        <div className={styles.thanks}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span>Thanks for your feedback!</span>
        </div>
        <div className={styles.followUpActions}>
          <a 
            href={buildIssueUrl()} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.actionLink}
            onClick={() => sendGAEvent('feedback_create_issue', { page_path: getCurrentPath() })}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"/>
            </svg>
            Report an issue
          </a>
          <span className={styles.separator}>•</span>
          <a 
            href={buildDiscussionUrl()} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.actionLink}
            onClick={() => sendGAEvent('feedback_ask_community', { page_path: getCurrentPath() })}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M1.5 2.75a.25.25 0 0 1 .25-.25h8.5a.25.25 0 0 1 .25.25v5.5a.25.25 0 0 1-.25.25h-3.5a.75.75 0 0 0-.53.22L3.5 11.44V9.25a.75.75 0 0 0-.75-.75h-1a.25.25 0 0 1-.25-.25Zm.25-1.75A1.75 1.75 0 0 0 0 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 0 0 2.487 1.03L7.061 10h3.189A1.75 1.75 0 0 0 12 8.25v-5.5A1.75 1.75 0 0 0 10.25 1ZM14.5 4.75a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.457 1.457 0 0 1-2.487 1.03L9.22 12.28a.75.75 0 0 1 1.06-1.06l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"/>
            </svg>
            Ask the community
          </a>
        </div>
      </div>
    );
  }

  if (state === 'commenting') {
    return (
      <div className={inline ? styles.inlineContainer : styles.container}>
        <div className={styles.commentForm}>
          <label className={styles.commentLabel}>
            What could be improved?
          </label>
          <textarea
            className={styles.commentInput}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Tell us what's missing, unclear, or incorrect..."
            rows={3}
          />
          <div className={styles.commentActions}>
            <button
              type="button"
              onClick={handleSkipComment}
              className={styles.skipButton}
            >
              Skip
            </button>
            <button
              type="button"
              onClick={handleSubmitWithComment}
              className={styles.submitButton}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={inline ? styles.inlineContainer : styles.container}>
      <span className={styles.question}>Was this page helpful?</span>
      <div className={styles.buttons}>
        <button
          onClick={() => handleVote(true)}
          className={styles.voteButton}
          aria-label="Yes, this page was helpful"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
          </svg>
          Yes
        </button>
        <button
          onClick={() => handleVote(false)}
          className={styles.voteButton}
          aria-label="No, this page was not helpful"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
          </svg>
          No
        </button>
      </div>
    </div>
  );
}
