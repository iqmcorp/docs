import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: report-api ReportBaseDetailVO.reportAggregated (sent as the string "0" or "1")
export const reportAggregated: EnumValue[] = [
  { id: 0, label: 'Group rows by every dimension' },
  { id: 1, label: 'Aggregate over the first dimension (left out of the grouping)' },
];
