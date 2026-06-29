export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Auto World Detailing',
    description:
      "Gold Coast's premier automotive detailing studio specialising in ceramic coating, paint protection film, paint correction, and full detail packages.",
    url: 'https://autoworlddetailing.com.au',
    telephone: '+61468336447',
    email: 'info@autoworlddetailing.com.au',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Upper Coomera',
      addressRegion: 'QLD',
      postalCode: '4209',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -27.8667,
      longitude: 153.3167,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '15:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '$$$',
    servesCuisine: undefined,
    areaServed: [
      'Upper Coomera',
      'Coomera',
      'Helensvale',
      'Hope Island',
      'Oxenford',
      'Pimpama',
      'Gold Coast',
    ],
    hasMap: 'https://maps.google.com/?q=Upper+Coomera+QLD+4209',
    sameAs: ['https://www.instagram.com/autoworlddetailing'],
  }
}

export function getServiceSchema(
  name: string,
  description: string,
  price?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'AutoRepair',
      name: 'Auto World Detailing',
      url: 'https://autoworlddetailing.com.au',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Gold Coast, QLD, Australia',
    },
    ...(price && {
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency: 'AUD',
      },
    }),
  }
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://autoworlddetailing.com.au${item.url}`,
    })),
  }
}
