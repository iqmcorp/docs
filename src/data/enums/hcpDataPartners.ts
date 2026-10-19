import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: DataPartnersEnum.java (planner-api) - a different, HCP-specific set
// from the shared dataPartners.ts (audience-api's Matched audience data
// partners). Excludes id 10 (IQVIA), which is inactive here. ABM audience
// blocks are further restricted to only 7 (Healthlink) and 12 (RevOptimal).
export const hcpDataPartners: EnumValue[] = [
  { id: 7, label: 'Healthlink ID' },
  { id: 8, label: 'Data360 ID' },
  { id: 11, label: 'Purple Lab ID' },
  { id: 12, label: 'RevOptimal ID' },
];
