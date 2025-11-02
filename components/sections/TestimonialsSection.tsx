// components/sections/TestimonialsSection.tsx
'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';

export function TestimonialsSection() {
  const t = useTranslations();
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Sarah M.',
      initial: 'S',
      trip: t('testimonials.trips.cameroon'),
      text: t('testimonials.items.sarah'),
      rating: 5,
    },
    {
      name: 'Michael K.',
      initial: 'M',
      trip: t('testimonials.trips.senegal'),
      text: t('testimonials.items.michael'),
      rating: 5,
    },
    {
      name: 'Anna L.',
      initial: 'A',
      trip: t('testimonials.trips.sierraLeone'),
      text: t('testimonials.items.anna'),
      rating: 5,
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-neutral-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-primary mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl md:text-2xl font-handwritten text-secondary mb-4">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white p-8 rounded-3xl shadow-xl snap-start"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg text-neutral-brown/90 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-bold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-neutral-brown/60">{testimonial.trip}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white w-12 h-12 rounded-full shadow-xl hover:bg-neutral-cream transition-all"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white w-12 h-12 rounded-full shadow-xl hover:bg-neutral-cream transition-all"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-brown/70 mb-4">{t('testimonials.footer')}</p>
          <a
            href="#kontakt"
            className="inline-block bg-accent-red hover:bg-accent-red/90 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            {t('cta.becomeFamily')}
          </a>
        </div>
      </div>
    </section>
  );
}