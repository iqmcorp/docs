import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Payment status" response in finance-api.mdx
export const paymentStatus: EnumValue[] = [
  { id: 1, label: 'Processing' },
  { id: 2, label: 'Paid' },
  { id: 3, label: 'Rejected' },
  { id: 4, label: 'Cancelled' },
];
