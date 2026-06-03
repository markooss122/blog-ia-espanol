import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">IA</span>
              <span className="font-semibold text-zinc-900 text-sm">IA en Español</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Guías prácticas sobre inteligencia artificial en español. Sin tecnicismos innecesarios.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Contenido</p>
            <nav className="space-y-2">
              <Link href="/" className="block text-xs text-zinc-400 hover:text-zinc-700 transition-colors">Inicio</Link>
              <Link href="/sobre-nosotros" className="block text-xs text-zinc-400 hover:text-zinc-700 transition-colors">Sobre nosotros</Link>
              <Link href="/contacto" className="block text-xs text-zinc-400 hover:text-zinc-700 transition-colors">Contacto</Link>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Categorías</p>
            <nav className="space-y-2">
              <span className="block text-xs text-zinc-400">Comparativas</span>
              <span className="block text-xs text-zinc-400">Tutoriales</span>
              <span className="block text-xs text-zinc-400">Herramientas</span>
              <span className="block text-xs text-zinc-400">Automatización</span>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Legal</p>
            <nav className="space-y-2">
              <Link href="/privacidad" className="block text-xs text-zinc-400 hover:text-zinc-700 transition-colors">Política de Privacidad</Link>
              <Link href="/aviso-legal" className="block text-xs text-zinc-400 hover:text-zinc-700 transition-colors">Aviso Legal</Link>
            </nav>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} IA en Español. Todos los derechos reservados.
          </p>
          <p className="text-xs text-zinc-300">
            Hecho con Next.js · Desplegado en Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
