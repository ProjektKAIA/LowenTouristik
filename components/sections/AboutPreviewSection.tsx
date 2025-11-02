// components/sections/AboutPreviewSection.tsx
'use client';

import { useTranslations } from 'next-intl';

export function AboutPreviewSection() {
  const t = useTranslations('about');

  return (
    <section id="agnes" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-secondary/20 rounded-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop"
                  alt={t('imageAlt')}
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-black text-primary">10+</div>
                    <div className="text-sm text-neutral-brown/70">{t('badge')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <div className="inline-block bg-secondary/10 text-accent-red px-4 py-2 rounded-full font-bold text-sm mb-6">
                {t('label')}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-6">
                {t('title')}
              </h2>
              <p className="text-lg text-neutral-brown/90 leading-relaxed mb-6">
                {t('paragraph1')}
              </p>
              <p className="text-lg text-neutral-brown/90 leading-relaxed mb-6">
                <strong>{t('paragraph2.bold')}</strong> {t('paragraph2.text')}
              </p>
              <p className="text-lg text-neutral-brown/90 leading-relaxed mb-8">
                {t('paragraph3')}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#kontakt"
                  className="btn-primary bg-accent-red hover:bg-accent-red/90 text-white px-8 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                >
                  {t('cta.talk')}
                </a>
                <button className="flex items-center gap-2 bg-neutral-cream hover:bg-neutral-cream/80 text-primary px-8 py-3 rounded-full font-bold transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  {t('cta.video')}
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-neutral-cream">
                <div>
                  <div className="text-3xl font-black text-primary mb-1">30+</div>
                  <div className="text-sm text-neutral-brown/70">{t('stats.routes')}</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary mb-1">12</div>
                  <div className="text-sm text-neutral-brown/70">{t('stats.countries')}</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary mb-1">100%</div>
                  <div className="text-sm text-neutral-brown/70">{t('stats.personal')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}