import { Navigation } from '@/components/shared/navigation'
import { ScrollToTop } from '@/components/shared/scroll-to-top'
import { SnapshotHero } from '@/components/snapshot/snapshot-hero'
import { ValuePillars } from '@/components/value-pillars/value-pillars'
import { ImpactGallery } from '@/components/impact-gallery/impact-gallery'
import { Storyline } from '@/components/storyline/storyline'
import { Playground } from '@/components/playground/playground'
import { ContactSection } from '@/components/contact/contact-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Global Background Illustration - Full Width/Cover */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[url('/hero-bg-light.svg')] dark:bg-[url('/hero-bg-dark.svg')]"
      />
      
      {/* Global Gradient Overlay - Theme-aware */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/20 via-background/10 to-transparent dark:from-background/40 dark:via-background/20 dark:to-transparent sm:from-background/60 sm:via-background/30 sm:to-transparent dark:sm:from-background/90 dark:sm:via-background/50 dark:sm:to-transparent" />
      
      <div className="relative z-10">
        <Navigation />
        <main>
          <SnapshotHero />
          <ValuePillars />
          <ImpactGallery />
          <Storyline />
          <Playground />
          <ContactSection />
        </main>
      </div>
      <ScrollToTop />
    </div>
  )
}
