
export const createAbsoluteUrl = (path: string, baseUrl: string = 'https://kaweesachildrensministry.org'): string => {
  return path.startsWith('http') ? path : `${baseUrl}${path}`;
};

export const enhanceKeywords = (pathname: string, baseKeywords: string[]): string[] => {
  // Geographic base keywords for all pages
  const geoKeywords = [
    'Kampala Uganda',
    'Central Region Uganda',
    'East Africa NGO',
    'Uganda charity',
    'Kampala children services',
    'Uganda community development'
  ];

  if (pathname.includes('education-center-kampala')) {
    return [
      ...baseKeywords,
      ...geoKeywords,
      'education center Kampala',
      'schools in Kampala',
      'children education Uganda',
      'learning facilities Uganda',
      'quality education Kampala',
      'educational support Uganda',
      'school programs Central Region',
      'academic excellence Uganda',
      'educational infrastructure Kampala',
      'student support Uganda',
      'primary education Kampala',
      'secondary education Uganda'
    ];
  }
  
  if (pathname.includes('health-screening-children')) {
    return [
      ...baseKeywords,
      ...geoKeywords,
      'health screening Kampala',
      'children health Uganda',
      'medical checkups Kampala',
      'vaccinations Uganda',
      'health education Central Region',
      'preventive healthcare Uganda',
      'child health programs Kampala',
      'medical outreach Uganda',
      'healthcare access Kampala',
      'community health Uganda',
      'pediatric care Uganda',
      'child wellness programs'
    ];
  }

  if (pathname.includes('about')) {
    return [
      ...baseKeywords,
      ...geoKeywords,
      'NGO Uganda history',
      'children ministry background',
      'Uganda foundation story',
      'charity organization Kampala',
      'community impact Uganda',
      'social work Uganda'
    ];
  }

  if (pathname.includes('programs')) {
    return [
      ...baseKeywords,
      ...geoKeywords,
      'children programs Uganda',
      'community programs Kampala',
      'social programs Uganda',
      'development programs Central Region',
      'outreach programs Uganda'
    ];
  }

  if (pathname.includes('donate')) {
    return [
      ...baseKeywords,
      ...geoKeywords,
      'donate to Uganda charity',
      'support children Uganda',
      'help kids Kampala',
      'charity donations Uganda',
      'sponsor child Uganda'
    ];
  }

  if (pathname.includes('volunteer')) {
    return [
      ...baseKeywords,
      ...geoKeywords,
      'volunteer Uganda',
      'volunteer opportunities Kampala',
      'mission work Uganda',
      'community service Uganda',
      'volunteer abroad Uganda'
    ];
  }

  if (pathname.includes('contact')) {
    return [
      ...baseKeywords,
      ...geoKeywords,
      'contact Uganda NGO',
      'reach out Kampala charity',
      'Good Hope Ministries contact',
      'Uganda foundation contact'
    ];
  }
  
  return [...baseKeywords, ...geoKeywords];
};

export const createKeywordString = (keywords: string[], category?: string): string => {
  return category 
    ? [...keywords, category.toLowerCase()].join(', ') 
    : keywords.join(', ');
};

export const getPageLocation = (pathname: string): string => {
  if (pathname.includes('education-center-kampala')) return 'Kampala, Uganda';
  if (pathname.includes('health-screening-children')) return 'Central Region, Uganda';
  return 'Kampala, Uganda';
};

export const getPageRegion = (pathname: string): string => {
  return 'Central Region, Uganda';
};

export const createHreflangTags = (pathname: string) => [
  { lang: 'en', href: `https://kaweesachildrensministry.org${pathname}` },
  { lang: 'x-default', href: `https://kaweesachildrensministry.org${pathname}` }
];

export const generateLocalSEOTags = (location: string, service: string) => ({
  'geo.region': 'UG-C',
  'geo.placename': location,
  'geo.position': '0.3476;32.5825',
  'ICBM': '0.3476, 32.5825',
  'DC.title': `${service} in ${location}`,
  'DC.creator': 'Good Hope Ministries',
  'DC.subject': `${service}, ${location}`,
  'DC.description': `Professional ${service.toLowerCase()} services in ${location}`,
  'DC.publisher': 'Good Hope Ministries',
  'DC.contributor': 'Good Hope Ministries',
  'DC.date': new Date().toISOString().split('T')[0],
  'DC.type': 'Text',
  'DC.format': 'text/html',
  'DC.identifier': `https://kaweesachildrensministry.org`,
  'DC.language': 'en',
  'DC.coverage': location,
  'DC.rights': 'Copyright Good Hope Ministries'
});
