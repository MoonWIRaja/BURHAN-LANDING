import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center")}>
      <Badge
        className={cn(
          "w-fit rounded-full border-primary/15 bg-primary/5 px-3 py-1 text-[11px] tracking-[0.22em] text-primary uppercase",
          align === "center" && "mx-auto",
        )}
        variant="outline"
      >
        {eyebrow}
      </Badge>
      <h2 className="font-[family-name:var(--font-body)] text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
    </div>
  )
}
