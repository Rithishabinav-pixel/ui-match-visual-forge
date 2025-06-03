
import React from 'react';
import { Handshake, Building2, TrendingUp, Award, Users, MapPin, Phone } from 'lucide-react';

const JointVenture = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgba(40,45,64,1)] to-[rgba(217,37,70,1)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Joint Ventures</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Strategic partnerships that create exceptional real estate opportunities and shared success
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgba(40,45,64,1)] mb-4">
              Partnership Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At JKB Housing, we believe in the power of collaboration. Our joint venture approach combines 
              our expertise with strategic partners to create developments that exceed expectations and deliver 
              exceptional value to all stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Handshake className="w-16 h-16 text-[rgba(217,37,70,1)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-3">Mutual Trust</h3>
              <p className="text-gray-600">
                Building long-term relationships based on transparency, integrity, and shared vision.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <TrendingUp className="w-16 h-16 text-[rgba(217,37,70,1)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-3">Shared Growth</h3>
              <p className="text-gray-600">
                Creating win-win scenarios that benefit all partners and maximize return on investment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Award className="w-16 h-16 text-[rgba(217,37,70,1)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-3">Excellence</h3>
              <p className="text-gray-600">
                Maintaining the highest standards of quality and innovation in every project.
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
                Why Partner With Us?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Building2 className="w-8 h-8 text-[rgba(217,37,70,1)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-2">Proven Expertise</h3>
                    <p className="text-gray-600">Over 15 years of experience in real estate development with a track record of successful projects.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-[rgba(217,37,70,1)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-2">Strong Network</h3>
                    <p className="text-gray-600">Extensive network of contractors, suppliers, and industry professionals ensuring smooth project execution.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-[rgba(217,37,70,1)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-2">Prime Locations</h3>
                    <p className="text-gray-600">Access to premium land parcels and strategic locations with high growth potential.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-8 h-8 text-[rgba(217,37,70,1)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-2">Market Insight</h3>
                    <p className="text-gray-600">Deep understanding of market trends and customer preferences to maximize project success.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[rgba(40,45,64,0.1)] to-[rgba(217,37,70,0.1)] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[rgba(40,45,64,1)] mb-6">Partnership Models</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-[rgba(217,37,70,1)]">
                  <h4 className="font-bold text-[rgba(40,45,64,1)]">Land Partnership</h4>
                  <p className="text-gray-600 text-sm">Collaborate with landowners for development opportunities</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-[rgba(217,37,70,1)]">
                  <h4 className="font-bold text-[rgba(40,45,64,1)]">Investment Partnership</h4>
                  <p className="text-gray-600 text-sm">Joint investment in high-potential development projects</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-[rgba(217,37,70,1)]">
                  <h4 className="font-bold text-[rgba(40,45,64,1)]">Strategic Alliance</h4>
                  <p className="text-gray-600 text-sm">Long-term partnerships for multiple project development</p>
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
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Partnerships that have created exceptional value and lasting relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-[rgba(217,37,70,1)] mb-2">₹50+ Cr</div>
              <h3 className="text-lg font-bold text-[rgba(40,45,64,1)] mb-2">Premium Villa Project</h3>
              <p className="text-gray-600 text-sm">Successful joint venture resulting in luxury villa development with 100% sales achievement</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-[rgba(217,37,70,1)] mb-2">25 Acres</div>
              <h3 className="text-lg font-bold text-[rgba(40,45,64,1)] mb-2">Residential Township</h3>
              <p className="text-gray-600 text-sm">Large-scale township development through strategic land partnership</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-[rgba(217,37,70,1)] mb-2">3 Years</div>
              <h3 className="text-lg font-bold text-[rgba(40,45,64,1)] mb-2">Ongoing Partnership</h3>
              <p className="text-gray-600 text-sm">Long-term strategic alliance with leading construction company</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[rgba(40,45,64,1)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Us Today
          </h2>
          <p className="text-xl mb-8">
            Ready to explore joint venture opportunities? Let's discuss how we can create exceptional 
            value together through strategic partnerships.
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
    </div>
  );
};

export default JointVenture;
