import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Get list of conversion property types" response in conversion-api.mdx.
// The JSON response example is used as authoritative (see commit message — the
// page's own display table had ids 2 and 3 swapped relative to the JSON example).
export const conversionAttributionTypes: EnumValue[] = [
  { id: 1, label: 'Hybrid' },
  { id: 2, label: 'Click based' },
  { id: 3, label: 'View based' },
];
