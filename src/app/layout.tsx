import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'IA en Español — Guías y herramientas de inteligencia artificial',
    template: '%s | IA en Español',
  },
  description: 'Guías, comparativas y tutoriales sobre herramientas de inteligencia artificial en español. ChatGPT, Claude, Gemini, n8n y más.',
  metadataBase: new URL('https://tu-dominio.com'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'IA en Español',
  },
  robots: {
    index: true,
    follow: true,
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
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
