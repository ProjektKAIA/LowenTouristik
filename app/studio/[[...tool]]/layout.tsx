// app/studio/[[...tool]]/layout.tsx
export const metadata = {
  title: 'Loewentouristik CMS',
  description: 'Content Management System für Loewentouristik',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}