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

interface GlobalLanguageSelectorProps {
  /** If true, the selector is being rendered inside a Germany market route context. */
  isGermanyContext?: boolean;
}

export function GlobalLanguageSelector({ isGermanyContext = false }: GlobalLanguageSelectorProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const locale = useLocale() as Locale | 'de';
  const router = useRouter();
  const pathname = usePathname();

  // Close dropdown on click outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
    { code: 'de', label: 'Deutsch' },
  ];

  const currentLabel = languages.find(lang => lang.code === locale)?.label || 'English';

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
          "group inline-flex min-h-[44px] items-center justify-between gap-2 rounded-full border border-primary-200 bg-white px-4 py-2 font-medium text-primary shadow-sm transition-all duration-200 ease-out",
          "hover:border-accent-300 hover:bg-accent-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2",
          isOpen && "border-accent-300 bg-accent-50 ring-2 ring-accent-500 ring-offset-2"
        )}
      >
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 shrink-0 text-accent-600 transition-transform duration-300 group-hover:rotate-12" />
          <span className="text-sm">{currentLabel}</span>
        </div>
        <ChevronDown 
          className={cn(
            "h-4 w-4 shrink-0 text-primary-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-xl border border-primary-100 bg-white p-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="flex flex-col gap-1" role="menu" aria-orientation="vertical">
            {languages.map((lang) => {
              const isActive = lang.code === locale;
              return (
                <button
                  key={lang.code}
                  role="menuitem"
                  onClick={() => handleSelect(lang.code)}
                  className={cn(
                    "flex min-h-[44px] w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-primary-50 text-primary-900" 
                      : "text-primary-600 hover:bg-primary-50 hover:text-primary-900"
                  )}
                  dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                >
                  <span className={cn(lang.code === 'ar' && "font-arabic")}>{lang.label}</span>
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
