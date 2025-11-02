// app/[locale]/kontakt/page.tsx
import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ContactForm } from '@/components/forms/ContactForm';
import { CONTACT, ADDRESS, OPENING_HOURS } from '@/lib/constants';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <>
      <Header />
      <WhatsAppButton />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-primary mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-brown font-handwritten text-secondary">
              {t('subtitle')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="bg-gradient-to-br from-primary to-accent-green text-white p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-white/80 mb-1">{t('info.phone')}</div>
                    <a href={CONTACT.phone.href} className="text-2xl font-bold hover:text-secondary transition">
                      {CONTACT.phone.display}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-neutral-cream p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-brown/70 mb-1">{t('info.email')}</div>
                    <a
                      href={`mailto:${CONTACT.email.primary}`}
                      className="text-lg font-bold text-primary hover:text-primary/80 transition break-all"
                    >
                      {CONTACT.email.primary}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-neutral-cream p-8 rounded-3xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-brown/70 mb-2">{t('info.address')}</div>
                    <div className="text-neutral-brown font-medium">
                      <p>{ADDRESS.street}</p>
                      <p>{ADDRESS.zip} {ADDRESS.city}</p>
                      <p>{ADDRESS.country}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-neutral-cream p-8 rounded-3xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-brown/70 mb-2">{t('info.hours')}</div>
                    <div className="text-neutral-brown font-medium">
                      <p>{OPENING_HOURS.weekdays}</p>
                      <p>{OPENING_HOURS.saturday}</p>
                      <p>{OPENING_HOURS.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}