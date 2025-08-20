
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SEOProps } from '../types/seo';
import { 
  createAbsoluteUrl, 
  enhanceKeywords, 
  createKeywordString, 
  getPageLocation, 
  getPageRegion,
  createHreflangTags,
  generateLocalSEOTags
} from '../utils/seoHelpers';
import {
  createOrganizationStructuredData,
  createBlogPostStructuredData,
  createEducationCenterFAQData,
  createHealthScreeningFAQData
} from '../data/structuredData';
import {
  createLocalBusinessStructuredData,
  createWebsiteStructuredData,
  createBreadcrumbStructuredData
} from '../data/localBusinessData';

const SEO: React.FC<SEOProps> = ({
  title = 'Good Hope Ministries - Transforming Lives Through Love and Care',
  description = 'Good Hope Ministries is a Ugandan foundation dedicated to improving the lives of children through education, health, protection, and community development programs.',
  type = 'website',
  name = 'Good Hope Ministries',
  imageUrl = '/social-share-image.jpg',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['children ministry', 'Uganda foundation', 'child welfare', 'education programs', 'community development', 'child protection', 'charitable organization'],
  isBlogPost = false
}) => {
  const location = useLocation();
  const currentUrl = createAbsoluteUrl(location.pathname);
  const absoluteImageUrl = createAbsoluteUrl(imageUrl);
  
  // Enhanced keywords for specific posts
  const enhancedKeywords = enhanceKeywords(location.pathname, keywords);
  const keywordString = createKeywordString(enhancedKeywords, category);
  
  // Geographic data
  const pageLocation = getPageLocation(location.pathname);
  const pageRegion = getPageRegion(location.pathname);
  const hreflangTags = createHreflangTags(location.pathname);
  const localSEOTags = generateLocalSEOTags(pageLocation, 'Children Ministry Services');

  // Create structured data
  const organizationStructuredData = createOrganizationStructuredData();
  const localBusinessStructuredData = createLocalBusinessStructuredData();
  const websiteStructuredData = createWebsiteStructuredData();
  
  // Breadcrumb data
  const breadcrumbItems = [
    { name: 'Home', url: 'https://goodhopeministries.netlify.app' }
  ];
  
  if (location.pathname !== '/') {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    pathSegments.forEach((segment, index) => {
      const url = 'https://goodhopeministries.netlify.app/' + pathSegments.slice(0, index + 1).join('/');
      const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      breadcrumbItems.push({ name, url });
    });
  }
  
  const breadcrumbStructuredData = createBreadcrumbStructuredData(breadcrumbItems);
  
  const blogPostStructuredData = isBlogPost && publishDate 
    ? createBlogPostStructuredData(
        currentUrl,
        title,
        absoluteImageUrl,
        publishDate,
        modifiedDate || publishDate,
        author || name,
        description,
        enhancedKeywords,
        category
      ) 
    : null;

  // Page-specific FAQ data
  const educationCenterFAQData = location.pathname.includes('education-center-kampala') 
    ? createEducationCenterFAQData() 
    : null;
    
  const healthScreeningFAQData = location.pathname.includes('health-screening-children') 
    ? createHealthScreeningFAQData() 
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Geographic and Local SEO Meta Tags */}
      <meta name="geo.region" content={localSEOTags['geo.region']} />
      <meta name="geo.placename" content={localSEOTags['geo.placename']} />
      <meta name="geo.position" content={localSEOTags['geo.position']} />
      <meta name="ICBM" content={localSEOTags['ICBM']} />
      <meta name="location" content={pageLocation} />
      <meta name="coverage" content={pageRegion} />
      
      {/* Dublin Core Metadata */}
      {Object.entries(localSEOTags).map(([key, value]) => (
        key.startsWith('DC.') && <meta key={key} name={key} content={value as string} />
      ))}
      
      {/* Additional SEO Meta Tags */}
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="copyright" content="Good Hope Ministries" />
      <meta name="reply-to" content="goodhopeministries113@gmail.com" />
      <meta name="owner" content="Good Hope Ministries" />
      <meta name="classification" content="Non-Profit Organization" />
      <meta name="category" content="Charity, Education, Healthcare, Community Development" />
      <meta name="coverage" content="Uganda, East Africa" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="Safe For Kids" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Good Hope Ministries" />
      <meta property="og:locale" content="en_US" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {isBlogPost && <meta property="article:publisher" content="https://goodhopeministries.netlify.app" />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={author || name} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* Hreflang Tags */}
      {hreflangTags.map(({ lang, href }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={href} />
      ))}
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#ea580c" />
      <meta name="msapplication-TileColor" content="#ea580c" />
      <meta name="application-name" content="Good Hope Ministries" />
      <meta name="apple-mobile-web-app-title" content="Good Hope Ministries" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(localBusinessStructuredData)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
      
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
      
      {educationCenterFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(educationCenterFAQData)}
        </script>
      )}
      
      {healthScreeningFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(healthScreeningFAQData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
