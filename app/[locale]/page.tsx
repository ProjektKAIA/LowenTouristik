// app/[locale]/page.tsx
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { HeroSection } from '@/components/sections/HeroSection';
import { ValuePropositionsSection } from '@/components/sections/ValuePropositionsSection';
import { FeaturedTripsSection } from '@/components/sections/FeaturedTripsSection';
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';
import { getFeaturedTrips, getAllTrips } from '@/lib/services/trip.service';
import { getHomepageData } from '@/lib/services/homepage.service';
import { getLocalizedValue } from '@/lib/types/homepage.types';
import type { Locale } from '@/lib/types/homepage.types';
import { Suspense } from 'react';
import { SEO, SITE_INFO } from '@/lib/constants';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const homepage = await getHomepageData();
  const loc = locale as Locale;

  const seoTitle = homepage?.seo?.title 
    ? getLocalizedValue(homepage.seo.title, loc) 
    : SEO.defaultTitle;
  const seoDescription = homepage?.seo?.description 
    ? getLocalizedValue(homepage.seo.description, loc) 
    : SEO.description;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: SEO.keywords,
    authors: [{ name: SITE_INFO.name }],
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: SITE_INFO.url,
      siteName: SITE_INFO.name,
      locale: locale === 'de' ? 'de_DE' : locale === 'en' ? 'en_US' : 'fr_FR',
      type: 'website',
      images: homepage?.seo?.image?.asset?.url 
        ? [{ url: homepage.seo.image.asset.url, width: 1200, height: 630, alt: SITE_INFO.name }]
        : [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: SITE_INFO.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: homepage?.seo?.image?.asset?.url ? [homepage.seo.image.asset.url] : ['/images/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${SITE_INFO.url}/${locale}`,
      languages: {
        'de-DE': `${SITE_INFO.url}/de`,
        'en-US': `${SITE_INFO.url}/en`,
        'fr-FR': `${SITE_INFO.url}/fr`,
      },
    },
  };
}

function FeaturedTripsLoader() {
  return (
    <div className="py-24 bg-gradient-to-br from-primary to-accent-green text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-pulse">
          <div className="h-12 bg-white/20 rounded-lg w-64 mx-auto mb-4"></div>
          <div className="h-6 bg-white/10 rounded-lg w-96 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

async function FeaturedTrips() {
  const trips = await getFeaturedTrips(3);
  
  if (!trips || trips.length === 0) {
    const allTrips = await getAllTrips();
    return <FeaturedTripsSection trips={allTrips.slice(0, 3)} />;
  }
  
  return <FeaturedTripsSection trips={trips} />;
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  
  // Homepage-Daten aus Sanity laden
  const homepage = await getHomepageData();

  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen">
        <HeroSection data={homepage?.hero} locale={loc} />
        <ValuePropositionsSection data={homepage?.valuesSection} locale={loc} />
        <Suspense fallback={<FeaturedTripsLoader />}>
          <FeaturedTrips />
        </Suspense>
        <AboutPreviewSection data={homepage?.aboutPreview} locale={loc} />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}