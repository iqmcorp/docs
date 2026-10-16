import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: campaign-api's DeviceTypeEnum.java. Validated against the
// master_device_type table, but there's no list endpoint for it - this is a
// distinct, smaller set from master-api's "Get device type" (2030000x IDs),
// which is used by Planner (HCP/Political), not by campaign-api.
export const campaignDeviceTypes: EnumValue[] = [
  { id: 11, label: 'Mobile' },
  { id: 12, label: 'Tablet' },
  { id: 13, label: 'Connected TV' },
  { id: 15, label: 'Desktop' },
];
