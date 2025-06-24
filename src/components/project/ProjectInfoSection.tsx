
import React from 'react';
import { Project } from '@/types/project';

interface ProjectInfoSectionProps {
  project: Project;
}

export const ProjectInfoSection = ({
  project
}: ProjectInfoSectionProps) => {
  // Use project_info_stats if available, otherwise create default stats matching the design
  const stats = project.project_info_stats && project.project_info_stats.length > 0 ? project.project_info_stats : [
    {
      label: "CMDA APPROVED",
      value: "Government approved residential project with all necessary clearances and certifications for secure investment"
    },
    {
      label: "1100 - 2000 SQ.FT",
      value: "Spacious unit configurations designed for modern family living with optimal space utilization and comfort"
    },
    {
      label: "STILT +3",
      value: "Well-planned vertical construction with ground floor parking and three residential floors for convenience"
    },
    {
      label: "2 & 3 BHK",
      value: "Premium apartment configurations with modern amenities and quality construction standards for luxurious living"
    }
  ];

  return (
    <section className="w-full bg-[#1F2632] py-16">
      <div className="max-w-full px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-white font-medium mb-4 uppercase tracking-wider text-2xl">
                {stat.label}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
