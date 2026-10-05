import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Get audience selection methods list" response in hcp.mdx (HCP planner)
export const audienceSelectionMethods: EnumValue[] = [
  { id: 1, label: 'Filter audience' },
  { id: 2, label: 'Upload NPI list' },
  { id: 3, label: 'Existing audience' },
];
