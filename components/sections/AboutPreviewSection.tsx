// components/sections/AboutPreviewSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { AboutPreviewSection as AboutPreviewData, Locale, LocalizedString, LocalizedText } from '@/lib/types/homepage.types';
import { getLocalizedValue } from '@/lib/types/homepage.types';

interface AboutPreviewSectionProps {
  data: AboutPreviewData;
  locale: Locale;
}

export function AboutPreviewSection({ data, locale }: AboutPreviewSectionProps) {
  const t = (field: LocalizedString | LocalizedText | undefined) => getLocalizedValue(field, locale);

  const label = t(data.label);
  const title = t(data.title);
  const badgeValue = t(data.badgeValue);
  const badgeLabel = t(data.badgeLabel);
  const imageUrl = data.image?.asset?.url;
  const imageAlt = data.image?.alt || title;
  const paragraphs = data.paragraphs?.map((p) => ({ text: t(p.text), bold: p.bold ? t(p.bold) : undefined })) || [];
  const ctaText = locale === 'de' ? 'Mehr über Agnes' : locale === 'en' ? 'More about Agnes' : 'En savoir plus';

  return (
    <section id="agnes" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-secondary/20 rounded-3xl" />
                <div className="relative rounded-3xl shadow-2xl overflow-hidden aspect-[4/5]">
                  {imageUrl && (
                    <Image src={imageUrl} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  )}
                </div>
                {badgeValue && badgeLabel && (
                  <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-xl">
                    <div className="text-center">
                      <div className="text-3xl font-black text-primary">{badgeValue}</div>
                      <div className="text-sm text-neutral-brown/70">{badgeLabel}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="order-1 md:order-2">
              {label && (
                <div className="inline-block bg-secondary/10 text-accent-red px-4 py-2 rounded-full font-bold text-sm mb-6">
                  {label}
                </div>
              )}
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-6">{title}</h2>

              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-neutral-brown/90 leading-relaxed mb-6">
                  {paragraph.bold && <strong>{paragraph.bold} </strong>}
                  {paragraph.text}
                </p>
              ))}

              <Link
                href={`/${locale}/ueber-agnes`}
                className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/90 text-white px-8 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                {ctaText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}