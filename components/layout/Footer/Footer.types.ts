// components/layout/Footer/Footer.types.ts
export interface FooterProps {
  className?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}