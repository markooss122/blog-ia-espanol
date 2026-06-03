'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ArticleCard from './ArticleCard'
import { Post } from '@/types/post'

const CATEGORIES = ['Todos', 'Comparativas', 'Tutoriales', 'Herramientas', 'Automatización', 'Novedades']

export default function ArticleGrid({ posts }: { posts: Post[] }) {
  const searchParams = useSearchParams()
  const catParam = searchParams.get('cat') || 'Todos'
  const [active, setActive] = useState(catParam)

  // Sync con el query param cuando cambia (clicks en el header)
  useEffect(() => {
    setActive(catParam)
  }, [catParam])

  const filtered = active === 'Todos' ? posts : posts.filter(p => p.category === active)

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
              active === cat
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'border-zinc-200 text-zinc-600 hover:border-blue-300 hover:text-blue-600 bg-white'
            }`}
          >
            {cat}
            <span className={`ml-1 text-[10px] ${active === cat ? 'text-blue-200' : 'text-zinc-400'}`}>
              {cat === 'Todos' ? posts.length : posts.filter(p => p.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-zinc-400 text-sm py-8">No hay artículos en esta categoría todavía.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {filtered.map(post => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
