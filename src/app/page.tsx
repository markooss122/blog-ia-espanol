import { getAllPosts } from '@/lib/posts'
import ArticleGrid from '@/components/ArticleGrid'
import AdUnit from '@/components/AdUnit'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IA en Español — Guías y herramientas de inteligencia artificial',
  description: 'Guías prácticas, comparativas y tutoriales sobre las mejores herramientas IA en español. ChatGPT, Claude, Gemini y más.',
}

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="space-y-12">

      {/* Hero */}
      <section className="pt-4 pb-2">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">Blog</span>
          <span className="text-zinc-300">·</span>
          <span className="text-xs text-zinc-400">En español, sin tecnicismos</span>
        </div>
        <h1 className="text-4xl font-bold text-zinc-900 tracking-tight leading-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
          Inteligencia artificial<br />
          <span className="text-indigo-600">al alcance de todos</span>
        </h1>
        <p className="text-lg text-zinc-500 max-w-xl mb-6">
          Guías prácticas, comparativas y novedades sobre las mejores herramientas IA. Publicamos cada semana.
        </p>

        <form
          id="newsletter"
          action="https://formspree.io/f/xldndpwg"
          method="POST"
          className="flex gap-2 max-w-md"
        >
          <input
            type="email"
            name="email"
            placeholder="tu@email.com"
            required
            className="flex-1 px-4 py-2.5 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
          />
          <button
            type="submit"
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
          >
            Recibir guías
          </button>
        </form>
        <p className="text-xs text-zinc-400 mt-2">Sin spam. Cancela cuando quieras.</p>
      </section>

      <AdUnit slot="1234567890" format="horizontal" className="w-full h-24" />

      {/* Grid con filtros */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Artículos</h2>
          <span className="text-xs text-zinc-400">{posts.length} publicados</span>
        </div>
        <ArticleGrid posts={posts} />
      </section>

      <AdUnit slot="0987654321" format="rectangle" className="w-full h-48" />
    </div>
  )
}
