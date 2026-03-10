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
      <Badge className={cn("w-fit", align === "center" && "mx-auto")} variant="outline">
        {eyebrow}
      </Badge>
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
    </div>
  )
}
