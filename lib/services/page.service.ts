// lib/services/page.service.ts

import { client } from '@/lib/sanity/client';
import { ALL_PAGES_QUERY, PAGE_BY_SLUG_QUERY } from '@/lib/queries/page.queries';

/**
 * Page Service
 * 
 * Verantwortlich für:
 * - Datenabruf von Sanity
 * - Caching-Strategien
 * - Error Handling
 */

/**
 * Alle Pages abrufen
 */
export async function getAllPages() {
  try {
    return await client.fetch(ALL_PAGES_QUERY, {}, {
      cache: 'force-cache',
      next: { revalidate: 3600 }, // 1 Stunde
    });
  } catch (error) {
    console.error('Error fetching all pages:', error);
    return [];
  }
}

/**
 * Page per Slug abrufen
 */
export async function getPageBySlug(slug: string) {
  try {
    return await client.fetch(
      PAGE_BY_SLUG_QUERY,
      { slug },
      {
        cache: 'force-cache',
        next: { revalidate: 3600 },
      }
    );
  } catch (error) {
    console.error(`Error fetching page by slug "${slug}":`, error);
    return null;
  }
}