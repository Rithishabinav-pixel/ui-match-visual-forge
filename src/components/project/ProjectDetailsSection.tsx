
import React from 'react';
import { ProjectDetails } from '@/types/project';

interface ProjectDetailsSectionProps {
  projectDetails?: ProjectDetails;
  title: string;
  overview?: string;
  projectDetailSection?: {
    heading?: string;
    description?: string;
    image?: string;
  };
}

export const ProjectDetailsSection = ({ 
  projectDetails, 
  title, 
  overview,
  projectDetailSection 
}: ProjectDetailsSectionProps) => {
  // Use dynamic heading from project_detail_section if available, otherwise fall back to default
  const sectionHeading = projectDetailSection?.heading || "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  const sectionDescription = projectDetailSection?.description || overview || "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per.";
  const sectionImage = projectDetailSection?.image || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop";

  return (
    <section className="py-16 bg-white max-md:py-8">
      <div className="w-full max-w-[1530px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-6 max-md:text-3xl">
            {sectionHeading.includes('consectetur adipiscing elit') ? (
              <>
                {sectionHeading.split('consectetur adipiscing elit')[0]}
                <span className="text-[rgba(217,37,70,1)]">consectetur adipiscing elit</span>
                {sectionHeading.split('consectetur adipiscing elit')[1]}
              </>
            ) : (
              <span className="text-[rgba(217,37,70,1)]">{sectionHeading}</span>
            )}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {sectionDescription}
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img 
            src={sectionImage} 
            alt={title}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Project Details Information - Only show if data exists */}
        {projectDetails && Object.keys(projectDetails).length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectDetails.rera_number && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-[rgba(40,45,64,1)] mb-2">RERA Number</h3>
                <p className="text-gray-600">{projectDetails.rera_number}</p>
              </div>
            )}
            {projectDetails.possession_date && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-[rgba(40,45,64,1)] mb-2">Possession Date</h3>
                <p className="text-gray-600">{projectDetails.possession_date}</p>
              </div>
            )}
            {projectDetails.total_area && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-[rgba(40,45,64,1)] mb-2">Total Area</h3>
                <p className="text-gray-600">{projectDetails.total_area}</p>
              </div>
            )}
            {projectDetails.total_towers && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-[rgba(40,45,64,1)] mb-2">Total Towers</h3>
                <p className="text-gray-600">{projectDetails.total_towers}</p>
              </div>
            )}
            {projectDetails.total_units && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-[rgba(40,45,64,1)] mb-2">Total Units</h3>
                <p className="text-gray-600">{projectDetails.total_units}</p>
              </div>
            )}
            {projectDetails.builder && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-[rgba(40,45,64,1)] mb-2">Builder</h3>
                <p className="text-gray-600">{projectDetails.builder}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
