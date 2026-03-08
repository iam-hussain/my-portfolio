'use client'

import dynamic from 'next/dynamic'

const sectionFallback = <div className="min-h-[200px]" aria-hidden="true" />

const AboutSection = dynamic(
  () => import('@/components/about/about-section').then((m) => ({ default: m.AboutSection })),
  { loading: () => sectionFallback }
)

const FeaturedProjects = dynamic(
  () =>
    import('@/components/featured-projects/featured-projects').then((m) => ({
      default: m.FeaturedProjects,
    })),
  { loading: () => sectionFallback }
)

const Storyline = dynamic(
  () => import('@/components/storyline/storyline').then((m) => ({ default: m.Storyline })),
  { loading: () => sectionFallback }
)

const SkillsSection = dynamic(
  () =>
    import('@/components/skills/skills-section').then((m) => ({ default: m.SkillsSection })),
  { loading: () => sectionFallback }
)

const ContactSection = dynamic(
  () =>
    import('@/components/contact/contact-section').then((m) => ({ default: m.ContactSection })),
  { loading: () => sectionFallback }
)

const ScrollToTop = dynamic(
  () =>
    import('@/components/shared/scroll-to-top').then((m) => ({ default: m.ScrollToTop })),
  { ssr: false }
)

export function BelowFoldSections() {
  return (
    <>
      <AboutSection />
      <FeaturedProjects />
      <Storyline />
      <SkillsSection />
      <ContactSection />
      <ScrollToTop />
    </>
  )
}
