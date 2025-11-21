// components/sections/TestimonialsGallerySection.tsx
'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import type { Testimonial } from '@/lib/types/testimonial.types';

interface TestimonialsGallerySectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsGallerySection({ testimonials }: TestimonialsGallerySectionProps) {
  const t = useTranslations('testimonials.gallerySection');

  // Nur Testimonials mit Gallery
  const galleryTestimonials = testimonials.filter(t => t.gallery && t.gallery.length > 0);

  if (galleryTestimonials.length === 0) return null;

  // Flatten alle Bilder in ein Array
  const allImages = galleryTestimonials.flatMap(testimonial => 
    testimonial.gallery?.map(img => ({
      ...img,
      testimonialName: testimonial.name,
      trip: testimonial.trip,
    })) || []
  );

  return (
    <section className="py-24 bg-neutral-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-neutral-brown/70">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {allImages.map((image, index) => (
            <div key={index} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src={image.asset.url}
                alt={image.alt || `Foto von ${image.testimonialName}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay mit Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-bold text-sm">{image.testimonialName}</p>
                {image.trip && (
                  <p className="text-white/80 text-xs">{image.trip}</p>
                )}
                {image.caption && (
                  <p className="text-white/90 text-xs mt-1">{image.caption}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}