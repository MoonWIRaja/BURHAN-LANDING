import type { Metadata } from "next"
import { ArrowUpRight, SquareTerminal } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { SectionHeading } from "@/components/section-heading"
import { consoleUrl, contactCards, deliverySteps, discordUrl } from "@/config/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BurHan Hosting through the console workflow and Discord to discuss custom game server builds.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="space-y-24">
      <section className="section-shell pt-28 sm:pt-32">
        <SectionHeading
          eyebrow="Contact"
          title="The first release treats the console as the operational front door"
          description="Support channels are intentionally kept minimal for now. The site explains the flow and keeps the main action obvious: go to the console for ordering, billing, and future request paths."
        />
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="text-white">Primary contact surface</CardTitle>
              <CardDescription>
                BurHan Hosting wants serious actions to start from the correct product surface.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-[1.35rem] border border-primary/18 bg-primary/8 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">Main CTA</p>
                <h3 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">
                  Go to Console
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                  Orders, billing, and future support flows are anchored there, so the marketing
                  site does not turn into a partial billing product.
                </p>
              </div>
              <Button asChild size="lg" className="w-full justify-between">
                <a href={consoleUrl}>
                  Open Console
                  <SquareTerminal className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full justify-between">
                <a href={discordUrl} target="_blank" rel="noreferrer">
                  Join Discord
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
          <div className="grid gap-5">
            {contactCards.map((card) => (
              <Card key={card.title} className="glass-panel">
                <CardHeader>
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">{card.status}</p>
                  <CardTitle className="text-white">{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-border pt-24">
        <SectionHeading
          eyebrow="How Requests Flow"
          title="Operational paths are already shaped, even before every channel is public"
          description="This keeps the first launch coherent: the site establishes trust, then hands users into the console instead of scattering them across disconnected support surfaces."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {deliverySteps.map((step) => (
            <Card key={step.title} className="glass-panel">
              <CardHeader>
                <CardTitle className="text-white">{step.title}</CardTitle>
                <CardDescription>{step.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="outline" size="lg">
            <a href={consoleUrl}>
              Console entry point
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
