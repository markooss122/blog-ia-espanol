'use client'

import { useEffect, useState } from 'react'

interface AdUnitProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal'
  className?: string
}

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export default function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    setHasConsent(consent === 'accepted')
  }, [])

  useEffect(() => {
    if (hasConsent) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch {}
    }
  }, [hasConsent])

  if (!hasConsent) return null

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: 'block' }}
      data-ad-client="ca-pub-2587597281292784"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  )
}
