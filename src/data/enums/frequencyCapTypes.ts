import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Get frequency cap types" response in campaign-api.mdx
export const frequencyCapTypes: EnumValue[] = [
  { id: 1, label: 'Day(s)' },
  { id: 2, label: 'Week(s)' },
  { id: 3, label: 'Month(s)' },
  { id: 4, label: 'Campaign Duration' },
];
