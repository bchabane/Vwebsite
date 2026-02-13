import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Company',
  description: 'Virentis was founded to address a fundamental challenge of the energy transition: renewable assets are scaling faster than operational intelligence.',
}

export default function CompanyPage() {
  return (
    <>
      <Hero
        title="Built for the Energy Transition"
        description="Virentis was founded to address a fundamental challenge of the energy transition: renewable assets are scaling faster than operational intelligence. As portfolios grow, traditional performance tools struggle to keep pace with data volume, asset diversity, and operational risk."
        size="default"
      />

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Virentis was created as an AI-native alternative—designed to support autonomy, resilience,
              and long-term value creation in renewable energy systems. We believe that the complexity of
              modern renewable portfolios demands a fundamentally new approach to operational intelligence.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 mt-16">
              Our Approach
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Traditional performance management tools were built for simpler times—static dashboards,
              manual analysis, and rule-based alerts that can't adapt to the dynamic nature of renewable
              energy systems. Virentis takes a different approach.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-slate-50 p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  AI-Native from Day One
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Built on agentic AI and advanced analytics, not retrofitted onto legacy systems. Every
                  feature is designed to leverage machine intelligence.
                </p>
              </div>

              <div className="bg-slate-50 p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Domain-Specific Expertise
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Purpose-built for renewable energy, with deep understanding of wind, solar, and storage
                  physics, operational constraints, and market dynamics.
                </p>
              </div>

              <div className="bg-slate-50 p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Autonomous Intelligence
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Continuous learning and adaptation without manual tuning. The platform gets smarter as
                  it processes more data and encounters more scenarios.
                </p>
              </div>

              <div className="bg-slate-50 p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Built to Scale
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Architected for portfolio-scale operations from the start, handling thousands of assets
                  across multiple technologies and geographies.
                </p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 mt-16">
              Our Team
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our team brings deep expertise in AI, energy systems, and renewable operations, with a shared
              mission: to help renewable energy operators extract maximum value from clean energy infrastructure.
              We've built systems that monitor gigawatts of renewable capacity, developed AI models that operate
              in safety-critical environments, and managed operations for some of the world's largest renewable
              portfolios.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              Together, we're building the intelligence layer that will power the next generation of renewable
              energy operations—more autonomous, more resilient, and more valuable.
            </p>
          </div>
        </div>
      </Section>

      <Section background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Join Us in Transforming Renewable Operations
          </h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            We're looking for talented individuals who want to work on real-world challenges at the
            intersection of AI and renewable energy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/careers" size="lg">
              View Careers
            </Button>
            <Button href="/book-a-demo" variant="outline" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}

