import { getAllPosts } from '@/lib/posts'
import ArticleGrid from '@/components/ArticleGrid'
import AdUnit from '@/components/AdUnit'
import ArticleCard from '@/components/ArticleCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IA en Español — Guías y herramientas de inteligencia artificial',
  description: 'Guías prácticas, comparativas y tutoriales sobre las mejores herramientas IA en español. ChatGPT, Claude, Gemini y más.',
}

export default function Home() {
  const posts = getAllPosts()
  const featured = posts[0]
  const secondary = posts.slice(1, 4)
  const rest = posts.slice(4)

  return (
    <div>
      {/* Ad banner superior — above the fold */}
      <div className="mb-5">
        <AdUnit slot="1234567890" format="horizontal" className="w-full h-[90px]" />
      </div>

      {/* Layout principal: contenido (2/3) + sidebar (1/3) */}
      <div className="flex gap-6 items-start">

        {/* Columna principal */}
        <div className="flex-1 min-w-0">

          {/* Hero: artículo destacado grande + 3 secundarios */}
          {featured && (
            <section className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">Lo más reciente</span>
                <span className="flex-1 h-px bg-zinc-200"></span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Featured grande — ocupa 2 columnas */}
                <div className="md:col-span-2">
                  <ArticleCard post={featured} featured />
                </div>
                {/* 3 artículos secundarios en columna */}
                <div className="flex flex-col gap-3">
                  {secondary.map(post => (
                    <ArticleCard key={post.slug} post={post} compact />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Ad in-content */}
          <div className="mb-6">
            <AdUnit slot="1122334455" format="horizontal" className="w-full h-[90px]" />
          </div>

          {/* Grid principal con filtros */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Todos los artículos</span>
              <span className="flex-1 h-px bg-zinc-200"></span>
              <span className="text-[10px] text-zinc-400">{posts.length} publicados</span>
            </div>
            <ArticleGrid posts={posts} />
          </section>
        </div>

        {/* Sidebar — estilo Xataka/Genbeta */}
        <aside className="hidden lg:flex flex-col gap-5 w-72 flex-shrink-0">
          {/* Ad sidebar sticky */}
          <div className="sticky top-[88px]">
            <AdUnit slot="0987654321" format="rectangle" className="w-full h-[250px]" />
          </div>

          {/* Newsletter CTA */}
          <div className="bg-white border border-zinc-200 rounded-xl p-5">
            <p className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-2">Newsletter</p>
            <h3 className="text-base font-bold text-zinc-900 mb-1" style={{ fontFamily: 'Newsreader, serif' }}>
              IA en tu bandeja de entrada
            </h3>
            <p className="text-xs text-zinc-500 mb-3 leading-relaxed">
              Las guías y novedades más importantes sobre IA cada semana. Gratis.
            </p>
            <form action="https://formspree.io/f/xldndpwg" method="POST" className="space-y-2" id="newsletter">
              <input
                type="email"
                name="email"
                required
                placeholder="tu@email.com"
                className="w-full px-3 py-2 text-xs border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
              <button type="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors">
                Suscribirme gratis
              </button>
            </form>
            <p className="text-[10px] text-zinc-400 mt-2 text-center">Sin spam. Cancela cuando quieras.</p>
          </div>

          {/* Artículos más leídos */}
          <div className="bg-white border border-zinc-200 rounded-xl p-5">
            <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3">Más leídos</p>
            <div className="space-y-3">
              {posts.slice(0, 5).map((post, i) => (
                <a key={post.slug} href={`/articulos/${post.slug}`} className="flex gap-2.5 group items-start">
                  <span className="text-xl font-bold text-zinc-100 leading-none w-5 flex-shrink-0 group-hover:text-blue-200 transition-colors" style={{ fontFamily: 'Newsreader, serif' }}>
                    {i + 1}
                  </span>
                  <span className="text-xs font-medium text-zinc-700 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Ad sidebar inferior */}
          <AdUnit slot="5544332211" format="rectangle" className="w-full h-[250px]" />
        </aside>
      </div>
    </div>
  )
}
