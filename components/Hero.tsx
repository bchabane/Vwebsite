import { ReactNode } from 'react'
import Container from './ui/Container'
import Button from './ui/Button'

interface HeroProps {
  title: string
  subtitle?: string
  description: string | ReactNode
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  size?: 'default' | 'large'
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  size = 'large',
}: HeroProps) {
  const paddingClasses = size === 'large' ? 'py-20 md:py-28 lg:py-36' : 'py-16 md:py-20 lg:py-24'

  return (
    <section className={`gradient-bg ${paddingClasses}`}>
      <Container size="large">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <p className="text-accent-600 font-semibold text-sm md:text-base uppercase tracking-wide mb-4">
              {subtitle}
            </p>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight text-balance">
            {title}
          </h1>

          <div className="text-lg md:text-xl lg:text-2xl text-slate-700 mb-10 leading-relaxed max-w-3xl mx-auto">
            {description}
          </div>

          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {primaryCTA && (
                <Button href={primaryCTA.href} size="lg">
                  {primaryCTA.text}
                </Button>
              )}
              {secondaryCTA && (
                <Button href={secondaryCTA.href} variant="outline" size="lg">
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

