// sanity/schemas/trip.ts
import { defineField, defineType } from 'sanity';

export const tripSchema = defineType({
  name: 'trip',
  title: 'Reisen',
  type: 'document',
  icon: () => '✈️',
  fields: [
    // BASIC INFO
    defineField({
      name: 'title',
      title: 'Reise-Titel',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(50).max(250),
    }),
    defineField({
      name: 'featured',
      title: 'Als Bestseller markieren?',
      type: 'boolean',
      initialValue: false,
    }),

    // LOCATION
    defineField({
      name: 'country',
      title: 'Land',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // TRIP DETAILS
    defineField({
      name: 'duration',
      title: 'Dauer (in Tagen)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(365),
    }),
    defineField({
      name: 'maxPersons',
      title: 'Maximale Teilnehmerzahl',
      type: 'number',
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'difficulty',
      title: 'Schwierigkeitsgrad',
      type: 'string',
      options: {
        list: [
          { title: 'Leicht', value: 'leicht' },
          { title: 'Mittel', value: 'mittel' },
          { title: 'Anspruchsvoll', value: 'anspruchsvoll' },
        ],
        layout: 'radio',
      },
    }),

    // PRICING
    defineField({
      name: 'price',
      title: 'Preis (ab, in Euro)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),

    // MEDIA
    defineField({
      name: 'mainImage',
      title: 'Hauptbild',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Bildergalerie',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Bildunterschrift',
              type: 'string',
            },
          ],
        },
      ],
    }),

    // CONTENT
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(3).max(10),
    }),
    defineField({
      name: 'itinerary',
      title: 'Reiseverlauf (Tag für Tag)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Tag', type: 'number' },
            { name: 'title', title: 'Titel', type: 'string' },
            {
              name: 'description',
              title: 'Beschreibung',
              type: 'text',
              rows: 4,
            },
            {
              name: 'activities',
              title: 'Aktivitäten',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'accommodation',
              title: 'Unterkunft',
              type: 'string',
            },
            {
              name: 'meals',
              title: 'Mahlzeiten',
              type: 'string',
              options: {
                list: [
                  { title: 'Keine', value: 'keine' },
                  { title: 'Frühstück', value: 'fruehstueck' },
                  { title: 'Halbpension', value: 'halbpension' },
                  { title: 'Vollpension', value: 'vollpension' },
                ],
              },
            },
          ],
          preview: {
            select: {
              day: 'day',
              title: 'title',
            },
            prepare({ day, title }) {
              return {
                title: `Tag ${day}: ${title}`,
              };
            },
          },
        },
      ],
    }),

    // INCLUDED / NOT INCLUDED
    defineField({
      name: 'included',
      title: 'Leistungen (Inkludiert)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'notIncluded',
      title: 'Nicht Inkludiert',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    // ACCOMMODATION
    defineField({
      name: 'accommodation',
      title: 'Unterkunft',
      type: 'object',
      fields: [
        { name: 'type', title: 'Unterkunftsart', type: 'string' },
        {
          name: 'description',
          title: 'Beschreibung',
          type: 'text',
          rows: 3,
        },
        {
          name: 'standard',
          title: 'Standard',
          type: 'string',
          options: {
            list: [
              { title: '3 Sterne', value: '3' },
              { title: '4 Sterne', value: '4' },
              { title: '5 Sterne', value: '5' },
              { title: 'Boutique', value: 'boutique' },
              { title: 'Lodge', value: 'lodge' },
            ],
          },
        },
      ],
    }),

    // BEST TIME TO VISIT
    defineField({
      name: 'bestTimeToVisit',
      title: 'Beste Reisezeit',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Januar', value: 'januar' },
          { title: 'Februar', value: 'februar' },
          { title: 'März', value: 'maerz' },
          { title: 'April', value: 'april' },
          { title: 'Mai', value: 'mai' },
          { title: 'Juni', value: 'juni' },
          { title: 'Juli', value: 'juli' },
          { title: 'August', value: 'august' },
          { title: 'September', value: 'september' },
          { title: 'Oktober', value: 'oktober' },
          { title: 'November', value: 'november' },
          { title: 'Dezember', value: 'dezember' },
        ],
      },
    }),

    // TAGS
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),

    // PUBLISHING
    defineField({
      name: 'publishedAt',
      title: 'Veröffentlicht am',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      country: 'country',
      duration: 'duration',
      price: 'price',
      media: 'mainImage',
    },
    prepare({ title, country, duration, price, media }) {
      return {
        title,
        subtitle: `${country} • ${duration} Tage • ab ${price}€`,
        media,
      };
    },
  },
});