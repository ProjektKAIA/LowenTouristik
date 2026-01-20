// sanity/schemas/event.ts
import { defineField, defineType } from 'sanity';

/**
 * Event Schema
 * Für Veranstaltungen, Reise-Infoveranstaltungen, Vorträge etc.
 */

export const eventSchema = defineType({
  name: 'event',
  title: 'Veranstaltungen',
  type: 'document',
  icon: () => '📅',
  groups: [
    { name: 'details', title: '📋 Details', default: true },
    { name: 'location', title: '📍 Ort' },
    { name: 'registration', title: '✍️ Anmeldung' },
  ],
  fields: [
    // DETAILS
    defineField({
      name: 'title',
      title: 'Veranstaltungstitel',
      type: 'object',
      group: 'details',
      fields: [
        { name: 'de', title: '🇩🇪 Deutsch', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'en', title: '🇬🇧 English', type: 'string' },
        { name: 'fr', title: '🇫🇷 Français', type: 'string' },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'details',
      options: {
        source: 'title.de',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventType',
      title: 'Art der Veranstaltung',
      type: 'string',
      group: 'details',
      options: {
        list: [
          { title: 'Reise-Infoabend', value: 'infoabend' },
          { title: 'Vortrag', value: 'vortrag' },
          { title: 'Workshop', value: 'workshop' },
          { title: 'Messe', value: 'messe' },
          { title: 'Online-Event', value: 'online' },
          { title: 'Stammtisch', value: 'stammtisch' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beschreibung',
      type: 'object',
      group: 'details',
      fields: [
        { name: 'de', title: '🇩🇪 Deutsch', type: 'text', rows: 5, validation: (Rule) => Rule.required() },
        { name: 'en', title: '🇬🇧 English', type: 'text', rows: 5 },
        { name: 'fr', title: '🇫🇷 Français', type: 'text', rows: 5 },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Event Bild',
      type: 'image',
      group: 'details',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
    }),
    defineField({
      name: 'relatedTrips',
      title: 'Verknüpfte Reisen',
      type: 'array',
      group: 'details',
      of: [{ type: 'reference', to: [{ type: 'trip' }] }],
      description: 'Reisen die bei dieser Veranstaltung vorgestellt werden',
    }),

    // DATE & TIME
    defineField({
      name: 'startDate',
      title: 'Startdatum & Uhrzeit',
      type: 'datetime',
      group: 'details',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Enddatum & Uhrzeit',
      type: 'datetime',
      group: 'details',
      description: 'Optional - für mehrtägige Events',
    }),

    // LOCATION
    defineField({
      name: 'isOnline',
      title: 'Online-Veranstaltung',
      type: 'boolean',
      group: 'location',
      initialValue: false,
    }),
    defineField({
      name: 'location',
      title: 'Veranstaltungsort',
      type: 'object',
      group: 'location',
      hidden: ({ parent }) => parent?.isOnline === true,
      fields: [
        { name: 'name', title: 'Name', type: 'string', description: 'z.B. "Büro Düsseldorf"' },
        { name: 'street', title: 'Straße', type: 'string' },
        { name: 'city', title: 'Stadt', type: 'string' },
        { name: 'zip', title: 'PLZ', type: 'string' },
        { name: 'googleMapsUrl', title: 'Google Maps Link', type: 'url' },
      ],
    }),
    defineField({
      name: 'onlineLink',
      title: 'Online-Link',
      type: 'url',
      group: 'location',
      hidden: ({ parent }) => parent?.isOnline !== true,
      description: 'Zoom/Teams/Meet Link (wird erst nach Anmeldung geteilt)',
    }),

    // REGISTRATION
    defineField({
      name: 'requiresRegistration',
      title: 'Anmeldung erforderlich',
      type: 'boolean',
      group: 'registration',
      initialValue: true,
    }),
    defineField({
      name: 'maxParticipants',
      title: 'Max. Teilnehmer',
      type: 'number',
      group: 'registration',
      hidden: ({ parent }) => !parent?.requiresRegistration,
    }),
    defineField({
      name: 'registrationDeadline',
      title: 'Anmeldeschluss',
      type: 'datetime',
      group: 'registration',
      hidden: ({ parent }) => !parent?.requiresRegistration,
    }),
    defineField({
      name: 'price',
      title: 'Teilnahmegebühr',
      type: 'object',
      group: 'registration',
      fields: [
        { name: 'amount', title: 'Betrag (€)', type: 'number' },
        { name: 'note', title: 'Hinweis', type: 'string', description: 'z.B. "Kostenlos" oder "inkl. Getränke"' },
      ],
    }),
    defineField({
      name: 'isCancelled',
      title: 'Abgesagt',
      type: 'boolean',
      group: 'registration',
      initialValue: false,
    }),
  ],

  orderings: [
    {
      title: 'Datum aufsteigend',
      name: 'startDateAsc',
      by: [{ field: 'startDate', direction: 'asc' }],
    },
    {
      title: 'Datum absteigend',
      name: 'startDateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
  ],

  preview: {
    select: {
      title: 'title.de',
      date: 'startDate',
      type: 'eventType',
      isOnline: 'isOnline',
      isCancelled: 'isCancelled',
      media: 'image',
    },
    prepare({ title, date, type, isOnline, isCancelled, media }) {
      const typeLabels: Record<string, string> = {
        infoabend: 'Infoabend',
        vortrag: 'Vortrag',
        workshop: 'Workshop',
        messe: 'Messe',
        online: 'Online',
        stammtisch: 'Stammtisch',
      };
      const formattedDate = date ? new Date(date).toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }) : 'Kein Datum';

      let subtitle = `${typeLabels[type] || type} • ${formattedDate}`;
      if (isOnline) subtitle += ' 🌐';
      if (isCancelled) subtitle = '❌ ABGESAGT • ' + subtitle;

      return {
        title: title || 'Unbenannt',
        subtitle,
        media,
      };
    },
  },
});
