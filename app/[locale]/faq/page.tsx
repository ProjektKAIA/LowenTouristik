// app/[locale]/faq/page.tsx
import { Metadata } from 'next';
import { client } from '@/lib/sanity/client';
import { CONTENT_PAGE_BY_SLUG_QUERY } from '@/lib/queries/contentPage.queries';
import { ContentPageTemplate } from '@/components/pages/ContentPageTemplate';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SEO, SITE_INFO } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ - Häufige Fragen | Loewentouristik',
  description: 'Antworten auf häufige Fragen zu Afrika-Reisen mit Loewentouristik: Buchung, Visa, Impfungen, Sicherheit und mehr.',
  keywords: [...SEO.keywords, 'FAQ', 'Häufige Fragen', 'Afrika Reisen FAQ', 'Visa Afrika', 'Impfungen Afrika'],
  openGraph: {
    title: 'FAQ - Häufige Fragen | Loewentouristik',
    description: 'Antworten auf Ihre Fragen zu Afrika-Reisen',
    url: `${SITE_INFO.url}/faq`,
    siteName: SITE_INFO.name,
    type: 'website',
  },
};

async function getPageData() {
  try {
    const data = await client.fetch(CONTENT_PAGE_BY_SLUG_QUERY, { slug: 'faq' });
    return data;
  } catch (error) {
    console.error('Error fetching FAQ page:', error);
    return null;
  }
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

// Default FAQ items (Fallback)
const defaultFAQs = {
  de: [
    {
      question: 'Wie groß sind die Reisegruppen?',
      answer: 'Unsere Gruppen haben maximal 12 Teilnehmer. Das ist groß genug für Gemeinschaft und klein genug für echte Begegnungen.',
    },
    {
      question: 'Welche Impfungen brauche ich?',
      answer: 'Die Impfempfehlungen variieren je nach Reiseziel. Gelbfieber ist für viele afrikanische Länder vorgeschrieben. Wir empfehlen eine Beratung beim Tropeninstitut mindestens 6 Wochen vor Abreise.',
    },
    {
      question: 'Brauche ich ein Visum?',
      answer: 'Für die meisten afrikanischen Länder benötigen deutsche Staatsbürger ein Visum. Wir unterstützen Sie bei der Beantragung und geben alle nötigen Informationen.',
    },
    {
      question: 'Wie sicher sind die Reisen?',
      answer: 'Sicherheit hat oberste Priorität. Wir reisen nur in Regionen, die wir selbst kennen und als sicher einstufen. Agnes hat jedes Ziel mindestens 10 Mal persönlich bereist.',
    },
    {
      question: 'Was ist im Reisepreis enthalten?',
      answer: 'Der Reisepreis beinhaltet Unterkünfte, die meisten Mahlzeiten, alle Transfers vor Ort, Eintritte und die deutschsprachige Reiseleitung. Nicht enthalten sind internationale Flüge, Visa und persönliche Ausgaben.',
    },
    {
      question: 'Kann ich auch alleine reisen?',
      answer: 'Ja! Viele unserer Teilnehmer reisen alleine und schließen in der kleinen Gruppe schnell Freundschaften. Es gibt keinen Einzelzimmerzuschlag-Zwang.',
    },
  ],
  en: [
    {
      question: 'How large are the travel groups?',
      answer: 'Our groups have a maximum of 12 participants. Large enough for community, small enough for authentic encounters.',
    },
    {
      question: 'What vaccinations do I need?',
      answer: 'Vaccination requirements vary by destination. Yellow fever is mandatory for many African countries. We recommend consulting a tropical medicine center at least 6 weeks before departure.',
    },
    {
      question: 'Do I need a visa?',
      answer: 'Most African countries require a visa for German citizens. We support you with the application and provide all necessary information.',
    },
    {
      question: 'How safe are the trips?',
      answer: 'Safety is our top priority. We only travel to regions we know personally and consider safe. Agnes has personally visited each destination at least 10 times.',
    },
  ],
};

export default async function FAQPage({ params }: PageProps) {
  const { locale } = await params;
  const pageData = await getPageData();

  // Fallback wenn keine Sanity-Daten vorhanden
  if (!pageData) {
    const faqs = locale === 'de' ? defaultFAQs.de : defaultFAQs.en;

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
                ❓ FAQ
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-6">
                {locale === 'de' ? 'Häufige Fragen' : 'Frequently Asked Questions'}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                {locale === 'de'
                  ? 'Antworten auf die wichtigsten Fragen zu unseren Reisen'
                  : 'Answers to the most important questions about our trips'}
              </p>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <div className="bg-neutral-cream/50 rounded-3xl p-8">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group border-b border-neutral-cream last:border-b-0">
                      <summary className="py-5 cursor-pointer list-none flex items-center justify-between">
                        <span className="text-lg font-semibold text-primary group-hover:text-accent-green transition-colors pr-4">
                          {faq.question}
                        </span>
                        <span className="text-primary transform group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>
                      <p className="pb-5 text-neutral-brown/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-12 text-center bg-gradient-to-br from-primary to-accent-green rounded-3xl p-10 text-white">
                  <h2 className="text-2xl font-serif font-bold mb-4">
                    {locale === 'de' ? 'Noch Fragen?' : 'Still have questions?'}
                  </h2>
                  <p className="text-white/90 mb-6">
                    {locale === 'de'
                      ? 'Agnes berät Sie persönlich und beantwortet alle Ihre Fragen.'
                      : 'Agnes will personally advise you and answer all your questions.'}
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-full font-bold transition-all"
                  >
                    {locale === 'de' ? 'Kontakt aufnehmen' : 'Get in touch'}
                  </Link>
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
