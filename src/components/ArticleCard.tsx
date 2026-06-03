import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/types/post'

const CAT_COLORS: Record<string, string> = {
  'Comparativas': 'bg-violet-100 text-violet-700',
  'Tutoriales':   'bg-blue-100 text-blue-700',
  'Herramientas': 'bg-emerald-100 text-emerald-700',
  'Automatización': 'bg-orange-100 text-orange-700',
  'Novedades':    'bg-rose-100 text-rose-700',
  'General':      'bg-zinc-100 text-zinc-600',
}

interface Props {
  post: Post
  featured?: boolean
  compact?: boolean
}

export default function ArticleCard({ post, featured = false, compact = false }: Props) {
  const date = new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })
  const cat = CAT_COLORS[post.category] ?? CAT_COLORS['General']

  /* ── COMPACT: solo texto, para la columna lateral del hero ── */
  if (compact) {
    return (
      <article className="flex gap-3 group items-start bg-white border border-zinc-200 rounded-lg p-3 hover:border-blue-200 transition-colors">
        {post.image && (
          <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
            <Image src={post.image} alt={post.imageAlt || post.title} fill className="object-cover" sizes="64px" />
          </div>
        )}
        <div className="min-w-0">
          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${cat}`}>{post.category}</span>
          <Link href={`/articulos/${post.slug}`}>
            <h3 className="text-xs font-bold text-zinc-900 group-hover:text-blue-600 transition-colors mt-1 line-clamp-3 leading-snug" style={{ fontFamily: 'Newsreader, Georgia, serif' }}>
              {post.title}
            </h3>
          </Link>
          <p className="text-[10px] text-zinc-400 mt-1">{date}</p>
        </div>
      </article>
    )
  }

  /* ── FEATURED: imagen grande, título serif grande ── */
  if (featured) {
    return (
      <article className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-blue-200 hover:shadow-md transition-all group h-full flex flex-col">
        {post.image ? (
          <div className="relative w-full h-52 overflow-hidden">
            <Image src={post.image} alt={post.imageAlt || post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 600px" priority />
          </div>
        ) : (
          <div className="w-full h-44 bg-gradient-to-br from-blue-50 to-indigo-100" />
        )}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${cat}`}>{post.category}</span>
            <span className="text-[10px] text-zinc-400">{post.readingTime}</span>
            <span className="text-zinc-300 text-xs">·</span>
            <time className="text-[10px] text-zinc-400">{date}</time>
          </div>
          <Link href={`/articulos/${post.slug}`}>
            <h2 className="text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug" style={{ fontFamily: 'Newsreader, Georgia, serif' }}>
              {post.title}
            </h2>
          </Link>
          <p className="text-sm text-zinc-500 leading-relaxed mb-4 flex-1 line-clamp-3">{post.description}</p>
          <Link href={`/articulos/${post.slug}`} className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors">
            Leer artículo completo →
          </Link>
        </div>
      </article>
    )
  }

  /* ── STANDARD: imagen + texto, grid 2 col ── */
  return (
    <article className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-blue-200 hover:shadow-sm transition-all group flex flex-col">
      {post.image ? (
        <div className="relative w-full h-40 overflow-hidden">
          <Image src={post.image} alt={post.imageAlt || post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 400px" />
        </div>
      ) : (
        <div className="w-full h-32 bg-gradient-to-br from-zinc-50 to-blue-50" />
      )}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1.5">
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${cat}`}>{post.category}</span>
          <span className="text-[10px] text-zinc-400">{post.readingTime}</span>
        </div>
        <Link href={`/articulos/${post.slug}`}>
          <h2 className="text-sm font-bold text-zinc-900 group-hover:text-blue-600 transition-colors mb-1.5 leading-snug line-clamp-3" style={{ fontFamily: 'Newsreader, Georgia, serif' }}>
            {post.title}
          </h2>
        </Link>
        <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed flex-1">{post.description}</p>
        <div className="flex justify-between items-center mt-3 pt-2.5 border-t border-zinc-100">
          <time className="text-[10px] text-zinc-400">{date}</time>
          <Link href={`/articulos/${post.slug}`} className="text-[10px] font-semibold text-blue-600 hover:text-blue-800 transition-colors">Leer →</Link>
        </div>
      </div>
    </article>
  )
}
