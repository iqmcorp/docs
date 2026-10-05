import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "AI-Based Optimization Campaign Goals and Objectives" response in campaign-api.mdx
// (the "goals" half of that response is not fully enumerated in the docs, so only
// the "objectives" enum is built here — see commit message / anomaly report)
export const campaignObjectives: EnumValue[] = [
  { id: 1, label: 'Awareness' },
  { id: 2, label: 'Consideration' },
  { id: 3, label: 'Conversion' },
];
