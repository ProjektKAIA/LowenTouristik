// lib/services/testimonial.service.ts

import { client } from '@/lib/sanity/client';
import {
  ALL_TESTIMONIALS_QUERY,
  FEATURED_TESTIMONIALS_QUERY,
  TESTIMONIALS_BY_TRIP_QUERY,
  VIDEO_TESTIMONIALS_QUERY,
  GALLERY_TESTIMONIALS_QUERY,
} from '@/lib/queries/testimonial.queries';

/**
 * Alle Testimonials abrufen
 */
export async function getAllTestimonials() {
  try {
    return await client.fetch(ALL_TESTIMONIALS_QUERY, {}, {
      cache: 'force-cache',
      next: { revalidate: 3600 },
    });
  } catch (error) {
    console.error('Error fetching all testimonials:', error);
    return [];
  }
}

/**
 * Featured Testimonials abrufen (für Homepage)
 */
export async function getFeaturedTestimonials(limit = 3) {
  try {
    return await client.fetch(
      FEATURED_TESTIMONIALS_QUERY,
      { limit },
      {
        cache: 'force-cache',
        next: { revalidate: 3600 },
      }
    );
  } catch (error) {
    console.error('Error fetching featured testimonials:', error);
    return [];
  }
}

/**
 * Testimonials für bestimmte Reise abrufen
 */
export async function getTestimonialsByTrip(tripTitle: string) {
  try {
    return await client.fetch(
      TESTIMONIALS_BY_TRIP_QUERY,
      { tripTitle },
      {
        cache: 'force-cache',
        next: { revalidate: 3600 },
      }
    );
  } catch (error) {
    console.error(`Error fetching testimonials for trip "${tripTitle}":`, error);
    return [];
  }
}

/**
 * Testimonials mit Videos abrufen
 */
export async function getVideoTestimonials() {
  try {
    return await client.fetch(
      VIDEO_TESTIMONIALS_QUERY,
      {},
      {
        cache: 'force-cache',
        next: { revalidate: 3600 },
      }
    );
  } catch (error) {
    console.error('Error fetching video testimonials:', error);
    return [];
  }
}

/**
 * Testimonials mit Bildergalerie abrufen
 */
export async function getGalleryTestimonials() {
  try {
    return await client.fetch(
      GALLERY_TESTIMONIALS_QUERY,
      {},
      {
        cache: 'force-cache',
        next: { revalidate: 3600 },
      }
    );
  } catch (error) {
    console.error('Error fetching gallery testimonials:', error);
    return [];
  }
}