import Link from 'next/link'
import Container from '@/components/ui/Container'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { name: 'Platform', href: '/platform' },
      { name: 'Industries', href: '/industries' },
      { name: 'Renewable Energy', href: '/renewable-energy' },
    ],
    Company: [
      { name: 'About', href: '/company' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' },
    ],
    Resources: [
      { name: 'Book a Demo', href: '/book-a-demo' },
    ],
  }

  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity mb-4">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L20 32L32 8" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="32" r="3" fill="#14b8a6"/>
                </svg>
                <span className="text-xl font-bold text-white">Virentis</span>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed">
                Autonomous intelligence for renewable asset performance.
              </p>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <p className="text-sm text-slate-400 text-center">
              © {currentYear} Virentis. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

