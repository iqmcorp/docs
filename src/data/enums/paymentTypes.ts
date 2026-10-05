import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Payment types" response in finance-api.mdx
export const paymentTypes: EnumValue[] = [
  { id: 1, label: 'As fund' },
  { id: 2, label: 'Against invoice' },
  { id: 3, label: 'Refund' },
];
