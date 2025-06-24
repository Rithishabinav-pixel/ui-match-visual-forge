
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  author?: string;
  structuredData?: object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  ogImage = "https://jkbhousing.com/lovable-uploads/cf2c111e-2a85-4fba-af35-2d35a8e86479.png",
  ogType = "website",
  keywords,
  author,
  structuredData = []
}) => {
  const fullTitle = title.includes('JKB Housing') ? title : `${title} | JKB Housing`;
  const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://jkbhousing.com');
  const siteName = "JKB Housing";

  return (
    <Helmet>
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="_QExo2Wq-yY3HqRYZrG79Gks8hYrbTRX-iysmtIKwlI" />

      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-N4HPRF9HT5"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N4HPRF9HT5');
        `}
      </script>

      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#D92546" />

      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};
