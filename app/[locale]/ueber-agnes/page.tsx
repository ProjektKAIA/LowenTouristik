// app/[locale]/ueber-agnes/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { AboutHeroSection } from '@/components/sections/AboutHeroSection';
import { AboutStorySection } from '@/components/sections/AboutStorySection';
import { AboutMissionSection } from '@/components/sections/AboutMissionSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';
import { getAboutPageData } from '@/lib/services/about.service';
import { getLocalizedValue, type Locale } from '@/lib/types/about.types';
import { SEO, SITE_INFO } from '@/lib/constants';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const data = await getAboutPageData();

  const title = data?.seo?.title
    ? getLocalizedValue(data.seo.title, locale as Locale)
    : 'Über Agnes Kah - Loewentouristik';

  const description = data?.seo?.description
    ? getLocalizedValue(data.seo.description, locale as Locale)
    : 'Lernen Sie Agnes Kah kennen – Gründerin von Loewentouristik.';

  return {
    title,
    description,
    keywords: [...SEO.keywords, 'Agnes Kah', 'Gründerin'],
    openGraph: {
      title,
      description,
      url: `${SITE_INFO.url}/${locale}/ueber-agnes`,
      siteName: SITE_INFO.name,
      locale: locale === 'de' ? 'de_DE' : locale === 'en' ? 'en_US' : 'fr_FR',
      type: 'website',
    },
  };
}

export default async function UeberAgnesPage({ params }: PageProps) {
  const { locale } = await params;
  const data = await getAboutPageData();

  if (!data) {
    notFound();
  }

  const typedLocale = locale as Locale;

  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen">
        <AboutHeroSection data={data.hero} locale={typedLocale} />
        <AboutStorySection data={data.story} locale={typedLocale} />
        <AboutMissionSection data={data.mission} locale={typedLocale} />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}