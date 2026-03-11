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
      {
        userAgent: ['Googlebot', 'Bingbot'],
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended'],
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
