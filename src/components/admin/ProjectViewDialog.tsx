
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { Project } from '@/types/project';

interface ProjectViewDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectViewDialog = ({ project, isOpen, onClose }: ProjectViewDialogProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          {project.subtitle && (
            <p className="text-gray-600">{project.subtitle}</p>
          )}
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Project Details</h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Client:</span> {project.client_name}</p>
                <p><span className="font-medium">Type:</span> {project.type}</p>
                <p><span className="font-medium">Location:</span> {project.location || 'N/A'}</p>
                {project.completion_date && (
                  <p><span className="font-medium">Completion Date:</span> {format(new Date(project.completion_date), 'MMM dd, yyyy')}</p>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Status</h3>
              <div className="flex flex-wrap gap-1">
                {project.status.map((status, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {status}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {project.overview && (
            <div>
              <h3 className="font-semibold mb-2">Overview</h3>
              <p className="text-sm text-gray-700">{project.overview}</p>
            </div>
          )}

          {project.objectives && (
            <div>
              <h3 className="font-semibold mb-2">Objectives</h3>
              <p className="text-sm text-gray-700">{project.objectives}</p>
            </div>
          )}

          {project.highlights.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Highlights</h3>
              <ul className="list-disc list-inside space-y-1">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="text-sm text-gray-700">{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {project.timeline_steps.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Timeline</h3>
              <div className="space-y-2">
                {project.timeline_steps.map((step, index) => (
                  <div key={index} className="border-l-2 border-gray-300 pl-4 pb-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-sm">{step.title}</h4>
                      <Badge 
                        variant={step.status === 'completed' ? 'default' : step.status === 'current' ? 'destructive' : 'outline'}
                        className="text-xs"
                      >
                        {step.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600">{step.description}</p>
                    <p className="text-xs text-gray-500">{step.duration} {step.unit}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.gallery_images.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {project.gallery_images.map((image, index) => (
                  <img 
                    key={index} 
                    src={image} 
                    alt={`Project ${index + 1}`}
                    className="w-full h-24 object-cover rounded border"
                  />
                ))}
              </div>
            </div>
          )}

          {project.client_feedback && (
            <div>
              <h3 className="font-semibold mb-2">Client Feedback</h3>
              <div className="bg-gray-50 p-4 rounded border">
                <p className="text-sm italic mb-2">"{project.client_feedback.testimonial}"</p>
                <div className="text-xs text-gray-600">
                  <p className="font-medium">{project.client_feedback.name}</p>
                  <p>{project.client_feedback.designation}, {project.client_feedback.company}</p>
                  <p>Rating: {project.client_feedback.rating}/5</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
