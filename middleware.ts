// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico, sitemap.xml, robots.txt (public files)
  // - studio (Sanity Studio)
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|studio).*)']
};