// components/ui/TestimonialCard/TestimonialCard.tsx
'use client';

import Image from 'next/image';
import type { TestimonialCardProps } from './TestimonialCard.types';

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, image, text, rating, trip, date } = testimonial;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className="text-lg text-neutral-brown/90 leading-relaxed mb-6 italic">
        "{text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {image?.asset?.url ? (
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={image.asset.url}
              alt={image.alt || name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-bold text-primary">{name}</div>
          {trip && <div className="text-sm text-neutral-brown/60">{trip}</div>}
        </div>
      </div>
    </div>
  );
}