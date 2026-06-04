import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { Analytics } from '@vercel/analytics/react'

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
    images: [{ url: '/og', width: 1200, height: 630, alt: 'PulsoIA — El pulso de la IA en español' }],
  },
  twitter: { card: 'summary_large_image', site: '@pulsoIA' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
  alternates: { canonical: BASE_URL },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Google Consent Mode v2 — debe ir ANTES que cualquier script de Google */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('consent', 'default', { 'ad_storage': 'denied', 'ad_user_data': 'denied', 'ad_personalization': 'denied', 'analytics_storage': 'denied', 'wait_for_update': 500 }); gtag('set', 'ads_data_redaction', true);`
          }}
        />
        {/* Google Funding Choices — CMP certificado IAB TCF para UE/España (obligatorio desde ene 2024) */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          src="https://fundingchoicesmessages.google.com/i/pub-2587597281292784?ers=1"
          data-nscript="beforeInteractive"
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();`
          }}
        />
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
        <Analytics />
      </body>
    </html>
  )
}
