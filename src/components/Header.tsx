import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-0">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">IA</span>
            <span className="font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors text-[15px] tracking-tight">
              IA en Español
            </span>
          </Link>

          <nav className="flex items-center gap-1">
            <Link
              href="/"
              className="text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 px-3 py-1.5 rounded-md transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/articulos"
              className="text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 px-3 py-1.5 rounded-md transition-colors"
            >
              Artículos
            </Link>
            <a
              href="#newsletter"
              className="ml-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-md transition-colors font-medium"
            >
              Suscribirse
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
