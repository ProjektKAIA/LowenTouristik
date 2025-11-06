// sanity/structure/config.ts

import type { DocumentListConfig, SingletonConfig } from './types';

/**
 * Konfiguration für Document Collections
 * 
 * Diese Konfiguration definiert alle Document Types, die als 
 * Listen im Sanity Studio angezeigt werden sollen.
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
 * 
 * Diese Konfiguration definiert alle Singleton Documents, die 
 * nur einmal existieren dürfen (z.B. globale Einstellungen).
 */
export const SINGLETONS: SingletonConfig[] = [
  {
    schemaType: 'siteSettings',
    documentId: 'siteSettings',
    title: 'Website Einstellungen',
    icon: '⚙️',
  },
] as const;