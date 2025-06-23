
import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Projects } from '@/components/sections/Projects';
import { AboutUs } from '@/components/sections/AboutUs';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { AppDownload } from '@/components/sections/AppDownload';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { useAOS } from '@/hooks/useAOS';
import { seoPages, organizationSchema, websiteSchema, webPageSchema, localBusinessSchema } from '@/utils/seoData';

const Index = () => {
  useAOS();

  const structuredData = [
    organizationSchema,
    websiteSchema,
    localBusinessSchema,
    webPageSchema(
      "JKB Housing - Premium CMDA & RERA Approved Flats in Chennai",
      "Chennai's trusted builder for 15+ years offering quality 2BHK & 3BHK CMDA & RERA approved flats and apartments in prime locations with modern amenities and on-time delivery.",
      "https://jkbhousing.com/",
      "WebPage"
    ),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are JKB Housing projects CMDA and RERA approved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all JKB Housing projects are CMDA and RERA approved, ensuring legal compliance and transparency for all homebuyers in Chennai."
          }
        },
        {
          "@type": "Question", 
          "name": "What types of flats does JKB Housing offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "JKB Housing offers premium 2BHK and 3BHK flats and apartments with modern amenities in Chennai's prime locations."
          }
        },
        {
          "@type": "Question",
          "name": "Does JKB Housing guarantee on-time delivery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, JKB Housing has a proven track record of on-time project completion with 15+ years of experience and 160+ completed projects."
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title={seoPages.home.title}
        description={seoPages.home.description}
        keywords={seoPages.home.keywords}
        canonical="https://jkbhousing.com/"
        structuredData={structuredData}
        ogType="website"
        author="JKB Housing"
        ogImage="https://jkbhousing.com/lovable-uploads/cf2c111e-2a85-4fba-af35-2d35a8e86479.png"
      />
      <Hero />
      <Stats />
      <div id="projects">
        <Projects />
      </div>
      <AboutUs />
      <WhyChooseUs />
      <AppDownload />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
