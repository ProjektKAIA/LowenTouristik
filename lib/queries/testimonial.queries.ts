// lib/queries/testimonial.queries.ts

/**
 * GROQ Queries für Testimonial Documents
 * 
 * Enthält NUR die Query-Definitionen, keine Fetch-Logic
 */

// Projection für Testimonials
const testimonialProjection = `
  _id,
  name,
  image {
    asset->{
      url
    },
    alt
  },
  text,
  rating,
  trip,
  date,
  featured
`;

/**
 * Query: Alle Testimonials
 */
export const ALL_TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(date desc) {
    ${testimonialProjection}
  }
`;

/**
 * Query: Featured Testimonials für Homepage
 */
export const FEATURED_TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && featured == true] | order(date desc) [0...$limit] {
    ${testimonialProjection}
  }
`;

/**
 * Query: Testimonials by Trip
 */
export const TESTIMONIALS_BY_TRIP_QUERY = `
  *[_type == "testimonial" && trip == $tripTitle] | order(date desc) {
    ${testimonialProjection}
  }
`;