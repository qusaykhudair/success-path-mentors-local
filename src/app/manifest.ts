import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: 'Mustafa Academy — Success Path Mentors',
    short_name: 'Mustafa Academy',

    description:
      'Professional online tutoring platform helping students succeed through personalized learning and expert mentorship.',

    start_url: '/',

    scope: '/',

    display: 'standalone',

    orientation: 'portrait',

    background_color: '#ffffff',

    theme_color: '#0F172A',

    lang: 'en',

    dir: 'ltr',

    categories: [
      'education',
      'online learning',
      'tutoring',
      'mentoring',
    ],

    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],

    screenshots: [],

    shortcuts: [
      {
        name: 'Programs',
        short_name: 'Programs',
        url: '/en/programs',
      },

      {
        name: 'Contact',
        short_name: 'Contact',
        url: '/en/contact',
      },
    ],
  };
}