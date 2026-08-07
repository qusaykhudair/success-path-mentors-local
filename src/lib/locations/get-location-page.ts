import type {
  SiteLocale,
} from '@/config/site';
import {
  getLocationEducationResources,
} from '@/content/locations/education-resources';
import {
  getLocationDefinitionById,
  getLocationDefinitionBySegments,
  localizeLocationPage,
} from '@/content/locations/location-pages';
import type {
  LocalizedLocationPage,
} from '@/types/location';

function withEducationResources(
  page: LocalizedLocationPage,
  locale: SiteLocale
): LocalizedLocationPage {
  const additionalResources =
    getLocationEducationResources(
      page.id,
      locale
    );

  if (additionalResources.length === 0) {
    return page;
  }

  const resourcesByUrl = new Map(
    page.resources.map((resource) => [
      resource.url,
      resource,
    ])
  );

  for (const resource of additionalResources) {
    resourcesByUrl.set(
      resource.url,
      resource
    );
  }

  return {
    ...page,
    resources: Array.from(
      resourcesByUrl.values()
    ),
  };
}

export function getLocalizedLocationPage(
  locale: SiteLocale,
  segments: string[]
): LocalizedLocationPage | null {
  const definition =
    getLocationDefinitionBySegments(
      segments
    );

  if (!definition) {
    return null;
  }

  return withEducationResources(
    localizeLocationPage(
      definition,
      locale
    ),
    locale
  );
}

export function getLocalizedLocationPageById(
  locale: SiteLocale,
  id: string
): LocalizedLocationPage | null {
  const definition =
    getLocationDefinitionById(id);

  if (!definition) {
    return null;
  }

  return withEducationResources(
    localizeLocationPage(
      definition,
      locale
    ),
    locale
  );
}

export function getLocationAncestors(
  locale: SiteLocale,
  page: LocalizedLocationPage
): LocalizedLocationPage[] {
  const ancestors:
    LocalizedLocationPage[] = [];

  let parentId = page.parentId;

  while (parentId) {
    const parent =
      getLocalizedLocationPageById(
        locale,
        parentId
      );

    if (!parent) {
      break;
    }

    ancestors.unshift(parent);
    parentId = parent.parentId;
  }

  return ancestors;
}

export function getLocationChildren(
  locale: SiteLocale,
  page: LocalizedLocationPage
): LocalizedLocationPage[] {
  return page.childIds
    .map((id) =>
      getLocalizedLocationPageById(
        locale,
        id
      )
    )
    .filter(
      (
        item
      ): item is LocalizedLocationPage =>
        Boolean(item)
    );
}

export function getRelatedLocations(
  locale: SiteLocale,
  page: LocalizedLocationPage
): LocalizedLocationPage[] {
  return page.relatedIds
    .map((id) =>
      getLocalizedLocationPageById(
        locale,
        id
      )
    )
    .filter(
      (
        item
      ): item is LocalizedLocationPage =>
        Boolean(item)
    );
}
