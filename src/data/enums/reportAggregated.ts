import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: inline description of the `reportAggregated` field in reports-api.mdx
// (not backed by a dedicated /static/ list endpoint)
export const reportAggregated: EnumValue[] = [
  { id: 0, label: 'Disaggregated (daily)' },
  { id: 1, label: 'Aggregated' },
];
