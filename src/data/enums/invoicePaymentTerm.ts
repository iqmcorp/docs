import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Invoice payment term" response in finance-api.mdx
export const invoicePaymentTerm: EnumValue[] = [
  { id: 1, label: 'Net 7' },
  { id: 2, label: 'Net 15' },
  { id: 3, label: 'Net 30' },
  { id: 4, label: 'Net 45' },
  { id: 5, label: 'Net 60' },
  { id: 6, label: 'Net 90' },
  { id: 7, label: 'Net 120' },
  { id: 8, label: 'Custom' },
];
