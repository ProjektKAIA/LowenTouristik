// components/sections/ValuePropositionsSection.tsx
'use client';

import type { ValuesSection, Locale } from '@/lib/types/homepage.types';
import { getLocalizedValue } from '@/lib/types/homepage.types';

interface ValuePropositionsSectionProps {
  data: ValuesSection;
  locale: Locale;
}

export function ValuePropositionsSection({ data, locale }: ValuePropositionsSectionProps) {
  const t = (field: any) => getLocalizedValue(field, locale);

  const title = t(data.title);
  const subtitle = t(data.subtitle);
  const badge = t(data.badge);
  const comparisons = data.comparisons?.map((c) => ({
    standardTitle: t(c.standardTitle),
    standardDescription: t(c.standardDescription),
    oursTitle: t(c.oursTitle),
    oursDescription: t(c.oursDescription),
  })) || [];

  return (
    <section id="werte" className="py-24 bg-neutral-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-primary mb-6">{title}</h2>
          <p className="text-lg md:text-xl text-neutral-brown/80 leading-relaxed">{subtitle}</p>
        </div>

        {comparisons.length > 0 && (
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
            {comparisons.map((comparison, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="p-6 bg-neutral-cream/50 border-b border-neutral-cream">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-accent-red/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-neutral-brown">{comparison.standardTitle}</h3>
                  </div>
                  <p className="text-neutral-brown/70 text-sm">{comparison.standardDescription}</p>
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-accent-green/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-primary">{comparison.oursTitle}</h3>
                  </div>
                  <p className="text-neutral-brown/80">{comparison.oursDescription}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {badge && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <svg className="w-5 h-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-neutral-brown">{badge}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}