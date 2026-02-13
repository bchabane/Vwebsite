'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { trackCTAClick } from '@/lib/analytics'

export default function Header() {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Platform', href: '/platform' },
    {
      name: 'Industries',
      href: '/industries',
      dropdown: [
        { name: 'Industries Overview', href: '/industries' },
        { name: 'Renewable Energy', href: '/renewable-energy' },
      ]
    },
    {
      name: 'Company',
      href: '/company',
      dropdown: [
        { name: 'About', href: '/company' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
      ]
    },
  ]

  const isActive = (href: string) => pathname === href

  const isDropdownActive = (dropdown: any[]) => {
    return dropdown.some(item => pathname === item.href)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L20 32L32 8" stroke="#475569" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="20" cy="32" r="3" fill="#475569"/>
            </svg>
            <span className="text-xl font-bold text-slate-900">Virentis</span>
          </Link>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="relative px-1 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors group"
                >
                  {item.name}
                  {/* Underline animation on hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Dropdown Menu - Clean Enterprise Style */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl border border-slate-200 py-3">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className={`block px-6 py-3 text-sm transition-colors ${
                          isActive(dropdownItem.href)
                            ? 'text-slate-900 bg-slate-50 font-medium'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Button
              href="/book-a-demo"
              size="md"
              onClick={() => trackCTAClick('Book a Demo', 'header')}
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) || (item.dropdown && isDropdownActive(item.dropdown))
                      ? 'text-slate-900 bg-slate-100'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className={`block px-3 py-2 text-sm transition-colors ${
                          isActive(dropdownItem.href)
                            ? 'text-slate-900 bg-slate-100 font-medium'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-3 pt-2">
              <Button
                href="/book-a-demo"
                size="md"
                onClick={() => trackCTAClick('Book a Demo', 'mobile-header')}
                className="w-full"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

