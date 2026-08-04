// Server Component

import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUp,
  BookOpenCheck,
  ExternalLink,
  Facebook,
  Instagram,
  Languages,
  Mail,
  MessageCircle,
  MessageSquareText,
  ShieldCheck,
  Youtube,
  type LucideIcon,
} from 'lucide-react';

import { Container } from '@/components/ui/container';
import { routePath } from '@/config/routes';

const WHATSAPP_NUMBER = '16477875999';
const CONTACT_EMAIL = 'successpathmentors@gmail.com';

interface FooterLink {
  href: string;
  label: string;
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
  const currentLocale =
    locale === 'ar'
      ? 'ar'
      : 'en';

  const year = new Date().getFullYear();
  const otherLocale =
    locale === 'ar' ? 'en' : 'ar';

  const homeHref = `/${currentLocale}`;
  const contactHref =
    routePath.contact(
      currentLocale
    );
  const subjectsHref = `${homeHref}/subjects`;
  const subjectsLabel =
    locale === 'ar'
      ? 'المواد'
      : 'Subjects';


  const locationsLabel =
    locale === 'ar'
      ? 'المواقع'
      : 'Locations';

  const packagesLabel =
    locale === 'ar'
      ? 'الباقات'
      : 'Packages';

  const howItWorksLabel =
    locale === 'ar'
      ? 'آلية عمل المنصة'
      : 'How It Works';

  const frenchProgramHref =
    '/fr/programme-francais';

  const whatsappHref =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      t('whatsappMessage')
    )}`;

  const quickLinks: FooterLink[] = [
    {
      href: homeHref,
      label: t('links.home'),
    },
    {
      href: subjectsHref,
      label: subjectsLabel,
    },
    {
      href:
        routePath.locations(
          currentLocale
        ),
      label:
        locationsLabel,
    },
    {
      href: frenchProgramHref,
      label: 'Programme français',
    },
    {
      href: `${homeHref}/about`,
      label: t('links.about'),
    },
    {
      href:
        routePath.howItWorks(
          currentLocale
        ),
      label:
        howItWorksLabel,
    },
    {
      href: `${homeHref}/tutor-matching`,
      label: t('links.tutorMatching'),
    },
    {
      href: `${homeHref}#programs`,
      label: t('links.programs'),
    },
    {
      href: `${homeHref}#services`,
      label: t('links.services'),
    },
    {
      href:
        routePath.packages(
          currentLocale
        ),
      label:
        packagesLabel,
    },
    {
      href: `${homeHref}#faq`,
      label: t('links.faq'),
    },
    {
      href: contactHref,
      label: t('links.contact'),
    },
  ];

  const legalLinks: FooterLink[] = [
    {
      href: `${homeHref}/privacy`,
      label: t('legal.privacy'),
    },
    {
      href: `${homeHref}/terms`,
      label: t('legal.terms'),
    },
    {
      href: `${homeHref}/cancellation-policy`,
      label: t('legal.cancellation'),
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      key: 'facebook',
      label: t('social.facebook'),
      href:
        'https://www.facebook.com/SuccessPathMentors',
      icon: Facebook,
    },
    {
      key: 'instagram',
      label: t('social.instagram'),
      href:
        'https://www.instagram.com/successpathmentors',
      icon: Instagram,
    },
    {
      key: 'youtube',
      label: t('social.youtube'),
      href:
        'https://www.youtube.com/@SuccessPathMentors',
      icon: Youtube,
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
            bg-accent/12
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
            bg-primary-400/12
            blur-3xl
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.022]
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
            via-accent-300/75
            to-transparent
            rtl:bg-gradient-to-l
          "
        />
      </div>

      <Container
        className="
          grid
          gap-10
          py-12
          sm:py-14
          md:grid-cols-2
          lg:grid-cols-12
          lg:gap-0
        "
      >
        {/* Brand */}
        <section
          aria-labelledby="footer-brand-heading"
          className="
            md:col-span-2
            lg:col-span-5
            lg:pe-10
          "
        >
          <h3
            id="footer-brand-heading"
            className="sr-only"
          >
            {t('logoAlt')}
          </h3>

          <Link
            href={homeHref}
            aria-label={t('logoLinkLabel')}
            className="
              inline-flex
              rounded-xl
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
              motion-reduce:hover:translate-y-0
            "
          >
            <Image
              src="/images/footer.png"
              alt={t('logoAlt')}
              width={180}
              height={53}
              className="
                h-15
                w-auto
                object-contain
              "
            />
          </Link>

          <p
            className="
              mt-6
              max-w-xl
              text-small
              leading-7
              text-white/75
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
                text-white/70
              "
            >
              {t('brandNote')}
            </p>
          </div>

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
                text-white/65
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
                      role="link"
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
                        text-white/35
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
                      !text-white/75
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
        </section>

        {/* Quick links */}
        <nav
          aria-label={t('quickLinks')}
          className="
            lg:col-span-3
            lg:border-s
            lg:border-white/10
            lg:px-9
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

          <ul
            className="
              mt-6
              grid
              gap-3.5
              sm:grid-cols-2
              md:grid-cols-1
            "
          >
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2.5
                    text-small
                    !text-white/70
                    transition-colors
                    duration-200
                    hover:!text-accent-200
                    focus-visible:rounded-sm
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-accent
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-primary-950
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-white/30
                      transition-[background-color,transform]
                      duration-200
                      group-hover:scale-125
                      group-hover:bg-accent
                    "
                  />

                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Support */}
        <section
          aria-labelledby="footer-support-heading"
          className="
            md:col-span-2
            lg:col-span-4
            lg:border-s
            lg:border-white/10
            lg:ps-9
          "
        >
          <h3
            id="footer-support-heading"
            className="
              text-small
              font-bold
              text-white
            "
          >
            {t('supportTitle')}
          </h3>

          <div className="mt-6 grid gap-3">
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

              <span className="min-w-0 flex-1">
                <span
                  className="
                    block
                    text-caption
                    text-white/65
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
                  h-4
                  w-4
                  shrink-0
                  text-white/45
                  transition-colors
                  group-hover:text-accent-300
                "
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </a>

            <Link
              href={contactHref}
              className="
                group
                flex
                min-h-touch
                items-center
                gap-3
                rounded-xl
                border
                border-accent-300/25
                bg-accent/10
                px-4
                py-3.5
                !text-white
                transition-[background-color,border-color,transform]
                duration-200
                hover:-translate-y-0.5
                hover:border-accent-300/50
                hover:bg-accent/15
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
                <MessageSquareText
                  className="h-5 w-5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <span className="min-w-0 flex-1">
                <span
                  className="
                    block
                    text-caption
                    text-white/65
                  "
                >
                  {t('contactPageLabel')}
                </span>

                <span
                  className="
                    mt-0.5
                    block
                    text-small
                    font-bold
                    text-white
                  "
                >
                  {t('contactPageDescription')}
                </span>
              </span>
            </Link>

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

              <span className="min-w-0 flex-1">
                <span
                  className="
                    block
                    text-caption
                    text-white/65
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

          <Link
            href={`/${otherLocale}`}
            hrefLang={otherLocale}
            className="
              mt-4
              flex
              min-h-touch
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
          </Link>
        </section>
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
          <p
            className="
              text-caption
              leading-relaxed
              text-white/65
            "
          >
            © {year} Mustafa Academy — Success Path Mentors.{' '}
            {t('rightsReserved')}.
          </p>

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
                    <Link
                      href={link.href}
                      className="
                        text-caption
                        !text-white/65
                        transition-colors
                        duration-200
                        hover:!text-accent-200
                        focus-visible:rounded-sm
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-accent
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-primary-950
                      "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="#main-content"
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
                !text-white/75
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
                motion-reduce:hover:translate-y-0
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