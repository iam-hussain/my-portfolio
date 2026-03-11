"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/src/config/site";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const CENTER = { x: 50, y: 48 };

const constellationNodes = [
  {
    id: "about",
    label: "About",
    value: "8+",
    teaser: "Years Building",
    x: 15,
    y: 25,
    href: "#about",
  },
  {
    id: "projects",
    label: "Work",
    value: "15+",
    teaser: "Shipped Platforms",
    x: 85,
    y: 25,
    href: "#projects",
  },
  {
    id: "experience",
    label: "Journey",
    value: "5",
    teaser: "Engineering Roles",
    x: 12,
    y: 72,
    href: "#experience",
  },
  {
    id: "skills",
    label: "Stack",
    value: "40+",
    teaser: "Technologies",
    x: 88,
    y: 72,
    href: "#skills",
  },
  {
    id: "contact",
    label: "Connect",
    value: "\u2192",
    teaser: "Dubai / Remote",
    x: 50,
    y: 92,
    href: "#contact",
  },
];

function scrollTo(href: string) {
  document
    .querySelector(href)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ConstellationHero() {
  return (
    <section
      id="home"
      className="relative min-h-dvh flex items-center justify-center w-full overflow-hidden"
      aria-label="Hero section"
    >
      {/* Desktop constellation: SVG connection lines */}
      <svg
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {constellationNodes.map((node, i) => (
          <motion.path
            key={node.id}
            d={`M ${CENTER.x} ${CENTER.y} L ${node.x} ${node.y}`}
            stroke="var(--color-accent-cyan)"
            strokeWidth="0.06"
            fill="none"
            style={{ opacity: "var(--canvas-line-opacity)" }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.6 + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
        {/* Subtle radial rings at center */}
        {[12, 28, 44].map((r) => (
          <circle
            key={r}
            cx={CENTER.x}
            cy={CENTER.y}
            r={r}
            fill="none"
            stroke="var(--color-accent-cyan)"
            strokeWidth="0.03"
            style={{ opacity: "calc(var(--canvas-line-opacity) * 0.3)" }}
          />
        ))}
      </svg>

      {/* Desktop constellation nodes */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {constellationNodes.map((node, i) => (
          <motion.button
            key={node.id}
            onClick={() => scrollTo(node.href)}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group cursor-pointer"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.0 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-label={`Navigate to ${node.label}`}
          >
            <div className="relative px-5 py-3 rounded-2xl border border-border-subtle bg-bg-card/50 backdrop-blur-xl hover:border-accent-cyan/40 hover:bg-bg-card/70 transition-all duration-300 group-hover:scale-105">
              {/* Pulse dot */}
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-accent-cyan/50 group-hover:bg-accent-cyan animate-pulse" />
              <div className="font-mono text-2xl font-bold text-accent-cyan leading-none mb-1">
                {node.value}
              </div>
              <div className="text-[11px] text-muted-foreground leading-tight">
                {node.teaser}
              </div>
              <div className="text-[9px] font-mono text-foreground/40 mt-1.5 group-hover:text-accent-cyan transition-colors tracking-wider uppercase">
                {node.label} &rarr;
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Center identity — all breakpoints */}
      <div className="relative z-20 w-full max-w-3xl mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-24 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Status beacon */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-subtle bg-bg-card/50 backdrop-blur-xl mb-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-state-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-state-success" />
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              Open to opportunities
            </span>
          </motion.div>

          <h1 className="text-hero font-extrabold tracking-tight text-foreground mb-2">
            {siteConfig.personal.fullName}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-accent-cyan mb-2">
            {siteConfig.hero.headline}
          </p>

          <p className="text-sm sm:text-base text-muted-foreground font-mono mb-1.5 max-w-xl mx-auto">
            {siteConfig.hero.subheadline}
          </p>

          <p className="text-xs text-muted-foreground/60 font-mono mb-8 tracking-wide">
            {siteConfig.personal.location}
          </p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              onClick={() => scrollTo("#projects")}
              className="bg-accent-cyan text-white hover:opacity-90 min-h-[48px] px-8 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
              size="lg"
            >
              {siteConfig.ctaLabels.primaryHero}
            </Button>
            <Button
              onClick={() => scrollTo("#contact")}
              variant="secondary"
              className="border border-border-subtle min-h-[48px] px-8 rounded-xl font-semibold"
              size="lg"
            >
              {siteConfig.ctaLabels.secondaryHero}
            </Button>
            <Button
              asChild
              variant="secondary"
              className="border border-border-subtle min-h-[48px] px-8 rounded-xl font-semibold"
              size="lg"
            >
              <a
                href={siteConfig.links.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.ctaLabels.tertiaryHero}
              </a>
            </Button>
          </motion.div>

          {/* Social */}
          <motion.div
            className="flex gap-3 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {siteConfig.socialIcons
              .filter((s) => ["github", "linkedin", "email"].includes(s.type))
              .map((social) => {
                const Icon =
                  social.type === "github"
                    ? Github
                    : social.type === "linkedin"
                      ? Linkedin
                      : Mail;
                return (
                  <a
                    key={social.type}
                    href={social.href}
                    target={social.type !== "email" ? "_blank" : undefined}
                    rel={
                      social.type !== "email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="p-2.5 rounded-xl border border-border-subtle bg-bg-card/50 backdrop-blur-xl hover:border-accent-cyan/40 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label={`${social.type} profile`}
                  >
                    <Icon className="h-5 w-5 text-foreground" />
                  </a>
                );
              })}
          </motion.div>
        </motion.div>

        {/* Mobile: constellation nodes as grid */}
        <motion.div
          className="lg:hidden grid grid-cols-2 gap-2.5 mt-10 max-w-xs mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {constellationNodes.map((node) => (
            <button
              key={node.id}
              onClick={() => scrollTo(node.href)}
              className={`group px-4 py-3 rounded-xl border border-border-subtle bg-bg-card/40 backdrop-blur-xl hover:border-accent-cyan/40 transition-all text-left active:scale-[0.97] ${node.id === "contact" ? "col-span-2 text-center" : ""}`}
              aria-label={`Navigate to ${node.label}`}
            >
              <div className="font-mono text-lg font-bold text-accent-cyan leading-none mb-0.5">
                {node.value}
              </div>
              <div className="text-[11px] text-muted-foreground">
                {node.teaser}
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
