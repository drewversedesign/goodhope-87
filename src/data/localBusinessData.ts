export const createLocalBusinessStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://kaweesachildrensministry.org/#organization',
  name: 'Good Hope Ministries',
  alternateName: 'Kaweesa Children\'s Ministry',
  description: 'Leading children\'s ministry and NGO in Kampala, Uganda providing education, healthcare, and community development services',
  url: 'https://kaweesachildrensministry.org',
  image: 'https://kaweesachildrensministry.org/social-share-image.jpg',
  logo: 'https://kaweesachildrensministry.org/social-share-image.jpg',
  telephone: '+256-XXX-XXXXXX',
  email: 'goodhopeministries113@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kampala Central',
    addressLocality: 'Kampala',
    addressRegion: 'Central Region',
    postalCode: '00000',
    addressCountry: 'UG'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0.3476,
    longitude: 32.5825
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    }
  ],
  servesCuisine: null,
  priceRange: 'Free Services',
  currenciesAccepted: 'UGX, USD',
  paymentAccepted: 'Donations',
  areaServed: [
    'Kampala',
    'Central Region Uganda',
    'Wakiso',
    'Mukono',
    'Entebbe'
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 0.3476,
      longitude: 32.5825
    },
    geoRadius: '50000'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Children Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Child Education Services',
          description: 'Quality education programs for children in Kampala and surrounding areas',
          areaServed: 'Kampala, Uganda'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Health Screening Programs',
          description: 'Comprehensive health checkups and medical support for children',
          areaServed: 'Central Region, Uganda'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Community Development',
          description: 'Community outreach and development programs for families',
          areaServed: 'Uganda'
        }
      }
    ]
  }
});

export const createWebsiteStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://kaweesachildrensministry.org/#website',
  url: 'https://kaweesachildrensministry.org',
  name: 'Good Hope Ministries - Children\'s Ministry Uganda',
  description: 'Official website of Good Hope Ministries, a leading children\'s NGO in Kampala, Uganda',
  publisher: {
    '@id': 'https://kaweesachildrensministry.org/#organization'
  },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://kaweesachildrensministry.org/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
});

export const createBreadcrumbStructuredData = (items: Array<{name: string, url: string}>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});