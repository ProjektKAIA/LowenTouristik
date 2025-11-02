// components/sections/HeroSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { STATS, CONTACT } from '@/lib/constants';

export function HeroSection() {
  const t = useTranslations();

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        id="hero-video"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
      >
        <source 
          src="https://cdn.coverr.co/videos/coverr-african-sunset-savanna-4145/1080p.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(42, 95, 111, 0.92) 0%, rgba(44, 95, 60, 0.88) 50%, rgba(42, 95, 111, 0.92) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-8 animate-fade-in">
            <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-white font-medium">{t('hero.badge')}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-white mb-6 leading-tight animate-fade-in-up">
            {t('hero.title')}
          </h1>

          {/* Subheadline */}
          <p 
            className="text-2xl md:text-4xl font-handwritten text-secondary mb-4 animate-fade-in-up" 
            style={{ animationDelay: '0.2s' }}
          >
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" 
            style={{ animationDelay: '0.4s' }}
          >
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" 
            style={{ animationDelay: '0.6s' }}
          >
            <a
              href="#reisen"
              className="btn-primary bg-accent-red hover:bg-accent-red/90 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-accent-red/50 hover:scale-105 transition-all w-full sm:w-auto"
            >
              {t('hero.cta.discover')}
            </a>
            <a
              href={CONTACT.phone.href}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {t('hero.cta.call')}
            </a>
          </div>

          {/* Trust Badges */}
          <div 
            className="grid grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" 
            style={{ animationDelay: '0.8s' }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">{STATS.happyTravelers}</div>
              <div className="text-sm text-white/80">{t('hero.stats.travelers')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">{STATS.maxGroupSize}</div>
              <div className="text-sm text-white/80">{t('hero.stats.groupSize')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">{STATS.timesVisited}</div>
              <div className="text-sm text-white/80">{t('hero.stats.experience')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#werte" className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition">
          <span className="text-sm font-medium">{t('hero.scroll')}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}