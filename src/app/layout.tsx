import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Toaster } from '@/components/ui/toaster'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Content on Cue Media - Professional Video Production',
  description: 'Professional video production services for businesses. From promotional videos to cinematic content, we bring your vision to life.',
  keywords: ['video production', 'promotional videos', 'business videos', 'content creation'],
  authors: [{ name: 'Content on Cue Media' }],
  creator: 'Content on Cue Media',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Content on Cue Media',
    title: 'Content on Cue Media - Professional Video Production',
    description: 'Professional video production services for businesses. From promotional videos to cinematic content, we bring your vision to life.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Content on Cue Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content on Cue Media - Professional Video Production',
    description: 'Professional video production services for businesses. From promotional videos to cinematic content, we bring your vision to life.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}