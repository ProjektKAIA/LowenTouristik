// components/sections/ValuesHeroSection.tsx
'use client';

import { useTranslations } from 'next-intl';

export function ValuesHeroSection() {
  const t = useTranslations('values');

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent-green to-primary">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-24 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black mb-6 animate-fadeInUp">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-handwritten text-secondary mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            {t('hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {t('hero.description')}
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
            <span className="text-4xl">🌍</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
            <span className="text-4xl">🤝</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
            <span className="text-4xl">❤️</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-cream to-transparent"></div>
    </section>
  );
}