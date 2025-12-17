// components/sections/TripsContent.tsx
'use client';

import { useState, useMemo } from 'react';
import { TripsFilterSection } from '@/components/sections/TripsFilterSection';
import { TripsGridSection } from '@/components/sections/TripsGridSection';
import type { TripCardData } from '@/lib/types/trip';

interface TripsContentProps {
  initialTrips: TripCardData[];
}

export function TripsContent({ initialTrips }: TripsContentProps) {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const filteredTrips = useMemo(() => {
    if (selectedRegion === 'all') {
      return initialTrips;
    }
    return initialTrips.filter((trip) => trip.region === selectedRegion);
  }, [selectedRegion, initialTrips]);

  return (
    <>
      <TripsFilterSection
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
      />
      <TripsGridSection trips={filteredTrips} />
    </>
  );
}
