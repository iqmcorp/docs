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
  /** One or more <CodeOption> children */
  children: React.ReactNode;
};

export const CodeDropdown: React.FC<CodeDropdownProps> = ({
  label = 'Select example',
  defaultValue,
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

  return (
    <div
      className="code-dropdown"
      style={{
        borderRadius: 'var(--ifm-code-border-radius)',
        marginBottom: 16,
      }}
    >
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
        <label htmlFor={id} style={{ 
          fontWeight: 400, 
        }}>
          {label}
        </label>
        <select
          id={id}
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          style={{ marginLeft: 'auto',
            padding: '4px 8px',
            border: '1px solid var(--ifm-toc-border-color)',
            borderRadius: 'var(--ifm-code-border-radius)',
            backgroundColor: 'transparent',
            color: 'inherit',
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
      </div>

      <div style={{ padding: 0 }}>
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
