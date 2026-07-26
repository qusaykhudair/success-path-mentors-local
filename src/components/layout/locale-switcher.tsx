
'use client';

import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing, localeLabels, type Locale } from '@/i18n/routing';

export function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const otherLocale = routing.locales.find((l) => l !== locale) as Locale;

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: otherLocale })}
      aria-label={`Switch to ${localeLabels[otherLocale]}`}
      className="group inline-flex items-center gap-1.5 rounded-full border border-primary-100 bg-white px-3.5 py-2 text-small font-semibold text-primary shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent-300 hover:bg-accent-50 hover:text-accent-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <Globe
        size={15}
        strokeWidth={2}
        aria-hidden="true"
        className="shrink-0 text-accent-600 transition-transform duration-300 ease-out group-hover:rotate-12"
      />
      {localeLabels[otherLocale]}
    </button>
  );
}