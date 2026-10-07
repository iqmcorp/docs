import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: audience-api's FrequencyTypeEnum (all values currently active).
// Note: both the live API's own Swagger example and this repo's previous
// "Frequency type list" example response had this wrong (id 2 labeled
// "Weekly" and a fabricated id 3 "Monthly" that doesn't exist in the enum) -
// verified directly against FrequencyTypeEnum.java to get the real mapping.
export const frequencyTypes: EnumValue[] = [
  { id: 1, label: 'Total' },
  { id: 2, label: 'Daily' },
  { id: 3, label: 'Weekly' },
];
