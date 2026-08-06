'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

type BackToTopLocale = 'en' | 'ar' | 'fr';

const labels: Record<BackToTopLocale, string> = {
  en: 'Back to top',
  ar: 'العودة إلى أعلى الصفحة',
  fr: 'Retour en haut',
};

interface BackToTopButtonProps {
  locale: BackToTopLocale;
}

export function BackToTopButton({ locale }: BackToTopButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 480);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={labels[locale]}
      title={labels[locale]}
      className={`fixed bottom-[calc(env(safe-area-inset-bottom,0px)+1rem)] right-4 z-[44] inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-primary-900 shadow-[0_10px_28px_rgba(7,20,38,0.14)] backdrop-blur-md transition-[opacity,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(7,20,38,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 sm:right-6 sm:h-14 sm:w-14 lg:bottom-7 lg:right-8 ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} />
    </button>
  );
}
