// app/[locale]/ueber-agnes/page.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { AboutHeroSection } from '@/components/sections/AboutHeroSection';
import { AboutStorySection } from '@/components/sections/AboutStorySection';
import { AboutMissionSection } from '@/components/sections/AboutMissionSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';

export default function UeberAgnesPage() {
  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen">
        <AboutHeroSection />
        <AboutStorySection />
        <AboutMissionSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}