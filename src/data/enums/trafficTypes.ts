import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: master-api's "Get traffic types" endpoint (operationId
// getTrafficTypes), confirmed via a live API call. Distinct from
// channelTypes.ts - a different taxonomy (different IDs) that happens to
// share some label text (e.g. "App", "Web").
export const trafficTypes: EnumValue[] = [
  { id: 11, label: 'App' },
  { id: 14, label: 'CTV' },
  { id: 13, label: 'OTT' },
  { id: 12, label: 'Web' },
];
