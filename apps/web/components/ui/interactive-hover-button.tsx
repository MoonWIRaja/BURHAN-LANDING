"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface InteractiveHoverButtonProps extends React.HTMLAttributes<HTMLElement> {
  text?: string
  href?: string
  mobileText?: string
}

const InteractiveHoverButton = React.forwardRef<HTMLElement, InteractiveHoverButtonProps>(
  ({ text = "Button", className, href, mobileText, ...props }, ref) => {
    const Comp = href ? "a" : "button"
    const compactText = mobileText ?? text

    return (
      <Comp
        ref={ref as never}
        href={href}
        className={cn(
          "group relative inline-flex w-32 cursor-pointer items-center justify-center overflow-hidden rounded-full border bg-background px-4 py-2 text-center font-semibold",
          className,
        )}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 group-hover:-translate-x-8 group-hover:opacity-0">
          <span className="sm:hidden">{compactText}</span>
          <span className="hidden sm:inline">{text}</span>
        </span>
        <div className="absolute inset-0 z-10 flex translate-x-8 items-center justify-center gap-2 whitespace-nowrap text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <span className="sm:hidden">{compactText}</span>
          <span className="hidden sm:inline">{text}</span>
          <ArrowRight className="h-4 w-4" />
        </div>
        <div className="absolute left-3 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-primary transition-all duration-300 group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:-translate-y-0 group-hover:rounded-full group-hover:scale-[1.35]" />
      </Comp>
    )
  },
)

InteractiveHoverButton.displayName = "InteractiveHoverButton"

export { InteractiveHoverButton }
