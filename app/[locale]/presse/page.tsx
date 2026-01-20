// app/[locale]/presse/page.tsx
import { Metadata } from 'next';
import { client } from '@/lib/sanity/client';
import { CONTENT_PAGE_BY_SLUG_QUERY } from '@/lib/queries/contentPage.queries';
import { ContentPageTemplate } from '@/components/pages/ContentPageTemplate';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SEO, SITE_INFO, CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Presse - Loewentouristik',
  description: 'Pressematerial und Medieninformationen zu Loewentouristik. Pressekontakt, Bildmaterial und aktuelle Pressemitteilungen.',
  keywords: [...SEO.keywords, 'Presse', 'Medien', 'Pressekontakt', 'Pressemitteilung'],
  openGraph: {
    title: 'Presse - Loewentouristik',
    description: 'Pressematerial und Medieninformationen',
    url: `${SITE_INFO.url}/presse`,
    siteName: SITE_INFO.name,
    type: 'website',
  },
};

async function getPageData() {
  try {
    const data = await client.fetch(CONTENT_PAGE_BY_SLUG_QUERY, { slug: 'presse' });
    return data;
  } catch (error) {
    console.error('Error fetching press page:', error);
    return null;
  }
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PressePage({ params }: PageProps) {
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
                📰 {locale === 'de' ? 'Medien' : 'Media'}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-6">
                {locale === 'de' ? 'Presse' : 'Press'}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                {locale === 'de'
                  ? 'Pressematerial und Medieninformationen'
                  : 'Press materials and media information'}
              </p>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                {/* Press Contact */}
                <div className="bg-neutral-cream/50 rounded-3xl p-8 mb-12">
                  <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                    {locale === 'de' ? 'Pressekontakt' : 'Press Contact'}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-primary">Agnes Kah</p>
                      <p className="text-neutral-brown/70">{locale === 'de' ? 'Gründerin & Inhaberin' : 'Founder & Owner'}</p>
                    </div>
                    <div>
                      <p className="text-neutral-brown/70">
                        E-Mail: <a href={`mailto:${CONTACT.email.primary}`} className="text-primary hover:underline">{CONTACT.email.primary}</a>
                      </p>
                      <p className="text-neutral-brown/70">
                        {locale === 'de' ? 'Telefon' : 'Phone'}: <a href={CONTACT.phone.href} className="text-primary hover:underline">{CONTACT.phone.display}</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <p className="text-neutral-brown/70 text-lg">
                    {locale === 'de'
                      ? 'Pressemitteilungen und Bildmaterial werden in Kürze hier verfügbar sein. Erstellen Sie den Inhalt im Sanity CMS unter "Content Seiten".'
                      : 'Press releases and image materials will be available here soon. Create the content in Sanity CMS under "Content Pages".'}
                  </p>
                </div>
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
