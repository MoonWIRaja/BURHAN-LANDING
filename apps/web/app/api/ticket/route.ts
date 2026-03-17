import { NextResponse } from "next/server"

interface TicketRequestBody {
  name?: string
  email?: string
  category?: string
  priority?: string
  subject?: string
  message?: string
  sourcePage?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const allowedCategories = new Set(["technical", "billing", "migration", "general"])
const allowedPriorities = new Set(["low", "medium", "high", "urgent"])

export async function POST(request: Request) {
  let body: TicketRequestBody

  try {
    body = (await request.json()) as TicketRequestBody
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON payload." },
      { status: 400 },
    )
  }

  const name = body.name?.trim() ?? ""
  const email = body.email?.trim() ?? ""
  const category = body.category?.trim() ?? ""
  const priority = body.priority?.trim() ?? ""
  const subject = body.subject?.trim() ?? ""
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

  if (!allowedCategories.has(category)) {
    return NextResponse.json(
      { ok: false, message: "Invalid issue type selected." },
      { status: 400 },
    )
  }

  if (!allowedPriorities.has(priority)) {
    return NextResponse.json(
      { ok: false, message: "Invalid priority selected." },
      { status: 400 },
    )
  }

  if (subject.length < 4) {
    return NextResponse.json(
      { ok: false, message: "Subject must be at least 4 characters." },
      { status: 400 },
    )
  }

  if (message.length < 12) {
    return NextResponse.json(
      { ok: false, message: "Message must be at least 12 characters." },
      { status: 400 },
    )
  }

  const ticketId = `TKT-${Date.now().toString(36).toUpperCase()}`

  // Temporary sink until ticketing backend integration is wired.
  console.info("[ticket-support]", {
    ticketId,
    name,
    email,
    category,
    priority,
    sourcePage,
  })

  return NextResponse.json({
    ok: true,
    message: `Ticket ${ticketId} received. Our team will contact you soon.`,
  })
}
