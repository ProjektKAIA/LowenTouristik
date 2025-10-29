// components/sections/AboutPreviewSection.tsx
'use client';

import { Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Heading, Text, Handwritten } from '@/components/ui/Typography';
import { ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutPreviewSection() {
  return (
    <Section padding="md" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-strong">
            <img
              src="/images/agnes-portrait.jpg"
              alt="Agnes - Gründerin Loewentouristik"
              className="w-full h-auto"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full opacity-20 blur-3xl" />
          </div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-strong p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-red/10 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent-red" fill="currentColor" />
              </div>
              <div>
                <Text size="sm" color="muted">
                  Über
                </Text>
                <Text size="lg" weight="bold" color="primary">
                  10+ Jahre Afrika
                </Text>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Handwritten size="md" className="mb-4">
            Meine Geschichte
          </Handwritten>

          <Heading as="h2" level="h2" className="mb-6">
            Afrika hat mein Herz erobert – und ich möchte es mit dir teilen
          </Heading>

          <div className="space-y-4 mb-8">
            <Text size="md" color="default">
              Hallo, ich bin Agnes. Vor über 10 Jahren bin ich zum ersten Mal nach Afrika gereist
              – und habe mich sofort verliebt. Die Weite der Landschaften, die Herzlichkeit der
              Menschen, die unglaubliche Vielfalt der Kulturen.
            </Text>

            <Text size="md" color="default">
              Seitdem bin ich über 20 Mal zurückgekehrt. Ich habe Freundschaften geschlossen,
              Sprachen gelernt und verstanden: Afrika ist nicht ein Land, sondern ein Kontinent
              voller Geschichten, die erzählt werden wollen.
            </Text>

            <Text size="md" color="default">
              Mit Loewentouristik möchte ich authentische Begegnungen ermöglichen. Fernab von
              Massentourismus. Mit Respekt, Nachhaltigkeit und dem Willen, etwas zurückzugeben.
            </Text>
          </div>

          {/* Signature */}
          <div className="mb-8">
            <Handwritten size="lg" className="text-primary">
              Agnes
            </Handwritten>
            <Text size="sm" color="muted">
              Gründerin & Reisebegleiterin
            </Text>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Mehr über mich
            </Button>
            <Button variant="outline" size="lg">
              Reisephilosophie
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}