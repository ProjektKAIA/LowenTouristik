// app/studio/[[...tool]]/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loewentouristik CMS',
  description: 'Content Management System für Loewentouristik',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}