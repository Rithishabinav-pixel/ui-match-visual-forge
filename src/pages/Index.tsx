
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
import { seoPages, organizationSchema, websiteSchema, webPageSchema } from '@/utils/seoData';

const Index = () => {
  useAOS();

  const structuredData = [
    organizationSchema,
    websiteSchema,
    webPageSchema(
      "JKB Housing - Premium Real Estate & Construction",
      "Leading construction company in Chennai offering premium residential & commercial projects with 15+ years of experience.",
      "https://jkbhousing.com/"
    )
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
