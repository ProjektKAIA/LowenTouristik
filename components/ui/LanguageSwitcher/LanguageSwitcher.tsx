// components/ui/LanguageSwitcher/LanguageSwitcher.tsx
'use client';

import { useParams } from 'next/navigation';
import { useRouter, usePathname } from '@/i18n/routing';
import type { LanguageSwitcherProps, Language } from './LanguageSwitcher.types';

const LANGUAGES: Language[] = [
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
];

export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const handleLanguageChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {LANGUAGES.map((language) => {
        const isActive = currentLocale === language.code;
        
        return (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`
              group relative px-3 py-2 rounded-full font-medium text-sm
              transition-all duration-300
              ${
                isActive
                  ? 'bg-secondary text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
              }
            `}
            aria-label={`Switch to ${language.label}`}
            title={language.label}
          >
            <span className="flex items-center gap-1.5">
              <span className="text-lg">{language.flag}</span>
              <span className="hidden lg:inline">{language.code.toUpperCase()}</span>
            </span>
            
            {/* Active Indicator */}
            {isActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}