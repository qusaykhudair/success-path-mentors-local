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
    message:
      'Hello, I would like to ask about Mustafa Academy tutoring services.',
  },
  ar: {
    label:
      'تواصل معنا عبر واتساب',
    message:
      'مرحبًا، أود الاستفسار عن خدمات التدريس في أكاديمية مصطفى.',
  },
  fr: {
    label:
      'Nous contacter sur WhatsApp',
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
    <div
      data-nosnippet
      className="
        fixed
        bottom-[calc(env(safe-area-inset-bottom,0px)+1.1rem)]
        right-4
        z-[45]
        flex
        flex-col
        items-end
        gap-2
        sm:right-6
      "
    >
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          max-w-[13rem]
          rounded-full
          border
          border-white/80
          bg-white/95
          px-3.5
          py-2
          text-[0.72rem]
          font-bold
          leading-4
          text-[#166534]
          opacity-90
          shadow-[0_8px_24px_rgba(7,20,38,0.14)]
          backdrop-blur-md
          motion-safe:animate-[whatsapp-hint-float_3.4s_ease-in-out_infinite]
        "
      >
        {copy.label}
      </span>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={copy.label}
        title={copy.label}
        className="
          group
          relative
          isolate
          inline-flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border-2
          border-white
          bg-[#25D366]
          text-white
          shadow-[0_14px_34px_rgba(18,140,74,0.34)]
          transition-[transform,background-color,box-shadow]
          duration-200
          hover:-translate-y-1
          hover:scale-[1.04]
          hover:bg-[#20C45C]
          hover:shadow-[0_18px_42px_rgba(18,140,74,0.42)]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#071426]
          focus-visible:ring-offset-2
          motion-reduce:transition-none
          motion-reduce:hover:translate-y-0
          motion-reduce:hover:scale-100
          sm:h-[3.75rem]
          sm:w-[3.75rem]
        "
      >
        <span
          aria-hidden="true"
          className="
            absolute
            inset-0
            -z-10
            rounded-full
            bg-[#25D366]/35
            motion-safe:animate-ping
          "
        />

        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="
            h-7
            w-7
            transition-transform
            duration-200
            group-hover:rotate-[-4deg]
            group-hover:scale-105
          "
        >
          <path d="M27 15.4a11 11 0 0 1-16.2 9.7L5 27l1.9-5.6A11 11 0 1 1 27 15.4Z" />
          <path d="M11.3 10.5c.4-.7.8-.7 1.2-.7h.5c.2 0 .5.1.6.5l1.1 2.6c.1.3.1.6-.1.8l-.9 1c-.2.2-.2.5 0 .8.7 1.3 1.8 2.4 3.1 3.1.3.2.6.2.8 0l1.1-1.3c.2-.3.5-.3.8-.2l2.5 1.2c.3.2.5.4.5.7 0 .5-.2 1.8-1 2.5-.8.7-1.9 1.1-3.2.8-1.5-.3-3.4-1.1-5.5-3-2-1.8-3.2-4-3.6-5.6-.3-1.2.1-2.3.7-3.2.4-.5.8-.8 1.4-1Z" />
        </svg>
      </a>
    </div>
  );
}
