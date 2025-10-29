// sanity/schemas/siteSettings.ts
import { defineField, defineType } from 'sanity';

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Website Einstellungen',
  type: 'document',
  icon: () => '⚙️',
  fields: [
    // SITE INFO
    defineField({
      name: 'title',
      title: 'Website Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Website Beschreibung',
      type: 'text',
      rows: 3,
      description: 'Wird für SEO verwendet',
    }),

    // CONTACT INFO
    defineField({
      name: 'contactEmail',
      title: 'E-Mail',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Nummer',
      type: 'string',
      description: 'Format: +49123456789',
    }),

    // ADDRESS
    defineField({
      name: 'address',
      title: 'Adresse',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Straße & Hausnummer',
          type: 'string',
        },
        {
          name: 'zip',
          title: 'PLZ',
          type: 'string',
        },
        {
          name: 'city',
          title: 'Stadt',
          type: 'string',
        },
        {
          name: 'country',
          title: 'Land',
          type: 'string',
          initialValue: 'Deutschland',
        },
      ],
    }),

    // OPENING HOURS
    defineField({
      name: 'openingHours',
      title: 'Öffnungszeiten',
      type: 'text',
      rows: 4,
      description: 'Zum Beispiel: Mo-Fr: 9:00-18:00 Uhr',
    }),

    // SOCIAL MEDIA
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        },
        {
          name: 'youtube',
          title: 'YouTube URL',
          type: 'url',
        },
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
        },
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),

    // NEWSLETTER
    defineField({
      name: 'newsletterText',
      title: 'Newsletter Text',
      type: 'text',
      rows: 2,
      description: 'Text der im Newsletter-Formular angezeigt wird',
    }),

    // FOOTER
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      rows: 2,
      description: 'Zusätzlicher Text im Footer',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Website Einstellungen',
      };
    },
  },
});