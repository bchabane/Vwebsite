import Link from 'next/link'
import Container from '@/components/ui/Container'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { name: 'Platform', href: '/platform' },
    ],
    Industries: [
      { name: 'Industries Overview', href: '/industries' },
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
    <footer className="bg-black text-slate-400">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity mb-4">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L20 32L32 8" stroke="#64748b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="32" r="3" fill="#64748b"/>
                </svg>
                <span className="text-xl font-bold text-white">Virentis</span>
              </Link>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Autonomous intelligence for renewable asset performance.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/company/virentis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Visit Virentis on LinkedIn"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
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
            <p className="text-sm text-slate-500 text-center">
              © {currentYear} Virentis. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

