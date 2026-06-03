import Link from 'next/link'
import { Post } from '@/types/post'

export default function ArticleCard({ post }: { post: Post }) {
  return (
    <article className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-sm transition-all bg-white">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
          {post.category}
        </span>
        <span className="text-xs text-gray-400">{post.readingTime}</span>
      </div>
      <Link href={`/articulos/${post.slug}`}>
        <h2 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-1">
          {post.title}
        </h2>
      </Link>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.description}</p>
      <div className="flex justify-between items-center">
        <time className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        <Link href={`/articulos/${post.slug}`} className="text-sm text-blue-600 hover:underline">
          Leer →
        </Link>
      </div>
    </article>
  )
}
