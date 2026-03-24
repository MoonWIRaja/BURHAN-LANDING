import type { Metadata } from "next"
import Link from "next/link"

import { AboutGrid } from "@/components/marketing/about-grid"
import { ContactCta } from "@/components/marketing/contact-cta"
import { FeatureStrip } from "@/components/marketing/feature-strip"
import { HeroShapeComposition } from "@/components/marketing/hero-shape-composition"
import { ServicesGrid } from "@/components/marketing/services-grid"
import { StorySection } from "@/components/marketing/story-section"

export const metadata: Metadata = {
  title: "BURHANDEV - Digital Journey",
  description:
    "Discover the joy of effortless digital solutions with BurhanDev across hosting, design, development, and community experiences.",
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <section id="hero" className="relative flex min-h-[calc(100vh-96px)] flex-col bg-background">
        <div className="flex w-full flex-1 flex-col items-center gap-12 px-6 py-20 md:flex-row lg:px-10">
          <div className="w-full space-y-8 md:w-1/2">
            <h1 className="mb-4 font-[family-name:var(--font-serif)] text-5xl font-black italic leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Build your{" "}
              <span className="inline-block text-primary">
                journey
              </span>
              <br />
              with us.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              BurhanDev was born from the{" "}
              <span className="inline-block text-primary">
                vision of four young minds
              </span>
              , with a mission to build{" "}
              <span className="inline-block text-primary">
                friendly
              </span>
              ,{" "}
              <span className="inline-block text-primary">
                stable
              </span>
              , and{" "}
              <span className="inline-block text-primary">
                high-quality
              </span>{" "}
              services for all Malaysians.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/hosting"
                className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:bg-black dark:hover:bg-white dark:hover:text-black"
              >
                Explore Hosting
              </Link>
              <Link
                href="https://console.burhan.my/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-border bg-background px-7 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              >
                BURHAN CONSOLE
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <HeroShapeComposition />
          </div>
        </div>

        <FeatureStrip />
      </section>

      <section id="about" className="bg-background py-32 text-foreground">
        <div className="w-full px-6 lg:px-10">
          <div className="mx-auto mb-20 max-w-4xl text-center">
            <h2 className="mb-4 font-[family-name:var(--font-serif)] text-5xl font-black italic leading-[1.05] tracking-tight text-foreground md:text-6xl">
              ABOUT <span className="text-primary">US</span>
            </h2>
          </div>
          <AboutGrid />
        </div>
      </section>

      <section id="story" className="bg-background py-32 text-foreground">
        <div className="w-full px-6 lg:px-10">
          <div className="mb-24 text-center">
            <h2 className="mb-4 font-[family-name:var(--font-serif)] text-5xl font-black italic md:text-6xl">
              Our Story
            </h2>
            <p className="text-lg text-zinc-500">
              It all started with a <span className="font-bold italic text-primary">really big</span>{" "}
              dream
            </p>
          </div>
          <StorySection />
        </div>
      </section>

      <section id="services" className="bg-background py-32">
        <div className="w-full px-6 lg:px-10">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-foreground md:text-5xl">
              Discover the latest from BurhanDev
            </h2>
          </div>
          <ServicesGrid />
        </div>
      </section>

      <ContactCta />
    </div>
  )
}
