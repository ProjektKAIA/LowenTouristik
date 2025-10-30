// lib/constants.ts

/**
 * Site Configuration & Constants
 * Zentrale Datei für alle konstanten Werte der Website
 */

// ============================================
// SITE INFO
// ============================================
export const SITE_INFO = {
  name: 'Loewentouristik',
  tagline: 'Authentische Afrika-Reisen',
  description: 'Authentische Afrika-Reisen mit max. 12 Personen. Von Agnes persönlich über 10x bereist. Respektvoll, nachhaltig, unvergesslich.',
  foundedYear: 2009,
  url: 'https://loewentouristik.de',
} as const;

// ============================================
// CONTACT INFO
// ============================================
export const CONTACT = {
  phone: {
    display: '0172 5363580',
    href: 'tel:+491725363580',
    international: '+49 172 5363580',
  },
  email: {
    primary: 'agnes.kah@loewentouristik.de',
    info: 'info@loewentouristik.de',
  },
  whatsapp: {
    number: '+491725363580',
    url: 'https://wa.me/491725363580',
    message: 'Hallo Agnes, ich interessiere mich für eine Reise',
  },
} as const;

// ============================================
// ADDRESS
// ============================================
export const ADDRESS = {
  street: 'Graf Adolf Straße 41',
  zip: '40210',
  city: 'Düsseldorf',
  country: 'Deutschland',
  fullAddress: 'Graf Adolf Straße 41, 40210 Düsseldorf',
  googleMapsUrl: 'https://goo.gl/maps/YOUR_GOOGLE_MAPS_LINK',
} as const;

// ============================================
// OPENING HOURS
// ============================================
export const OPENING_HOURS = {
  weekdays: 'Mo-Fr: 9:00-18:00 Uhr',
  saturday: 'Sa: Nach Vereinbarung',
  sunday: 'So: Geschlossen',
  display: 'Mo-Fr: 9-18 Uhr • Sa: Nach Vereinbarung',
} as const;

// ============================================
// SOCIAL MEDIA
// ============================================
export const SOCIAL_MEDIA = {
  facebook: {
    name: 'Facebook',
    url: 'https://facebook.com/loewentouristik',
    handle: '@loewentouristik',
  },
  instagram: {
    name: 'Instagram',
    url: 'https://instagram.com/loewentouristik',
    handle: '@loewentouristik',
  },
  youtube: {
    name: 'YouTube',
    url: 'https://youtube.com/@loewentouristik',
    handle: '@loewentouristik',
  },
  linkedin: {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/loewentouristik',
    handle: 'Loewentouristik',
  },
} as const;

// ============================================
// NAVIGATION LINKS
// ============================================
export const NAV_LINKS = [
  { label: 'Reisen', href: '#reisen' },
  { label: 'Über Agnes', href: '#agnes' },
  { label: 'Unsere Werte', href: '#werte' },
  { label: 'Erfahrungen', href: '#testimonials' },
  { label: 'Kontakt', href: '#kontakt' },
] as const;

// ============================================
// FOOTER LINKS
// ============================================
export const FOOTER_LINKS = {
  destinations: [
    { label: 'Kamerun', href: '/reisen/kamerun' },
    { label: 'Sierra Leone', href: '/reisen/sierra-leone' },
    { label: 'Senegal', href: '/reisen/senegal' },
    { label: 'Alle 12 Länder', href: '/reisen' },
  ],
  about: [
    { label: 'Über Agnes', href: '#agnes' },
    { label: 'Unsere Werte', href: '#werte' },
    { label: 'Nachhaltigkeit', href: '/nachhaltigkeit' },
    { label: 'Erfahrungsberichte', href: '#testimonials' },
  ],
  service: [
    { label: 'Reiseberatung', href: '#kontakt' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Reisebedingungen', href: '/agb' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ],
  legal: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'AGB', href: '/agb' },
  ],
} as const;

// ============================================
// STATS & NUMBERS
// ============================================
export const STATS = {
  happyTravelers: '2.500+',
  maxGroupSize: 12,
  routes: '30+',
  countries: 12,
  yearsExperience: new Date().getFullYear() - SITE_INFO.foundedYear,
  timesVisited: '10+',
  co2Compensation: '100%',
  localEconomy: '80%',
} as const;

// ============================================
// BRAND VALUES
// ============================================
export const VALUES = [
  {
    icon: '👥',
    title: 'Kleine Gruppen',
    description: 'Maximal 12 Personen pro Reise. Groß genug für Gemeinschaft, klein genug für echte Begegnungen.',
  },
  {
    icon: '🤝',
    title: 'Respektvoll',
    description: 'Begegnungen auf Augenhöhe. Wir sind Gäste, die um Erlaubnis fragen und faire Preise zahlen.',
  },
  {
    icon: '🌍',
    title: 'Nachhaltig',
    description: '100% CO₂-kompensiert. 80% des Geldes fließt in lokale Wirtschaft. Langfristige Partnerschaften.',
  },
  {
    icon: '🎭',
    title: 'Keine Shows',
    description: 'Kulturen präsentieren sich selbst – wie sie wirklich sind. Keine inszenierten Tänze oder Fake-Dörfer.',
  },
] as const;

// ============================================
// SEO & META
// ============================================
export const SEO = {
  defaultTitle: 'Loewentouristik - Authentische Afrika-Reisen',
  titleTemplate: '%s | Loewentouristik',
  description: SITE_INFO.description,
  keywords: [
    'Afrika-Reisen',
    'Gruppenreisen Afrika',
    'Nachhaltig Reisen',
    'Authentische Reisen',
    'Kamerun Reisen',
    'Sierra Leone Reisen',
    'Senegal Reisen',
    'Agnes Kah',
    'Kleine Gruppenreisen',
    'Respektvoller Tourismus',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_INFO.url,
    siteName: SITE_INFO.name,
  },
} as const;

// ============================================
// EXTERNAL LINKS
// ============================================
export const EXTERNAL_LINKS = {
  booking: '#kontakt',
  newsletter: '#newsletter',
  blog: '/blog',
  press: '/presse',
} as const;