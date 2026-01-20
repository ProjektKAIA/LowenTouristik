// app/[locale]/nachhaltigkeit/page.tsx
import { Metadata } from 'next';
import { client } from '@/lib/sanity/client';
import { CONTENT_PAGE_BY_SLUG_QUERY } from '@/lib/queries/contentPage.queries';
import { ContentPageTemplate } from '@/components/pages/ContentPageTemplate';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SEO, SITE_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Nachhaltigkeit - Loewentouristik',
  description: 'Nachhaltiges Reisen mit Loewentouristik: 100% CO₂-kompensiert, faire Partnerschaften, respektvoller Tourismus in Afrika.',
  keywords: [...SEO.keywords, 'Nachhaltigkeit', 'Nachhaltiges Reisen', 'CO2 kompensiert', 'Fairer Tourismus'],
  openGraph: {
    title: 'Nachhaltigkeit - Loewentouristik',
    description: 'Nachhaltiges Reisen mit Loewentouristik',
    url: `${SITE_INFO.url}/nachhaltigkeit`,
    siteName: SITE_INFO.name,
    type: 'website',
  },
};

async function getPageData() {
  try {
    const data = await client.fetch(CONTENT_PAGE_BY_SLUG_QUERY, { slug: 'nachhaltigkeit' });
    return data;
  } catch (error) {
    console.error('Error fetching nachhaltigkeit page:', error);
    return null;
  }
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function NachhaltigkeitPage({ params }: PageProps) {
  const { locale } = await params;
  const pageData = await getPageData();

  // Fallback wenn keine Sanity-Daten vorhanden
  if (!pageData) {
    return (
      <>
        <Header />
        <main className="min-h-screen">
          <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-accent-green overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-6 relative z-10 text-center text-white max-w-4xl">
              <div className="inline-block bg-secondary/20 backdrop-blur-md border border-secondary/30 px-6 py-3 rounded-full font-bold text-secondary text-sm mb-6">
                🌍 {locale === 'de' ? 'Verantwortung' : 'Responsibility'}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-6">
                {locale === 'de' ? 'Nachhaltigkeit' : 'Sustainability'}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                {locale === 'de'
                  ? 'Reisen mit Verantwortung – für Mensch, Natur und Kultur'
                  : 'Traveling with responsibility – for people, nature and culture'}
              </p>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="text-center p-6">
                    <div className="text-5xl mb-4">🌱</div>
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <p className="text-neutral-brown/70">{locale === 'de' ? 'CO₂ kompensiert' : 'CO₂ compensated'}</p>
                  </div>
                  <div className="text-center p-6">
                    <div className="text-5xl mb-4">💰</div>
                    <div className="text-3xl font-bold text-primary mb-2">80%</div>
                    <p className="text-neutral-brown/70">{locale === 'de' ? 'Lokale Wirtschaft' : 'Local economy'}</p>
                  </div>
                  <div className="text-center p-6">
                    <div className="text-5xl mb-4">🤝</div>
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <p className="text-neutral-brown/70">{locale === 'de' ? 'Jahre Partnerschaften' : 'Years of partnerships'}</p>
                  </div>
                </div>
                <p className="text-neutral-brown/70 text-lg">
                  {locale === 'de'
                    ? 'Diese Seite wird in Kürze mit detaillierten Informationen zu unseren Nachhaltigkeitsinitiativen gefüllt. Erstellen Sie den Inhalt im Sanity CMS unter "Content Seiten".'
                    : 'This page will soon be filled with detailed information about our sustainability initiatives. Create the content in Sanity CMS under "Content Pages".'}
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return <ContentPageTemplate data={pageData} locale={locale} />;
}
