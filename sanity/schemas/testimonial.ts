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
  ],

  preview: {
    select: {
      name: 'name',
      trip: 'trip',
      rating: 'rating',
      media: 'image',
    },
    prepare({ name, trip, rating, media }) {
      const stars = '⭐'.repeat(rating);
      return {
        title: name,
        subtitle: `${trip} • ${stars}`,
        media,
      };
    },
  },
});