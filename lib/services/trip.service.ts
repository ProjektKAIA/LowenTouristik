// lib/services/trip.service.ts

import { client } from '@/lib/sanity/client';
import {
  ALL_TRIPS_QUERY,
  TRIP_BY_SLUG_QUERY,
  FEATURED_TRIPS_QUERY,
  TRIPS_BY_REGION_QUERY,
} from '@/lib/queries/trip.queries';

/**
 * Trip Service
 * 
 * Verantwortlich für:
 * - Datenabruf von Sanity
 * - Caching-Strategien
 * - Error Handling
 * - Business Logic
 */

/**
 * Alle Reisen abrufen (für Übersichtsseite)
 */
export async function getAllTrips() {
  try {
    return await client.fetch(ALL_TRIPS_QUERY, {}, {
      cache: 'force-cache',
      next: { revalidate: 3600 }, // 1 Stunde
    });
  } catch (error) {
    console.error('Error fetching all trips:', error);
    return [];
  }
}

/**
 * Einzelne Reise per Slug abrufen (für Detailseite)
 */
export async function getTripBySlug(slug: string, isDraft = false) {
  try {
    return await client.fetch(
      TRIP_BY_SLUG_QUERY,
      { slug },
      {
        cache: isDraft ? 'no-store' : 'force-cache',
        next: isDraft ? undefined : { revalidate: 3600 },
      }
    );
  } catch (error) {
    console.error(`Error fetching trip by slug "${slug}":`, error);
    return null;
  }
}

/**
 * Featured Trips abrufen (für Homepage)
 */
export async function getFeaturedTrips(limit = 3) {
  try {
    const trips = await client.fetch(
      FEATURED_TRIPS_QUERY,
      { limit },
      {
        cache: 'force-cache',
        next: { revalidate: 3600 },
      }
    );
    
    // Fallback: Wenn keine Featured Trips, nimm die neuesten
    if (!trips || trips.length === 0) {
      const allTrips = await getAllTrips();
      return allTrips.slice(0, limit);
    }
    
    return trips;
  } catch (error) {
    console.error('Error fetching featured trips:', error);
    return [];
  }
}

/**
 * Trips nach Region filtern
 */
export async function getTripsByRegion(region: string) {
  try {
    return await client.fetch(
      TRIPS_BY_REGION_QUERY,
      { region },
      {
        cache: 'force-cache',
        next: { revalidate: 3600 },
      }
    );
  } catch (error) {
    console.error(`Error fetching trips by region "${region}":`, error);
    return [];
  }
}