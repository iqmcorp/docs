import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Get creative status list" response in creative-api.mdx
export const creativeStatus: EnumValue[] = [
  { id: 1, label: 'Pending' },
  { id: 2, label: 'Running' },
  { id: 3, label: 'Paused' },
  { id: 5, label: 'Rejected' },
  { id: 4, label: 'Deleted' },
];
