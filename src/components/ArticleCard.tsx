import Link from 'next/link'
import { Post } from '@/types/post'

interface ArticleCardProps {
  post: Post
  featured?: boolean
}

export default function ArticleCard({ post, featured = false }: ArticleCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  if (featured) {
    return (
      <article className="bg-white border border-zinc-200 rounded-xl p-6 hover:border-indigo-200 hover:shadow-md transition-all group">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-zinc-400">{post.readingTime}</span>
          <span className="text-zinc-200">·</span>
          <time className="text-xs text-zinc-400">{formattedDate}</time>
        </div>
        <Link href={`/articulos/${post.slug}`}>
          <h2 className="text-2xl font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors mb-2 tracking-tight" style={{ letterSpacing: '-0.01em' }}>
            {post.title}
          </h2>
        </Link>
        <p className="text-zinc-500 mb-4 leading-relaxed">{post.description}</p>
        <Link
          href={`/articulos/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          Leer artículo
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>
      </article>
    )
  }

  return (
    <article className="bg-white border border-zinc-200 rounded-xl p-5 hover:border-indigo-200 hover:shadow-sm transition-all group">
      <div className="flex items-center gap-2 mb-2.5">
        <span className="text-xs font-medium bg-zinc-50 text-zinc-600 px-2 py-0.5 rounded-full border border-zinc-100">
          {post.category}
        </span>
        <span className="text-xs text-zinc-400">{post.readingTime}</span>
      </div>
      <Link href={`/articulos/${post.slug}`}>
        <h2 className="text-base font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors mb-1.5 leading-snug tracking-tight">
          {post.title}
        </h2>
      </Link>
      <p className="text-sm text-zinc-500 mb-3 line-clamp-2 leading-relaxed">{post.description}</p>
      <div className="flex justify-between items-center pt-3 border-t border-zinc-100">
        <time className="text-xs text-zinc-400">{formattedDate}</time>
        <Link href={`/articulos/${post.slug}`} className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
          Leer →
        </Link>
      </div>
    </article>
  )
}
