import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/types/post'

const CATEGORY_COLORS: Record<string, string> = {
  'Comparativas': 'bg-violet-50 text-violet-700',
  'Tutoriales': 'bg-blue-50 text-blue-700',
  'Herramientas': 'bg-emerald-50 text-emerald-700',
  'Automatización': 'bg-orange-50 text-orange-700',
  'Novedades': 'bg-rose-50 text-rose-700',
  'General': 'bg-zinc-50 text-zinc-600',
}

interface ArticleCardProps {
  post: Post
  featured?: boolean
}

export default function ArticleCard({ post, featured = false }: ArticleCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
  const catColor = CATEGORY_COLORS[post.category] || CATEGORY_COLORS['General']

  if (featured) {
    return (
      <article className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-indigo-200 hover:shadow-md transition-all group">
        {post.image && (
          <div className="relative w-full h-52 overflow-hidden">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )}
        {!post.image && (
          <div className="w-full h-40 bg-gradient-to-br from-indigo-50 to-violet-100 flex items-center justify-center">
            <span className="text-4xl opacity-30">🤖</span>
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${catColor}`}>
              {post.category}
            </span>
            <span className="text-xs text-zinc-400">{post.readingTime}</span>
            <span className="text-zinc-200">·</span>
            <time className="text-xs text-zinc-400">{formattedDate}</time>
          </div>
          <Link href={`/articulos/${post.slug}`}>
            <h2 className="text-xl font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors mb-2 leading-snug" style={{ letterSpacing: '-0.01em' }}>
              {post.title}
            </h2>
          </Link>
          <p className="text-zinc-500 text-sm leading-relaxed mb-4">{post.description}</p>
          <Link href={`/articulos/${post.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
            Leer artículo <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>
      </article>
    )
  }

  return (
    <article className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-indigo-200 hover:shadow-sm transition-all group flex flex-col">
      {post.image && (
        <div className="relative w-full h-36 overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      )}
      {!post.image && (
        <div className="w-full h-28 bg-gradient-to-br from-zinc-50 to-indigo-50 flex items-center justify-center">
          <span className="text-3xl opacity-20">🤖</span>
        </div>
      )}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${catColor}`}>
            {post.category}
          </span>
          <span className="text-xs text-zinc-400">{post.readingTime}</span>
        </div>
        <Link href={`/articulos/${post.slug}`}>
          <h2 className="text-sm font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors mb-1.5 leading-snug">
            {post.title}
          </h2>
        </Link>
        <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed flex-1">{post.description}</p>
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-zinc-100">
          <time className="text-xs text-zinc-400">{formattedDate}</time>
          <Link href={`/articulos/${post.slug}`} className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
            Leer →
          </Link>
        </div>
      </div>
    </article>
  )
}
