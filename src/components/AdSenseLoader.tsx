'use client'

import Script from 'next/script'

// El script de AdSense debe cargarse siempre para que Google pueda verificar
// el sitio y rastrear anuncios. La restricción de consentimiento GDPR se
// gestiona mediante el parámetro data-npa-on-page-load en AdUnit.
export default function AdSenseLoader() {
  return (
    <Script
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2587597281292784"
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  )
}
