export type NavIconKey = "home" | "plan" | "faq" | "contact"

export interface SiteNavItem {
  name: string
  url: string
  icon: NavIconKey
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

export const brandName = "BurHan Hosting"
export const consoleUrl =
  process.env.NEXT_PUBLIC_CONSOLE_URL ?? "https://console.burhan.my"

export const siteNavigation: SiteNavItem[] = [
  { name: "Home", url: "/", icon: "home" },
  { name: "Custom Plan", url: "/custom-plan", icon: "plan" },
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
    question: "How do I order or manage billing?",
    answer:
      "Orders and billing live inside the BurHan console. The landing page is intentionally conversion-focused and routes every serious action to the console login flow.",
  },
  {
    question: "Can you help migrate an existing server?",
    answer:
      "Yes. The first pass highlights migration requests as a supported workflow, and that request path will be routed through the console as the operational layer expands.",
  },
  {
    question: "Do you support modded or custom game setups?",
    answer:
      "That is the core positioning. BurHan Hosting is built around custom server builds rather than rigid public tiers, so the right fit depends on your game, player pattern, and plugin stack.",
  },
  {
    question: "What happens with backups?",
    answer:
      "Backups are treated as part of the deployment shape, not a premium afterthought. The FAQ and feature sections both frame backups as a default operational capability.",
  },
  {
    question: "Is DDoS protection included?",
    answer:
      "The marketing copy positions mitigation as part of the infrastructure posture. Exact implementation details can be surfaced later once console workflows and technical docs are published.",
  },
  {
    question: "Which games can I host?",
    answer:
      "The launch site is multi-game by default and highlights popular server categories such as Minecraft, Rust, FiveM, Palworld, ARK, Terraria, Valheim, and CS2.",
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
