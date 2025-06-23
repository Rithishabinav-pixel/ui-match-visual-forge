
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactDetails } from '@/components/contact/ContactDetails';
import { ContactMap } from '@/components/contact/ContactMap';
import { SocialMediaLinks } from '@/components/contact/SocialMediaLinks';
import { ContactCTA } from '@/components/contact/ContactCTA';
import { SEOHead } from '@/components/seo/SEOHead';
import { seoPages, organizationSchema, webPageSchema, breadcrumbSchema, localBusinessSchema } from '@/utils/seoData';

const Contact = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://jkbhousing.com/" },
    { name: "Contact", url: "https://jkbhousing.com/contact" }
  ];

  const structuredData = [
    organizationSchema,
    localBusinessSchema,
    webPageSchema(
      "Contact JKB Housing Chennai - CMDA & RERA Approved Flats",
      "Contact Chennai's trusted builder JKB Housing for premium CMDA & RERA approved flats. Call 97103 97104 for site visits and consultations.",
      "https://jkbhousing.com/contact",
      "ContactPage"
    ),
    breadcrumbSchema(breadcrumbs),
    {
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      "telephone": "+91-97103-97104",
      "contactType": "customer service",
      "areaServed": "Chennai",
      "availableLanguage": ["English", "Tamil"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={seoPages.contact.title}
        description={seoPages.contact.description}
        keywords={seoPages.contact.keywords}
        canonical="https://jkbhousing.com/contact"
        structuredData={structuredData}
        author="JKB Housing"
        ogImage="https://jkbhousing.com/lovable-uploads/cf2c111e-2a85-4fba-af35-2d35a8e86479.png"
      />
      <Header />
      
      <ContactHero />

      {/* Contact Form & Details */}
      <section className="py-16 max-md:py-8">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactDetails />
          </div>
        </div>
      </section>

      <ContactMap />
      <SocialMediaLinks />
      <ContactCTA />

      <Footer />
    </div>
  );
};

export default Contact;
