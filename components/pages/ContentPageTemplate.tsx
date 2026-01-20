// components/pages/ContentPageTemplate.tsx
'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface LocalizedString {
  de?: string;
  en?: string;
  fr?: string;
}

interface LocalizedText {
  de?: string;
  en?: string;
  fr?: string;
}

interface LocalizedRichText {
  de?: any[];
  en?: any[];
  fr?: any[];
}

interface ContentPageData {
  _id: string;
  title: string;
  slug: string;
  pageType: 'standard' | 'faq' | 'press';
  hero?: {
    label?: LocalizedString;
    title?: LocalizedString;
    subtitle?: LocalizedText;
    image?: {
      asset?: { _id: string; url: string };
      alt?: string;
    };
  };
  sections?: Array<{
    _type: string;
    _key: string;
    title?: LocalizedString;
    content?: LocalizedRichText;
    layout?: string;
    image?: { asset?: { url: string }; alt?: string };
    stats?: Array<{ value: string; label: LocalizedString; icon?: string }>;
    text?: LocalizedText;
    buttonText?: LocalizedString;
    buttonLink?: string;
  }>;
  faq?: Array<{
    _key: string;
    question?: LocalizedString;
    answer?: LocalizedText;
  }>;
}

interface ContentPageTemplateProps {
  data: ContentPageData;
  locale: string;
}

// FAQ Accordion Item Component
function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-neutral-cream last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-primary group-hover:text-accent-green transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="text-neutral-brown/80 leading-relaxed whitespace-pre-line">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function ContentPageTemplate({ data, locale }: ContentPageTemplateProps) {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  // Helper to get localized content
  const t = (obj: LocalizedString | LocalizedText | undefined): string => {
    if (!obj) return '';
    const loc = locale as 'de' | 'en' | 'fr';
    return obj[loc] || obj.de || '';
  };

  const getRichText = (obj: LocalizedRichText | undefined): any[] => {
    if (!obj) return [];
    const loc = locale as 'de' | 'en' | 'fr';
    return obj[loc] || obj.de || [];
  };

  return (
    <>
      <Header />
      <WhatsAppButton />

      <main className="min-h-screen">
        {/* Hero Section */}
        {data.hero && (
          <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-accent-green overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center text-white max-w-4xl">
              {data.hero.label && (
                <div className="inline-block bg-secondary/20 backdrop-blur-md border border-secondary/30 px-6 py-3 rounded-full font-bold text-secondary text-sm mb-6">
                  {t(data.hero.label)}
                </div>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-6">
                {t(data.hero.title)}
              </h1>
              {data.hero.subtitle && (
                <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                  {t(data.hero.subtitle)}
                </p>
              )}
            </div>

            {/* Hero Image */}
            {data.hero.image?.asset?.url && (
              <div className="container mx-auto px-6 mt-12">
                <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={data.hero.image.asset.url}
                    alt={data.hero.image.alt || ''}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </section>
        )}

        {/* Content Sections */}
        {data.sections && data.sections.length > 0 && (
          <div className="py-16 md:py-24">
            {data.sections.map((section, index) => (
              <section
                key={section._key}
                className={`py-12 ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-cream/30'}`}
              >
                <div className="container mx-auto px-6">
                  {/* Text Section */}
                  {section._type === 'textSection' && (
                    <div className={`max-w-4xl mx-auto ${
                      section.layout === 'imageLeft' || section.layout === 'imageRight'
                        ? 'grid md:grid-cols-2 gap-12 items-center'
                        : ''
                    }`}>
                      {section.layout === 'imageLeft' && section.image?.asset?.url && (
                        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                          <Image
                            src={section.image.asset.url}
                            alt={section.image.alt || ''}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        {section.title && (
                          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            {t(section.title)}
                          </h2>
                        )}
                        <div className="prose prose-lg prose-neutral max-w-none">
                          <PortableText value={getRichText(section.content)} />
                        </div>
                      </div>
                      {section.layout === 'imageRight' && section.image?.asset?.url && (
                        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                          <Image
                            src={section.image.asset.url}
                            alt={section.image.alt || ''}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Stats Section */}
                  {section._type === 'statsSection' && (
                    <div className="max-w-5xl mx-auto text-center">
                      {section.title && (
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12">
                          {t(section.title)}
                        </h2>
                      )}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {section.stats?.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center">
                            {stat.icon && (
                              <div className="text-4xl mb-2">{stat.icon}</div>
                            )}
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                              {stat.value}
                            </div>
                            <div className="text-neutral-brown/70">
                              {t(stat.label)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Section */}
                  {section._type === 'ctaSection' && (
                    <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary to-accent-green rounded-3xl p-12 text-white">
                      {section.title && (
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                          {t(section.title)}
                        </h2>
                      )}
                      {section.text && (
                        <p className="text-lg text-white/90 mb-8">
                          {t(section.text)}
                        </p>
                      )}
                      {section.buttonLink && section.buttonText && (
                        <Link
                          href={section.buttonLink}
                          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                        >
                          {t(section.buttonText)}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* FAQ Section */}
        {data.faq && data.faq.length > 0 && (
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
                  {locale === 'de' ? 'Häufige Fragen' : locale === 'fr' ? 'Questions fréquentes' : 'Frequently Asked Questions'}
                </h2>
                <div className="bg-neutral-cream/50 rounded-3xl p-8">
                  {data.faq.map((item) => (
                    <FAQItem
                      key={item._key}
                      question={t(item.question)}
                      answer={t(item.answer)}
                      isOpen={openFAQ === item._key}
                      onClick={() => setOpenFAQ(openFAQ === item._key ? null : item._key)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
