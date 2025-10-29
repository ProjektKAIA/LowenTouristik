// lib/sanity/queries.ts
import { groq } from 'next-sanity';

// ============================================
// TRIP QUERIES
// ============================================

// Alle Reisen mit Basis-Informationen
export const tripsQuery = groq`
  *[_type == "trip"] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    country,
    duration,
    maxPersons,
    price,
    description,
    mainImage,
    tags,
    featured,
    difficulty,
  }
`;

// Featured Trips für Homepage
export const featuredTripsQuery = groq`
  *[_type == "trip" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    country,
    duration,
    maxPersons,
    price,
    description,
    mainImage,
    tags,
    featured,
  }
`;

// Einzelne Reise nach Slug
export const tripBySlugQuery = groq`
  *[_type == "trip" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    country,
    duration,
    maxPersons,
    price,
    description,
    mainImage,
    gallery,
    tags,
    featured,
    difficulty,
    highlights,
    itinerary,
    included,
    notIncluded,
    accommodation,
    bestTimeToVisit,
    publishedAt,
  }
`;

// Ähnliche Reisen (gleiche Tags oder gleiches Land)
export const similarTripsQuery = groq`
  *[_type == "trip" && slug.current != $slug && (country == $country || count((tags[]->title)[@ in $tags]) > 0)] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    country,
    duration,
    price,
    mainImage,
    tags,
  }
`;

// Alle Trip Slugs (für generateStaticParams)
export const tripSlugsQuery = groq`
  *[_type == "trip" && defined(slug.current)][].slug.current
`;

// ============================================
// TESTIMONIAL QUERIES
// ============================================

// Featured Testimonials für Homepage
export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(date desc) [0...3] {
    _id,
    name,
    trip,
    date,
    rating,
    text,
    image,
  }
`;

// Alle Testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(date desc) {
    _id,
    name,
    trip,
    date,
    rating,
    text,
    image,
  }
`;

// ============================================
// PAGE QUERIES
// ============================================

// Page nach Slug
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    content,
    seo {
      title,
      description,
      image,
    }
  }
`;

// ============================================
// SITE SETTINGS
// ============================================

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    contactEmail,
    phone,
    whatsapp,
    address,
    socialMedia {
      facebook,
      instagram,
      youtube,
    },
    openingHours,
  }
`;