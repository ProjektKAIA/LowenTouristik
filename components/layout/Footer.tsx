// components/layout/Footer.tsx
'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Text, Handwritten } from '@/components/ui/Typography';
import { Input } from '@/components/ui/Input';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Send,
  Heart,
} from 'lucide-react';

const footerLinks = {
  reisen: {
    title: 'Reisen',
    links: [
      { label: 'Alle Reisen', href: '/reisen' },
      { label: 'Kamerun', href: '/reisen/kamerun' },
      { label: 'Tansania', href: '/reisen/tansania' },
      { label: 'Äthiopien', href: '/reisen/aethiopien' },
      { label: 'Individualreisen', href: '/reisen/individuell' },
    ],
  },
  unternehmen: {
    title: 'Unternehmen',
    links: [
      { label: 'Über uns', href: '/ueber-uns' },
      { label: 'Nachhaltigkeit', href: '/nachhaltigkeit' },
      { label: 'Reisephilosophie', href: '/philosophie' },
      { label: 'Team', href: '/team' },
      { label: 'Karriere', href: '/karriere' },
    ],
  },
  service: {
    title: 'Service',
    links: [
      { label: 'Kontakt', href: '/kontakt' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Reisebedingungen', href: '/agb' },
      { label: 'Sicherheit', href: '/sicherheit' },
      { label: 'Versicherungen', href: '/versicherungen' },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <Container>
          <div className="py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Handwritten size="md" className="text-secondary mb-3">
                  Bleib auf dem Laufenden
                </Handwritten>
                <Text size="lg" weight="semibold" color="white" className="mb-2">
                  Erhalte inspirierende Reisegeschichten & exklusive Angebote
                </Text>
                <Text size="md" color="white" className="opacity-80">
                  Kein Spam. Nur echte Afrika-Insights von Agnes persönlich. Jederzeit abbestellbar.
                </Text>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Deine E-Mail-Adresse"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                  <Button
                    variant="secondary"
                    size="md"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Anmelden
                  </Button>
                </form>
                <Text size="sm" color="white" className="opacity-60 mt-3">
                  Mit der Anmeldung akzeptierst du unsere{' '}
                  <a href="/datenschutz" className="underline hover:text-secondary">
                    Datenschutzerklärung
                  </a>
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <a href="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
                  <span className="text-2xl">🦁</span>
                </div>
                <div>
                  <Text size="lg" weight="bold" color="white">
                    Loewentouristik
                  </Text>
                  <Text size="sm" color="white" className="opacity-80">
                    Authentisch. Nachhaltig.
                  </Text>
                </div>
              </a>

              <Text size="md" color="white" className="opacity-80 mb-6">
                Wir bringen dich zu den schönsten Orten Afrikas. Mit Respekt, Leidenschaft und
                dem Willen, etwas zurückzugeben.
              </Text>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+49123456789"
                  className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <Text size="sm" color="white">
                    +49 123 456 789
                  </Text>
                </a>
                <a
                  href="mailto:info@loewentouristik.de"
                  className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <Text size="sm" color="white">
                    info@loewentouristik.de
                  </Text>
                </a>
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <Text size="sm" color="white">
                    Musterstraße 123<br />
                    12345 Musterstadt<br />
                    Deutschland
                  </Text>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <Text size="md" weight="semibold" color="white" className="mb-4">
                  {section.title}
                </Text>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/80 hover:text-secondary transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Media */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              <Text size="sm" color="white" className="opacity-80">
                Folge uns:
              </Text>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-accent-red fill-accent-red" />
                <Text size="sm" color="white">
                  TourCert zertifiziert
                </Text>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="text-accent-green">🌱</span>
                <Text size="sm" color="white">
                  100% CO₂-kompensiert
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <Text size="sm" color="white" className="opacity-60">
              © {new Date().getFullYear()} Loewentouristik. Alle Rechte vorbehalten.
            </Text>
            <div className="flex gap-6">
              <a
                href="/impressum"
                className="text-sm text-white/60 hover:text-secondary transition-colors"
              >
                Impressum
              </a>
              <a
                href="/datenschutz"
                className="text-sm text-white/60 hover:text-secondary transition-colors"
              >
                Datenschutz
              </a>
              <a
                href="/agb"
                className="text-sm text-white/60 hover:text-secondary transition-colors"
              >
                AGB
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}