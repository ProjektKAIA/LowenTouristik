// lib/types/homepage.types.ts

export interface HomepageData {
  hero: HeroSection;
  valuesSection: ValuesSection;
  aboutPreview: AboutPreviewSection;
  ctaSection: CtaSection;
  seo?: SeoData;
}

export interface HeroSection {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  videoUrl?: string;
  backgroundImage?: {
    asset: {
      url: string;
    };
  };
  stats?: {
    value: string;
    label: string;
  }[];
}

export interface ValuesSection {
  title?: string;
  subtitle?: string;
  comparisons?: {
    standardTitle: string;
    standardDescription: string;
    oursTitle: string;
    oursDescription: string;
  }[];
  badge?: string;
}

export interface AboutPreviewSection {
  label?: string;
  title?: string;
  paragraphs?: {
    text: string;
    bold?: string;
  }[];
  image?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  badgeValue?: string;
  badgeLabel?: string;
}

export interface CtaSection {
  title?: string;
  subtitle?: string;
  description?: string;
}

export interface SeoData {
  title?: string;
  description?: string;
  image?: {
    asset: {
      url: string;
    };
  };
}