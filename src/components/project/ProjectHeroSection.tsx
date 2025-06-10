
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
    <section className="relative h-screen mt-20 overflow-hidden">
      <div className="relative w-full h-full">
        <img 
          src={heroImage} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-5 text-center">
            {/* Tags */}
            {project.hero_tags && project.hero_tags.length > 0 && (
              <div className="flex justify-center gap-2 mb-6 flex-wrap">
                {project.hero_tags.map((tag, index) => (
                  <Badge key={index} className="bg-[rgba(217,37,70,1)] text-white border-0 px-4 py-2">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            
            <h1 className="text-6xl font-bold text-white mb-6 max-md:text-4xl">
              {project.title}
            </h1>
            
            {project.subtitle && (
              <p className="text-2xl text-gray-300 mb-6 max-md:text-xl">
                {project.subtitle}
              </p>
            )}
            
            {project.hero_description && (
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                {project.hero_description}
              </p>
            )}
            
            <div className="flex gap-4 justify-center max-md:flex-col max-md:items-center">
              <Button 
                onClick={onEnquiryOpen}
                className="bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] px-8 py-3 text-lg"
              >
                Get Details
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              {project.video_section?.video_url && (
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-[rgba(217,37,70,1)] px-8 py-3 text-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Video
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
