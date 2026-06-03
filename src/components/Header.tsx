import Link from 'next/link'

const CATEGORIES = [
  { label: 'Comparativas', href: '/?cat=Comparativas' },
  { label: 'Tutoriales', href: '/?cat=Tutoriales' },
  { label: 'Herramientas', href: '/?cat=Herramientas' },
  { label: 'Automatización', href: '/?cat=Automatización' },
  { label: 'Novedades', href: '/?cat=Novedades' },
]

export default function Header() {
  return (
    <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
      {/* Top bar: logo + suscripción */}
      <div className="border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-12">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm font-bold">IA</span>
            <div className="leading-none">
              <span className="block font-bold text-zinc-900 text-base" style={{ fontFamily: 'Newsreader, Georgia, serif' }}>
                IA en Español
              </span>
              <span className="block text-[10px] text-zinc-400 tracking-wide uppercase">Inteligencia Artificial</span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/sobre-nosotros" className="text-xs text-zinc-500 hover:text-zinc-800 transition-colors hidden md:block">
              Sobre nosotros
            </Link>
            <Link href="/contacto" className="text-xs text-zinc-500 hover:text-zinc-800 transition-colors hidden md:block">
              Contacto
            </Link>
            <Link
              href="/#newsletter"
              className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded font-medium transition-colors"
            >
              Newsletter gratis
            </Link>
          </div>
        </div>
      </div>

      {/* Nav bar: categorías — patrón Xataka */}
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center gap-1 overflow-x-auto scrollbar-none h-10">
          <Link
            href="/"
            className="flex-shrink-0 text-xs font-semibold text-blue-600 px-3 py-1.5 rounded hover:bg-blue-50 transition-colors"
          >
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
