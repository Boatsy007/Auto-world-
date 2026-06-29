'use client'

import { useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { Plus, Minus } from 'lucide-react'
import Link from 'next/link'

const faqCategories = [
  {
    category: 'General',
    faqs: [
      { q: 'Where are you located?', a: 'Auto World Detailing is based in Upper Coomera on the Northern Gold Coast, QLD. All our services are performed at our detailing studio.' },
      { q: 'Do you offer mobile detailing?', a: 'Our premium services are performed in our controlled studio environment in Upper Coomera. This allows us to use specialist lighting, professional-grade equipment, and maintain quality standards that mobile detailing cannot match.' },
      { q: 'What areas do you service?', a: 'We service vehicles from across the Northern Gold Coast including Upper Coomera, Coomera, Helensvale, Hope Island, Oxenford, Pimpama, and surrounding suburbs.' },
      { q: 'How do I book an appointment?', a: 'You can book through our website contact form, call us on 0468 336 447, or send an email to info@autoworlddetailing.com.au. We will confirm your booking and time within 24 hours.' },
    ],
  },
  {
    category: 'Ceramic Coating',
    faqs: [
      { q: 'How long does ceramic coating last?', a: 'Our coatings are available with 1, 3, or 5-year warranties. With proper maintenance, many professional coatings exceed their warranty period significantly.' },
      { q: 'How long after coating can I wash my car?', a: 'We recommend waiting a minimum of 7 days after coating before washing the vehicle. This allows the ceramic coating to fully cure and achieve maximum hardness.' },
      { q: 'Does ceramic coating prevent scratches?', a: 'Ceramic coating adds hardness to your paint surface and provides chemical resistance, but it is not scratch-proof. For physical protection against stone chips and deep scratches, Paint Protection Film is required.' },
      { q: 'Can you apply ceramic coating to my windows?', a: 'Yes - glass ceramic coating is a popular addition that dramatically improves rain beading and driver visibility. We offer it as part of our premium coating packages.' },
    ],
  },
  {
    category: 'Paint Protection Film',
    faqs: [
      { q: 'Is PPF worth it on a new car?', a: 'Absolutely. A new car is the perfect time to apply PPF - the paint is in perfect condition and the film will preserve it from day one, protecting your investment and maintaining resale value.' },
      { q: 'How long does PPF installation take?', a: 'A full front end PPF installation typically takes 1-2 days. Full vehicle coverage may take 3-4 days depending on the vehicle size and coverage requirements.' },
      { q: 'Can I apply ceramic coating over PPF?', a: 'Yes - and we recommend it. Applying ceramic coating over PPF adds hydrophobic properties to the film, making it easier to clean and adding an additional protective layer.' },
      { q: 'Will PPF turn yellow over time?', a: 'Quality PPF from reputable manufacturers is treated to resist yellowing. Our films carry manufacturer warranties against yellowing, cracking, and peeling under normal conditions.' },
    ],
  },
  {
    category: 'Detailing & Maintenance',
    faqs: [
      { q: 'How often should I get my car professionally detailed?', a: 'For most drivers, a full detail once or twice a year is ideal, with maintenance washes in between. Vehicles with ceramic coating can go longer between full details as the coating repels contamination.' },
      { q: 'Can you remove pet hair from my car?', a: 'Yes - we use specialist tools and techniques to remove stubborn pet hair from carpets and upholstery. For severe infestations we follow with a thorough hot water extraction clean.' },
      { q: 'Can you fix hazy or dull headlights?', a: 'Yes - headlight restoration is available as an add-on service. We sand and polish oxidised headlight lenses back to clarity, and apply a protective sealant to prevent re-oxidation.' },
      { q: 'Do you clean engine bays?', a: 'Yes - engine bay cleaning is included in our Full Detail package and available as a standalone service. We use careful detailing techniques to clean without damaging electrical components.' },
    ],
  },
  {
    category: 'Pricing & Bookings',
    faqs: [
      { q: 'Do you charge for quotes?', a: 'No - all quotes are completely free. We will assess your vehicle and provide an honest recommendation and transparent pricing before any work begins.' },
      { q: 'Do prices vary by vehicle size?', a: 'Yes - pricing is based on vehicle size (small car, medium car, large SUV/4WD, etc.) and the condition of the vehicle. We provide accurate quotes after assessing your specific vehicle.' },
      { q: 'What payment methods do you accept?', a: 'We accept cash, bank transfer, and all major credit and debit cards. A deposit may be required for large jobs such as ceramic coating and PPF installations.' },
      { q: 'What is your cancellation policy?', a: 'We ask for at least 48 hours notice for cancellations. Deposits for ceramic coating and PPF jobs are non-refundable if cancelled with less than 48 hours notice.' },
    ],
  },
]

export default function FaqPage() {
  const [openItem, setOpenItem] = useState('')

  return (
    <>
      <section className="relative pt-40 pb-16 bg-[#0A0A0A]">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.2em] uppercase">Questions</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white mb-4 max-w-4xl">
            FREQUENTLY ASKED
            <br />
            <span className="text-[#FF6B00]">QUESTIONS.</span>
          </h1>
          <p className="text-[#8E8E93] text-base md:text-xl max-w-2xl leading-relaxed">
            Everything you need to know about our services. Still have a question? Give us a call or send an email.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="font-display text-3xl text-white mb-6 pb-4 border-b border-white/8">{cat.category}</h2>
                <Accordion.Root
                  type="single"
                  collapsible
                  value={openItem}
                  onValueChange={setOpenItem}
                  className="space-y-3"
                >
                  {cat.faqs.map((faq, i) => {
                    const itemValue = `${cat.category}-${i}`
                    return (
                      <Accordion.Item
                        key={i}
                        value={itemValue}
                        className="border border-white/8 rounded-xl overflow-hidden data-[state=open]:border-[#FF6B00]/30 transition-colors duration-200"
                      >
                        <Accordion.Trigger className="w-full flex items-center justify-between gap-4 p-5 text-left group">
                          <span className="text-white text-sm font-medium leading-snug group-data-[state=open]:text-[#FF6B00] transition-colors">
                            {faq.q}
                          </span>
                          <div className="flex-shrink-0 w-6 h-6 rounded-full border border-white/15 flex items-center justify-center">
                            {openItem === itemValue ? (
                              <Minus className="w-3 h-3 text-[#FF6B00]" />
                            ) : (
                              <Plus className="w-3 h-3 text-[#8E8E93]" />
                            )}
                          </div>
                        </Accordion.Trigger>
                        <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                          <p className="px-5 pb-5 text-[#8E8E93] text-sm leading-relaxed">{faq.a}</p>
                        </Accordion.Content>
                      </Accordion.Item>
                    )
                  })}
                </Accordion.Root>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#1C1C1E] rounded-2xl border border-white/5 p-8 text-center">
            <h2 className="font-display text-3xl text-white mb-3">STILL HAVE QUESTIONS?</h2>
            <p className="text-[#8E8E93] text-sm mb-6">We are happy to answer anything — give us a call or send us a message.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:0468336447" className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#FF6B00]/90 transition-all">
                Call 0468 336 447
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-7 py-3.5 rounded-full hover:border-white/40 transition-all">
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
