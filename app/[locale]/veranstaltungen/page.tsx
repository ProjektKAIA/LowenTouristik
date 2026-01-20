// app/[locale]/veranstaltungen/page.tsx
import { Metadata } from 'next';
import { client } from '@/lib/sanity/client';
import { ALL_EVENTS_QUERY } from '@/lib/queries/event.queries';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { SEO, SITE_INFO, CONTACT } from '@/lib/constants';
import Image from 'next/image';
import { Calendar, MapPin, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Veranstaltungen - Loewentouristik',
  description: 'Reise-Infoabende, Vorträge und Events von Loewentouristik. Lernen Sie uns kennen und erfahren Sie mehr über unsere Afrika-Reisen.',
  keywords: [...SEO.keywords, 'Veranstaltungen', 'Infoabend', 'Reisevorträge', 'Events'],
  openGraph: {
    title: 'Veranstaltungen - Loewentouristik',
    description: 'Reise-Infoabende und Vorträge',
    url: `${SITE_INFO.url}/veranstaltungen`,
    siteName: SITE_INFO.name,
    type: 'website',
  },
};

interface Event {
  _id: string;
  title: { de?: string; en?: string; fr?: string };
  slug: string;
  eventType: string;
  description: { de?: string; en?: string; fr?: string };
  image?: {
    asset?: { url: string; metadata?: { lqip?: string } };
    alt?: string;
  };
  startDate: string;
  endDate?: string;
  isOnline: boolean;
  location?: {
    name?: string;
    city?: string;
  };
  isCancelled?: boolean;
  price?: {
    amount?: number;
    note?: string;
  };
}

async function getEvents(): Promise<Event[]> {
  try {
    const events = await client.fetch(ALL_EVENTS_QUERY);
    return events || [];
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

const eventTypeLabels: Record<string, { de: string; en: string; icon: string }> = {
  infoabend: { de: 'Reise-Infoabend', en: 'Travel Info Evening', icon: '🎤' },
  vortrag: { de: 'Vortrag', en: 'Lecture', icon: '📚' },
  workshop: { de: 'Workshop', en: 'Workshop', icon: '🛠️' },
  messe: { de: 'Messe', en: 'Trade Fair', icon: '🏛️' },
  online: { de: 'Online-Event', en: 'Online Event', icon: '💻' },
  stammtisch: { de: 'Stammtisch', en: 'Regular Meetup', icon: '🍺' },
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function VeranstaltungenPage({ params }: PageProps) {
  const { locale } = await params;
  const events = await getEvents();

  const t = (obj: { de?: string; en?: string; fr?: string } | undefined): string => {
    if (!obj) return '';
    const loc = locale as 'de' | 'en' | 'fr';
    return obj[loc] || obj.de || '';
  };

  const getEventTypeLabel = (type: string) => {
    const labels = eventTypeLabels[type];
    return labels ? (locale === 'de' ? labels.de : labels.en) : type;
  };

  const getEventTypeIcon = (type: string) => {
    return eventTypeLabels[type]?.icon || '📅';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString(locale === 'de' ? 'de-DE' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const now = new Date();
  const upcomingEvents = events.filter(e => new Date(e.startDate) >= now && !e.isCancelled);
  const pastEvents = events.filter(e => new Date(e.startDate) < now || e.isCancelled);

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

          <div className="container mx-auto px-6 relative z-10 text-center text-white max-w-4xl">
            <div className="inline-block bg-secondary/20 backdrop-blur-md border border-secondary/30 px-6 py-3 rounded-full font-bold text-secondary text-sm mb-6">
              📅 Events
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-6">
              {locale === 'de' ? 'Veranstaltungen' : 'Events'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              {locale === 'de'
                ? 'Infoabende, Vorträge und persönliche Begegnungen'
                : 'Info evenings, lectures and personal meetings'}
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">
              {locale === 'de' ? 'Kommende Veranstaltungen' : 'Upcoming Events'}
            </h2>

            {upcomingEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                  <div
                    key={event._id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-neutral-cream hover:shadow-xl transition-shadow"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent-green/20">
                      {event.image?.asset?.url ? (
                        <Image
                          src={event.image.asset.url}
                          alt={event.image.alt || t(event.title)}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-6xl">{getEventTypeIcon(event.eventType)}</span>
                        </div>
                      )}
                      {/* Type Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold">
                          {getEventTypeLabel(event.eventType)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-bold text-primary mb-3">
                        {t(event.title)}
                      </h3>

                      {/* Date & Time */}
                      <div className="flex items-center gap-2 text-neutral-brown/70 mb-2">
                        <Calendar size={16} />
                        <span>{formatDate(event.startDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-brown/70 mb-3">
                        <span className="w-4" />
                        <span>{formatTime(event.startDate)} Uhr</span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-neutral-brown/70 mb-4">
                        {event.isOnline ? (
                          <>
                            <Globe size={16} />
                            <span>Online</span>
                          </>
                        ) : (
                          <>
                            <MapPin size={16} />
                            <span>{event.location?.name || event.location?.city || 'Düsseldorf'}</span>
                          </>
                        )}
                      </div>

                      {/* Price */}
                      {event.price && (
                        <div className="mb-4">
                          <span className="text-primary font-bold">
                            {event.price.amount ? `€${event.price.amount}` : event.price.note || (locale === 'de' ? 'Kostenlos' : 'Free')}
                          </span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-neutral-brown/70 text-sm line-clamp-2 mb-4">
                        {t(event.description)}
                      </p>

                      {/* CTA */}
                      <a
                        href={`mailto:${CONTACT.email.primary}?subject=Anmeldung: ${t(event.title)}`}
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-colors"
                      >
                        {locale === 'de' ? 'Anmelden' : 'Register'}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="max-w-2xl mx-auto text-center py-12 bg-neutral-cream/30 rounded-3xl">
                <div className="text-6xl mb-6">📅</div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4">
                  {locale === 'de' ? 'Aktuell keine Veranstaltungen' : 'No events currently'}
                </h3>
                <p className="text-neutral-brown/70 mb-6">
                  {locale === 'de'
                    ? 'Neue Termine werden bald bekannt gegeben. Erstellen Sie Veranstaltungen im Sanity CMS unter "Veranstaltungen".'
                    : 'New dates will be announced soon. Create events in Sanity CMS under "Events".'}
                </p>
                <a
                  href={`mailto:${CONTACT.email.primary}?subject=Anfrage: Nächster Infoabend`}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-bold transition-colors"
                >
                  {locale === 'de' ? 'Benachrichtigen lassen' : 'Get notified'}
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Past Events (if any) */}
        {pastEvents.length > 0 && (
          <section className="py-16 bg-neutral-cream/30">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-serif font-bold text-primary mb-8">
                {locale === 'de' ? 'Vergangene Veranstaltungen' : 'Past Events'}
              </h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {pastEvents.slice(0, 4).map((event) => (
                  <div
                    key={event._id}
                    className="bg-white/60 rounded-xl p-4 border border-neutral-cream"
                  >
                    <p className="text-sm text-neutral-brown/60 mb-1">
                      {formatDate(event.startDate)}
                    </p>
                    <h3 className="font-semibold text-primary line-clamp-2">
                      {t(event.title)}
                    </h3>
                    {event.isCancelled && (
                      <span className="text-xs text-red-500 font-bold">
                        {locale === 'de' ? 'Abgesagt' : 'Cancelled'}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary to-accent-green rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-serif font-bold mb-4">
                {locale === 'de' ? 'Privaten Infoabend anfragen' : 'Request Private Info Evening'}
              </h2>
              <p className="text-white/90 mb-8">
                {locale === 'de'
                  ? 'Sie möchten einen Infoabend für Ihre Gruppe oder Firma? Agnes kommt gerne zu Ihnen.'
                  : 'Would you like an info evening for your group or company? Agnes is happy to come to you.'}
              </p>
              <a
                href={`mailto:${CONTACT.email.primary}?subject=Anfrage: Privater Infoabend`}
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-full font-bold transition-colors"
              >
                {locale === 'de' ? 'Anfrage senden' : 'Send Inquiry'}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
