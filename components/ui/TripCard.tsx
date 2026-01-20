// components/ui/TripCard.tsx
'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import type { TripCardProps } from './TripCard.types';

export function TripCard({ trip }: TripCardProps) {
  const t = useTranslations('trips.card');

  const getRegionColor = (region: string) => {
    const colors: Record<string, string> = {
      'Zentralafrika': 'bg-primary',
      'Westafrika': 'bg-secondary',
      'Ostafrika': 'bg-accent-green',
      'Südliches Afrika': 'bg-secondary',
    };
    return colors[region] || 'bg-primary';
  };

  const getAvailabilityBadge = () => {
    if (trip.availability === 'full') {
      return (
        <span className="text-xs font-semibold text-red-600">
          {t('availability.full')}
        </span>
      );
    }
    if (trip.availability === 'limited' && trip.spotsLeft) {
      return (
        <span className="text-xs font-semibold text-orange-600">
          {trip.spotsLeft} {t('availability.spotsLeft')}
        </span>
      );
    }
    return (
      <span className="text-xs font-semibold text-accent-green">
        {t('availability.available')}
      </span>
    );
  };

  return (
    <div className="trip-card bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={trip.mainImage.asset.url}
          alt={trip.mainImage.alt || trip.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className={`absolute top-4 left-4 ${getRegionColor(trip.region)} text-white px-3 py-1 rounded-full text-xs font-bold uppercase`}>
          {trip.region}
        </div>
        <div className="absolute top-4 right-4 bg-accent-red text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          {trip.duration} {t('days')}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-primary mb-2">
          {trip.title}
        </h3>
        <p className="text-neutral-brown/80 mb-4 text-sm line-clamp-2">
          {trip.shortDescription}
        </p>
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-cream">
          <div>
            <span className="text-2xl font-bold text-primary">
              {t('priceFrom')} {trip.price.toLocaleString('de-DE')} €
            </span>
          </div>
          {getAvailabilityBadge()}
        </div>
        <Link
          href={`/reisen/${trip.slug}`}
          className="block w-full bg-accent-red hover:bg-accent-red/90 text-white text-center py-3 rounded-full font-semibold transition"
        >
          {t('viewDetails')}
        </Link>
      </div>
    </div>
  );
}