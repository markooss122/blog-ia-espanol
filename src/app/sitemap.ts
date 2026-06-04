import { getAllPosts } from '@/lib/posts'
import { MetadataRoute } from 'next'

const BASE_URL = 'https://pulsoia.xyz'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const postUrls = posts.map(post => ({
    url: `${BASE_URL}/articulos/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/sobre-nosotros`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/contacto`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/privacidad`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/aviso-legal`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ...postUrls,
  ]
}
