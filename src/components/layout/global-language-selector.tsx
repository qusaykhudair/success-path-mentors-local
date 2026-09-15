'use client';

import * as React from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { type Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import {
  parseNavigationContext,
  getLanguageSwitchPath,
  getMarketSwitchPath,
} from '@/lib/market-navigation';

function GermanFlag({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={cn("rounded-full overflow-hidden shrink-0 shadow-2xs", className)} aria-hidden="true">
      <defs>
        <clipPath id="glsClipDE">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#glsClipDE)">
        <rect width="100" height="33.34" fill="#1C1C1C" />
        <rect y="33.34" width="100" height="33.34" fill="#D32F2F" />
        <rect y="66.68" width="100" height="33.34" fill="#FFC107" />
      </g>
      <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
    </svg>
  );
}

function EnglishFlag({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={cn("rounded-full overflow-hidden shrink-0 shadow-2xs", className)} aria-hidden="true">
      <defs>
        <clipPath id="glsClipEN">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#glsClipEN)">
        <rect width="100" height="100" fill="#0A3161" />
        <line x1="0" y1="0" x2="100" y2="100" stroke="#FFFFFF" strokeWidth="18" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="#FFFFFF" strokeWidth="18" />
        <line x1="0" y1="0" x2="100" y2="100" stroke="#CC0000" strokeWidth="6" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="#CC0000" strokeWidth="6" />
        <rect x="38" width="24" height="100" fill="#FFFFFF" />
        <rect y="38" width="100" height="24" fill="#FFFFFF" />
        <rect x="43" width="14" height="100" fill="#CC0000" />
        <rect y="43" width="100" height="14" fill="#CC0000" />
      </g>
      <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
    </svg>
  );
}

function ArabicFlag({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={cn("rounded-full overflow-hidden shrink-0 shadow-2xs", className)} aria-hidden="true">
      <defs>
        <clipPath id="glsClipAR">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#glsClipAR)">
        <rect width="100" height="33.34" fill="#1C1C1C" />
        <rect y="33.34" width="100" height="33.34" fill="#FFFFFF" />
        <rect y="66.68" width="100" height="33.34" fill="#007A3D" />
        <polygon points="0,0 48,50 0,100" fill="#CE1126" />
      </g>
      <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
    </svg>
  );
}

const LANGUAGE_FLAGS: Record<string, React.ComponentType<{ className?: string }>> = {
  de: GermanFlag,
  en: EnglishFlag,
  ar: ArabicFlag,
};

interface GlobalLanguageSelectorProps {
  /** If true, the selector is being rendered inside a Germany market route context. */
  isGermanyContext?: boolean;
  /** If true, the selector is rendered with a transparent background over a dark hero section. */
  isTransparent?: boolean;
}

export function GlobalLanguageSelector({
  isGermanyContext = false,
  isTransparent = false,
}: GlobalLanguageSelectorProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const locale = useLocale() as Locale | 'de';
  const router = useRouter();
  const pathname = usePathname();

  // Close dropdown on click outside or escape key
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
    { code: 'de', label: 'Deutsch' },
  ];

  const fallbackLang = { code: 'en', label: 'English' } as const;
  const currentLang = languages.find(lang => lang.code === locale) ?? fallbackLang;
  const CurrentFlag = LANGUAGE_FLAGS[currentLang.code] || Globe;

  const handleSelect = (code: string) => {
    setIsOpen(false);
    if (code === locale) return;

    if (isGermanyContext) {
      // We are in Germany. Use the navigation context to switch language within Germany.
      const context = parseNavigationContext(window.location.pathname);
      const path = getLanguageSwitchPath(context, code as 'de' | 'en' | 'ar');
      window.location.href = path;
    } else {
      // We are in Global (North America).
      if (code === 'de') {
        // Switch to Germany market
        const path = getMarketSwitchPath('germany', { includeDisabled: true });
        window.location.href = path;
      } else {
        // Switch global language (en/ar)
        router.replace(pathname as never, { locale: code as Locale });
      }
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          "group inline-flex h-10 items-center justify-between gap-2 rounded-full border px-3.5 text-sm font-semibold shadow-2xs transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2",
          isTransparent
            ? "border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/20 backdrop-blur-xs"
            : "border-primary-200 bg-white text-primary hover:border-accent-300 hover:bg-accent-50/50 hover:shadow-xs",
          isOpen && (isTransparent ? "border-accent-400 bg-white/20 ring-2 ring-accent-400" : "border-accent-300 bg-accent-50 ring-2 ring-accent-500 ring-offset-2")
        )}
      >
        <div className="flex items-center gap-2">
          <CurrentFlag className="h-4 w-4 shrink-0 rounded-full" />
          <span className="text-sm font-semibold whitespace-nowrap">{currentLang.label}</span>
        </div>
        <ChevronDown 
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isTransparent ? "text-white/70" : "text-primary-400",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      {isOpen && (
        <div className="absolute end-0 z-50 mt-2 w-48 origin-top-right rounded-xl border border-primary-100 bg-white p-1 shadow-lg ring-1 ring-black/5 focus:outline-none animate-in fade-in-0 zoom-in-95">
          <div className="flex flex-col gap-1" role="menu" aria-orientation="vertical">
            {languages.map((lang) => {
              const isActive = lang.code === locale;
              const Flag = LANGUAGE_FLAGS[lang.code] || Globe;
              return (
                <button
                  key={lang.code}
                  role="menuitem"
                  onClick={() => handleSelect(lang.code)}
                  className={cn(
                    "flex min-h-[44px] w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-primary-50 text-primary-900 font-semibold" 
                      : "text-primary-600 hover:bg-primary-50 hover:text-primary-900"
                  )}
                  dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                >
                  <div className="flex items-center gap-2.5">
                    <Flag className="h-5 w-5 shrink-0 rounded-full" />
                    <span className={cn(lang.code === 'ar' && "font-arabic")}>{lang.label}</span>
                  </div>
                  {isActive && <Check className="h-4 w-4 shrink-0 text-accent-600" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
