import type {
  Metadata,
} from 'next';
import Link from 'next/link';
import {
  notFound,
} from 'next/navigation';

import {
  JsonLd,
} from '@/components/seo/json-ld';
import {
  ScienceOverviewCta,
} from '@/components/subjects/science/science-overview-cta';
import {
  ScienceStrandGrid,
} from '@/components/subjects/science/science-strand-grid';
import {
  ScienceSubjectHero,
} from '@/components/subjects/science/science-subject-hero';
import {
  LocalAvailabilityBlock,
} from '@/components/local/local-availability-block';
import {
  getGeneralScienceBookingHref,
  routePath,
} from '@/config/routes';
import {
  isSupportedLocale,
  siteConfig,
} from '@/config/site';
import {
  getGeneralSciencePageContent,
} from '@/content/subjects/general-science/general-science-page-content';
import {
  getPublicGeneralScienceOverview,
} from '@/lib/general-science/get-public-general-science-overview';
import {
  buildPageMetadata,
} from '@/lib/seo/metadata';
import {
  buildBreadcrumbSchema,
} from '@/lib/seo/schemas';
import {
  buildScienceServiceSchema,
} from '@/lib/seo/science-subject-schema';
import type {
  BreadcrumbItem,
} from '@/types/internal-page';

interface GeneralSciencePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: GeneralSciencePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  return buildPageMetadata({
    locale,
    seo:
      getGeneralSciencePageContent(
        locale
      ).seo,
  });
}

export default async function GeneralSciencePage({
  params,
}: GeneralSciencePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content =
    getGeneralSciencePageContent(
      locale
    );

  const overview =
    getPublicGeneralScienceOverview(
      locale
    );

  const bookingHref =
    getGeneralScienceBookingHref(
      locale,
      siteConfig.bookingUrl
    );

  const pageHref =
    routePath.subject(
      locale,
      'general-science'
    );

  const chemistryHref =
    routePath.subject(
      locale,
      'chemistry'
    );

  const physicsHref =
    routePath.subject(
      locale,
      'physics'
    );

  const breadcrumbs:
    BreadcrumbItem[] = [
      {
        label:
          content.hero.homeLabel,
        href:
          routePath.home(locale),
      },
      {
        label:
          content.hero.subjectsLabel,
        href:
          routePath.subjects(locale),
      },
      {
        label:
          content.hero.currentLabel,
      },
    ];

  return (
    <>
      <JsonLd
        id="general-science-breadcrumb-schema"
        data={
          buildBreadcrumbSchema(
            breadcrumbs.map(
              (item, index) => ({
                ...item,
                href:
                  item.href ??
                  (
                    index ===
                    breadcrumbs.length - 1
                      ? pageHref
                      : undefined
                  ),
              })
            )
          )
        }
      />

      <JsonLd
        id="general-science-service-schema"
        data={
          buildScienceServiceSchema({
            locale,
            pathname:
              content.seo.pathname,
            name:
              content.schema
                .serviceName,
            description:
              content.schema
                .serviceDescription,
            overview,
          })
        }
      />

      <ScienceSubjectHero
        copy={content.hero}
        breadcrumbs={breadcrumbs}
        primaryHref="#general-science-strands"
        secondaryHref={bookingHref}
        subjectIconKey="earth"
      />

      <ScienceStrandGrid
        locale={locale}
        subjectSlug="general-science"
        strands={overview.strands}
        copy={content.strands}
      />

      <section
        aria-labelledby="science-specialist-pathways"
        className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide">
            {locale === 'ar'
              ? 'مسارات العلوم المتخصصة'
              : 'Specialist science pathways'}
          </p>
          <h2
            id="science-specialist-pathways"
            className="mt-2 text-2xl font-bold sm:text-3xl"
          >
            {locale === 'ar'
              ? 'هل يحتاج الطالب إلى دعم متخصص في الكيمياء أو الفيزياء؟'
              : 'Need dedicated Chemistry or Physics support?'}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            {locale === 'ar'
              ? 'استخدم صفحة العلوم العامة للدعم العلمي المتكامل، أو انتقل إلى المسار المتخصص المناسب للمقرر الحالي للطالب.'
              : 'Use this Science tutoring hub for integrated General Science support, or continue to the specialist page that matches the student’s current course.'}
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link
            href={chemistryHref}
            className="rounded-2xl border p-5 transition-shadow hover:shadow-sm"
          >
            <span className="font-semibold">
              {locale === 'ar'
                ? 'تدريس الكيمياء'
                : 'Chemistry Tutoring'}
            </span>
            <span className="mt-1 block text-sm text-muted-foreground">
              {locale === 'ar'
                ? 'انتقل إلى صفحة الكيمياء ومساراتها المتخصصة.'
                : 'Explore the dedicated Chemistry curriculum and tutoring pathway.'}
            </span>
          </Link>

          <Link
            href={physicsHref}
            className="rounded-2xl border p-5 transition-shadow hover:shadow-sm"
          >
            <span className="font-semibold">
              {locale === 'ar'
                ? 'تدريس الفيزياء'
                : 'Physics Tutoring'}
            </span>
            <span className="mt-1 block text-sm text-muted-foreground">
              {locale === 'ar'
                ? 'انتقل إلى صفحة الفيزياء ومساراتها المتخصصة.'
                : 'Explore the dedicated Physics curriculum and tutoring pathway.'}
            </span>
          </Link>
        </div>
      </section>

      <LocalAvailabilityBlock
        locale={locale}
        subjectName={locale === 'ar' ? 'العلوم العامة' : 'General Science'}
      />

      <ScienceOverviewCta
        copy={content.cta}
        primaryHref={bookingHref}
        secondaryHref={
          routePath.contact(locale)
        }
      />
    </>
  );
}
