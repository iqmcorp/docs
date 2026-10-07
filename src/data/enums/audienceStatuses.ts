import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: audience-api's AudienceStatusEnum. Excludes only id 0 (Temporary),
// a transient DB-insert placeholder with no customer-facing access path.
// id 5 (Deleted) is userVisibility=0 (excluded from list/count queries by
// default) but has a real, documented escape hatch: the "Get audience
// statuses" endpoint's deletedStatusRequired query parameter deliberately
// surfaces it, so it's genuinely API-visible, just not shown by default.
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
