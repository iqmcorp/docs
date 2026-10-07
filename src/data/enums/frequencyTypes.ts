import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: audience-api's "Get a static list of Geofarmed audience frequency
// types" endpoint response (confirmed via a live API call). This endpoint is
// backed by StaticDAO.getFrequencyTypes(), a real query against the
// audience.tbls_frequency_types DB table - NOT the misleadingly-named
// FrequencyTypeEnum.java, which defines a different (Total/Daily/Weekly) set
// that this endpoint never actually reads from. Don't trust that enum here.
export const frequencyTypes: EnumValue[] = [
  { id: 1, label: 'Total' },
  { id: 2, label: 'Weekly' },
  { id: 3, label: 'Monthly' },
];
