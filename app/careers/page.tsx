import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Build the intelligence layer of renewable energy. Join Virentis to work on AI systems at the core of the global energy transition.',
}

export default function CareersPage() {
  return (
    <>
      <Hero
        title="Build the Intelligence Layer of Renewable Energy"
        description="At Virentis, we're building AI systems that operate at the core of the global energy transition. We're looking for engineers, data scientists, and energy specialists who want to work on real-world renewable challenges—where AI meets physical assets and operational impact is measurable."
        size="default"
      />

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            At Virentis, You'll Work On
          </h2>

          <div className="space-y-8">
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Large-Scale Renewable Energy Data and Systems
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Process and analyze terabytes of SCADA data, weather patterns, and operational events from
                thousands of renewable assets. Build systems that operate at fleet scale with real-time
                requirements and high reliability expectations.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                AI Models with Real Operational Consequences
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Develop machine learning models that directly impact how renewable assets are operated. Your
                work influences maintenance decisions, performance optimization, and risk management for
                billions of dollars in energy infrastructure.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Technology That Directly Supports Decarbonization
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Every improvement in renewable asset performance accelerates the energy transition. Your code
                helps wind farms, solar plants, and battery systems operate more efficiently, producing more
                clean energy and displacing fossil fuels.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            What We Value
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Deep Expertise
              </h3>
              <p className="text-slate-700 leading-relaxed">
                We value technical depth and domain knowledge. Whether you're an expert in machine learning,
                distributed systems, or renewable energy operations, we want people who go deep.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Real-World Impact
              </h3>
              <p className="text-slate-700 leading-relaxed">
                We're building for production environments where uptime, accuracy, and reliability matter.
                Your work needs to perform in the real world, not just in notebooks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Systems Thinking
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Renewable energy is complex. We need people who can reason about interconnected systems,
                understand tradeoffs, and build solutions that work at scale.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Mission Alignment
              </h3>
              <p className="text-slate-700 leading-relaxed">
                We're here to accelerate the energy transition. If you care about climate and want your work
                to contribute to a sustainable future, you'll fit in.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Open Roles
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:border-accent-500 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Senior Machine Learning Engineer</h3>
                  <p className="text-slate-600">Remote • Full-time</p>
                </div>
                <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                  Engineering
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Build autonomous intelligence systems for renewable energy asset performance. Work on anomaly
                detection, predictive models, and agentic AI systems operating at fleet scale.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:border-accent-500 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Full-Stack Software Engineer</h3>
                  <p className="text-slate-600">Remote • Full-time</p>
                </div>
                <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                  Engineering
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Design and build production systems for renewable energy data processing, analytics, and
                visualization. Work across the stack from data pipelines to user interfaces.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:border-accent-500 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Renewable Energy Analyst</h3>
                  <p className="text-slate-600">Remote • Full-time</p>
                </div>
                <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                  Domain Expertise
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Bridge technical systems and renewable energy operations. Help design analytics, validate
                models, and ensure our platform meets the needs of wind, solar, and storage operators.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Join Us in Shaping Renewable Operations
          </h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Intelligently and at scale. Interested in joining Virentis? Get in touch.
          </p>
          <Button href="/book-a-demo" size="lg">
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  )
}

