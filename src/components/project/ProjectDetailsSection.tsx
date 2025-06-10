
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/types/project';

interface ProjectDetailsSectionProps {
  project: Project;
}

export const ProjectDetailsSection = ({ project }: ProjectDetailsSectionProps) => {
  const details = project.project_details;
  
  return (
    <section className="py-16 max-md:py-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              {project.status.map((status, index) => (
                <Badge key={index} className="bg-[rgba(217,37,70,1)] text-white border-0">
                  {status}
                </Badge>
              ))}
              <Badge variant="outline">
                {project.type}
              </Badge>
            </div>
            
            <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-6 max-md:text-3xl">
              Project Overview
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {project.overview}
            </p>
            
            {project.objectives && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[rgba(40,45,64,1)] mb-4">Objectives</h3>
                <div className="prose text-gray-700">
                  {project.objectives.split('\n').map((objective, index) => (
                    <div key={index} className="flex items-start gap-3 mb-3">
                      <div className="w-2 h-2 bg-[rgba(217,37,70,1)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{objective.replace(/^[•\-\*]\s*/, '')}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.highlights.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-[rgba(40,45,64,1)] mb-4">Key Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-[rgba(217,37,70,1)] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <Card className="p-6 sticky top-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-4">Project Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">Location</p>
                    <p className="text-gray-800 font-medium">{project.location}</p>
                  </div>
                  
                  {details?.rera_number && (
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">RERA Number</p>
                      <p className="text-gray-800 font-medium">{details.rera_number}</p>
                    </div>
                  )}
                  
                  {details?.possession_date && (
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Possession Date</p>
                      <p className="text-gray-800 font-medium">{details.possession_date}</p>
                    </div>
                  )}
                  
                  {details?.total_area && (
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Total Area</p>
                      <p className="text-gray-800 font-medium">{details.total_area}</p>
                    </div>
                  )}
                  
                  {details?.total_towers && (
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Total Towers</p>
                      <p className="text-gray-800 font-medium">{details.total_towers}</p>
                    </div>
                  )}
                  
                  {details?.total_units && (
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Total Units</p>
                      <p className="text-gray-800 font-medium">{details.total_units}</p>
                    </div>
                  )}
                  
                  {project.unit_types && (
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Unit Types</p>
                      <p className="text-gray-800 font-medium">{project.unit_types}</p>
                    </div>
                  )}
                  
                  {project.unit_sizes && (
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Unit Sizes</p>
                      <p className="text-gray-800 font-medium">{project.unit_sizes}</p>
                    </div>
                  )}
                  
                  {details?.builder && (
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Builder</p>
                      <p className="text-gray-800 font-medium">{details.builder}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
