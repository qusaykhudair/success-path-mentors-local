import type {
  Metadata,
} from 'next';
import {
  notFound,
} from 'next/navigation';

import {
  FrenchDomainPageContent,
} from '@/components/programme-francais/french-domain-page-content';
import {
  JsonLd,
} from '@/components/seo/json-ld';
import {
  siteConfig,
} from '@/config/site';
import {
  getProgrammeFrancaisSubjectDefinition,
  programmeFrancaisSubjects,
} from '@/content/programme-francais/programme-francais-definitions';
import {
  getProgrammeFrancaisDomainCurriculum,
} from '@/lib/programme-francais/get-programme-francais';
import {
  buildFrenchProgramMetadata,
} from '@/lib/programme-francais/metadata';
import {
  programmeFrancaisRoutes,
} from '@/lib/programme-francais/routes';

interface FrenchDomainPageProps {
  params: Promise<{
    matiere: string;
    domaine: string;
  }>;
}

export const dynamicParams =
  false;

export function generateStaticParams() {
  return programmeFrancaisSubjects.flatMap(
    (subject) =>
      subject.domains.map(
        (domain) => ({
          matiere:
            subject.key,
          domaine:
            domain.slug,
        })
      )
  );
}

export async function generateMetadata({
  params,
}: FrenchDomainPageProps): Promise<Metadata> {
  const {
    matiere,
    domaine,
  } = await params;

  const subject =
    getProgrammeFrancaisSubjectDefinition(
      matiere
    );

  const curriculum =
    getProgrammeFrancaisDomainCurriculum(
      matiere,
      domaine
    );

  if (
    !subject ||
    !curriculum
  ) {
    return {};
  }

  return buildFrenchProgramMetadata({
    title:
      `${curriculum.domaine.titre} par niveau | ${subject.title}`,
    description:
      curriculum.domaine.description,
    pathname:
      `/programme-francais/${subject.key}/${curriculum.domaine.slug}`,
  });
}

export default async function FrenchDomainPage({
  params,
}: FrenchDomainPageProps) {
  const {
    matiere,
    domaine,
  } = await params;

  const subject =
    getProgrammeFrancaisSubjectDefinition(
      matiere
    );

  const curriculum =
    getProgrammeFrancaisDomainCurriculum(
      matiere,
      domaine
    );

  if (
    !subject ||
    !curriculum
  ) {
    notFound();
  }

  const pageHref =
    programmeFrancaisRoutes.domain(
      subject.key,
      curriculum.domaine.slug
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
      curriculum.domaine.titre,
    description:
      curriculum.domaine.description,
    inLanguage:
      'fr',
    educationalLevel:
      curriculum.metadata
        .niveaux.map(
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
    isPartOf: {
      '@type':
        'Course',
      name:
        subject.title,
      url:
        new URL(
          programmeFrancaisRoutes.subject(
            subject.key
          ),
          siteConfig.url
        ).toString(),
    },
  };

  return (
    <>
      <JsonLd
        id="programme-francais-domain-schema"
        data={schema}
      />

      <FrenchDomainPageContent
        subject={subject}
        curriculum={curriculum}
      />
    </>
  );
}
