import { cn } from "@/lib/utils"

interface VisualPlaceholderProps {
  variant: "corridor" | "globe" | "cube" | "hosting" | "cafe" | "design" | "devs"
  className?: string
}

export function VisualPlaceholder({ variant, className }: VisualPlaceholderProps) {
  if (variant === "corridor") {
    return (
      <div className={cn("placeholder-corridor", className)}>
        <div className="placeholder-corridor__inner" />
      </div>
    )
  }

  if (variant === "globe") {
    return (
      <div className={cn("placeholder-globe", className)}>
        <div className="placeholder-globe__ring" />
      </div>
    )
  }

  if (variant === "cube") {
    return (
      <div className={cn("placeholder-cube", className)}>
        <div className="placeholder-cube__face placeholder-cube__face--front" />
        <div className="placeholder-cube__face placeholder-cube__face--top" />
        <div className="placeholder-cube__face placeholder-cube__face--side" />
      </div>
    )
  }

  return <div className={cn("placeholder-service", `placeholder-service--${variant}`, className)} />
}
