// app/[locale]/agb/page.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Metadata } from 'next';
import { CONTACT, ADDRESS, SITE_INFO, SEO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'AGB & Reisebedingungen - Loewentouristik',
  description: 'Allgemeine Geschäftsbedingungen und Reisebedingungen der Loewentouristik für Afrika-Reisen.',
  keywords: [...SEO.keywords, 'AGB', 'Reisebedingungen', 'Stornierung'],
  openGraph: {
    title: 'AGB & Reisebedingungen - Loewentouristik',
    description: 'Allgemeine Geschäftsbedingungen und Reisebedingungen',
    url: `${SITE_INFO.url}/agb`,
    siteName: SITE_INFO.name,
    type: 'website',
  },
};

export default function AGBPage() {
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
              AGB & Reisebedingungen
            </h1>
            <p className="text-lg text-white/80">
              Allgemeine Geschäftsbedingungen für Pauschalreisen
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto prose prose-lg prose-neutral">

              <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6 mb-8">
                <p className="text-neutral-brown font-medium mb-0">
                  Diese Reisebedingungen gelten für alle über Loewentouristik gebuchten Pauschalreisen
                  nach dem Reiserecht gemäß §§ 651a ff. BGB.
                </p>
              </div>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                1. Reiseveranstalter
              </h2>
              <p className="text-neutral-brown mb-4">
                <strong>Loewentouristik</strong><br />
                Agnes Kah<br />
                {ADDRESS.street}<br />
                {ADDRESS.zip} {ADDRESS.city}<br />
                Telefon: {CONTACT.phone.international}<br />
                E-Mail: {CONTACT.email.primary}
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                2. Buchung und Vertragsschluss
              </h2>
              <p className="text-neutral-brown mb-4">
                Mit der Buchung bietet der Reisende den verbindlichen Abschluss eines Reisevertrages an.
                Die Buchung kann schriftlich, per E-Mail, telefonisch oder über unser Kontaktformular
                erfolgen. Der Vertrag kommt mit Zugang der Buchungsbestätigung (Reisebestätigung) zustande.
              </p>
              <p className="text-neutral-brown mb-4">
                Der Buchende ist für alle Vertragspartner, für die er bucht, verantwortlich, sofern er
                eine entsprechende Verpflichtung durch ausdrückliche und gesonderte Erklärung übernommen hat.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                3. Zahlung
              </h2>
              <p className="text-neutral-brown mb-4">
                Nach Vertragsabschluss wird eine Anzahlung in Höhe von <strong>20% des Reisepreises</strong> fällig.
                Die Restzahlung ist <strong>30 Tage vor Reisebeginn</strong> fällig, sofern die Reise nicht mehr
                aus einem in der Person des Reisenden liegenden Grund abgesagt werden kann.
              </p>
              <p className="text-neutral-brown mb-4">
                Bei Buchungen weniger als 30 Tage vor Reisebeginn ist der gesamte Reisepreis sofort fällig.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                4. Leistungen und Preise
              </h2>
              <p className="text-neutral-brown mb-4">
                Der Umfang der vertraglichen Leistungen ergibt sich aus der Reiseausschreibung, den Angaben
                in der Buchungsbestätigung sowie den vorliegenden Reisebedingungen. Änderungen oder
                Abweichungen einzelner Reiseleistungen von dem vereinbarten Inhalt des Reisevertrages sind
                nur gestattet, wenn sie unerheblich sind und den Gesamtzuschnitt der Reise nicht beeinträchtigen.
              </p>
              <p className="text-neutral-brown mb-4">
                Der Reisepreis beinhaltet alle in der Reisebeschreibung aufgeführten Leistungen.
                Nicht im Reisepreis enthalten sind (sofern nicht ausdrücklich angegeben):
              </p>
              <ul className="list-disc list-inside text-neutral-brown mb-4 space-y-1">
                <li>Visagebühren</li>
                <li>Reiseversicherungen</li>
                <li>Trinkgelder</li>
                <li>Persönliche Ausgaben</li>
                <li>Optionale Ausflüge</li>
                <li>Internationale Flüge (sofern nicht explizit aufgeführt)</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                5. Rücktritt durch den Reisenden (Stornierung)
              </h2>
              <p className="text-neutral-brown mb-4">
                Der Reisende kann jederzeit vor Reisebeginn vom Reisevertrag zurücktreten. Es gelten
                folgende Stornogebühren (in Prozent des Reisepreises):
              </p>
              <div className="bg-neutral-cream rounded-xl p-6 mb-4">
                <ul className="text-neutral-brown space-y-2">
                  <li><strong>Bis 60 Tage vor Reisebeginn:</strong> 20% (Anzahlung)</li>
                  <li><strong>59-30 Tage vor Reisebeginn:</strong> 35%</li>
                  <li><strong>29-15 Tage vor Reisebeginn:</strong> 50%</li>
                  <li><strong>14-7 Tage vor Reisebeginn:</strong> 75%</li>
                  <li><strong>Ab 6 Tage vor Reisebeginn oder Nichtantritt:</strong> 90%</li>
                </ul>
              </div>
              <p className="text-neutral-brown mb-4">
                Wir empfehlen dringend den Abschluss einer Reiserücktrittsversicherung.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                6. Umbuchung
              </h2>
              <p className="text-neutral-brown mb-4">
                Ein Anspruch auf Umbuchung (Änderung des Reisetermins, Reiseziels, Unterkunft etc.) besteht
                nicht. Umbuchungen werden wie ein Rücktritt behandelt, verbunden mit gleichzeitiger Neubuchung.
                Bis 60 Tage vor Reisebeginn kann eine Umbuchungsgebühr von €50 pro Person erhoben werden,
                sofern die Umbuchung durchführbar ist.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                7. Rücktritt und Kündigung durch den Veranstalter
              </h2>
              <p className="text-neutral-brown mb-4">
                <strong>Mindestteilnehmerzahl:</strong> Unsere Gruppenreisen haben eine Mindestteilnehmerzahl
                von 4 Personen und eine Höchstteilnehmerzahl von 12 Personen. Wird die Mindestteilnehmerzahl
                nicht erreicht, kann der Veranstalter bis 30 Tage vor Reisebeginn vom Vertrag zurücktreten.
                Der Reisende erhält in diesem Fall den vollen Reisepreis zurück.
              </p>
              <p className="text-neutral-brown mb-4">
                <strong>Höhere Gewalt:</strong> Der Veranstalter kann vor oder nach Reisebeginn kündigen, wenn
                die Reise infolge bei Vertragsschluss nicht voraussehbarer höherer Gewalt erheblich erschwert,
                gefährdet oder beeinträchtigt wird.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                8. Pflichten des Reisenden
              </h2>
              <p className="text-neutral-brown mb-4">
                Der Reisende ist verpflichtet:
              </p>
              <ul className="list-disc list-inside text-neutral-brown mb-4 space-y-1">
                <li>Gültige Reisedokumente (Reisepass mit mind. 6 Monaten Gültigkeit) mitzuführen</li>
                <li>Visa rechtzeitig zu beantragen (Unterstützung bieten wir gerne an)</li>
                <li>Empfohlene Impfungen vornehmen zu lassen</li>
                <li>Sich über die Einreisebestimmungen des Ziellandes zu informieren</li>
                <li>Mängel unverzüglich anzuzeigen</li>
                <li>Anweisungen der Reiseleitung Folge zu leisten</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                9. Mängelanzeige und Abhilfe
              </h2>
              <p className="text-neutral-brown mb-4">
                Wenn die Reise nicht vertragsgemäß erbracht wird, kann der Reisende Abhilfe verlangen.
                Der Reisende ist verpflichtet, Mängel unverzüglich der örtlichen Reiseleitung oder dem
                Veranstalter anzuzeigen. Unterlässt er dies schuldhaft, so kann er keine Ansprüche geltend machen.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                10. Haftung und Haftungsbeschränkung
              </h2>
              <p className="text-neutral-brown mb-4">
                Die vertragliche Haftung des Veranstalters für Schäden, die nicht Körperschäden sind, ist
                auf den dreifachen Reisepreis beschränkt, soweit ein Schaden des Reisenden weder vorsätzlich
                noch grob fahrlässig herbeigeführt wird.
              </p>
              <p className="text-neutral-brown mb-4">
                Für alle Schadensersatzansprüche aus unerlaubter Handlung haftet der Veranstalter, soweit
                er nicht auf Vorsatz oder grober Fahrlässigkeit beruht, auf den dreifachen Reisepreis beschränkt.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                11. Reiseversicherungen
              </h2>
              <p className="text-neutral-brown mb-4">
                Im Reisepreis sind keine Versicherungen enthalten. Wir empfehlen dringend den Abschluss folgender Versicherungen:
              </p>
              <ul className="list-disc list-inside text-neutral-brown mb-4 space-y-1">
                <li>Reiserücktrittsversicherung</li>
                <li>Auslandskrankenversicherung mit Rücktransport</li>
                <li>Reisegepäckversicherung</li>
                <li>Reiseabbruchversicherung</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                12. Insolvenzabsicherung
              </h2>
              <p className="text-neutral-brown mb-4">
                Loewentouristik ist gemäß den gesetzlichen Vorschriften gegen Insolvenz abgesichert.
                Ein Sicherungsschein wird mit der Buchungsbestätigung ausgehändigt.
              </p>
              <p className="text-neutral-brown mb-4">
                [Versicherungsdetails bitte ergänzen]
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                13. Pass-, Visa- und Gesundheitsvorschriften
              </h2>
              <p className="text-neutral-brown mb-4">
                Für unsere Afrika-Reisen gelten besondere Einreisebestimmungen. Der Reisende ist selbst
                verantwortlich für die Beschaffung gültiger Reisedokumente und eventueller Visa.
                Wir informieren über die zum Zeitpunkt der Buchung bekannten Bestimmungen.
              </p>
              <p className="text-neutral-brown mb-4">
                Bitte beachten Sie: Für die meisten afrikanischen Länder werden Impfungen empfohlen
                oder sind vorgeschrieben (z.B. Gelbfieberimpfung). Informieren Sie sich rechtzeitig
                bei einem Tropeninstitut.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                14. Rechtswahl und Gerichtsstand
              </h2>
              <p className="text-neutral-brown mb-4">
                Es gilt das Recht der Bundesrepublik Deutschland. Für Klagen des Reisenden gegen den
                Veranstalter ist der Sitz des Veranstalters Gerichtsstand. Für Klagen des Veranstalters
                gegen den Reisenden ist der Wohnsitz des Reisenden maßgebend.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                15. Besondere Hinweise für Afrika-Reisen
              </h2>
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-4">
                <p className="text-neutral-brown mb-3">
                  Afrika-Reisen erfordern ein gewisses Maß an Flexibilität, Abenteuerlust und Toleranz.
                  Die Infrastruktur entspricht nicht europäischen Standards. Es kann zu unvorhergesehenen
                  Änderungen im Reiseablauf kommen durch:
                </p>
                <ul className="list-disc list-inside text-neutral-brown space-y-1">
                  <li>Wetterbedingungen (Regenzeit, unpassierbare Straßen)</li>
                  <li>Politische Situationen</li>
                  <li>Technische Probleme (Fahrzeuge, Stromausfälle)</li>
                  <li>Lokale Gegebenheiten</li>
                </ul>
                <p className="text-neutral-brown mt-3">
                  Diese Umstände gehören zum Charakter einer authentischen Afrika-Reise und begründen
                  keinen Reisemangel.
                </p>
              </div>

              <div className="mt-12 p-6 bg-neutral-cream rounded-2xl">
                <p className="text-sm text-neutral-brown/70">
                  Stand: Januar 2025<br />
                  Diese AGB entsprechen den gesetzlichen Vorgaben für Pauschalreisen nach EU-Recht.
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
