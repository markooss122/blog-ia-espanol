import { getAllPosts } from '@/lib/posts'
import ArticleCard from '@/components/ArticleCard'
import AdUnit from '@/components/AdUnit'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IA en Español — Guías y herramientas de inteligencia artificial',
}

export default function Home() {
  const posts = getAllPosts()

  return (
    <div>
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Inteligencia artificial en español</h1>
        <p className="text-gray-600 text-lg">Guías prácticas, comparativas y tutoriales sobre las mejores herramientas IA. Sin tecnicismos innecesarios.</p>
      </section>

      <AdUnit slot="1234567890" format="horizontal" className="w-full h-24 mb-8" />

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Artículos recientes</h2>
        {posts.length === 0 ? (
          <p className="text-gray-500">Próximamente los primeros artículos.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map(post => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      <AdUnit slot="0987654321" format="rectangle" className="w-full h-48 mt-10" />
    </div>
  )
}
