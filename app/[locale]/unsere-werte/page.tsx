// app/[locale]/unsere-werte/page.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ValuesHeroSection } from '@/components/sections/ValuesHeroSection';
import { OurValuesSection } from '@/components/sections/OurValuesSection';
import { CTASection } from '@/components/sections/CTASection';

export default function UnsereWertePage() {
  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen">
        <ValuesHeroSection />
        <OurValuesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}