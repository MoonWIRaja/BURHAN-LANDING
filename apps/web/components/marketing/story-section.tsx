import Link from "next/link"

import { landingStoryItems } from "@/config/landing"
import { VisualPlaceholder } from "@/components/marketing/visual-placeholder"
import { cn } from "@/lib/utils"

export function StorySection() {
  return (
    <div className="space-y-24">
      {landingStoryItems.map((story, index) => {
        const reverse = index % 2 === 1

        return (
          <div
            key={story.title}
            className={cn(
              "flex flex-col items-center gap-12 md:gap-20",
              reverse ? "md:flex-row-reverse" : "md:flex-row",
            )}
          >
            <div className="w-full md:w-1/2">
              <div className="story-visual-frame">
                <VisualPlaceholder variant={story.visual} className="h-[18rem] w-full sm:h-[22rem]" />
              </div>
            </div>

            <div className={cn("w-full md:w-1/2", reverse && "text-left md:text-left")}>
              <h3
                className={cn(
                  "mb-6 font-[family-name:var(--font-serif)] text-3xl font-black italic",
                  story.accent === "primary" ? "text-primary" : "text-foreground",
                )}
              >
                {story.yearLabel}
              </h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                {story.description}
                {story.descriptionLinkLabel && story.descriptionLinkHref ? (
                  <>
                    <Link
                      href={story.descriptionLinkHref}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-primary transition hover:opacity-80"
                    >
                      {story.descriptionLinkLabel}
                    </Link>
                    {story.descriptionAfterLink ?? ""}
                  </>
                ) : null}
              </p>
              {story.quote ? (
                <p className="border-l-4 border-primary pl-4 leading-relaxed italic text-muted-foreground">
                  <span className="text-foreground">{story.quote}</span>
                </p>
              ) : null}
              {index === landingStoryItems.length - 1 ? (
                <div className="mt-8">
                  <div className="mb-8 space-y-2">
                    <p className="text-xl font-bold text-foreground">GO TO BURHAN HOTING</p>
                    <p className="italic text-zinc-500">Start your hosting journey with us.</p>
                  </div>
                  <Link
                    href="https://console.burhan.my/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-primary px-8 py-3 font-medium text-white transition hover:bg-black dark:hover:bg-white dark:hover:text-black"
                  >
                    BURHAN CONSOLE
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        )
      })}
    </div>
  )
}
