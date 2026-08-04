import type {
  Metadata,
} from 'next';
import {
  notFound,
} from 'next/navigation';

import {
  LocationPageContent,
} from '@/components/locations/location-page-content';
import {
  JsonLd,
} from '@/components/seo/json-ld';
import {
  getLocationStaticSegments,
} from '@/content/locations/location-pages';
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

interface LocationPageProps {
  params: Promise<{
    locale: string;
    segments: string[];
  }>;
}

export const dynamicParams =
  false;

export function generateStaticParams() {
  return getLocationStaticSegments().map(
    (segments) => ({
      segments,
    })
  );
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const {
    locale,
    segments,
  } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const page =
    getLocalizedLocationPage(
      locale,
      segments
    );

  return page
    ? buildLocationMetadata({
        locale,
        page,
      })
    : {};
}

export default async function LocationPage({
  params,
}: LocationPageProps) {
  const {
    locale,
    segments,
  } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const page =
    getLocalizedLocationPage(
      locale,
      segments
    );

  if (!page) {
    notFound();
  }

  const ancestors =
    getLocationAncestors(
      locale,
      page
    );

  const children =
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
    ...ancestors.map(
      (item) => ({
        name:
          item.name,
        href:
          routePath.location(
            locale,
            ...item.segments
          ),
      })
    ),
    {
      name:
        page.name,
      href:
        routePath.location(
          locale,
          ...page.segments
        ),
    },
  ];

  const schemas =
    buildLocationPageSchemas({
      locale,
      page,
      children,
    });

  return (
    <>
      <JsonLd
        id="location-breadcrumb-schema"
        data={
          buildLocationBreadcrumbSchema(
            breadcrumbItems
          )
        }
      />

      <JsonLd
        id="location-page-schema"
        data={schemas.webPage}
      />

      <JsonLd
        id="location-service-schema"
        data={schemas.service}
      />

      <JsonLd
        id="location-faq-schema"
        data={schemas.faq}
      />

      <LocationPageContent
        locale={locale}
        page={page}
        ancestors={ancestors}
        children={children}
        related={related}
      />
    </>
  );
}
