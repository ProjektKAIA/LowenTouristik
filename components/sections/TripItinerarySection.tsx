// components/sections/TripItinerarySection.tsx
'use client';

import { useTranslations } from 'next-intl';

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
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

  // Wenn weder Highlights noch Itinerary, nichts rendern
  if (!hasHighlights && !hasItinerary) {
    return null;
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Highlights - nur wenn vorhanden */}
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

          {/* Itinerary - nur wenn vorhanden */}
          {hasItinerary && (
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-8 text-center">
                {t('itinerary.title')}
              </h2>
              <div className="space-y-6">
                {itinerary.map((day) => (
                  <div key={day.day} className="bg-neutral-cream rounded-3xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                          {day.title}
                        </h3>
                        <p className="text-neutral-brown mb-4 leading-relaxed">
                          {day.description}
                        </p>
                        {day.activities && day.activities.length > 0 && (
                          <div className="mb-3">
                            <p className="font-semibold text-sm text-neutral-brown/70 mb-2">
                              {t('itinerary.activities')}:
                            </p>
                            <ul className="space-y-1">
                              {day.activities.map((activity, idx) => (
                                <li key={idx} className="text-sm text-neutral-brown flex items-start gap-2">
                                  <span className="text-accent-green">•</span>
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-4 text-sm">
                          {day.accommodation && (
                            <div className="flex items-center gap-2 text-neutral-brown/70">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                              </svg>
                              <span>{day.accommodation}</span>
                            </div>
                          )}
                          {day.meals && (
                            <div className="flex items-center gap-2 text-neutral-brown/70">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd"/>
                              </svg>
                              <span>{day.meals}</span>
                            </div>
                          )}
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