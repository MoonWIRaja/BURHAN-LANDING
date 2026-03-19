import { landingAboutCards } from "@/config/landing"

export function AboutGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {landingAboutCards.map((card) => {
        const Icon = card.icon

        return (
          <div key={card.title} className="about-card flex flex-col">
            <div className="mb-12">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-primary text-primary">
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="mb-4 text-2xl font-bold text-foreground">{card.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
