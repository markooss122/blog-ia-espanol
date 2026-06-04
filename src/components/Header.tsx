'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const CATEGORIES = [
  { label: 'Comparativas', href: '/?cat=Comparativas' },
  { label: 'Tutoriales', href: '/?cat=Tutoriales' },
  { label: 'Herramientas', href: '/?cat=Herramientas' },
  { label: 'Automatización', href: '/?cat=Automatización' },
  { label: 'Novedades', href: '/?cat=Novedades' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
      {/* Top bar */}
      <div className="border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-14">

          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/logo.svg" alt="PulsoIA logo" width={120} height={36} className="flex-shrink-0" />
            <span className="hidden sm:block text-[10px] text-zinc-400 tracking-widest uppercase border-l border-zinc-200 pl-3 ml-1">El pulso de la IA</span>
          </Link>

          <div className="flex items-center gap-3">
            {/* Desktop links */}
            <Link href="/sobre-nosotros" className="text-xs text-zinc-500 hover:text-zinc-800 transition-colors hidden md:block">
              Sobre nosotros
            </Link>
            <Link href="/contacto" className="text-xs text-zinc-500 hover:text-zinc-800 transition-colors hidden md:block">
              Contacto
            </Link>
            <Link href="/#newsletter" className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded font-medium transition-colors hidden md:block">
              Newsletter gratis
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 rounded"
              aria-label="Menú"
            >
              <span className={`block w-5 h-0.5 bg-zinc-700 transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-zinc-700 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-zinc-700 transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-4 py-3 space-y-1">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block text-sm text-zinc-700 py-2 hover:text-blue-600">Inicio</Link>
          {CATEGORIES.map(cat => (
            <Link key={cat.label} href={cat.href} onClick={() => setMobileOpen(false)} className="block text-sm text-zinc-700 py-2 hover:text-blue-600">
              {cat.label}
            </Link>
          ))}
          <div className="border-t border-zinc-100 pt-2 mt-2 space-y-1">
            <Link href="/sobre-nosotros" onClick={() => setMobileOpen(false)} className="block text-sm text-zinc-700 py-2 hover:text-blue-600">Sobre nosotros</Link>
            <Link href="/contacto" onClick={() => setMobileOpen(false)} className="block text-sm text-zinc-700 py-2 hover:text-blue-600">Contacto</Link>
            <Link href="/privacidad" onClick={() => setMobileOpen(false)} className="block text-sm text-zinc-700 py-2 hover:text-blue-600">Privacidad</Link>
            <Link href="/#newsletter" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-blue-600 py-2">Newsletter gratis →</Link>
          </div>
        </div>
      )}

      {/* Nav categorías — desktop */}
      <div className="max-w-6xl mx-auto px-4">
        <nav className="hidden md:flex items-center gap-1 overflow-x-auto h-10">
          <Link href="/" className="flex-shrink-0 text-xs font-semibold text-blue-600 px-3 py-1.5 rounded hover:bg-blue-50 transition-colors">
            Inicio
          </Link>
          <span className="text-zinc-200 text-xs">|</span>
          {CATEGORIES.map(cat => (
            <Link
              key={cat.label}
              href={cat.href}
              className="flex-shrink-0 text-xs font-medium text-zinc-600 hover:text-blue-600 px-3 py-1.5 rounded hover:bg-blue-50 transition-colors"
            >
              {cat.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
