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
      name: 'shortDescription',
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
      name: 'region',
      title: 'Region',
      type: 'string',
      options: {
        list: [
          { title: 'Zentralafrika', value: 'Zentralafrika' },
          { title: 'Westafrika', value: 'Westafrika' },
          { title: 'Ostafrika', value: 'Ostafrika' },
          { title: 'Südliches Afrika', value: 'Südliches Afrika' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
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
      initialValue: 12,
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

    // AVAILABILITY
    defineField({
      name: 'availability',
      title: 'Verfügbarkeit',
      type: 'string',
      options: {
        list: [
          { title: 'Verfügbar', value: 'available' },
          { title: 'Wenige Plätze', value: 'limited' },
          { title: 'Ausgebucht', value: 'full' },
        ],
        layout: 'radio',
      },
      initialValue: 'available',
    }),
    defineField({
      name: 'spotsLeft',
      title: 'Restplätze',
      type: 'number',
      description: 'Nur bei "Wenige Plätze" relevant',
      validation: (Rule) => Rule.min(0).max(12),
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
              name: 'image',
              title: 'Tagesbild',
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
              ],
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
              media: 'image',
            },
            prepare({ day, title, media }) {
              return {
                title: `Tag ${day}: ${title}`,
                media,
              };
            },
          },
        },
      ],
    }),

    // MAP STATIONS
    defineField({
      name: 'mapStations',
      title: 'Karten-Stationen (für interaktive Karte)',
      type: 'array',
      description: 'GPS-Koordinaten der Reisestationen für die interaktive Karte',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Tag',
              type: 'number',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'name',
              title: 'Ortsname',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'lat',
              title: 'Breitengrad (Latitude)',
              type: 'number',
              validation: (Rule) => Rule.required().min(-90).max(90),
            },
            {
              name: 'lng',
              title: 'Längengrad (Longitude)',
              type: 'number',
              validation: (Rule) => Rule.required().min(-180).max(180),
            },
            {
              name: 'title',
              title: 'Station Titel',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Kurzbeschreibung',
              type: 'text',
              rows: 2,
            },
          ],
          preview: {
            select: {
              day: 'day',
              name: 'name',
              title: 'title',
            },
            prepare({ day, name, title }) {
              return {
                title: `Tag ${day}: ${name}`,
                subtitle: title,
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
              { title: 'Camping', value: 'camping' },
            ],
          },
        },
      ],
    }),

    // BEST TIME TO VISIT
    defineField({
      name: 'bestTime',
      title: 'Beste Reisezeit',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Januar', value: 'jan' },
          { title: 'Februar', value: 'feb' },
          { title: 'März', value: 'mar' },
          { title: 'April', value: 'apr' },
          { title: 'Mai', value: 'may' },
          { title: 'Juni', value: 'jun' },
          { title: 'Juli', value: 'jul' },
          { title: 'August', value: 'aug' },
          { title: 'September', value: 'sep' },
          { title: 'Oktober', value: 'oct' },
          { title: 'November', value: 'nov' },
          { title: 'Dezember', value: 'dec' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      region: 'region',
      media: 'mainImage',
      featured: 'featured',
    },
    prepare({ title, region, media, featured }) {
      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle: region,
        media,
      };
    },
  },
});