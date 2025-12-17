// components/sections/HeroSection.tsx
'use client';

import { CONTACT } from '@/lib/constants';
import type { HeroSection as HeroSectionData, Locale } from '@/lib/types/homepage.types';
import { getLocalizedValue } from '@/lib/types/homepage.types';

interface HeroSectionProps {
  data: HeroSectionData;
  locale: Locale;
}

export function HeroSection({ data, locale }: HeroSectionProps) {
  const t = (field: any) => getLocalizedValue(field, locale);

  const badge = t(data.badge);
  const title = t(data.title);
  const subtitle = t(data.subtitle);
  const description = t(data.description);
  const videoUrl = data.videoUrl;
  const stats = data.stats?.map((s) => ({ value: t(s.value), label: t(s.label) })) || [];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {videoUrl && (
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover brightness-[0.7]">
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {!videoUrl && data.backgroundImage?.asset?.url && (
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.7]"
          style={{ backgroundImage: `url(${data.backgroundImage.asset.url})` }}
        />
      )}

      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(42, 95, 111, 0.92) 0%, rgba(44, 95, 60, 0.88) 50%, rgba(42, 95, 111, 0.92) 100%)' }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-8">
              <span className="text-white font-medium">{badge}</span>
            </div>
          )}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-white mb-6 leading-tight">{title}</h1>

          {subtitle && <p className="text-2xl md:text-4xl font-handwritten text-secondary mb-4">{subtitle}</p>}

          {description && <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">{description}</p>}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#reisen" className="btn-primary bg-accent-red hover:bg-accent-red/90 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all w-full sm:w-auto">
              {locale === 'de' ? 'Reisen entdecken' : locale === 'en' ? 'Discover Trips' : 'Découvrir les voyages'}
            </a>
            <a href={CONTACT.phone.href} className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto">
              {CONTACT.phone.display}
            </a>
          </div>

          {stats.length > 0 && (
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-black text-secondary mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}