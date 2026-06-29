'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const faqs = [
  {
    q: 'How long does a ceramic coating last?',
    a: 'A professionally applied ceramic coating typically lasts between 2 and 5 years depending on the product grade and how the vehicle is maintained. We offer tiered packages with 1-year, 3-year, and 5-year protection warranties.',
  },
  {
    q: 'What is paint correction?',
    a: 'Paint correction is the process of removing surface defects — swirl marks, scratches, oxidation, and water spots — using machine polishing. The result is a dramatically clearer, deeper, mirror-like finish.',
  },
  {
    q: 'How is PPF different from ceramic coating?',
    a: 'Paint Protection Film (PPF) is a physical urethane barrier that self-heals from light scratches and stone chips. Ceramic coating is a chemical bond that adds hydrophobic properties and gloss enhancement. Both can be used together for maximum protection.',
  },
  {
    q: 'Do you come to me or do I bring my car in?',
    a: 'We operate from our Upper Coomera studio where we have controlled lighting and the perfect environment for precision detailing work. Mobile services are available for maintenance washes — please contact us to discuss.',
  },
  {
    q: 'How should I prepare my car before bringing it in?',
    a: "No preparation is needed on your end — that's what we're here for. Simply bring your vehicle as-is and our team will handle everything from inspection through to completion.",
  },
  {
    q: 'How long does a full detail take?',
    a: 'A Full Detail typically takes 5–6 hours. Paint correction and ceramic coating packages are full-day services. We\'ll always give you an accurate timeframe when you book.',
  },
  {
    q: 'Is your work guaranteed?',
    a: "Yes. We stand behind every service we perform. If you're not completely satisfied, we'll make it right. Ceramic coating packages come with their own manufacturer-backed warranties.",
  },
  {
    q: 'Do you detail all types of vehicles?',
    a: 'Yes — sedans, SUVs, utes, sports cars, luxury vehicles, and motorcycles. We treat every vehicle with the same obsessive level of care regardless of make or model.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export function FaqSection() {
  const [openItem, setOpenItem] = useState<string>('')

  return (
    <section className="section-padding bg-[#0A0A0A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <SectionHeader
            eyebrow="FAQ"
            headline="QUESTIONS ANSWERED."
            subtext="Everything you need to know about our services, pricing, and process. Still have a question? Give us a call."
          />

          <Accordion.Root
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="border border-white/8 rounded-xl overflow-hidden data-[state=open]:border-[#FF6B00]/30 transition-colors duration-200"
              >
                <Accordion.Trigger className="w-full flex items-center justify-between gap-4 p-5 text-left group">
                  <span className="text-white text-sm font-medium leading-snug group-data-[state=open]:text-[#FF6B00] transition-colors duration-200">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border border-white/15 flex items-center justify-center group-data-[state=open]:border-[#FF6B00]/40 transition-colors duration-200">
                    {openItem === `item-${i}` ? (
                      <Minus className="w-3 h-3 text-[#FF6B00]" />
                    ) : (
                      <Plus className="w-3 h-3 text-[#8E8E93]" />
                    )}
                  </div>
                </Accordion.Trigger>
                <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                  <p className="px-5 pb-5 text-[#8E8E93] text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  )
}
