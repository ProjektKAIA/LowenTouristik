// components/sections/AboutStorySection.tsx
'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

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
                <div className="relative rounded-3xl shadow-2xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop"
                    alt={t('story.imageAlt')}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
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

                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-primary">
                    🌍 Authentisch
                  </span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-primary">
                    🤝 Respektvoll
                  </span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-primary">
                    💚 Nachhaltig
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}