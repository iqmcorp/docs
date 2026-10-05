import type { EnumValue } from '@site/src/components/EnumWidget';

// Source: "Data formats list for Matched audience" response in audience-api.mdx
export const dataFormats: EnumValue[] = [
  { id: 1, label: 'Raw' },
  { id: 2, label: 'Hashed (MD5)' },
  { id: 3, label: 'Hashed (SHA1)' },
  { id: 4, label: 'Hashed (SHA256)' },
  { id: 5, label: 'Hashed (SHA512)' },
  { id: 6, label: 'Hashed (other)' },
];
