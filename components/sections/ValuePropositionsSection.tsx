// components/sections/ValuePropositionsSection.tsx
'use client';

import { Section } from '@/components/ui/Container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Heading, Text } from '@/components/ui/Typography';
import { Users, Leaf, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Users,
    title: 'Kleine Gruppen',
    description: 'Max. 12 Personen',
    detail: 'Intensive Begegnungen statt Massentourismus. Jeder Teilnehmer zählt und wird Teil einer verschworenen Reisegemeinschaft.',
  },
  {
    icon: Leaf,
    title: '100% Klimaneutral',
    description: 'CO₂-kompensiert',
    detail: 'Alle unsere Reisen sind vollständig CO₂-kompensiert. Wir investieren in zertifizierte Klimaschutzprojekte in Afrika.',
  },
  {
    icon: Heart,
    title: 'Lokale Wirtschaft',
    description: '80% vor Ort',
    detail: 'Wir arbeiten mit lokalen Guides, Unterkünften und Restaurants. So profitieren die Menschen direkt von deiner Reise.',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function ValuePropositionsSection() {
  return (
    <Section padding="md" background="white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading as="h2" level="h2" className="mb-4">
            Warum Loewentouristik?
          </Heading>
          <Text size="lg" color="muted" className="max-w-2xl mx-auto">
            Drei Versprechen, die uns von anderen unterscheiden
          </Text>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card
                variant="default"
                hover="lift"
                padding="lg"
                className="h-full text-center"
              >
                <CardHeader className="items-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <Text size="sm" weight="semibold" color="secondary">
                    {value.description}
                  </Text>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.detail}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}