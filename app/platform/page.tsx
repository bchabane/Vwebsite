import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Section from '@/components/ui/Section'
import FeatureGrid from '@/components/FeatureGrid'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Platform',
  description: 'An AI-native platform built for renewable operations. Unified intelligence layer for continuous performance monitoring, autonomous diagnostics, and decision-ready insights.',
}

export default function PlatformPage() {
  const capabilities = [
    {
      title: 'Continuous Performance Monitoring',
      description: 'Real-time visibility across renewable fleets with autonomous tracking of energy yield, availability, and operational status.',
    },
    {
      title: 'Autonomous Detection',
      description: 'AI-driven identification of underperformance and abnormal behavior across assets, without manual threshold configuration.',
    },
    {
      title: 'Multimodal Analysis',
      description: 'Combines SCADA data, weather conditions, maintenance events, and technical documentation for comprehensive insights.',
    },
    {
      title: 'Decision-Ready Insights',
      description: 'Intelligence aligned with operational and financial outcomes, prioritized by impact and actionability.',
    },
  ]

  return (
    <>
      <Hero
        title="An AI-Native Platform Built for Renewable Operations"
        description="The Virentis platform is designed specifically for the realities of renewable energy systems. At its core is an agentic AI engine that orchestrates performance analytics, diagnostics, and operational knowledge across assets and time horizons."
        size="default"
      />

      <Section background="white">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            A Unified Intelligence Layer
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Instead of isolated tools for monitoring, reporting, and analysis, Virentis delivers a unified
            intelligence layer that understands renewable assets in context. The platform enables continuous
            performance monitoring, autonomous diagnostics, and decision-ready insights that scale with
            portfolio growth.
          </p>
        </div>

        <FeatureGrid features={capabilities} columns={2} />
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Platform Capabilities
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Continuous Performance Monitoring Across Renewable Fleets
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Track energy yield, availability, and operational status in real time across wind, solar,
                and storage assets. Virentis provides a single view of fleet performance with intelligent
                anomaly detection and contextualized alerts.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Autonomous Detection of Underperformance and Abnormal Behavior
              </h3>
              <p className="text-slate-700 leading-relaxed">
                AI models continuously learn normal asset behavior patterns and automatically flag deviations
                that impact performance. No manual threshold tuning required—the platform adapts to your
                portfolio's unique characteristics.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Multimodal Analysis Combining SCADA, Weather, Events, and Documentation
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Integrate multiple data sources—SCADA telemetry, weather forecasts, maintenance logs, and
                technical documentation—to build comprehensive understanding of asset behavior and root causes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Decision-Ready Insights Aligned with Operational and Financial Outcomes
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Every insight is prioritized by operational impact and financial materiality. Virentis helps
                teams focus on what matters most, reducing noise and accelerating decision-making.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Intelligence That Scales With Portfolio Growth
          </h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Virentis integrates with existing data pipelines and operational workflows, providing
            intelligence that scales with portfolio growth. See how autonomous intelligence transforms
            renewable asset performance.
          </p>
          <Button href="/book-a-demo" size="lg">
            Request a Demo
          </Button>
        </div>
      </Section>
    </>
  )
}

