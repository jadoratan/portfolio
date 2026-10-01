import { ImageResponse } from 'next/og';
import { PERSON, SITE } from '@/app/config';

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #141428 0%, #1e1e3c 100%)',
          color: '#e4e4f8',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            color: '#ff66aa',
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          {PERSON.role}
        </div>
        <div style={{ display: 'flex', fontSize: 88, fontWeight: 700 }}>
          {PERSON.fullName}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: '#9090b8',
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          {SITE.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
