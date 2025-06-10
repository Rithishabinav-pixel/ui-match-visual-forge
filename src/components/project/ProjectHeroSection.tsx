
import React, { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/types/project';

interface ProjectHeroSectionProps {
  project: Project;
  onEnquiryOpen: () => void;
}

export const ProjectHeroSection = ({ project, onEnquiryOpen }: ProjectHeroSectionProps) => {
  const heroImage = project.hero_image || project.gallery_images[0] || "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop";
  
  return (
    <section className="relative min-h-screen mt-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Content Section */}
        <div className="bg-[#F5F1E8] flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-lg w-full">
            {/* Logo/Brand */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[rgba(217,37,70,1)] text-sm font-medium tracking-wider">JKB</span>
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[rgba(40,45,64,1)] mb-2">
                {project.title}
              </h1>
            </div>

            {/* Main Heading */}
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-[rgba(40,45,64,1)] leading-tight mb-6">
                The Key to
              </h2>
              <h2 className="text-3xl lg:text-4xl font-bold text-[rgba(40,45,64,1)] leading-tight mb-6">
                Find a Path To a Luxurious Lifestyle.
              </h2>
            </div>

            {/* Subtitle */}
            <div className="mb-8">
              <p className="text-lg text-gray-600 mb-2">
                Premium <span className="font-bold">{project.unit_types || '2.5 BHK FLATS'}</span>
              </p>
              <p className="text-lg text-gray-600">
                @{project.location || 'Ramalinga Nagar, Virugambakkam'}
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={onEnquiryOpen}
              className="bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] text-white px-8 py-3 rounded-full text-lg font-medium flex items-center gap-2"
            >
              Enquire Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <img 
            src={heroImage} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* Play Button Overlay */}
          {project.video_section?.video_url && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 rounded-full w-16 h-16 p-0"
              >
                <Play className="w-6 h-6" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
