import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import AdUnit from '@/components/AdUnit'
import { marked } from 'marked'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      images: post.image ? [{ url: post.image, alt: post.imageAlt }] : [],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const htmlContent = await marked(post.content)
  const allPosts = getAllPosts()
  const related = allPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 4)
  const latest = allPosts.filter(p => p.slug !== slug).slice(0, 5)

  const date = new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="flex gap-6 items-start">

      {/* Contenido principal */}
      <div className="flex-1 min-w-0">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-zinc-400 mb-5">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span>›</span>
          <span className="text-zinc-600">{post.category}</span>
          <span>›</span>
          <span className="text-zinc-400 truncate max-w-[240px]">{post.title}</span>
        </nav>

        <article className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
          {/* Imagen destacada */}
          {post.image && (
            <div className="relative w-full h-72 overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 720px"
                priority
              />
            </div>
          )}

          <div className="p-6 md:p-8">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded uppercase tracking-wide">
                {post.category}
              </span>
              <span className="text-xs text-zinc-400">{post.readingTime}</span>
              <span className="text-zinc-200">·</span>
              <time className="text-xs text-zinc-400">{date}</time>
            </div>

            {/* Título */}
            <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4 leading-tight" style={{ fontFamily: 'Newsreader, Georgia, serif', letterSpacing: '-0.02em' }}>
              {post.title}
            </h1>

            {/* Entradilla destacada */}
            <p className="text-base text-zinc-600 leading-relaxed mb-6 border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 pr-4 rounded-r-lg">
              {post.description}
            </p>

            {/* Ad in-article */}
            <div className="mb-6">
              <AdUnit slot="1122334455" format="horizontal" className="w-full h-[90px]" />
            </div>

            {/* Contenido */}
            <div className="prose" dangerouslySetInnerHTML={{ __html: htmlContent }} />

            {/* Ad post-content */}
            <div className="mt-8">
              <AdUnit slot="5544332211" format="rectangle" className="w-full h-[250px]" />
            </div>

            {/* Autor y compartir */}
            <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">IA</div>
                <div>
                  <p className="text-xs font-semibold text-zinc-800">Equipo PulsoIA</p>
                  <p className="text-[10px] text-zinc-400">Publicado el {date}</p>
                </div>
              </div>
              <Link href="/" className="text-xs text-zinc-400 hover:text-blue-600 transition-colors">← Volver al inicio</Link>
            </div>
          </div>
        </article>

        {/* Artículos relacionados */}
        {related.length > 0 && (
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Artículos relacionados</span>
              <span className="flex-1 h-px bg-zinc-200" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {related.map(p => (
                <Link key={p.slug} href={`/articulos/${p.slug}`} className="bg-white border border-zinc-200 rounded-lg p-3 hover:border-blue-200 transition-colors group">
                  {p.image && (
                    <div className="relative w-full h-24 rounded overflow-hidden mb-2">
                      <Image src={p.image} alt={p.imageAlt || p.title} fill className="object-cover" sizes="200px" />
                    </div>
                  )}
                  <p className="text-xs font-bold text-zinc-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug" style={{ fontFamily: 'Newsreader, serif' }}>
                    {p.title}
                  </p>
                  <p className="text-[10px] text-zinc-400 mt-1">{p.readingTime}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col gap-5 w-72 flex-shrink-0">
        <div className="sticky top-[88px] flex flex-col gap-5">
          {/* Ad sidebar */}
          <AdUnit slot="0987654321" format="rectangle" className="w-full h-[250px]" />

          {/* Últimos artículos */}
          <div className="bg-white border border-zinc-200 rounded-xl p-4">
            <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3">Últimos artículos</p>
            <div className="space-y-3">
              {latest.map(p => (
                <Link key={p.slug} href={`/articulos/${p.slug}`} className="flex gap-2.5 group items-start">
                  {p.image && (
                    <div className="relative w-12 h-12 flex-shrink-0 rounded overflow-hidden">
                      <Image src={p.image} alt={p.title} fill className="object-cover" sizes="48px" />
                    </div>
                  )}
                  <p className="text-xs font-semibold text-zinc-700 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug" style={{ fontFamily: 'Newsreader, serif' }}>
                    {p.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Ad sidebar inferior */}
          <AdUnit slot="1234567890" format="rectangle" className="w-full h-[250px]" />
        </div>
      </aside>
    </div>
  )
}
