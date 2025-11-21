// sanity.config.ts (Root Level)
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { documentInternationalization } from '@sanity/document-internationalization';
import { schemaTypes } from './sanity/schemas';
import { structure } from './sanity/structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2bs691r5';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

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
      // weakReferences: true, // Optional: Falls du schwache Referenzen brauchst
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});