import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Payment types" response in finance-api.mdx
export const paymentTypes: EnumValue[] = [
  { id: 1, label: 'As Fund' },
  { id: 2, label: 'Against Invoice' },
  { id: 3, label: 'Refund' },
];
