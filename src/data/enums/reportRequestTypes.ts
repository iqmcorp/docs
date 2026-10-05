import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Get report request types" response in reports-api.mdx
export const reportRequestTypes: EnumValue[] = [
  { id: 1, label: 'Daily' },
  { id: 2, label: 'Aggregated' },
  { id: 3, label: 'Weekly' },
  { id: 4, label: 'Monthly' },
];
