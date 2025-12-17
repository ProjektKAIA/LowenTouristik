// lib/queries/trip.queries.ts

/**
 * GROQ Queries für Trip Documents
 * 
 * Enthält NUR die Query-Definitionen, keine Fetch-Logic
 */

// Projection für Trip List Items (Übersicht)
const tripListProjection = `
  _id,
  title,
  "slug": slug.current,
  region,
  duration,
  price,
  maxPersons,
  shortDescription,
  mainImage {
    asset->{
      url
    },
    alt
  },
  availability,
  spotsLeft,
  featured,
  _createdAt
`;

// Projection für Trip Detail (Einzelansicht)
const tripDetailProjection = `
  _id,
  title,
  "slug": slug.current,
  region,
  country,
  duration,
  price,
  maxPersons,
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
  featured,
  _updatedAt
`;

/**
 * Query: Alle Trips für Übersichtsseite
 */
export const ALL_TRIPS_QUERY = `
  *[_type == "trip"] | order(featured desc, _createdAt desc) {
    ${tripListProjection}
  }
`;

/**
 * Query: Trip by Slug für Detailseite
 */
export const TRIP_BY_SLUG_QUERY = `
  *[_type == "trip" && slug.current == $slug][0] {
    ${tripDetailProjection}
  }
`;

/**
 * Query: Featured Trips für Homepage
 */
export const FEATURED_TRIPS_QUERY = `
  *[_type == "trip" && featured == true] | order(_createdAt desc) [0...$limit] {
    ${tripListProjection}
  }
`;

/**
 * Query: Trips by Region
 */
export const TRIPS_BY_REGION_QUERY = `
  *[_type == "trip" && region == $region] | order(_createdAt desc) {
    ${tripListProjection}
  }
`;