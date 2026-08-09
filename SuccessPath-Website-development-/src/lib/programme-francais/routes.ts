import {
  siteConfig,
} from '@/config/site';
import type {
  ProgrammeFrancaisSubjectKey,
} from '@/types/programme-francais';
import { buildTrialLessonMessage, buildWhatsAppHref } from '@/lib/whatsapp';

const BASE_PATH =
  '/fr/programme-francais';


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

  return buildWhatsAppHref(
    buildTrialLessonMessage('fr', { subject: subjectTitle ?? 'Programme français' })
  );
}
