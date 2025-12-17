// sanity/schemas/index.ts
import { tripSchema } from './trip';
import { testimonialSchema } from './testimonial';
import { pageSchema } from './page';
import { siteSettingsSchema } from './siteSettings';
import { homepageSchema } from './homepage';
import { aboutSchema } from './about';

export const schemaTypes = [
  tripSchema,
  testimonialSchema,
  pageSchema,
  siteSettingsSchema,
  homepageSchema,
  aboutSchema,
];