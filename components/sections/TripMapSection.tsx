// components/sections/TripMapSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import type { MapStation, ItineraryDay } from '@/lib/types/trip';

interface TripMapSectionProps {
  stations: MapStation[];
  country: string;
  itinerary?: ItineraryDay[];
}

export function TripMapSection({ stations, country, itinerary = [] }: TripMapSectionProps) {
  const t = useTranslations('trips.detail.map');
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  // Helper: Bild für einen Tag aus dem Itinerary holen
  const getImageForDay = (day: number): string | null => {
    const itineraryDay = itinerary.find(i => i.day === day);
    return itineraryDay?.image?.asset?.url || null;
  };

  useEffect(() => {
    const initMap = async () => {
      if (typeof window === 'undefined' || !mapRef.current) return;

      const L = (await import('leaflet')).default;

      // Add Leaflet CSS
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Calculate map center
      const avgLat = stations.reduce((sum, s) => sum + s.lat, 0) / stations.length;
      const avgLng = stations.reduce((sum, s) => sum + s.lng, 0) / stations.length;

      // Create map
      const map = L.map(mapRef.current).setView([avgLat, avgLng], 6);
      mapInstanceRef.current = map;

      // Add tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      // Draw route
      const routeCoordinates = stations.map(s => [s.lat, s.lng] as [number, number]);
      L.polyline(routeCoordinates, {
        color: '#2A5F6F',
        weight: 3,
        opacity: 0.7,
        dashArray: '10, 10',
      }).addTo(map);

      // Add markers
      stations.forEach((station) => {
        const imageUrl = getImageForDay(station.day);
        
        const customIcon = L.divIcon({
          className: 'custom-marker-wrapper',
          html: `
            <div style="
              width: 36px;
              height: 36px;
              background: linear-gradient(135deg, #E8A756 0%, #D4941F 100%);
              border: 3px solid white;
              border-radius: 50%;
              box-shadow: 0 3px 12px rgba(0,0,0,0.2);
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              color: white;
              font-size: 14px;
              cursor: pointer;
            ">
              ${station.day}
            </div>
          `,
          iconSize: [36, 36],
          iconAnchor: [18, 18],
        });

        // Popup mit oder ohne Bild
        const popupContent = imageUrl
          ? `
            <div style="text-align: center; min-width: 200px; max-width: 280px;">
              <img 
                src="${imageUrl}" 
                alt="${station.name}"
                style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;"
              />
              <div style="font-weight: bold; color: #2A5F6F; font-size: 16px; margin-bottom: 4px;">
                ${station.name}
              </div>
              <div style="font-size: 12px; color: #4A3C2E; opacity: 0.7; margin-bottom: 4px;">
                Tag ${station.day}
              </div>
              <div style="font-size: 14px; color: #4A3C2E;">
                ${station.title}
              </div>
            </div>
          `
          : `
            <div style="text-align: center; padding: 8px; min-width: 150px;">
              <div style="font-weight: bold; color: #2A5F6F; font-size: 16px; margin-bottom: 4px;">
                ${station.name}
              </div>
              <div style="font-size: 12px; color: #4A3C2E; opacity: 0.7; margin-bottom: 4px;">
                Tag ${station.day}
              </div>
              <div style="font-size: 14px; color: #4A3C2E;">
                ${station.title}
              </div>
            </div>
          `;

        L.marker([station.lat, station.lng], { icon: customIcon })
          .bindPopup(popupContent, { maxWidth: 300 })
          .addTo(map);
      });
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, [stations, itinerary]);

  return (
    <section className="py-16 px-6 bg-neutral-cream">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-neutral-brown/70">
            {t('subtitle', { country })}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div
            ref={mapRef}
            className="w-full h-[600px] rounded-xl shadow-inner"
            style={{ background: '#E8E4D9' }}
          />

          <div className="mt-6 flex justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-white" style={{ background: '#E8A756' }} />
              <span className="text-sm text-neutral-brown/70">{t('legend.stations')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5" style={{ background: '#2A5F6F' }} />
              <span className="text-sm text-neutral-brown/70">{t('legend.route')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}