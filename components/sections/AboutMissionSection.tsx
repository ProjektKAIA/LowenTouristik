// components/sections/AboutMissionSection.tsx
'use client';

import type { AboutMissionData, Locale } from '@/lib/types/about.types';
import { getLocalizedValue } from '@/lib/types/about.types';

interface AboutMissionSectionProps {
  data: AboutMissionData;
  locale: Locale;
}

const colorGradients = [
  'from-primary to-accent-green',
  'from-accent-green to-secondary',
  'from-secondary to-accent-red',
  'from-accent-red to-primary',
  'from-primary to-accent-green',
  'from-accent-green to-primary',
];

export function AboutMissionSection({ data, locale }: AboutMissionSectionProps) {
  const t = (field: any) => getLocalizedValue(field, locale);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-primary mb-8">
            {t(data.title)}
          </h2>
          <p className="text-xl md:text-2xl text-neutral-brown leading-relaxed">
            {t(data.description)}
          </p>
        </div>

        {data.values && data.values.length > 0 && (
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-neutral-cream hover:bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${colorGradients[index % colorGradients.length]} flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    {value.icon || '●'}
                  </div>
                  <h4 className="text-xl font-serif font-bold text-primary mb-3">{t(value.title)}</h4>
                  <p className="text-neutral-brown leading-relaxed">{t(value.description)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}