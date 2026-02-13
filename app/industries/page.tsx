import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Built exclusively for renewable energy operators managing complex, multi-asset portfolios across wind, solar, and energy storage.',
}

export default function IndustriesPage() {
  return (
    <>
      <Hero
        title="Designed for Renewable Energy at Scale"
        description="Virentis is built exclusively for renewable energy operators managing complex, multi-asset portfolios. The platform adapts across technologies and geographies while maintaining a consistent intelligence layer—allowing operators to standardize performance management across diverse renewable assets."
        size="default"
      />

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Who We Serve
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Independent Power Producers (IPPs)
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Maximize energy yield and asset availability across geographically distributed portfolios.
                Virentis provides centralized intelligence for multi-technology fleets, enabling IPPs to
                optimize performance while scaling operations efficiently.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fleet-wide performance visibility
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Autonomous anomaly detection
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cross-asset operational insights
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-12">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Utilities
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Manage renewable assets alongside traditional generation with unified intelligence. Virentis
                helps utilities integrate renewable operations into existing workflows while maintaining
                high reliability and grid compliance.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Integration with existing systems
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reliability-focused analytics
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Grid compliance reporting
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-12">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Infrastructure Funds & Asset Managers
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Gain portfolio-level intelligence to support investment decisions and asset optimization.
                Virentis provides the operational transparency needed to maximize returns and manage risk
                across renewable infrastructure investments.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Portfolio performance benchmarking
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Risk identification and mitigation
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Value creation insights
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            A Single Operational Intelligence Platform
          </h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            From utility-scale wind farms to distributed solar and storage portfolios, Virentis delivers
            a single operational intelligence platform for the renewable enterprise.
          </p>
          <Button href="/book-a-demo" size="lg">
            Book a Demo
          </Button>
        </div>
      </Section>
    </>
  )
}

