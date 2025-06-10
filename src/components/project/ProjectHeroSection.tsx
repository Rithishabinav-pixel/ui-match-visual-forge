
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
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5">
        <div className="text-white max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight max-md:text-4xl">
            {heading}
          </h1>
          
          {description && (
            <p className="text-xl mb-6 text-gray-200 leading-relaxed max-md:text-lg">
              {description}
            </p>
          )}
          
          {location && (
            <div className="flex items-center mb-8 text-lg">
              <MapPin className="w-5 h-5 mr-2 text-[rgba(217,37,70,1)]" />
              <span>{location}</span>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={onEnquiryOpen}
              className="bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] px-8 py-3 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Enquire Now
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[rgba(40,45,64,1)] px-8 py-3 text-lg"
            >
              View Floor Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
