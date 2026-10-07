import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: master-api's "Get channels for inventory" endpoint
// (MasterSegmentV3Controller.getMasterSegmentChannel), backed by the
// generic segment lookup for SegmentNameEnum.CHANNEL - DB-driven, not a
// fixed Java enum, so this list isn't guaranteed exhaustive. Verified
// against the controller's own current Swagger example, which has an
// "Unknown" entry this repo's docs example was missing.
export const channelTypes: EnumValue[] = [
  { id: 21100001, label: 'App' },
  { id: 21100002, label: 'OTT App' },
  { id: 21100003, label: 'Web' },
  { id: 21199999, label: 'Unknown' },
];
