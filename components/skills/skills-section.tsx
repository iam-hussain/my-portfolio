'use client'

import { skillClusters } from '@/lib/data/skill-clusters'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SectionReveal } from '@/components/canvas/section-reveal'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative section-padding scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24"
      aria-label="Skills section"
    >
      <div className="max-w-5xl mx-auto px-0">
        <SectionReveal className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-section-title font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            What I reach for when building &mdash; from AI orchestration to cloud infrastructure
          </p>
        </SectionReveal>

        <SectionReveal delay={1}>
          <Tabs defaultValue={skillClusters[0].id} className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-1.5 sm:gap-2 p-2 sm:p-2.5 glass-panel !rounded-xl">
              {skillClusters.map((cluster) => (
                <TabsTrigger
                  key={cluster.id}
                  value={cluster.id}
                  className="data-[state=active]:bg-accent-cyan/10 data-[state=active]:text-accent-cyan data-[state=active]:border-accent-cyan/30 rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-mono font-medium text-muted-foreground border border-transparent transition-all min-h-[40px] sm:min-h-[44px]"
                >
                  {cluster.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {skillClusters.map((cluster) => (
              <TabsContent
                key={cluster.id}
                value={cluster.id}
                className="mt-4 sm:mt-6 focus-visible:outline-none"
              >
                <div className="glass-panel p-4 sm:p-5 md:p-6 space-y-3">
                  {cluster.primary && cluster.primary.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {cluster.primary.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg font-mono text-xs sm:text-sm border border-accent-cyan/30 bg-accent-cyan/8 text-foreground font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {cluster.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg font-mono text-xs sm:text-sm border border-border-subtle bg-bg-secondary/40 text-foreground/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </SectionReveal>
      </div>
    </section>
  )
}
