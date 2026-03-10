"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@/lib/utils"
import { ourStoryCards, ourStoryValues } from "@/config/site"

interface BentoItemProps {
  className?: string
  children: React.ReactNode
}

function StoryBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge variant="outline" className="w-fit border-border/80 bg-background/40 text-foreground/80">
      {children}
    </Badge>
  )
}

function BentoItem({ className, children }: BentoItemProps) {
  const itemRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const item = itemRef.current

    if (!item) {
      return
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = item.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      item.style.setProperty("--mouse-x", `${x}px`)
      item.style.setProperty("--mouse-y", `${y}px`)
    }

    item.addEventListener("mousemove", handleMouseMove)

    return () => {
      item.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={itemRef} className={cn("story-bento-item", className)}>
      {children}
    </div>
  )
}

export function OurStoryBentoGrid() {
  const [missionCard, promiseCard, founderCard] = ourStoryCards
  const painPoints = ["Hidden node practices", "Lag spikes", "Crash-heavy sessions"]

  return (
    <section className="our-story-shell relative z-20 -mt-12">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10">
        <div className="our-story-frame">
          <div className="our-story-header">
            <div className="our-story-header-copy">
              <Badge variant="outline">Our Story</Badge>
              <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-heading)] text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Why we stepped into game hosting in the first place.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                We are gamers ourselves. Playing games is one of our hobbies, and hosting private
                servers for our own sessions became part of that journey.
              </p>
            </div>
            <div className="our-story-values-grid">
              {ourStoryValues.map((value) => (
                <div key={value} className="our-story-value-box">
                  <span className="our-story-value-dot" />
                  <p className="text-sm font-medium text-foreground/88">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="story-bento-grid">
            <BentoItem className="xl:col-span-2 xl:row-span-2">
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="space-y-4">
                  <StoryBadge>Built by gamers</StoryBadge>
                  <h3 className="max-w-xl text-2xl font-semibold text-white sm:text-3xl">
                    We built BurHan Hosting because we were tired of losing the fun to unstable
                    servers.
                  </h3>
                  <p className="max-w-2xl text-sm leading-7 text-foreground/85">
                    When we looked at game hosting options in Malaysia, we kept seeing the same
                    issue: too many providers were not fully honest about how their servers were
                    actually handled behind the scenes.
                  </p>
                  <p className="max-w-2xl text-sm leading-7 text-foreground/85">
                    That usually turned into lag spikes, crashes, and inconsistent performance that
                    took the excitement out of playing with friends. BurHan Hosting was built because
                    we wanted to give local players a better experience.
                  </p>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {painPoints.map((point) => (
                    <div key={point} className="our-story-sub-box">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </BentoItem>

            <BentoItem>
              <StoryBadge>{missionCard.title}</StoryBadge>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Affordable hosting for Malaysia.
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{missionCard.body}</p>
            </BentoItem>

            <BentoItem>
              <StoryBadge>{promiseCard.title}</StoryBadge>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Better performance without the usual excuses.
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{promiseCard.body}</p>
            </BentoItem>

            <BentoItem className="md:col-span-2 xl:col-span-1 xl:row-span-2">
              <StoryBadge>{founderCard.title}</StoryBadge>
              <div className="our-story-quote-box mt-4">
                <p className="text-lg leading-8 text-white/92">{founderCard.body}</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                That mindset is the core of BURHANDEV: if people can play together smoothly, relax,
                and enjoy the moment, then we are doing the right thing.
              </p>
            </BentoItem>

            <BentoItem className="md:col-span-2 xl:col-span-2">
              <StoryBadge>Service and honesty</StoryBadge>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Good service matters as much as raw server specs.
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                We want our users to feel looked after. That means better treatment, clearer answers,
                and no dishonest replies when customers ask important questions about our service,
                setup, or infrastructure.
              </p>
            </BentoItem>

            <BentoItem>
              <StoryBadge>Local focus</StoryBadge>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Made for Malaysian players first.
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Our goal is simple: deliver a smoother, more trustworthy hosting option for people in
                Malaysia who just want their server to run properly and stay fun to play on.
              </p>
            </BentoItem>
          </div>
        </div>
      </div>
    </section>
  )
}
