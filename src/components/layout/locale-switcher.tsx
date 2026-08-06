'use client';

import {
  Globe,
} from 'lucide-react';
import {
  useLocale,
} from 'next-intl';

import {
  usePathname,
  useRouter,
} from '@/i18n/navigation';
import {
  localeLabels,
  routing,
  type Locale,
} from '@/i18n/routing';
import {
  cn,
} from '@/lib/utils';

interface LocaleSwitcherProps {
  variant?:
    | 'default'
    | 'compact';
}

export function LocaleSwitcher({
  variant = 'default',
}: LocaleSwitcherProps) {
  const locale =
    useLocale() as Locale;

  const router =
    useRouter();

  const pathname =
    usePathname();

  const otherLocale =
    routing.locales.find(
      (item) =>
        item !== locale
    ) as Locale;

  const isCompact =
    variant === 'compact';

  const shortLabel =
    otherLocale === 'ar'
      ? 'AR'
      : 'EN';

  const accessibleLabel =
    locale === 'ar'
      ? `التبديل إلى ${localeLabels[otherLocale]}`
      : `Switch to ${localeLabels[otherLocale]}`;

  return (
    <button
      type="button"
      onClick={() =>
        router.replace(
          pathname as never,
          {
            locale:
              otherLocale,
          }
        )
      }
      aria-label={
        accessibleLabel
      }
      title={
        accessibleLabel
      }
      className={cn(
        'group',
        'inline-flex',
        'min-h-touch',
        'items-center',
        'justify-center',
        'gap-1.5',
        'rounded-full',
        'border',
        'border-primary-100',
        'bg-white',
        'font-semibold',
        'text-primary',
        'shadow-sm',
        'transition-all',
        'duration-200',
        'ease-out',
        'hover:-translate-y-0.5',
        'hover:border-accent-300',
        'hover:bg-accent-50',
        'hover:text-accent-700',
        'hover:shadow-md',
        'focus-visible:outline-none',
        'focus-visible:ring-2',
        'focus-visible:ring-accent-400',
        'focus-visible:ring-offset-2',
        'active:translate-y-0',
        'motion-reduce:transition-none',
        'motion-reduce:hover:translate-y-0',
        isCompact
          ? [
              'min-w-touch',
              'px-2.5',
              'py-2',
              'text-caption',
              'sm:min-w-0',
              'sm:px-3.5',
              'sm:text-small',
            ]
          : [
              'px-3.5',
              'py-2',
              'text-small',
            ]
      )}
    >
      <Globe
        size={15}
        strokeWidth={2}
        aria-hidden="true"
        className="
          shrink-0
          text-accent-600
          transition-transform
          duration-300
          ease-out
          group-hover:rotate-12
          motion-reduce:transition-none
        "
      />

      {isCompact ? (
        <>
          <span
            className="
              sm:hidden
            "
          >
            {shortLabel}
          </span>

          <span
            className="
              hidden
              sm:inline
            "
          >
            {
              localeLabels[
                otherLocale
              ]
            }
          </span>
        </>
      ) : (
        localeLabels[
          otherLocale
        ]
      )}
    </button>
  );
}
