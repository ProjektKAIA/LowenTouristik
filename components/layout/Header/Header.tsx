// components/layout/Header/Header.tsx
'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { SITE_INFO, CONTACT } from '@/lib/constants';
import type { HeaderProps } from './Header.types';

export function Header({ className = '' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#reisen', label: t('nav.trips') },
    { href: '/ueber-agnes', label: t('nav.about'), isRoute: true },
    { href: '/unsere-werte', label: t('nav.values'), isRoute: true },
    { href: '/#testimonials', label: t('nav.testimonials') },
    { href: '/kontakt', label: t('nav.contact'), isRoute: true },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'shadow-lg py-3' : 'py-4'
      } ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(42, 95, 111, 0.92) 0%, rgba(44, 95, 60, 0.88) 50%, rgba(42, 95, 111, 0.92) 100%)',
        backdropFilter: 'blur(12px)'
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-3xl group-hover:scale-110 transition-transform">🦁</div>
            <div>
              <div className="font-serif font-black text-xl text-white">
                {SITE_INFO.name}
              </div>
              <div className="text-xs text-white/80">
                {SITE_INFO.tagline}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-white hover:text-secondary transition"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium text-white hover:text-secondary transition"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* Right Side - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href={CONTACT.phone.href}
              className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2.5 rounded-full font-bold transition-all"
            >
              {CONTACT.phone.display}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-2xl shadow-xl">
            <nav className="flex flex-col gap-2 px-4">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-neutral-brown hover:bg-neutral-cream rounded-lg transition"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-neutral-brown hover:bg-neutral-cream rounded-lg transition"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </nav>
            <div className="mt-4 px-4 pt-4 border-t border-neutral-cream">
              <LanguageSwitcher className="mb-3" />
              <a
                href={CONTACT.phone.href}
                className="block text-center bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-full font-bold transition-all"
              >
                {CONTACT.phone.display}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}