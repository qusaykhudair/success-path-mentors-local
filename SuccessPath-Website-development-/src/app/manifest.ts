import type { MetadataRoute } from 'next';

import { SITE } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/en',

    name: SITE.name,

    short_name: 'Success Path Mentors',

    description: SITE.description,

    start_url: '/en',

    scope: '/',

    display: 'standalone',

    orientation: 'portrait-primary',

    background_color: SITE.backgroundColor,

    theme_color: SITE.themeColor,

    lang: 'en',

    dir: 'ltr',

    categories: [
      'education',
      'online learning',
      'tutoring',
    ],

    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],

    shortcuts: [
      {
        name: 'Programs',
        short_name: 'Programs',
        description: 'Explore tutoring programs',
        url: '/en#programs',
        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'Packages',
        short_name: 'Packages',
        description: 'View tutoring plans',
        url: '/en#pricing',
        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    ],
  };
}