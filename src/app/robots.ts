import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      /**
       * --------------------------------------------------------------------------
       * Global Crawling Rules
       * --------------------------------------------------------------------------
       * Allow search engines to crawl all public pages.
       * Block private or internal routes that should never appear in search results.
       * --------------------------------------------------------------------------
       */
      {
        userAgent: '*',
        allow: '/',

        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/private/',
          '/_next/',
          '/server/',
          '/tmp/',
          '/draft/',
          '/preview/',
          '/404',
          '/500',
        ],
      },

      /**
       * --------------------------------------------------------------------------
       * AI Crawlers (Future Ready)
       * --------------------------------------------------------------------------
       * Uncomment if the business decides to restrict AI model crawlers.
       * --------------------------------------------------------------------------
       */

      // {
      //   userAgent: 'GPTBot',
      //   disallow: '/',
      // },
      // {
      //   userAgent: 'Google-Extended',
      //   disallow: '/',
      // },
      // {
      //   userAgent: 'CCBot',
      //   disallow: '/',
      // },
    ],

    sitemap: `${SITE_URL}/sitemap.xml`,

    host: SITE_URL,
  };
}