import { Cpu, LifeBuoy, ShieldCheck, SlidersHorizontal } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { SectionHeading } from "@/components/section-heading"
import { consoleUrl, featureCategories } from "@/config/site"

const categoryIcons = {
  performance: Cpu,
  security: ShieldCheck,
  "control-panel": SlidersHorizontal,
  support: LifeBuoy,
} as const

export default function FeaturesPage() {
  return (
    <div className="space-y-24">
      <section className="section-shell pt-28 sm:pt-32">
        <SectionHeading
          eyebrow="Feature Depth"
          title="A hosting surface designed around performance, control, and operator confidence"
          description="These sections stay focused on outcomes that matter to game-server operators: launch stability, security posture, console-led workflows, and support paths that respect infrastructure complexity."
        />
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-2">
          {featureCategories.map((category) => {
            const Icon = categoryIcons[category.id as keyof typeof categoryIcons]

            return (
              <Card key={category.id} className="glass-panel">
                <CardHeader className="space-y-4">
                  <Icon className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">
                      {category.eyebrow}
                    </p>
                    <CardTitle className="mt-3 text-white">{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl border border-primary/15 bg-primary/6 px-4 py-3 text-sm text-primary">
                    {category.metric}
                  </div>
                  {category.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-2xl border border-border/60 bg-background/45 px-4 py-3 text-sm leading-7 text-foreground/85"
                    >
                      {bullet}
                    </div>
                  ))}
                  <div className="rounded-2xl border border-amber-400/18 bg-amber-400/8 px-4 py-3 text-sm text-amber-100">
                    {category.accent}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="section-shell">
        <div className="glass-panel rounded-[1.8rem] p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-medium tracking-[0.22em] text-primary uppercase">
                Console-first flow
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-white">
                The marketing experience stays concise because the operational work moves to the
                console.
              </h2>
              <p className="text-base leading-8 text-muted-foreground">
                That separation keeps this site sharp while leaving room for billing, provisioning,
                and technical workflows to evolve in the proper product surface.
              </p>
            </div>
            <Button asChild size="lg">
              <a href={consoleUrl}>Go to Console</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
