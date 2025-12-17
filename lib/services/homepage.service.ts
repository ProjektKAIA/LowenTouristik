// lib/services/homepage.service.ts

import { client } from '@/lib/sanity/client';
import { HOMEPAGE_QUERY } from '@/lib/queries/homepage.queries';
import type { HomepageData } from '@/lib/types/homepage.types';

/**
 * Homepage Daten aus Sanity abrufen
 */
export async function getHomepageData(): Promise<HomepageData | null> {
  try {
    return await client.fetch(HOMEPAGE_QUERY, {}, {
      cache: 'force-cache',
      next: { revalidate: 3600 }, // 1 Stunde
    });
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    return null;
  }
}