import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Invoice payment mode types" response in finance-api.mdx
export const invoicePaymentModeTypes: EnumValue[] = [
  { id: 1, label: 'PayPal' },
  { id: 2, label: 'Cheque' },
  { id: 3, label: 'Wire Transfer' },
];
