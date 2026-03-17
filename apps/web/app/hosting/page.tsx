import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, CircleHelp, Headset, Star } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { FloatingIconsHeroDemo } from "@/components/floating-icons-hero-demo"
import { HostingReviewsCarousel, type HostingReview } from "@/components/hosting-reviews-carousel"
import { OurStoryBentoGrid } from "@/components/our-story-bento-grid"
import { discordUrl, serverBuildOptions } from "@/config/site"

export const metadata: Metadata = {
  title: "Hosting",
  description:
    "BurHan Hosting delivers custom-built game servers for Malaysian communities with console-first operations and launch-ready infrastructure.",
  alternates: {
    canonical: "/hosting",
  },
}

const hostingReviews: HostingReview[] = [
  {
    name: "Nicolas",
    date: "December 4, 2025",
    title: "Support that actually solves things",
    body:
      "Every time we needed help, the response was quick and useful. Setup felt smoother than our previous host and uptime stayed stable during events.",
  },
  {
    name: "Exotic Yeti",
    date: "November 24, 2025",
    title: "Best move for our community",
    body:
      "BurHan support is always patient and practical. We migrated without chaos, and the panel flow is easier for our moderators and admins.",
  },
  {
    name: "Tass",
    date: "December 6, 2025",
    title: "Reliable without excuses",
    body:
      "Hosting has stayed consistent for us and pricing feels fair for what we get. Team replies are clear, not copy-paste answers.",
  },
]

const hostingHelpChannels = [
  {
    title: "Discord Community",
    description:
      "Connect with fellow gamers, get quick support, and stay updated on the latest BurHan announcements.",
    cta: "Join Now",
    href: discordUrl,
    icon: "discord",
    iconClasses: "border-indigo-400/35 bg-indigo-500/18 text-indigo-200",
    ctaClasses: "text-lime-300",
  },
  {
    title: "24/7 Ticket Support",
    description:
      "Open a structured support ticket anytime for technical, billing, and migration request handling.",
    cta: "Get Support",
    href: "/ticket-support?source=hosting-help",
    icon: "support",
    iconClasses: "border-pink-400/35 bg-pink-500/18 text-pink-200",
    ctaClasses: "text-lime-300",
  },
  {
    title: "FAQs",
    description:
      "View frequently asked questions about live hosting flow, custom plans, and support routing.",
    cta: "Learn More",
    href: "/faq",
    icon: "faq",
    iconClasses: "border-amber-400/35 bg-amber-500/18 text-amber-100",
    ctaClasses: "text-lime-300",
  },
  {
    title: "Guides",
    description:
      "Explore hosting capabilities and operational features to understand how your setup is handled.",
    cta: "Learn More",
    href: "/features",
    icon: "guides",
    iconClasses: "border-lime-400/35 bg-lime-500/18 text-lime-200",
    ctaClasses: "text-lime-300",
  },
] as const

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.317 4.369A19.736 19.736 0 0 0 15.885 3a13.34 13.34 0 0 0-.599 1.234 18.223 18.223 0 0 0-5.573 0A13.32 13.32 0 0 0 9.106 3a19.741 19.741 0 0 0-4.438 1.372C1.857 8.569 1.096 12.662 1.477 16.7a19.902 19.902 0 0 0 6.101 3.088 15.136 15.136 0 0 0 1.31-2.11 12.748 12.748 0 0 1-2.063-.993c.173-.127.343-.26.507-.398a14.266 14.266 0 0 0 12.166 0c.165.138.335.27.507.398a12.812 12.812 0 0 1-2.063.993 15.146 15.146 0 0 0 1.31 2.11 19.874 19.874 0 0 0 6.102-3.089c.456-4.684-.78-8.74-3.198-12.329ZM8.02 14.121c-1.183 0-2.157-1.085-2.157-2.418 0-1.334.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.333-.946 2.418-2.157 2.418Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.418 0-1.334.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.333-.946 2.418-2.157 2.418Z" />
    </svg>
  )
}

function HelpIcon({ channel }: { channel: (typeof hostingHelpChannels)[number]["icon"] }) {
  if (channel === "discord") {
    return <DiscordIcon className="h-5 w-5" />
  }

  if (channel === "support") {
    return <Headset className="h-5 w-5" />
  }

  if (channel === "faq") {
    return <CircleHelp className="h-5 w-5" />
  }

  return <BookOpen className="h-5 w-5" />
}

export default function HostingPage() {
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

      <section className="section-shell pb-8 pt-24">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
          <div className="pointer-events-none absolute -left-20 top-14 h-44 w-44 rounded-full bg-primary/16 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 right-16 h-48 w-48 rounded-full bg-red-500/12 blur-3xl" />

          <div className="grid gap-10 xl:grid-cols-[0.34fr_0.66fr] xl:items-start">
            <div className="space-y-6">
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-white">
                What our players say
              </h2>
              <p className="text-base leading-8 text-muted-foreground">
                Trusted by communities that care about clean gameplay, quick support, and stable
                infrastructure.
              </p>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                <div className="rounded-2xl border border-white/12 bg-black/35 px-4 py-4">
                  <p className="text-4xl font-semibold text-white">7,500+</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    players have rated our servers and support
                  </p>
                </div>
                <div className="rounded-2xl border border-white/12 bg-black/35 px-4 py-4">
                  <p className="text-sm tracking-[0.16em] text-primary uppercase">We&apos;re rated</p>
                  <p className="mt-1 text-3xl font-semibold text-white">Excellent</p>
                  <div className="mt-3 flex gap-1.5">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <div
                        key={star}
                        className="rounded-md border border-emerald-300/25 bg-emerald-400/15 p-1.5 text-emerald-300"
                      >
                        <Star className="h-3.5 w-3.5 fill-current" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <HostingReviewsCarousel reviews={hostingReviews} />
          </div>
        </div>
      </section>

      <section className="section-shell pb-24 pt-16">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
          <div className="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full bg-indigo-500/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-lime-500/12 blur-3xl" />

          <div className="space-y-3">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-white">
              Need help?
            </h2>
            <p className="max-w-3xl text-base leading-8 text-muted-foreground">
              Choose the fastest channel for your situation. Community updates, ticket routing, and
              self-service resources all stay one click away.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {hostingHelpChannels.map((channel) => {
              const isExternal = channel.href.startsWith("http")

              return (
                <a
                  key={channel.title}
                  href={channel.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="group rounded-2xl border border-white/12 bg-black/40 p-5 transition hover:border-primary/45 hover:bg-black/55"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${channel.iconClasses}`}
                    >
                      <HelpIcon channel={channel.icon} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-white">{channel.title}</h3>
                      <p className="text-sm leading-7 text-muted-foreground">{channel.description}</p>
                    </div>
                  </div>
                  <span
                    className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold transition group-hover:translate-x-0.5 ${channel.ctaClasses}`}
                  >
                    {channel.cta}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
