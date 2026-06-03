import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import AdUnit from '@/components/AdUnit'
import { marked } from 'marked'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
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

export default function ArticlePage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const htmlContent = marked(post.content)

  return (
    <article className="max-w-2xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded">{post.category}</span>
          <span className="text-xs text-gray-400">{post.readingTime}</span>
          <time className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{post.title}</h1>
        <p className="text-lg text-gray-600">{post.description}</p>
      </header>

      <AdUnit slot="1122334455" format="horizontal" className="w-full h-24 mb-8" />

      <div
        className="prose prose-gray max-w-none prose-headings:font-semibold prose-a:text-blue-600"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      <AdUnit slot="5544332211" format="rectangle" className="w-full h-48 mt-10" />
    </article>
  )
}
