import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'PulsoIA — El pulso de la inteligencia artificial en español',
    template: '%s | PulsoIA',
  },
  description: 'Guías prácticas, comparativas y tutoriales sobre las mejores herramientas de inteligencia artificial en español. ChatGPT, Claude, Gemini, n8n y más.',
  metadataBase: new URL('https://pulso-ia.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'PulsoIA',
    images: [{ url: '/logo.svg', width: 48, height: 48, alt: 'PulsoIA' }],
  },
  twitter: {
    card: 'summary',
    site: '@pulsoIA',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2587597281292784"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-zinc-50 min-h-screen">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
