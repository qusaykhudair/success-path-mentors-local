import {
  siteConfig,
} from '@/config/site';
import type {
  ProgrammeFrancaisSubjectKey,
} from '@/types/programme-francais';

const BASE_PATH =
  '/fr/programme-francais';

const WHATSAPP_NUMBER =
  '16477875999';

export const programmeFrancaisRoutes = {
  home:
    BASE_PATH,

  subject(
    subjectKey:
      ProgrammeFrancaisSubjectKey
  ): string {
    return `${BASE_PATH}/${subjectKey}`;
  },

  domain(
    subjectKey:
      ProgrammeFrancaisSubjectKey,
    domainSlug: string
  ): string {
    return `${BASE_PATH}/${subjectKey}/${domainSlug}`;
  },

  mainSite:
    '/en',
} as const;

export function getProgrammeFrancaisBookingHref(
  subjectTitle?: string
): string {
  const configured =
    siteConfig.bookingUrl.trim();

  if (configured) {
    return configured;
  }

  const message =
    subjectTitle
      ? `Bonjour, je souhaite réserver un cours d’essai gratuit en ${subjectTitle}.`
      : 'Bonjour, je souhaite réserver un cours d’essai gratuit pour le Programme français.';

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}
