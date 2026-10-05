import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Data partners list for Matched audience" response in
// _partials/audience-api/audience-matched-data-partners.mdx. Per that
// endpoint's own description, "Data partners shown are based on active
// configurations" — this list may grow/change and isn't guaranteed exhaustive.
export const dataPartners: EnumValue[] = [
  { id: 7, label: 'Healthlink ID' },
  { id: 8, label: 'Data360 ID' },
  { id: 10, label: 'IQVIA ID' },
];
