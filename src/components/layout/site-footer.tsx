// src/components/layout/footer.tsx
// Server Component

import {
  getLocale,
  getTranslations,
} from 'next-intl/server';

import Image from 'next/image';

import {
  ArrowRight,
  ArrowUp,
  BookOpenCheck,
  ExternalLink,
  Facebook,
  Instagram,
  Languages,
  Linkedin,
  Mail,
  MessageCircle,
  ShieldCheck,
  Youtube,
  type LucideIcon,
} from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const WHATSAPP_NUMBER = '16477875999';
const CONTACT_EMAIL = 'successpathmentors@gmail.com';

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

interface SocialLink {
  key: string;
  label: string;
  href?: string;
  icon: LucideIcon;
}

export async function SiteFooter() {
  const t = await getTranslations('footer');
  const locale = await getLocale();

  const year = new Date().getFullYear();

  const otherLocale =
    locale === 'ar' ? 'en' : 'ar';

  const subjects = t.raw(
    'subjects'
  ) as string[];

  const whatsappMessage = encodeURIComponent(
    t('whatsappMessage')
  );

  const whatsappHref =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const quickLinks: FooterLink[] = [
    {
      href: `/${locale}`,
      label: t('links.home'),
    },
    {
      href: `/${locale}#programs`,
      label: t('links.programs'),
    },
    {
      href: `/${locale}#services`,
      label: t('links.services'),
    },
    {
      href: `/${locale}#pricing`,
      label: t('links.pricing'),
    },
    {
      href: `/${locale}#faq`,
      label: t('links.faq'),
    },
  ];

  const supportLinks: FooterLink[] = [
    {
      href: whatsappHref,
      label: t('whatsappLabel'),
      external: true,
    },
    {
      href: `mailto:${CONTACT_EMAIL}`,
      label: t('emailLabel'),
    },
    {
      href: `/${locale}#final-cta`,
      label: t('links.freeTrial'),
    },
  ];

  const legalLinks: FooterLink[] = [
    {
      href: `/${locale}/privacy`,
      label: t('legal.privacy'),
    },
    {
      href: `/${locale}/terms`,
      label: t('legal.terms'),
    },
    {
      href: `/${locale}/cancellation-policy`,
      label: t('legal.cancellation'),
    },
  ];

  /*
   * تظهر الأيقونات دائمًا.
   * تصبح قابلة للنقر بعد إضافة الروابط في ملف .env.local.
   */
  const socialLinks: SocialLink[] = [
    {
      key: 'facebook',
      label: t('social.facebook'),
      href:
        process.env.NEXT_PUBLIC_FACEBOOK_URL,
      icon: Facebook,
    },
    {
      key: 'instagram',
      label: t('social.instagram'),
      href:
        process.env.NEXT_PUBLIC_INSTAGRAM_URL,
      icon: Instagram,
    },
    {
      key: 'youtube',
      label: t('social.youtube'),
      href:
        process.env.NEXT_PUBLIC_YOUTUBE_URL,
      icon: Youtube,
    },
    {
      key: 'linkedin',
      label: t('social.linkedin'),
      href:
        process.env.NEXT_PUBLIC_LINKEDIN_URL,
      icon: Linkedin,
    },
  ];

  return (
    <footer
      aria-labelledby="site-footer-heading"
      className="
        relative
        isolate
        overflow-hidden
        border-t
        border-primary-800/40
        bg-brand-dark
        text-white
      "
    >
      <h2
        id="site-footer-heading"
        className="sr-only"
      >
        {t('ariaLabel')}
      </h2>

      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -end-48
            -top-48
            h-[34rem]
            w-[34rem]
            rounded-full
            bg-accent/15
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-48
            -start-40
            h-[32rem]
            w-[32rem]
            rounded-full
            bg-primary-400/15
            blur-3xl
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:radial-gradient(white_1px,transparent_1px)]
            [background-size:30px_30px]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-accent-300/80
            to-transparent
            rtl:bg-gradient-to-l
          "
        />
      </div>

      {/* Compact footer CTA */}
      <Container className="pt-12 sm:pt-14">
        <div
          className="
            relative
            grid
            w-full
            items-center
            gap-7
            overflow-hidden
            rounded-[1.75rem]
            border
            border-white/10
            bg-white/[0.065]
            px-6
            py-7
            shadow-xl
            backdrop-blur-md
            sm:px-8
            sm:py-8
            lg:grid-cols-[minmax(0,1fr)_auto]
            lg:gap-12
            xl:px-10
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -end-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-accent/15
              blur-3xl
            "
          />

          <div className="relative max-w-3xl">
            <p
              className="
                text-caption
                font-bold
                uppercase
                tracking-wider
                text-accent-200
              "
            >
              {t('eyebrow')}
            </p>

            <h3
              className="
                mt-3
                max-w-2xl
                text-h2
                font-bold
                leading-tight
                text-white
              "
            >
              {t('ctaHeading')}
            </h3>

            <p
              className="
                mt-4
                max-w-3xl
                text-small
                leading-7
                text-white/65
                sm:text-body
              "
            >
              {t('ctaDescription')}
            </p>
          </div>

          <div
            className="
              relative
              flex
              flex-col
              gap-3
              sm:flex-row
              lg:flex-col
              xl:flex-row
            "
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: 'accent',
                  size: 'lg',
                }),
                `
                  group
                  w-full
                  justify-center
                  whitespace-nowrap
                  font-bold
                  !text-accent-foreground
                  hover:!text-accent-foreground
                  sm:w-auto
                `
              )}
            >
              <MessageCircle
                className="
                  h-5
                  w-5
                  shrink-0
                  text-current
                "
                strokeWidth={1.9}
                aria-hidden="true"
              />

              {t('ctaPrimary')}

              <ArrowRight
                className="
                  h-4
                  w-4
                  shrink-0
                  text-current
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                  rtl:-scale-x-100
                  rtl:group-hover:-translate-x-0.5
                  motion-reduce:transition-none
                "
                strokeWidth={1.9}
                aria-hidden="true"
              />
            </a>

            <a
              href={`/${locale}#pricing`}
              className="
                inline-flex
                min-h-button
                w-full
                items-center
                justify-center
                gap-2
                whitespace-nowrap
                rounded-button
                border
                border-white/20
                bg-white/5
                px-6
                py-3
                text-body
                font-bold
                !text-white
                transition-[background-color,border-color,transform]
                duration-200
                hover:-translate-y-0.5
                hover:border-white/30
                hover:bg-white/10
                hover:!text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
                focus-visible:ring-offset-2
                focus-visible:ring-offset-primary-950
                motion-reduce:transition-none
                motion-reduce:hover:translate-y-0
                sm:w-auto
              "
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </div>
      </Container>

      {/* Main footer content */}
      <Container
        className="
          grid
          gap-10
          py-12
          sm:py-14
          md:grid-cols-2
          lg:grid-cols-12
          lg:gap-8
          xl:gap-10
        "
      >
        {/* Brand column */}
        <div
          className="
            md:col-span-2
            lg:col-span-5
            lg:pe-8
          "
        >
          <a
            href={`/${locale}`}
            aria-label={t('logoLinkLabel')}
            className="
              inline-flex
              rounded-xl
              bg-white
              p-3
              shadow-lg
              transition-transform
              duration-200
              hover:-translate-y-0.5
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent
              focus-visible:ring-offset-2
              focus-visible:ring-offset-primary-950
              motion-reduce:transition-none
            "
          >
            <Image
              src="/images/logo.png"
              alt={t('logoAlt')}
              width={180}
              height={53}
              className="
                h-10
                w-auto
                object-contain
              "
            />
          </a>

          <p
            className="
              mt-6
              max-w-xl
              text-small
              leading-7
              text-white/65
            "
          >
            {t('description')}
          </p>

          <div
            className="
              mt-6
              flex
              max-w-xl
              items-start
              gap-3
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-4
            "
          >
            <ShieldCheck
              className="
                mt-0.5
                h-5
                w-5
                shrink-0
                text-accent-300
              "
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <p
              className="
                text-caption
                leading-relaxed
                text-white/60
              "
            >
              {t('brandNote')}
            </p>
          </div>

          {/* Social media */}
          <div className="mt-7">
            <h3
              className="
                text-small
                font-bold
                text-white
              "
            >
              {t('socialTitle')}
            </h3>

            <p
              className="
                mt-2
                max-w-lg
                text-caption
                leading-relaxed
                text-white/45
              "
            >
              {t('socialDescription')}
            </p>

            <div
              className="
                mt-4
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                if (!social.href) {
                  return (
                    <span
                      key={social.key}
                      aria-label={social.label}
                      aria-disabled="true"
                      title={t(
                        'socialNotConfigured'
                      )}
                      className="
                        inline-flex
                        h-11
                        w-11
                        cursor-not-allowed
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.035]
                        text-white/25
                      "
                    >
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>
                  );
                }

                return (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="
                      group
                      inline-flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      !text-white/65
                      transition-[transform,background-color,border-color,color]
                      duration-200
                      hover:-translate-y-1
                      hover:border-accent-300/30
                      hover:bg-accent
                      hover:!text-accent-foreground
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-accent
                      motion-reduce:transition-none
                      motion-reduce:hover:translate-y-0
                    "
                  >
                    <Icon
                      className="
                        h-5
                        w-5
                        text-current
                      "
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick links */}
        <nav
          aria-label={t('quickLinks')}
          className="
            lg:col-span-2
            lg:border-s
            lg:border-white/10
            lg:ps-7
          "
        >
          <h3
            className="
              flex
              items-center
              gap-2
              text-small
              font-bold
              text-white
            "
          >
            <BookOpenCheck
              className="
                h-5
                w-5
                text-accent-300
              "
              strokeWidth={1.8}
              aria-hidden="true"
            />

            {t('quickLinks')}
          </h3>

          <ul className="mt-6 grid gap-3.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2.5
                    text-small
                    !text-white/60
                    transition-colors
                    duration-200
                    hover:!text-accent-200
                    focus-visible:outline-none
                    focus-visible:text-accent-200
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-white/25
                      transition-[background-color,transform]
                      duration-200
                      group-hover:scale-125
                      group-hover:bg-accent
                    "
                  />

                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Subjects */}
        <div
          className="
            lg:col-span-2
            lg:border-s
            lg:border-white/10
            lg:ps-7
          "
        >
          <h3
            className="
              text-small
              font-bold
              text-white
            "
          >
            {t('subjectsOffered')}
          </h3>

          <ul
            className="
              mt-6
              grid
              grid-cols-2
              gap-x-4
              gap-y-3.5
              md:grid-cols-1
            "
          >
            {Array.isArray(subjects) &&
              subjects
                .slice(0, 8)
                .map((subject) => (
                  <li
                    key={subject}
                    className="
                      text-small
                      text-white/60
                    "
                  >
                    {subject}
                  </li>
                ))}
          </ul>

          <p
            className="
              mt-6
              inline-flex
              rounded-full
              border
              border-accent-300/20
              bg-accent/10
              px-3
              py-1.5
              text-caption
              font-bold
              text-accent-200
            "
          >
            {t('gradeRange')}
          </p>
        </div>

        {/* Support and contact */}
        <div
          className="
            md:col-span-2
            lg:col-span-3
            lg:border-s
            lg:border-white/10
            lg:ps-7
          "
        >
          <h3
            className="
              text-small
              font-bold
              text-white
            "
          >
            {t('supportTitle')}
          </h3>

          <ul className="mt-6 grid gap-3">
            {supportLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={
                    link.external
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    link.external
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2.5
                    text-small
                    !text-white/60
                    transition-colors
                    duration-200
                    hover:!text-accent-200
                    focus-visible:outline-none
                    focus-visible:text-accent-200
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-white/25
                      transition-colors
                      group-hover:bg-accent
                    "
                  />

                  {link.label}

                  {link.external && (
                    <ExternalLink
                      className="h-3.5 w-3.5"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact cards */}
          <div className="mt-7 grid gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                min-h-touch
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3.5
                !text-white
                transition-[background-color,border-color,transform]
                duration-200
                hover:-translate-y-0.5
                hover:border-accent-300/30
                hover:bg-accent/10
                hover:!text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
                motion-reduce:transition-none
                motion-reduce:hover:translate-y-0
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-accent
                  text-accent-foreground
                "
              >
                <MessageCircle
                  className="h-5 w-5"
                  strokeWidth={1.9}
                  aria-hidden="true"
                />
              </span>

              <span className="min-w-0">
                <span
                  className="
                    block
                    text-caption
                    text-white/45
                  "
                >
                  {t('whatsappLabel')}
                </span>

                <span
                  dir="ltr"
                  className="
                    mt-0.5
                    block
                    text-small
                    font-bold
                    text-white
                  "
                >
                  +1 647 787 5999
                </span>
              </span>

              <ExternalLink
                className="
                  ms-auto
                  h-4
                  w-4
                  shrink-0
                  text-white/30
                  transition-colors
                  group-hover:text-accent-300
                "
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="
                group
                flex
                min-h-touch
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3.5
                !text-white
                transition-[background-color,border-color,transform]
                duration-200
                hover:-translate-y-0.5
                hover:border-accent-300/30
                hover:bg-accent/10
                hover:!text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
                motion-reduce:transition-none
                motion-reduce:hover:translate-y-0
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/10
                  text-accent-300
                "
              >
                <Mail
                  className="h-5 w-5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <span className="min-w-0">
                <span
                  className="
                    block
                    text-caption
                    text-white/45
                  "
                >
                  {t('emailLabel')}
                </span>

                <span
                  dir="ltr"
                  className="
                    mt-0.5
                    block
                    max-w-full
                    truncate
                    text-small
                    font-bold
                    text-white
                  "
                >
                  {CONTACT_EMAIL}
                </span>
              </span>
            </a>
          </div>

          {/* Language switch */}
          <a
            href={`/${otherLocale}`}
            hrefLang={otherLocale}
            className="
              mt-4
              flex
              items-center
              justify-between
              gap-4
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3.5
              !text-white
              transition-[background-color,border-color]
              duration-200
              hover:border-accent-300/25
              hover:bg-white/10
              hover:!text-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent
            "
          >
            <span
              className="
                flex
                items-center
                gap-3
              "
            >
              <Languages
                className="
                  h-5
                  w-5
                  text-accent-300
                "
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <span
                className="
                  text-small
                  font-semibold
                  text-white
                "
              >
                {t('languageSwitch')}
              </span>
            </span>

            <span
              className="
                rounded-full
                bg-white/10
                px-2.5
                py-1
                text-caption
                font-bold
                uppercase
                text-accent-200
              "
            >
              {otherLocale}
            </span>
          </a>
        </div>
      </Container>

      {/* Bottom bar */}
      <div
        className="
          border-t
          border-white/10
          bg-primary-950/35
        "
      >
        <Container
          className="
            flex
            flex-col
            gap-5
            py-6
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div className="max-w-2xl">
            <p
              className="
                text-caption
                leading-relaxed
                text-white/55
              "
            >
              © {year} Mustafa Academy — Success Path
              Mentors. {t('rightsReserved')}.
            </p>

            <p
              className="
                mt-1.5
                text-caption
                leading-relaxed
                text-white/35
              "
            >
              {t('policyNotice')}
            </p>
          </div>

          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
            "
          >
            <nav aria-label={t('legalLabel')}>
              <ul
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-x-5
                  gap-y-2
                "
              >
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="
                        text-caption
                        !text-white/45
                        transition-colors
                        duration-200
                        hover:!text-accent-200
                        focus-visible:outline-none
                        focus-visible:text-accent-200
                      "
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href={`/${locale}`}
              aria-label={t('backToTop')}
              className="
                inline-flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                self-start
                rounded-full
                border
                border-white/10
                bg-white/5
                !text-white/65
                transition-[background-color,border-color,color,transform]
                duration-200
                hover:-translate-y-0.5
                hover:border-accent-300/30
                hover:bg-accent
                hover:!text-accent-foreground
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
                motion-reduce:transition-none
                sm:self-auto
              "
            >
              <ArrowUp
                className="h-4 w-4"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}