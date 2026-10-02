import React, { useRef, useState } from 'react';
import { Collapsible, useCollapsible } from '@docusaurus/theme-common';
import styles from './styles.module.css';

export type EnumValue = {
  /** The value sent/received in the API */
  id: number | string;
  /** Human-readable meaning of the value */
  label: string;
};

export type EnumWidgetProps = {
  /** The list of supported ID/value pairs for this field */
  values: EnumValue[];
  /** Text shown on the collapsed trigger button */
  buttonLabel?: string;
};

function isInSummary(node: Node | null): boolean {
  if (!node) {
    return false;
  }
  return (node as HTMLElement).tagName === 'SUMMARY' || isInSummary(node.parentElement);
}

/**
 * Collapsible "Supported values" button for fields backed by a fixed set of
 * IDs (creative types, country IDs, etc). Drop it right under the field
 * description in a parameters table.
 *
 * Animates open/closed with Docusaurus's own `Collapsible` (the same
 * primitive behind the sidebar category toggle and the `Details` admonition),
 * so it opens at the same speed instead of snapping instantly like a plain
 * native <details>.
 */
export default function EnumWidget({
  values = [],
  buttonLabel = 'Supported values',
}: EnumWidgetProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const { collapsed, setCollapsed } = useCollapsible({ initialState: true });
  // Native `open` must stay true for the whole expand/collapse animation —
  // the browser hides a <details> content entirely without it — and only
  // flips back to false once the collapse transition finishes.
  const [open, setOpen] = useState(false);

  if (!values.length) {
    return null;
  }

  return (
    <details
      ref={detailsRef}
      open={open}
      className={styles.widget}
      onClick={(e) => {
        // Docusaurus's own <details> (used for collapsible sections like
        // "Request schema") toggles itself on a click from ANY nested
        // summary, not just its own. Stop the click here so it can't bubble
        // up and close an ancestor details/summary when this widget is
        // nested inside one.
        e.stopPropagation();
        if (!isInSummary(e.target as Node)) {
          // A click on the table itself (e.g. selecting text) shouldn't toggle.
          return;
        }
        e.preventDefault();
        if (collapsed) {
          setCollapsed(false);
          setOpen(true);
        } else {
          setCollapsed(true);
        }
      }}
    >
      <summary className={styles.trigger}>
        <span className={styles.plus} aria-hidden="true">+</span>
        {buttonLabel}
      </summary>
      <Collapsible
        lazy={false}
        collapsed={collapsed}
        onCollapseTransitionEnd={(newCollapsed) => {
          setCollapsed(newCollapsed);
          setOpen(!newCollapsed);
        }}
      >
        <table className={styles.table}>
          <tbody>
            {values.map((v) => (
              <tr key={v.id}>
                <td><var>{v.id}</var></td>
                <td>{v.label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Collapsible>
    </details>
  );
}
