import { NextSeoProps } from 'next-seo'

const defaultSEO: NextSeoProps = {
  title: 'Content on Cue Media - Professional Video Production',
  description: 'Professional video production services for businesses. From promotional videos to cinematic content, we bring your vision to life.',
  canonical: process.env.NEXT_PUBLIC_SITE_URL,
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
    handle: '@contentoncue',
    site: '@contentoncue',
    cardType: 'summary_large_image',
  },
}

export function getSEO(overrides: Partial<NextSeoProps> = {}): NextSeoProps {
  return {
    ...defaultSEO,
    ...overrides,
    openGraph: {
      ...defaultSEO.openGraph,
      ...overrides.openGraph,
    },
    twitter: {
      ...defaultSEO.twitter,
      ...overrides.twitter,
    },
  }
}
