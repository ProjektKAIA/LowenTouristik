// components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Text } from '@/components/ui/Typography';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  {
    label: 'Reisen',
    href: '/reisen',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Alle Reisen', href: '/reisen' },
      { label: 'Kamerun', href: '/reisen/kamerun' },
      { label: 'Tansania', href: '/reisen/tansania' },
      { label: 'Äthiopien', href: '/reisen/aethiopien' },
    ],
  },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Nachhaltigkeit', href: '/nachhaltigkeit' },
  { label: 'Kontakt', href: '/kontakt' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-2xl">🦁</span>
              </div>
              <div>
                <Text
                  size="lg"
                  weight="bold"
                  className={cn(
                    'transition-colors',
                    isScrolled ? 'text-primary' : 'text-white'
                  )}
                >
                  Loewentouristik
                </Text>
                <Text
                  size="sm"
                  className={cn(
                    'transition-colors',
                    isScrolled ? 'text-neutral-brown/60' : 'text-white/80'
                  )}
                >
                  Authentisch. Nachhaltig.
                </Text>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasDropdown && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className={cn(
                      'flex items-center gap-1 font-medium transition-colors py-2',
                      isScrolled
                        ? 'text-neutral-brown hover:text-primary'
                        : 'text-white hover:text-secondary'
                    )}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </a>

                  {/* Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-strong py-2"
                        >
                          {link.dropdownItems?.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="block px-4 py-2 text-neutral-brown hover:bg-neutral-cream transition-colors"
                            >
                              {item.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant={isScrolled ? 'ghost' : 'outline'}
                size="md"
                leftIcon={<Phone className="w-4 h-4" />}
                className={
                  !isScrolled
                    ? 'border-white text-white hover:bg-white hover:text-primary'
                    : ''
                }
              >
                +49 123 456 789
              </Button>
              <Button variant="secondary" size="md">
                Beratung buchen
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                isScrolled
                  ? 'text-neutral-brown hover:bg-neutral-cream'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <div className="absolute top-0 right-0 bottom-0 w-80 max-w-full bg-white shadow-strong overflow-y-auto">
              <div className="p-6 pt-24">
                {/* Navigation Links */}
                <nav className="space-y-4 mb-8">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      <a
                        href={link.href}
                        className="block py-3 text-lg font-semibold text-neutral-brown hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                      {link.hasDropdown && (
                        <div className="ml-4 mt-2 space-y-2">
                          {link.dropdownItems?.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="block py-2 text-neutral-brown/70 hover:text-primary transition-colors"
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* CTA Buttons - Mobile */}
                <div className="space-y-3 pt-6 border-t border-neutral-brown/10">
                  <Button
                    variant="outline"
                    size="lg"
                    fullWidth
                    leftIcon={<Phone className="w-4 h-4" />}
                  >
                    +49 123 456 789
                  </Button>
                  <Button variant="secondary" size="lg" fullWidth>
                    Beratung buchen
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}