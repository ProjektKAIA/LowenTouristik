// lib/queries/testimonial.queries.ts

/**
 * GROQ Queries für Testimonial Documents
 * 
 * Enthält NUR die Query-Definitionen, keine Fetch-Logic
 */

// Erweiterte Projection für Testimonials mit Video & Gallery
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

/**
 * Query: Alle Testimonials (mit Video & Gallery)
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

/**
 * Query: Testimonials mit Videos (für Video-Section)
 */
export const VIDEO_TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && defined(videoUrl)] | order(date desc) {
    ${testimonialProjection}
  }
`;

/**
 * Query: Testimonials mit Bildergalerie (für Gallery-Section)
 */
export const GALLERY_TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && count(gallery) > 0] | order(date desc) {
    ${testimonialProjection}
  }
`;

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
 * Testimonial Service
 * 
 * Verantwortlich für:
 * - Datenabruf von Sanity
 * - Caching-Strategien
 * - Error Handling
 * - Business Logic
 */

/**
 * Alle Testimonials abrufen
 */
export async function getAllTestimonials() {
  try {
    return await client.fetch(ALL_TESTIMONIALS_QUERY, {}, {
      cache: 'force-cache',
      next: { revalidate: 3600 }, // 1 Stunde
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

// app/[locale]/erfahrungen/page.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { TestimonialsHeroSection } from '@/components/sections/TestimonialsHeroSection';
import { TestimonialsFilterSection } from '@/components/sections/TestimonialsFilterSection';
import { TestimonialsGridSection } from '@/components/sections/TestimonialsGridSection';
import { TestimonialsGallerySection } from '@/components/sections/TestimonialsGallerySection';
import { TestimonialsVideoSection } from '@/components/sections/TestimonialsVideoSection';
import { CTASection } from '@/components/sections/CTASection';
import { getAllTestimonials } from '@/lib/services/testimonial.service';
import { Metadata } from 'next';
import { SEO, SITE_INFO } from '@/lib/constants';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'Erfahrungen & Testimonials - Loewentouristik',
    description: 'Über 2.500 zufriedene Afrika-Reisende seit 2009. Lies authentische Erfahrungsberichte, schaue Videos und entdecke Fotos unserer Reisen.',
    keywords: [...SEO.keywords, 'Erfahrungsberichte', 'Testimonials', 'Kundenbewertungen', 'Reiseberichte'],
    openGraph: {
      title: 'Erfahrungen & Testimonials - Loewentouristik',
      description: 'Über 2.500 zufriedene Afrika-Reisende seit 2009',
      url: `${SITE_INFO.url}/${locale}/erfahrungen`,
      siteName: SITE_INFO.name,
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      type: 'website',
    },
  };
}

export default async function ErfahrungenPage() {
  const testimonials = await getAllTestimonials();

  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen">
        <TestimonialsHeroSection />
        <TestimonialsFilterSection />
        <TestimonialsGridSection testimonials={testimonials} />
        <TestimonialsVideoSection testimonials={testimonials} />
        <TestimonialsGallerySection testimonials={testimonials} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}