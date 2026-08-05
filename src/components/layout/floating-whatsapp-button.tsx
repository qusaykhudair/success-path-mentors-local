import { buildGeneralInquiryMessage, buildWhatsAppHref } from '@/lib/whatsapp';

type FloatingWhatsAppLocale = 'en' | 'ar' | 'fr';

const floatingWhatsAppCopy = {
  en: {
    eyebrow: 'Need help?',
    label: 'Chat with us on WhatsApp',
  },
  ar: {
    eyebrow: 'تحتاج مساعدة؟',
    label: 'تواصل معنا عبر واتساب',
  },
  fr: {
    eyebrow: "Besoin d'aide ?",
    label: 'Écrivez-nous sur WhatsApp',
  },
} as const;

interface FloatingWhatsAppButtonProps {
  locale: FloatingWhatsAppLocale;
}

export function FloatingWhatsAppButton({
  locale,
}: FloatingWhatsAppButtonProps) {
  const copy = floatingWhatsAppCopy[locale];
  const href = buildWhatsAppHref(buildGeneralInquiryMessage(locale));

  return (
    <a
      data-nosnippet
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={copy.label}
      title={copy.label}
      className="fixed bottom-[calc(env(safe-area-inset-bottom,0px)+1rem)] left-4 z-[45] inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.3)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(37,211,102,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:left-6 sm:h-14 sm:w-14 lg:bottom-7 lg:left-8"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 fill-current sm:h-8 sm:w-8"
      >
        <path d="M16.03 3.2A12.55 12.55 0 0 0 5.18 22.04L3.2 28.8l6.93-1.82A12.58 12.58 0 1 0 16.03 3.2Zm0 22.82c-1.84 0-3.64-.5-5.2-1.45l-.37-.22-4.11 1.08 1.1-4-.24-.39a10.26 10.26 0 1 1 8.82 4.98Zm5.63-7.68c-.31-.16-1.83-.9-2.11-1.01-.28-.1-.49-.16-.69.16-.2.31-.8 1.01-.98 1.22-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.54a9.35 9.35 0 0 1-1.73-2.15c-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.69-1.66-.95-2.27-.25-.6-.51-.52-.69-.53h-.59c-.21 0-.54.08-.82.39-.28.31-1.08 1.06-1.08 2.58 0 1.52 1.11 2.99 1.26 3.2.16.21 2.18 3.33 5.28 4.67.74.32 1.31.51 1.76.65.74.23 1.41.2 1.94.12.59-.09 1.83-.75 2.09-1.47.26-.73.26-1.35.18-1.48-.07-.13-.28-.2-.59-.36Z" />
      </svg>
    </a>
  );
}
