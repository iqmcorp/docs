import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Get report delivery frequency types" response in reports-api.mdx
export const reportDeliveryFrequency: EnumValue[] = [
  { id: 1, label: 'One time now' },
  { id: 2, label: 'Daily until' },
  { id: 3, label: 'Weekly until' },
  { id: 4, label: 'Monthly until' },
];
