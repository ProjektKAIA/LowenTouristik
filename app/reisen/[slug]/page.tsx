// app/reisen/[slug]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTripBySlug, getAllTripSlugs, getSimilarTrips } from '@/lib/sanity/api';
import { urlFor } from '@/lib/sanity/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// ============================================
// ISR: Revalidate every 1 hour
// ============================================
export const revalidate = 3600;

// ============================================
// GENERATE STATIC PARAMS
// Pre-render all trip pages at build time
// ============================================
export async function generateStaticParams() {
  const slugs = await getAllTripSlugs();
  
  return slugs.map((slug: string) => ({
    slug,
  }));
}

// ============================================
// GENERATE METADATA
// Dynamic SEO for each trip
// ============================================
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const trip = await getTripBySlug(params.slug);

  if (!trip) {
    return {
      title: 'Reise nicht gefunden',
    };
  }

  return {
    title: `${trip.title} - ${trip.duration} Tage | Loewentouristik`,
    description: trip.description || `Entdecke ${trip.country} mit Loewentouristik. ${trip.duration} Tage authentische Reise mit maximal ${trip.maxPersons} Personen.`,
    openGraph: {
      title: trip.title,
      description: trip.description,
      images: [
        {
          url: urlFor(trip.mainImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: trip.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: trip.title,
      description: trip.description,
      images: [urlFor(trip.mainImage).width(1200).height(630).url()],
    },
  };
}

// ============================================
// TRIP DETAIL PAGE
// ============================================
export default async function TripPage({
  params,
}: {
  params: { slug: string };
}) {
  const trip = await getTripBySlug(params.slug);

  // 404 if trip not found
  if (!trip) {
    notFound();
  }

  // Get similar trips
  const similarTrips = await getSimilarTrips(
    params.slug,
    trip.country,
    trip.tags || []
  );

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
            <img
              src={urlFor(trip.mainImage).width(1920).height(1080).url()}
              alt={trip.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-20 container mx-auto px-4 text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold">{trip.country}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              {trip.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span>📅 {trip.duration} Tage</span>
              <span>•</span>
              <span>👥 Max. {trip.maxPersons} Personen</span>
              <span>•</span>
              <span>💰 ab €{trip.price}</span>
            </div>
          </div>
        </section>

        {/* Content Section - Placeholder */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl text-neutral-brown/80 leading-relaxed">
                  {trip.description}
                </p>
              </div>

              {/* Highlights */}
              {trip.highlights && trip.highlights.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold mb-6">Highlights</h2>
                  <ul className="space-y-3">
                    {trip.highlights.map((highlight: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-secondary text-xl">✓</span>
                        <span className="text-lg">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="bg-primary/5 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Interessiert an dieser Reise?
                </h3>
                <p className="text-lg text-neutral-brown/70 mb-6">
                  Kontaktiere uns für eine persönliche Beratung
                </p>
                <button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-full transition-colors">
                  Jetzt anfragen
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Trips */}
        {similarTrips && similarTrips.length > 0 && (
          <section className="py-16 bg-neutral-cream">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-serif font-bold text-center mb-12">
                Ähnliche Reisen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {similarTrips.map((similarTrip: any) => (
                  <a
                    key={similarTrip._id}
                    href={`/reisen/${similarTrip.slug.current}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={urlFor(similarTrip.mainImage).width(600).height(450).url()}
                        alt={similarTrip.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-secondary transition-colors">
                        {similarTrip.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-neutral-brown/70">
                        <span>{similarTrip.duration} Tage</span>
                        <span>•</span>
                        <span>ab €{similarTrip.price}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}