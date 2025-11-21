// components/sections/AboutPreviewSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

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
                <div className="relative rounded-3xl shadow-2xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop"
                    alt={t('imageAlt')}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
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
                <button className="flex items-center gap-2 bg-neutral-cream hover:bg-neutral-cream/80 text-neutral-brown px-8 py-3 rounded-full font-bold transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  {t('cta.video')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}