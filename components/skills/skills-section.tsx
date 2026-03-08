'use client'

import { skillClusters } from '@/lib/data/skill-clusters'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimateInView } from '@/components/ui/animate-in-view'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-36 md:scroll-mt-40"
      aria-label="Skills section"
    >
      <div className="max-w-5xl mx-auto">
        <AnimateInView className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            AI Engineering, Backend, Frontend & Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            LangChain, LangGraph, RAG pipelines, Node.js, TypeScript, React, Next.js, AWS, Docker,
            Kubernetes
          </p>
        </AnimateInView>

        <AnimateInView delay={1}>
          <Tabs defaultValue={skillClusters[0].id} className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-2 p-2 bg-bg-secondary rounded-xl border border-border-subtle">
              {skillClusters.map((cluster) => (
                <TabsTrigger
                  key={cluster.id}
                  value={cluster.id}
                  className="data-[state=active]:bg-bg-tertiary data-[state=active]:text-foreground data-[state=active]:border-[var(--accent-cyan)]/50 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground border border-transparent transition-colors"
                >
                  {cluster.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {skillClusters.map((cluster) => (
              <TabsContent
                key={cluster.id}
                value={cluster.id}
                className="mt-6 focus-visible:outline-none"
              >
                <div className="rounded-2xl border border-border-subtle bg-bg-card/70 backdrop-blur-sm p-6">
                  <div className="flex flex-wrap gap-2">
                    {cluster.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg font-mono text-sm border border-border-subtle bg-bg-secondary/80 text-foreground/90"
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
