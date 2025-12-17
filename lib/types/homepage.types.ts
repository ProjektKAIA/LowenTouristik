// lib/types/homepage.types.ts

export type Locale = 'de' | 'en' | 'fr';

export interface LocalizedString {
  de: string;
  en?: string;
  fr?: string;
}

export interface LocalizedText {
  de: string;
  en?: string;
  fr?: string;
}

export interface SanityImage {
  asset: { url: string };
  alt?: string;
}

export interface HomepageData {
  _id: string;
  hero: HeroSection;
  valuesSection: ValuesSection;
  aboutPreview: AboutPreviewSection;
  ctaSection: CtaSection;
  seo?: SeoData;
}

export interface HeroSection {
  badge?: LocalizedString;
  title: LocalizedString;
  subtitle?: LocalizedString;
  description?: LocalizedText;
  videoUrl?: string;
  backgroundImage?: SanityImage;
  stats?: { value: LocalizedString; label: LocalizedString }[];
}

export interface ValuesSection {
  title?: LocalizedString;
  subtitle?: LocalizedString;
  comparisons?: {
    standardTitle: LocalizedString;
    standardDescription: LocalizedText;
    oursTitle: LocalizedString;
    oursDescription: LocalizedText;
  }[];
  badge?: LocalizedString;
}

export interface AboutPreviewSection {
  label?: LocalizedString;
  title?: LocalizedString;
  paragraphs?: { text: LocalizedText; bold?: LocalizedString }[];
  image?: SanityImage;
  badgeValue?: LocalizedString;
  badgeLabel?: LocalizedString;
}

export interface CtaSection {
  title?: LocalizedString;
  subtitle?: LocalizedString;
  description?: LocalizedText;
}

export interface SeoData {
  title?: LocalizedString;
  description?: LocalizedText;
  image?: SanityImage;
}

export function getLocalizedValue(
  field: LocalizedString | LocalizedText | undefined,
  locale: Locale
): string {
  if (!field) return '';
  return field[locale] || field.de || '';
}