import React, {useId, useMemo, useState} from 'react';

export type CodeOptionProps = {
  /** Visible label in the select menu */
  label: string;
  /** Optional explicit value; defaults to kebab-case of label */
  value?: string;
  /** Your code block (or any MDX) as children */
  children: React.ReactNode;
};

export const CodeOption: React.FC<CodeOptionProps> = ({children}) => <>{children}</>;

type CodeDropdownProps = {
  /** Label shown next to the select */
  label?: string;
  /** Initial selected option's value */
  defaultValue?: string;
  /** Display variant: "bar" (default) shows full-width bar, "minimal" shows just the select */
  variant?: 'bar' | 'minimal';
  /** One or more <CodeOption> children */
  children: React.ReactNode;
};

export const CodeDropdown: React.FC<CodeDropdownProps> = ({
  label = 'Select example',
  defaultValue,
  variant = 'bar',
  children,
}) => {
  const id = useId();

  const items = useMemo(() => {
    const arr = React.Children
      .toArray(children)
      .filter(Boolean) as React.ReactElement<CodeOptionProps>[];

    return arr.map((child, i) => {
      const derived = child.props.value ?? child.props.label ?? `option-${i+1}`;
      const value = String(derived).toLowerCase().replace(/\s+/g, '-');
      const display = child.props.label ?? `Option ${i+1}`;
      return { value, label: display, node: child.props.children };
    });
  }, [children]);

  const [selected, setSelected] = useState<string>(defaultValue ?? items[0]?.value ?? '');

  const selectElement = (
    <select
      id={id}
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      aria-label={label}
      style={{
        padding: variant === 'minimal' ? '4px 10px' : '2px 8px',
        border: '1px solid var(--ifm-toc-border-color)',
        borderRadius: 'var(--ifm-code-border-radius)',
        backgroundColor: 'transparent',
        color: 'inherit',
        fontSize: variant === 'minimal' ? '0.9rem' : '0.8rem',
        fontWeight: 400,
        cursor: 'pointer',

      }}
    >
      {items.map(o => (
        <option key={o.value} value={o.value}
          style={{
            padding: '4px 8px',
            backgroundColor: o.value === selected ? 'var(--ifm-primary-color)' : 'transparent',
            color: o.value === selected ? 'white' : 'inherit',
          }}
        >
          {o.label}
        </option>
      ))}
    </select>
  );

  return (
    <div
      className={`code-dropdown${variant === 'minimal' ? ' code-dropdown--minimal' : ''}`}
      style={{
        borderRadius: 'var(--ifm-code-border-radius)',
        marginBottom: 16,
      }}
    >
      {variant === 'minimal' ? (
        <div className="code-dropdown__menu code-dropdown__menu--minimal" style={{
          display: 'inline-flex',
          alignItems: 'baseline',
          marginLeft: 12,
          transform: 'translateY(-5px)',
        }}>
          {selectElement}
        </div>
      ) : (
        <div
          className="code-dropdown__menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            justifyContent: 'space-between',
            padding: '8px 12px',
            background: 'var(--ifm-background-surface-color)',
            borderRadius: 'var(--ifm-code-border-radius)',
            border: '1px solid var(--ifm-toc-border-color)',
          }}
        >
          <label htmlFor={id} style={{ fontWeight: 400 }}>
            {label}
          </label>
          {selectElement}
        </div>
      )}

      <div style={{ padding: 0, ...(variant === 'minimal' ? { paddingTop: 'var(--ifm-heading-margin-bottom)' } : {}) }}>
        {items.map(o => (
          <div key={o.value} style={{ display: o.value === selected ? 'block' : 'none',
            backgroundColor: 'transparent',
           }}>
            {o.node}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeDropdown;
