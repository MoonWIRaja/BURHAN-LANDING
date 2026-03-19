import type { Metadata } from "next"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { SectionHeading } from "@/components/section-heading"
import { ServerBuildSelector } from "@/components/server-build-selector"
import { deliverySteps } from "@/config/site"

export const metadata: Metadata = {
  title: "Custom Plan",
  description:
    "Select a BurHan Hosting server profile and shape your final game-server deployment through the console workflow.",
  alternates: {
    canonical: "/custom-plan",
  },
}

export default function CustomPlanPage() {
  return (
    <div className="space-y-24">
      <section className="section-shell pt-28 sm:pt-32">
        <SectionHeading
          eyebrow="Custom Plan"
          title="Start with the closest build profile, then shape the environment inside the console"
          description="The page replaces public pricing cards with a selector that helps frame the level of hosting you need. It is not pretending to finalize infrastructure from a single landing-page widget."
        />
      </section>

      <section className="section-shell">
        <ServerBuildSelector />
      </section>

      <section id="build-process" className="section-shell section-border pt-24">
        <SectionHeading
          eyebrow="Build Process"
          title="A simple deployment flow for the first release"
          description="The site explains just enough of the workflow to build confidence while keeping deeper operational work inside the console."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {deliverySteps.map((step, index) => (
            <Card key={step.title} className="glass-panel">
              <CardHeader>
                <p className="text-sm uppercase tracking-[0.18em] text-primary">Step {index + 1}</p>
                <CardTitle className="text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">{step.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
