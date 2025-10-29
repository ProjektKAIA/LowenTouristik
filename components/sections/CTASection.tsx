// components/sections/CTASection.tsx
'use client';

import { Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Heading, Text, Handwritten } from '@/components/ui/Typography';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <Section padding="md" background="gradient">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Handwritten size="lg" className="text-secondary mb-4">
            Bereit für dein Afrika-Abenteuer?
          </Handwritten>

          <Heading as="h2" level="h2" color="white" className="mb-6">
            Lass uns gemeinsam deine Traumreise planen
          </Heading>

          <Text size="lg" color="white" className="mb-10 opacity-90 leading-relaxed">
            Ob du Fragen hast, eine individuelle Reise planst oder einfach mehr über unsere
            Philosophie erfahren möchtest – ich bin persönlich für dich da. Kostenlos und
            unverbindlich.
          </Text>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="secondary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Kostenlose Beratung
            </Button>
            <Button
              variant="outline"
              size="lg"
              leftIcon={<Phone className="w-5 h-5" />}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              +49 123 456 789
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <Text size="sm" color="white" weight="semibold" className="mb-1">
                Telefon
              </Text>
              <Text size="sm" color="white" className="opacity-80">
                Mo-Fr 9-18 Uhr
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <Text size="sm" color="white" weight="semibold" className="mb-1">
                E-Mail
              </Text>
              <Text size="sm" color="white" className="opacity-80">
                Antwort in 24h
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.16 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-1.02-.01-1.85-2.51.46-3.16-.61-3.36-1.17-.11-.28-.6-1.17-1.02-1.4-.35-.19-.85-.66-.01-.67.79-.01 1.35.72 1.54 1.02.9 1.52 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.02-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.63.7 1.02 1.6 1.02 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.48C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
                </svg>
              </div>
              <Text size="sm" color="white" weight="semibold" className="mb-1">
                Online-Termin
              </Text>
              <Text size="sm" color="white" className="opacity-80">
                Video-Call buchen
              </Text>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}