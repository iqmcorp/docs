import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "User status" response in workspace-api.mdx
export const userStatus: EnumValue[] = [
  { id: 1, label: 'Active' },
  { id: 2, label: 'Pending' },
  { id: 3, label: 'Invited' },
  { id: 4, label: 'Suspended' },
  { id: 5, label: 'Deleted' },
];
