import type { ReactNode } from "react"

import { MarketingFooter } from "@/components/marketing/marketing-footer"
import { MarketingHeader } from "@/components/marketing/marketing-header"

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <div className="site-aura" />
      <MarketingHeader />
      <main className="relative z-10 flex-1">{children}</main>
      <MarketingFooter />
    </div>
  )
}
