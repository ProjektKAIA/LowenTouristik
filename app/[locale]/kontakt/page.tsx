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
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary to-accent-green">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="inline-block bg-secondary/20 backdrop-blur-md border border-secondary/30 px-6 py-3 rounded-full font-bold text-secondary text-sm mb-6">
                📞 Wir sind für Sie da
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-6">
                {t('title')}
              </h1>
              <p className="text-xl md:text-2xl font-handwritten text-secondary mb-8">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods - Quick Access */}
        <section className="py-16 bg-neutral-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
              {/* Phone */}
              <a
                href={CONTACT.phone.href}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-red to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-sm text-neutral-brown/70 mb-2 font-semibold">{t('info.phone')}</div>
                <div className="text-2xl font-bold text-primary mb-1">{CONTACT.phone.display}</div>
                <div className="text-sm text-accent-green font-medium">Sofort erreichbar →</div>
              </a>

              {/* WhatsApp */}
              <a
                href={CONTACT.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-green to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div className="text-sm text-neutral-brown/70 mb-2 font-semibold">WhatsApp</div>
                <div className="text-2xl font-bold text-primary mb-1">{CONTACT.phone.display}</div>
                <div className="text-sm text-accent-green font-medium">Chat starten →</div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT.email.primary}`}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent-red rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-sm text-neutral-brown/70 mb-2 font-semibold">{t('info.email')}</div>
                <div className="text-lg font-bold text-primary mb-1 break-all">{CONTACT.email.primary}</div>
                <div className="text-sm text-accent-green font-medium">Email schreiben →</div>
              </a>
            </div>
          </div>
        </section>

        {/* Main Content - Form + Info */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                  Schreiben Sie uns
                </h2>
                <p className="text-neutral-brown/70 mb-8">
                  Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <div className="bg-neutral-cream p-8 rounded-3xl">
                  <ContactForm />
                </div>
              </div>

              {/* Office Info */}
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">
                  Unser Büro
                </h2>

                {/* Address Card */}
                <div className="bg-gradient-to-br from-primary to-accent-green text-white p-8 rounded-3xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-white/70 mb-2">{t('info.address')}</div>
                      <div className="font-bold text-lg">
                        <p>{ADDRESS.street}</p>
                        <p>{ADDRESS.zip} {ADDRESS.city}</p>
                        <p>{ADDRESS.country}</p>
                      </div>
                    </div>
                  </div>
                  <a
                    href={ADDRESS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-semibold transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Route berechnen
                  </a>
                </div>

                {/* Opening Hours */}
                <div className="bg-neutral-cream p-8 rounded-3xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary">{t('info.hours')}</h3>
                  </div>
                  <div className="space-y-2 text-neutral-brown">
                    <p className="font-medium">{OPENING_HOURS.weekdays}</p>
                    <p>{OPENING_HOURS.saturday}</p>
                    <p className="text-neutral-brown/60">{OPENING_HOURS.sunday}</p>
                  </div>
                </div>

                {/* Fun Fact */}
                <div className="bg-secondary/10 border-2 border-secondary/30 p-6 rounded-2xl">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <p className="text-sm text-neutral-brown">
                        <strong>Persönliche Beratung:</strong> Agnes nimmt sich Zeit für Sie. Jede Anfrage wird individuell beantwortet – keine Standard-Antworten!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}