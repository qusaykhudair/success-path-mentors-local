import type {
  Metadata,
} from 'next';
import {
  notFound,
} from 'next/navigation';

import {
  JsonLd,
} from '@/components/seo/json-ld';
import {
  SubjectsPageContent,
} from '@/components/subjects/subjects-page-content';
import {
  routePath,
} from '@/config/routes';
import {
  isSupportedLocale,
  siteConfig,
} from '@/config/site';
import {
  approvedChemistryStrands,
} from '@/content/subjects/chemistry/chemistry-strands';
import {
  approvedEnglishStrands,
} from '@/content/subjects/english/english-strands';
import {
  publicMathPathways,
} from '@/content/subjects/math/math-pathways';
import {
  approvedGeneralScienceStrands,
} from '@/content/subjects/general-science/general-science-strands';
import {
  approvedPhysicsStrands,
} from '@/content/subjects/physics/physics-strands';
import {
  getSubjectsPageContent,
} from '@/content/subjects/subjects-page-content';
import {
  programmeFrancaisRoutes,
} from '@/lib/programme-francais/routes';
import {
  buildPageMetadata,
} from '@/lib/seo/metadata';
import {
  buildBreadcrumbSchema,
} from '@/lib/seo/schemas';
import type {
  BreadcrumbItem,
} from '@/types/internal-page';

interface SubjectsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: SubjectsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  return buildPageMetadata({
    locale,
    seo:
      getSubjectsPageContent(
        locale
      ).seo,
  });
}

export default async function SubjectsPage({
  params,
}: SubjectsPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const copy =
    getSubjectsPageContent(
      locale
    );

  const subjectsHref =
    routePath.subjects(
      locale
    );

  const breadcrumbs:
    BreadcrumbItem[] = [
      {
        label:
          copy.breadcrumb.home,
        href:
          routePath.home(locale),
      },
      {
        label:
          copy.breadcrumb.current,
      },
    ];

  const subjects = [
    {
      key:
        'math' as const,
      title:
        copy.directory.math
          .title,
      description:
        copy.directory.math
          .description,
      gradeRange:
        copy.directory.math
          .gradeRange,
      unitCount:
        publicMathPathways.length,
      unitLabel:
        copy.directory.math
          .unitLabel,
      action:
        copy.directory.math
          .action,
      branchesLabel:
        copy.directory.math
          .branchesLabel,
      href:
        routePath.subject(
          locale,
          'math'
        ),
      branches:
        publicMathPathways.map(
          (pathway) => ({
            title:
              pathway.title[
                locale
              ],
            href:
              routePath.mathPathway(
                locale,
                pathway.slug
              ),
          })
        ),
    },
    {
      key:
        'english' as const,
      title:
        copy.directory.english
          .title,
      description:
        copy.directory.english
          .description,
      gradeRange:
        copy.directory.english
          .gradeRange,
      unitCount:
        approvedEnglishStrands.length,
      unitLabel:
        copy.directory.english
          .unitLabel,
      action:
        copy.directory.english
          .action,
      branchesLabel:
        copy.directory.english
          .branchesLabel,
      href:
        routePath.subject(
          locale,
          'english'
        ),
      branches:
        approvedEnglishStrands.map(
          (strand) => ({
            title:
              strand.title[
                locale
              ],
            href:
              routePath.englishStrand(
                locale,
                strand.slug
              ),
          })
        ),
    },
    {
      key:
        'chemistry' as const,
      title:
        copy.directory.chemistry
          .title,
      description:
        copy.directory.chemistry
          .description,
      gradeRange:
        copy.directory.chemistry
          .gradeRange,
      unitCount:
        approvedChemistryStrands.length,
      unitLabel:
        copy.directory.chemistry
          .unitLabel,
      action:
        copy.directory.chemistry
          .action,
      branchesLabel:
        copy.directory.chemistry
          .branchesLabel,
      href:
        routePath.subject(
          locale,
          'chemistry'
        ),
      branches:
        approvedChemistryStrands.map(
          (strand) => ({
            title:
              strand.title[
                locale
              ],
            href:
              routePath.scienceStrand(
                locale,
                'chemistry',
                strand.slug
              ),
          })
        ),
    },
    {
      key:
        'physics' as const,
      title:
        copy.directory.physics
          .title,
      description:
        copy.directory.physics
          .description,
      gradeRange:
        copy.directory.physics
          .gradeRange,
      unitCount:
        approvedPhysicsStrands.length,
      unitLabel:
        copy.directory.physics
          .unitLabel,
      action:
        copy.directory.physics
          .action,
      branchesLabel:
        copy.directory.physics
          .branchesLabel,
      href:
        routePath.subject(
          locale,
          'physics'
        ),
      branches:
        approvedPhysicsStrands.map(
          (strand) => ({
            title:
              strand.title[
                locale
              ],
            href:
              routePath.scienceStrand(
                locale,
                'physics',
                strand.slug
              ),
          })
        ),
    },
    {
      key:
        'general-science' as const,
      title:
        copy.directory.generalScience
          .title,
      description:
        copy.directory.generalScience
          .description,
      gradeRange:
        copy.directory.generalScience
          .gradeRange,
      unitCount:
        approvedGeneralScienceStrands.length,
      unitLabel:
        copy.directory.generalScience
          .unitLabel,
      action:
        copy.directory.generalScience
          .action,
      branchesLabel:
        copy.directory.generalScience
          .branchesLabel,
      href:
        routePath.subject(
          locale,
          'general-science'
        ),
      branches:
        approvedGeneralScienceStrands.map(
          (strand) => ({
            title:
              strand.title[
                locale
              ],
            href:
              routePath.scienceStrand(
                locale,
                'general-science',
                strand.slug
              ),
          })
        ),
    },
    {
      key:
        'programme-francais' as const,
      title:
        copy.directory.frenchProgram
          .title,
      description:
        copy.directory.frenchProgram
          .description,
      gradeRange:
        copy.directory.frenchProgram
          .gradeRange,
      unitCount:
        2,
      unitLabel:
        copy.directory.frenchProgram
          .unitLabel,
      action:
        copy.directory.frenchProgram
          .action,
      branchesLabel:
        copy.directory.frenchProgram
          .branchesLabel,
      href:
        programmeFrancaisRoutes.home,
      branches: [
        {
          title:
            'Français',
          href:
            programmeFrancaisRoutes.subject(
              'francais'
            ),
        },
        {
          title:
            'Mathématiques en français',
          href:
            programmeFrancaisRoutes.subject(
              'mathematiques-en-francais'
            ),
        },
      ],
    },
  ];

  const pageUrl =
    new URL(
      subjectsHref,
      siteConfig.url
    ).toString();

  const collectionSchema = {
    '@context':
      'https://schema.org',
    '@type':
      'CollectionPage',
    '@id':
      `${pageUrl}#subjects`,
    url:
      pageUrl,
    name:
      copy.seo.title,
    description:
      copy.seo.description,
    inLanguage:
      locale,
    isPartOf: {
      '@type':
        'WebSite',
      '@id':
        `${siteConfig.url}/#website`,
      url:
        siteConfig.url,
      name:
        siteConfig.name,
    },
    mainEntity: {
      '@type':
        'ItemList',
      numberOfItems:
        subjects.length,
      itemListElement:
        subjects.map(
          (subject, index) => ({
            '@type':
              'ListItem',
            position:
              index + 1,
            name:
              subject.title,
            url:
              new URL(
                subject.href,
                siteConfig.url
              ).toString(),
          })
        ),
    },
  };

  return (
    <>
      <JsonLd
        id="subjects-breadcrumb-schema"
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
                      ? subjectsHref
                      : undefined
                  ),
              })
            )
          )
        }
      />

      <JsonLd
        id="subjects-collection-schema"
        data={
          collectionSchema
        }
      />

      <SubjectsPageContent
        locale={locale}
        copy={copy}
        breadcrumbs={
          breadcrumbs
        }
        subjects={subjects}
        contactHref={
          routePath.contact(
            locale
          )
        }
        aboutHref={
          routePath.about(
            locale
          )
        }
      />
    </>
  );
}
