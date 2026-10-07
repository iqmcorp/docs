import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: master-api's "Get channels for inventory" endpoint
// (MasterSegmentV3Controller.getMasterSegmentChannel), confirmed via a live
// API call. This is backed by a generic DB-driven segment lookup
// (SegmentNameEnum.CHANNEL), not a fixed Java enum, so this list isn't
// guaranteed exhaustive. Note: the controller's own Swagger example
// includes a 4th "Unknown" (id 21199999) entry that the live response does
// NOT actually return - don't trust that annotation over a real call.
export const channelTypes: EnumValue[] = [
  { id: 21100001, label: 'App' },
  { id: 21100002, label: 'OTT App' },
  { id: 21100003, label: 'Web' },
];
