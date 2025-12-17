// sanity/schemas/about.ts
import { defineField, defineType } from 'sanity';

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

export const aboutSchema = defineType({
  name: 'aboutPage',
  title: 'Über Agnes Seite',
  type: 'document',
  icon: () => '👩',
  groups: [
    { name: 'hero', title: '🦁 Hero Section', default: true },
    { name: 'story', title: '📖 Geschichte' },
    { name: 'mission', title: '🎯 Mission' },
    { name: 'seo', title: '🔍 SEO' },
  ],
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        localizedString('label', 'Label', 'z.B. "Die Gründerin"'),
        localizedString('title', 'Hauptüberschrift'),
        localizedString('subtitle', 'Untertitel (Handschrift)'),
        localizedText('description', 'Beschreibung'),
        {
          name: 'backgroundImage',
          title: 'Hintergrundbild',
          type: 'image',
          options: { hotspot: true },
          validation: (Rule) => Rule.required(),
          fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
        },
        {
          name: 'stats',
          title: 'Statistiken',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              localizedString('value', 'Wert'),
              localizedString('label', 'Label'),
            ],
            preview: { select: { title: 'value.de', subtitle: 'label.de' } },
          }],
          validation: (Rule) => Rule.max(3),
        },
      ],
      options: { collapsible: true, collapsed: false },
    }),
    defineField({
      name: 'story',
      title: 'Geschichte Section',
      type: 'object',
      group: 'story',
      fields: [
        localizedString('title', 'Titel'),
        {
          name: 'paragraphs',
          title: 'Absätze',
          type: 'array',
          of: [{ type: 'object', fields: [localizedText('text', 'Text')] }],
        },
        {
          name: 'image',
          title: 'Bild',
          type: 'image',
          options: { hotspot: true },
          validation: (Rule) => Rule.required(),
          fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
        },
        localizedString('badgeValue', 'Badge Wert', 'z.B. "19+"'),
        localizedString('badgeLabel', 'Badge Label', 'z.B. "Jahre Afrika-Erfahrung"'),
      ],
      options: { collapsible: true, collapsed: true },
    }),
    defineField({
      name: 'mission',
      title: 'Mission Section',
      type: 'object',
      group: 'mission',
      fields: [
        localizedString('title', 'Titel'),
        localizedText('description', 'Beschreibung'),
        {
          name: 'values',
          title: 'Werte',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'icon', title: 'Icon (Emoji)', type: 'string' },
              localizedString('title', 'Titel'),
              localizedText('description', 'Beschreibung', 2),
            ],
            preview: {
              select: { title: 'title.de', icon: 'icon' },
              prepare: ({ title, icon }) => ({ title: `${icon || '●'} ${title}` }),
            },
          }],
        },
      ],
      options: { collapsible: true, collapsed: true },
    }),
    defineField({
      name: 'seo',
      title: 'SEO Einstellungen',
      type: 'object',
      group: 'seo',
      fields: [
        localizedString('title', 'SEO Title'),
        localizedText('description', 'Meta Description'),
        { name: 'image', title: 'OG Image', type: 'image' },
      ],
      options: { collapsible: true, collapsed: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Über Agnes', subtitle: 'About Page verwalten' };
    },
  },
});