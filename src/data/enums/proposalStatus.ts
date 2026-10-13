import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: ProposalStatusEnum.java. id 7 (IO Created) is HCP-only - it's the
// terminal status HCPCampaignService sets on a successful publish, parallel to
// how Political/generic proposals terminate at id 1 (Converted) instead.
export const proposalStatus: EnumValue[] = [
  { id: 1, label: 'Converted' },
  { id: 2, label: 'Draft' },
  { id: 3, label: 'Expired' },
  { id: 4, label: 'Failed' },
  { id: 5, label: 'Processing' },
  { id: 6, label: 'Ready' },
  { id: 7, label: 'IO Created' },
];
