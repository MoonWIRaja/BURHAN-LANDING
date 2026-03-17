import type { Metadata } from "next"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { businessUnits } from "@/config/site"

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return businessUnits.map((unit) => ({ slug: unit.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const unit = businessUnits.find((entry) => entry.slug === slug)

  if (!unit) {
    return {
      title: "Service",
    }
  }

  if (unit.slug === "hosting") {
    return {
      title: "Hosting",
      alternates: {
        canonical: "/hosting",
      },
    }
  }

  return {
    title: unit.name,
    description: unit.description,
    alternates: {
      canonical: `/services/${unit.slug}`,
    },
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const unit = businessUnits.find((entry) => entry.slug === slug)

  if (!unit) {
    notFound()
  }

  if (unit.slug === "hosting") {
    redirect("/hosting")
  }

  return (
    <div className="space-y-20">
      <section className="section-shell pt-28 sm:pt-32">
        <Badge variant="outline">Service Preview</Badge>
        <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-semibold text-white sm:text-5xl">
          {unit.name}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">{unit.description}</p>
      </section>

      <section className="section-shell pb-24">
        <Card className="glass-panel">
          <CardHeader className="space-y-4">
            <span className="w-fit rounded-full border border-amber-300/35 bg-amber-500/12 px-4 py-1 text-[0.68rem] font-medium tracking-[0.16em] text-amber-100 uppercase">
              Coming Soon
            </span>
            <CardTitle className="text-3xl text-white">Expected launch window: {unit.launchWindow}</CardTitle>
            <CardDescription>{unit.oneLiner}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="max-w-3xl text-sm leading-7 text-foreground/85">
              We are currently collecting early-access interest while this service is in development.
              Share your use case and we will contact you as launch milestones are confirmed.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={unit.primaryCta.href}>
                  {unit.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Back to Services</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
