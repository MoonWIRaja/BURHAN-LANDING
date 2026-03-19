export type NavIconKey = "home" | "services" | "faq" | "contact"

export type BusinessUnitSlug = "hosting" | "cafe" | "web-development" | "game-development"

export type BusinessUnitStatus = "live" | "coming_soon"

export interface SiteNavItem {
  name: string
  url: string
  icon: NavIconKey
}

export interface BusinessUnit {
  slug: BusinessUnitSlug
  name: string
  status: BusinessUnitStatus
  oneLiner: string
  description: string
  launchWindow: string
  primaryCta: {
    label: string
    href: string
  }
}

export interface FeatureCategory {
  id: string
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  metric: string
  accent: string
}

export interface FaqEntry {
  question: string
  answer: string
}

export interface SupportResourceLink {
  title: string
  description: string
  href: string
}

export interface TeamMember {
  name: string
  role: string
  unit: string
  summary: string
  initials: string
}

export interface SupportResourceGroup {
  title: string
  description: string
  links: SupportResourceLink[]
}

export interface ServerBuildOption {
  id: string
  label: string
  summary: string
  games: string[]
  gradientFrom: string
  gradientTo: string
  color: string
  capacity: string
  highlights: string[]
}

export const brandName = "BURHANDEV"
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://burhan.my"
export const consoleUrl =
  process.env.NEXT_PUBLIC_CONSOLE_URL ?? "https://console.burhan.my"
export const discordUrl =
  process.env.NEXT_PUBLIC_DISCORD_URL ?? "https://discord.gg/qBZhBgYb"

export const businessUnits: BusinessUnit[] = [
  {
    slug: "hosting",
    name: "Game Hosting",
    status: "live",
    oneLiner: "Custom game-server infrastructure already operating for live communities.",
    description:
      "BurHan Hosting is active now with console-first ordering, custom build scoping, and operational workflows designed for serious multiplayer uptime.",
    launchWindow: "Live now",
    primaryCta: {
      label: "Explore Hosting",
      href: "/hosting",
    },
  },
  {
    slug: "cafe",
    name: "Cafe",
    status: "coming_soon",
    oneLiner: "A physical community hub for gamers, creators, and founders.",
    description:
      "The cafe concept focuses on a high-energy social environment with quality food, events, and real-world community touchpoints for the BurHan ecosystem.",
    launchWindow: "Target: 2026",
    primaryCta: {
      label: "Get Cafe Updates",
      href: "/contact?service=cafe&sourcePage=/services/cafe",
    },
  },
  {
    slug: "web-development",
    name: "Web and Design Development",
    status: "coming_soon",
    oneLiner: "Product websites and custom web platforms for business operators.",
    description:
      "This unit will deliver modern websites and practical web products for teams that need conversion-focused design and clean technical implementation.",
    launchWindow: "Target: 2026",
    primaryCta: {
      label: "Join Web and Design Waitlist",
      href: "/contact?service=web-development&sourcePage=/services/web-development",
    },
  },
  {
    slug: "game-development",
    name: "Game Development",
    status: "coming_soon",
    oneLiner: "Original game projects and interactive experiences under the BurHan brand.",
    description:
      "The game-development arm is planned for new IP experiments, playable prototypes, and longer-term production initiatives aligned with the BurHan community.",
    launchWindow: "Target: 2027",
    primaryCta: {
      label: "Get Game Dev Updates",
      href: "/contact?service=game-development&sourcePage=/services/game-development",
    },
  },
]

export const siteNavigation: SiteNavItem[] = [
  { name: "Home", url: "/", icon: "home" },
  { name: "Services", url: "/services", icon: "services" },
  { name: "FAQ", url: "/faq", icon: "faq" },
  { name: "Contact", url: "/contact", icon: "contact" },
]

export const supportedGames = [
  "Minecraft",
  "Rust",
  "FiveM",
  "Palworld",
  "ARK",
  "Terraria",
  "Valheim",
  "CS2",
]

export const heroStats = [
  { value: "< 60s", label: "Provisioning flow" },
  { value: "24/7", label: "Ops visibility" },
  { value: "99.9%", label: "Node target uptime" },
]

export const ourStoryValues = [
  "From gamers to gamers",
  "From Malaysia to Malaysia",
  "Honest answers when important questions are asked",
]

export const ourStoryCards = [
  {
    title: "Our mission",
    body:
      "To offer affordable game hosting for Malaysians without hiding behind vague claims, oversold nodes, or marketing that does not match the real server experience.",
  },
  {
    title: "Our promise",
    body:
      "We focus on stable performance, smoother gameplay, and a setup philosophy built to reduce lag, crashes, and frustrating drop-offs that ruin the fun of playing together.",
  },
  {
    title: "Founder note",
    body:
      '"I enjoy seeing people use my servers, play together, relax, and stay happy. That is the reason BURHANDEV was built. I simply like seeing people happy."',
  },
]

export const featureCategories: FeatureCategory[] = [
  {
    id: "performance",
    eyebrow: "Performance",
    title: "Headroom that stays stable on launch night",
    description:
      "Node pools are tuned for bursty player spikes, mod-heavy packs, and map-heavy workloads without forcing you into a generic template.",
    bullets: [
      "NVMe-backed storage layouts for fast world loads and restore points",
      "Resource reservations sized for high-variance player sessions",
      "Launch-ready monitoring for CPU, RAM, disk, and network pressure",
    ],
    metric: "Realtime telemetry surfaced directly in the console",
    accent: "Built for moments where the server cannot feel soft.",
  },
  {
    id: "security",
    eyebrow: "Security",
    title: "Protective layers that do not slow your team down",
    description:
      "Access is routed through the console, backups are scheduled, and defensive controls are placed around the server lifecycle instead of bolted on later.",
    bullets: [
      "Automated backup windows with restore checkpoints",
      "Role-aware access handled from a single control surface",
      "Mitigation-first edge posture for noisy traffic and sudden spikes",
    ],
    metric: "Security defaults are embedded into every custom deployment",
    accent: "Less firefighting, more predictable uptime.",
  },
  {
    id: "control-panel",
    eyebrow: "Control Panel",
    title: "Console-first operations for founders and staff",
    description:
      "Billing, provisioning, and day-to-day server controls are designed to live inside the BurHan console, so the marketing site stays clean and conversion focused.",
    bullets: [
      "Single destination for login, orders, and billing visibility",
      "Operational actions grouped around real hosting workflows",
      "Structured paths for migration requests and environment changes",
    ],
    metric: "Go to Console is the primary CTA across the entire site",
    accent: "Every serious action starts from one place.",
  },
  {
    id: "support",
    eyebrow: "Support",
    title: "Human support shaped around infrastructure context",
    description:
      "Pre-sales, migrations, and production changes are handled like operations work, not generic ticket replies. The first pass keeps those paths visible and console-led.",
    bullets: [
      "Custom build scoping instead of fixed-plan upselling",
      "Migration help framed around real game-server constraints",
      "Fast escalation paths once the console workflow is live",
    ],
    metric: "Placeholder support surfaces are ready to swap with real channels",
    accent: "Support should understand the stack, not just the queue.",
  },
]

export const faqEntries: FaqEntry[] = [
  {
    question: "What services are live right now?",
    answer:
      "Game Hosting is live now. Cafe, Web and Design Development, and Game Development are currently listed as coming soon with launch-window messaging in the Services and Contact pages.",
  },
  {
    question: "Where should I start if I need hosting today?",
    answer:
      "Start at /hosting, then use /custom-plan to choose the closest build profile. Operational actions like ordering and billing are routed to the BurHan console from hosting-specific pages.",
  },
  {
    question: "Why are fixed hosting price tables not shown?",
    answer:
      "The current hosting flow is custom-build first. Instead of forcing every community into a single public tier, BurHan scopes builds based on game type, player pattern, and operational needs.",
  },
  {
    question: "How do I contact support for technical or billing issues?",
    answer:
      "Use the Ticket Support page at /ticket-support for structured requests. You can submit issue category, priority, and details so the team can route your request faster.",
  },
  {
    question: "Can you help migrate an existing server?",
    answer:
      "Yes. Migration is supported and should be submitted through /ticket-support so your request includes server context and can be routed correctly.",
  },
  {
    question: "How do I get updates for upcoming services?",
    answer:
      "Use the Early Access Update Form on /contact. You can choose Cafe, Web and Design Development, or Game Development and submit your interest in one place.",
  },
  {
    question: "Where can I learn about BurHan company direction and team?",
    answer:
      "Use /company-home for About Us, /team for operations ownership, and /features for product capability details.",
  },
  {
    question: "Is /services/hosting different from /hosting?",
    answer:
      "No. /services/hosting redirects to /hosting so there is one canonical live hosting destination.",
  },
]

export const supportResourceGroups: SupportResourceGroup[] = [
  {
    title: "Discover",
    description: "Learn about the team, direction, and active service scope.",
    links: [
      {
        title: "About Us",
        description: "Learn who we are, why BurHan was built, and how we operate.",
        href: "/company-home",
      },
      {
        title: "Team",
        description: "Meet the people behind BurHan operations and support.",
        href: "/team",
      },
    ],
  },
  {
    title: "Self Service",
    description: "Use public resources before opening a request.",
    links: [
      {
        title: "FAQ",
        description: "Quick answers for billing, migrations, and operations.",
        href: "/faq",
      },
      {
        title: "Features",
        description: "Product capabilities, support posture, and control flow.",
        href: "/features",
      },
    ],
  },
  {
    title: "Tickets & Live Chat",
    description: "Choose a direct channel for account or infrastructure help.",
    links: [
      {
        title: "Ticket Support",
        description: "Submit your request through the dedicated BurHan ticket portal.",
        href: "/ticket-support?source=support-hub",
      },
    ],
  },
  {
    title: "Other",
    description: "Additional support channels and roadmap communication.",
    links: [
      {
        title: "Discord Server",
        description: "Join for announcements and ongoing support updates.",
        href: discordUrl,
      },
      {
        title: "Early Access Updates",
        description: "Register interest for cafe, web-dev, and game-dev launches.",
        href: "#request-intake",
      },
    ],
  },
]

export const teamMembers: TeamMember[] = [
  {
    name: "BurHan",
    role: "Founder & Infrastructure Lead",
    unit: "Leadership",
    summary:
      "Leads platform direction, deployment standards, and performance priorities across active hosting operations.",
    initials: "BH",
  },
  {
    name: "Ops Core",
    role: "Server Reliability",
    unit: "Operations",
    summary:
      "Focuses on provisioning stability, migration handoffs, and recovery readiness for production game communities.",
    initials: "OP",
  },
  {
    name: "Community Desk",
    role: "Support & Intake",
    unit: "Support",
    summary:
      "Handles support intake, roadmap updates, and customer routing between live services and upcoming launches.",
    initials: "CD",
  },
]

export const serverBuildOptions: ServerBuildOption[] = [
  {
    id: "starter",
    label: "Starter",
    summary:
      "A lean custom build for fresh launches, creator communities, or small private worlds that still need clean operational foundations.",
    games: ["Minecraft", "Terraria", "Valheim"],
    gradientFrom: "#22d3ee",
    gradientTo: "#0f766e",
    color: "#22d3ee",
    capacity: "Best for pilots, friend groups, and first public launches.",
    highlights: [
      "Clean install path with backup hooks and console-first access",
      "Enough headroom for mod-light communities and test phases",
      "Fastest path from idea to playable environment",
    ],
  },
  {
    id: "community",
    label: "Community",
    summary:
      "Balanced around active mid-size communities that need stability, better observability, and room for plugins or content updates.",
    games: ["Minecraft", "Palworld", "FiveM"],
    gradientFrom: "#38bdf8",
    gradientTo: "#2563eb",
    color: "#38bdf8",
    capacity: "Best for growing communities with recurring peaks.",
    highlights: [
      "Higher tolerance for player spikes and content refresh cycles",
      "Good fit for servers where uptime starts to affect reputation",
      "A pragmatic default when you need more than a hobby-grade node",
    ],
  },
  {
    id: "competitive",
    label: "Competitive",
    summary:
      "A sharper operational profile for events, RP communities, and performance-sensitive servers where latency and consistency matter more.",
    games: ["FiveM", "Rust", "CS2"],
    gradientFrom: "#60a5fa",
    gradientTo: "#7c3aed",
    color: "#7dd3fc",
    capacity: "Best for highly active sessions and operator-managed teams.",
    highlights: [
      "Structured for stronger concurrency and cleaner session stability",
      "Operational visibility tuned for teams who watch their metrics",
      "Designed for communities with meaningful player pressure",
    ],
  },
  {
    id: "network",
    label: "Network",
    summary:
      "Multi-node thinking for brands building multiple worlds, seasonal launches, or complex server ecosystems that need deeper planning.",
    games: ["Minecraft", "ARK", "Rust"],
    gradientFrom: "#818cf8",
    gradientTo: "#f59e0b",
    color: "#a78bfa",
    capacity: "Best for ecosystems, not just single-server launches.",
    highlights: [
      "Custom scoping for multiple environments and long-term expansion",
      "The right fit when one public plan would hide too much complexity",
      "Prepared for founder-led operations and larger launch calendars",
    ],
  },
]

export const contactCards = [
  {
    title: "Console Access",
    status: "Ready now",
    description:
      "Login, billing, and ordering are meant to begin from the BurHan console. The marketing experience deliberately routes there.",
  },
  {
    title: "Migration Requests",
    status: "Console-first",
    description:
      "Migration and rebuild requests are planned as structured workflows, not a loose DM process. The public surface is ready for that handoff.",
  },
  {
    title: "Technical Docs",
    status: "Coming soon",
    description:
      "A dedicated docs app is already scaffolded in the monorepo and can be expanded into guides, onboarding, and operational references.",
  },
]

export const deliverySteps = [
  {
    title: "Describe the workload",
    body: "Pick the closest server profile, then use the console to frame your player pattern, mods, and operational needs.",
  },
  {
    title: "Shape the deployment",
    body: "BurHan Hosting treats the build as infrastructure design work, not a forced fit into a public pricing ladder.",
  },
  {
    title: "Operate from one console",
    body: "Provisioning, billing, and future support workflows are routed into the same operational surface.",
  },
]
