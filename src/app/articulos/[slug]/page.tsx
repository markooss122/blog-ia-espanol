import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
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
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const htmlContent = await marked(post.content)

  const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="max-w-2xl mx-auto">

      <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
        <Link href="/" className="hover:text-zinc-600 transition-colors">Inicio</Link>
        <span>›</span>
        <Link href="/articulos" className="hover:text-zinc-600 transition-colors">Artículos</Link>
        <span>›</span>
        <span className="text-zinc-600 truncate max-w-[200px]">{post.title}</span>
      </nav>

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-zinc-400">{post.readingTime}</span>
            <span className="text-zinc-200">·</span>
            <time className="text-xs text-zinc-400">{formattedDate}</time>
          </div>

          <h1 className="text-3xl font-bold text-zinc-900 mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            {post.title}
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed border-l-2 border-indigo-200 pl-4">
            {post.description}
          </p>
        </header>

        <AdUnit slot="1122334455" format="horizontal" className="w-full h-24 mb-8" />

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        <AdUnit slot="5544332211" format="rectangle" className="w-full h-48 mt-10" />

        <div className="mt-10 pt-6 border-t border-zinc-100 flex items-center justify-between">
          <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-600 transition-colors">
            ← Volver al inicio
          </Link>
          <span className="text-xs text-zinc-400">IA en Español</span>
        </div>
      </article>
    </div>
  )
}
