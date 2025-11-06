// sanity/structure/builders/index.ts

import type { StructureBuilderType, DocumentListConfig, SingletonConfig } from '../types';

/**
 * Erstellt ein Document List Item für Sanity Studio
 * 
 * @param S - Structure Builder
 * @param config - Configuration für das Document List Item
 * @returns Configured ListItemBuilder
 * 
 * @example
 * createDocumentList(S, {
 *   type: 'trip',
 *   title: 'Reisen',
 *   icon: '✈️'
 * })
 */
export const createDocumentList = (
  S: StructureBuilderType,
  config: DocumentListConfig
) => {
  const { type, title, icon } = config;

  return S.listItem()
    .title(title)
    .icon(() => icon)
    .child(
      S.documentTypeList(type)
        .title(`Alle ${title}`)
        .filter(`_type == "${type}"`)
    );
};

/**
 * Erstellt ein Singleton Document Item für Sanity Studio
 * 
 * @param S - Structure Builder
 * @param config - Configuration für das Singleton Document
 * @returns Configured ListItemBuilder
 * 
 * @example
 * createSingleton(S, {
 *   schemaType: 'siteSettings',
 *   documentId: 'siteSettings',
 *   title: 'Website Einstellungen',
 *   icon: '⚙️'
 * })
 */
export const createSingleton = (
  S: StructureBuilderType,
  config: SingletonConfig
) => {
  const { schemaType, documentId, title, icon } = config;

  return S.listItem()
    .title(title)
    .icon(() => icon)
    .child(
      S.document()
        .schemaType(schemaType)
        .documentId(documentId)
        .title(title)
    );
};