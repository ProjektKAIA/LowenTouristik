// app/sitemap.ts
import { MetadataRoute } from 'next';
import { getAllTrips } from '@/lib/sanity/api';
import { SITE_INFO } from '@/lib/constants';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const trips = await getAllTrips();
  
  const baseUrl = SITE_INFO.url;
  const locales = ['de', 'en'];
  
  // Static Pages
  const staticPages = [
    '',
    '/about',
    '/trips',
    '/contact',
  ];
  
  const staticUrls: MetadataRoute.Sitemap = [];
  
  staticPages.forEach(page => {
    locales.forEach(locale => {
      staticUrls.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            de: `${baseUrl}/de${page}`,
            en: `${baseUrl}/en${page}`,
          },
        },
      });
    });
  });
  
  // Dynamic Trip Pages
  const tripUrls: MetadataRoute.Sitemap = trips.map(trip => ({
    url: `${baseUrl}/de/trips/${trip.slug.current}`,
    lastModified: new Date(trip._updatedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
    alternates: {
      languages: {
        de: `${baseUrl}/de/trips/${trip.slug.current}`,
        en: `${baseUrl}/en/trips/${trip.slug.current}`,
      },
    },
  }));
  
  return [...staticUrls, ...tripUrls];
}