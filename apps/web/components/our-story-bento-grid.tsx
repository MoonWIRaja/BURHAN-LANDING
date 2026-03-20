"use client"

import { Globe, Headset, LibraryBig, Rocket, ShieldCheck } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@/lib/utils"

const leftFeatureCards = [
  {
    title: "100% Uptime",
    description: "That is not a typo. Network stability and operational uptime are built into our SLA mindset.",
    icon: Globe,
    accent: "emerald",
    className: "xl:mr-10",
  },
  {
    title: "24/7 Support",
    description: "Our support team is available around the clock to help with issues, migrations, and tuning.",
    icon: Headset,
    accent: "slate",
    className: "xl:-ml-8",
  },
  {
    title: "Free Subdomain",
    description: "Get a clean custom IP address path using our subdomain creator for easier player access.",
    icon: Globe,
    accent: "blue",
    className: "xl:ml-6",
  },
] as const

const rightFeatureCards = [
  {
    title: "Instant Setup",
    description: "Start hosting in seconds after purchasing your game server and getting scoped correctly.",
    icon: Rocket,
    accent: "amber",
    className: "xl:ml-10",
  },
  {
    title: "DDoS Protection",
    description: "We guarantee protective layers and infrastructure-first handling against disruptive attack traffic.",
    icon: ShieldCheck,
    accent: "rose",
    className: "xl:mr-6",
  },
  {
    title: "Expanding Game Library",
    description: "Our team is constantly adding and refining support for the games communities actually run.",
    icon: LibraryBig,
    accent: "violet",
    className: "xl:ml-4",
  },
] as const

const accentClasses = {
  emerald: "border-emerald-500/55 shadow-[0_18px_50px_-35px_rgba(16,185,129,0.4)]",
  amber: "border-amber-500/55 shadow-[0_18px_50px_-35px_rgba(245,158,11,0.38)]",
  slate: "border-slate-500/45 shadow-[0_18px_50px_-35px_rgba(71,85,105,0.35)]",
  rose: "border-rose-500/55 shadow-[0_18px_50px_-35px_rgba(244,63,94,0.38)]",
  blue: "border-blue-500/55 shadow-[0_18px_50px_-35px_rgba(59,130,246,0.4)]",
  violet: "border-violet-500/55 shadow-[0_18px_50px_-35px_rgba(139,92,246,0.4)]",
} as const

function FeatureCard({
  title,
  description,
  icon: Icon,
  accent,
  className,
}: {
  title: string
  description: string
  icon: typeof Globe
  accent: keyof typeof accentClasses
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-[1.5rem] border bg-card/85 p-5 backdrop-blur-xl transition-transform duration-300 dark:bg-card/80",
        accentClasses[accent],
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background/70 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
          <Icon className="h-6 w-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold leading-tight text-foreground">{title}</h3>
          <p className="text-sm leading-7 text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}

export function OurStoryBentoGrid() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08),transparent_34%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.12),transparent_34%)]" />

      <div className="relative z-10 w-full px-6 lg:px-10">
        <div className="grid items-center gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(24rem,0.88fr)_minmax(0,1fr)]">
          <div className="grid gap-5 xl:-rotate-1">
            {leftFeatureCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>

          <div className="mx-auto max-w-lg px-2 text-center xl:-translate-y-2">
            <Badge className="rounded-full border-primary/15 bg-primary/5 px-3 py-1 text-[11px] tracking-[0.24em] text-primary uppercase">
              Hosting Features
            </Badge>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl xl:text-[3.4rem]">
              EXCLUSIVE FEATURES
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              We offer a wide variety of features that enhance your gaming experience and provide
              the most practical hosting hardware at the best possible value.
            </p>
          </div>

          <div className="grid gap-5 xl:rotate-1">
            {rightFeatureCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
