// sanity.config.ts (Root Level)
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
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
  ],

  schema: {
    types: schemaTypes,
  },
});