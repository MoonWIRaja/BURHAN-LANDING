import Link from "next/link"

export function ContactCta() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[700px] flex-col items-center justify-center overflow-hidden bg-background py-24 text-center text-foreground"
    >
      <div className="red-mesh-grid-light absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />
      <div className="relative z-10 mb-6 font-[family-name:var(--font-mono)] text-xs tracking-[0.5em] text-primary uppercase md:text-sm">
        &lt;Connect With Us&gt;
      </div>
      <h2 className="glow-text relative z-10 mb-6 font-[family-name:var(--font-mono)] text-4xl font-bold tracking-tight text-primary uppercase md:text-7xl">
        Something Epic Is Coming
      </h2>
      <p className="relative z-10 mb-16 max-w-2xl px-6 text-xs font-medium leading-relaxed tracking-wide text-muted-foreground md:text-sm">
        Join our community as we&apos;re cooking up some amazing events for the community. Stay up to
        date!
      </p>

      <div className="relative z-10 flex w-full max-w-5xl items-center justify-center px-6 py-4">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-primary/20 shadow-[0_0_10px_rgba(255,0,0,0.15)] dark:shadow-[0_0_10px_rgba(255,0,0,0.3)]" />
        <div className="relative flex items-center justify-center">
          <div className="animate-float absolute -left-24 -top-10 hidden h-24 w-24 rotate-[20deg] border border-primary/20 bg-zinc-50 shadow-sm dark:bg-zinc-900 lg:block" style={{ ["--tw-rotate" as string]: "20deg" }} />
          <div className="animate-float absolute -left-12 bottom-2 hidden h-20 w-20 rotate-[-15deg] border border-primary/20 bg-zinc-50 shadow-sm dark:bg-zinc-900 lg:block" style={{ ["--tw-rotate" as string]: "-15deg", animationDelay: "1s" }} />
          <div className="red-glow relative flex h-64 w-64 items-center justify-center md:h-[320px] md:w-[480px]">
            <svg className="h-32 w-32 fill-current text-primary md:h-48 md:w-48" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03Z" />
            </svg>
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 opacity-30 blur-[60px]" />
          </div>
          <div className="animate-float absolute -right-12 top-0 hidden h-20 w-20 rotate-[15deg] border border-primary/20 bg-zinc-50 shadow-sm dark:bg-zinc-900 lg:block" style={{ ["--tw-rotate" as string]: "15deg", animationDelay: "0.5s" }} />
          <div className="animate-float absolute -right-24 bottom-10 hidden h-28 w-28 rotate-[-10deg] border border-primary/20 bg-zinc-50 shadow-sm dark:bg-zinc-900 lg:block" style={{ ["--tw-rotate" as string]: "-10deg", animationDelay: "1.5s" }} />
        </div>
      </div>

      <Link
        href="https://discord.burhan.my"
        target="_blank"
        rel="noreferrer"
        className="red-btn-glow relative z-10 mt-12 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-3.5 font-[family-name:var(--font-mono)] text-sm font-bold tracking-[0.18em] text-white uppercase transition hover:scale-105 active:scale-95"
      >
        &gt; Join Our Community
      </Link>
    </section>
  )
}
