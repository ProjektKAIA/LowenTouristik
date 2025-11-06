// sanity/structure/index.ts

import type { StructureResolver } from 'sanity/structure';
import { createDocumentList, createSingleton } from './builders';
import { DOCUMENT_LISTS, SINGLETONS } from './config';

/**
 * Sanity Studio Structure Configuration
 * 
 * Diese Konfiguration definiert die Struktur des Sanity Studios.
 * Sie nutzt Builder-Funktionen für maximale Wiederverwendbarkeit
 * und Wartbarkeit.
 * 
 * Vorteile dieser Struktur:
 * - DRY Prinzip (Don't Repeat Yourself)
 * - Typsicher durch TypeScript
 * - Leicht erweiterbar durch Config-Arrays
 * - Zentrale Konfiguration in config.ts
 * - Testbar durch Builder-Funktionen
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Inhalt')
    .items([
      // Dynamisch generierte Document Lists aus Config
      ...DOCUMENT_LISTS.map((config) => 
        createDocumentList(S, config)
      ),

      // Divider für visuelle Trennung
      S.divider(),

      // Dynamisch generierte Singletons aus Config
      ...SINGLETONS.map((config) => 
        createSingleton(S, config)
      ),
    ]);

// Export aller Sub-Module für externe Verwendung
export * from './types';
export * from './builders';
export * from './config';