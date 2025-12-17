// sanity/structure.ts
import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Inhalt')
    .items([
      S.listItem()
        .title('Homepage')
        .icon(() => '🏠')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
            .title('Homepage bearbeiten')
        ),

      S.listItem()
        .title('Über Agnes')
        .icon(() => '👩')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
            .title('Über Agnes bearbeiten')
        ),

      S.divider(),

      S.listItem()
        .title('Reisen')
        .icon(() => '✈️')
        .child(S.documentTypeList('trip').title('Alle Reisen')),

      S.listItem()
        .title('Testimonials')
        .icon(() => '💬')
        .child(S.documentTypeList('testimonial').title('Alle Testimonials')),

      S.listItem()
        .title('Seiten')
        .icon(() => '📄')
        .child(S.documentTypeList('page').title('Alle Seiten')),

      S.divider(),

      S.listItem()
        .title('Website Einstellungen')
        .icon(() => '⚙️')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Einstellungen')
        ),
    ]);