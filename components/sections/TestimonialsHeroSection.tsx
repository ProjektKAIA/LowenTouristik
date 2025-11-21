// components/sections/TestimonialsHeroSection.tsx
'use client';

import { useTranslations } from 'next-intl';

export function TestimonialsHeroSection() {
  const t = useTranslations('testimonials.hero');

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-accent-green overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center text-white max-w-4xl">
        <div className="inline-block bg-secondary/20 backdrop-blur-md border border-secondary/30 px-6 py-3 rounded-full font-bold text-secondary text-sm mb-6">
          💬 {t('label')}
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black mb-6">
          {t('title')}
        </h1>
        
        <p className="text-xl md:text-2xl font-handwritten text-secondary mb-4">
          {t('subtitle')}
        </p>
        
        <p className="text-lg leading-relaxed max-w-2xl mx-auto">
          {t('description')}
        </p>

        <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
            <div className="text-4xl font-black text-secondary mb-2">
              {t('stats.travelers.value')}
            </div>
            <div className="text-sm text-white/80">{t('stats.travelers.label')}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
            <div className="text-4xl font-black text-secondary mb-2">
              {t('stats.rating.value')}
            </div>
            <div className="text-sm text-white/80">{t('stats.rating.label')}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
            <div className="text-4xl font-black text-secondary mb-2">
              {t('stats.recommendation.value')}
            </div>
            <div className="text-sm text-white/80">{t('stats.recommendation.label')}</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-cream to-transparent"></div>
    </section>
  );
}