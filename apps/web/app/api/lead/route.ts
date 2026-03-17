import { NextResponse } from "next/server"

import { businessUnits } from "@/config/site"

interface LeadRequestBody {
  name?: string
  email?: string
  service?: string
  message?: string
  sourcePage?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const allowedServices: Set<string> = new Set(
  businessUnits
    .filter((unit) => unit.status === "coming_soon")
    .map((unit) => unit.slug),
)

export async function POST(request: Request) {
  let body: LeadRequestBody

  try {
    body = (await request.json()) as LeadRequestBody
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON payload." },
      { status: 400 },
    )
  }

  const name = body.name?.trim() ?? ""
  const email = body.email?.trim() ?? ""
  const service = body.service?.trim() ?? ""
  const message = body.message?.trim() ?? ""
  const sourcePage = body.sourcePage?.trim() ?? "unknown"

  if (name.length < 2) {
    return NextResponse.json(
      { ok: false, message: "Name must be at least 2 characters." },
      { status: 400 },
    )
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please provide a valid email." },
      { status: 400 },
    )
  }

  if (!allowedServices.has(service)) {
    return NextResponse.json(
      { ok: false, message: "Selected service is not eligible for early access." },
      { status: 400 },
    )
  }

  if (message.length < 12) {
    return NextResponse.json(
      { ok: false, message: "Message must be at least 12 characters." },
      { status: 400 },
    )
  }

  // Temporary sink until CRM/email integration is wired.
  console.info("[lead-capture]", {
    name,
    email,
    service,
    sourcePage,
  })

  return NextResponse.json({
    ok: true,
    message: "Thanks. We received your early-access request and will reach out soon.",
  })
}
