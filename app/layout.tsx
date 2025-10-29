// app/layout.tsx
import type { Metadata } from "next";
import { Merriweather, Inter, Caveat } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${merriweather.variable} ${inter.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}