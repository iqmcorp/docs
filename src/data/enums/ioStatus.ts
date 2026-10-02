import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Get IO status list" response in campaign-api.mdx
export const ioStatus: EnumValue[] = [
  { id: 1, label: 'Active' },
  { id: 2, label: 'Expired' },
  { id: 3, label: 'Deleted' },
];
