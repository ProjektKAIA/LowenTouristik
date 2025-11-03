// app/[locale]/reisen/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { TripsHeroSection } from '@/components/sections/TripsHeroSection';
import { TripsFilterSection } from '@/components/sections/TripsFilterSection';
import { TripsGridSection } from '@/components/sections/TripsGridSection';
import { CTASection } from '@/components/sections/CTASection';
import { getAllTrips } from '@/lib/sanity/api';
import type { TripCardProps } from '@/components/ui/TripCard.types';

export default function ReisenPage() {
  const [trips, setTrips] = useState<TripCardProps['trip'][]>([]);
  const [filteredTrips, setFilteredTrips] = useState<TripCardProps['trip'][]>([]);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const data = await getAllTrips();
        setTrips(data);
        setFilteredTrips(data);
      } catch (error) {
        console.error('Error fetching trips:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  useEffect(() => {
    if (selectedRegion === 'all') {
      setFilteredTrips(trips);
    } else {
      setFilteredTrips(trips.filter((trip) => trip.region === selectedRegion));
    }
  }, [selectedRegion, trips]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-32 pb-16">
          <div className="container mx-auto px-6 text-center">
            <p className="text-xl text-neutral-brown">Reisen werden geladen...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen">
        <TripsHeroSection />
        <TripsFilterSection
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
        />
        <TripsGridSection trips={filteredTrips} locale="de" />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}