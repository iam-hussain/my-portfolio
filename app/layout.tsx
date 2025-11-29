import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/src/config/site'
import { ThemeProvider } from '@/components/theme/theme-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap', // Optimize font loading
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap', // Optimize font loading
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.links.website),
  title: {
    default: `${siteConfig.personal.fullName} | ${siteConfig.personal.role}`,
    template: `%s | ${siteConfig.personal.fullName}`,
  },
  description: siteConfig.personal.headline,
  keywords: [
    'Full-Stack Engineer',
    'Senior Full-Stack Engineer',
    'Next.js',
    'Node.js',
    'GraphQL',
    'AWS',
    'React',
    'TypeScript',
    'Frontend Engineer',
    'Backend Engineer',
    'Open Finance',
    'FinTech',
    'Dubai',
    'Remote Engineer',
    'Cloud-Native',
    'Microservices',
    'CI/CD',
    'Product-Focused Engineer',
    'Performance-Driven',
    'AI Integration',
    'LangChain',
    'OpenAI',
  ],
  authors: [{ name: siteConfig.personal.fullName }],
  creator: siteConfig.personal.fullName,
  publisher: siteConfig.personal.fullName,
  applicationName: `${siteConfig.personal.fullName} Portfolio`,
  referrer: 'origin-when-cross-origin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.links.website,
    siteName: `${siteConfig.personal.fullName} Portfolio`,
    title: `${siteConfig.personal.fullName} | ${siteConfig.personal.role}`,
    description: siteConfig.personal.headline,
    images: [
      {
        url: '/share.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.personal.fullName} - ${siteConfig.personal.role}`,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.personal.fullName} | ${siteConfig.personal.role}`,
    description: siteConfig.personal.headline,
    images: ['/share.jpg'],
    creator: `@${siteConfig.personal.shortName.toLowerCase()}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: siteConfig.links.website,
  },
  category: 'Portfolio',
  classification: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.personal.fullName,
    givenName: siteConfig.personal.shortName,
    jobTitle: siteConfig.personal.role,
    url: siteConfig.links.website,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.personal.location,
    },
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.github,
      siteConfig.contact.calendly,
    ],
    knowsAbout: [
      'Full-Stack Development',
      'Node.js',
      'React',
      'TypeScript',
      'GraphQL',
      'AWS',
      'Cloud Architecture',
      'Microservices',
      'CI/CD',
      'Open Finance',
      'AI Integration',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Software Engineering',
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" href="/share.jpg" as="image" type="image/jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
