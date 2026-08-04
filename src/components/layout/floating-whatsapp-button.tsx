import {
  MessageCircle,
} from 'lucide-react';

const WHATSAPP_NUMBER =
  '16477875999';

type FloatingWhatsAppLocale =
  | 'en'
  | 'ar'
  | 'fr';

const floatingWhatsAppCopy = {
  en: {
    label:
      'Contact us on WhatsApp',
    compactLabel:
      'WhatsApp',
    message:
      'Hello, I would like to ask about Mustafa Academy tutoring services.',
  },
  ar: {
    label:
      'تواصل معنا عبر واتساب',
    compactLabel:
      'واتساب',
    message:
      'مرحبًا، أود الاستفسار عن خدمات التدريس في أكاديمية مصطفى.',
  },
  fr: {
    label:
      'Nous contacter sur WhatsApp',
    compactLabel:
      'WhatsApp',
    message:
      'Bonjour, je souhaite obtenir des renseignements sur les services de tutorat de Mustafa Academy.',
  },
} as const;

interface FloatingWhatsAppButtonProps {
  locale:
    FloatingWhatsAppLocale;
}

export function FloatingWhatsAppButton({
  locale,
}: FloatingWhatsAppButtonProps) {
  const copy =
    floatingWhatsAppCopy[
      locale
    ];

  const href =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      copy.message
    )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={copy.label}
      title={copy.label}
      data-nosnippet
      className="
        group
        fixed
        bottom-[calc(env(safe-area-inset-bottom,0px)+1rem)]
        right-4
        z-[45]
        inline-flex
        min-h-12
        items-center
        justify-center
        gap-2.5
        rounded-full
        border
        border-white/80
        bg-[#25D366]
        px-4
        py-3
        text-small
        font-black
        text-[#062D18]
        shadow-[0_12px_34px_rgba(6,45,24,0.24)]
        transition-[transform,background-color,box-shadow]
        duration-200
        hover:-translate-y-0.5
        hover:bg-[#20C45C]
        hover:shadow-[0_16px_38px_rgba(6,45,24,0.30)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#071426]
        focus-visible:ring-offset-2
        motion-reduce:transition-none
        motion-reduce:hover:translate-y-0
        sm:right-6
        sm:px-5
      "
    >
      <span
        aria-hidden="true"
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-white
          text-[#128C4A]
        "
      >
        <MessageCircle
          className="h-5 w-5"
          strokeWidth={2.2}
        />
      </span>

      <span className="sm:hidden">
        {copy.compactLabel}
      </span>

      <span className="hidden sm:inline">
        {copy.label}
      </span>
    </a>
  );
}
