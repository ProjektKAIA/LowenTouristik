// components/sections/TestimonialsVideoSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import type { Testimonial } from '@/lib/types/testimonial.types';

interface TestimonialsVideoSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsVideoSection({ testimonials }: TestimonialsVideoSectionProps) {
  const t = useTranslations('testimonials.videoSection');

  // Nur Testimonials mit Video-URLs
  const videoTestimonials = testimonials.filter(t => t.videoUrl);

  if (videoTestimonials.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-neutral-brown/70">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videoTestimonials.map((testimonial) => (
            <div key={testimonial._id} className="bg-neutral-cream rounded-3xl overflow-hidden shadow-lg">
              {/* Video Embed */}
              <div className="aspect-video">
                <iframe
                  src={testimonial.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Video von ${testimonial.name}`}
                />
              </div>
              
              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                {testimonial.trip && (
                  <p className="text-sm text-neutral-brown/60">{testimonial.trip}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}