// components/ui/LanguageSwitcher/LanguageSwitcher.types.ts
export interface LanguageSwitcherProps {
  className?: string;
}

export interface Language {
  code: 'de' | 'en' | 'fr';
  flag: string;
  label: string;
}