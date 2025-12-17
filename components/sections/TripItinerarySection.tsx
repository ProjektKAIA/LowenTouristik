// components/sections/TripItinerarySection.tsx
'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  image?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  activities?: string[];
  accommodation?: string;
  meals?: string;
}

interface TripItinerarySectionProps {
  itinerary: ItineraryDay[];
  highlights: string[];
}

export function TripItinerarySection({ itinerary, highlights }: TripItinerarySectionProps) {
  const t = useTranslations('trips.detail');

  const hasHighlights = highlights && highlights.length > 0;
  const hasItinerary = itinerary && itinerary.length > 0;

  if (!hasHighlights && !hasItinerary) {
    return null;
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Highlights */}
          {hasHighlights && (
            <div className="mb-16">
              <h2 className="text-4xl font-serif font-bold text-primary mb-8 text-center">
                {t('highlights.title')}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 bg-neutral-cream p-4 rounded-2xl">
                    <svg className="w-6 h-6 text-accent-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-neutral-brown font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Itinerary */}
          {hasItinerary && (
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-8 text-center">
                {t('itinerary.title')}
              </h2>
              <div className="space-y-8">
                {itinerary.map((day, index) => (
                  <div 
                    key={day.day} 
                    className={`bg-neutral-cream rounded-3xl overflow-hidden hover:shadow-xl transition-shadow ${
                      index % 2 === 0 ? '' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="md:flex">
                      {/* Bild */}
                      {day.image?.asset?.url && (
                        <div className={`relative w-full md:w-2/5 h-64 md:h-auto min-h-[280px] ${
                          index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                        }`}>
                          <Image
                            src={day.image.asset.url}
                            alt={day.image.alt || `Tag ${day.day}: ${day.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover"
                          />
                          {/* Tag Badge auf Bild */}
                          <div className="absolute top-4 left-4 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                            {day.day}
                          </div>
                        </div>
                      )}
                      
                      {/* Content */}
                      <div className={`flex-1 p-8 ${
                        index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                      }`}>
                        <div className="flex items-start gap-4">
                          {/* Tag Badge (nur wenn kein Bild) */}
                          {!day.image?.asset?.url && (
                            <div className="flex-shrink-0 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                              {day.day}
                            </div>
                          )}
                          
                          <div className="flex-1">
                            <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                              {day.title}
                            </h3>
                            <p className="text-neutral-brown mb-4 leading-relaxed">
                              {day.description}
                            </p>
                            
                            {/* Aktivitäten */}
                            {day.activities && day.activities.length > 0 && (
                              <div className="mb-4">
                                <p className="font-semibold text-sm text-neutral-brown/70 mb-2">
                                  {t('itinerary.activities')}:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {day.activities.map((activity, idx) => (
                                    <span 
                                      key={idx} 
                                      className="inline-flex items-center gap-1 text-sm bg-white px-3 py-1 rounded-full text-neutral-brown"
                                    >
                                      <span className="text-accent-green">•</span>
                                      {activity}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {/* Unterkunft & Mahlzeiten */}
                            <div className="flex flex-wrap gap-4 text-sm">
                              {day.accommodation && (
                                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full">
                                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                                  </svg>
                                  <span className="text-neutral-brown">{day.accommodation}</span>
                                </div>
                              )}
                              {day.meals && day.meals !== 'keine' && (
                                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full">
                                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                                  </svg>
                                  <span className="text-neutral-brown capitalize">
                                    {day.meals === 'fruehstueck' && 'Frühstück'}
                                    {day.meals === 'halbpension' && 'Halbpension'}
                                    {day.meals === 'vollpension' && 'Vollpension'}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}