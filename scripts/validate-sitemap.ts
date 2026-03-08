/**
 * Validates sitemap structure against sitemaps.org protocol.
 * Run: npx tsx scripts/validate-sitemap.ts
 */
import sitemap from '../app/sitemap'

const VALID_CHANGEFREQ = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'] as const

function validateSitemap(): void {
  const entries = sitemap()
  const errors: string[] = []

  if (!Array.isArray(entries) || entries.length === 0) {
    errors.push('Sitemap must return a non-empty array')
  }

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]
    if (!entry || typeof entry !== 'object') {
      errors.push(`Entry ${i + 1}: must be an object`)
      continue
    }

    if (!entry.url || typeof entry.url !== 'string') {
      errors.push(`Entry ${i + 1}: missing or invalid 'url' (required)`)
    } else {
      try {
        new URL(entry.url)
      } catch {
        errors.push(`Entry ${i + 1}: invalid URL "${entry.url}"`)
      }
      if (entry.url.length > 2048) {
        errors.push(`Entry ${i + 1}: URL exceeds 2048 characters`)
      }
    }

    if (entry.changeFrequency && !VALID_CHANGEFREQ.includes(entry.changeFrequency as (typeof VALID_CHANGEFREQ)[number])) {
      errors.push(`Entry ${i + 1}: invalid changefreq "${entry.changeFrequency}"`)
    }

    if (entry.priority != null) {
      const p = Number(entry.priority)
      if (Number.isNaN(p) || p < 0 || p > 1) {
        errors.push(`Entry ${i + 1}: priority must be 0.0–1.0, got ${entry.priority}`)
      }
    }

    if (entry.lastModified != null && !(entry.lastModified instanceof Date)) {
      errors.push(`Entry ${i + 1}: lastModified must be a Date`)
    }
  }

  if (errors.length > 0) {
    console.error('Sitemap validation failed:\n')
    errors.forEach((e) => console.error('  •', e))
    process.exit(1)
  }

  console.log(`✓ Sitemap valid: ${entries.length} URL(s)`)
}

validateSitemap()
