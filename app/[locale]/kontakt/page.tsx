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
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-accent-green overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center text-white max-w-3xl">
            <div className="inline-block bg-secondary/20 backdrop-blur-md border border-secondary/30 px-6 py-3 rounded-full font-bold text-secondary text-sm mb-6">
              📞 Kontakt
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-black mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl font-handwritten text-secondary">
              {t('subtitle')}
            </p>
          </div>
        </section>

        {/* Form + Contact */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
              
              {/* Form */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                  Nachricht senden
                </h2>
                <p className="text-neutral-brown/70 mb-8">
                  Wir antworten innerhalb von 24 Stunden.
                </p>
                <div className="bg-neutral-cream p-8 rounded-3xl">
                  <ContactForm />
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col gap-8">
                
                {/* Contact Icons Box */}
                <div className="bg-white border-2 border-neutral-cream rounded-3xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-primary text-center mb-2">
                    Du interessierst dich für eine Reise, oder hast Fragen?
                  </h3>
                  <p className="text-neutral-brown/70 text-center mb-8">
                    Schreib uns oder ruf direkt an!
                  </p>
                  
                  <div className="flex justify-center items-center gap-16">
                    {/* Phone */}
                    <a
                      href={CONTACT.phone.href}
                      className="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-accent-red to-primary rounded-full flex items-center justify-center shadow-xl group-hover:shadow-accent-red/50 transition-all">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-neutral-brown/60 mb-1">Telefon</div>
                        <div className="text-sm font-bold text-primary">{CONTACT.phone.display}</div>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${CONTACT.email.primary}`}
                      className="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent-red rounded-full flex items-center justify-center shadow-xl group-hover:shadow-secondary/50 transition-all">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-center max-w-[180px]">
                        <div className="text-xs text-neutral-brown/60 mb-1">Email</div>
                        <div className="text-xs font-bold text-primary break-all">{CONTACT.email.primary}</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Office Address Box */}
                <div className="bg-gradient-to-br from-primary to-accent-green text-white p-8 rounded-3xl shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-serif font-bold">Büro Düsseldorf</h3>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-white/70 mb-2">Adresse</div>
                      <div className="font-bold text-lg">
                        <p>{ADDRESS.street}</p>
                        <p>{ADDRESS.zip} {ADDRESS.city}</p>
                      </div>
                    </div>
                  </div>
                  <a
                    href={ADDRESS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-semibold transition w-full"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Route berechnen
                  </a>
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