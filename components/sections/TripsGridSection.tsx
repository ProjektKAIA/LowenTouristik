// components/sections/TripsGridSection.tsx
'use client';

import { TripCard } from '@/components/ui/TripCard';
import type { TripCardProps } from '@/components/ui/TripCard.types';

interface TripsGridSectionProps {
  trips: TripCardProps['trip'][];
}

export function TripsGridSection({ trips }: TripsGridSectionProps) {
  return (
    <section className="py-24 bg-neutral-cream">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {trips.map((trip) => (
            <TripCard key={trip._id} trip={trip} />
          ))}
        </div>
      </div>
    </section>
  );
}