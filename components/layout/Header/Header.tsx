// components/layout/Header/Header.tsx
'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { SITE_INFO, CONTACT } from '@/lib/constants';
import type { HeaderProps } from './Header.types';

export function Header({ className = '' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Links with translations
  const navLinks = [
    { href: '#reisen', label: t('nav.trips') },
    { href: '#agnes', label: t('nav.about') },
    { href: '#werte', label: t('nav.values') },
    { href: '#testimonials', label: t('nav.testimonials') },
    { href: '#kontakt', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-primary-blue/95 backdrop-blur-sm shadow-2xl' : ''
      } ${className}`}
    >
      <nav className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          
            href="#hero"
            className="text-2xl md:text-3xl font-serif font-black text-white hover:text-secondary-ochre transition relative z-10"
          >
            {SITE_INFO.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-white font-medium">
            {navLinks.map((link) => (
              
                key={link.href}
                href={link.href}
                className="hover:text-secondary-ochre transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons & Language Switcher */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <LanguageSwitcher className="hidden md:flex" />
            
            
              href={CONTACT.phone.href}
              className="hidden md:flex items-center gap-2 text-white hover:text-secondary-ochre transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-semibold">{CONTACT.phone.display}</span>
            </a>
            
              href="#kontakt"
              className="btn-primary bg-accent-red hover:bg-accent-red/90 text-white px-6 py-2.5 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              {t('cta.requestTrip')}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}