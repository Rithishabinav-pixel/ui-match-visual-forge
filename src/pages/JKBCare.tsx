
import React from 'react';
import { Heart, Users, Building, Award, CheckCircle, Phone } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { seoPages, organizationSchema, webPageSchema, breadcrumbSchema } from '@/utils/seoData';

const JKBCare = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://jkbhousing.com/" },
    { name: "JKB Care", url: "https://jkbhousing.com/jkb-care" }
  ];

  const structuredData = [
    organizationSchema,
    webPageSchema(
      "JKB Care - Community Development Chennai | JKB Housing",
      "JKB Care represents our commitment to Chennai's community development through healthcare, education, and infrastructure initiatives by JKB Housing.",
      "https://jkbhousing.com/jkb-care",
      "WebPage"
    ),
    breadcrumbSchema(breadcrumbs),
    {
      "@context": "https://schema.org",
      "@type": "NonProfit",
      "name": "JKB Care",
      "parentOrganization": {
        "@type": "Organization",
        "name": "JKB Housing"
      },
      "areaServed": "Chennai",
      "foundingDate": "2010",
      "mission": "Creating positive impact in Chennai communities through healthcare, education, and infrastructure development",
      "program": [
        {
          "@type": "Thing",
          "name": "Healthcare Programs",
          "description": "Mobile health clinics and medical camps for Chennai communities"
        },
        {
          "@type": "Thing", 
          "name": "Education Support",
          "description": "School building construction and scholarship programs"
        },
        {
          "@type": "Thing",
          "name": "Infrastructure Development", 
          "description": "Essential infrastructure improvements in rural Chennai areas"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={seoPages.jkbCare.title}
        description={seoPages.jkbCare.description}
        keywords={seoPages.jkbCare.keywords}
        canonical="https://jkbhousing.com/jkb-care"
        structuredData={structuredData}
        author="JKB Housing"
        ogImage="https://jkbhousing.com/lovable-uploads/cf2c111e-2a85-4fba-af35-2d35a8e86479.png"
      />
      {/* Hero Section */}
      <section className="bg-[rgba(40,45,64,1)] text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">JKB Care</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Building homes, nurturing communities. Our commitment to Chennai's social development through meaningful initiatives and responsible construction practices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgba(40,45,64,1)] mb-4">
              Our Mission for Chennai
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              JKB Care represents our deep-rooted commitment to Chennai's community development. As a responsible builder, we believe in creating positive impact beyond our CMDA & RERA approved projects, fostering growth in healthcare, education, and infrastructure across Chennai's neighborhoods.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Heart className="w-16 h-16 text-[rgba(217,37,70,1)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-3">Community Health Chennai</h3>
              <p className="text-gray-600">
                Supporting healthcare initiatives and medical facilities in underserved Chennai communities with mobile clinics and health screenings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Users className="w-16 h-16 text-[rgba(217,37,70,1)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-3">Education Support</h3>
              <p className="text-gray-600">
                Funding educational programs and school infrastructure to empower Chennai's future generations with quality learning environments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Building className="w-16 h-16 text-[rgba(217,37,70,1)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-3">Infrastructure Development</h3>
              <p className="text-gray-600">
                Building essential infrastructure to improve quality of life in Chennai's developing areas and rural outskirts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgba(40,45,64,1)] mb-4">
              Our Initiatives
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[rgba(40,45,64,1)] mb-4">Healthcare Programs</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[rgba(217,37,70,1)]" />
                  <span>Mobile health clinics for remote villages</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[rgba(217,37,70,1)]" />
                  <span>Free medical camps and health screenings</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[rgba(217,37,70,1)]" />
                  <span>Medicine distribution programs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[rgba(217,37,70,1)]" />
                  <span>Hospital equipment donations</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[rgba(40,45,64,1)] mb-4">Education Support</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[rgba(217,37,70,1)]" />
                  <span>School building construction and renovation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[rgba(217,37,70,1)]" />
                  <span>Scholarship programs for deserving students</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[rgba(217,37,70,1)]" />
                  <span>Digital literacy initiatives</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[rgba(217,37,70,1)]" />
                  <span>Teacher training programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgba(40,45,64,1)] mb-4">
              Our Impact in Chennai
            </h2>
            <p className="text-lg text-gray-600">
              15 years of dedicated community service alongside quality home construction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-[rgba(217,37,70,1)] mb-2">50+</div>
              <div className="text-gray-600">Schools Supported in Chennai</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-[rgba(217,37,70,1)] mb-2">25+</div>
              <div className="text-gray-600">Healthcare Centers Enhanced</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-[rgba(217,37,70,1)] mb-2">1000+</div>
              <div className="text-gray-600">Chennai Families Benefited</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-[rgba(217,37,70,1)] mb-2">15</div>
              <div className="text-gray-600">Years of Community Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[rgba(40,45,64,1)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission for Chennai
          </h2>
          <p className="text-xl mb-8">
            Partner with JKB Housing in creating positive change across Chennai's communities. Together, we can build better homes and stronger neighborhoods for tomorrow's generation.
          </p>
          <a
            href="tel:9710397104"
            className="inline-flex items-center gap-3 bg-[rgba(217,37,70,1)] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[rgba(217,37,70,0.9)] transition-colors"
          >
            <Phone className="w-6 h-6" />
            Contact Us: 97103 97104
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JKBCare;
