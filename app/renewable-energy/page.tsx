import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Section from '@/components/ui/Section'
import UseCaseSection from '@/components/UseCaseSection'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Renewable Energy',
  description: 'Autonomous intelligence across wind, solar, and energy storage. Continuous, fleet-wide intelligence for renewable asset performance.',
}

export default function RenewableEnergyPage() {
  const windBenefits = [
    'Turbine-level performance tracking',
    'Balance-of-plant diagnostics',
    'Fleet-wide optimization',
    'Predictive maintenance insights',
  ]

  const solarBenefits = [
    'Inverter and string-level monitoring',
    'Site-level performance optimization',
    'Degradation tracking',
    'Weather-adjusted analysis',
  ]

  const storageBenefits = [
    'Availability and response tracking',
    'Degradation monitoring',
    'Operational behavior analysis',
    'Cycle optimization',
  ]

  return (
    <>
      <Hero
        title="Autonomous Intelligence Across Wind, Solar, and Storage"
        description="Renewable energy assets operate in dynamic, uncertain environments—driven by weather, aging equipment, and evolving grid constraints. Virentis is designed to manage that complexity."
        size="default"
      />

      <Section background="white">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Continuous, Fleet-Wide Intelligence
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The platform provides continuous, fleet-wide intelligence across wind turbines, solar arrays,
            and energy storage systems—enabling renewable operators to detect performance losses, diagnose
            issues, and optimize assets at scale.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="space-y-20">
          <UseCaseSection
            title="Wind"
            description="Comprehensive intelligence for utility-scale wind operations, from individual turbines to fleet-wide performance."
            items={windBenefits}
          />

          <UseCaseSection
            title="Solar"
            description="Advanced monitoring and diagnostics for solar portfolios, tracking performance at every level from strings to sites."
            items={solarBenefits}
            reverse
          />

          <UseCaseSection
            title="Energy Storage"
            description="Specialized intelligence for battery storage systems, optimizing availability, performance, and asset health."
            items={storageBenefits}
          />
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Virentis Enables Renewable Operators To
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Detect Performance Losses Before They Impact Revenue
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Autonomous anomaly detection identifies underperformance in real time, allowing teams to
                address issues before they compound into significant revenue losses.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Diagnose Issues Autonomously Across Large Asset Fleets
              </h3>
              <p className="text-slate-700 leading-relaxed">
                AI-driven diagnostics analyze patterns across thousands of assets, identifying root causes
                and similar issues across the portfolio without manual investigation.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Prioritize Actions Based on Operational and Financial Impact
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Every insight is ranked by revenue impact and operational urgency, helping teams focus on
                what matters most and optimize resource allocation.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Improve Long-Term Asset Health and Energy Yield
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Continuous monitoring and predictive insights support proactive maintenance strategies,
                extending asset life and maximizing lifetime energy production.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Virentis Helps Renewable Portfolios Operate Smarter
          </h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Every day, at scale. Experience autonomous intelligence for renewable energy assets.
          </p>
          <Button href="/book-a-demo" size="lg">
            Request a Demo
          </Button>
        </div>
      </Section>
    </>
  )
}

