// components/sections/TripsHeroSection.tsx
'use client';

import { useTranslations } from 'next-intl';

export function TripsHeroSection() {
  const t = useTranslations('trips.overview.hero');

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-accent-green text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl font-handwritten text-secondary max-w-3xl mx-auto mb-8">
          {t('subtitle')}
        </p>
        <div className="flex items-center justify-center gap-8 text-white/90 text-sm flex-wrap">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
            {t('maxPersons')}
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            {t('co2Compensated')}
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
            {t('localEconomy')}
          </span>
        </div>
      </div>
    </section>
  );
}