// components/sections/ValuePropositionsSection.tsx
'use client';

import type { ValuesSection, Locale } from '@/lib/types/homepage.types';
import { getLocalizedValue } from '@/lib/types/homepage.types';

interface ValuePropositionsSectionProps {
  data?: ValuesSection;
  locale?: Locale;
}

export function ValuePropositionsSection({ data, locale = 'de' }: ValuePropositionsSectionProps) {
  const t = (field: any) => getLocalizedValue(field, locale);

  // Fallback-Werte
  const title = data?.title ? t(data.title) : 'Was uns anders macht';
  const subtitle = data?.subtitle ? t(data.subtitle) : 'Massentourismus zerstört genau das, was Reisende suchen. Wir machen es anders.';
  const badge = data?.badge ? t(data.badge) : '100% CO₂-kompensiert • 80% lokale Wirtschaft • TourCert zertifiziert';

  const comparisons = data?.comparisons?.length 
    ? data.comparisons.map(c => ({
        standardTitle: t(c.standardTitle),
        standardDescription: t(c.standardDescription),
        oursTitle: t(c.oursTitle),
        oursDescription: t(c.oursDescription),
      }))
    : [
        {
          standardTitle: 'Standard-Touren',
          standardDescription: '2-Stunden-Besuch mit Gruppenfoto und "traditionellem Tanz"',
          oursTitle: 'Bei uns',
          oursDescription: '3 Tage im Dorf – auf persönliche Einladung. Echte Freundschaften.',
        },
        {
          standardTitle: 'Große Gruppen',
          standardDescription: '16-25 Menschen, laut, aufdringlich, oberflächlich',
          oursTitle: 'Bei uns',
          oursDescription: 'Maximal 12 Personen. Klein genug für echte Begegnungen.',
        },
        {
          standardTitle: 'Vom Schreibtisch geplant',
          standardDescription: 'Katalog-Ware ohne persönliche Erfahrung',
          oursTitle: 'Bei uns',
          oursDescription: 'Jede Route von Agnes persönlich über 10× bereist.',
        },
        {
          standardTitle: 'Inszenierte Shows',
          standardDescription: '"Folklore" für Touristen, keine echte Kultur',
          oursTitle: 'Bei uns',
          oursDescription: 'Echtes Leben. Keine Shows. Kulturen wie sie wirklich sind.',
        },
      ];

  return (
    <section id="werte" className="py-24 bg-gradient-to-br from-primary to-accent-green text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-6">
            {title}
          </h2>
          <p className="scroll-reveal text-xl md:text-2xl font-handwritten text-secondary" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        </div>

        {comparisons.length > 0 && (
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {comparisons.map((comparison, index) => (
              <div 
                key={index}
                className="scroll-reveal bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">❌</div>
                  <div>
                    <div className="font-bold text-lg mb-2">{comparison.standardTitle}</div>
                    <p className="text-white/70 text-sm">{comparison.standardDescription}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">✅</div>
                  <div>
                    <div className="font-bold text-lg mb-2 text-secondary">{comparison.oursTitle}</div>
                    <p className="text-white/90 text-sm">{comparison.oursDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {badge && (
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full">
              <svg className="w-6 h-6 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">{badge}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}