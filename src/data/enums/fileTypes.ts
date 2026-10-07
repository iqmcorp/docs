import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: insights-api's shared FileTypeEnum (XLSX/CSV/PDF/ZIP). Individual
// insights-api endpoints each enforce their own subset of these — filter
// this list down to the IDs a given endpoint actually accepts rather than
// passing it through whole.
export const fileTypes: EnumValue[] = [
  { id: 1, label: 'XLSX' },
  { id: 2, label: 'CSV' },
  { id: 3, label: 'PDF' },
  { id: 4, label: 'ZIP' },
];
