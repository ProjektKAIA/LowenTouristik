// components/sections/TestimonialsFilterSection.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface TestimonialsFilterSectionProps {
  onFilterChange?: (filter: string) => void;
}

export function TestimonialsFilterSection({ onFilterChange }: TestimonialsFilterSectionProps) {
  const t = useTranslations('testimonials.filter');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { value: 'all', label: t('all'), icon: '✨' },
    { value: 'featured', label: t('featured'), icon: '⭐' },
    { value: 'video', label: t('video'), icon: '🎥' },
    { value: 'recent', label: t('recent'), icon: '🆕' },
  ];

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
    onFilterChange?.(value);
  };

  return (
    <section className="py-8 bg-white border-b border-neutral-cream sticky top-20 z-30">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => handleFilterChange(filter.value)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                activeFilter === filter.value
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-neutral-cream text-neutral-brown hover:bg-neutral-cream/80'
              }`}
            >
              <span>{filter.icon}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}