// app/[locale]/kontakt/page.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ContactForm } from '@/components/forms/ContactForm';
import { CONTACT, ADDRESS } from '@/lib/constants';
import { Metadata } from 'next';
import { SEO, SITE_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Kontakt - Loewentouristik',
  description: 'Kontaktiere uns für deine Traumreise nach Afrika. Persönliche Beratung durch Agnes Kah.',
  keywords: [...SEO.keywords, 'Kontakt', 'Beratung', 'Anfrage'],
  openGraph: {
    title: 'Kontakt - Loewentouristik',
    description: 'Kontaktiere uns für deine Traumreise nach Afrika',
    url: `${SITE_INFO.url}/kontakt`,
    siteName: SITE_INFO.name,
    type: 'website',
  },
};

export default function ContactPage() {
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
              Lass uns reden
            </h1>
            <p className="text-xl md:text-2xl font-handwritten text-secondary">
              Deine Traumreise beginnt mit einem Gespräch
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
                  
                  <div className="flex flex-wrap justify-center gap-6">
                    {/* Phone */}
                    <a
                      href={CONTACT.phone.href}
                      className="group flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-neutral-cream transition-all"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent-green rounded-full flex items-center justify-center shadow-xl group-hover:shadow-primary/50 transition-all">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-neutral-brown/60 mb-1">Telefon</div>
                        <div className="text-sm font-bold text-primary">{CONTACT.phone.display}</div>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={CONTACT.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-neutral-cream transition-all"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-green-500/50 transition-all">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-neutral-brown/60 mb-1">WhatsApp</div>
                        <div className="text-sm font-bold text-primary">Chat starten</div>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${CONTACT.email.primary}`}
                      className="group flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-neutral-cream transition-all"
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
                      <p className="font-semibold">{ADDRESS.street}</p>
                      <p className="text-white/80">{ADDRESS.zip} {ADDRESS.city}</p>
                      <p className="text-white/80">{ADDRESS.country}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Öffnungszeiten</p>
                      <p className="text-white/80">Mo-Fr: 9:00-18:00 Uhr</p>
                      <p className="text-white/80">Sa: Nach Vereinbarung</p>
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