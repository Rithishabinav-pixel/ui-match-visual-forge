
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactDetails } from '@/components/contact/ContactDetails';
import { ContactMap } from '@/components/contact/ContactMap';
import { SocialMediaLinks } from '@/components/contact/SocialMediaLinks';
import { ContactCTA } from '@/components/contact/ContactCTA';
import { SEOHead } from '@/components/seo/SEOHead';
import { seoPages, organizationSchema, webPageSchema, breadcrumbSchema } from '@/utils/seoData';

const Contact = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://jkbhousing.com/" },
    { name: "Contact", url: "https://jkbhousing.com/contact" }
  ];

  const structuredData = [
    organizationSchema,
    webPageSchema(
      "Contact JKB Housing",
      "Contact JKB Housing for premium construction services and expert consultation for residential & commercial projects.",
      "https://jkbhousing.com/contact"
    ),
    breadcrumbSchema(breadcrumbs)
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
