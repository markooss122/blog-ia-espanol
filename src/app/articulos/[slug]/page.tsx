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
    alternates: { canonical: `https://pulsoia.xyz/articulos/${slug}` },
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

  // Renderer personalizado: imágenes con lazy load y clase prose
  const renderer = new marked.Renderer()
  renderer.image = ({ href, title, text }) => {
    return `<img src="${href}" alt="${text || ''}" title="${title || ''}" loading="lazy" decoding="async" style="width:100%;border-radius:10px;margin:2rem 0 0.5rem;" />`
  }
  const htmlContent = await marked(post.content, { renderer })

  const allPosts = getAllPosts()

  // Schema.org JSON-LD para rich snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image || 'https://pulsoia.xyz/og',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Marcos Alcega',
      url: 'https://pulsoia.xyz/sobre-nosotros',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PulsoIA',
      url: 'https://pulsoia.xyz',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pulsoia.xyz/logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://pulsoia.xyz/articulos/${slug}`,
    },
  }
  const related = allPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 4)
  const latest = allPosts.filter(p => p.slug !== slug).slice(0, 5)

  const date = new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <>
      {/* Schema.org JSON-LD — rich snippets Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://pulsoia.xyz' },
              { '@type': 'ListItem', position: 2, name: post.category, item: `https://pulsoia.xyz/?cat=${post.category}` },
              { '@type': 'ListItem', position: 3, name: post.title, item: `https://pulsoia.xyz/articulos/${slug}` },
            ],
          })
        }}
      />

    <div className="flex gap-6 items-start">

      {/* Contenido principal */}
      <div className="flex-1 min-w-0">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-zinc-400 mb-5">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span>›</span>
          <Link href={`/?cat=${post.category}`} className="hover:text-blue-600 transition-colors">{post.category}</Link>
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
              <AdUnit slot="6872032276" format="horizontal" className="w-full h-[90px]" />
            </div>

            {/* Contenido */}
            <div className="prose" dangerouslySetInnerHTML={{ __html: htmlContent }} />

            {/* Ad post-content */}
            <div className="mt-8">
              <AdUnit slot="3354154815" format="rectangle" className="w-full h-[250px]" />
            </div>

            {/* Autor con E-E-A-T */}
            <div className="mt-8 pt-6 border-t border-zinc-100">
              <div className="flex items-start gap-4 bg-zinc-50 rounded-xl p-4">
                <img src="/autor.svg" alt="Marcos Alcega, editor de PulsoIA" width={48} height={48} className="w-12 h-12 rounded-full flex-shrink-0 border border-zinc-200" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-zinc-900">Marcos Alcega</p>
                  <p className="text-[11px] text-blue-600 font-medium mb-1">Editor y fundador de PulsoIA</p>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Especialista en herramientas de inteligencia artificial con más de 5 años analizando tecnología. Fundador de PulsoIA, el blog de referencia sobre IA en español. Anteriormente en medios tecnológicos digitales.
                  </p>
                  <p className="text-[10px] text-zinc-400 mt-1">Publicado el {date} · <Link href="/sobre-nosotros" className="hover:text-blue-600 transition-colors underline">Sobre el autor</Link></p>
                </div>
              </div>
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
          <AdUnit slot="5100775284" format="rectangle" className="w-full h-[250px]" />

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

          {/* sidebar inferior — reservado para cuando se creen slots reales */}
        </div>
      </aside>
    </div>
    </>
  )
}
