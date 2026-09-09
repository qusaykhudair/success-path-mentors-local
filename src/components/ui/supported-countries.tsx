'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface SupportedCountriesProps {
  locale?: 'en' | 'ar' | 'de';
  className?: string;
}

const copy = {
  en: {
    heading: 'Proudly Supporting Students In',
    activeLabel: 'Current Campus',
    countries: [
      {
        id: 'canada',
        name: 'CANADA',
        marketLabel: 'Main Platform',
        tooltip: 'Go to Main Platform (Canada & USA)',
      },
      {
        id: 'usa',
        name: 'USA',
        marketLabel: 'Main Platform',
        tooltip: 'Go to Main Platform (Canada & USA)',
      },
      {
        id: 'germany',
        name: 'GERMANY',
        marketLabel: 'Germany Platform',
        tooltip: 'Go to Success Path Mentors Germany',
      },
    ],
  },
  ar: {
    heading: 'نفخر بدعم الطلاب في',
    activeLabel: 'الموقع الحالي',
    countries: [
      {
        id: 'canada',
        name: 'كندا',
        marketLabel: 'الموقع الرئيسي',
        tooltip: 'الانتقال إلى الموقع الرئيسي (كندا وأمريكا)',
      },
      {
        id: 'usa',
        name: 'أمريكا',
        marketLabel: 'الموقع الرئيسي',
        tooltip: 'الانتقال إلى الموقع الرئيسي (كندا وأمريكا)',
      },
      {
        id: 'germany',
        name: 'ألمانيا',
        marketLabel: 'موقع ألمانيا',
        tooltip: 'الانتقال إلى منصة ألمانيا',
      },
    ],
  },
  de: {
    heading: 'Wir unterstützen erfolgreich Schüler in',
    activeLabel: 'Aktueller Standort',
    countries: [
      {
        id: 'canada',
        name: 'KANADA',
        marketLabel: 'Hauptplattform',
        tooltip: 'Zur Hauptplattform (Kanada & USA)',
      },
      {
        id: 'usa',
        name: 'USA',
        marketLabel: 'Hauptplattform',
        tooltip: 'Zur Hauptplattform (Kanada & USA)',
      },
      {
        id: 'germany',
        name: 'DEUTSCHLAND',
        marketLabel: 'Deutschland Plattform',
        tooltip: 'Zur Success Path Mentors Deutschland Plattform',
      },
    ],
  },
} as const;

function CanadaFlag() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full object-cover">
      <defs>
        <clipPath id="circleClipCA">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#circleClipCA)">
        {/* Red background */}
        <rect width="100" height="100" fill="#D80027" />
        {/* White center stripe */}
        <rect x="25" width="50" height="100" fill="#FFFFFF" />
        {/* Red Maple Leaf */}
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
    <svg viewBox="0 0 100 100" className="h-full w-full object-cover">
      <defs>
        <clipPath id="circleClipUS">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#circleClipUS)">
        {/* 13 Stripes */}
        <rect width="100" height="100" fill="#FFFFFF" />
        <rect y="0" width="100" height="7.7" fill="#D80027" />
        <rect y="15.4" width="100" height="7.7" fill="#D80027" />
        <rect y="30.8" width="100" height="7.7" fill="#D80027" />
        <rect y="46.2" width="100" height="7.7" fill="#D80027" />
        <rect y="61.5" width="100" height="7.7" fill="#D80027" />
        <rect y="76.9" width="100" height="7.7" fill="#D80027" />
        <rect y="92.3" width="100" height="7.7" fill="#D80027" />
        {/* Blue Canton */}
        <rect width="46" height="53.8" fill="#002B7F" />
        {/* Simplified Stars */}
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

function GermanyFlag() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full object-cover">
      <defs>
        <clipPath id="circleClipDE">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#circleClipDE)">
        {/* Black band */}
        <rect width="100" height="33.34" fill="#000000" />
        {/* Red band */}
        <rect y="33.34" width="100" height="33.34" fill="#DD0000" />
        {/* Gold band */}
        <rect y="66.68" width="100" height="33.34" fill="#FFCE00" />
      </g>
    </svg>
  );
}

function UKFlag() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full object-cover">
      <defs>
        <clipPath id="circleClipUK">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#circleClipUK)">
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

function AustraliaFlag() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full object-cover">
      <defs>
        <clipPath id="circleClipAU">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#circleClipAU)">
        <rect width="100" height="100" fill="#00008B" />
        <g transform="scale(0.5)">
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
        <g fill="#FFFFFF">
          <circle cx="25" cy="75" r="7" />
          <circle cx="75" cy="22" r="3.2" />
          <circle cx="85" cy="42" r="3.2" />
          <circle cx="75" cy="78" r="3.2" />
          <circle cx="62" cy="54" r="3.2" />
          <circle cx="79" cy="58" r="2.2" />
        </g>
      </g>
    </svg>
  );
}

const flagComponents = {
  canada: CanadaFlag,
  usa: USAFlag,
  germany: GermanyFlag,
  uk: UKFlag,
  australia: AustraliaFlag,
} as const;

export function SupportedCountries({
  locale = 'en',
  className,
}: SupportedCountriesProps) {
  const pathname = usePathname() || '';
  const isGermanyMarket = pathname.startsWith('/de');
  const currentCopy = copy[locale] || copy.en;

  // Determine navigation destinations
  const mainSiteHref = locale === 'ar' ? '/ar' : '/en';
  const germanySiteHref =
    locale === 'ar' ? '/de/ar' : locale === 'de' ? '/de/de' : '/de/en';

  return (
    <div className={cn('flex flex-col items-center justify-center text-center', className)}>
      {/* Title with side horizontal lines */}
      <div className="flex w-full items-center justify-center gap-4 sm:gap-6">
        <span className="h-px max-w-[100px] sm:max-w-[160px] flex-1 bg-gradient-to-r from-transparent to-white/30" />
        <h4 className="text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-white/85">
          {currentCopy.heading}
        </h4>
        <span className="h-px max-w-[100px] sm:max-w-[160px] flex-1 bg-gradient-to-l from-transparent to-white/30" />
      </div>

      {/* Interactive Country Badges */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
        {currentCopy.countries.map((country) => {
          const Flag = flagComponents[country.id as keyof typeof flagComponents];
          const isGermanyBadge = country.id === 'germany';
          const isActive = isGermanyBadge ? isGermanyMarket : !isGermanyMarket;
          const href = isGermanyBadge ? germanySiteHref : mainSiteHref;

          return (
            <a
              key={country.id}
              href={href}
              title={country.tooltip}
              aria-label={`${country.name} - ${country.tooltip}`}
              className={cn(
                'group flex flex-col items-center gap-2.5 rounded-2xl p-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950',
                isActive
                  ? 'cursor-default opacity-100'
                  : 'hover:-translate-y-1.5 hover:opacity-100 cursor-pointer'
              )}
            >
              {/* Flag Icon Circle with Active Ring */}
              <div
                className={cn(
                  'relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 p-0.5 shadow-lg transition-all duration-200',
                  isActive
                    ? 'border-accent-400 ring-4 ring-accent-400/25 shadow-accent-500/30'
                    : 'border-white/25 bg-white/5 shadow-black/20 group-hover:border-accent-300 group-hover:scale-105 group-hover:shadow-accent-500/30'
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
                    : 'text-white/90 group-hover:text-accent-300'
                )}
              >
                {country.name}
              </span>

              {/* Market Subtitle */}
              <span className="text-[10px] sm:text-xs font-medium text-white/50 group-hover:text-white/80 transition-colors">
                {country.marketLabel}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
