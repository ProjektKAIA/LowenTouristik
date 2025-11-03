// lib/sanity/client.ts
import { createClient } from '@sanity/client';
import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
});