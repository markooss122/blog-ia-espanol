import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
          IA en Español
        </Link>
        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">Inicio</Link>
          <Link href="/articulos" className="hover:text-gray-900 transition-colors">Artículos</Link>
        </nav>
      </div>
    </header>
  )
}
