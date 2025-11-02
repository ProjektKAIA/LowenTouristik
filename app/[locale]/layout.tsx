// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import { Merriweather, Inter, Caveat } from "next/font/google";
import '@/app/globals.css';

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loewentouristik - Authentische Afrika-Reisen",
  description: "Authentische Afrika-Reisen mit max. 12 Personen. Von Agnes persönlich über 10x bereist. Respektvoll, nachhaltig, unvergesslich.",
  keywords: ["Afrika-Reisen", "Gruppenreisen", "Nachhaltig Reisen", "Authentische Reisen"],
  authors: [{ name: "Loewentouristik" }],
  openGraph: {
    title: "Loewentouristik - Authentische Afrika-Reisen",
    description: "Authentische Afrika-Reisen mit max. 12 Personen",
    type: "website",
    locale: "de_DE",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${merriweather.variable} ${inter.variable} ${caveat.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}