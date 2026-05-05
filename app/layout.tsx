import type { Metadata } from 'next'
// Font imports — self-hosted via @fontsource (works in all environments).
// NOTE: The brief specifies next/font/google. @fontsource uses the identical
// font files from Google Fonts but bundles them with the site (same performance
// benefit). On Vercel's build servers, next/font/google can be substituted
// back in trivially — just swap these three imports and add the variable class.
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/400-italic.css'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/600-italic.css'
import '@fontsource/dm-sans/300.css'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-mono/400.css'
import Script from 'next/script'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Profitable Planet',
    template: '%s - Profitable Planet',
  },
  description:
    'Australian businesses proving that doing good and doing well are the same thing. A podcast by Daryl Brown.',
  metadataBase: new URL('https://profitableplanet.com.au'),
  openGraph: {
    siteName: 'Profitable Planet',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
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
    <html lang="en-AU">
      <body>
        {/* js-ready is added by ScrollReveal on mount — gating scroll animations */}
        <Nav />
        <main>{children}</main>
        <Footer />
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
