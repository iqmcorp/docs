import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/NotFound/Content';

const DISCUSSIONS_URL = 'https://github.com/iqmcorp/docs/discussions';

export default function NotFoundContent({ className }: Props): ReactNode {
  return (
    <main 
      className={clsx(className)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '60vh',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '5rem', marginBottom: '0.5rem', fontWeight: 700 }}>404</h1>
        <h2 style={{ marginBottom: '1rem', fontWeight: 500, fontSize: '1.5rem' }}>Page Not Found</h2>
        <p style={{ 
          color: 'var(--ifm-font-color-secondary)', 
          marginBottom: '2rem',
          maxWidth: '400px',
        }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2.5rem',
        }}>
          <Link
            to="/"
            className="button button--primary button--lg"
          >
            Go to Homepage
          </Link>
          <Link
            to="/getting-started/"
            className="button button--secondary button--lg"
          >
            Getting Started
          </Link>
        </div>

        <div style={{
          padding: '1.25rem 2rem',
          background: 'var(--ifm-color-emphasis-100)',
          borderRadius: '12px',
          border: '1px solid var(--ifm-color-emphasis-200)',
        }}>
          <p style={{ margin: '0 0 0.75rem 0', fontWeight: 500 }}>
            Can't find what you're looking for?
          </p>
          <a
            href={`${DISCUSSIONS_URL}/new?category=q-a&title=${encodeURIComponent('Help finding documentation')}&body=${encodeURIComponent('I was looking for information about:\n\n---\n*Please describe what you were trying to find.*')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--ifm-color-primary)',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            Ask the community
          </a>
        </div>
    </main>
  );
}
