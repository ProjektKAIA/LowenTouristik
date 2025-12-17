// sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { documentInternationalization } from '@sanity/document-internationalization';
import { schemaTypes } from './sanity/schemas';
import { structure } from './sanity/structure';
import { translateAction } from './sanity/actions/translateAction';
import { translateHomepageAction } from './sanity/actions/translateHomepageAction';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2bs691r5';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

// Singleton Document IDs
const SINGLETON_IDS = ['homepage', 'siteSettings'];

export default defineConfig({
  name: 'loewentouristik',
  title: 'Loewentouristik CMS',

  projectId,
  dataset,

  basePath: '/studio',

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: 'de', title: 'Deutsch' },
        { id: 'en', title: 'English' },
        { id: 'fr', title: 'Français' },
      ],
      schemaTypes: ['trip', 'testimonial', 'page'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, context) => {
      // Für Homepage: Translate Action hinzufügen
      if (context.schemaType === 'homepage') {
        return [
          ...prev.filter(
            (action) =>
              action.action !== 'delete' &&
              action.action !== 'duplicate' &&
              action.action !== 'unpublish'
          ),
          translateHomepageAction,
        ];
      }

      // Für andere Singletons: Standard-Einschränkungen
      if (SINGLETON_IDS.includes(context.schemaType)) {
        return prev.filter(
          (action) =>
            action.action !== 'delete' &&
            action.action !== 'duplicate' &&
            action.action !== 'unpublish'
        );
      }

      // Für alle anderen: Translate Action hinzufügen
      return [...prev, translateAction];
    },
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter(
          (templateItem) => !SINGLETON_IDS.includes(templateItem.templateId)
        );
      }
      return prev;
    },
  },
});