import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Separator } from "@workspace/ui/components/separator"
import { FloatingIconsHeroDemo } from "@/components/floating-icons-hero-demo"
import { OurStoryBentoGrid } from "@/components/our-story-bento-grid"
import { consoleUrl, serverBuildOptions } from "@/config/site"

export default function HomePage() {
  return (
    <div className="home-page-black">
      <FloatingIconsHeroDemo />

      <OurStoryBentoGrid />

      <section className="section-shell pt-24">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="space-y-6">
            <Badge variant="outline">Custom Plan</Badge>
            <h2 className="max-w-xl font-[family-name:var(--font-heading)] text-4xl font-semibold text-white">
              Public pricing cards are out. Custom server framing is in.
            </h2>
            <p className="max-w-xl text-base leading-8 text-muted-foreground">
              The site pushes users toward a custom-build selector instead of pretending every game
              community should fit the same public pricing ladder.
            </p>
            <Button asChild size="lg">
              <Link href="/custom-plan">
                Open Custom Plan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card className="glass-panel">
            <CardContent className="grid gap-3 p-6">
              {serverBuildOptions.map((option) => (
                <div
                  key={option.id}
                  className="rounded-2xl border border-border/60 bg-background/45 px-4 py-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-white">{option.label}</p>
                    <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Custom fit
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{option.capacity}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-shell pt-24">
        <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <Badge>Final CTA</Badge>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-white">
                When the build matters, send users straight to the console.
              </h2>
              <p className="text-base leading-8 text-muted-foreground">
                Orders, billing, and future support workflows are intentionally routed to one place.
                The marketing site stays focused. The operational surface does the rest.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href={consoleUrl}>Go to Console</a>
              </Button>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Custom builds instead of template-heavy pricing pages",
              "Modern premium visual direction with tactical depth",
              "A monorepo foundation ready for docs and future surfaces",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/60 bg-background/45 px-4 py-4 text-sm text-foreground/85"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
