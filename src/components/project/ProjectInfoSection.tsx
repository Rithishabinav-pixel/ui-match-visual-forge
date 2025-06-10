
import React from 'react';
import { Project } from '@/types/project';

interface ProjectInfoSectionProps {
  project: Project;
}

export const ProjectInfoSection = ({ project }: ProjectInfoSectionProps) => {
  // Use project_info_stats if available, otherwise create default stats matching the design
  const stats = project.project_info_stats && project.project_info_stats.length > 0 
    ? project.project_info_stats 
    : [
        { label: "CMDA APPROVED", value: "Lorem ipsum dolor amet, consectetur" },
        { label: "1100 - 2000 SQ.FT", value: "Lorem ipsum dolor amet, consectetur" },
        { label: "STILT +3", value: "Lorem ipsum dolor amet, consectetur" },
        { label: "2 & 3 BHK", value: "Lorem ipsum dolor amet, consectetur" },
      ];

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="max-w-[1530px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-sm font-medium text-gray-300 mb-4 uppercase tracking-wide">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
