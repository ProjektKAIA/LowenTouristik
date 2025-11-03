// components/sections/TripBookingSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CONTACT } from '@/lib/constants';

interface TripBookingSectionProps {
  tripTitle: string;
  price: number;
}

export function TripBookingSection({ tripTitle, price }: TripBookingSectionProps) {
  const t = useTranslations('trips.detail.booking');

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-accent-green text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {t('title')}
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
            {t('subtitle')}
            <br />
            <span className="font-handwritten text-3xl text-secondary">
              {t('tagline')}
            </span>
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <p className="text-sm opacity-90 mb-2">{t('selectedTrip')}</p>
                <p className="text-2xl font-serif font-bold">{tripTitle}</p>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-90 mb-2">{t('priceFrom')}</p>
                <p className="text-4xl font-bold">{price.toLocaleString('de-DE')} €</p>
                <p className="text-xs opacity-80 mt-1">{t('perPerson')}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/kontakt"
              className="bg-accent-red hover:bg-accent-red/90 text-white px-12 py-5 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-2xl"
            >
              {t('requestButton')}
            </Link>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-12 py-5 rounded-full font-bold text-lg transition border-2 border-white/30 shadow-xl"
            >
              📞 {CONTACT.phone}
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm opacity-90 flex-wrap">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>{t('feature1')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>{t('feature2')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>{t('feature3')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}