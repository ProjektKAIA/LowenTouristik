// components/sections/AboutPreviewSection.tsx
'use client';

import Image from 'next/image';
import type { AboutPreviewSection as AboutPreviewData, Locale } from '@/lib/types/homepage.types';
import { getLocalizedValue } from '@/lib/types/homepage.types';

interface AboutPreviewSectionProps {
  data?: AboutPreviewData;
  locale?: Locale;
}

export function AboutPreviewSection({ data, locale = 'de' }: AboutPreviewSectionProps) {
  const t = (field: any) => getLocalizedValue(field, locale);

  // Fallback-Werte
  const label = data?.label ? t(data.label) : 'Die Gründerin';
  const title = data?.title ? t(data.title) : 'Agnes Kah - Mein Herz schlägt für Afrika';
  const badgeValue = data?.badgeValue ? t(data.badgeValue) : '10+';
  const badgeLabel = data?.badgeLabel ? t(data.badgeLabel) : 'Jahre in Afrika';
  const imageUrl = data?.image?.asset?.url || 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop';
  const imageAlt = data?.image?.alt || 'Agnes in Afrika';

  const paragraphs = data?.paragraphs?.length
    ? data.paragraphs.map(p => ({
        text: t(p.text),
        bold: p.bold ? t(p.bold) : undefined,
      }))
    : [
        { text: '2009 hat mich Afrika zum ersten Mal berührt. Was als Neugierde begann, wurde zur Leidenschaft.' },
        { bold: 'Ich reise nicht nach Afrika – ich lebe dort.', text: 'Jede Route habe ich über 10 Mal persönlich bereist.' },
        { text: 'Meine Mission: Dir Afrika so zu zeigen, wie ich es liebe – authentisch und respektvoll.' },
      ];

  const ctaText = locale === 'de' ? 'Sprich mit mir' : locale === 'en' ? 'Talk to me' : 'Parlez-moi';
  const videoText = locale === 'de' ? 'Video ansehen' : locale === 'en' ? 'Watch Video' : 'Voir la vidéo';

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
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={false}
                  />
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

            {/* Content */}
            <div className="order-1 md:order-2">
              {label && (
                <div className="inline-block bg-secondary/10 text-accent-red px-4 py-2 rounded-full font-bold text-sm mb-6">
                  {label}
                </div>
              )}
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-6">
                {title}
              </h2>
              
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-neutral-brown/90 leading-relaxed mb-6">
                  {paragraph.bold && <strong>{paragraph.bold} </strong>}
                  {paragraph.text}
                </p>
              ))}

              <div className="flex flex-wrap gap-4">
                <a
                  href="#kontakt"
                  className="btn-primary bg-accent-red hover:bg-accent-red/90 text-white px-8 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                >
                  {ctaText}
                </a>
                <button className="flex items-center gap-2 bg-neutral-cream hover:bg-neutral-cream/80 text-neutral-brown px-8 py-3 rounded-full font-bold transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  {videoText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}