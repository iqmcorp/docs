import React, { useState } from 'react';
import styles from './FeedbackWidget.module.css';

interface FeedbackWidgetProps {
  /** Current page path for tracking */
  pagePath?: string;
  /** Page title for GitHub Discussion */
  pageTitle?: string;
  /** API endpoint to send feedback */
  apiEndpoint?: string;
  /** Callback when feedback is submitted */
  onFeedback?: (helpful: boolean, comment?: string) => void;
}

type FeedbackState = 'initial' | 'commenting' | 'submitted';

const DISCUSSIONS_URL = 'https://github.com/iqmcorp/docs/discussions';

export default function FeedbackWidget({
  pagePath,
  pageTitle,
  apiEndpoint = '/api/feedback',
  onFeedback,
}: FeedbackWidgetProps) {
  const [state, setState] = useState<FeedbackState>('initial');
  const [helpful, setHelpful] = useState<boolean | null>(null);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVote = async (isHelpful: boolean) => {
    setHelpful(isHelpful);
    
    if (!isHelpful) {
      // Show comment form for negative feedback
      setState('commenting');
    } else {
      // Submit immediately for positive feedback
      await submitFeedback(isHelpful);
    }
  };

  const submitFeedback = async (isHelpful: boolean, feedbackComment?: string) => {
    setIsSubmitting(true);

    try {
      // Call API if endpoint provided
      if (apiEndpoint) {
        await fetch(apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            page: pagePath || window.location.pathname,
            helpful: isHelpful,
            comment: feedbackComment,
            timestamp: new Date().toISOString(),
          }),
        });
      }

      // Call callback if provided
      onFeedback?.(isHelpful, feedbackComment);

      setState('submitted');
    } catch (error) {
      console.error('Failed to submit feedback:', error);
      // Still show success to user - feedback isn't critical
      setState('submitted');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitFeedback(helpful ?? false, comment);
  };

  const handleSkipComment = async () => {
    await submitFeedback(helpful ?? false);
  };

  const buildDiscussionUrl = (feedbackComment?: string) => {
    const title = encodeURIComponent(`Feedback: ${pageTitle || pagePath || 'Documentation'}`);
    const currentPath = pagePath || (typeof window !== 'undefined' ? window.location.pathname : '');
    let body = encodeURIComponent(`**Page:** ${currentPath}\n\n`);
    if (feedbackComment) {
      body += encodeURIComponent(`**Feedback:**\n${feedbackComment}\n\n`);
    }
    body += encodeURIComponent(`---\n*Please describe what you were looking for or how we can improve this page.*`);
    return `${DISCUSSIONS_URL}/new?category=q-a&title=${title}&body=${body}`;
  };

  if (state === 'submitted') {
    return (
      <div className={styles.container}>
        <div className={styles.thanks}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span>Thanks for your feedback!</span>
        </div>
        {helpful === false && (
          <div className={styles.discussionLink}>
            <a href={buildDiscussionUrl(comment)} target="_blank" rel="noopener noreferrer">
              💬 Start a discussion
            </a>
            {' '}to get help from the community
          </div>
        )}
      </div>
    );
  }

  if (state === 'commenting') {
    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmitComment} className={styles.commentForm}>
          <label className={styles.commentLabel}>
            How can we improve this page?
          </label>
          <textarea
            className={styles.commentInput}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Optional: Tell us what's missing or unclear..."
            rows={3}
          />
          <div className={styles.commentActions}>
            <button
              type="button"
              onClick={handleSkipComment}
              className={styles.skipButton}
              disabled={isSubmitting}
            >
              Skip
            </button>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Feedback'}
            </button>
          </div>
          <div className={styles.discussionPrompt}>
            Need more help?{' '}
            <a href={buildDiscussionUrl(comment)} target="_blank" rel="noopener noreferrer">
              Ask the community →
            </a>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className={styles.container}>
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
