// sanity/schemas/homepage.ts
import { defineField, defineType } from 'sanity';

// Helper für lokalisierte String-Felder
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

// Helper für lokalisierte Text-Felder (mehrzeilig)
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

export const homepageSchema = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: () => '🏠',
  groups: [
    { name: 'hero', title: '🦁 Hero Section', default: true },
    { name: 'values', title: '✅ Werte Section' },
    { name: 'about', title: '👩 Über Agnes' },
    { name: 'cta', title: '📞 CTA Section' },
    { name: 'seo', title: '🔍 SEO' },
  ],
  fields: [
    // ============================================
    // HERO SECTION
    // ============================================
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        localizedString('badge', 'Badge Text', 'z.B. "Über 2.500 zufriedene Afrika-Reisende"'),
        localizedString('title', 'Hauptüberschrift'),
        localizedString('subtitle', 'Untertitel (Handschrift)'),
        localizedText('description', 'Beschreibung'),
        {
          name: 'videoUrl',
          title: 'Hintergrund Video URL',
          type: 'url',
        },
        {
          name: 'backgroundImage',
          title: 'Hintergrundbild (Fallback)',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'stats',
          title: 'Statistiken',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                localizedString('value', 'Wert'),
                localizedString('label', 'Label'),
              ],
              preview: {
                select: { title: 'value.de', subtitle: 'label.de' },
              },
            },
          ],
          validation: (Rule) => Rule.max(3),
        },
      ],
      options: { collapsible: true, collapsed: false },
    }),

    // ============================================
    // VALUES SECTION
    // ============================================
    defineField({
      name: 'valuesSection',
      title: 'Werte Section',
      type: 'object',
      group: 'values',
      fields: [
        localizedString('title', 'Titel'),
        localizedString('subtitle', 'Untertitel'),
        {
          name: 'comparisons',
          title: 'Vergleiche (Standard vs. Bei uns)',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                localizedString('standardTitle', 'Standard Titel'),
                localizedText('standardDescription', 'Standard Beschreibung', 2),
                localizedString('oursTitle', 'Bei uns Titel'),
                localizedText('oursDescription', 'Bei uns Beschreibung', 2),
              ],
              preview: {
                select: { title: 'standardTitle.de', subtitle: 'oursTitle.de' },
                prepare: ({ title, subtitle }) => ({
                  title: `❌ ${title}`,
                  subtitle: `✅ ${subtitle}`,
                }),
              },
            },
          ],
          validation: (Rule) => Rule.max(4),
        },
        localizedString('badge', 'Badge Text'),
      ],
      options: { collapsible: true, collapsed: true },
    }),

    // ============================================
    // ABOUT PREVIEW SECTION
    // ============================================
    defineField({
      name: 'aboutPreview',
      title: 'Über Agnes Preview',
      type: 'object',
      group: 'about',
      fields: [
        localizedString('label', 'Label', 'z.B. "Die Gründerin"'),
        localizedString('title', 'Titel'),
        {
          name: 'paragraphs',
          title: 'Absätze',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                localizedText('text', 'Text'),
                localizedString('bold', 'Fett gedruckter Teil (optional)'),
              ],
            },
          ],
        },
        {
          name: 'image',
          title: 'Bild',
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string' },
          ],
        },
        localizedString('badgeValue', 'Badge Wert', 'z.B. "10+"'),
        localizedString('badgeLabel', 'Badge Label', 'z.B. "Jahre in Afrika"'),
      ],
      options: { collapsible: true, collapsed: true },
    }),

    // ============================================
    // CTA SECTION
    // ============================================
    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',
      group: 'cta',
      fields: [
        localizedString('title', 'Titel'),
        localizedString('subtitle', 'Untertitel'),
        localizedString('description', 'Beschreibung'),
      ],
      options: { collapsible: true, collapsed: true },
    }),

    // ============================================
    // SEO
    // ============================================
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
      return {
        title: 'Homepage',
        subtitle: 'Startseite verwalten',
      };
    },
  },
});