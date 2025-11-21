// components/sections/TestimonialsGridSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import type { Testimonial } from '@/lib/types/testimonial.types';

interface TestimonialsGridSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsGridSection({ testimonials }: TestimonialsGridSectionProps) {
  const t = useTranslations('testimonials.empty');

  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="py-24 bg-neutral-cream">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <div className="text-6xl mb-6">📝</div>
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">
            {t('title')}
          </h3>
          <p className="text-neutral-brown/60">{t('description')}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-neutral-cream">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial._id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}