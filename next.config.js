/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  i18n: {
    locales: ['de', 'en', 'fr'],
    defaultLocale: 'de',
  },
};

module.exports = nextConfig;
