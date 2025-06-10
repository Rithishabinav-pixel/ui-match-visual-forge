import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Users, Award, ChevronLeft, ChevronRight, Star, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EnquiryPopup } from '@/components/EnquiryPopup';
import { useProject } from '@/hooks/useProjects';
import { Footer } from '@/components/layout/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const { data: project, isLoading, error } = useProject(id || '');

  const nextImage = () => {
    if (project?.gallery_images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.gallery_images.length);
    }
  };

  const prevImage = () => {
    if (project?.gallery_images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.gallery_images.length) % project.gallery_images.length);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'current': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-[rgba(217,37,70,1)]" />
          <p className="text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Project not found</p>
          <Button onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  // Format objectives for display
  const objectivesList = project.objectives.split('\n').filter(obj => obj.trim()).map(obj => obj.replace(/^[•\-\*]\s*/, ''));

  return (
    <div className="min-h-screen bg-white">
      {/* Project Hero */}
      <section className="relative h-[70vh] mt-20 overflow-hidden">
        <div className="relative w-full h-full">
          <img 
            src={project.gallery_images[currentImageIndex] || "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop"} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          {/* Navigation arrows */}
          {project.gallery_images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image indicators */}
          {project.gallery_images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.gallery_images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Project title overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-[rgba(217,37,70,1)] text-white border-0">
                {project.status[0] || 'Active'}
              </Badge>
              <Badge variant="outline" className="border-white text-white">
                {project.type}
              </Badge>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 max-md:text-4xl">{project.title}</h1>
            <p className="text-xl text-gray-300 max-md:text-lg">Client: {project.client_name}</p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 max-md:py-8">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-6 max-md:text-3xl">Project Overview</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{project.overview}</p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[rgba(40,45,64,1)] mb-4">Project Objectives</h3>
                <ul className="space-y-3">
                  {objectivesList.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[rgba(217,37,70,1)] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[rgba(40,45,64,1)] mb-4">Key Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Award className="w-5 h-5 text-[rgba(217,37,70,1)] flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Card className="p-6 sticky top-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Location</p>
                      <p className="text-gray-800 font-medium">{project.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Completion Date</p>
                      <p className="text-gray-800 font-medium">
                        {new Date(project.completion_date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long' 
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Unit Types</p>
                      <p className="text-gray-800 font-medium">{project.unit_types}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Unit Sizes</p>
                      <p className="text-gray-800 font-medium">{project.unit_sizes}</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => setIsEnquiryOpen(true)}
                    className="w-full mt-6 bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)]"
                  >
                    Contact for Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery_images.length > 0 && (
        <section className="py-16 bg-gray-50 max-md:py-8">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-8 text-center max-md:text-3xl">Project Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.gallery_images.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Timeline */}
      {project.timeline_steps.length > 0 && (
        <section className="py-16 bg-[rgba(40,45,64,1)] max-md:py-8">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-4xl font-bold text-white mb-8 text-center max-md:text-3xl">Project Timeline</h2>
            <div className="space-y-8">
              {project.timeline_steps.map((phase, index) => (
                <div key={index} className="flex items-center gap-6 max-md:flex-col max-md:text-center">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(phase.status)} min-w-24`}>
                    {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg">
                    <div className="flex justify-between items-start max-md:flex-col max-md:gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-2">{phase.title}</h3>
                        <p className="text-gray-600">{phase.description}</p>
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        Duration: {phase.duration} {phase.unit}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client Feedback */}
      {project.client_feedback.name && (
        <section className="py-16 bg-gray-50 max-md:py-8">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-8 max-md:text-3xl">Client Feedback</h2>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${i < project.client_feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                  "{project.client_feedback.testimonial}"
                </p>
                <div>
                  <p className="font-bold text-[rgba(40,45,64,1)] text-lg">{project.client_feedback.name}</p>
                  <p className="text-[rgba(217,37,70,1)] font-medium">{project.client_feedback.designation}</p>
                  <p className="text-gray-600">{project.client_feedback.company}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-[rgba(217,37,70,1)] max-md:py-12">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 max-md:text-3xl">{project.cta_title}</h2>
          <p className="text-xl text-white mb-8 max-md:text-lg">
            {project.cta_subtitle}
          </p>
          <div className="flex gap-4 justify-center max-md:flex-col max-md:items-center">
            <Button 
              onClick={() => setIsEnquiryOpen(true)}
              className="bg-white text-[rgba(217,37,70,1)] hover:bg-gray-100 px-8 py-3 text-lg"
            >
              {project.button_text}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[rgba(217,37,70,1)] px-8 py-3 text-lg"
              onClick={() => window.location.href = '/projects'}
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Enquiry Popup - Updated to pass project ID */}
      <EnquiryPopup 
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        projectTitle={project.title}
        projectId={project.id}
      />
    </div>
  );
};

export default ProjectDetail;
