// lib/queries/testimonial.queries.ts

/**
 * GROQ Queries für Testimonial Documents
 */

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
  featured,
  videoUrl,
  gallery[] {
    asset->{
      url
    },
    alt,
    caption
  }
`;

export const ALL_TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(date desc) {
    ${testimonialProjection}
  }
`;

export const FEATURED_TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && featured == true] | order(date desc) [0...$limit] {
    ${testimonialProjection}
  }
`;

export const TESTIMONIALS_BY_TRIP_QUERY = `
  *[_type == "testimonial" && trip == $tripTitle] | order(date desc) {
    ${testimonialProjection}
  }
`;

export const VIDEO_TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && defined(videoUrl)] | order(date desc) {
    ${testimonialProjection}
  }
`;

export const GALLERY_TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && count(gallery) > 0] | order(date desc) {
    ${testimonialProjection}
  }
`;