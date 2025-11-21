// sanity/schemas/testimonial.ts
import { defineField, defineType } from 'sanity';

export const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  icon: () => '💬',
  fields: [
    // CUSTOMER INFO
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto (Optional)',
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
    }),

    // TESTIMONIAL CONTENT
    defineField({
      name: 'text',
      title: 'Bewertungstext',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().min(50).max(500),
    }),
    defineField({
      name: 'rating',
      title: 'Bewertung (Sterne)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
      initialValue: 5,
    }),

    // TRIP REFERENCE
    defineField({
      name: 'trip',
      title: 'Reise',
      type: 'string',
      description: 'Zu welcher Reise gehört diese Bewertung?',
    }),

    // META
    defineField({
      name: 'date',
      title: 'Reisedatum',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Als Featured markieren?',
      type: 'boolean',
      description: 'Wird auf der Homepage angezeigt',
      initialValue: false,
    }),

    // ============================================
    // NEU: VIDEO URL
    // ============================================
    defineField({
      name: 'videoUrl',
      title: 'Video URL (Optional)',
      type: 'url',
      description: 'YouTube oder Vimeo Embed-URL (z.B. https://www.youtube.com/embed/VIDEO_ID)',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),

    // ============================================
    // NEU: BILDERGALERIE
    // ============================================
    defineField({
      name: 'gallery',
      title: 'Bildergalerie (Optional)',
      type: 'array',
      description: 'Zusätzliche Fotos von der Reise',
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
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Bildunterschrift (Optional)',
              type: 'string',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
  ],

  preview: {
    select: {
      name: 'name',
      trip: 'trip',
      rating: 'rating',
      media: 'image',
      hasVideo: 'videoUrl',
      galleryCount: 'gallery',
    },
    prepare({ name, trip, rating, media, hasVideo, galleryCount }) {
      const stars = '⭐'.repeat(rating);
      const videoIndicator = hasVideo ? ' 🎥' : '';
      const galleryIndicator = galleryCount?.length > 0 ? ` 📷${galleryCount.length}` : '';
      
      return {
        title: name,
        subtitle: `${trip} • ${stars}${videoIndicator}${galleryIndicator}`,
        media,
      };
    },
  },
});