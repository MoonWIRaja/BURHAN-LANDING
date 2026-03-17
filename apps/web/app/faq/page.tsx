import type { Metadata } from "next"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { SectionHeading } from "@/components/section-heading"
import { faqEntries } from "@/config/site"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about the current BurHan website structure, live hosting flow, support routes, and upcoming service updates.",
  alternates: {
    canonical: "/faq",
  },
}

export default function FaqPage() {
  return (
    <div className="space-y-24">
      <section className="section-shell pt-28 sm:pt-32">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions about the current BurHan site and service flow"
          description="This FAQ reflects the latest structure: corporate home on /, live hosting on /hosting, custom-plan routing, ticket support flow, and early-access updates for upcoming units."
        />
      </section>

      <section className="section-shell">
        <Accordion type="single" collapsible className="space-y-4">
          {faqEntries.map((entry) => (
            <AccordionItem key={entry.question} value={entry.question}>
              <AccordionTrigger>{entry.question}</AccordionTrigger>
              <AccordionContent>{entry.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}
