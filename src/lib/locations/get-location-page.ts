import type {
  SiteLocale,
} from '@/config/site';
import {
  getLocationDefinitionById,
  getLocationDefinitionBySegments,
  localizeLocationPage,
} from '@/content/locations/location-pages';
import type {
  LocalizedLocationPage,
} from '@/types/location';

export function getLocalizedLocationPage(
  locale: SiteLocale,
  segments: string[]
): LocalizedLocationPage | null {
  const definition =
    getLocationDefinitionBySegments(
      segments
    );

  return definition
    ? localizeLocationPage(
        definition,
        locale
      )
    : null;
}

export function getLocalizedLocationPageById(
  locale: SiteLocale,
  id: string
): LocalizedLocationPage | null {
  const definition =
    getLocationDefinitionById(id);

  return definition
    ? localizeLocationPage(
        definition,
        locale
      )
    : null;
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
