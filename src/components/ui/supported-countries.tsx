import { cn } from '@/lib/utils';

interface SupportedCountriesProps {
  locale?: 'en' | 'ar' | 'de';
  className?: string;
}

const copy = {
  en: {
    heading: 'Proudly Supporting Students In',
    countries: [
      { id: 'canada', name: 'CANADA' },
      { id: 'usa', name: 'USA' },
      { id: 'uk', name: 'UK' },
      { id: 'australia', name: 'AUSTRALIA' },
    ],
  },
  ar: {
    heading: 'نفخر بدعم الطلاب في',
    countries: [
      { id: 'canada', name: 'كندا' },
      { id: 'usa', name: 'الولايات المتحدة' },
      { id: 'uk', name: 'المملكة المتحدة' },
      { id: 'australia', name: 'أستراليا' },
    ],
  },
  de: {
    heading: 'Wir unterstützen erfolgreich Schüler in',
    countries: [
      { id: 'canada', name: 'KANADA' },
      { id: 'usa', name: 'USA' },
      { id: 'uk', name: 'UK' },
      { id: 'australia', name: 'AUSTRALIEN' },
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

function UKFlag() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full object-cover">
      <defs>
        <clipPath id="circleClipUK">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#circleClipUK)">
        {/* Blue field */}
        <rect width="100" height="100" fill="#00247D" />
        {/* White saltire */}
        <line x1="0" y1="0" x2="100" y2="100" stroke="#FFFFFF" strokeWidth="18" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="#FFFFFF" strokeWidth="18" />
        {/* Red saltire */}
        <line x1="0" y1="0" x2="100" y2="100" stroke="#CF142B" strokeWidth="6" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="#CF142B" strokeWidth="6" />
        {/* White cross */}
        <rect x="38" width="24" height="100" fill="#FFFFFF" />
        <rect y="38" width="100" height="24" fill="#FFFFFF" />
        {/* Red St George Cross */}
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
        {/* Blue field */}
        <rect width="100" height="100" fill="#00008B" />
        {/* Mini Union Jack canton in top left */}
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
        {/* Commonwealth 7-point Star */}
        <g fill="#FFFFFF">
          <circle cx="25" cy="75" r="7" />
          {/* Southern Cross stars */}
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
  uk: UKFlag,
  australia: AustraliaFlag,
} as const;

export function SupportedCountries({
  locale = 'en',
  className,
}: SupportedCountriesProps) {
  const currentCopy = copy[locale] || copy.en;

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

      {/* 4 Circular Country Badges */}
      <div className="mt-7 flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
        {currentCopy.countries.map((country) => {
          const Flag = flagComponents[country.id as keyof typeof flagComponents];
          return (
            <div
              key={country.id}
              className="group flex flex-col items-center gap-2.5 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative flex h-13 w-13 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-white/25 bg-white/10 p-0.5 shadow-lg shadow-black/20 transition-all duration-200 group-hover:border-accent-400 group-hover:shadow-accent-500/20">
                <Flag />
              </div>
              <span className="text-xs sm:text-sm font-extrabold tracking-wider text-white group-hover:text-accent-300 transition-colors">
                {country.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
