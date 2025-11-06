// components/sections/FeaturedTripsSection.tsx
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

interface Trip {
  _id: string;
  title: string;
  slug: string;
  region: string;
  duration: number;
  price: number;
  shortDescription: string;
  mainImage: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}

interface FeaturedTripsSectionProps {
  trips: Trip[];
}

export function FeaturedTripsSection({ trips }: FeaturedTripsSectionProps) {
  const t = useTranslations('trips');

  // Fallback falls keine Trips geladen wurden
  if (!trips || trips.length === 0) {
    return null;
  }

  const getRegionEmoji = (region: string) => {
    const emojiMap: Record<string, string> = {
      'kamerun': '🇨🇲',
      'sierra-leone': '🇸🇱',
      'senegal': '🇸🇳',
      'cameroon': '🇨🇲',
    };
    return emojiMap[region.toLowerCase()] || '🌍';
  };

  return (
    <section id="reisen" className="py-24 bg-gradient-to-br from-primary to-accent-green text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-6">
            {t('mainTitle')}
          </h2>
          <p className="scroll-reveal text-xl md:text-2xl font-handwritten text-secondary" style={{ animationDelay: '0.1s' }}>
            {t('mainSubtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {trips.map((trip, index) => (
            <div
              key={trip._id}
              className="scroll-reveal bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 transition-all hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={trip.mainImage.asset.url}
                  alt={trip.mainImage.alt || trip.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-2xl font-bold">{getRegionEmoji(trip.region)} {trip.region}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">{trip.title}</h3>
                <p className="text-white/80 mb-4 text-sm leading-relaxed">{trip.shortDescription}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm">
                    <span className="text-white/60">{trip.duration} Tage</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/60 text-sm">ab</span>
                    <span className="text-2xl font-black ml-2">€{trip.price.toLocaleString('de-DE')}</span>
                  </div>
                  <Link
                    href={`/reisen/${trip.slug}`}
                    className="bg-white text-primary px-6 py-2 rounded-full font-bold hover:bg-secondary hover:text-white transition-colors"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/reisen"
            className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-secondary hover:text-white transition-all hover:scale-105"
          >
            Alle Reisen ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}