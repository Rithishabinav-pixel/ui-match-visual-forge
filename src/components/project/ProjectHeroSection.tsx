
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
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
    <section className="relative h-screen flex">
      {/* Left column - Light beige background with content */}
      <div className="w-1/2 bg-[#F9E9C6] flex items-center justify-center">
        <div className="max-w-md px-8">
          {/* Logo/Brand */}
          <div className="mb-12">
            <div className="text-red-500 text-sm font-medium mb-1">JKB</div>
            <div className="text-5xl font-light text-gray-800">Grace</div>
          </div>
          
          {/* Main headline - three lines with different weights */}
          <div className="mb-8">
            <h1 className="text-4xl leading-tight text-gray-800 mb-2">
              The Key to
            </h1>
            <h2 className="text-4xl font-bold leading-tight text-gray-800 mb-2">
              Find a Path To a
            </h2>
            <h3 className="text-4xl font-extrabold leading-tight text-gray-800">
              Luxurious Lifestyle.
            </h3>
          </div>
          
          {/* Subtext */}
          <div className="mb-8">
            <p className="text-lg font-bold text-gray-800 mb-1">
              Premium <span className="font-extrabold">2.5 BHK FLATS</span>
            </p>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2 text-red-500" />
              <span className="text-base">@Gnanamoorthy Nagar, Virugambakkam</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <Button 
            onClick={onEnquiryOpen}
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 text-base rounded-full flex items-center gap-2"
          >
            Enquire Now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      {/* Right column - Building Image */}
      <div className="w-1/2">
        <img
          src={heroImage}
          alt={heading}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
