import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Virentis – Autonomous Intelligence for Renewable Asset Performance',
    template: '%s | Virentis',
  },
  description: 'AI-native, agentic intelligence platform purpose-built for renewable energy operations. Autonomous intelligence for wind, solar, and energy storage fleets.',
  keywords: ['renewable energy', 'AI', 'wind', 'solar', 'energy storage', 'asset management', 'performance monitoring'],
  authors: [{ name: 'Virentis' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Virentis',
    title: 'Virentis – Autonomous Intelligence for Renewable Asset Performance',
    description: 'AI-native platform for renewable energy operations. Continuous intelligence for wind, solar, and storage assets.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virentis – Autonomous Intelligence for Renewable Asset Performance',
    description: 'AI-native platform for renewable energy operations.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Virentis',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/logo.svg`,
              description: 'AI-native, agentic intelligence platform purpose-built for renewable energy operations.',
              foundingDate: '2024',
              industry: 'Renewable Energy Software',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Virentis',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

