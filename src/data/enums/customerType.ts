import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Customer type" response in workspace-api.mdx
export const customerType: EnumValue[] = [
  { id: 1, label: 'Self served' },
  { id: 2, label: 'Managed services' },
  { id: 3, label: 'App users' },
  { id: 4, label: 'Advertisers' },
  { id: 5, label: 'Workspaces' },
];
