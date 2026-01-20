// app/[locale]/impressum/page.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Metadata } from 'next';
import { CONTACT, ADDRESS, SITE_INFO, SEO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Impressum - Loewentouristik',
  description: 'Impressum und rechtliche Informationen zu Loewentouristik.',
  keywords: [...SEO.keywords, 'Impressum', 'Rechtliches'],
  openGraph: {
    title: 'Impressum - Loewentouristik',
    description: 'Impressum und rechtliche Informationen',
    url: `${SITE_INFO.url}/impressum`,
    siteName: SITE_INFO.name,
    type: 'website',
  },
};

export default function ImpressumPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary to-accent-green overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-black mb-4">
              Impressum
            </h1>
            <p className="text-lg text-white/80">
              Angaben gemäß § 5 TMG
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto prose prose-lg prose-neutral">

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-neutral-brown mb-6">
                <strong>Loewentouristik</strong><br />
                Agnes Kah<br />
                {ADDRESS.street}<br />
                {ADDRESS.zip} {ADDRESS.city}<br />
                {ADDRESS.country}
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                Kontakt
              </h2>
              <p className="text-neutral-brown mb-6">
                Telefon: {CONTACT.phone.international}<br />
                E-Mail: <a href={`mailto:${CONTACT.email.primary}`} className="text-primary hover:underline">{CONTACT.email.primary}</a>
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                Umsatzsteuer-ID
              </h2>
              <p className="text-neutral-brown mb-6">
                Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
                [USt-IdNr. bitte ergänzen]
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <p className="text-neutral-brown mb-6">
                Reiseveranstalter (Deutschland)
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                Insolvenzabsicherung
              </h2>
              <p className="text-neutral-brown mb-6">
                Die Insolvenzabsicherung für Pauschalreisen erfolgt durch:<br />
                [Versicherung/Sicherungsschein bitte ergänzen]
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                EU-Streitschlichtung
              </h2>
              <p className="text-neutral-brown mb-6">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p className="text-neutral-brown mb-6">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                Haftung für Inhalte
              </h2>
              <p className="text-neutral-brown mb-6">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
              <p className="text-neutral-brown mb-6">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                Haftung für Links
              </h2>
              <p className="text-neutral-brown mb-6">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
                Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="text-neutral-brown mb-6">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                Urheberrecht
              </h2>
              <p className="text-neutral-brown mb-6">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-neutral-brown mb-6">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um
                einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                Inhalte umgehend entfernen.
              </p>

              <div className="mt-12 p-6 bg-neutral-cream rounded-2xl">
                <p className="text-sm text-neutral-brown/70">
                  Stand: Januar 2025
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
