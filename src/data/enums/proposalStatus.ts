import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Proposal status list" response in planner-api.mdx
export const proposalStatus: EnumValue[] = [
  { id: 1, label: 'Converted' },
  { id: 2, label: 'Draft' },
  { id: 3, label: 'Expired' },
  { id: 4, label: 'Failed' },
  { id: 5, label: 'Processing' },
  { id: 6, label: 'Ready' },
];
