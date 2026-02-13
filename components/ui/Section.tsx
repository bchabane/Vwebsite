import { ReactNode } from 'react'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerSize?: 'default' | 'large' | 'narrow'
  background?: 'white' | 'gray' | 'gradient'
}

export default function Section({
  children,
  className = '',
  containerSize = 'default',
  background = 'white'
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    gradient: 'gradient-bg',
  }

  return (
    <section className={`py-16 md:py-24 lg:py-32 ${bgClasses[background]} ${className}`}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}

