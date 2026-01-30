import React, {
  type ComponentProps,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import clsx from 'clsx';
import {
  ThemeClassNames,
  useThemeConfig,
  usePrevious,
  Collapsible,
  useCollapsible,
} from '@docusaurus/theme-common';
import {isSamePath} from '@docusaurus/theme-common/internal';
import {
  isActiveSidebarItem,
  findFirstSidebarItemLink,
  useDocSidebarItemsExpandedState,
  useVisibleSidebarItems,
} from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {useLocation} from '@docusaurus/router';
import DocSidebarItems from '@theme/DocSidebarItems';
import DocSidebarItemLink from '@theme/DocSidebarItem/Link';
import type {Props} from '@theme/DocSidebarItem/Category';

import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';
import styles from './styles.module.css';

// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory({
  isActive,
  collapsed,
  updateCollapsed,
  activePath,
}: {
  isActive: boolean;
  collapsed: boolean;
  updateCollapsed: (b: boolean) => void;
  activePath: string;
}) {
  const wasActive = usePrevious(isActive);
  const previousActivePath = usePrevious(activePath);
  useEffect(() => {
    const justBecameActive = isActive && !wasActive;
    const stillActiveButPathChanged =
      isActive && wasActive && activePath !== previousActivePath;
    if ((justBecameActive || stillActiveButPathChanged) && collapsed) {
      updateCollapsed(false);
    }
  }, [
    isActive,
    wasActive,
    collapsed,
    updateCollapsed,
    activePath,
    previousActivePath,
  ]);
}

// Normalize a string by removing special characters and converting to lowercase
function normalizeLabel(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Convert a URL hash (like "campaign-details") to a normalized label
function hashToLabel(hash: string): string {
  return normalizeLabel(hash.replace(/-/g, ' '));
}

// Hook to expand category when URL hash matches category label or contains a child link
// Returns a ref that should be attached to the category element for highlighting
function useAutoExpandOnHashMatch({
  categoryLabel,
  categoryItems,
  collapsed,
  updateCollapsed,
  categoryRef,
}: {
  categoryLabel: string;
  categoryItems: Props['item']['items'];
  collapsed: boolean;
  updateCollapsed: (b: boolean) => void;
  categoryRef: React.RefObject<HTMLLIElement>;
}) {
  const location = useLocation();
  const previousHash = usePrevious(location.hash);
  // Track the last hash we processed to avoid re-triggering on state changes
  const processedHashRef = useRef<string | null>(null);

  useEffect(() => {
    const hash = location.hash;
    
    if (!hash) return;
    
    // Only process if hash actually changed (not just a re-render)
    if (hash === processedHashRef.current) return;

    const cleanHash = hash.startsWith('#') ? hash.slice(1) : hash;
    const hashLabel = hashToLabel(cleanHash);
    const normalizedCategoryLabel = normalizeLabel(categoryLabel);

    // Strategy 1: Check if hash matches the category label (for ## headings)
    if (normalizedCategoryLabel === hashLabel || 
        normalizedCategoryLabel.includes(hashLabel) ||
        hashLabel.includes(normalizedCategoryLabel)) {
      // Mark this hash as processed for this category
      processedHashRef.current = hash;
      
      if (collapsed) {
        updateCollapsed(false);
      }
      // Highlight the category using the ref
      setTimeout(() => {
        if (categoryRef.current) {
          categoryRef.current.classList.add('sidebar-category-highlight');
          categoryRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          setTimeout(() => {
            categoryRef.current?.classList.remove('sidebar-category-highlight');
          }, 2500);
        }
      }, 150);
      return;
    }

    // Strategy 2: Check if any child link points to this hash (for ### headings)
    const hasMatchingChild = categoryItems.some((item) => {
      if (item.type === 'link') {
        const href = item.href || '';
        return href.includes(`#${cleanHash}`);
      }
      return false;
    });

    if (hasMatchingChild) {
      // Mark this hash as processed for this category
      processedHashRef.current = hash;
      
      if (collapsed) {
        updateCollapsed(false);
      }
      // Highlight the category and the link after expansion
      setTimeout(() => {
        // Highlight the parent category
        if (categoryRef.current) {
          categoryRef.current.classList.add('sidebar-category-highlight');
          setTimeout(() => {
            categoryRef.current?.classList.remove('sidebar-category-highlight');
          }, 2500);
        }
        // Also highlight the specific link
        const link = document.querySelector(`.menu__link[href*="#${cleanHash}"]`);
        if (link) {
          link.classList.add('sidebar-link-highlight');
          link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          setTimeout(() => {
            link.classList.remove('sidebar-link-highlight');
          }, 2500);
        }
      }, 150);
    }
  }, [location.hash, categoryLabel, categoryItems, collapsed, updateCollapsed, categoryRef]);
  
  // Reset processed hash when hash changes so we can process new hashes
  useEffect(() => {
    if (location.hash !== previousHash) {
      processedHashRef.current = null;
    }
  }, [location.hash, previousHash]);
}

/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */
function useCategoryHrefWithSSRFallback(
  item: Props['item'],
): string | undefined {
  const isBrowser = useIsBrowser();
  return useMemo(() => {
    if (item.href && !item.linkUnlisted) {
      return item.href;
    }
    // In these cases, it's not necessary to render a fallback
    // We skip the "findFirstCategoryLink" computation
    if (isBrowser || !item.collapsible) {
      return undefined;
    }
    return findFirstSidebarItemLink(item);
  }, [item, isBrowser]);
}

function CollapseButton({
  collapsed,
  categoryLabel,
  onClick,
}: {
  collapsed: boolean;
  categoryLabel: string;
  onClick: ComponentProps<'button'>['onClick'];
}) {
  return (
    <button
      aria-label={
        collapsed
          ? translate(
              {
                id: 'theme.DocSidebarItem.expandCategoryAriaLabel',
                message: "Expand sidebar category '{label}'",
                description: 'The ARIA label to expand the sidebar category',
              },
              {label: categoryLabel},
            )
          : translate(
              {
                id: 'theme.DocSidebarItem.collapseCategoryAriaLabel',
                message: "Collapse sidebar category '{label}'",
                description: 'The ARIA label to collapse the sidebar category',
              },
              {label: categoryLabel},
            )
      }
      aria-expanded={!collapsed}
      type="button"
      className="clean-btn menu__caret"
      onClick={onClick}
    />
  );
}

function CategoryLinkLabel({label}: {label: string}) {
  return (
    <span title={label} className={styles.categoryLinkLabel}>
      {label}
    </span>
  );
}

export default function DocSidebarItemCategory(props: Props): ReactNode {
  const visibleChildren = useVisibleSidebarItems(
    props.item.items,
    props.activePath,
  );
  if (visibleChildren.length === 0) {
    return <DocSidebarItemCategoryEmpty {...props} />;
  } else {
    return <DocSidebarItemCategoryCollapsible {...props} />;
  }
}

function isCategoryWithHref(
  category: PropSidebarItemCategory,
): category is PropSidebarItemCategory & {href: string} {
  return typeof category.href === 'string';
}

// If a category doesn't have any visible children, we render it as a link
function DocSidebarItemCategoryEmpty({item, ...props}: Props): ReactNode {
  // If the category has no link, we don't render anything
  // It's not super useful to render a category you can't open nor click
  if (!isCategoryWithHref(item)) {
    return null;
  }
  // We remove props that don't make sense for a link and forward the rest
  const {
    type,
    collapsed,
    collapsible,
    items,
    linkUnlisted,
    ...forwardableProps
  } = item;
  const linkItem: PropSidebarItemLink = {
    type: 'link',
    ...forwardableProps,
  };
  return <DocSidebarItemLink item={linkItem} {...props} />;
}

function DocSidebarItemCategoryCollapsible({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props): ReactNode {
  const {items, label, collapsible, className, href} = item;
  const {
    docs: {
      sidebar: {autoCollapseCategories},
    },
  } = useThemeConfig();
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
  
  // Ref for highlighting
  const categoryRef = useRef<HTMLLIElement>(null);

  const isActive = isActiveSidebarItem(item, activePath);
  const isCurrentPage = isSamePath(href, activePath);

  const {collapsed, setCollapsed} = useCollapsible({
    // Active categories are always initialized as expanded. The default
    // (`item.collapsed`) is only used for non-active categories.
    initialState: () => {
      if (!collapsible) {
        return false;
      }
      return isActive ? false : item.collapsed;
    },
  });

  const {expandedItem, setExpandedItem} = useDocSidebarItemsExpandedState();
  // Use this instead of `setCollapsed`, because it is also reactive
  const updateCollapsed = (toCollapsed: boolean = !collapsed) => {
    setExpandedItem(toCollapsed ? null : index);
    setCollapsed(toCollapsed);
  };
  useAutoExpandActiveCategory({
    isActive,
    collapsed,
    updateCollapsed,
    activePath,
  });
  
  // Auto-expand when URL hash matches this category or a child link
  useAutoExpandOnHashMatch({
    categoryLabel: label,
    categoryItems: items,
    collapsed,
    updateCollapsed,
    categoryRef,
  });
  
  useEffect(() => {
    if (
      collapsible &&
      expandedItem != null &&
      expandedItem !== index &&
      autoCollapseCategories
    ) {
      setCollapsed(true);
    }
  }, [collapsible, expandedItem, index, setCollapsed, autoCollapseCategories]);

  const handleItemClick: ComponentProps<'a'>['onClick'] = (e) => {
    onItemClick?.(item);
    if (collapsible) {
      if (href) {
        // When already on the category's page, we collapse it
        // We don't use "isActive" because it would collapse the
        // category even when we browse a children element
        // See https://github.com/facebook/docusaurus/issues/11213
        if (isCurrentPage) {
          e.preventDefault();
          updateCollapsed();
        } else {
          // When navigating to a new category, we always expand
          // see https://github.com/facebook/docusaurus/issues/10854#issuecomment-2609616182
          updateCollapsed(false);
        }
      } else {
        e.preventDefault();
        updateCollapsed();
      }
    }
  };

  return (
    <li
      ref={categoryRef}
      className={clsx(
        ThemeClassNames.docs.docSidebarItemCategory,
        ThemeClassNames.docs.docSidebarItemCategoryLevel(level),
        'menu__list-item',
        {
          'menu__list-item--collapsed': collapsed,
        },
        className,
      )}>
      <div
        className={clsx('menu__list-item-collapsible', {
          'menu__list-item-collapsible--active': isCurrentPage,
        })}>
        <Link
          className={clsx(styles.categoryLink, 'menu__link', {
            'menu__link--sublist': collapsible,
            'menu__link--sublist-caret': !href && collapsible,
            'menu__link--active': isActive,
          })}
          onClick={handleItemClick}
          aria-current={isCurrentPage ? 'page' : undefined}
          role={collapsible && !href ? 'button' : undefined}
          aria-expanded={collapsible && !href ? !collapsed : undefined}
          href={collapsible ? hrefWithSSRFallback ?? '#' : hrefWithSSRFallback}
          {...props}>
          <CategoryLinkLabel label={label} />
        </Link>
        {href && collapsible && (
          <CollapseButton
            collapsed={collapsed}
            categoryLabel={label}
            onClick={(e) => {
              e.preventDefault();
              updateCollapsed();
            }}
          />
        )}
      </div>

      <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
        <DocSidebarItems
          items={items}
          tabIndex={collapsed ? -1 : 0}
          onItemClick={onItemClick}
          activePath={activePath}
          level={level + 1}
        />
      </Collapsible>
    </li>
  );
}
