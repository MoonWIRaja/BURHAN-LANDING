import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { SectionHeading } from "@/components/section-heading"
import { faqEntries } from "@/config/site"

export default function FaqPage() {
  return (
    <div className="space-y-24">
      <section className="section-shell pt-28 sm:pt-32">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions the first release should answer clearly"
          description="The FAQ keeps the message aligned with the current product shape: console-first ordering, custom-build hosting, migration support, and a multi-game position."
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
