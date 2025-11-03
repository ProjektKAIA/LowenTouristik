// app/[locale]/reisen/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { TripDetailHeroSection } from '@/components/sections/TripDetailHeroSection';
import { TripItinerarySection } from '@/components/sections/TripItinerarySection';
import { TripIncludedSection } from '@/components/sections/TripIncludedSection';
import { TripBookingSection } from '@/components/sections/TripBookingSection';
import { getTripBySlug } from '@/lib/sanity/api';

interface TripDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function TripDetailPage({ params }: TripDetailPageProps) {
  const { locale, slug } = await params;
  const trip = await getTripBySlug(slug);

  if (!trip) {
    notFound();
  }

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
          shortDescription={trip.shortDescription}
          mainImage={trip.mainImage}
        />
        <TripItinerarySection
          itinerary={trip.itinerary}
          highlights={trip.highlights}
        />
        <TripIncludedSection
          included={trip.included}
          notIncluded={trip.notIncluded}
        />
        <TripBookingSection
          tripTitle={trip.title}
          price={trip.price}
        />
      </main>
      <Footer />
    </>
  );
}