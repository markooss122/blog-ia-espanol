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
  const [ready, setReady] = useState(false)
  const [personalized, setPersonalized] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    setPersonalized(consent === 'accepted')
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  }, [ready])

  if (!ready) return null

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: 'block' }}
      data-ad-client="ca-pub-2587597281292784"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
      {...(!personalized && { 'data-npa-on-page-load': '1' })}
    />
  )
}
