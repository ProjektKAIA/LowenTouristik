// sanity/schemas/blogPost.ts
import { defineField, defineType } from 'sanity';

/**
 * Blog Post Schema
 * Für Reiseberichte, News und Artikel
 */

export const blogPostSchema = defineType({
  name: 'blogPost',
  title: 'Blog Artikel',
  type: 'document',
  icon: () => '📰',
  groups: [
    { name: 'content', title: '📄 Inhalt', default: true },
    { name: 'meta', title: '📋 Meta' },
    { name: 'seo', title: '🔍 SEO' },
  ],
  fields: [
    // CONTENT
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'object',
      group: 'content',
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
      group: 'content',
      options: {
        source: 'title.de',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Kurzbeschreibung',
      type: 'object',
      group: 'content',
      description: 'Wird in der Übersicht angezeigt',
      fields: [
        { name: 'de', title: '🇩🇪 Deutsch', type: 'text', rows: 3, validation: (Rule) => Rule.required() },
        { name: 'en', title: '🇬🇧 English', type: 'text', rows: 3 },
        { name: 'fr', title: '🇫🇷 Français', type: 'text', rows: 3 },
      ],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Hauptbild',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        { name: 'alt', type: 'string', title: 'Alt Text' },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Artikel Inhalt',
      type: 'object',
      group: 'content',
      fields: [
        {
          name: 'de',
          title: '🇩🇪 Deutsch',
          type: 'array',
          validation: (Rule) => Rule.required(),
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'Quote', value: 'blockquote' },
              ],
              lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
              ],
            },
            {
              type: 'image',
              options: { hotspot: true },
              fields: [
                { name: 'alt', type: 'string', title: 'Alt Text' },
                { name: 'caption', type: 'string', title: 'Bildunterschrift' },
              ],
            },
          ],
        },
        {
          name: 'en',
          title: '🇬🇧 English',
          type: 'array',
          of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
        },
        {
          name: 'fr',
          title: '🇫🇷 Français',
          type: 'array',
          of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
        },
      ],
    }),

    // META
    defineField({
      name: 'publishedAt',
      title: 'Veröffentlichungsdatum',
      type: 'datetime',
      group: 'meta',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
      group: 'meta',
      initialValue: 'Agnes Kah',
    }),
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      group: 'meta',
      options: {
        list: [
          { title: 'Reisebericht', value: 'reisebericht' },
          { title: 'Reisetipps', value: 'tipps' },
          { title: 'Kultur & Menschen', value: 'kultur' },
          { title: 'Nachhaltigkeit', value: 'nachhaltigkeit' },
          { title: 'News', value: 'news' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'relatedTrip',
      title: 'Verknüpfte Reise',
      type: 'reference',
      group: 'meta',
      to: [{ type: 'trip' }],
      description: 'Optional: Reise die im Artikel erwähnt wird',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'meta',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'featured',
      title: 'Hervorgehoben',
      type: 'boolean',
      group: 'meta',
      initialValue: false,
      description: 'Wird auf der Startseite angezeigt',
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'SEO Einstellungen',
      type: 'object',
      group: 'seo',
      fields: [
        { name: 'title', title: 'SEO Titel', type: 'string' },
        { name: 'description', title: 'Meta Beschreibung', type: 'text', rows: 3 },
      ],
      options: { collapsible: true, collapsed: true },
    }),
  ],

  orderings: [
    {
      title: 'Neueste zuerst',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],

  preview: {
    select: {
      title: 'title.de',
      date: 'publishedAt',
      category: 'category',
      media: 'featuredImage',
    },
    prepare({ title, date, category, media }) {
      const categoryLabels: Record<string, string> = {
        reisebericht: 'Reisebericht',
        tipps: 'Reisetipps',
        kultur: 'Kultur',
        nachhaltigkeit: 'Nachhaltigkeit',
        news: 'News',
      };
      return {
        title: title || 'Unbenannt',
        subtitle: `${categoryLabels[category] || category} • ${date ? new Date(date).toLocaleDateString('de-DE') : 'Kein Datum'}`,
        media,
      };
    },
  },
});
