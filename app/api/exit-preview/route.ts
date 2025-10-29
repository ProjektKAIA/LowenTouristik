// app/api/exit-preview/route.ts
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  // Disable Draft Mode
  (await draftMode()).disable();

  // Redirect to homepage or referrer
  const { searchParams } = new URL(request.url);
  const redirectTo = searchParams.get('redirect') || '/';
  
  redirect(redirectTo);
}