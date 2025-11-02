// components/sections/FeaturedTripsSection.tsx
'use client';

import { useTranslations } from 'next-intl';

export function FeaturedTripsSection() {
  const t = useTranslations('trips');

  const trips = [
    {
      country: '🇨🇲 ' + t('items.cameroon.country'),
      title: t('items.cameroon.title'),
      description: t('items.cameroon.description'),
      duration: t('items.cameroon.duration'),
      maxPersons: t('items.cameroon.maxPersons'),
      price: '€3.890',
      badge: t('items.cameroon.badge'),
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
    },
    {
      country: '🇸🇱 ' + t('items.sierraLeone.country'),
      title: t('items.sierraLeone.title'),
      description: t('items.sierraLeone.description'),
      duration: t('items.sierraLeone.duration'),
      maxPersons: t('items.sierraLeone.maxPersons'),
      price: '€2.790',
      badge: null,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    },
    {
      country: '🇸🇳 ' + t('items.senegal.country'),
      title: t('items.senegal.title'),
      description: t('items.senegal.description'),
      duration: t('items.senegal.duration'),
      maxPersons: t('items.senegal.maxPersons'),
      price: '€2.890',
      badge: null,
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=600&fit=crop',
    },
  ];

  return (
    <section id="reisen" className="py-24 bg-gradient-to-br from-primary to-accent-green text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-6">
            {t('title')}
          </h2>
          <p className="text-xl md:text-2xl font-handwritten text-secondary mb-4">
            {t('subtitle')}
          </p>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:bg-white/15 hover:scale-105 transition-all group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {trip.badge && (
                  <div className="absolute top-4 right-4 bg-accent-red text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    {trip.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-secondary font-bold">{trip.country}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">{trip.title}</h3>
                <p className="text-white/80 mb-4 text-sm leading-relaxed">{trip.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm">
                    <span className="text-white/60">{trip.duration}</span> •{' '}
                    <span className="text-white/60">{t('maxLabel')} {trip.maxPersons}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/60 text-sm">{t('fromLabel')}</span>
                    <span className="text-2xl font-black ml-2">{trip.price}</span>
                  </div>
                  <button className="bg-white text-primary px-6 py-2 rounded-full font-bold hover:bg-secondary hover:text-white transition-colors">
                    {t('detailsButton')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-secondary hover:text-white transition-all hover:scale-105"
          >
            {t('allRoutesButton')}
          </a>
        </div>
      </div>
    </section>
  );
}