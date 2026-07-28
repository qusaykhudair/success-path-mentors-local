// src/components/layout/site-header.tsx

import Image from 'next/image';

import { getLocale, getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';

import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

import { LocaleSwitcher } from './locale-switcher';
import { MobileNav } from './mobile-nav';
import {
  SubjectsMenu,
  type SubjectCategory,
} from './subjects-menu';

const WHATSAPP_NUMBER = '16477875999';

export async function SiteHeader() {
  const t = await getTranslations('nav');
  const locale = await getLocale();

  const whatsappMessage = encodeURIComponent(
    t('whatsappBookingMessage')
  );

  const whatsappHref =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const sectionLinks = [
    {
      href: `/${locale}#programs`,
      label: t('programs'),
    },
    {
      href: `/${locale}#services`,
      label: t('services'),
    },
    {
      href: `/${locale}#pricing`,
      label: t('pricing'),
    },
    {
      href: `/${locale}#faq`,
      label: t('faq'),
    },
  ];

  const subjectCategories = t.raw(
    'subjectsMenu.categories'
  ) as SubjectCategory[];

  const navLinkClass = [
    'group',
    'relative',
    'inline-flex',
    'min-h-touch',
    'items-center',
    'rounded-button',
    'px-3',
    'text-small',
    'font-bold',
    'text-muted-foreground',
    'transition-[color,background-color]',
    'duration-200',
    'hover:bg-muted',
    'hover:text-foreground',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-ring',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-background',
  ].join(' ');

  return (
    <header
      className="
        sticky
        top-0
        z-40
        border-b
        border-border/70
        bg-background/90
        shadow-xs
        backdrop-blur-xl
      "
    >
      <Container className="flex min-h-16 items-center justify-between gap-3 lg:min-h-20">
        <Link
          href="/"
          aria-label={t('home')}
          className="
            group
            inline-flex
            shrink-0
            items-center
            rounded-button
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-ring
            focus-visible:ring-offset-2
            focus-visible:ring-offset-background
          "
        >
          <Image
            src="/images/logo.png"
            alt="Mustafa Academy"
            width={160}
            height={47}
            priority
            sizes="(max-width: 1024px) 130px, 160px"
            className="
              h-8
              w-auto
              object-contain
              transition-transform
              duration-300
              ease-out
              group-hover:scale-[1.03]
              motion-reduce:transition-none
              motion-reduce:group-hover:scale-100
              lg:h-9
            "
          />
        </Link>

        <nav
          // aria-label={t('primaryNavigation')}
          className="hidden items-center gap-1 lg:flex"
        >
          <SubjectsMenu
            triggerLabel={t('subjectsMenu.trigger')}
            categories={subjectCategories}
          />

          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={navLinkClass}
            >
              {link.label}

              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-x-3
                  bottom-1
                  h-0.5
                  origin-center
                  scale-x-0
                  rounded-full
                  bg-accent
                  transition-transform
                  duration-200
                  group-hover:scale-x-100
                "
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <LocaleSwitcher />
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: 'accent',
              size: 'sm',
              className: 'hidden lg:inline-flex',
            })}
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.7}
              className="h-4 w-4 shrink-0"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="4"
                width="14"
                height="13"
                rx="2"
              />

              <path
                strokeLinecap="round"
                d="M3 8h14M7 2.5v3M13 2.5v3"
              />
            </svg>

            {t('bookFreeSession')}
          </a>

          <MobileNav
            sectionLinks={sectionLinks}
            homeLabel={t('home')}
            homeHref={`/${locale}`}
            bookLabel={t('bookFreeSession')}
            bookingHref={whatsappHref}
            subjectsLabel={t('subjectsMenu.trigger')}
            subjectCategories={subjectCategories}
            openMenuLabel={t('openMenu')}
            closeMenuLabel={t('closeMenu')}
          />
        </div>
      </Container>
    </header>
  );
}