import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

const BASE_URL = 'https://pulsoia.xyz'

export const metadata: Metadata = {
  title: {
    default: 'PulsoIA — El pulso de la inteligencia artificial en español',
    template: '%s | PulsoIA',
  },
  description: 'Guías prácticas, comparativas y tutoriales sobre las mejores herramientas de inteligencia artificial en español. ChatGPT, Claude, Gemini, n8n y más.',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'PulsoIA',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'PulsoIA — El pulso de la IA en español' }],
  },
  twitter: { card: 'summary_large_image', site: '@pulsoIA' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2587597281292784"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-zinc-50 min-h-screen">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
