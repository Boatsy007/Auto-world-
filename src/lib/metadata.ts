import { Metadata } from 'next'

const baseUrl = 'https://autoworlddetailing.com.au'

interface PageMetadataProps {
  title: string
  description: string
  path?: string
  keywords?: string[]
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  keywords = [],
}: PageMetadataProps): Metadata {
  const url = `${baseUrl}${path}`
  const defaultKeywords = [
    'car detailing Gold Coast',
    'auto detailing Upper Coomera',
    'ceramic coating Gold Coast',
    'paint protection film Queensland',
    'Auto World Detailing',
    'paint correction Gold Coast',
    'car wash Gold Coast',
  ]

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: 'Auto World Detailing' }],
    creator: 'Auto World Detailing',
    publisher: 'Auto World Detailing',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: 'Auto World Detailing',
      locale: 'en_AU',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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
}
