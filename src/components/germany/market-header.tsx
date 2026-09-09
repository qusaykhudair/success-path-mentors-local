'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowRight, ArrowLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { parseNavigationContext } from '@/lib/market-navigation';
import { Container } from '@/components/ui/container';
import { getMarketConfig } from '@/config/markets';
import { GlobalLanguageSelector } from '@/components/layout/global-language-selector';
import { cn } from '@/lib/utils';

export function MarketHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const marketConfig = getMarketConfig('germany');
  const t = useTranslations('header');
  const tNav = useTranslations('nav');

  const locale = (context.locale as 'de' | 'en' | 'ar') || 'de';
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  // Determine auth locale
  const authLocale = locale === 'ar' ? 'ar' : 'en';

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 15);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change or ESC
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    }
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: `#services`, label: t('services') },
    { href: `#why-spm`, label: t('whySpm') },
    { href: `#teacher-quality`, label: t('teacherQuality') },
    { href: `#how-it-works`, label: t('howItWorks') },
    { href: `#pricing`, label: t('pricing') },
    { href: `#faq`, label: t('faq') },
  ];

  const navLinkClass = cn(
    'group relative inline-flex min-h-touch items-center rounded-lg px-2.5 py-1.5 text-[0.82rem] font-bold text-primary-700 transition-colors duration-150 hover:bg-primary-50 hover:text-primary-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap'
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-all duration-200 backdrop-blur-md',
        isScrolled
          ? 'border-b border-primary-100/90 bg-white/95 shadow-xs'
          : 'border-b border-primary-100/60 bg-white/90'
      )}
    >
      <Container className="flex min-h-[4.25rem] items-center justify-between gap-3 xl:min-h-[4.75rem]">
        {/* Brand Logo */}
        <a
          href={`/de/${locale}`}
          aria-label={tNav('home')}
          className="group inline-flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Image
            src="/images/logo.png"
            alt="Success Path Mentors"
            width={155}
            height={50}
            priority
            sizes="(max-width: 1024px) 125px, 155px"
            className="h-8.5 w-auto object-contain transition-transform duration-200 ease-out group-hover:scale-[1.02] xl:h-9"
          />
        </a>

        {/* Center Desktop Navigation */}
        <nav
          aria-label="Germany market navigation"
          className="hidden items-center justify-center gap-0.5 xl:flex"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass}>
              <span>{link.label}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-2.5 bottom-0 h-0.5 origin-center scale-x-0 rounded-full bg-accent-600 transition-transform duration-200 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* Right Desktop Action Cluster */}
        <div className="hidden items-center gap-2 xl:flex">
          <GlobalLanguageSelector isGermanyContext={true} />

          {/* Login Link */}
          <a
            href={`/${authLocale}/login`}
            className="inline-flex min-h-touch items-center rounded-full border border-primary-200 bg-white px-3.5 py-1.5 text-xs font-bold text-primary-900 shadow-2xs transition-colors hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap"
          >
            {t('login')}
          </a>

          {/* Sign Up Link */}
          <a
            href={`/${authLocale}/register`}
            className="inline-flex min-h-touch items-center rounded-full bg-accent-500/15 border border-accent-500/30 px-3.5 py-1.5 text-xs font-bold text-accent-800 transition-colors hover:bg-accent-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap"
          >
            {t('register')}
          </a>

          {/* WhatsApp / Phone */}
          <a
            href={`https://wa.me/${marketConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Support"
            className="hidden min-h-touch items-center gap-2 rounded-full border border-primary-200 bg-white px-3.5 py-1.5 text-xs font-bold text-primary-900 shadow-2xs transition-colors hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring xl:inline-flex whitespace-nowrap"
          >
            <Phone className="h-3.5 w-3.5 text-accent-600 shrink-0" />
            <span dir="ltr" className="whitespace-nowrap">{marketConfig.contact.whatsappDisplay}</span>
          </a>

          {/* Free Trial CTA */}
          <a
            href={`/de/${locale}/trial`}
            className="inline-flex min-h-touch items-center justify-center gap-1.5 rounded-full bg-accent-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-accent-500 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap"
          >
            <span>{tNav('bookFreeSession')}</span>
            <ArrowIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile / Tablet Controls (< xl) */}
        <div className="flex items-center gap-2 xl:hidden">
          <GlobalLanguageSelector isGermanyContext={true} />

          <a
            href={`/de/${locale}/trial`}
            className="inline-flex min-h-touch items-center justify-center rounded-full bg-accent-600 px-3 py-1.5 text-xs font-bold text-white shadow-2xs hover:bg-accent-500 transition-colors whitespace-nowrap"
          >
            {tNav('bookFreeSession')}
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-primary-200 bg-white p-2 text-primary-900 shadow-2xs hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-x-0 top-[4.25rem] z-50 flex h-[calc(100vh-4.25rem)] flex-col justify-between overflow-y-auto bg-white p-6 shadow-2xl xl:hidden animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-6">
            <nav className="flex flex-col gap-1 border-b border-primary-100 pb-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold text-primary-950 transition-colors hover:bg-primary-50"
                >
                  <span>{link.label}</span>
                  <ArrowIcon className="h-4 w-4 text-primary-400" />
                </a>
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href={`/${authLocale}/login`}
                className="flex min-h-touch w-full items-center justify-center rounded-xl border border-primary-200 bg-white py-3 text-sm font-bold text-primary-900 shadow-xs"
              >
                {t('login')}
              </a>
              <a
                href={`/${authLocale}/register`}
                className="flex min-h-touch w-full items-center justify-center rounded-xl bg-primary-100/70 py-3 text-sm font-bold text-primary-900 shadow-xs"
              >
                {t('register')}
              </a>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-8 flex flex-col gap-3 border-t border-primary-100 pt-6">
            <a
              href={`/de/${locale}/trial`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-touch w-full items-center justify-center gap-2 rounded-2xl bg-accent-600 py-3.5 text-base font-bold text-white shadow-md hover:bg-accent-500"
            >
              <span>{tNav('bookFreeSession')}</span>
              <ArrowIcon className="h-4 w-4" />
            </a>

            <a
              href={`https://wa.me/${marketConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-touch w-full items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 py-3 text-sm font-bold text-emerald-800"
            >
              <Phone className="h-4 w-4 text-emerald-600" />
              <span>WhatsApp: {marketConfig.contact.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
