// sanity/structure/config.ts

import type { DocumentListConfig, SingletonConfig } from './types';

/**
 * Konfiguration für Document Collections
 */
export const DOCUMENT_LISTS: DocumentListConfig[] = [
  {
    type: 'trip',
    title: 'Reisen',
    icon: '✈️',
  },
  {
    type: 'testimonial',
    title: 'Testimonials',
    icon: '💬',
  },
  {
    type: 'page',
    title: 'Seiten',
    icon: '📄',
  },
] as const;

/**
 * Konfiguration für Singleton Documents
 */
export const SINGLETONS: SingletonConfig[] = [
  {
    schemaType: 'homepage',
    documentId: 'homepage',
    title: 'Homepage',
    icon: '🏠',
  },
  {
    schemaType: 'siteSettings',
    documentId: 'siteSettings',
    title: 'Website Einstellungen',
    icon: '⚙️',
  },
] as const;