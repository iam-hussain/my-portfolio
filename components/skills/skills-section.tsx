'use client'

import { skillClusters } from '@/lib/data/skill-clusters'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimateInView } from '@/components/ui/animate-in-view'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative section-padding scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24"
      aria-label="Skills section"
    >
      <div className="max-w-5xl mx-auto px-0">
        <AnimateInView className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-section-title font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
            AI Engineering, Backend, Frontend & Infrastructure
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            LangChain, LangGraph, RAG pipelines, Node.js, TypeScript, React, Next.js, AWS, Docker,
            Kubernetes
          </p>
        </AnimateInView>

        <AnimateInView delay={1}>
          <Tabs defaultValue={skillClusters[0].id} className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-1.5 sm:gap-2 p-2 sm:p-2.5 bg-bg-secondary rounded-xl border border-border-subtle">
              {skillClusters.map((cluster) => (
                <TabsTrigger
                  key={cluster.id}
                  value={cluster.id}
                  className="data-[state=active]:bg-bg-tertiary data-[state=active]:text-foreground data-[state=active]:border-[var(--accent-cyan)]/50 rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-medium text-muted-foreground border border-transparent transition-colors min-h-[40px] sm:min-h-[44px]"
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
                <div className="rounded-2xl border border-border-subtle bg-bg-card/70 backdrop-blur-sm p-4 sm:p-5 md:p-6">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {cluster.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg font-mono text-xs sm:text-sm border border-border-subtle bg-bg-secondary/80 text-foreground/90"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </AnimateInView>
      </div>
    </section>
  )
}
