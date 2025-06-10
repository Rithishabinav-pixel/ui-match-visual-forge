
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Users, Award, ChevronLeft, ChevronRight, Star, Loader2, Download, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EnquiryPopup } from '@/components/EnquiryPopup';
import { useProject } from '@/hooks/useProjects';
import { Footer } from '@/components/layout/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const { data: project, isLoading, error } = useProject(id || '');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-[rgba(217,37,70,1)]" />
          <p className="text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Project not found</p>
          <Button onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-orange-100 mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-6">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Gece
                </span>
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The Key to<br />
                Find a Path To a<br />
                Luxurious Lifestyle.
              </h1>
              
              <p className="text-lg text-gray-600 mb-4">
                Premium 2,3 BHK FLATS
              </p>
              
              <p className="text-gray-600 mb-8">
                Starting @ ₹34 Lakhs | Vashi-Koh, Atv
              </p>
              
              <Button 
                onClick={() => setIsEnquiryOpen(true)}
                className="bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] text-white px-8 py-3 text-lg rounded-full"
              >
                Enquire Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <img 
                src={project.hero_image || project.gallery_images[0] || "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop"} 
                alt={project.title}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="mt-16 bg-gray-800 rounded-2xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-white text-sm mb-1">AREA AVAILABLE</p>
                <p className="text-orange-400 font-bold">6807-900 sqft</p>
              </div>
              <div>
                <p className="text-white text-sm mb-1">SIZE</p>
                <p className="text-orange-400 font-bold">2,3 BHK</p>
              </div>
              <div>
                <p className="text-white text-sm mb-1">UNITS</p>
                <p className="text-orange-400 font-bold">112 Units</p>
              </div>
              <div>
                <p className="text-white text-sm mb-1">STATUS</p>
                <p className="text-orange-400 font-bold">Launched</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lorem Ipsum dolor sit amet, <span className="text-[rgba(217,37,70,1)]">consectetur<br />adipiscing</span> elit.
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
              a type specimen book.
            </p>
          </div>
          
          {/* Large Project Image */}
          <div className="mb-20">
            <img 
              src={project.gallery_images[1] || project.gallery_images[0] || "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop"}
              alt="Project overview"
              className="w-full h-[600px] object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">
              Lorem Ipsum dolor sit amet.
            </h2>
            
            {/* Amenities Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {[
                'Swimming Pool', 'Gym', 'Garden', 'Parking', 
                'Security', 'Club House', 'Kids Play Area', 'Jogging Track',
                'Power Backup', 'Water Supply', 'Lift', 'Fire Safety',
                'CCTV', 'Intercom', 'Maintenance', 'Waste Management'
              ].map((amenity, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{amenity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lorem Ipsum dolor sit amet, <span className="text-[rgba(217,37,70,1)]">consectetur<br />adipiscing</span> elit.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Specifications Cards */}
            {[
              { title: 'FLOORING', items: ['Vitrified tiles', 'Premium wooden flooring', 'Anti-skid tiles'] },
              { title: 'STRUCTURE FEATURES', items: ['RCC framed structure', 'Earthquake resistant', 'Premium quality cement'] },
              { title: 'KITCHEN', items: ['Modular kitchen', 'Granite counter top', 'Stainless steel sink'] },
              { title: 'BATHROOM', items: ['Premium CP fittings', 'Hot & cold water', 'Exhaust fans'] },
              { title: 'WINDOWS', items: ['UPVC windows', 'Mosquito nets', 'Safety grills'] }
            ].map((spec, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{spec.title}</h3>
                  <ul className="space-y-2">
                    {spec.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <div className="w-1 h-1 bg-[rgba(217,37,70,1)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lorem Ipsum dolor sit amet, <span className="text-[rgba(217,37,70,1)]">consectetur<br />adipiscing</span> elit, <span className="text-[rgba(217,37,70,1)]">sed do eiusmod tempor</span> lorem elit.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery_images.slice(0, 6).map((image, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Table Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lorem Ipsum dolor sit amet, <span className="text-[rgba(217,37,70,1)]">consectetur<br />adipiscing</span> elit.
            </h2>
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">STRUCTURE</h3>
                <ul className="space-y-3">
                  <li className="text-gray-600">RCC framed structure</li>
                  <li className="text-gray-600">Earthquake resistant design</li>
                  <li className="text-gray-600">Premium quality cement & steel</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">FLOORING</h3>
                <ul className="space-y-3">
                  <li className="text-gray-600">Vitrified tiles in living areas</li>
                  <li className="text-gray-600">Anti-skid tiles in bathrooms</li>
                  <li className="text-gray-600">Premium wooden flooring option</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">AMENITIES</h3>
                <ul className="space-y-3">
                  <li className="text-gray-600">24x7 security & power backup</li>
                  <li className="text-gray-600">Swimming pool & gymnasium</li>
                  <li className="text-gray-600">Landscaped gardens</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">
              Lorem Ipsum dolor sit amet.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((plan, index) => (
              <Card key={index} className="bg-white overflow-hidden">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                    <p className="text-gray-600">Floor Plan {plan}</p>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {plan} BHK - {plan === 1 ? '650' : plan === 2 ? '850' : '1200'} SQFT
                  </h3>
                  <p className="text-gray-600">Starting from ₹{plan === 1 ? '25' : plan === 2 ? '35' : '45'} Lakhs</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Download Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={project.gallery_images[0] || "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop"}
                alt="Download Brochure"
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Download Brochure
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get detailed information about our project including floor plans, 
                specifications, amenities, and pricing.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(217,37,70,1)]"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(217,37,70,1)]"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(217,37,70,1)]"
                  />
                </div>
              </div>
              
              <Button 
                className="w-full bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] text-white py-4 text-lg rounded-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lorem Ipsum dolor sit amet, <span className="text-[rgba(217,37,70,1)]">consectetur<br />adipiscing</span> elit.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img 
                src={project.gallery_images[2] || "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop"}
                alt="Construction progress"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {project.gallery_images.slice(3, 9).map((image, index) => (
                <div key={index} className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Progress ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            From the first handshake to the final finish.
          </h2>
          
          <Button 
            onClick={() => setIsEnquiryOpen(true)}
            className="bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] text-white px-8 py-4 text-lg rounded-full"
          >
            Enquire Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Enquiry Popup */}
      <EnquiryPopup 
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        projectTitle={project.title}
        projectId={project.id}
      />
    </div>
  );
};

export default ProjectDetail;
