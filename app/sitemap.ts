import type { MetadataRoute } from 'next'
import { siteConfig } from '@/src/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.links.website

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]
}
