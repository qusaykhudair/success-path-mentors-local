import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { LocaleSwitcher } from './locale-switcher';
import { MobileNav } from './mobile-nav';

export async function SiteHeader() {
  const t = await getTranslations('nav');

  const links = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/faq', label: t('faq') },
    { href: '/contact', label: t('contact') },
  ] as const;

  return (
    <>
      {/* Skip link — visible only on keyboard focus. Requires id="main-content"
          on the <main> landmark in the layout that wraps this header. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-small focus:font-semibold focus:text-white focus:shadow-lg"
      >
      
      </a>

      <header className="sticky top-0 z-40 relative bg-surface/95 shadow-sm backdrop-blur">
        {/* single, clean bottom edge — no doubled border */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-300 to-transparent"
        />

        <Container className="flex h-16 items-center justify-between gap-3 lg:h-20">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2"
            aria-label="Mustafa Academy home"
          >
            <Image
              src="/images/logo.png"
              alt="Mustafa Academy — Success Path Mentors"
              width={160}
              height={47}
              priority
              className="h-7 w-auto transition-transform duration-300 ease-out group-hover:scale-105 sm:h-8 lg:h-9"
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-3.5 py-2 text-body font-medium text-ink-secondary transition-colors duration-200 hover:bg-accent-50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3.5 bottom-1 h-0.5 origin-center scale-x-0 rounded-full bg-accent-500 transition-transform duration-200 ease-out group-hover:scale-x-100"
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* LocaleSwitcher left unwrapped — it almost certainly owns its
                own button chrome, so no extra ring/border is added here. */}
            <LocaleSwitcher />

            <ButtonLink
              href="/contact"
              size="sm"
              className="group relative hidden overflow-hidden bg-gradient-to-r from-accent-600 to-accent-500 font-semibold shadow-md shadow-accent-600/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-600/35 focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:inline-flex"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
              />
              <span className="relative inline-flex items-center gap-1.5">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4 shrink-0" aria-hidden="true">
                  <rect x="3" y="4" width="14" height="13" rx="2" />
                  <path strokeLinecap="round" d="M3 8h14M7 2.5v3M13 2.5v3" />
                </svg>
                {t('bookFreeSession')}
              </span>
            </ButtonLink>

            <MobileNav links={links} bookLabel={t('bookFreeSession')} />
          </div>
        </Container>
      </header>
    </>
  );
}