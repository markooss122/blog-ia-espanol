import { getAllPosts } from '@/lib/posts'
import ArticleCard from '@/components/ArticleCard'
import AdUnit from '@/components/AdUnit'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IA en Español — Guías y herramientas de inteligencia artificial',
  description: 'Guías prácticas, comparativas y tutoriales sobre las mejores herramientas IA en español. ChatGPT, Claude, Gemini y más.',
}

const CATEGORIES = ['Comparativas', 'Tutoriales', 'Novedades', 'Herramientas', 'Automatización']

export default function Home() {
  const posts = getAllPosts()
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <div className="space-y-16">

      {/* Hero — patrón Newsletter/Content First (UI/UX Pro Max) */}
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

        {/* Newsletter CTA — patrón recomendado por la skill */}
        <div id="newsletter" className="flex gap-2 max-w-md">
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex-1 px-4 py-2.5 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
          />
          <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap">
            Recibir guías
          </button>
        </div>
        <p className="text-xs text-zinc-400 mt-2">Sin spam. Cancela cuando quieras.</p>
      </section>

      {/* Ad — horizontal banner */}
      <AdUnit slot="1234567890" format="horizontal" className="w-full h-24" />

      {/* Categorías */}
      <section>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <span
              key={cat}
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-zinc-200 text-zinc-600 hover:border-indigo-300 hover:text-indigo-600 cursor-pointer transition-colors bg-white"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Artículo destacado */}
      {featured && (
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Destacado</h2>
          </div>
          <ArticleCard post={featured} featured />
        </section>
      )}

      {/* Grid artículos recientes */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Artículos recientes</h2>
          <span className="text-xs text-zinc-400">{posts.length} artículos</span>
        </div>

        {posts.length === 0 ? (
          <p className="text-zinc-400 text-sm">Próximamente los primeros artículos.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {rest.map(post => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* Ad — rectangle */}
      <AdUnit slot="0987654321" format="rectangle" className="w-full h-48" />
    </div>
  )
}
