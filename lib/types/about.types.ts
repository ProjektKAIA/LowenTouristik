// lib/types/about.types.ts

import type { Locale, LocalizedString, LocalizedText, SanityImage } from './homepage.types';

export type { Locale, LocalizedString, LocalizedText, SanityImage };
export { getLocalizedValue } from './homepage.types';

export interface AboutHeroData {
  label: LocalizedString;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedText;
  backgroundImage: SanityImage;
  stats: {
    value: LocalizedString;
    label: LocalizedString;
  }[];
}

export interface AboutStoryData {
  title: LocalizedString;
  paragraphs: { text: LocalizedText }[];
  image: SanityImage;
  badgeValue: LocalizedString;
  badgeLabel: LocalizedString;
}

export interface AboutMissionData {
  title: LocalizedString;
  description: LocalizedText;
  values: {
    icon: string;
    title: LocalizedString;
    description: LocalizedText;
  }[];
}

export interface AboutSeoData {
  title?: LocalizedString;
  description?: LocalizedText;
  image?: SanityImage;
}

export interface AboutPageData {
  _id: string;
  hero: AboutHeroData;
  story: AboutStoryData;
  mission: AboutMissionData;
  seo?: AboutSeoData;
}