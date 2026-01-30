import { useEffect, useCallback } from 'react';
import { useLocation } from '@docusaurus/router';

/**
 * Converts a hash like "campaign-details" to a normalized label for comparison.
 * "campaign-details" -> "campaign details"
 */
function hashToLabel(hash: string): string {
  return hash.toLowerCase().replace(/-/g, ' ').trim();
}

/**
 * Normalizes a category label for comparison.
 * "Campaign Details" -> "campaign details"
 */
function normalizeLabel(label: string): string {
  return label.toLowerCase().trim();
}

/**
 * Hook that highlights and expands the sidebar category corresponding to the current URL hash.
 * 
 * When navigating to a heading:
 * - For ### headings: Finds the sidebar link with matching href, expands parent, highlights
 * - For ## headings: Finds the sidebar category by label match, expands and highlights it
 * 
 * The highlight uses a CSS animation that fades out after a short duration.
 */
export function useSidebarHighlight() {
  const location = useLocation();

  // Find and highlight the sidebar item matching the current hash
  const highlightSidebarItem = useCallback((hash: string) => {
    if (!hash || typeof document === 'undefined') return;

    // Small delay to ensure DOM is ready after navigation
    const timeoutId = setTimeout(() => {
      // Remove hash prefix if present
      const cleanHash = hash.startsWith('#') ? hash.slice(1) : hash;
      const hashLabel = hashToLabel(cleanHash);
      
      console.log('[SidebarHighlight] Looking for:', { cleanHash, hashLabel });
      
      // Strategy 1: Find a sidebar link that points to this exact anchor (### headings)
      const sidebarLinks = Array.from(document.querySelectorAll('.menu__link'));
      const foundLink = sidebarLinks.find((link) => {
        const href = link.getAttribute('href');
        return href && href.includes(`#${cleanHash}`);
      }) as HTMLElement | undefined;

      if (foundLink) {
        console.log('[SidebarHighlight] Strategy 1: Found direct link:', foundLink.textContent);
        // Found a direct link - highlight it and its parent category
        highlightLinkAndCategory(foundLink);
        return;
      }

      // Strategy 2: Find a category whose label matches the hash (## headings)
      // These are collapsible categories in the sidebar
      const categories = Array.from(document.querySelectorAll('.theme-doc-sidebar-item-category'));
      console.log('[SidebarHighlight] Strategy 2: Found', categories.length, 'categories');
      
      for (const category of categories) {
        // Get the category label text
        const labelElement = category.querySelector('.menu__list-item-collapsible .menu__link');
        if (!labelElement) continue;
        
        const labelText = labelElement.textContent || '';
        const normalizedCategoryLabel = normalizeLabel(labelText);
        
        // Check if the hash matches the category label
        if (normalizedCategoryLabel === hashLabel || normalizedCategoryLabel.includes(hashLabel)) {
          console.log('[SidebarHighlight] Strategy 2: Found matching category:', labelText);
          highlightCategory(category as HTMLElement);
          return;
        }
      }
      
      // Strategy 3: Find any link inside the page that starts with this anchor
      // This handles cases where the hash is a parent section
      const linksInSection = sidebarLinks.filter((link) => {
        const href = link.getAttribute('href') || '';
        // Check if the href contains an anchor that starts with the hash
        const anchorMatch = href.match(/#(.+)$/);
        if (anchorMatch) {
          const anchor = anchorMatch[1];
          return anchor.startsWith(cleanHash);
        }
        return false;
      });
      
      console.log('[SidebarHighlight] Strategy 3: Found', linksInSection.length, 'links starting with hash');
      
      if (linksInSection.length > 0) {
        // Use the first matching link to find and highlight the category
        const firstLink = linksInSection[0] as HTMLElement;
        highlightLinkAndCategory(firstLink);
      }
    }, 350); // Wait for page navigation to complete

    return () => clearTimeout(timeoutId);
  }, []);

  // Helper function to highlight a specific link and its parent category
  function highlightLinkAndCategory(link: HTMLElement) {
    const parentListItem = link.closest('.menu__list-item');
    if (!parentListItem) return;

    const parentCategory = parentListItem.closest('.theme-doc-sidebar-item-category') as HTMLElement | null;
    
    if (parentCategory) {
      expandCategory(parentCategory);
      parentCategory.classList.add('sidebar-category-highlight');
      link.classList.add('sidebar-link-highlight');
      link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      
      setTimeout(() => {
        parentCategory.classList.remove('sidebar-category-highlight');
        link.classList.remove('sidebar-link-highlight');
      }, 2500);
    }
  }

  // Helper function to highlight a category (for ## headings)
  function highlightCategory(category: HTMLElement) {
    expandCategory(category);
    category.classList.add('sidebar-category-highlight');
    
    // Also highlight the category label
    const categoryLabel = category.querySelector('.menu__list-item-collapsible .menu__link') as HTMLElement | null;
    if (categoryLabel) {
      categoryLabel.classList.add('sidebar-link-highlight');
      categoryLabel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    setTimeout(() => {
      category.classList.remove('sidebar-category-highlight');
      categoryLabel?.classList.remove('sidebar-link-highlight');
    }, 2500);
  }

  // Helper function to expand a collapsed category
  function expandCategory(category: HTMLElement) {
    // Multiple selectors for the expand button - Docusaurus uses different structures
    const collapsibleItem = category.querySelector('.menu__list-item-collapsible') as HTMLElement | null;
    const caretButton = category.querySelector('.menu__caret') as HTMLElement | null;
    const linkWithCaret = category.querySelector('.menu__link--sublist-caret') as HTMLElement | null;
    
    // Check the aria-expanded attribute on the collapsible item
    const isCollapsed = collapsibleItem?.getAttribute('aria-expanded') === 'false';
    
    console.log('[SidebarHighlight] expandCategory:', {
      category: category.querySelector('.menu__link')?.textContent,
      isCollapsed,
      hasCollapsibleItem: !!collapsibleItem,
      hasCaret: !!caretButton,
      hasLinkWithCaret: !!linkWithCaret,
    });
    
    if (isCollapsed) {
      // Try clicking the caret button first
      if (caretButton) {
        console.log('[SidebarHighlight] Clicking caret button');
        caretButton.click();
      } 
      // If no caret, try the link with caret class
      else if (linkWithCaret) {
        console.log('[SidebarHighlight] Clicking link with caret');
        linkWithCaret.click();
      }
      // Last resort: click the collapsible item itself
      else if (collapsibleItem) {
        console.log('[SidebarHighlight] Clicking collapsible item');
        // Find the actual button/link inside and click it
        const clickTarget = collapsibleItem.querySelector('button, .menu__link') as HTMLElement;
        if (clickTarget) {
          clickTarget.click();
        } else {
          collapsibleItem.click();
        }
      }
    }
    
    // Also expand parent categories if nested
    const parentCategory = category.parentElement?.closest('.theme-doc-sidebar-item-category') as HTMLElement | null;
    if (parentCategory) {
      expandCategory(parentCategory);
    }
  }

  // Listen for location changes
  useEffect(() => {
    if (location.hash) {
      highlightSidebarItem(location.hash);
    }
  }, [location.hash, highlightSidebarItem]);

  // Also handle initial page load with hash
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      highlightSidebarItem(window.location.hash);
    }
  }, [highlightSidebarItem]);

  // Expose manual trigger for programmatic navigation
  return { highlightSidebarItem };
}

export default useSidebarHighlight;
