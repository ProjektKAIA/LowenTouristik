// app/api/preview/route.ts
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { getTripBySlug } from '@/lib/services/trip.service';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');
  const type = searchParams.get('type') || 'trip';

  // Check the secret token
  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  // Check if slug is provided
  if (!slug) {
    return new Response('Missing slug', { status: 400 });
  }

  // Fetch the content to check if it exists
  const content = await getTripBySlug(slug, true);

  if (!content) {
    return new Response('Content not found', { status: 404 });
  }

  // Enable Draft Mode
  (await draftMode()).enable();

  // Redirect to the path based on type
  const path = type === 'trip' ? `/reisen/${slug}` : `/${slug}`;
  redirect(path);
}