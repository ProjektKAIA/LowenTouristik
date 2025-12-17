// app/[locale]/reisen/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { TripDetailHeroSection } from '@/components/sections/TripDetailHeroSection';
import { TripMapSection } from '@/components/sections/TripMapSection';
import { TripItinerarySection } from '@/components/sections/TripItinerarySection';
import { TripIncludedSection } from '@/components/sections/TripIncludedSection';
import { TripBookingSection } from '@/components/sections/TripBookingSection';
import { getTripBySlug } from '@/lib/services/trip.service';

interface TripDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function TripDetailPage({ params }: TripDetailPageProps) {
  const { slug } = await params;
  const trip = await getTripBySlug(slug);

  if (!trip) {
    notFound();
  }

  const maxPersons = trip.maxPersons || 12;

  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen">
        <TripDetailHeroSection
          title={trip.title}
          region={trip.region}
          duration={trip.duration}
          price={trip.price}
          maxPersons={maxPersons}
          shortDescription={trip.shortDescription}
          mainImage={trip.mainImage}
        />
        
        {trip.mapStations && trip.mapStations.length > 0 && (
          <TripMapSection 
            stations={trip.mapStations} 
            country={trip.country}
          />
        )}
        
        {((trip.highlights && trip.highlights.length > 0) || (trip.itinerary && trip.itinerary.length > 0)) && (
          <TripItinerarySection
            itinerary={trip.itinerary || []}
            highlights={trip.highlights || []}
          />
        )}
        
        {((trip.included && trip.included.length > 0) || (trip.notIncluded && trip.notIncluded.length > 0)) && (
          <TripIncludedSection
            included={trip.included || []}
            notIncluded={trip.notIncluded || []}
          />
        )}
        
        <TripBookingSection
          tripTitle={trip.title}
          price={trip.price}
        />
      </main>
      <Footer />
    </>
  );
}