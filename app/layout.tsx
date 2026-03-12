import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/src/config/site'
import { metadataConfig } from '@/src/config/metadata'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { getAllStructuredData } from '@/lib/seo/structured-data'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.links.website),
  title: {
    default: metadataConfig.title.default,
    template: metadataConfig.title.template,
  },
  description: metadataConfig.description,
  keywords: [...metadataConfig.keywords],
  authors: [{ name: metadataConfig.author }],
  creator: metadataConfig.author,
  publisher: metadataConfig.author,
  applicationName: `${siteConfig.personal.fullName} Portfolio`,
  referrer: 'origin-when-cross-origin',
  openGraph: metadataConfig.openGraph,
  twitter: metadataConfig.twitter,
  robots: metadataConfig.robots,
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: metadataConfig.canonical,
  },
  category: 'Portfolio',
  classification: 'Personal Portfolio',
  other: {
    'profile:first_name': 'Jakir',
    'profile:last_name': 'Hussain',
    'article:author': 'https://linkedin.com/in/iam-hussain',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = getAllStructuredData()

  return (
    <html lang="en" className="dark scrollbar-theme" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no" />

        {/* Preconnect to external origins for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* AI/LLM discovery */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Context (Summary)" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM Context (Full)" />
        <meta property="ai:llms_txt" content="https://iam-hussain.site/llms.txt" />
        <meta property="ai:llms_full_txt" content="https://iam-hussain.site/llms-full.txt" />

        {/* Structured data */}
        {structuredData.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var theme = (stored === 'light' || stored === 'dark') ? stored : 'dark';
                  document.documentElement.classList.remove('dark', 'light');
                  document.documentElement.classList.add(theme);
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
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
