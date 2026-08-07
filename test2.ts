import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  pathnames: {
    '/how-it-works': { en: '/how-it-works', ar: '/آلية-العمل' }
  }
});

const nav = createNavigation(routing);

console.log("pathname test:", nav.getPathname({locale: 'ar', href: '/how-it-works'}));
