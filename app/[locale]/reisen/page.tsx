// app/[locale]/reisen/page.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { TripsHeroSection } from '@/components/sections/TripsHeroSection';
import { TripsContent } from '@/components/sections/TripsContent';
import { CustomTripSection } from '@/components/sections/CustomTripSection';
import { CTASection } from '@/components/sections/CTASection';
import { getAllTrips } from '@/lib/services/trip.service';

export default async function ReisenPage() {
  const trips = await getAllTrips();

  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen">
        <TripsHeroSection />
        <TripsContent initialTrips={trips} />
        <CustomTripSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}