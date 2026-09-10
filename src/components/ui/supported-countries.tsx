'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface SupportedCountriesProps {
  locale?: 'en' | 'ar' | 'de';
  className?: string;
}

const copy = {
  en: {
    heading: 'Choose Your Learning Region',
    activeLabel: 'Active Campus',
    countries: [
      {
        id: 'canada',
        name: 'Canada',
        marketLabel: 'Main Platform',
        tooltip: 'Go to Main Platform (Canada)',
        href: '/en',
      },
      {
        id: 'usa',
        name: 'USA',
        marketLabel: 'Main Platform',
        tooltip: 'Go to Main Platform (USA)',
        href: '/en',
      },
      {
        id: 'uk',
        name: 'United Kingdom',
        marketLabel: 'English Platform',
        tooltip: 'Go to English Platform (UK)',
        href: '/en',
      },
      {
        id: 'germany',
        name: 'Germany',
        marketLabel: 'Germany Platform',
        tooltip: 'Success Path Mentors Germany Campus',
        href: '/de/en',
      },
    ],
  },
  ar: {
    heading: 'اختر منطقتك التعليمية',
    activeLabel: 'المنصة الحالية',
    countries: [
      {
        id: 'canada',
        name: 'كندا',
        marketLabel: 'الموقع الرئيسي',
        tooltip: 'الانتقال إلى الموقع الرئيسي (كندا)',
        href: '/en',
      },
      {
        id: 'usa',
        name: 'أمريكا',
        marketLabel: 'الموقع الرئيسي',
        tooltip: 'الانتقال إلى الموقع الرئيسي (الولايات المتحدة)',
        href: '/en',
      },
      {
        id: 'uk',
        name: 'المملكة المتحدة',
        marketLabel: 'المنصة الإنجليزية',
        tooltip: 'الانتقال إلى المنصة الإنجليزية (المملكة المتحدة)',
        href: '/en',
      },
      {
        id: 'germany',
        name: 'ألمانيا',
        marketLabel: 'منصة ألمانيا',
        tooltip: 'منصة Success Path Mentors بألمانيا',
        href: '/de/ar',
      },
    ],
  },
  de: {
    heading: 'Wählen Sie Ihre Lernregion',
    activeLabel: 'Aktueller Standort',
    countries: [
      {
        id: 'canada',
        name: 'Kanada',
        marketLabel: 'Hauptplattform',
        tooltip: 'Zur Hauptplattform (Kanada)',
        href: '/en',
      },
      {
        id: 'usa',
        name: 'USA',
        marketLabel: 'Hauptplattform',
        tooltip: 'Zur Hauptplattform (USA)',
        href: '/en',
      },
      {
        id: 'uk',
        name: 'Großbritannien',
        marketLabel: 'Englische Plattform',
        tooltip: 'Zur englischen Hauptplattform (UK)',
        href: '/en',
      },
      {
        id: 'germany',
        name: 'Deutschland',
        marketLabel: 'Deutschland Plattform',
        tooltip: 'Success Path Mentors Deutschland Plattform',
        href: '/de/de',
      },
    ],
  },
} as const;

function CanadaFlag() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full object-cover" aria-hidden="true">
      <defs>
        <clipPath id="gwClipCA">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#gwClipCA)">
        <rect width="100" height="100" fill="#D80027" />
        <rect x="25" width="50" height="100" fill="#FFFFFF" />
        <path
          d="M50 18 L53 30 L61 27 L57 37 L69 38 L62 46 L76 54 L64 57 L66 65 L56 61 L54 66 L52 64 L52 82 L48 82 L48 64 L46 66 L44 61 L34 65 L36 57 L24 54 L38 46 L31 38 L43 37 L39 27 L47 30 Z"
          fill="#D80027"
        />
      </g>
    </svg>
  );
}

function USAFlag() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full object-cover" aria-hidden="true">
      <defs>
        <clipPath id="gwClipUS">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#gwClipUS)">
        <rect width="100" height="100" fill="#FFFFFF" />
        <rect y="0" width="100" height="7.7" fill="#D80027" />
        <rect y="15.4" width="100" height="7.7" fill="#D80027" />
        <rect y="30.8" width="100" height="7.7" fill="#D80027" />
        <rect y="46.2" width="100" height="7.7" fill="#D80027" />
        <rect y="61.5" width="100" height="7.7" fill="#D80027" />
        <rect y="76.9" width="100" height="7.7" fill="#D80027" />
        <rect y="92.3" width="100" height="7.7" fill="#D80027" />
        <rect width="46" height="53.8" fill="#002B7F" />
        <g fill="#FFFFFF">
          <circle cx="11" cy="11" r="2.8" />
          <circle cx="23" cy="11" r="2.8" />
          <circle cx="35" cy="11" r="2.8" />
          <circle cx="17" cy="20" r="2.8" />
          <circle cx="29" cy="20" r="2.8" />
          <circle cx="11" cy="29" r="2.8" />
          <circle cx="23" cy="29" r="2.8" />
          <circle cx="35" cy="29" r="2.8" />
          <circle cx="17" cy="38" r="2.8" />
          <circle cx="29" cy="38" r="2.8" />
          <circle cx="11" cy="47" r="2.8" />
          <circle cx="23" cy="47" r="2.8" />
          <circle cx="35" cy="47" r="2.8" />
        </g>
      </g>
    </svg>
  );
}

function UKFlag() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full object-cover" aria-hidden="true">
      <defs>
        <clipPath id="gwClipUK">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#gwClipUK)">
        <rect width="100" height="100" fill="#00247D" />
        <line x1="0" y1="0" x2="100" y2="100" stroke="#FFFFFF" strokeWidth="18" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="#FFFFFF" strokeWidth="18" />
        <line x1="0" y1="0" x2="100" y2="100" stroke="#CF142B" strokeWidth="6" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="#CF142B" strokeWidth="6" />
        <rect x="38" width="24" height="100" fill="#FFFFFF" />
        <rect y="38" width="100" height="24" fill="#FFFFFF" />
        <rect x="43" width="14" height="100" fill="#CF142B" />
        <rect y="43" width="100" height="14" fill="#CF142B" />
      </g>
    </svg>
  );
}

function GermanyFlag() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full object-cover" aria-hidden="true">
      <defs>
        <clipPath id="gwClipDE">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#gwClipDE)">
        <rect width="100" height="33.34" fill="#000000" />
        <rect y="33.34" width="100" height="33.34" fill="#DD0000" />
        <rect y="66.68" width="100" height="33.34" fill="#FFCE00" />
      </g>
    </svg>
  );
}

const flagComponents = {
  canada: CanadaFlag,
  usa: USAFlag,
  uk: UKFlag,
  germany: GermanyFlag,
} as const;

export function SupportedCountries({
  locale = 'de',
  className,
}: SupportedCountriesProps) {
  const pathname = usePathname() || '';
  const isGermanyMarket = pathname.startsWith('/de');
  const currentCopy = copy[locale] || copy.de;

  // Dynamic Germany destination based on active locale
  const germanyHref =
    locale === 'ar' ? '/de/ar' : locale === 'en' ? '/de/en' : '/de/de';

  return (
    <section
      aria-label={currentCopy.heading}
      className={cn(
        'relative border-y border-white/10 bg-primary-950 py-8 sm:py-10 text-white',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Eyebrow / Heading with subtle side lines */}
        <div className="flex w-full items-center justify-center gap-4 sm:gap-6">
          <span className="h-px max-w-[80px] sm:max-w-[140px] flex-1 bg-gradient-to-r from-transparent to-white/30" />
          <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-white/85">
            {currentCopy.heading}
          </h3>
          <span className="h-px max-w-[80px] sm:max-w-[140px] flex-1 bg-gradient-to-l from-transparent to-white/30" />
        </div>

        {/* 4 Interactive Country Badges (2x2 on mobile, 4 on desktop) */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {currentCopy.countries.map((country) => {
            const Flag = flagComponents[country.id as keyof typeof flagComponents];
            const isGermanyBadge = country.id === 'germany';
            const isActive = isGermanyBadge && isGermanyMarket;
            const destination = isGermanyBadge ? germanyHref : country.href;

            return (
              <a
                key={country.id}
                href={destination}
                title={country.tooltip}
                aria-label={`${country.name} - ${country.tooltip}`}
                className={cn(
                  'group flex min-h-[44px] flex-col items-center justify-center gap-2 rounded-2xl border p-3.5 sm:p-4 text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950',
                  isActive
                    ? 'border-accent-400/80 bg-accent-500/10 ring-2 ring-accent-400/30 shadow-lg shadow-accent-500/10 cursor-default'
                    : 'border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-accent-400/60 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-black/20 cursor-pointer'
                )}
              >
                {/* Circular Flag Badge */}
                <div
                  className={cn(
                    'relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 p-0.5 shadow-md transition-all duration-200',
                    isActive
                      ? 'border-accent-400 ring-2 ring-accent-400/30 shadow-accent-500/30 scale-105'
                      : 'border-white/25 bg-white/5 group-hover:border-accent-300 group-hover:scale-105 group-hover:shadow-accent-500/20'
                  )}
                >
                  <Flag />
                  {isActive && (
                    <span
                      className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 ring-2 ring-primary-950"
                      title={currentCopy.activeLabel}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                  )}
                </div>

                {/* Country Name */}
                <span
                  className={cn(
                    'text-xs sm:text-sm font-extrabold tracking-wider transition-colors',
                    isActive
                      ? 'text-accent-300'
                      : 'text-white group-hover:text-accent-300'
                  )}
                >
                  {country.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
