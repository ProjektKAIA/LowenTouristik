// components/sections/AboutStorySection.tsx
'use client';

import Image from 'next/image';
import type { AboutStoryData, Locale } from '@/lib/types/about.types';
import { getLocalizedValue } from '@/lib/types/about.types';

interface AboutStorySectionProps {
  data: AboutStoryData;
  locale: Locale;
}

export function AboutStorySection({ data, locale }: AboutStorySectionProps) {
  const t = (field: any) => getLocalizedValue(field, locale);

  return (
    <section className="py-24 bg-neutral-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-secondary/20 rounded-3xl" />
                <div className="relative rounded-3xl shadow-2xl overflow-hidden aspect-[3/4]">
                  <Image
                    src={data.image.asset.url}
                    alt={data.image.alt || t(data.title)}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-5xl font-black text-primary mb-1">{t(data.badgeValue)}</div>
                    <div className="text-sm text-neutral-brown/70 font-bold">{t(data.badgeLabel)}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-primary mb-8">
                {t(data.title)}
              </h2>

              {data.paragraphs?.map((paragraph, index) => (
                <p key={index} className="text-lg text-neutral-brown/80 leading-relaxed mb-6">
                  {t(paragraph.text)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}