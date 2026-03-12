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
        // Major AI crawlers
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'Claude-Web',
          'anthropic-ai',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'Amazonbot',
          'Meta-ExternalAgent',
          'Meta-ExternalFetcher',
          'Bytespider',
          'CCBot',
          'YouBot',
          'Cohere-ai',
          'AI2Bot',
          'Diffbot',
          'ImagesiftBot',
          'Omgilibot',
        ],
        allow: ['/', '/llms.txt', '/llms-full.txt', '/.well-known/'],
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
