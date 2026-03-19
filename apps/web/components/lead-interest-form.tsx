"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { ArrowRight, CheckCircle2, ChevronDown, Loader2 } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { businessUnits } from "@/config/site"

interface LeadInterestFormProps {
  initialService?: string
  sourcePage?: string
}

interface LeadPayload {
  name: string
  email: string
  service: string
  message: string
  sourcePage: string
}

interface FormErrors {
  name?: string
  email?: string
  service?: string
  message?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function LeadInterestForm({ initialService, sourcePage = "/contact" }: LeadInterestFormProps) {
  const upcomingServices = useMemo(
    () => businessUnits.filter((unit) => unit.status === "coming_soon"),
    [],
  )
  const upcomingServiceSet = useMemo(
    () => new Set<string>(upcomingServices.map((unit) => unit.slug)),
    [upcomingServices],
  )

  const fallbackService = upcomingServices[0]?.slug ?? ""
  const defaultService =
    initialService && upcomingServiceSet.has(initialService) ? initialService : fallbackService

  const [payload, setPayload] = useState<LeadPayload>({
    name: "",
    email: "",
    service: defaultService,
    message: "",
    sourcePage,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")
  const [isServiceMenuOpen, setServiceMenuOpen] = useState(false)
  const serviceMenuRef = useRef<HTMLDivElement>(null)
  const selectedService = upcomingServices.find((unit) => unit.slug === payload.service)

  useEffect(() => {
    function closeMenuIfOutside(event: MouseEvent) {
      if (!(event.target instanceof Node)) {
        return
      }

      if (!serviceMenuRef.current?.contains(event.target)) {
        setServiceMenuOpen(false)
      }
    }

    function closeMenuOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServiceMenuOpen(false)
      }
    }

    window.addEventListener("mousedown", closeMenuIfOutside)
    window.addEventListener("keydown", closeMenuOnEscape)

    return () => {
      window.removeEventListener("mousedown", closeMenuIfOutside)
      window.removeEventListener("keydown", closeMenuOnEscape)
    }
  }, [])

  function validate(next: LeadPayload): FormErrors {
    const nextErrors: FormErrors = {}

    if (next.name.trim().length < 2) {
      nextErrors.name = "Please enter your name."
    }

    if (!emailPattern.test(next.email.trim())) {
      nextErrors.email = "Please enter a valid email."
    }

    if (!upcomingServiceSet.has(next.service)) {
      nextErrors.service = "Please choose a valid service."
    }

    if (next.message.trim().length < 12) {
      nextErrors.message = "Please share a bit more detail (at least 12 characters)."
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
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = (await response.json()) as { ok?: boolean; message?: string }

      if (!response.ok || !data.ok) {
        setSubmitState("error")
        setSubmitMessage(data.message ?? "Submission failed. Please try again.")
        return
      }

      setSubmitState("success")
      setSubmitMessage(data.message ?? "Thanks. We will contact you with updates soon.")
      setPayload((current) => ({
        ...current,
        name: "",
        email: "",
        message: "",
      }))
      setErrors({})
    } catch {
      setSubmitState("error")
      setSubmitMessage("Network issue. Please try again in a moment.")
    }
  }

  function fieldClass(hasError?: string) {
    return `marketing-form-field ${
      hasError ? "!border-red-400/60" : ""
    }`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="lead-name" className="mb-2 block text-xs tracking-[0.16em] text-muted-foreground uppercase">
          Name
        </label>
        <input
          id="lead-name"
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
        {errors.name ? <p className="mt-2 text-xs text-red-500">{errors.name}</p> : null}
      </div>

      <div>
        <label htmlFor="lead-email" className="mb-2 block text-xs tracking-[0.16em] text-muted-foreground uppercase">
          Email
        </label>
        <input
          id="lead-email"
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
        {errors.email ? <p className="mt-2 text-xs text-red-500">{errors.email}</p> : null}
      </div>

      <div>
        <label htmlFor="lead-service" className="mb-2 block text-xs tracking-[0.16em] text-muted-foreground uppercase">
          Business Interest
        </label>
        <div ref={serviceMenuRef} className="relative">
          <button
            type="button"
            id="lead-service"
            aria-haspopup="listbox"
            aria-expanded={isServiceMenuOpen}
            onClick={() => setServiceMenuOpen((current) => !current)}
            className={`${fieldClass(errors.service)} flex items-center justify-between text-left`}
          >
            <span>{selectedService?.name ?? "Select a service"}</span>
            <ChevronDown
              className={`h-4 w-4 text-muted-foreground transition ${isServiceMenuOpen ? "rotate-180" : ""}`}
            />
          </button>
          {isServiceMenuOpen ? (
            <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-[1rem] border border-border bg-popover shadow-[0_20px_60px_-35px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              {upcomingServices.map((unit) => {
                const isSelected = unit.slug === payload.service

                return (
                  <button
                    key={unit.slug}
                    type="button"
                    onClick={() => {
                      setPayload((current) => ({
                        ...current,
                        service: unit.slug,
                      }))
                      setServiceMenuOpen(false)
                    }}
                    role="option"
                    aria-selected={isSelected}
                    className={`w-full px-4 py-3 text-left text-sm transition ${
                      isSelected
                        ? "bg-primary/12 text-foreground"
                        : "text-foreground/90 hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {unit.name}
                  </button>
                )
              })}
            </div>
          ) : null}
          <input type="hidden" name="service" value={payload.service} />
        </div>
        {errors.service ? <p className="mt-2 text-xs text-red-500">{errors.service}</p> : null}
      </div>

      <div>
        <label htmlFor="lead-message" className="mb-2 block text-xs tracking-[0.16em] text-muted-foreground uppercase">
          Message
        </label>
        <textarea
          id="lead-message"
          name="message"
          value={payload.message}
          onChange={(event) =>
            setPayload((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
          className={`${fieldClass(errors.message)} min-h-32 resize-y leading-7`}
          placeholder="Tell us what you are planning."
        />
        {errors.message ? <p className="mt-2 text-xs text-red-500">{errors.message}</p> : null}
      </div>

      <input type="hidden" name="sourcePage" value={payload.sourcePage} />

      <Button type="submit" size="lg" className="w-full justify-between" disabled={submitState === "submitting"}>
        {submitState === "submitting" ? (
          <>
            Submitting
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Get Early Access
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>

      {submitState === "success" ? (
        <div className="rounded-xl border border-emerald-300/35 bg-emerald-500/12 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-100">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            <span>{submitMessage}</span>
          </div>
        </div>
      ) : null}

      {submitState === "error" && submitMessage ? (
        <div className="rounded-xl border border-red-300/35 bg-red-500/12 px-4 py-3 text-sm text-red-700 dark:text-red-100">
          {submitMessage}
        </div>
      ) : null}
    </form>
  )
}
