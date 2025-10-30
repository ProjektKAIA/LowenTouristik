// app/page.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { HeroSection } from '@/components/sections/HeroSection';
import { ValuePropositionsSection } from '@/components/sections/ValuePropositionsSection';
import { FeaturedTripsSection } from '@/components/sections/FeaturedTripsSection';
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen">
        <HeroSection />
        <ValuePropositionsSection />
        <FeaturedTripsSection />
        <AboutPreviewSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}