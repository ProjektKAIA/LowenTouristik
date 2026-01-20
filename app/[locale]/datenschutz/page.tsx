// app/[locale]/datenschutz/page.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Metadata } from 'next';
import { CONTACT, ADDRESS, SITE_INFO, SEO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Datenschutz - Loewentouristik',
  description: 'Datenschutzerklärung der Loewentouristik. Informationen zur Verarbeitung Ihrer personenbezogenen Daten.',
  keywords: [...SEO.keywords, 'Datenschutz', 'DSGVO', 'Privatsphäre'],
  openGraph: {
    title: 'Datenschutz - Loewentouristik',
    description: 'Datenschutzerklärung und Informationen zur Datenverarbeitung',
    url: `${SITE_INFO.url}/datenschutz`,
    siteName: SITE_INFO.name,
    type: 'website',
  },
};

export default function DatenschutzPage() {
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
              Datenschutzerklärung
            </h1>
            <p className="text-lg text-white/80">
              Informationen zur Verarbeitung Ihrer Daten
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto prose prose-lg prose-neutral">

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                1. Datenschutz auf einen Blick
              </h2>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">
                Allgemeine Hinweise
              </h3>
              <p className="text-neutral-brown mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">
                Datenerfassung auf dieser Website
              </h3>
              <p className="text-neutral-brown mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="text-neutral-brown mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
                es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten
                werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
              <p className="text-neutral-brown mb-4">
                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              <p className="text-neutral-brown mb-4">
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
                Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
                für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die
                Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                2. Verantwortliche Stelle
              </h2>
              <p className="text-neutral-brown mb-4">
                <strong>Loewentouristik</strong><br />
                Agnes Kah<br />
                {ADDRESS.street}<br />
                {ADDRESS.zip} {ADDRESS.city}<br />
                {ADDRESS.country}
              </p>
              <p className="text-neutral-brown mb-4">
                Telefon: {CONTACT.phone.international}<br />
                E-Mail: <a href={`mailto:${CONTACT.email.primary}`} className="text-primary hover:underline">{CONTACT.email.primary}</a>
              </p>
              <p className="text-neutral-brown mb-4">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
                Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                3. Datenerfassung auf dieser Website
              </h2>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">
                Cookies
              </h3>
              <p className="text-neutral-brown mb-4">
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete
                und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für
                die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
                Endgerät gespeichert.
              </p>
              <p className="text-neutral-brown mb-4">
                Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies
                bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine
                automatische Löschung durch Ihren Webbrowser erfolgt.
              </p>
              <p className="text-neutral-brown mb-4">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert
                werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte
                Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim
                Schließen des Browsers aktivieren.
              </p>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">
                Kontaktformular
              </h3>
              <p className="text-neutral-brown mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
                wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-neutral-brown mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
                gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6
                Abs. 1 lit. a DSGVO).
              </p>
              <p className="text-neutral-brown mb-4">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
                Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
                Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">
                Anfrage per E-Mail, Telefon oder WhatsApp
              </h3>
              <p className="text-neutral-brown mb-4">
                Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage inklusive
                aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                4. Verarbeitung von Reisebuchungen
              </h2>
              <p className="text-neutral-brown mb-4">
                Bei der Buchung einer Reise verarbeiten wir folgende personenbezogene Daten:
              </p>
              <ul className="list-disc list-inside text-neutral-brown mb-4 space-y-1">
                <li>Name und Anschrift</li>
                <li>Geburtsdatum</li>
                <li>Reisepassnummer (für Visa-Anträge)</li>
                <li>E-Mail-Adresse und Telefonnummer</li>
                <li>Zahlungsinformationen</li>
                <li>Besondere Wünsche (z.B. Ernährung, Unverträglichkeiten)</li>
                <li>Notfallkontaktdaten</li>
              </ul>
              <p className="text-neutral-brown mb-4">
                Diese Daten werden zur Vertragserfüllung gemäß Art. 6 Abs. 1 lit. b DSGVO verarbeitet.
                Die Weitergabe an Dritte (z.B. Fluggesellschaften, Hotels, lokale Partner) erfolgt nur,
                soweit dies für die Durchführung der Reise erforderlich ist.
              </p>
              <p className="text-neutral-brown mb-4">
                Reiseunterlagen und Buchungsdaten werden nach Abschluss der Reise für die Dauer der
                gesetzlichen Aufbewahrungsfristen (in der Regel 10 Jahre) gespeichert.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                5. Ihre Rechte
              </h2>
              <p className="text-neutral-brown mb-4">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht:
              </p>
              <ul className="list-disc list-inside text-neutral-brown mb-4 space-y-1">
                <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung einzulegen (Art. 21 DSGVO)</li>
              </ul>
              <p className="text-neutral-brown mb-4">
                Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen
                das Datenschutzrecht verstößt, haben Sie das Recht, sich bei einer Aufsichtsbehörde
                zu beschweren.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                6. SSL-/TLS-Verschlüsselung
              </h2>
              <p className="text-neutral-brown mb-4">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass
                die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem
                Schloss-Symbol in Ihrer Browserzeile.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">
                7. Hosting
              </h2>
              <p className="text-neutral-brown mb-4">
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
                personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern
                des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen,
                Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und
                sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              <p className="text-neutral-brown mb-4">
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
                potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer
                sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen
                professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
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
