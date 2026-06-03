'use client'

import { useState } from 'react'
import ArticleCard from './ArticleCard'
import { Post } from '@/types/post'

const CATEGORIES = ['Todos', 'Comparativas', 'Tutoriales', 'Novedades', 'Herramientas', 'Automatización']

export default function ArticleGrid({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? posts : posts.filter(p => p.category === active)
  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <div className="space-y-10">
      {/* Filtros de categoría */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
              active === cat
                ? 'bg-indigo-600 border-indigo-600 text-white'
                : 'border-zinc-200 text-zinc-600 hover:border-indigo-300 hover:text-indigo-600 bg-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Artículo destacado */}
      {featured && (
        <ArticleCard post={featured} featured />
      )}

      {/* Grid resto */}
      {rest.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {rest.map(post => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <p className="text-zinc-400 text-sm">No hay artículos en esta categoría todavía.</p>
      )}
    </div>
  )
}
