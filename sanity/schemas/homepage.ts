// sanity/schemas/homepage.ts
import { defineField, defineType } from 'sanity';

export const homepageSchema = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: () => '🏠',
  fields: [
    // ============================================
    // HERO SECTION
    // ============================================
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          description: 'z.B. "Über 2.500 zufriedene Afrika-Reisende"',
        },
        {
          name: 'title',
          title: 'Hauptüberschrift',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Untertitel (Handschrift)',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Beschreibung',
          type: 'text',
          rows: 3,
        },
        {
          name: 'videoUrl',
          title: 'Hintergrund Video URL',
          type: 'url',
          description: 'URL zum Hintergrundvideo (MP4)',
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
                { name: 'value', title: 'Wert', type: 'string' },
                { name: 'label', title: 'Label', type: 'string' },
              ],
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
      fields: [
        {
          name: 'title',
          title: 'Titel',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Untertitel',
          type: 'string',
        },
        {
          name: 'comparisons',
          title: 'Vergleiche (Standard vs. Bei uns)',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'standardTitle', title: 'Standard Titel', type: 'string' },
                { name: 'standardDescription', title: 'Standard Beschreibung', type: 'text', rows: 2 },
                { name: 'oursTitle', title: 'Bei uns Titel', type: 'string' },
                { name: 'oursDescription', title: 'Bei uns Beschreibung', type: 'text', rows: 2 },
              ],
            },
          ],
          validation: (Rule) => Rule.max(4),
        },
        {
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          description: 'z.B. "100% CO₂-kompensiert • 80% lokale Wirtschaft"',
        },
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
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
          description: 'z.B. "Die Gründerin"',
        },
        {
          name: 'title',
          title: 'Titel',
          type: 'string',
        },
        {
          name: 'paragraphs',
          title: 'Absätze',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'text', title: 'Text', type: 'text', rows: 3 },
                { name: 'bold', title: 'Fett gedruckter Teil (optional)', type: 'string' },
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
        {
          name: 'badgeValue',
          title: 'Badge Wert',
          type: 'string',
          description: 'z.B. "10+"',
        },
        {
          name: 'badgeLabel',
          title: 'Badge Label',
          type: 'string',
          description: 'z.B. "Jahre in Afrika"',
        },
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
      fields: [
        {
          name: 'title',
          title: 'Titel',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Untertitel',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Beschreibung',
          type: 'string',
        },
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
      fields: [
        { name: 'title', title: 'SEO Title', type: 'string' },
        { name: 'description', title: 'Meta Description', type: 'text', rows: 3 },
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