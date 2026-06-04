import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#0F172A',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: '#2563EB' }} />

        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
          <div style={{
            width: '80px', height: '80px', background: '#1D4ED8',
            borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="56" height="28" viewBox="0 0 56 28">
              <polyline
                points="2,18 10,18 14,6 18,24 22,10 26,18 34,18 37,8 40,18 54,18"
                stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
              />
              <circle cx="37" cy="8" r="3" fill="#93C5FD" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '64px', fontWeight: 700, color: 'white', lineHeight: 1 }}>
              Pulso<span style={{ color: '#60A5FA' }}>IA</span>
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div style={{ fontSize: '28px', color: '#94A3B8', marginBottom: '24px', letterSpacing: '0.5px' }}>
          El pulso de la inteligencia artificial en español
        </div>

        {/* Separator */}
        <div style={{ width: '120px', height: '4px', background: '#2563EB', borderRadius: '2px', marginBottom: '32px' }} />

        {/* Description */}
        <div style={{ fontSize: '22px', color: '#CBD5E1' }}>
          Guías prácticas · Comparativas · Tutoriales
        </div>

        {/* Domain */}
        <div style={{ position: 'absolute', bottom: '48px', left: '80px', fontSize: '18px', color: '#475569' }}>
          pulsoia.xyz
        </div>

        {/* Decorative circle */}
        <div style={{
          position: 'absolute', right: '-60px', top: '50px',
          width: '320px', height: '320px', borderRadius: '50%',
          background: 'rgba(37, 99, 235, 0.15)',
        }} />
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
