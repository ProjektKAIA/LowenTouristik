// components/sections/TripDetailHeroSection.tsx
'use client';

import { useTranslations } from 'next-intl';

interface TripDetailHeroSectionProps {
  title: string;
  region: string;
  duration: number;
  price: number;
  shortDescription: string;
  mainImage: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}

export function TripDetailHeroSection({
  title,
  region,
  duration,
  price,
  shortDescription,
  mainImage,
}: TripDetailHeroSectionProps) {
  const t = useTranslations('trips.detail');

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={mainImage.asset.url}
          alt={mainImage.alt || title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent-green/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-secondary px-4 py-2 rounded-full text-sm font-bold mb-6">
            {region}
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            {shortDescription}
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap text-white/90">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
              <span className="font-semibold">{duration} {t('days')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <span className="font-semibold">{t('maxPersons')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              <span className="font-semibold text-2xl">{t('priceFrom')} {price.toLocaleString('de-DE')} €</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}