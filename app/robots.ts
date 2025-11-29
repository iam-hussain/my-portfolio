import { MetadataRoute } from 'next'
import { siteConfig } from '@/src/config/site'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.links.website

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

