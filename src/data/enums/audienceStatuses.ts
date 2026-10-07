import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: audience-api's AudienceStatusEnum. Excludes id 0 (Temporary) and
// id 5 (Deleted) - both are flagged userVisibility=0 in the enum, i.e.
// internal-only states not meant to be surfaced to API consumers.
export const audienceStatuses: EnumValue[] = [
  { id: 1, label: 'Processing' },
  { id: 2, label: 'Pending' },
  { id: 3, label: 'Ready' },
  { id: 4, label: 'Rejected' },
  { id: 6, label: 'Failed' },
  { id: 7, label: 'Fetching data' },
  { id: 8, label: 'Data fetched' },
];
