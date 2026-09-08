import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async rewrites() {
    const apiBaseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://143.244.170.205').trim().replace(/\/+$/, '');
    return {
      beforeFiles: [
        { source: '/ar/%D8%B9%D9%86-%D8%A7%D9%84%D9%85%D9%86%D8%B5%D8%A9', destination: '/ar/about' },
        { source: '/ar/%D8%A2%D9%84%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D9%85%D9%84', destination: '/ar/how-it-works' },
        { source: '/ar/%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF-%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%D8%A9', destination: '/ar/subjects' },
        { source: '/ar/%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF-%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%D8%A9/:subject*', destination: '/ar/subjects/:subject*' },
        { source: '/ar/%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9', destination: '/ar/locations' },
        { source: '/ar/%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9/:location*', destination: '/ar/locations/:location*' },
        { source: '/ar/%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA', destination: '/ar/services' },
        { source: '/ar/%D8%A7%D9%84%D9%85%D8%AF%D9%88%D9%86%D8%A9', destination: '/ar/blog' },
        { source: '/ar/%D8%A7%D9%84%D8%A3%D8%B3%D8%A6%D9%84%D8%A9-%D8%A7%D9%84%D8%B4%D8%A7%D8%A6%D8%B9%D8%A9', destination: '/ar/faq' },
        { source: '/ar/%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%85%D8%B9%D9%86%D8%A7', destination: '/ar/contact' },
        { source: '/ar/%D8%A7%D9%86%D8%B6%D9%85-%D9%83%D9%85%D8%B9%D9%84%D9%85', destination: '/ar/become-tutor' },
        { source: '/ar/%D8%A7%D8%A8%D8%AD%D8%AB-%D8%B9%D9%86-%D9%85%D8%B9%D9%84%D9%85', destination: '/ar/find-tutor' },
        { source: '/ar/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%AE%D8%B5%D9%88%D8%B5%D9%8A%D8%A9', destination: '/ar/privacy' },
        { source: '/ar/%D8%A7%D9%84%D8%B4%D8%B1%D9%88%D8%B7-%D9%88%D8%A7%D9%84%D8%A3%D8%AD%D9%83%D8%A7%D9%85', destination: '/ar/terms' },
        { source: '/ar/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%A5%D9%84%D8%BA%D8%A7%D8%A1', destination: '/ar/cancellation-policy' },
        { source: '/ar/%D8%AD%D8%B0%D9%81-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA', destination: '/ar/data-deletion' },
      ],
      afterFiles: [
        {
          source: '/api/portal/:path*',
          destination: `${apiBaseUrl}/api/portal/:path*`,
        },
      ],
      fallback: [],
    };
  }
};

export default withNextIntl(nextConfig);