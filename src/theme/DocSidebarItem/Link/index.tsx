import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {isActiveSidebarItem} from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type {Props} from '@theme/DocSidebarItem/Link';
import styles from './styles.module.css';

// --- helpers ---
function methodToBadge(method?: string) {
  const m = (method || '').toUpperCase();
  if (m === 'GET') return 'primary';
  if (m === 'POST') return 'success';
  if (m === 'PUT') return 'warning';
  if (m === 'PATCH') return 'info';
  if (m === 'DEL') return 'danger';
  return 'secondary';
}

function withMethodBadge(labelNode: React.ReactNode, method?: string) {
  if (!method) return labelNode;
  return (
    <span className="sidebar-item-with-badge" style={{display:'inline-flex',alignItems:'center',gap:'0.25rem'}}>
      <span className={`badge bar badge--${methodToBadge(method)}`} aria-label={`${method.toUpperCase()} method`}>
        {method.toUpperCase()}
      </span>
      <span>{labelNode}</span>
    </span>
  );
}

function LinkLabel({label}: {label: string}) {
  return (
    <span title={label} className={styles.linkLabel}>
      {label}
    </span>
  );
}

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props): ReactNode {
  const {href, label, className, autoAddBaseUrl} = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);

  // NEW: read method from customProps
  const method = (item as any)?.customProps?.method as string | undefined;

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className,
      )}
      key={label}>
      <Link
        className={clsx(
          'menu__link',
          !isInternalLink && styles.menuExternalLink,
          { 'menu__link--active': isActive }
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}
      >
        {withMethodBadge(<LinkLabel label={label} />, method)}
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
