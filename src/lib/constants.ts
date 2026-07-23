export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.mustafaacademy.com';

export const ORGANIZATION = {
  name: 'Mustafa Academy',
  legalName: 'Success Path Mentors',
  logo: `${SITE_URL}/images/logo.png`,
  sameAs: [] as string[], // populate with real social profile URLs when provided
};

export const CONTACT = {
  whatsapp: '', // to be provided
  email: '', // to be provided
};
