import { MetadataRoute } from 'next'

const BASE_URL = 'https://pulsoia.xyz'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
