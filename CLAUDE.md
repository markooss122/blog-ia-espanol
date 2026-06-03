# Proyecto: Blog IA en Español — Setup completo

Eres un agente de desarrollo. Ejecuta todas las tareas de este archivo en orden, sin pedir confirmación entre pasos. Si algo falla, corrígelo y continúa.

---

## Objetivo

Crear un blog informativo sobre herramientas de inteligencia artificial en español, optimizado para SEO y monetización con Google AdSense. Stack: Next.js 14 + App Router + TypeScript + Tailwind CSS. Deploy en Vercel.

---

## TAREA 1 — Inicializar el proyecto Next.js

Ejecuta en la terminal:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git
```

Cuando pregunte confirmaciones, acepta los valores por defecto.

---

## TAREA 2 — Instalar dependencias

```bash
npm install gray-matter next-mdx-remote reading-time
npm install @types/node --save-dev
```

---

## TAREA 3 — Estructura de carpetas

Crea esta estructura exacta:

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── articulos/
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ArticleCard.tsx
│   ├── AdUnit.tsx
│   └── TableOfContents.tsx
├── lib/
│   └── posts.ts
└── types/
    └── post.ts
content/
└── articulos/
    └── ejemplo-chat-gpt-vs-claude.md
public/
└── robots.txt
```

---

## TAREA 4 — Crear los archivos

### `src/types/post.ts`

```typescript
export interface Post {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readingTime: string
  content: string
}
```

---

### `src/lib/posts.ts`

```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDir = path.join(process.cwd(), 'content/articulos')

export function getAllPosts() {
  if (!fs.existsSync(postsDir)) return []
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  return files
    .map(filename => {
      const slug = filename.replace('.md', '')
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf-8')
      const { data, content } = matter(raw)
      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        category: data.category || 'General',
        readingTime: readingTime(content).text,
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string) {
  const filepath = path.join(postsDir, `${slug}.md`)
  if (!fs.existsSync(filepath)) return null
  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    category: data.category || 'General',
    readingTime: readingTime(content).text,
    content,
  }
}
```

---

### `src/components/AdUnit.tsx`

```tsx
'use client'

interface AdUnitProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal'
  className?: string
}

export default function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  // Reemplaza ca-pub-XXXXXXXXXX con tu Publisher ID de AdSense cuando lo tengas
  const publisherId = 'ca-pub-XXXXXXXXXX'

  if (publisherId === 'ca-pub-XXXXXXXXXX') {
    return (
      <div className={`bg-gray-100 border border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400 text-sm ${className}`}>
        [Espacio AdSense — slot: {slot}]
      </div>
    )
  }

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: 'block' }}
      data-ad-client={publisherId}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  )
}
```

---

### `src/components/Header.tsx`

```tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
          IA en Español
        </Link>
        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">Inicio</Link>
          <Link href="/articulos" className="hover:text-gray-900 transition-colors">Artículos</Link>
        </nav>
      </div>
    </header>
  )
}
```

---

### `src/components/Footer.tsx`

```tsx
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-4xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} IA en Español. Contenido informativo sobre inteligencia artificial.</p>
      </div>
    </footer>
  )
}
```

---

### `src/components/ArticleCard.tsx`

```tsx
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
```

---

### `src/app/layout.tsx`

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'IA en Español — Guías y herramientas de inteligencia artificial',
    template: '%s | IA en Español',
  },
  description: 'Guías, comparativas y tutoriales sobre herramientas de inteligencia artificial en español. ChatGPT, Claude, Gemini, n8n y más.',
  metadataBase: new URL('https://tu-dominio.com'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'IA en Español',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
```

---

### `src/app/page.tsx`

```tsx
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
```

---

### `src/app/articulos/[slug]/page.tsx`

```tsx
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import AdUnit from '@/components/AdUnit'
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
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <AdUnit slot="5544332211" format="rectangle" className="w-full h-48 mt-10" />
    </article>
  )
}
```

---

### `src/app/sitemap.ts`

```typescript
import { getAllPosts } from '@/lib/posts'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const baseUrl = 'https://tu-dominio.com'

  const postUrls = posts.map(post => ({
    url: `${baseUrl}/articulos/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    ...postUrls,
  ]
}
```

---

### `src/app/robots.ts`

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://tu-dominio.com/sitemap.xml',
  }
}
```

---

### `content/articulos/ejemplo-chat-gpt-vs-claude.md`

```markdown
---
title: "ChatGPT vs Claude: ¿Cuál es mejor en 2026?"
description: "Comparativa completa entre ChatGPT y Claude. Analizamos velocidad, calidad de respuestas, precio y casos de uso para ayudarte a elegir."
date: "2026-06-03"
category: "Comparativas"
---

## Introducción

ChatGPT y Claude son los dos asistentes de inteligencia artificial más usados en 2026. Ambos son potentes, pero tienen diferencias importantes que conviene conocer antes de elegir uno.

## Velocidad de respuesta

ChatGPT destaca por su velocidad en tareas cortas. Claude, en cambio, brilla en textos largos y análisis complejos.

## Calidad de escritura

Para redacción en español, Claude genera textos más naturales y con mejor estructura. ChatGPT tiende a ser más directo pero menos fluido.

## Precio

Ambos tienen plan gratuito con limitaciones. El plan de pago de ChatGPT cuesta $20/mes; Claude Pro también $20/mes.

## Conclusión

Si escribes mucho en español o necesitas análisis largos, Claude es mejor opción. Si priorizas velocidad e integración con otras herramientas de OpenAI, elige ChatGPT.
```

---

## TAREA 5 — Instalar dependencias adicionales para el renderizado markdown

```bash
npm install marked
```

Actualiza `src/app/articulos/[slug]/page.tsx` para usar `marked` y convertir el markdown a HTML:

Añade al inicio del archivo:
```typescript
import { marked } from 'marked'
```

Y en el componente, antes del return, añade:
```typescript
const htmlContent = marked(post.content)
```

Luego reemplaza `post.content` por `htmlContent` en el `dangerouslySetInnerHTML`.

---

## TAREA 6 — Verificar que el proyecto arranca

```bash
npm run dev
```

Comprueba que no hay errores en la terminal. La web debe estar disponible en http://localhost:3000.

Si hay errores de TypeScript, corrígelos.

---

## TAREA 7 — Inicializar Git y preparar para Vercel

```bash
git init
echo "node_modules\n.next\n.env*" > .gitignore
git add .
git commit -m "feat: setup inicial blog IA en español"
```

Luego muéstrame el mensaje: "Proyecto listo. Sube este repositorio a GitHub y conéctalo a Vercel. Cambia 'tu-dominio.com' en sitemap.ts, robots.ts y layout.tsx por tu dominio real cuando lo tengas."

---

## NOTAS FINALES

- Para añadir un artículo nuevo: crea un archivo `.md` en `content/articulos/` con el frontmatter (title, description, date, category)
- Para activar AdSense: reemplaza `ca-pub-XXXXXXXXXX` en `AdUnit.tsx` por tu Publisher ID real y añade el script de AdSense en `layout.tsx`
- El sitemap se genera automáticamente en `/sitemap.xml`
- Todos los artículos se generan como páginas estáticas (SSG) — velocidad máxima para SEO
