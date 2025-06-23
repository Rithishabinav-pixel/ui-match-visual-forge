
import React from 'react';
import { Handshake, Building2, TrendingUp, Award, Users, MapPin, Phone } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { seoPages, organizationSchema, webPageSchema, breadcrumbSchema } from '@/utils/seoData';

const JointVenture = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://jkbhousing.com/" },
    { name: "Joint Venture", url: "https://jkbhousing.com/joint-venture" }
  ];

  const structuredData = [
    organizationSchema,
    webPageSchema(
      "Joint Ventures - Real Estate Partnerships Chennai | JKB Housing",
      "Partner with JKB Housing for strategic CMDA & RERA compliant real estate development opportunities in Chennai. Investment partnerships and land development.",
      "https://jkbhousing.com/joint-venture",
      "WebPage"
    ),
    breadcrumbSchema(breadcrumbs),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Joint Venture Partnerships",
      "provider": {
        "@type": "Organization",
        "name": "JKB Housing"
      },
      "areaServed": "Chennai",
      "serviceType": "Real Estate Development Partnership",
      "description": "Strategic real estate development partnerships for CMDA & RERA compliant projects in Chennai",
      "offers": [
        {
          "@type": "Offer",
          "name": "Land Partnership",
          "description": "Collaborate with landowners for premium development opportunities"
        },
        {
          "@type": "Offer", 
          "name": "Investment Partnership",
          "description": "Joint investment in high-potential Chennai real estate projects"
        },
        {
          "@type": "Offer",
          "name": "Strategic Alliance", 
          "description": "Long-term partnerships for multiple project development"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={seoPages.jointVenture.title}
        description={seoPages.jointVenture.description}
        keywords={seoPages.jointVenture.keywords}
        canonical="https://jkbhousing.com/joint-venture"
        structuredData={structuredData}
        author="JKB Housing"
        ogImage="https://jkbhousing.com/lovable-uploads/cf2c111e-2a85-4fba-af35-2d35a8e86479.png"
      />
      {/* Hero Section */}
      <section className="bg-[rgba(40,45,64,1)] text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Joint Ventures in Chennai</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Strategic partnerships with JKB Housing for CMDA & RERA compliant real estate development opportunities that create exceptional value and shared success in Chennai's prime locations.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgba(40,45,64,1)] mb-4">
              Partnership Philosophy for Chennai
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At JKB Housing, we believe in the power of strategic collaboration. Our joint venture approach combines our 15+ years of Chennai real estate expertise with strategic partners to create CMDA & RERA approved developments that exceed expectations and deliver exceptional value to all stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Handshake className="w-16 h-16 text-[rgba(217,37,70,1)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-3">Mutual Trust & Transparency</h3>
              <p className="text-gray-600">
                Building long-term relationships based on transparency, legal compliance, and shared vision for Chennai's real estate development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <TrendingUp className="w-16 h-16 text-[rgba(217,37,70,1)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-3">Shared Growth & ROI</h3>
              <p className="text-gray-600">
                Creating win-win scenarios for Chennai real estate that benefit all partners and maximize return on investment with proven market expertise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Award className="w-16 h-16 text-[rgba(217,37,70,1)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-3">Excellence & Compliance</h3>
              <p className="text-gray-600">
                Maintaining the highest standards of quality, CMDA & RERA compliance, and innovation in every Chennai development project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[rgba(40,45,64,1)] mb-6">
                Why Partner With JKB Housing?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Building2 className="w-8 h-8 text-[rgba(217,37,70,1)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-2">Proven Chennai Expertise</h3>
                    <p className="text-gray-600">Over 15 years of experience in Chennai real estate development with 160+ CMDA & RERA approved projects successfully completed.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-[rgba(217,37,70,1)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-2">Strong Chennai Network</h3>
                    <p className="text-gray-600">Extensive network of contractors, suppliers, and Chennai industry professionals ensuring smooth project execution and regulatory compliance.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-[rgba(217,37,70,1)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-2">Prime Chennai Locations</h3>
                    <p className="text-gray-600">Access to premium land parcels and strategic locations across Chennai with high growth potential and CMDA development approvals.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-8 h-8 text-[rgba(217,37,70,1)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-2">Chennai Market Insight</h3>
                    <p className="text-gray-600">Deep understanding of Chennai real estate trends and customer preferences to maximize project success and investment returns.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[rgba(40,45,64,0.1)] to-[rgba(217,37,70,0.1)] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[rgba(40,45,64,1)] mb-6">Partnership Models</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-[rgba(217,37,70,1)]">
                  <h4 className="font-bold text-[rgba(40,45,64,1)]">Land Partnership</h4>
                  <p className="text-gray-600 text-sm">Collaborate with Chennai landowners for CMDA compliant development opportunities</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-[rgba(217,37,70,1)]">
                  <h4 className="font-bold text-[rgba(40,45,64,1)]">Investment Partnership</h4>
                  <p className="text-gray-600 text-sm">Joint investment in high-potential Chennai real estate development projects</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-[rgba(217,37,70,1)]">
                  <h4 className="font-bold text-[rgba(40,45,64,1)]">Strategic Alliance</h4>
                  <p className="text-gray-600 text-sm">Long-term partnerships for multiple Chennai project development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgba(40,45,64,1)] mb-4">
              Chennai Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Strategic partnerships that have created exceptional value and lasting relationships in Chennai's real estate market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-[rgba(217,37,70,1)] mb-2">₹50+ Cr</div>
              <h3 className="text-lg font-bold text-[rgba(40,45,64,1)] mb-2">Premium Villa Project Chennai</h3>
              <p className="text-gray-600 text-sm">Successful joint venture resulting in CMDA approved luxury villa development with 100% sales achievement in prime Chennai location</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-[rgba(217,37,70,1)] mb-2">25 Acres</div>
              <h3 className="text-lg font-bold text-[rgba(40,45,64,1)] mb-2">Residential Township</h3>
              <p className="text-gray-600 text-sm">Large-scale RERA approved township development through strategic Chennai land partnership</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-[rgba(217,37,70,1)] mb-2">3 Years</div>
              <h3 className="text-lg font-bold text-[rgba(40,45,64,1)] mb-2">Ongoing Partnership</h3>
              <p className="text-gray-600 text-sm">Long-term strategic alliance with leading Chennai construction company for multiple projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[rgba(40,45,64,1)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Chennai's Trusted Builder
          </h2>
          <p className="text-xl mb-8">
            Ready to explore joint venture opportunities in Chennai's thriving real estate market? Let's discuss how we can create exceptional CMDA & RERA compliant value together through strategic partnerships.
          </p>
          <a
            href="tel:9710397104"
            className="inline-flex items-center gap-3 bg-[rgba(217,37,70,1)] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[rgba(217,37,70,0.9)] transition-colors"
          >
            <Phone className="w-6 h-6" />
            Discuss Partnership: 97103 97104
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JointVenture;
