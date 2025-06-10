
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EnquiryPopup } from '@/components/EnquiryPopup';
import { useProject } from '@/hooks/useProjects';
import { Footer } from '@/components/layout/Footer';
import { ProjectHeroSection } from '@/components/project/ProjectHeroSection';
import { ProjectInfoSection } from '@/components/project/ProjectInfoSection';
import { ProjectDetailsSection } from '@/components/project/ProjectDetailsSection';
import { VideoSection } from '@/components/project/VideoSection';
import { AmenitiesSection } from '@/components/project/AmenitiesSection';
import { NearbyLocationsSection } from '@/components/project/NearbyLocationsSection';
import { SpecsAccordionSection } from '@/components/project/SpecsAccordionSection';
import { SpecificationsSection } from '@/components/project/SpecificationsSection';
import { FloorPlansSection } from '@/components/project/FloorPlansSection';
import { FloorPlansDownloadSection } from '@/components/project/FloorPlansDownloadSection';
import { GallerySection } from '@/components/project/GallerySection';
import { ProjectGallerySection } from '@/components/project/ProjectGallerySection';
import { ProgressGallerySection } from '@/components/project/ProgressGallerySection';
import { LocationSection } from '@/components/project/LocationSection';
import { BrochureSection } from '@/components/project/BrochureSection';
import { BrochureDownloadSection } from '@/components/project/BrochureDownloadSection';
import { FAQSection } from '@/components/project/FAQSection';

const ProjectDetail = () => {
  const { id } = useParams();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const { data: project, isLoading, error } = useProject(id || '');

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ProjectHeroSection 
        project={project} 
        onEnquiryOpen={() => setIsEnquiryOpen(true)} 
      />

      {/* Project Info Section */}
      <ProjectInfoSection project={project} />

      {/* Project Details Section */}
      <ProjectDetailsSection 
        projectDetails={project.project_details}
        title={project.title}
        overview={project.overview}
      />

      {/* Video Section */}
      {project.video_section?.video_url && (
        <VideoSection videoSection={project.video_section} />
      )}

      {/* Amenities Section */}
      {project.amenities && project.amenities.length > 0 && (
        <AmenitiesSection amenities={project.amenities} />
      )}

      {/* Nearby Locations Section */}
      <NearbyLocationsSection locationDetails={project.location_details} />

      {/* Specifications Accordion Section */}
      <SpecsAccordionSection specifications={project.specifications} />

      {/* Floor Plans Download Section */}
      <FloorPlansDownloadSection floorPlans={project.floor_plans} />

      {/* Brochure Download Section */}
      <BrochureDownloadSection 
        brochureSection={project.brochure_section}
        projectId={project.id}
        projectTitle={project.title}
      />

      {/* Project Gallery Section */}
      <ProjectGallerySection 
        galleryImages={project.gallery_images}
        projectTitle={project.title}
      />

      {/* Progress Gallery Section */}
      {project.progress_gallery && project.progress_gallery.length > 0 && (
        <ProgressGallerySection progressImages={project.progress_gallery} />
      )}

      {/* Location Section */}
      {project.location_details && Object.keys(project.location_details).length > 0 && (
        <LocationSection locationDetails={project.location_details} />
      )}

      {/* FAQ Section */}
      {project.faq_section && project.faq_section.length > 0 && (
        <FAQSection faqs={project.faq_section} />
      )}

      {/* Footer */}
      <Footer />

      {/* Enquiry Popup */}
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
