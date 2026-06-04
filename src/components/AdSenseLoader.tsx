'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function AdSenseLoader() {
  useEffect(() => {
    // Solo carga AdSense si el usuario ha aceptado cookies
    const consent = localStorage.getItem('cookie-consent')
    if (consent === 'accepted') {
      const script = document.createElement('script')
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2587597281292784'
      script.async = true
      script.crossOrigin = 'anonymous'
      document.head.appendChild(script)
    }
  }, [])

  return null
}
