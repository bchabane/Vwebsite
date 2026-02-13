import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Section from '@/components/ui/Section'
import FeatureGrid from '@/components/FeatureGrid'
import StatsStrip from '@/components/StatsStrip'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Autonomous Intelligence for Renewable Asset Performance',
  description: 'Virentis is an AI-native, agentic intelligence platform purpose-built for renewable energy operations. Autonomous intelligence for wind, solar, and energy storage fleets.',
}

export default function HomePage() {
  const features = [
    {
      title: 'Continuous Performance Monitoring',
      description: 'Real-time intelligence across renewable fleets with autonomous detection of underperformance and abnormal behavior.',
    },
    {
      title: 'Multimodal Analysis',
      description: 'Combines SCADA, weather, events, and documentation to understand asset behavior in full context.',
    },
    {
      title: 'Decision-Ready Insights',
      description: 'Intelligence aligned with operational and financial outcomes, enabling faster and more confident decisions.',
    },
    {
      title: 'Fleet-Scale Intelligence',
      description: 'Unified platform that scales with portfolio growth without adding operational overhead.',
    },
    {
      title: 'Autonomous Diagnostics',
      description: 'AI-driven detection and diagnosis of issues across large asset fleets, prioritized by impact.',
    },
    {
      title: 'Seamless Integration',
      description: 'Works with existing data pipelines and operational workflows, providing intelligence where you need it.',
    },
  ]

  const stats = [
    { value: '10+', label: 'GW Monitored' },
    { value: '24/7', label: 'Autonomous Intelligence' },
    { value: '3', label: 'Asset Types' },
    { value: '99.9%', label: 'Platform Uptime' },
  ]

  return (
    <>
      <Hero
        title="Autonomous Intelligence for Renewable Asset Performance"
        description="Virentis is an AI-native, agentic intelligence platform purpose-built for renewable energy operations. As renewable portfolios scale in size and complexity, performance management can no longer rely on static dashboards, fragmented tools, or manual analysis."
        primaryCTA={{
          text: 'Book a Demo',
          href: '/book-a-demo',
        }}
        secondaryCTA={{
          text: 'Learn More',
          href: '/platform',
        }}
      />

      <Section background="white">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            A New Operational Layer for Renewable Energy
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Virentis introduces autonomous intelligence that continuously understands asset behavior,
            detects risks, and supports decisions across wind, solar, and energy storage fleets. By
            combining advanced analytics, domain-specific energy models, and agentic AI, Virentis helps
            renewable operators increase energy yield, improve reliability, and scale operations without
            adding overhead.
          </p>
        </div>

        <FeatureGrid features={features} columns={3} />
      </Section>

      <StatsStrip stats={stats} />

      <Section background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Virentis turns renewable data into decisions—at fleet scale
          </h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Built for renewable energy operators managing complex, multi-asset portfolios. Experience
            how autonomous intelligence transforms renewable asset performance.
          </p>
          <Button href="/book-a-demo" size="lg">
            See It in Action
          </Button>
        </div>
      </Section>
    </>
  )
}

