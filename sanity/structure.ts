// sanity/structure.ts
import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Inhalt')
    .items([
      // REISEN
      S.listItem()
        .title('Reisen')
        .icon(() => '✈️')
        .child(
          S.documentTypeList('trip')
            .title('Alle Reisen')
            .filter('_type == "trip"')
        ),

      // TESTIMONIALS
      S.listItem()
        .title('Testimonials')
        .icon(() => '💬')
        .child(
          S.documentTypeList('testimonial')
            .title('Alle Testimonials')
            .filter('_type == "testimonial"')
        ),

      // SEITEN
      S.listItem()
        .title('Seiten')
        .icon(() => '📄')
        .child(
          S.documentTypeList('page')
            .title('Alle Seiten')
            .filter('_type == "page"')
        ),

      S.divider(),

      // HOMEPAGE (Singleton)
      S.listItem()
        .title('Homepage')
        .icon(() => '🏠')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
            .title('Homepage bearbeiten')
        ),

      // SETTINGS (Singleton)
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