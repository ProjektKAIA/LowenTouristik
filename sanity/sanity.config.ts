// sanity/sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';
import { schemaTypes } from './schemas';
import { structure } from './structure';

export default defineConfig({
  name: 'loewentouristik',
  title: 'Loewentouristik CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2bs691r5',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
});