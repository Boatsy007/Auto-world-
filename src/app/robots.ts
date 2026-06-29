import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://autoworlddetailing.com.au/sitemap.xml',
    host: 'https://autoworlddetailing.com.au',
  }
}
