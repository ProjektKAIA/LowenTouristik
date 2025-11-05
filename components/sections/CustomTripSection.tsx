// components/sections/CustomTripSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export function CustomTripSection() {
  const t = useTranslations('trips.custom');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-neutral-brown/80 mb-8 leading-relaxed">
            {t('subtitle')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-neutral-cream p-6 rounded-2xl">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="font-bold text-lg text-primary mb-2">
                {t('feature1.title')}
              </h3>
              <p className="text-sm text-neutral-brown/80">
                {t('feature1.description')}
              </p>
            </div>
            
            <div className="bg-neutral-cream p-6 rounded-2xl">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="font-bold text-lg text-primary mb-2">
                {t('feature2.title')}
              </h3>
              <p className="text-sm text-neutral-brown/80">
                {t('feature2.description')}
              </p>
            </div>
            
            <div className="bg-neutral-cream p-6 rounded-2xl">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-lg text-primary mb-2">
                {t('feature3.title')}
              </h3>
              <p className="text-sm text-neutral-brown/80">
                {t('feature3.description')}
              </p>
            </div>
          </div>
          
          <Link
            href="/kontakt"
            className="inline-block bg-accent-green hover:bg-accent-green/90 text-white px-12 py-4 rounded-full font-bold text-lg transition transform hover:scale-105"
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}