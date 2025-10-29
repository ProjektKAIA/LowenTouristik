// components/sections/HeroSection.tsx
'use client';

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Heading, Handwritten, Text } from '@/components/ui/Typography';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        <div className="w-full h-full bg-primary/20" />
      </div>

      {/* Content - ZENTRIERT wie im HTML */}
      <Container className="relative z-20 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Handwritten Accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Handwritten size="lg" className="text-secondary mb-6">
              Afrika hat mein Herz erobert – und wird auch deins erobern
            </Handwritten>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heading as="h1" level="h1" color="white" className="mb-6">
              Entdecke das wahre Afrika
            </Heading>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Text size="xl" color="white" className="mb-12 leading-relaxed max-w-3xl mx-auto">
              Authentische Begegnungen. Kleine Gruppen (max. 12 Personen). Respektvoll & nachhaltig.
              <br />
              <span className="text-secondary font-semibold">
                Jede Reise von Agnes persönlich über 10x bereist.
              </span>
            </Text>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              variant="secondary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Reisen entdecken
            </Button>
            <Button
              variant="ghost"
              size="lg"
              leftIcon={<Phone className="w-5 h-5" />}
              className="border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              +49 (0) 123 456 789
            </Button>
          </motion.div>

          {/* Value Badges - Horizontal zentriert */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <div className="glass px-5 py-2.5 rounded-full backdrop-blur-md border border-white/20">
              <Text size="sm" color="white" weight="semibold">
                ✓ Max. 12 Personen
              </Text>
            </div>
            <div className="glass px-5 py-2.5 rounded-full backdrop-blur-md border border-white/20">
              <Text size="sm" color="white" weight="semibold">
                ✓ 100% CO₂-kompensiert
              </Text>
            </div>
            <div className="glass px-5 py-2.5 rounded-full backdrop-blur-md border border-white/20">
              <Text size="sm" color="white" weight="semibold">
                ✓ 80% lokale Wirtschaft
              </Text>
            </div>
            <div className="glass px-5 py-2.5 rounded-full backdrop-blur-md border border-white/20">
              <Text size="sm" color="white" weight="semibold">
                ✓ TourCert zertifiziert
              </Text>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <Text size="sm" color="white" className="opacity-70">
            Scroll
          </Text>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white/70 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}