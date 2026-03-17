"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowDown, ArrowUp, Quote, Star } from "lucide-react"

import { cn } from "@/lib/utils"

export interface HostingReview {
  name: string
  date: string
  title: string
  body: string
}

function getCardsPerView(width: number) {
  if (width >= 1280) {
    return 3
  }

  if (width >= 768) {
    return 2
  }

  return 1
}

function getVisibleReviews(reviews: HostingReview[], startIndex: number, cardsPerView: number) {
  if (reviews.length === 0) {
    return []
  }

  const count = Math.min(cardsPerView, reviews.length)

  return Array.from({ length: count }, (_, offset) => {
    const reviewIndex = (startIndex + offset) % reviews.length

    return {
      review: reviews[reviewIndex],
      reviewIndex,
    }
  })
}

interface HostingReviewsCarouselProps {
  reviews: HostingReview[]
}

export function HostingReviewsCarousel({ reviews }: HostingReviewsCarouselProps) {
  const reduceMotion = useReducedMotion()
  const [startIndex, setStartIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [cardsPerView, setCardsPerView] = useState(3)
  const canSlide = reviews.length > 1

  useEffect(() => {
    const syncCardsPerView = () => {
      setCardsPerView(getCardsPerView(window.innerWidth))
    }

    syncCardsPerView()
    window.addEventListener("resize", syncCardsPerView)

    return () => {
      window.removeEventListener("resize", syncCardsPerView)
    }
  }, [])
  const normalizedStartIndex = reviews.length === 0 ? 0 : startIndex % reviews.length

  const visibleReviews = useMemo(
    () => getVisibleReviews(reviews, normalizedStartIndex, cardsPerView),
    [reviews, normalizedStartIndex, cardsPerView],
  )

  function goNext() {
    if (!canSlide) {
      return
    }

    setDirection(1)
    setStartIndex((current) => (current + 1) % reviews.length)
  }

  function goPrevious() {
    if (!canSlide) {
      return
    }

    setDirection(-1)
    setStartIndex((current) => (current - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="relative">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          {[0, 1, 2, 3, 4].map((star) => (
            <div
              key={star}
              className="rounded-md border border-emerald-300/20 bg-emerald-400/12 p-1.5 text-emerald-300"
            >
              <Star className="h-3.5 w-3.5 fill-current" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous reviews"
            onClick={goPrevious}
            disabled={!canSlide}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border text-primary transition",
              canSlide
                ? "border-primary/30 bg-primary/10 hover:border-primary/60 hover:bg-primary/20"
                : "cursor-not-allowed border-white/10 bg-white/5 text-white/35",
            )}
          >
            <ArrowUp className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next reviews"
            onClick={goNext}
            disabled={!canSlide}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border text-emerald-300 transition",
              canSlide
                ? "border-emerald-300/30 bg-emerald-400/10 hover:border-emerald-300/60 hover:bg-emerald-400/20"
                : "cursor-not-allowed border-white/10 bg-white/5 text-white/35",
            )}
          >
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/25 p-2">
        <div className="pointer-events-none absolute -right-16 top-10 h-36 w-36 rounded-full bg-primary/18 blur-3xl" />
        <div className="pointer-events-none absolute -left-14 bottom-8 h-32 w-32 rounded-full bg-emerald-500/14 blur-3xl" />

        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={`${normalizedStartIndex}-${cardsPerView}`}
            custom={direction}
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: direction === 1 ? 22 : -22, filter: "blur(4px)" }
            }
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: direction === 1 ? -22 : 22, filter: "blur(4px)" }
            }
            transition={{ duration: reduceMotion ? 0.2 : 0.35, ease: "easeOut" }}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {visibleReviews.map(({ review, reviewIndex }) => (
              <article
                key={`${review.name}-${review.date}-${reviewIndex}`}
                className="relative rounded-2xl border border-white/12 bg-black/45 p-5 backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/35 bg-primary/10 text-xs font-semibold text-primary">
                      {review.name.slice(0, 1)}
                    </div>
                    <div>
                      <p className="font-medium text-white">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <Quote className="h-4 w-4 text-primary/80" />
                </div>

                <p className="mt-4 text-lg font-semibold text-white">{review.title}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{review.body}</p>
                <p className="mt-4 text-xs tracking-[0.12em] text-emerald-300 uppercase">Delivered</p>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
