// components/sections/AboutPreviewSection.tsx
'use client';

import { Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Heading, Text, Handwritten } from '@/components/ui/Typography';
import { ArrowRight, Heart, Globe, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { number: '15+', label: 'Jahre Erfahrung' },
  { number: '2.500+', label: 'Glückliche Reisende' },
  { number: '35+', label: 'Reisen im Portfolio' },
  { number: '10+', label: 'Länder bereist' },
];

export function AboutPreviewSection() {
  return (
    <Section padding="md" background="cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-primary/10">
            {/* Placeholder for Agnes Portrait */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Text size="lg" color="muted">Agnes Portrait</Text>
            </div>
          </div>

          {/* Floating Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-strong p-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-secondary fill-secondary" />
              </div>
              <div>
                <Text size="sm" weight="bold" className="text-primary">
                  2.500+
                </Text>
                <Text size="xs" color="muted">
                  Glückliche Reisende
                </Text>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Handwritten size="md" className="mb-4">
            Über Loewentouristik
          </Handwritten>

          <Heading as="h2" level="h2" className="mb-6">
            Afrika liegt mir am Herzen – seit meiner ersten Reise 2009
          </Heading>

          <div className="space-y-4 mb-8">
            <Text size="lg" className="leading-relaxed">
              Mein Name ist Agnes, und ich habe mich vor über 15 Jahren in Afrika verliebt. Was als
              einzelne Reise begann, wurde zu meiner Lebensaufgabe: Authentische, respektvolle
              Begegnungen zwischen Menschen zu schaffen.
            </Text>

            <Text size="md" color="muted" className="leading-relaxed">
              Jede Reise, die ich anbiete, habe ich selbst mindestens 10 Mal bereist. Ich kenne die
              Menschen, die Kulturen, die versteckten Pfade. Und genau diese Authentizität möchte ich
              mit dir teilen.
            </Text>

            <Text size="md" color="muted" className="leading-relaxed">
              Keine Shows, keine Inszenierungen – nur echte Begegnungen auf Augenhöhe. Das ist mein
              Versprechen.
            </Text>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 bg-white rounded-xl shadow-soft"
              >
                <Text size="xl" weight="bold" className="text-primary mb-1">
                  {stat.number}
                </Text>
                <Text size="sm" color="muted">
                  {stat.label}
                </Text>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Button
            variant="outline"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Mehr über Agnes erfahren
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}