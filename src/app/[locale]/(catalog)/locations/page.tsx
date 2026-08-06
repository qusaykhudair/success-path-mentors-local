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
  LocationPageContent,
} from '@/components/locations/location-page-content';
import {
  routePath,
} from '@/config/routes';
import {
  isSupportedLocale,
} from '@/config/site';
import {
  getLocalizedLocationPage,
  getLocationAncestors,
  getLocationChildren,
  getRelatedLocations,
} from '@/lib/locations/get-location-page';
import {
  buildLocationMetadata,
} from '@/lib/locations/metadata';
import {
  buildLocationBreadcrumbSchema,
  buildLocationPageSchemas,
} from '@/lib/locations/schemas';

interface LocationsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: LocationsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const page =
    getLocalizedLocationPage(
      locale,
      []
    );

  return page
    ? buildLocationMetadata({
        locale,
        page,
      })
    : {};
}

export default async function LocationsPage({
  params,
}: LocationsPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const page =
    getLocalizedLocationPage(
      locale,
      []
    );

  if (!page) {
    notFound();
  }

  const ancestors =
    getLocationAncestors(
      locale,
      page
    );

  const childLocations =
    getLocationChildren(
      locale,
      page
    );

  const related =
    getRelatedLocations(
      locale,
      page
    );

  const breadcrumbItems = [
    {
      name:
        locale === 'ar'
          ? 'الرئيسية'
          : 'Home',
      href:
        routePath.home(locale),
    },
    {
      name:
        page.name,
      href:
        routePath.locations(
          locale
        ),
    },
  ];

  const schemas =
    buildLocationPageSchemas({
      locale,
      page,
      childLocations,
    });

  return (
    <>
      <JsonLd
        id="locations-breadcrumb-schema"
        data={
          buildLocationBreadcrumbSchema(
            breadcrumbItems
          )
        }
      />

      <JsonLd
        id="locations-page-schema"
        data={schemas.webPage}
      />

      <JsonLd
        id="locations-service-schema"
        data={schemas.service}
      />

      <JsonLd
        id="locations-faq-schema"
        data={schemas.faq}
      />

      <LocationPageContent
        locale={locale}
        page={page}
        ancestors={ancestors}
        childLocations={childLocations}
        related={related}
      />
    </>
  );
}
