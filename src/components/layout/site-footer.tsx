import { buildGeneralInquiryMessage, buildWhatsAppHref } from '@/lib/whatsapp';
// Server Component

import {
  getLocale,
  getTranslations,
} from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUp,
  Facebook,
  Instagram,
  Languages,
  Mail,
  MessageCircle,
  MessageSquareText,
  Youtube,
  type LucideIcon,
} from 'lucide-react';

import {
  Container,
} from '@/components/ui/container';
import {
  routePath,
} from '@/config/routes';

const WHATSAPP_NUMBER =
  '16477875999';
const CONTACT_EMAIL =
  'successpathmentors@gmail.com';

interface FooterLink {
  href: string;
  label: string;
}

interface SocialLink {
  key: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export async function SiteFooter() {
  const t =
    await getTranslations(
      'footer'
    );

  const locale =
    await getLocale();

  const currentLocale =
    locale === 'ar'
      ? 'ar'
      : 'en';

  const otherLocale =
    currentLocale === 'ar'
      ? 'en'
      : 'ar';

  const year =
    new Date().getFullYear();

  const homeHref =
    routePath.home(
      currentLocale
    );

  const contactHref =
    routePath.contact(
      currentLocale
    );

  const subjectsLabel =
    currentLocale === 'ar'
      ? 'المواد الدراسية'
      : 'Subjects';

  const packagesLabel =
    currentLocale === 'ar'
      ? 'الباقات'
      : 'Packages';

  const howItWorksLabel =
    currentLocale === 'ar'
      ? 'آلية عمل المنصة'
      : 'How It Works';

  const locationsLabel =
    currentLocale === 'ar'
      ? 'أين نحن'
      : 'Our Locations';

  const whatsappHref = buildWhatsAppHref(
    buildGeneralInquiryMessage(currentLocale, currentLocale === 'ar' ? 'التواصل وخدمات التدريس' : 'Contact and tutoring services')
  );

  const quickLinks: FooterLink[] = [
    {
      href:
        routePath.subjects(
          currentLocale
        ),
      label:
        subjectsLabel,
    },
    {
      href:
        routePath.programs(
          currentLocale
        ),
      label:
        t('links.programs'),
    },
    {
      href:
        routePath.services(
          currentLocale
        ),
      label:
        t('links.services'),
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
      href:
        routePath.howItWorks(
          currentLocale
        ),
      label:
        howItWorksLabel,
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
      href:
        routePath.about(
          currentLocale
        ),
      label:
        t('links.about'),
    },
    {
      href:
        '/fr/programme-francais',
      label:
        'Programme français',
    },
    {
      href:
        routePath.faq(
          currentLocale
        ),
      label:
        t('links.faq'),
    },
    {
      href:
        contactHref,
      label:
        t('links.contact'),
    },
  ];

  const legalLinks: FooterLink[] = [
    {
      href:
        `${homeHref}/privacy`,
      label:
        t('legal.privacy'),
    },
    {
      href:
        `${homeHref}/terms`,
      label:
        t('legal.terms'),
    },
    {
      href:
        `${homeHref}/cancellation-policy`,
      label:
        t('legal.cancellation'),
    },
    {
      href:
        `${homeHref}/data-deletion`,
      label:
        currentLocale === 'ar'
          ? 'حذف البيانات'
          : 'Data Deletion',
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      key:
        'facebook',
      label:
        t('social.facebook'),
      href:
        'https://www.facebook.com/SuccessPathMentors',
      icon:
        Facebook,
    },
    {
      key:
        'instagram',
      label:
        t('social.instagram'),
      href:
        'https://www.instagram.com/successpathmentors',
      icon:
        Instagram,
    },
    {
      key:
        'youtube',
      label:
        t('social.youtube'),
      href:
        'https://www.youtube.com/@SuccessPathMentors',
      icon:
        Youtube,
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
          opacity-[0.025]
          [background-image:radial-gradient(white_1px,transparent_1px)]
          [background-size:30px_30px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -end-40
          -top-48
          -z-10
          h-96
          w-96
          rounded-full
          bg-accent/10
          blur-3xl
        "
      />

      <Container
        className="
          grid
          gap-8
          py-9
          sm:py-10
          md:grid-cols-2
          lg:grid-cols-[1.05fr_1.35fr_1fr]
          lg:gap-10
        "
      >
        <section
          aria-labelledby="footer-brand-heading"
        >
          <h3
            id="footer-brand-heading"
            className="sr-only"
          >
            {t('logoAlt')}
          </h3>

          <Link
            href={homeHref}
            aria-label={
              t('logoLinkLabel')
            }
            className="
              inline-flex
              rounded-xl
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent
              focus-visible:ring-offset-2
              focus-visible:ring-offset-primary-950
            "
          >
            <Image
              src="/images/footer.png"
              alt={t('logoAlt')}
              width={170}
              height={50}
              className="
                h-12
                w-auto
                object-contain
              "
            />
          </Link>

          <p
            className="
              mt-4
              max-w-md
              text-caption
              leading-6
              text-white/70
            "
          >
            {t('description')}
          </p>

          <div
            className="
              mt-5
              flex
              items-center
              gap-2.5
            "
          >
            {socialLinks.map(
              (social) => {
                const Icon =
                  social.icon;

                return (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      social.label
                    }
                    title={social.label}
                    className="
                      inline-flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      text-white/70
                      transition-[background-color,border-color,color,transform]
                      hover:-translate-y-0.5
                      hover:border-accent-300/30
                      hover:bg-accent
                      hover:text-accent-foreground
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-accent
                    "
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-[1.125rem] w-[1.125rem]"
                      strokeWidth={1.8}
                    />
                  </a>
                );
              }
            )}
          </div>
        </section>

        <nav
          aria-label={
            t('quickLinks')
          }
          className="
            md:border-s
            md:border-white/10
            md:ps-8
          "
        >
          <h3
            className="
              text-small
              font-black
              text-white
            "
          >
            {t('quickLinks')}
          </h3>

          <ul
            className="
              mt-4
              grid
              grid-cols-2
              gap-x-6
              gap-y-2.5
            "
          >
            {quickLinks.map(
              (link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      inline-flex
                      text-caption
                      font-semibold
                      leading-6
                      text-white/68
                      transition-colors
                      hover:text-accent-200
                      focus-visible:rounded-sm
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-accent
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <section
          aria-labelledby="footer-contact-heading"
          className="
            md:col-span-2
            lg:col-span-1
            lg:border-s
            lg:border-white/10
            lg:ps-8
          "
        >
          <h3
            id="footer-contact-heading"
            className="
              text-small
              font-black
              text-white
            "
          >
            {t('supportTitle')}
          </h3>

          <div
            className="
              mt-4
              grid
              gap-2.5
            "
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                min-h-11
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-3.5
                py-2.5
                text-white
                transition-colors
                hover:border-accent-300/30
                hover:bg-accent/10
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
              "
            >
              <MessageCircle
                aria-hidden="true"
                className="h-[1.125rem] w-[1.125rem] shrink-0 text-accent-300"
                strokeWidth={1.9}
              />

              <span
                dir="ltr"
                className="text-caption font-bold"
              >
                +1 647 787 5999
              </span>
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="
                flex
                min-h-11
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-3.5
                py-2.5
                text-white
                transition-colors
                hover:border-accent-300/30
                hover:bg-accent/10
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
              "
            >
              <Mail
                aria-hidden="true"
                className="h-[1.125rem] w-[1.125rem] shrink-0 text-accent-300"
                strokeWidth={1.8}
              />

              <span
                dir="ltr"
                className="min-w-0 truncate text-caption font-bold"
              >
                {CONTACT_EMAIL}
              </span>
            </a>

            <Link
              href={contactHref}
              className="
                flex
                min-h-11
                items-center
                gap-3
                rounded-xl
                border
                border-accent-300/25
                bg-accent/10
                px-3.5
                py-2.5
                text-caption
                font-bold
                text-white
                transition-colors
                hover:bg-accent/15
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
              "
            >
              <MessageSquareText
                aria-hidden="true"
                className="h-[1.125rem] w-[1.125rem] shrink-0 text-accent-300"
                strokeWidth={1.8}
              />

              {t('contactPageDescription')}
            </Link>
          </div>

          <Link
            href={`/${otherLocale}`}
            hrefLang={otherLocale}
            className="
              mt-3
              inline-flex
              min-h-10
              items-center
              gap-2
              rounded-lg
              px-2
              text-caption
              font-bold
              text-white/68
              transition-colors
              hover:text-accent-200
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent
            "
          >
            <Languages
              aria-hidden="true"
              className="h-4 w-4 text-accent-300"
              strokeWidth={1.8}
            />

            {t('languageSwitch')}

            <span
              className="
                rounded-full
                bg-white/10
                px-2
                py-0.5
                uppercase
                text-accent-200
              "
            >
              {otherLocale}
            </span>
          </Link>
        </section>
      </Container>

      <div
        className="
          border-t
          border-white/10
          bg-primary-950/30
        "
      >
        <Container
          className="
            flex
            flex-col
            gap-3
            py-4
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p
            className="
              text-caption
              leading-6
              text-white/58
            "
          >
            © {year} Success Path Mentors — Success Path Mentors.{' '}
            {t('rightsReserved')}.
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
            "
          >
            {legalLinks.map(
              (link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    text-caption
                    text-white/58
                    transition-colors
                    hover:text-accent-200
                    focus-visible:rounded-sm
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-accent
                  "
                >
                  {link.label}
                </Link>
              )
            )}

            <a
              href="#main-content"
              aria-label={
                t('backToTop')
              }
              className="
                inline-flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-white/65
                transition-colors
                hover:bg-accent
                hover:text-accent-foreground
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
              "
            >
              <ArrowUp
                aria-hidden="true"
                className="h-4 w-4"
                strokeWidth={2}
              />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
