import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Partners',
  description: 'Virentis collaborates with renewable asset owners, operators, OEMs, and technology partners to accelerate intelligent operations.',
}

export default function PartnersPage() {
  return (
    <>
      <Hero
        title="Partnering Across the Renewable Ecosystem"
        description="Virentis collaborates with renewable asset owners, operators, OEMs, and technology partners to accelerate intelligent operations. Our partner ecosystem enables seamless integration, joint development, and faster deployment across large renewable portfolios."
        size="default"
      />

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Our Partner Ecosystem Enables
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Seamless Integration with SCADA, Weather, and Enterprise Systems
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Virentis integrates with leading SCADA platforms, weather data providers, and enterprise
                systems to create a unified intelligence layer. Our technology partnerships ensure data
                flows smoothly from source systems to actionable insights.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pre-built connectors for major SCADA systems
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Integration with weather and forecast providers
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  APIs for enterprise asset management systems
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-12">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Joint Development of Renewable-Specific Analytics and Workflows
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We work closely with OEMs, operators, and technical service providers to develop analytics
                tailored to specific asset types, technologies, and operational contexts. These partnerships
                ensure Virentis intelligence reflects real-world operational needs.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  OEM-specific performance models
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom workflows for operational teams
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Technology-specific diagnostics
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-12">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Faster Deployment Across Large Renewable Portfolios
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Through strategic partnerships, Virentis can be deployed faster and more efficiently across
                multi-gigawatt portfolios. Our partners help with implementation, training, and ongoing
                support to ensure successful adoption.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Accelerated onboarding and deployment
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Training and change management support
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ongoing technical partnership
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            Partner Types
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Technology Partners
              </h3>
              <p className="text-slate-700 leading-relaxed">
                SCADA providers, data platforms, and enterprise software vendors who integrate with Virentis
                to create seamless operational workflows.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                OEM Partners
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Wind turbine, solar inverter, and storage system manufacturers who collaborate on
                equipment-specific analytics and diagnostics.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Service Partners
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Operations, maintenance, and technical service providers who use Virentis intelligence to
                deliver better outcomes for their clients.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Together, We Move From Data to Action
          </h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Efficiently and at scale. Interested in partnering with Virentis?
          </p>
          <Button href="/book-a-demo" size="lg">
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  )
}

