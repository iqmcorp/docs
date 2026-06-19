import React, {type ReactNode} from 'react';
import Content from '@theme-original/DocSidebar/Desktop/Content';
import type ContentType from '@theme/DocSidebar/Desktop/Content';
import type {WrapperProps} from '@docusaurus/types';
import styles from './styles.module.css';

const DISCUSSIONS_URL = 'https://github.com/iqmcorp/docs/discussions';

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): ReactNode {
  return (
    <div className={styles.sidebarWrapper}>
      <Content {...props} />
      <div className={styles.helpSection}>
        <a
          href={`${DISCUSSIONS_URL}/new?category=q-a`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.helpLink}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Need help? Ask the community
        </a>
      </div>
    </div>
  );
}
