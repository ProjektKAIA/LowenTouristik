// lib/sanity/client.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2bs691r5',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  perspective: 'published',
});

// Client für Preview Mode (ohne CDN)
export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2bs691r5',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: 'previewDrafts',
});

// Helper: Client basierend auf Preview-Status
export const getClient = (preview?: boolean) => {
  return preview ? previewClient : client;
};