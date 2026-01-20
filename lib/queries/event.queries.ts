// lib/queries/event.queries.ts

/**
 * GROQ Queries für Event Documents
 */

const eventProjection = `
  _id,
  title,
  "slug": slug.current,
  eventType,
  description,
  image {
    asset->{
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    },
    alt
  },
  relatedTrips[]->{
    _id,
    title,
    "slug": slug.current,
    mainImage {
      asset->{
        url
      }
    }
  },
  startDate,
  endDate,
  isOnline,
  location {
    name,
    street,
    city,
    zip,
    googleMapsUrl
  },
  onlineLink,
  requiresRegistration,
  maxParticipants,
  registrationDeadline,
  price {
    amount,
    note
  },
  isCancelled,
  _updatedAt
`;

const eventListProjection = `
  _id,
  title,
  "slug": slug.current,
  eventType,
  description,
  image {
    asset->{
      _id,
      url,
      metadata {
        lqip
      }
    },
    alt
  },
  startDate,
  endDate,
  isOnline,
  location {
    name,
    city
  },
  isCancelled,
  price {
    amount,
    note
  }
`;

/**
 * Query: Alle Events
 */
export const ALL_EVENTS_QUERY = `
  *[_type == "event"] | order(startDate asc) {
    ${eventListProjection}
  }
`;

/**
 * Query: Kommende Events (ab heute)
 */
export const UPCOMING_EVENTS_QUERY = `
  *[_type == "event" && startDate >= now() && isCancelled != true] | order(startDate asc) {
    ${eventListProjection}
  }
`;

/**
 * Query: Vergangene Events
 */
export const PAST_EVENTS_QUERY = `
  *[_type == "event" && startDate < now()] | order(startDate desc) {
    ${eventListProjection}
  }
`;

/**
 * Query: Event by Slug
 */
export const EVENT_BY_SLUG_QUERY = `
  *[_type == "event" && slug.current == $slug][0] {
    ${eventProjection}
  }
`;

/**
 * Query: Events by Type
 */
export const EVENTS_BY_TYPE_QUERY = `
  *[_type == "event" && eventType == $eventType && startDate >= now()] | order(startDate asc) {
    ${eventListProjection}
  }
`;

/**
 * Query: All Event Slugs (für Static Generation)
 */
export const ALL_EVENT_SLUGS_QUERY = `
  *[_type == "event"] {
    "slug": slug.current
  }
`;

/**
 * Query: Nächstes Event (für Homepage etc.)
 */
export const NEXT_EVENT_QUERY = `
  *[_type == "event" && startDate >= now() && isCancelled != true] | order(startDate asc)[0] {
    ${eventListProjection}
  }
`;
