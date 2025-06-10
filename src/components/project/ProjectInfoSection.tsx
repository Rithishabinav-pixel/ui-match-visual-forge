
import React from 'react';
import { Project } from '@/types/project';

interface ProjectInfoSectionProps {
  project: Project;
}

export const ProjectInfoSection = ({ project }: ProjectInfoSectionProps) => {
  const details = project.project_details;
  
  // Default info items that can be dynamically populated
  const infoItems = [
    {
      title: details?.approval_status || 'CMDA Approved',
      description: 'Lorem ipsum odor amet, consectetur'
    },
    {
      title: project.unit_sizes || '1100 - 2000 sq.ft',
      description: 'Lorem ipsum odor amet, consectetur'
    },
    {
      title: details?.floors || 'Stilt +3',
      description: 'Lorem ipsum odor amet, consectetur'
    },
    {
      title: project.unit_types || '2 & 3 BHK',
      description: 'Lorem ipsum odor amet, consectetur'
    }
  ];

  return (
    <section className="bg-[rgba(40,45,64,1)] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {infoItems.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-white text-xl lg:text-2xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
