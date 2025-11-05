// lib/sanity/api.ts
import { client } from './client';

// Alle Reisen für Übersichtsseite
export async function getAllTrips() {
  const query = `
    *[_type == "trip"] | order(featured desc, _createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      region,
      duration,
      price,
      shortDescription,
      mainImage {
        asset->{
          url
        },
        alt
      },
      availability,
      spotsLeft
    }
  `;

  return await client.fetch(query);
}

// Einzelne Reise für Detailseite
export async function getTripBySlug(slug: string, isDraft = false) {
  const query = `
    *[_type == "trip" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      region,
      country,
      duration,
      price,
      shortDescription,
      mainImage {
        asset->{
          url
        },
        alt
      },
      gallery[] {
        asset->{
          url
        },
        alt,
        caption
      },
      highlights,
      itinerary[] {
        day,
        title,
        description,
        activities,
        accommodation,
        meals
      },
      mapStations[] {
        day,
        name,
        lat,
        lng,
        title,
        description
      },
      included,
      notIncluded,
      accommodation {
        type,
        description,
        standard
      },
      availability,
      spotsLeft,
      featured
    }
  `;

  return await client.fetch(query, { slug }, { 
    cache: isDraft ? 'no-store' : 'force-cache' 
  });
}

// Featured Trips für Homepage
export async function getFeaturedTrips(limit = 3) {
  const query = `
    *[_type == "trip" && featured == true] | order(_createdAt desc) [0...$limit] {
      _id,
      title,
      "slug": slug.current,
      region,
      duration,
      price,
      shortDescription,
      mainImage {
        asset->{
          url
        },
        alt
      }
    }
  `;

  return await client.fetch(query, { limit });
}