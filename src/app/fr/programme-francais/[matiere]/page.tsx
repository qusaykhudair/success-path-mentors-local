import type {
  Metadata,
} from 'next';
import {
  notFound,
} from 'next/navigation';

import {
  FrenchSubjectOverview,
} from '@/components/programme-francais/french-subject-overview';
import {
  JsonLd,
} from '@/components/seo/json-ld';
import {
  siteConfig,
} from '@/config/site';
import {
  programmeFrancaisSubjects,
} from '@/content/programme-francais/programme-francais-definitions';
import {
  getProgrammeFrancaisSubjectOverview,
} from '@/lib/programme-francais/get-programme-francais';
import {
  buildFrenchProgramMetadata,
} from '@/lib/programme-francais/metadata';
import {
  programmeFrancaisRoutes,
} from '@/lib/programme-francais/routes';

interface FrenchSubjectPageProps {
  params: Promise<{
    matiere: string;
  }>;
}

export const dynamicParams =
  false;

export function generateStaticParams() {
  return programmeFrancaisSubjects.map(
    (subject) => ({
      matiere:
        subject.key,
    })
  );
}

export async function generateMetadata({
  params,
}: FrenchSubjectPageProps): Promise<Metadata> {
  const {
    matiere,
  } = await params;

  const overview =
    getProgrammeFrancaisSubjectOverview(
      matiere
    );

  if (!overview) {
    return {};
  }

  return buildFrenchProgramMetadata({
    title:
      `${overview.subject.title} par niveau | Mustafa Academy`,
    description:
      overview.subject.description,
    pathname:
      `/programme-francais/${overview.subject.key}`,
  });
}

export default async function FrenchSubjectPage({
  params,
}: FrenchSubjectPageProps) {
  const {
    matiere,
  } = await params;

  const overview =
    getProgrammeFrancaisSubjectOverview(
      matiere
    );

  if (!overview) {
    notFound();
  }

  const pageHref =
    programmeFrancaisRoutes.subject(
      overview.subject.key
    );

  const pageUrl =
    new URL(
      pageHref,
      siteConfig.url
    ).toString();

  const schema = {
    '@context':
      'https://schema.org',
    '@type':
      'Course',
    '@id':
      `${pageUrl}#course`,
    url:
      pageUrl,
    name:
      overview.subject.title,
    description:
      overview.subject.description,
    inLanguage:
      'fr',
    educationalLevel:
      overview.totals
        .gradeLevels.map(
          (level) =>
            level === 1
              ? '1re année'
              : `${level}e année`
        ),
    provider: {
      '@type':
        'EducationalOrganization',
      '@id':
        `${siteConfig.url}/#organization`,
    },
    hasCourseInstance:
      overview.domains.map(
        (domain) => ({
          '@type':
            'CourseInstance',
          name:
            domain.title,
          url:
            new URL(
              programmeFrancaisRoutes.domain(
                overview.subject.key,
                domain.slug
              ),
              siteConfig.url
            ).toString(),
        })
      ),
  };

  return (
    <>
      <JsonLd
        id="programme-francais-subject-schema"
        data={schema}
      />

      <FrenchSubjectOverview
        overview={overview}
      />
    </>
  );
}
