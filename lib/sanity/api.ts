// lib/sanity/api.ts
import { getClient } from './client';
import {
  tripsQuery,
  featuredTripsQuery,
  tripBySlugQuery,
  similarTripsQuery,
  tripSlugsQuery,
  featuredTestimonialsQuery,
  testimonialsQuery,
  pageBySlugQuery,
  siteSettingsQuery,
} from './queries';

// ============================================
// TRIP API
// ============================================

export async function getAllTrips(preview = false) {
  const client = getClient(preview);
  return await client.fetch(tripsQuery);
}

export async function getFeaturedTrips(preview = false) {
  const client = getClient(preview);
  return await client.fetch(featuredTripsQuery);
}

export async function getTripBySlug(slug: string, preview = false) {
  const client = getClient(preview);
  return await client.fetch(tripBySlugQuery, { slug });
}

export async function getSimilarTrips(slug: string, country: string, tags: string[], preview = false) {
  const client = getClient(preview);
  return await client.fetch(similarTripsQuery, { slug, country, tags });
}

export async function getAllTripSlugs() {
  const client = getClient();
  return await client.fetch(tripSlugsQuery);
}

// ============================================
// TESTIMONIAL API
// ============================================

export async function getFeaturedTestimonials(preview = false) {
  const client = getClient(preview);
  return await client.fetch(featuredTestimonialsQuery);
}

export async function getAllTestimonials(preview = false) {
  const client = getClient(preview);
  return await client.fetch(testimonialsQuery);
}

// ============================================
// PAGE API
// ============================================

export async function getPageBySlug(slug: string, preview = false) {
  const client = getClient(preview);
  return await client.fetch(pageBySlugQuery, { slug });
}

// ============================================
// SITE SETTINGS API
// ============================================

export async function getSiteSettings(preview = false) {
  const client = getClient(preview);
  return await client.fetch(siteSettingsQuery);
}