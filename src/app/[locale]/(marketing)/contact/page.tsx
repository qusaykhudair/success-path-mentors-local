import type { Metadata } from 'next';
import {
  Mail,
  MessageSquareText,
  ShieldCheck,
} from 'lucide-react';
import { notFound } from 'next/navigation';

import { ContactForm } from '@/components/contact/contact-form';
import { ContentSection } from '@/components/internal/content-section';
import { InternalPageHero } from '@/components/internal/internal-page-hero';
import { InternalPageShell } from '@/components/internal/internal-page-shell';
import {
  isSupportedLocale,
  siteConfig,
} from '@/config/site';
import { contactPageContent } from '@/content/pages/contact';
import { buildPageMetadata } from '@/lib/seo/metadata';

interface ContactPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const content =
    contactPageContent[locale];

  return buildPageMetadata({
    locale,
    seo: {
      title: content.seo.title,
      description:
        content.seo.description,
      pathname: '/contact',
    },
  });
}

export default async function ContactPage({
  params,
}: ContactPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content =
    contactPageContent[locale];

  const homeHref = `/${locale}`;
  const pageHref =
    `${homeHref}/contact`;
  const emailHref =
    `mailto:${siteConfig.email}`;

  const breadcrumbs = [
    {
      label:
        content.breadcrumbs.home,
      href: homeHref,
    },
    {
      label:
        content.breadcrumbs.current,
    },
  ];

  const pageUrl = new URL(
    pageHref,
    siteConfig.url
  ).toString();

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${pageUrl}#contact-page`,
    url: pageUrl,
    name: content.seo.title,
    description:
      content.seo.description,
    inLanguage: locale,
    mainEntity: {
      '@type':
        'EducationalOrganization',
      '@id':
        `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName:
        siteConfig.organizationName,
      url: siteConfig.url,
      email: siteConfig.email,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType:
          'customer support',
        email: siteConfig.email,
        availableLanguage: [
          'English',
          'Arabic',
          'French',
        ],
      },
    },
  };

  return (
    <InternalPageShell
      schemaId="contact"
      breadcrumbs={breadcrumbs}
      additionalSchemas={[
        contactSchema,
      ]}
    >
      <InternalPageHero
        breadcrumbs={breadcrumbs}
        breadcrumbLabel={
          content.breadcrumbs.ariaLabel
        }
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={
          content.hero.description
        }
        primaryAction={{
          label:
            content.hero.primaryAction,
          href: `${pageHref}#contact-form`,
        }}
        secondaryAction={{
          label:
            content.hero.secondaryAction,
          href: emailHref,
          external: true,
        }}
        highlights={
          content.hero.highlights
        }
      />

      <ContentSection
        id="contact-form"
        eyebrow={
          content.introduction.eyebrow
        }
        title={
          content.introduction.title
        }
        description={
          content.introduction.description
        }
      >
        <div
          className="
            grid
            items-start
            gap-7
            lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.38fr)]
            lg:gap-10
          "
        >
          <ContactForm
            locale={locale}
            content={content.form}
          />

          <aside
            className="
              rounded-[1.5rem]
              border
              border-white/10
              bg-brand-dark
              p-6
              text-white
              shadow-xl
              sm:p-7
              lg:sticky
              lg:top-24
            "
          >
            <span
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-accent
                text-accent-foreground
              "
            >
              <Mail
                aria-hidden="true"
                className="h-6 w-6"
                strokeWidth={1.8}
              />
            </span>

            <p
              className="
                mt-6
                text-caption
                font-bold
                uppercase
                tracking-wider
                text-accent-200
              "
            >
              {
                content.directContact
                  .eyebrow
              }
            </p>

            <h2
              className="
                mt-3
                text-h3
                font-black
                leading-tight
                text-white
              "
            >
              {
                content.directContact.title
              }
            </h2>

            <p
              className="
                mt-4
                text-small
                leading-7
                text-white/70
              "
            >
              {
                content.directContact
                  .description
              }
            </p>

            <dl className="mt-7 grid gap-5">
              <div
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                "
              >
                <dt
                  className="
                    flex
                    items-center
                    gap-2
                    text-caption
                    font-bold
                    uppercase
                    tracking-wider
                    text-accent-200
                  "
                >
                  <Mail
                    aria-hidden="true"
                    className="h-4 w-4"
                  />

                  {
                    content.directContact
                      .emailLabel
                  }
                </dt>

                <dd className="mt-2">
                  <a
                    href={emailHref}
                    className="
                      break-all
                      text-small
                      font-bold
                      text-white
                      underline
                      decoration-accent-400
                      underline-offset-4
                      hover:text-accent-100
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-accent
                    "
                  >
                    {
                      content.directContact
                        .emailValue
                    }
                  </a>
                </dd>
              </div>

              <div
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                "
              >
                <dt
                  className="
                    flex
                    items-center
                    gap-2
                    text-caption
                    font-bold
                    uppercase
                    tracking-wider
                    text-accent-200
                  "
                >
                  <MessageSquareText
                    aria-hidden="true"
                    className="h-4 w-4"
                  />

                  {
                    content.directContact
                      .replyLabel
                  }
                </dt>

                <dd
                  className="
                    mt-2
                    text-small
                    leading-7
                    text-white/80
                  "
                >
                  {
                    content.directContact
                      .replyValue
                  }
                </dd>
              </div>

              <div
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                "
              >
                <dt
                  className="
                    flex
                    items-center
                    gap-2
                    text-caption
                    font-bold
                    uppercase
                    tracking-wider
                    text-accent-200
                  "
                >
                  <ShieldCheck
                    aria-hidden="true"
                    className="h-4 w-4"
                  />

                  {
                    content.directContact
                      .privacyLabel
                  }
                </dt>

                <dd
                  className="
                    mt-2
                    text-small
                    leading-7
                    text-white/80
                  "
                >
                  {
                    content.directContact
                      .privacyValue
                  }
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </ContentSection>
    </InternalPageShell>
  );
}