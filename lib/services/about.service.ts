// lib/services/about.service.ts

import { client } from '@/lib/sanity/client';
import { ABOUT_PAGE_QUERY } from '@/lib/queries/about.queries';
import type { AboutPageData } from '@/lib/types/about.types';

export async function getAboutPageData(): Promise<AboutPageData | null> {
  try {
    return await client.fetch(ABOUT_PAGE_QUERY, {}, {
      cache: 'force-cache',
      next: { revalidate: 3600 },
    });
  } catch (error) {
    console.error('Error fetching about page data:', error);
    return null;
  }
}