import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Invoice status" response in finance-api.mdx
export const invoiceStatus: EnumValue[] = [
  { id: 1, label: 'Pending' },
  { id: 2, label: 'Partially paid' },
  { id: 3, label: 'Unpaid' },
  { id: 4, label: 'Paid' },
  { id: 5, label: 'Overdue' },
  { id: 7, label: 'Processing' },
  { id: 8, label: 'Cancelled' },
];
