'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-zinc-700 px-4 py-4 md:py-3">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
        <p className="text-xs text-zinc-300 flex-1 leading-relaxed">
          Usamos cookies propias y de terceros (incluyendo Google AdSense) para mejorar tu experiencia y mostrarte publicidad relevante.
          Consulta nuestra{' '}
          <Link href="/privacidad" className="underline text-zinc-200 hover:text-white">
            Política de privacidad
          </Link>.
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={reject}
            className="text-xs px-3 py-1.5 border border-zinc-600 text-zinc-400 hover:text-zinc-200 rounded transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="text-xs px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded font-medium transition-colors"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  )
}
