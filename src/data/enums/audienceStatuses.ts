import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: audience-api's AudienceStatusEnum. Excludes id 0 (Temporary), an
// internal-only state never returned by any public audience-api endpoint.
// id 5 (Deleted) is only included in the "Audience status list" endpoint's
// response when its deletedStatusRequired flag is set.
export const audienceStatuses: EnumValue[] = [
  { id: 1, label: 'Processing' },
  { id: 2, label: 'Pending' },
  { id: 3, label: 'Ready' },
  { id: 4, label: 'Rejected' },
  { id: 5, label: 'Deleted' },
  { id: 6, label: 'Failed' },
  { id: 7, label: 'Fetching data' },
  { id: 8, label: 'Data fetched' },
];
