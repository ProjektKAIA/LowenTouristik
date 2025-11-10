// lib/services/settings.service.ts

import { client } from '@/lib/sanity/client';
import { SITE_SETTINGS_QUERY } from '@/lib/queries/settings.queries';

/**
 * Settings Service
 * 
 * Verantwortlich für:
 * - Datenabruf von Sanity
 * - Caching-Strategien
 * - Error Handling
 */

/**
 * Site Settings abrufen (Singleton)
 */
export async function getSiteSettings() {
  try {
    return await client.fetch(SITE_SETTINGS_QUERY, {}, {
      cache: 'force-cache',
      next: { revalidate: 86400 }, // 24 Stunden (ändert sich selten)
    });
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}