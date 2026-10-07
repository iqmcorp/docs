import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: planner-api's shared com.iqm.util...FileTypeEnum, as referenced by
// its 4 download endpoints (HCP plan, political proposal, political plan,
// generic proposal). Each endpoint accepts a different subset of these -
// confirmed per-endpoint via its own validation logic, not just the Swagger
// text (one endpoint's description undersells what it actually accepts).
// Distinct from insights-api's own, separately-defined fileTypes.ts, even
// though the id/label conventions happen to coincide for 1-3.
export const plannerFileTypes: EnumValue[] = [
  { id: 1, label: 'Excel' },
  { id: 2, label: 'CSV' },
  { id: 3, label: 'PDF' },
];
