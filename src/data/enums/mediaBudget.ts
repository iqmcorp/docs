import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Media budget" response in workspace-api.mdx
export const mediaBudget: EnumValue[] = [
  { id: 1, label: '< $50,000' },
  { id: 2, label: '$50,000 - $100,000' },
  { id: 3, label: '$100,000 - $500,000' },
  { id: 4, label: '$500,000 - $1,000,000' },
  { id: 5, label: '$1,000,000 - $10,000,000' },
  { id: 6, label: '> $10,000,000' },
];
