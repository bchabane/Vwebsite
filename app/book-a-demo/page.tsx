import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Section from '@/components/ui/Section'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Book a Demo',
  description: 'Experience how Virentis transforms renewable energy data into autonomous, decision-ready intelligence. See the platform in action.',
}

export default function BookDemoPage() {
  return (
    <>
      <Hero
        title="See Autonomous Renewable Intelligence in Action"
        description="Experience how Virentis transforms renewable energy data into autonomous, decision-ready intelligence."
        size="default"
      />

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
              In a Personalized Demo, You'll See How the Platform
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Monitors Performance
                </h3>
                <p className="text-sm text-slate-600">
                  Across wind, solar, and storage assets with continuous intelligence
                </p>
              </div>

              <div className="text-center">
                <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Identifies Risks
                </h3>
                <p className="text-sm text-slate-600">
                  Detects underperformance and operational risks autonomously
                </p>
              </div>

              <div className="text-center">
                <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Supports Decisions
                </h3>
                <p className="text-sm text-slate-600">
                  Across engineering, operations, and asset management teams
                </p>
              </div>
            </div>

            <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 mb-12">
              <p className="text-slate-900 text-center leading-relaxed">
                If you manage renewable assets at scale, Virentis shows what autonomous intelligence can unlock.
                <span className="font-semibold"> Book a demo to explore the future of renewable asset performance.</span>
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Request a Demo
            </h3>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}

