// sanity/schemas/contentPage.ts
import { defineField, defineType } from 'sanity';

/**
 * Content Page Schema
 * Für statische Seiten wie Nachhaltigkeit, FAQ, Presse etc.
 * Mit Hero, Rich Content und optionalem FAQ-Accordion
 */

const localizedString = (name: string, title: string, description?: string) => ({
  name,
  title,
  type: 'object',
  description,
  fields: [
    { name: 'de', title: '🇩🇪 Deutsch', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'en', title: '🇬🇧 English', type: 'string' },
    { name: 'fr', title: '🇫🇷 Français', type: 'string' },
  ],
  options: { collapsible: true, collapsed: false },
});

const localizedText = (name: string, title: string, rows: number = 3) => ({
  name,
  title,
  type: 'object',
  fields: [
    { name: 'de', title: '🇩🇪 Deutsch', type: 'text', rows, validation: (Rule: any) => Rule.required() },
    { name: 'en', title: '🇬🇧 English', type: 'text', rows },
    { name: 'fr', title: '🇫🇷 Français', type: 'text', rows },
  ],
  options: { collapsible: true, collapsed: false },
});

const localizedRichText = (name: string, title: string) => ({
  name,
  title,
  type: 'object',
  fields: [
    {
      name: 'de',
      title: '🇩🇪 Deutsch',
      type: 'array',
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
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'fr',
      title: '🇫🇷 Français',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    },
  ],
  options: { collapsible: true, collapsed: false },
});

export const contentPageSchema = defineType({
  name: 'contentPage',
  title: 'Content Seiten',
  type: 'document',
  icon: () => '📝',
  groups: [
    { name: 'general', title: '📋 Allgemein', default: true },
    { name: 'hero', title: '🦁 Hero' },
    { name: 'content', title: '📄 Inhalt' },
    { name: 'faq', title: '❓ FAQ' },
    { name: 'seo', title: '🔍 SEO' },
  ],
  fields: [
    // GENERAL
    defineField({
      name: 'title',
      title: 'Interner Titel',
      type: 'string',
      group: 'general',
      description: 'Wird nur im CMS angezeigt',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'general',
      options: {
        source: 'title',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
      },
      validation: (Rule) => Rule.required(),
      description: 'z.B. "nachhaltigkeit" für /nachhaltigkeit',
    }),
    defineField({
      name: 'pageType',
      title: 'Seiten-Typ',
      type: 'string',
      group: 'general',
      options: {
        list: [
          { title: 'Standard', value: 'standard' },
          { title: 'FAQ Seite', value: 'faq' },
          { title: 'Presse', value: 'press' },
        ],
        layout: 'radio',
      },
      initialValue: 'standard',
    }),

    // HERO
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        localizedString('label', 'Label', 'Kleiner Text über der Überschrift'),
        localizedString('title', 'Überschrift'),
        localizedText('subtitle', 'Untertitel'),
        {
          name: 'image',
          title: 'Hero Bild',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
        },
      ],
      options: { collapsible: true, collapsed: false },
    }),

    // CONTENT SECTIONS
    defineField({
      name: 'sections',
      title: 'Inhalt Sektionen',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          name: 'textSection',
          title: 'Text Sektion',
          icon: () => '📝',
          fields: [
            localizedString('title', 'Titel'),
            localizedRichText('content', 'Inhalt'),
            {
              name: 'layout',
              title: 'Layout',
              type: 'string',
              options: {
                list: [
                  { title: 'Normal', value: 'normal' },
                  { title: 'Mit Bild links', value: 'imageLeft' },
                  { title: 'Mit Bild rechts', value: 'imageRight' },
                  { title: 'Volle Breite', value: 'fullWidth' },
                ],
              },
              initialValue: 'normal',
            },
            {
              name: 'image',
              title: 'Bild',
              type: 'image',
              options: { hotspot: true },
              hidden: ({ parent }: { parent: { layout?: string } }) =>
                !parent?.layout || parent.layout === 'normal' || parent.layout === 'fullWidth',
            },
          ],
          preview: {
            select: { title: 'title.de' },
            prepare: ({ title }) => ({ title: title || 'Text Sektion' }),
          },
        },
        {
          type: 'object',
          name: 'statsSection',
          title: 'Statistiken',
          icon: () => '📊',
          fields: [
            localizedString('title', 'Titel'),
            {
              name: 'stats',
              title: 'Statistiken',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'value', title: 'Wert', type: 'string' },
                  localizedString('label', 'Label'),
                  { name: 'icon', title: 'Icon (Emoji)', type: 'string' },
                ],
                preview: {
                  select: { value: 'value', label: 'label.de' },
                  prepare: ({ value, label }) => ({ title: `${value} - ${label}` }),
                },
              }],
            },
          ],
          preview: {
            prepare: () => ({ title: 'Statistiken' }),
          },
        },
        {
          type: 'object',
          name: 'ctaSection',
          title: 'Call to Action',
          icon: () => '🔗',
          fields: [
            localizedString('title', 'Titel'),
            localizedText('text', 'Text'),
            localizedString('buttonText', 'Button Text'),
            { name: 'buttonLink', title: 'Button Link', type: 'string' },
          ],
          preview: {
            select: { title: 'title.de' },
            prepare: ({ title }) => ({ title: title || 'Call to Action' }),
          },
        },
      ],
    }),

    // FAQ
    defineField({
      name: 'faq',
      title: 'FAQ Einträge',
      type: 'array',
      group: 'faq',
      description: 'Fragen & Antworten als Accordion',
      of: [{
        type: 'object',
        fields: [
          localizedString('question', 'Frage'),
          localizedText('answer', 'Antwort', 5),
        ],
        preview: {
          select: { title: 'question.de' },
          prepare: ({ title }) => ({ title: title || 'FAQ Eintrag' }),
        },
      }],
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'SEO Einstellungen',
      type: 'object',
      group: 'seo',
      fields: [
        localizedString('title', 'SEO Titel'),
        localizedText('description', 'Meta Beschreibung'),
        {
          name: 'image',
          title: 'OG Image',
          type: 'image',
          description: 'Wird beim Teilen auf Social Media angezeigt',
        },
      ],
      options: { collapsible: true, collapsed: true },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      media: 'hero.image',
    },
    prepare({ title, slug, media }) {
      return {
        title,
        subtitle: `/${slug}`,
        media,
      };
    },
  },
});
