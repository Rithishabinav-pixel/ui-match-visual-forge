
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectHeroSectionProps {
  project: Project;
  onEnquiryOpen: () => void;
}

export const ProjectHeroSection = ({ project, onEnquiryOpen }: ProjectHeroSectionProps) => {
  // Use hero_section data if available, otherwise fall back to legacy fields
  const heroImage = project.hero_section?.main_image || project.hero_image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop';
  const heading = project.hero_section?.heading || project.title;
  const description = project.hero_section?.description || project.subtitle || '';
  const location = project.hero_section?.location || project.location;

  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Two-column layout matching the reference design */}
      <div className="w-full max-w-[1530px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Content */}
          <div className="text-white z-10 relative">
            {/* Logo/Brand */}
            <div className="mb-6">
              <div className="text-red-500 text-sm font-medium mb-2">JKB</div>
              <div className="text-4xl font-light text-gray-600">Grace</div>
            </div>
            
            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-800">
              The Key to
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-800">
              Find a Path To a<br />
              Luxurious Lifestyle.
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg mb-2 text-gray-700 font-medium">
              Premium <span className="font-bold">2.5 BHK FLATS</span>
            </p>
            
            {/* Location */}
            <div className="flex items-center mb-8 text-gray-600">
              <MapPin className="w-5 h-5 mr-2 text-red-500" />
              <span>@Ramalinga Nagar, Virugambakkam</span>
            </div>
            
            {/* CTA Button */}
            <Button 
              onClick={onEnquiryOpen}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg rounded-md"
            >
              <Phone className="w-5 h-5 mr-2" />
              Enquire Now
            </Button>
          </div>
          
          {/* Right column - Building Image */}
          <div className="relative">
            <img
              src={heroImage}
              alt={heading}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Background - keeping it subtle to not interfere with content */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-transparent"></div>
    </section>
  );
};
