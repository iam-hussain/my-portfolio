import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { personalInfo } from '@/lib/data/personal-info'
import { ThemeProvider } from '@/components/theme/theme-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Jakir Hussain | Senior Full-Stack Engineer',
  description:
    'Senior Full-Stack Engineer with 8+ years building cloud-native, AI-integrated platforms using Node.js, React, and GraphQL. Specializes in microservice architecture, CI/CD automation, and cloud deployments.',
  keywords: [
    'Full-Stack Engineer',
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
  ],
  authors: [{ name: 'Jakir Hussain' }],
  creator: 'Jakir Hussain',
  publisher: 'Jakir Hussain',
  openGraph: {
    title: 'Jakir Hussain | Senior Full-Stack Engineer',
    description: 'Building fast, resilient, and delightful digital experiences across frontend, backend, and cloud.',
    url: personalInfo.website,
    siteName: 'Jakir Hussain Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jakir Hussain | Senior Full-Stack Engineer',
    description: 'Building fast, resilient, and delightful digital experiences',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(personalInfo.website),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: personalInfo.website,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: personalInfo.location,
    },
    sameAs: [personalInfo.linkedin, personalInfo.github],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
