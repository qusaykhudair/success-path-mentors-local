import {
  FrenchProgramOverview,
} from '@/components/programme-francais/french-program-overview';
import {
  JsonLd,
} from '@/components/seo/json-ld';
import {
  siteConfig,
} from '@/config/site';
import {
  getProgrammeFrancaisOverview,
} from '@/lib/programme-francais/get-programme-francais';
import {
  buildFrenchProgramMetadata,
} from '@/lib/programme-francais/metadata';
import {
  programmeFrancaisRoutes,
} from '@/lib/programme-francais/routes';

export const metadata =
  buildFrenchProgramMetadata({
    title:
      'Programme français : français et mathématiques | Success Path Mentors',
    description:
      'Programme entièrement en français pour l’apprentissage du français et des mathématiques, organisé de la 1re à la 12e année.',
    pathname:
      '/programme-francais',
  });

export default function ProgrammeFrancaisPage() {
  const overview =
    getProgrammeFrancaisOverview();

  const pageUrl =
    new URL(
      programmeFrancaisRoutes.home,
      siteConfig.url
    ).toString();

  const schema = {
    '@context':
      'https://schema.org',
    '@type':
      'CollectionPage',
    '@id':
      `${pageUrl}#programme`,
    url:
      pageUrl,
    name:
      'Programme français',
    description:
      'Français et mathématiques enseignés entièrement en français de la 1re à la 12e année.',
    inLanguage:
      'fr',
    isPartOf: {
      '@type':
        'WebSite',
      '@id':
        `${siteConfig.url}/#website`,
    },
    mainEntity: {
      '@type':
        'ItemList',
      numberOfItems:
        overview.subjects.length,
      itemListElement:
        overview.subjects.map(
          (subject, index) => ({
            '@type':
              'ListItem',
            position:
              index + 1,
            name:
              subject.subject.title,
            url:
              new URL(
                programmeFrancaisRoutes.subject(
                  subject.subject.key
                ),
                siteConfig.url
              ).toString(),
          })
        ),
    },
  };

  return (
    <>
      <JsonLd
        id="programme-francais-schema"
        data={schema}
      />

      <FrenchProgramOverview
        overview={overview}
      />
    </>
  );
}
