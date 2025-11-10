// app/[locale]/page.tsx
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { HeroSection } from '@/components/sections/HeroSection';
import { ValuePropositionsSection } from '@/components/sections/ValuePropositionsSection';
import { FeaturedTripsSection } from '@/components/sections/FeaturedTripsSection';
import { getFeaturedTrips, getAllTrips } from '@/lib/services/trip.service';
import { Suspense } from 'react';
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';
import { SEO, SITE_INFO } from '@/lib/constants';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: SEO.defaultTitle,
    description: SEO.description,
    keywords: SEO.keywords,
    authors: [{ name: SITE_INFO.name }],
    openGraph: {
      title: SEO.defaultTitle,
      description: SEO.description,
      url: SITE_INFO.url,
      siteName: SITE_INFO.name,
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: SITE_INFO.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: SEO.defaultTitle,
      description: SEO.description,
      images: ['/images/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: SITE_INFO.url,
      languages: {
        'de-DE': `${SITE_INFO.url}/de`,
        'en-US': `${SITE_INFO.url}/en`,
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
  
  // Falls keine Featured Trips, nimm die neuesten 3
  if (!trips || trips.length === 0) {
    const allTrips = await getAllTrips();
    return <FeaturedTripsSection trips={allTrips.slice(0, 3)} />;
  }
  
  return <FeaturedTripsSection trips={trips} />;
}

export default async function HomePage() {
  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen">
        <HeroSection />
        <ValuePropositionsSection />
        <Suspense fallback={<FeaturedTripsLoader />}>
          <FeaturedTrips />
        </Suspense>
        <AboutPreviewSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}