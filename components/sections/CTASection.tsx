// components/sections/CTASection.tsx
'use client';

import { Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Heading, Text, Handwritten } from '@/components/ui/Typography';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const contactOptions = [
  {
    icon: Phone,
    title: 'Anrufen',
    description: 'Mo-Fr 9-18 Uhr',
    action: '+49 (0) 123 456 789',
    href: 'tel:+491234567890',
    variant: 'secondary' as const,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Schnell & unkompliziert',
    action: 'Nachricht senden',
    href: 'https://wa.me/491234567890',
    variant: 'outline' as const,
  },
  {
    icon: Mail,
    title: 'E-Mail',
    description: 'Ausführliche Anfrage',
    action: 'Kontaktformular',
    href: '/kontakt',
    variant: 'outline' as const,
  },
];

export function CTASection() {
  return (
    <Section padding="lg" background="default">
      <div className="relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Handwritten size="lg" className="mb-4">
              Lass uns deine Traumreise planen
            </Handwritten>
            <Heading as="h2" level="h2" className="mb-4">
              Bereit für dein Afrika-Abenteuer?
            </Heading>
            <Text size="lg" color="muted" className="max-w-2xl mx-auto">
              Ich berate dich gerne persönlich und finde die perfekte Reise für deine Wünsche.
              Unverbindlich und kostenlos.
            </Text>
          </motion.div>

          {/* Contact Options Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.a
                  key={index}
                  href={option.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <Text size="lg" weight="bold" className="mb-1">
                      {option.title}
                    </Text>
                    <Text size="sm" color="muted" className="mb-4">
                      {option.description}
                    </Text>
                    <Text
                      size="md"
                      weight="semibold"
                      className="text-primary group-hover:text-secondary transition-colors"
                    >
                      {option.action}
                    </Text>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-soft"
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent-green"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <Text size="sm" weight="semibold">
                Antwort innerhalb von 24 Stunden
              </Text>
            </div>
            <span className="text-neutral-brown/30">•</span>
            <Text size="sm" weight="semibold">
              Kostenlose Beratung
            </Text>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}