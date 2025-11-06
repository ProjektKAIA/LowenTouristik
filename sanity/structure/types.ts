// sanity/structure/types.ts

import type { StructureBuilder } from 'sanity/structure';

/**
 * Configuration für Document List Items
 */
export interface DocumentListConfig {
  type: string;
  title: string;
  icon: string;
}

/**
 * Configuration für Singleton Documents
 */
export interface SingletonConfig {
  schemaType: string;
  documentId: string;
  title: string;
  icon: string;
}

/**
 * Type für Structure Builder
 */
export type StructureBuilderType = StructureBuilder;