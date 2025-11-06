// app/[locale]/opengraph-image.tsx
import { ImageResponse } from 'next/og';
import { SITE_INFO } from '@/lib/constants';

export const runtime = 'edge';
export const alt = 'Loewentouristik - Authentische Afrika-Reisen';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #4A7C59 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {SITE_INFO.name}
          </h1>
          <p
            style={{
              fontSize: '36px',
              color: 'rgba(255,255,255,0.95)',
              marginBottom: '40px',
              maxWidth: '800px',
            }}
          >
            {SITE_INFO.description}
          </p>
          <div
            style={{
              display: 'flex',
              gap: '30px',
              fontSize: '24px',
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            <span>🦁 Authentisch</span>
            <span>🤝 Respektvoll</span>
            <span>🌍 Nachhaltig</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}