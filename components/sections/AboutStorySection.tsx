// components/sections/AboutStorySection.tsx
'use client';

import { useTranslations } from 'next-intl';

export function AboutStorySection() {
  const t = useTranslations('about');

  return (
    <section className="py-24 bg-neutral-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-secondary/20 rounded-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop"
                  alt={t('story.imageAlt')}
                  className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[3/4]"
                  loading="lazy"
                />
                <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-5xl font-black text-primary mb-1">15+</div>
                    <div className="text-sm text-neutral-brown/70 font-bold">{t('story.badge')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-primary mb-8">
                {t('story.title')}
              </h2>

              <div className="space-y-6 text-lg text-neutral-brown/90 leading-relaxed">
                <p>{t('story.paragraph1')}</p>
                
                <p className="bg-gradient-to-r from-primary/10 to-accent-green/10 border-l-4 border-secondary p-6 rounded-r-2xl">
                  <strong className="text-primary">{t('story.paragraph2.bold')}</strong>{' '}
                  {t('story.paragraph2.text')}
                </p>

                <p>{t('story.paragraph3')}</p>

                <p>{t('story.paragraph4')}</p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/kontakt"
                  className="bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                >
                  {t('story.cta.contact')}
                </a>
                <button className="flex items-center gap-3 bg-neutral-cream hover:bg-white border-2 border-primary text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  {t('story.cta.video')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}