"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

interface TicketSupportFormProps {
  sourcePage?: string
}

interface TicketPayload {
  name: string
  email: string
  category: string
  priority: string
  subject: string
  message: string
  sourcePage: string
}

interface FormErrors {
  name?: string
  email?: string
  category?: string
  priority?: string
  subject?: string
  message?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const categories = [
  { value: "technical", label: "Technical Issue" },
  { value: "billing", label: "Billing & Payments" },
  { value: "migration", label: "Migration Request" },
  { value: "general", label: "General Support" },
]

const priorities = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "urgent", label: "Urgent" },
]

export function TicketSupportForm({ sourcePage = "/ticket-support" }: TicketSupportFormProps) {
  const [payload, setPayload] = useState<TicketPayload>({
    name: "",
    email: "",
    category: "technical",
    priority: "medium",
    subject: "",
    message: "",
    sourcePage,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  function validate(next: TicketPayload): FormErrors {
    const nextErrors: FormErrors = {}

    if (next.name.trim().length < 2) {
      nextErrors.name = "Please enter your name."
    }

    if (!emailPattern.test(next.email.trim())) {
      nextErrors.email = "Please enter a valid email."
    }

    if (!categories.some((category) => category.value === next.category)) {
      nextErrors.category = "Please select a valid issue type."
    }

    if (!priorities.some((priority) => priority.value === next.priority)) {
      nextErrors.priority = "Please select a valid priority."
    }

    if (next.subject.trim().length < 4) {
      nextErrors.subject = "Please enter a short subject."
    }

    if (next.message.trim().length < 12) {
      nextErrors.message = "Please provide at least 12 characters for details."
    }

    return nextErrors
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validate(payload)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("error")
      setSubmitMessage("Please correct the highlighted fields and try again.")
      return
    }

    setSubmitState("submitting")
    setSubmitMessage("")

    try {
      const response = await fetch("/api/ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = (await response.json()) as { ok?: boolean; message?: string }

      if (!response.ok || !data.ok) {
        setSubmitState("error")
        setSubmitMessage(data.message ?? "Ticket submission failed. Please try again.")
        return
      }

      setSubmitState("success")
      setSubmitMessage(data.message ?? "Ticket submitted successfully.")
      setPayload((current) => ({
        ...current,
        name: "",
        email: "",
        subject: "",
        message: "",
      }))
      setErrors({})
    } catch {
      setSubmitState("error")
      setSubmitMessage("Network issue. Please try again in a moment.")
    }
  }

  function fieldClass(hasError?: string) {
    return `w-full rounded-[1.1rem] border bg-[linear-gradient(180deg,rgba(12,12,16,0.92),rgba(6,6,10,0.88))] px-4 py-3 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] outline-none transition placeholder:text-muted-foreground/75 focus:ring-2 focus:ring-primary/60 ${
      hasError ? "border-red-400/60" : "border-white/20"
    }`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="ticket-name" className="mb-2 block text-xs tracking-[0.16em] text-muted-foreground uppercase">
          Name
        </label>
        <input
          id="ticket-name"
          name="name"
          value={payload.name}
          onChange={(event) =>
            setPayload((current) => ({
              ...current,
              name: event.target.value,
            }))
          }
          className={fieldClass(errors.name)}
          placeholder="Your full name"
          autoComplete="name"
        />
        {errors.name ? <p className="mt-2 text-xs text-red-300">{errors.name}</p> : null}
      </div>

      <div>
        <label htmlFor="ticket-email" className="mb-2 block text-xs tracking-[0.16em] text-muted-foreground uppercase">
          Email
        </label>
        <input
          id="ticket-email"
          name="email"
          type="email"
          value={payload.email}
          onChange={(event) =>
            setPayload((current) => ({
              ...current,
              email: event.target.value,
            }))
          }
          className={fieldClass(errors.email)}
          placeholder="you@company.com"
          autoComplete="email"
        />
        {errors.email ? <p className="mt-2 text-xs text-red-300">{errors.email}</p> : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ticket-category" className="mb-2 block text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Issue Type
          </label>
          <select
            id="ticket-category"
            name="category"
            value={payload.category}
            onChange={(event) =>
              setPayload((current) => ({
                ...current,
                category: event.target.value,
              }))
            }
            className={fieldClass(errors.category)}
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value} className="bg-black text-white">
                {category.label}
              </option>
            ))}
          </select>
          {errors.category ? <p className="mt-2 text-xs text-red-300">{errors.category}</p> : null}
        </div>

        <div>
          <label htmlFor="ticket-priority" className="mb-2 block text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Priority
          </label>
          <select
            id="ticket-priority"
            name="priority"
            value={payload.priority}
            onChange={(event) =>
              setPayload((current) => ({
                ...current,
                priority: event.target.value,
              }))
            }
            className={fieldClass(errors.priority)}
          >
            {priorities.map((priority) => (
              <option key={priority.value} value={priority.value} className="bg-black text-white">
                {priority.label}
              </option>
            ))}
          </select>
          {errors.priority ? <p className="mt-2 text-xs text-red-300">{errors.priority}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="ticket-subject" className="mb-2 block text-xs tracking-[0.16em] text-muted-foreground uppercase">
          Subject
        </label>
        <input
          id="ticket-subject"
          name="subject"
          value={payload.subject}
          onChange={(event) =>
            setPayload((current) => ({
              ...current,
              subject: event.target.value,
            }))
          }
          className={fieldClass(errors.subject)}
          placeholder="Short summary of the issue"
        />
        {errors.subject ? <p className="mt-2 text-xs text-red-300">{errors.subject}</p> : null}
      </div>

      <div>
        <label htmlFor="ticket-message" className="mb-2 block text-xs tracking-[0.16em] text-muted-foreground uppercase">
          Details
        </label>
        <textarea
          id="ticket-message"
          name="message"
          value={payload.message}
          onChange={(event) =>
            setPayload((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
          className={`${fieldClass(errors.message)} min-h-36 resize-y leading-7`}
          placeholder="Explain what happened, what game/server was affected, and any error details."
        />
        {errors.message ? <p className="mt-2 text-xs text-red-300">{errors.message}</p> : null}
      </div>

      <input type="hidden" name="sourcePage" value={payload.sourcePage} />

      <Button type="submit" size="lg" className="w-full justify-between" disabled={submitState === "submitting"}>
        {submitState === "submitting" ? (
          <>
            Submitting Ticket
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Submit Ticket
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>

      {submitState === "success" ? (
        <div className="rounded-xl border border-emerald-300/35 bg-emerald-500/12 px-4 py-3 text-sm text-emerald-100">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            <span>{submitMessage}</span>
          </div>
        </div>
      ) : null}

      {submitState === "error" && submitMessage ? (
        <div className="rounded-xl border border-red-300/35 bg-red-500/12 px-4 py-3 text-sm text-red-100">
          {submitMessage}
        </div>
      ) : null}
    </form>
  )
}
