// lib/sanity/writeClient.ts
import { createClient } from '@sanity/client';
import { apiVersion, dataset, projectId } from '@/sanity/env';

/**
 * Sanity Client mit Write-Berechtigung
 * NUR für Server-Side API Routes verwenden!
 */
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});