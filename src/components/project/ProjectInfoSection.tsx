
import React from 'react';
import { Project } from '@/types/project';

interface ProjectInfoSectionProps {
  project: Project;
}

export const ProjectInfoSection = ({ project }: ProjectInfoSectionProps) => {
  // Use project_info_stats if available, otherwise create default stats
  const stats = project.project_info_stats && project.project_info_stats.length > 0 
    ? project.project_info_stats 
    : [
        { label: "Project Type", value: project.type || "Residential" },
        { label: "Status", value: Array.isArray(project.status) ? project.status.join(", ") : project.status || "Ongoing" },
        { label: "Location", value: project.location || "Not specified" },
        { label: "Unit Types", value: project.unit_types || "Not specified" },
        { label: "Unit Sizes", value: project.unit_sizes || "Not specified" },
      ];

  return (
    <section className="py-16 bg-white max-md:py-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
                {stat.label}
              </h3>
              <p className="text-lg font-bold text-[rgba(40,45,64,1)]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
