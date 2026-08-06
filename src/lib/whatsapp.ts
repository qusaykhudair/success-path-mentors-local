import type { SiteLocale } from '@/config/site';

export const WHATSAPP_NUMBER = '16477875999';
export const WHATSAPP_DISPLAY_NUMBER = '+1 647 787 5999';

export type WhatsAppLocale = SiteLocale | 'fr';

export function buildWhatsAppHref(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message.trim())}`;
}

export function buildTrialLessonMessage(
  locale: WhatsAppLocale,
  options: { subject?: string; location?: string } = {}
): string {
  const subject = options.subject?.trim();
  const location = options.location?.trim();

  if (locale === 'ar') {
    return [
      'مرحبًا فريق Success Path Mentors، أود حجز حصة تجريبية مجانية لطالب.',
      subject ? `المادة: ${subject}` : 'المادة: —',
      'الصف الدراسي: —',
      location ? `المدينة/المنطقة: ${location}` : 'المدينة/المنطقة: —',
      'المنهج أو المقاطعة/الولاية: —',
      'الوقت المناسب: —',
      'يرجى تأكيد توفر المدرس ومدة الحصة والخطوة التالية. شكرًا.',
    ].join('\n');
  }

  if (locale === 'fr') {
    return [
      "Bonjour l’équipe de Success Path Mentors, je souhaite réserver une séance d’essai gratuite pour un élève.",
      subject ? `Matière : ${subject}` : 'Matière : —',
      'Niveau scolaire : —',
      location ? `Ville/région : ${location}` : 'Ville/région : —',
      'Programme/province ou État : —',
      'Horaire préféré : —',
      'Merci de confirmer la disponibilité, la durée de la séance et la prochaine étape.',
    ].join('\n');
  }

  return [
    'Hello Success Path Mentors team, I would like to book a free trial lesson for a student.',
    subject ? `Subject: ${subject}` : 'Subject: —',
    'Grade: —',
    location ? `City/area: ${location}` : 'City/area: —',
    'Curriculum or province/state: —',
    'Preferred time: —',
    'Please confirm tutor availability, lesson duration, and the next step. Thank you.',
  ].join('\n');
}

export function buildPackageInquiryMessage(
  locale: SiteLocale,
  plan: string,
  lessons: number
): string {
  if (locale === 'ar') {
    return [
      'مرحبًا فريق Success Path Mentors، أود الاستفسار عن باقة دراسية.',
      `الباقة: ${plan}`,
      `عدد الحصص: ${lessons}`,
      'اسم الطالب: —',
      'الصف والمادة: —',
      'المنهج/المدينة: —',
      'الوقت المناسب: —',
      'يرجى تأكيد السعر والعملة ومدة الحصة وتوفر المدرس وشروط الدفع والإلغاء قبل التسجيل. شكرًا.',
    ].join('\n');
  }

  return [
    'Hello Success Path Mentors team, I would like to ask about a tutoring package.',
    `Package: ${plan}`,
    `Number of lessons: ${lessons}`,
    'Student name: —',
    'Grade and subject: —',
    'Curriculum/city: —',
    'Preferred time: —',
    'Please confirm the price, currency, lesson duration, tutor availability, payment terms, and cancellation terms before enrollment. Thank you.',
  ].join('\n');
}

export function buildGeneralInquiryMessage(
  locale: WhatsAppLocale,
  context?: string
): string {
  if (locale === 'ar') {
    return [
      'مرحبًا فريق Success Path Mentors، أود الاستفسار عن خدمات التدريس الأونلاين.',
      context ? `القسم أو الخدمة: ${context}` : 'القسم أو الخدمة: استفسار عام',
      'الصف الدراسي: —',
      'المادة: —',
      'المدينة والمنهج: —',
      'كيف يمكنكم مساعدتي؟',
    ].join('\n');
  }

  if (locale === 'fr') {
    return [
      "Bonjour l’équipe de Success Path Mentors, je souhaite obtenir des renseignements sur vos services de tutorat en ligne.",
      context ? `Service : ${context}` : 'Service : demande générale',
      'Niveau : —',
      'Matière : —',
      'Ville et programme : —',
      'Pouvez-vous m’indiquer la prochaine étape ?',
    ].join('\n');
  }

  return [
    'Hello Success Path Mentors team, I would like to ask about your online tutoring services.',
    context ? `Section or service: ${context}` : 'Section or service: General inquiry',
    'Grade: —',
    'Subject: —',
    'City and curriculum: —',
    'Please let me know the next step.',
  ].join('\n');
}
