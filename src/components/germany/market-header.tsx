'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { parseNavigationContext } from '@/lib/market-navigation';
import { Container } from '@/components/ui/container';
import { getMarketConfig } from '@/config/markets';
import { GlobalLanguageSelector } from '@/components/layout/global-language-selector';
import { cn } from '@/lib/utils';

export function MarketHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>('tutoring');
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const marketConfig = getMarketConfig('germany');
  const t = useTranslations('header');
  const tNav = useTranslations('nav');

  const locale = (context.locale as 'de' | 'en' | 'ar') || 'de';
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const isHomePage = /^\/de(\/(de|en|ar))?\/?$/.test(pathname);
  const isTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    function handleScroll() {
      if (!isHomePage) {
        setIsScrolled(true);
        return;
      }
      setIsScrolled(window.scrollY > 15);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, isHomePage]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Handle ESC key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
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

  const handleDropdownEnter = (id: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(id);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Nav categories
  const tutoringSublinks = [
    { href: `/de/${locale}/tutoring/one-to-one`, label: t('tutoringOneToOne', { fallback: 'One-to-One Tutoring' }), desc: locale === 'de' ? 'Maximaler individueller Fokus' : locale === 'ar' ? 'تركيز فردي كامل' : 'Personal 1-to-1 attention' },
    { href: `/de/${locale}/tutoring/small-groups`, label: t('tutoringSmallGroups', { fallback: 'Small Groups (Up to 3)' }), desc: locale === 'de' ? 'Bis zu 3 Schüler, beste Betreuung' : locale === 'ar' ? 'حتى 3 طلاب فقط' : 'Strictly up to 3 learners' },
    // Language level specific here
    { href: `/de/${locale}/tutoring/language-levels`, label: t('tutoringLanguageLevels', { fallback: 'Language Support by Level' }), desc: locale === 'de' ? 'Orientierung an Sprachstufen A1–C2' : locale === 'ar' ? 'تدرج مستويات A1–C2' : 'Language level-specific guidance' },
  ];

  const languagesSublinks = [
    { href: `/de/${locale}/languages/german`, label: t('langGerman', { fallback: 'German' }), desc: locale === 'de' ? 'Schule, Alltag & telc/Goethe' : locale === 'ar' ? 'مناهج المدارس وامتحانات Goethe/telc' : 'School, conversation & exams' },
    { href: `/de/${locale}/languages/english`, label: t('langEnglish', { fallback: 'English' }), desc: locale === 'de' ? 'Schulenglisch & Konversation' : locale === 'ar' ? 'تقوية المدارس والمحادثة' : 'School support & fluency' },
    { href: `/de/${locale}/languages/french`, label: t('langFrench', { fallback: 'French' }), desc: locale === 'de' ? '2. Fremdsprache & DELF' : locale === 'ar' ? 'اللغة الثانية وامتحانات DELF' : 'School French & DELF prep' },
    { href: `/de/${locale}/languages/arabic`, label: t('langArabic', { fallback: 'Arabic' }), desc: locale === 'de' ? 'Herkunftssprache & Lesen' : locale === 'ar' ? 'لأبناء الجاليات والقراءة والكتابة' : 'Heritage literacy & basics' },
  ];

  const schoolSublinks = [
    { href: `/de/${locale}/school/grades-1-6`, label: t('schoolGrades1To6', { fallback: 'Grades 1–6' }), desc: locale === 'de' ? 'Grundschule & Orientierungsstufe' : locale === 'ar' ? 'المرحلة الابتدائية والتأسيس' : 'Foundation years & math basics' },
    { href: `/de/${locale}/school/grades-7-9`, label: t('schoolGrades7To9', { fallback: 'Grades 7–9' }), desc: locale === 'de' ? 'Mittelstufe & Lernlücken schließen' : locale === 'ar' ? 'المرحلة المتوسطة وسد الفجوات' : 'Middle years & gap recovery' },
    { href: `/de/${locale}/school/grades-10-12`, label: t('schoolGrades10To12', { fallback: 'Grades 10–12' }), desc: locale === 'de' ? 'Oberstufe & Abiturvorbereitung' : locale === 'ar' ? 'المرحلة الثانوية والشهادات' : 'Senior school & graduation' },
  ];

  const toggleMobileAccordion = (id: string) => {
    setMobileAccordion(mobileAccordion === id ? null : id);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-200',
        isHomePage && '-mb-[4.75rem] xl:-mb-[5.25rem]',
        isTransparent
          ? 'bg-transparent border-b border-transparent shadow-none'
          : 'border-b border-primary-100/90 bg-white/95 backdrop-blur-md shadow-xs'
      )}
    >
      <Container className="flex min-h-[4.75rem] items-center justify-between gap-2 md:gap-3 xl:gap-4 xl:min-h-[5.25rem]">
        {/* Brand Logo */}
        <Link
          href={`/de/${locale}`}
          aria-label={tNav('home')}
          className="group inline-flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Image
            src="/images/Success_Path_Mentors_Europe_Logo_Transparent.png"
            alt="Success Path Mentors Europe"
            width={320}
            height={110}
            priority
            sizes="(max-width: 1024px) 240px, 320px"
            className={cn(
              "h-10 sm:h-12 md:h-11 lg:h-14 xl:h-[4.5rem] w-auto object-contain transition-all duration-300 ease-out group-hover:scale-[1.02]",
              isTransparent && "brightness-0 invert drop-shadow-sm"
            )}
          />
        </Link>

        {/* Center Desktop Navigation (visible on md+ including 125% zoom) */}
        <nav
          aria-label="Germany market navigation"
          className="hidden items-center justify-center gap-0.5 md:flex xl:gap-1"
        >
          {/* Dropdown 1: Tutoring Services */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter('tutoring')}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === 'tutoring' ? null : 'tutoring')}
              aria-expanded={activeDropdown === 'tutoring'}
              aria-haspopup="menu"
              className={cn(
                'group inline-flex min-h-touch items-center gap-1 rounded-lg px-1.5 md:px-2 xl:px-2.5 py-1.5 text-[0.72rem] md:text-[0.76rem] xl:text-[0.82rem] font-bold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap',
                isTransparent
                  ? (activeDropdown === 'tutoring' ? 'bg-white/20 text-accent-300' : 'text-white/95 hover:bg-white/10 hover:text-white')
                  : (activeDropdown === 'tutoring' ? 'bg-primary-50 text-accent-700' : 'text-primary-800 hover:bg-primary-50 hover:text-primary-950')
              )}
            >
              <span>{t('tutoringServices', { fallback: 'Tutoring Services' })}</span>
              <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-150', isTransparent ? (activeDropdown === 'tutoring' ? 'rotate-180 text-accent-300' : 'text-white/70') : (activeDropdown === 'tutoring' ? 'rotate-180 text-accent-600' : 'text-primary-600'))} />
            </button>

            {activeDropdown === 'tutoring' && (
              <div
                role="menu"
                className="absolute start-0 top-full mt-1.5 w-72 rounded-2xl border border-primary-100 bg-white p-2 shadow-xl animate-in fade-in-50 zoom-in-95 duration-100"
              >
                {tutoringSublinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    role="menuitem"
                    className="flex flex-col rounded-xl px-3.5 py-2.5 transition-colors hover:bg-primary-50 focus-visible:bg-primary-50 focus-visible:outline-none"
                  >
                    <span className="text-xs font-bold text-primary-950">{sub.label}</span>
                    <span className="text-[0.72rem] text-primary-500">{sub.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Dropdown 2: Languages */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter('languages')}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === 'languages' ? null : 'languages')}
              aria-expanded={activeDropdown === 'languages'}
              aria-haspopup="menu"
              className={cn(
                'group inline-flex min-h-touch items-center gap-1 rounded-lg px-1.5 md:px-2 xl:px-2.5 py-1.5 text-[0.72rem] md:text-[0.76rem] xl:text-[0.82rem] font-bold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap',
                isTransparent
                  ? (activeDropdown === 'languages' ? 'bg-white/20 text-accent-300' : 'text-white/95 hover:bg-white/10 hover:text-white')
                  : (activeDropdown === 'languages' ? 'bg-primary-50 text-accent-700' : 'text-primary-800 hover:bg-primary-50 hover:text-primary-950')
              )}
            >
              <span>{t('languages', { fallback: 'Languages' })}</span>
              <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-150', isTransparent ? (activeDropdown === 'languages' ? 'rotate-180 text-accent-300' : 'text-white/70') : (activeDropdown === 'languages' ? 'rotate-180 text-accent-600' : 'text-primary-600'))} />
            </button>

            {activeDropdown === 'languages' && (
              <div
                role="menu"
                className="absolute start-0 top-full mt-1.5 w-72 rounded-2xl border border-primary-100 bg-white p-2 shadow-xl animate-in fade-in-50 zoom-in-95 duration-100"
              >
                {languagesSublinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    role="menuitem"
                    className="flex flex-col rounded-xl px-3.5 py-2.5 transition-colors hover:bg-primary-50 focus-visible:bg-primary-50 focus-visible:outline-none"
                  >
                    <span className="text-xs font-bold text-primary-950">{sub.label}</span>
                    <span className="text-[0.72rem] text-primary-500">{sub.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Dropdown 3: School Support */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter('school')}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === 'school' ? null : 'school')}
              aria-expanded={activeDropdown === 'school'}
              aria-haspopup="menu"
              className={cn(
                'group inline-flex min-h-touch items-center gap-1 rounded-lg px-1.5 md:px-2 xl:px-2.5 py-1.5 text-[0.72rem] md:text-[0.76rem] xl:text-[0.82rem] font-bold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap',
                isTransparent
                  ? (activeDropdown === 'school' ? 'bg-white/20 text-accent-300' : 'text-white/95 hover:bg-white/10 hover:text-white')
                  : (activeDropdown === 'school' ? 'bg-primary-50 text-accent-700' : 'text-primary-800 hover:bg-primary-50 hover:text-primary-950')
              )}
            >
              <span>{t('schoolSupport', { fallback: 'School Support' })}</span>
              <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-150', isTransparent ? (activeDropdown === 'school' ? 'rotate-180 text-accent-300' : 'text-white/70') : (activeDropdown === 'school' ? 'rotate-180 text-accent-600' : 'text-primary-600'))} />
            </button>

            {activeDropdown === 'school' && (
              <div
                role="menu"
                className="absolute start-0 top-full mt-1.5 w-72 rounded-2xl border border-primary-100 bg-white p-2 shadow-xl animate-in fade-in-50 zoom-in-95 duration-100"
              >
                {schoolSublinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    role="menuitem"
                    className="flex flex-col rounded-xl px-3.5 py-2.5 transition-colors hover:bg-primary-50 focus-visible:bg-primary-50 focus-visible:outline-none"
                  >
                    <span className="text-xs font-bold text-primary-950">{sub.label}</span>
                    <span className="text-[0.72rem] text-primary-500">{sub.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Adults Link */}
          <Link
            href={`/de/${locale}/adults`}
            className={cn(
              "inline-flex min-h-touch items-center rounded-lg px-1.5 md:px-2 xl:px-2.5 py-1.5 text-[0.72rem] md:text-[0.76rem] xl:text-[0.82rem] font-bold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap",
              isTransparent ? "text-white/95 hover:bg-white/10 hover:text-white" : "text-primary-800 hover:bg-primary-50 hover:text-primary-950"
            )}
          >
            {t('adults', { fallback: 'Adults' })}
          </Link>

          {/* How It Works */}
          <a
            href={`/de/${locale}#how-it-works`}
            className={cn(
              "inline-flex min-h-touch items-center rounded-lg px-1.5 md:px-2 xl:px-2.5 py-1.5 text-[0.72rem] md:text-[0.76rem] xl:text-[0.82rem] font-bold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap",
              isTransparent ? "text-white/95 hover:bg-white/10 hover:text-white" : "text-primary-800 hover:bg-primary-50 hover:text-primary-950"
            )}
          >
            {t('howItWorks', { fallback: 'How It Works' })}
          </a>

          {/* Pricing */}
          <a
            href={`/de/${locale}#pricing`}
            className={cn(
              "inline-flex min-h-touch items-center rounded-lg px-1.5 md:px-2 xl:px-2.5 py-1.5 text-[0.72rem] md:text-[0.76rem] xl:text-[0.82rem] font-bold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap",
              isTransparent ? "text-white/95 hover:bg-white/10 hover:text-white" : "text-primary-800 hover:bg-primary-50 hover:text-primary-950"
            )}
          >
            {t('pricing', { fallback: 'Pricing' })}
          </a>
        </nav>

        {/* Right Desktop Action Cluster (visible on md+) */}
        <div className="hidden items-center gap-1.5 md:flex lg:gap-2 xl:gap-2.5">
          <GlobalLanguageSelector isGermanyContext={true} isTransparent={isTransparent} />

          {/* Login Link (shown on 2xl+ to keep 1024-1536px compact) */}
          <Link
            href={`/de/${locale}/login`}
            className={cn(
              "hidden 2xl:inline-flex h-10 items-center justify-center rounded-full border px-4 text-sm font-semibold shadow-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap",
              isTransparent
                ? "border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-xs"
                : "border-primary-200 bg-white text-primary-900 hover:border-accent-300 hover:bg-accent-50/50"
            )}
          >
            {t('login')}
          </Link>

          {/* WhatsApp Phone (shown on xl+) */}
          <a
            href={`https://wa.me/${marketConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Support"
            className={cn(
              "hidden h-10 items-center gap-2 rounded-full border px-4 text-sm font-semibold shadow-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring xl:inline-flex whitespace-nowrap",
              isTransparent
                ? "border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-xs"
                : "border-primary-200 bg-white text-primary-900 hover:border-accent-300 hover:bg-accent-50/50"
            )}
          >
            <Phone className={cn("h-4 w-4 shrink-0", isTransparent ? "text-accent-300" : "text-accent-600")} />
            <span dir="ltr" className="whitespace-nowrap font-mono">
              <bdi dir="ltr">&lrm;{marketConfig.contact.whatsappDisplay}</bdi>
            </span>
          </a>

          {/* Free Trial CTA */}
          <Link
            href={`/de/${locale}/trial`}
            className="inline-flex h-8 md:h-9 xl:h-10 items-center justify-center gap-1 md:gap-1.5 xl:gap-2 rounded-full bg-accent-600 px-3 md:px-3.5 xl:px-5 text-xs xl:text-sm font-semibold text-white shadow-sm hover:bg-accent-500 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap"
          >
            <span>{tNav('bookFreeSession')}</span>
            <ArrowIcon className="h-3.5 w-3.5 xl:h-4 xl:w-4 shrink-0" />
          </Link>
        </div>

        {/* Mobile Controls (< md) */}
        <div className="flex items-center gap-2 md:hidden">
          <GlobalLanguageSelector isGermanyContext={true} isTransparent={isTransparent} />

          <Link
            href={`/de/${locale}/trial`}
            className="inline-flex min-h-touch items-center justify-center rounded-full bg-accent-600 px-3 py-1.5 text-xs font-bold text-white shadow-2xs hover:bg-accent-500 transition-colors whitespace-nowrap"
          >
            {tNav('bookFreeSession')}
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className={cn(
              "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border p-2 shadow-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isTransparent
                ? "border-white/30 bg-white/10 text-white hover:bg-white/20"
                : "border-primary-200 bg-white text-primary-900 hover:bg-primary-50"
            )}
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
          className="fixed inset-x-0 top-[4.25rem] z-50 flex h-[calc(100vh-4.25rem)] flex-col justify-between overflow-y-auto bg-white p-6 shadow-2xl md:hidden animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-4">
            <nav className="flex flex-col gap-1 border-b border-primary-100 pb-4">
              {/* Accordion 1: Tutoring Services */}
              <div className="rounded-xl border border-primary-100 overflow-hidden mb-2">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion('tutoring')}
                  className="flex w-full items-center justify-between p-3.5 bg-primary-50/70 font-bold text-sm text-primary-950 text-start"
                >
                  <span>{t('tutoringServices', { fallback: 'Tutoring Services' })}</span>
                  <ChevronDown className={cn('h-4 w-4 transition-transform duration-150', mobileAccordion === 'tutoring' && 'rotate-180')} />
                </button>
                {mobileAccordion === 'tutoring' && (
                  <div className="flex flex-col p-2 bg-white gap-1">
                    {tutoringSublinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-lg p-2.5 text-xs font-semibold text-primary-800 hover:bg-primary-50"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion 2: Languages */}
              <div className="rounded-xl border border-primary-100 overflow-hidden mb-2">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion('languages')}
                  className="flex w-full items-center justify-between p-3.5 bg-primary-50/70 font-bold text-sm text-primary-950 text-start"
                >
                  <span>{t('languages', { fallback: 'Languages' })}</span>
                  <ChevronDown className={cn('h-4 w-4 transition-transform duration-150', mobileAccordion === 'languages' && 'rotate-180')} />
                </button>
                {mobileAccordion === 'languages' && (
                  <div className="flex flex-col p-2 bg-white gap-1">
                    {languagesSublinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-lg p-2.5 text-xs font-semibold text-primary-800 hover:bg-primary-50"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion 3: School Support */}
              <div className="rounded-xl border border-primary-100 overflow-hidden mb-2">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion('school')}
                  className="flex w-full items-center justify-between p-3.5 bg-primary-50/70 font-bold text-sm text-primary-950 text-start"
                >
                  <span>{t('schoolSupport', { fallback: 'School Support' })}</span>
                  <ChevronDown className={cn('h-4 w-4 transition-transform duration-150', mobileAccordion === 'school' && 'rotate-180')} />
                </button>
                {mobileAccordion === 'school' && (
                  <div className="flex flex-col p-2 bg-white gap-1">
                    {schoolSublinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-lg p-2.5 text-xs font-semibold text-primary-800 hover:bg-primary-50"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct links */}
              <Link
                href={`/de/${locale}/adults`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-primary-950 hover:bg-primary-50"
              >
                <span>{t('adults', { fallback: 'Adults' })}</span>
                <ArrowIcon className="h-4 w-4 text-primary-400" />
              </Link>

              <a
                href={`/de/${locale}#how-it-works`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-primary-950 hover:bg-primary-50"
              >
                <span>{t('howItWorks')}</span>
                <ArrowIcon className="h-4 w-4 text-primary-400" />
              </a>

              <a
                href={`/de/${locale}#pricing`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-primary-950 hover:bg-primary-50"
              >
                <span>{t('pricing')}</span>
                <ArrowIcon className="h-4 w-4 text-primary-400" />
              </a>
            </nav>

            {/* Auth Buttons */}
            <div className="flex flex-col gap-2">
              <Link
                href={`/de/${locale}/login`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-touch w-full items-center justify-center rounded-xl border border-primary-200 bg-white py-2.5 text-sm font-semibold text-primary-900 shadow-xs hover:bg-primary-50"
              >
                {t('login')}
              </Link>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-6 flex flex-col gap-3 border-t border-primary-100 pt-5">
            <Link
              href={`/de/${locale}/trial`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-touch w-full items-center justify-center gap-2 rounded-2xl bg-accent-600 py-3.5 text-base font-bold text-white shadow-md hover:bg-accent-500"
            >
              <span>{tNav('bookFreeSession')}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>

            <a
              href={`https://wa.me/${marketConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-touch w-full items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 py-3 text-sm font-bold text-emerald-800"
            >
              <Phone className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="inline-flex items-center gap-1.5">
                <span>{locale === 'ar' ? 'واتساب:' : 'WhatsApp:'}</span>
                <bdi dir="ltr" className="font-mono">&lrm;{marketConfig.contact.whatsappDisplay}</bdi>
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
