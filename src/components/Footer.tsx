import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">IA</span>
              <span className="font-semibold text-zinc-900 text-sm">IA en Español</span>
            </div>
            <p className="text-xs text-zinc-400 max-w-xs">
              Guías prácticas sobre inteligencia artificial en español. Sin tecnicismos innecesarios.
            </p>
          </div>

          <nav className="flex gap-6 text-sm text-zinc-400">
            <Link href="/" className="hover:text-zinc-700 transition-colors">Inicio</Link>
            <Link href="/articulos" className="hover:text-zinc-700 transition-colors">Artículos</Link>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} IA en Español. Contenido informativo sobre inteligencia artificial.
          </p>
          <p className="text-xs text-zinc-300">
            Hecho con Next.js · Desplegado en Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
