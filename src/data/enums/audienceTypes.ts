import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: audience-api's AudienceTypeEnum (all values currently active). The
// "Audience type list" endpoint in static-audience.mdx is filtered by the
// caller's vertical, so its own example response won't show every type below.
export const audienceTypes: EnumValue[] = [
  { id: 1, label: 'Matched audience' },
  { id: 2, label: 'Segmented audience' },
  { id: 3, label: 'Retargeted audience' },
  { id: 4, label: 'Geofarmed audience' },
  { id: 5, label: 'Contextual audience' },
  { id: 6, label: 'Lookalike audience' },
  { id: 7, label: 'Campaign audience' },
  { id: 8, label: 'Pre-bid audience' },
  { id: 9, label: 'Account Based Marketing (ABM) audience' },
  { id: 10, label: 'Custom Voter Audience (CVA)' },
  { id: 11, label: 'Integrated Care Team (ICT) audience' },
  { id: 12, label: 'Power Segment audience' },
];
