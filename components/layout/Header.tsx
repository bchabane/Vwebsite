'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { trackCTAClick } from '@/lib/analytics'

export default function Header() {
  const pathname = usePathname()

  const navigation = [
    { name: 'Platform', href: '/platform' },
    { name: 'Industries', href: '/industries' },
    { name: 'Renewable Energy', href: '/renewable-energy' },
    { name: 'Company', href: '/company' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L20 32L32 8" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="20" cy="32" r="3" fill="#14b8a6"/>
            </svg>
            <span className="text-xl font-bold text-slate-900">Virentis</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? 'text-accent-700 bg-accent-50'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button
              href="/book-a-demo"
              size="md"
              onClick={() => trackCTAClick('Book a Demo', 'header')}
            >
              Book a Demo
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden pb-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive(item.href)
                  ? 'text-accent-700 bg-accent-50'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </Container>
    </header>
  )
}

