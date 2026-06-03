import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">

          {/* Marca */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <Image src="/logo.svg" alt="PulsoIA" width={32} height={32} />
              <span className="font-bold text-white text-lg" style={{ fontFamily: 'Newsreader, Georgia, serif' }}>
                PulsoIA
              </span>
            </div>
            <p className="text-xs leading-relaxed text-zinc-500 max-w-xs">
              El blog de referencia sobre inteligencia artificial en español. Guías prácticas, comparativas y tutoriales sin tecnicismos innecesarios.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3">Secciones</p>
            <nav className="space-y-2">
              {['Comparativas', 'Tutoriales', 'Herramientas', 'Automatización', 'Novedades'].map(c => (
                <Link key={c} href={`/?cat=${c}`} className="block text-xs text-zinc-500 hover:text-white transition-colors">{c}</Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3">Nosotros</p>
            <nav className="space-y-2">
              <Link href="/sobre-nosotros" className="block text-xs text-zinc-500 hover:text-white transition-colors">Sobre nosotros</Link>
              <Link href="/contacto" className="block text-xs text-zinc-500 hover:text-white transition-colors">Contacto</Link>
            </nav>
          </div>

          <div>
            <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3">Legal</p>
            <nav className="space-y-2">
              <Link href="/privacidad" className="block text-xs text-zinc-500 hover:text-white transition-colors">Política de privacidad</Link>
              <Link href="/aviso-legal" className="block text-xs text-zinc-500 hover:text-white transition-colors">Aviso legal</Link>
            </nav>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[11px] text-zinc-600">© {new Date().getFullYear()} PulsoIA. Todos los derechos reservados.</p>
          <p className="text-[11px] text-zinc-700">Este sitio utiliza cookies y publicidad de Google AdSense — <Link href="/privacidad" className="hover:text-zinc-500 underline transition-colors">Política de privacidad</Link></p>
        </div>
      </div>
    </footer>
  )
}
