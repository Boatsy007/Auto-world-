import { SectionHeader } from '@/components/ui/SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Vehicle Inspection',
    description:
      'We conduct a thorough walk-around inspection under specialist lighting to assess paint condition, contaminants, and defects before any work begins.',
  },
  {
    number: '02',
    title: 'Preparation & Decontamination',
    description:
      'Chemical decontamination, iron fallout removal, and clay bar treatment to strip all bonded contaminants and prepare the surface.',
  },
  {
    number: '03',
    title: 'Correction & Enhancement',
    description:
      'Machine polishing to remove swirl marks, scratches, and oxidation. We work panel by panel until the paint is ready for protection.',
  },
  {
    number: '04',
    title: 'Protection Application',
    description:
      'Whether ceramic coating, PPF, or sealant — product is applied in our controlled studio environment for a flawless bond and finish.',
  },
  {
    number: '05',
    title: 'Final Quality Check',
    description:
      'Every panel is inspected under multiple light sources before we hand the keys back. If we spot anything, we fix it — no exceptions.',
  },
]

export function ProcessSection() {
  return (
    <section className="section-padding bg-[#1C1C1E]">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Our Process"
          headline="HOW WE DO IT."
          subtext="Every vehicle goes through the same rigorous process. No shortcuts, no compromises."
          align="center"
          className="mb-16"
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />

          <div className="grid grid-cols-5 gap-6 relative">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center pt-0">
                {/* Circle */}
                <div className="w-16 h-16 rounded-full border-2 border-[#FF6B00] bg-[#0A0A0A] flex items-center justify-center mb-6 relative z-10 flex-shrink-0">
                  <span className="font-display text-xl text-[#FF6B00]">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[#8E8E93] text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative pl-10">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF6B00]/50 via-[#FF6B00]/20 to-transparent" />

          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Circle */}
                <div className="absolute -left-10 top-0 w-10 h-10 rounded-full border-2 border-[#FF6B00] bg-[#1C1C1E] flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-base text-[#FF6B00]">
                    {step.number}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-2xl text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#8E8E93] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
