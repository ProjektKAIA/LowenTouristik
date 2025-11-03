// components/sections/TripsFilterSection.tsx
'use client';

import { useTranslations } from 'next-intl';

interface TripsFilterSectionProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

export function TripsFilterSection({ selectedRegion, onRegionChange }: TripsFilterSectionProps) {
  const t = useTranslations('trips.overview.filter');

  const regions = [
    { value: 'all', label: t('all') },
    { value: 'Zentralafrika', label: t('central') },
    { value: 'Westafrika', label: t('west') },
    { value: 'Ostafrika', label: t('east') },
    { value: 'Südliches Afrika', label: t('southern') },
  ];

  return (
    <section className="py-8 bg-white border-b border-neutral-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {regions.map((region) => (
            <button
              key={region.value}
              onClick={() => onRegionChange(region.value)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedRegion === region.value
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-neutral-cream text-neutral-brown hover:bg-neutral-cream/80'
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}