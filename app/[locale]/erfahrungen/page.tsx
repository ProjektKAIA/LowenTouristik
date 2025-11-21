// app/[locale]/erfahrungen/page.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { TestimonialsHeroSection } from '@/components/sections/TestimonialsHeroSection';
import { TestimonialsFilterSection } from '@/components/sections/TestimonialsFilterSection';
import { TestimonialsGridSection } from '@/components/sections/TestimonialsGridSection';
import { TestimonialsGallerySection } from '@/components/sections/TestimonialsGallerySection';
import { TestimonialsVideoSection } from '@/components/sections/TestimonialsVideoSection';
import { CTASection } from '@/components/sections/CTASection';
import { getAllTestimonials } from '@/lib/services/testimonial.service';
import { Metadata } from 'next';
import { SEO, SITE_INFO } from '@/lib/constants';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'Erfahrungen & Testimonials - Loewentouristik',
    description: 'Über 2.500 zufriedene Afrika-Reisende seit 2009. Lies authentische Erfahrungsberichte, schaue Videos und entdecke Fotos unserer Reisen.',
    keywords: [...SEO.keywords, 'Erfahrungsberichte', 'Testimonials', 'Kundenbewertungen', 'Reiseberichte'],
    openGraph: {
      title: 'Erfahrungen & Testimonials - Loewentouristik',
      description: 'Über 2.500 zufriedene Afrika-Reisende seit 2009',
      url: `${SITE_INFO.url}/${locale}/erfahrungen`,
      siteName: SITE_INFO.name,
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      type: 'website',
    },
  };
}

export default async function ErfahrungenPage() {
  const testimonials = await getAllTestimonials();

  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen">
        <TestimonialsHeroSection />
        <TestimonialsFilterSection />
        <TestimonialsGridSection testimonials={testimonials} />
        <TestimonialsVideoSection testimonials={testimonials} />
        <TestimonialsGallerySection testimonials={testimonials} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}