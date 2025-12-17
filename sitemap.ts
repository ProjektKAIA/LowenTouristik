// app/sitemap.ts
import { MetadataRoute } from 'next';
import { getAllTrips } from '@/lib/services/trip.service';
import { SITE_INFO } from '@/lib/constants';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const trips = await getAllTrips();
  const baseUrl = SITE_INFO.url;
  const locales = ['de', 'en', 'fr'];

  const staticPages = ['', '/ueber-agnes', '/erfahrungen', '/kontakt'];
  const staticUrls: MetadataRoute.Sitemap = [];

  staticPages.forEach((page) => {
    locales.forEach((locale) => {
      staticUrls.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            de: `${baseUrl}/de${page}`,
            en: `${baseUrl}/en${page}`,
            fr: `${baseUrl}/fr${page}`,
          },
        },
      });
    });
  });

  const tripUrls: MetadataRoute.Sitemap = [];
  trips.forEach((trip: any) => {
    locales.forEach((locale) => {
      tripUrls.push({
        url: `${baseUrl}/${locale}/reisen/${trip.slug}`,
        lastModified: new Date(trip._updatedAt || new Date()),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            de: `${baseUrl}/de/reisen/${trip.slug}`,
            en: `${baseUrl}/en/reisen/${trip.slug}`,
            fr: `${baseUrl}/fr/reisen/${trip.slug}`,
          },
        },
      });
    });
  });

  return [...staticUrls, ...tripUrls];
}