// components/sections/AboutHeroSection.tsx
'use client';

import type { AboutHeroData, Locale, LocalizedString, LocalizedText } from '@/lib/types/about.types';
import { getLocalizedValue } from '@/lib/types/about.types';

interface AboutHeroSectionProps {
  data: AboutHeroData;
  locale: Locale;
}

export function AboutHeroSection({ data, locale }: AboutHeroSectionProps) {
  const t = (field: LocalizedString | LocalizedText | undefined) => getLocalizedValue(field, locale);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.backgroundImage.asset.url})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-accent-green/90 to-primary/95" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-24 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-secondary/20 backdrop-blur-md border border-secondary/30 px-6 py-3 rounded-full font-bold text-secondary text-sm mb-8">
            {t(data.label)}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black mb-6">{t(data.title)}</h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-handwritten text-secondary mb-8">{t(data.subtitle)}</p>

          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">{t(data.description)}</p>

          {data.stats && data.stats.length > 0 && (
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {data.stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <div className="text-4xl font-black text-secondary mb-2">{t(stat.value)}</div>
                  <div className="text-sm text-white/80">{t(stat.label)}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-cream to-transparent" />
    </section>
  );
}