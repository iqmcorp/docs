import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Customer type" response in workspace-api.mdx
export const customerType: EnumValue[] = [
  { id: 1, label: 'Self Served' },
  { id: 2, label: 'Managed Services' },
  { id: 3, label: 'App Users' },
  { id: 4, label: 'Advertisers' },
  { id: 5, label: 'Workspaces' },
];
