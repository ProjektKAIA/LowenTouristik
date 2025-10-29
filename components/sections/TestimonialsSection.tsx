// components/sections/TestimonialsSection.tsx
'use client';

import { Section } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Heading, Text, Handwritten } from '@/components/ui/Typography';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Maria Schmidt',
    trip: 'Kamerun Regenwald',
    date: 'Oktober 2024',
    rating: 5,
    text: 'Diese Reise hat mein Leben verändert. Die Begegnungen mit den Baka waren so authentisch und berührend. Agnes hat uns mit so viel Herzblut begleitet – man spürt ihre Leidenschaft für Afrika in jedem Moment.',
    image: '/images/testimonials/maria.jpg',
  },
  {
    id: 2,
    name: 'Thomas & Lisa Weber',
    trip: 'Tansania Safari',
    date: 'August 2024',
    rating: 5,
    text: 'Wir haben schon viele Reisen gemacht, aber diese war etwas ganz Besonderes. Die kleine Gruppe, die nachhaltigen Unterkünfte, die persönliche Betreuung – alles stimmte perfekt. Danke Agnes!',
    image: '/images/testimonials/thomas-lisa.jpg',
  },
  {
    id: 3,
    name: 'Sabine Müller',
    trip: 'Äthiopien Historienroute',
    date: 'September 2024',
    rating: 5,
    text: 'Als Alleinreisende hatte ich zunächst Bedenken. Aber die Gruppe wurde schnell zur Familie. Agnes achtet darauf, dass sich jeder wohlfühlt. Die Organisation war perfekt, die Erlebnisse unvergesslich.',
    image: '/images/testimonials/sabine.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function TestimonialsSection() {
  return (
    <Section padding="md" background="default">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Handwritten size="md" className="mb-2">
            Was unsere Reisenden sagen
          </Handwritten>
          <Heading as="h2" level="h2" className="mb-4">
            Erlebnisse, die im Herzen bleiben
          </Heading>
          <Text size="lg" color="muted" className="max-w-2xl mx-auto">
            Über 200 glückliche Reisende haben bereits mit uns Afrika entdeckt
          </Text>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.id} variants={itemVariants}>
            <Card
              variant="default"
              hover="lift"
              padding="lg"
              className="h-full relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-secondary" />
              </div>

              <CardContent className="relative">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-secondary fill-secondary"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <Text size="md" className="mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </Text>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-neutral-brown/10">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Text weight="bold" color="primary" className="text-lg">
                      {testimonial.name.charAt(0)}
                    </Text>
                  </div>
                  <div>
                    <Text size="sm" weight="semibold">
                      {testimonial.name}
                    </Text>
                    <Text size="sm" color="muted">
                      {testimonial.trip} • {testimonial.date}
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-12"
      >
        <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-soft">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-secondary fill-secondary -ml-1 first:ml-0"
              />
            ))}
          </div>
          <Text size="sm" weight="semibold">
            4.9/5 von 200+ Reisenden
          </Text>
        </div>
      </motion.div>
    </Section>
  );
}