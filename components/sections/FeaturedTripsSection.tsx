// components/sections/FeaturedTripsSection.tsx
'use client';

import { Section } from '@/components/ui/Container';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Heading, Text, Handwritten } from '@/components/ui/Typography';
import { ArrowRight, Calendar, Users, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const featuredTrips = [
  {
    id: 1,
    title: 'Bei den Baka im Regenwald',
    country: 'Kamerun',
    duration: '14 Tage',
    maxPersons: 12,
    price: 3890,
    image: '/images/trips/kamerun.jpg',
    description:
      'Authentische Begegnungen mit den Baka-Pygmäen im tropischen Regenwald. Erlebe ihre Kultur, Traditionen und die unberührte Natur Kameruns.',
    tags: ['Kultur', 'Natur', 'Authentisch'],
    bestseller: true,
  },
  {
    id: 2,
    title: 'Tansania Intensiv',
    country: 'Tansania',
    duration: '16 Tage',
    maxPersons: 12,
    price: 4290,
    image: '/images/trips/tansania.jpg',
    description:
      'Safari-Abenteuer in der Serengeti, Ngorongoro-Krater und entspannende Tage auf Sansibar. Die perfekte Kombination aus Wildlife und Strand.',
    tags: ['Safari', 'Strand', 'Wildlife'],
    bestseller: false,
  },
  {
    id: 3,
    title: 'Äthiopien Historienroute',
    country: 'Äthiopien',
    duration: '15 Tage',
    maxPersons: 12,
    price: 3590,
    image: '/images/trips/aethiopien.jpg',
    description:
      'Entdecke die jahrtausendealte Geschichte Äthiopiens. Von Lalibela über Aksum bis zu den Simien Mountains.',
    tags: ['Kultur', 'Geschichte', 'Trekking'],
    bestseller: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function FeaturedTripsSection() {
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
            Unsere Herzensreisen
          </Handwritten>
          <Heading as="h2" level="h2" className="mb-4">
            Entdecke unsere beliebtesten Reisen
          </Heading>
          <Text size="lg" color="muted" className="max-w-2xl mx-auto">
            Kleine Gruppen, große Erlebnisse – jede Reise von Agnes persönlich ausgearbeitet
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
        {featuredTrips.map((trip) => (
          <motion.div key={trip.id} variants={itemVariants}>
            <Card
              variant="default"
              hover="lift"
              padding="none"
              interactive
              className="h-full overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <CardImage
                  src={trip.image}
                  alt={trip.title}
                  aspectRatio="safari"
                />
                {trip.bestseller && (
                  <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    ⭐ Bestseller
                  </div>
                )}
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="flex gap-2">
                    {trip.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-neutral-brown"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <Text size="sm" weight="semibold" color="secondary">
                      {trip.country}
                    </Text>
                  </div>
                  <CardTitle className="mb-2">{trip.title}</CardTitle>
                  <CardDescription>{trip.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-4">
                  <div className="flex items-center gap-4 text-sm text-neutral-brown/70">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{trip.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>Max. {trip.maxPersons}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex-col items-start gap-4 pt-4 border-t border-neutral-brown/10">
                  <div className="flex items-baseline gap-2 w-full">
                    <Text size="sm" color="muted">
                      Ab
                    </Text>
                    <Text size="lg" weight="bold" color="primary">
                      €{trip.price.toLocaleString('de-DE')}
                    </Text>
                    <Text size="sm" color="muted">
                      pro Person
                    </Text>
                  </div>
                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Reise entdecken
                  </Button>
                </CardFooter>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <Button
          variant="outline"
          size="lg"
          rightIcon={<ArrowRight className="w-5 h-5" />}
        >
          Alle Reisen ansehen
        </Button>
      </motion.div>
    </Section>
  );
}