
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EnquiryPopup } from '@/components/EnquiryPopup';
import { useProject } from '@/hooks/useProjects';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { ProjectHeroSection } from '@/components/project/ProjectHeroSection';
import { ProjectInfoSection } from '@/components/project/ProjectInfoSection';
import { ProjectDetailsSection } from '@/components/project/ProjectDetailsSection';
import { AmenitiesSection } from '@/components/project/AmenitiesSection';
import { VideoSection } from '@/components/project/VideoSection';
import { NearbyLocationsSection } from '@/components/project/NearbyLocationsSection';
import { SpecsAccordionSection } from '@/components/project/SpecsAccordionSection';
import { FloorPlansDownloadSection } from '@/components/project/FloorPlansDownloadSection';
import { BrochureDownloadSection } from '@/components/project/BrochureDownloadSection';
import { ProjectGallerySection } from '@/components/project/ProjectGallerySection';
import { ProgressGallerySection } from '@/components/project/ProgressGallerySection';
import { LocationSection } from '@/components/project/LocationSection';
import { FAQSection } from '@/components/project/FAQSection';
import { organizationSchema, webPageSchema, breadcrumbSchema } from '@/utils/seoData';

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

  const breadcrumbs = [
    { name: "Home", url: "https://jkbhousing.com/" },
    { name: "Projects", url: "https://jkbhousing.com/projects" },
    { name: project.title, url: `https://jkbhousing.com/project/${project.id}` }
  ];

  const structuredData = [
    organizationSchema,
    webPageSchema(
      project.title,
      project.overview.substring(0, 155),
      `https://jkbhousing.com/project/${project.id}`
    ),
    breadcrumbSchema(breadcrumbs),
    {
      "@context": "https://schema.org",
      "@type": "RealEstateProject",
      "name": project.title,
      "description": project.overview,
      "url": `https://jkbhousing.com/project/${project.id}`,
      "image": project.gallery_images[0] || "",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": project.location.split(',')[0],
        "addressRegion": "Tamil Nadu",
        "addressCountry": "India"
      },
      "developer": {
        "@type": "Organization",
        "name": "JKB Housing"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={`${project.title} | JKB Housing - Premium ${project.type} Project`}
        description={project.overview.substring(0, 155)}
        keywords={`${project.title}, JKB Housing, ${project.type.toLowerCase()} project, ${project.location}, ${project.unit_types}`}
        canonical={`https://jkbhousing.com/project/${project.id}`}
        structuredData={structuredData}
        ogImage={project.gallery_images[0] || "/lovable-uploads/cf2c111e-2a85-4fba-af35-2d35a8e86479.png"}
        author="JKB Housing"
      />

      {/* Hero Section - using dynamic hero_section */}
      <ProjectHeroSection 
        project={project} 
        onEnquiryOpen={() => setIsEnquiryOpen(true)} 
      />

      {/* Project Info Section - using dynamic project_info_stats */}
      <ProjectInfoSection project={project} />

      {/* Project Details Section - using dynamic project_detail_section */}
      <ProjectDetailsSection 
        projectDetails={project.project_details}
        title={project.title}
        overview={project.overview}
        projectDetailSection={project.project_detail_section}
      />

      {/* Amenities Section - using dynamic amenities_section */}
      {project.amenities_section && project.amenities_section.amenities && project.amenities_section.amenities.length > 0 ? (
        <AmenitiesSection amenities={project.amenities_section.amenities.map(name => ({ name }))} />
      ) : project.amenities && project.amenities.length > 0 ? (
        <AmenitiesSection amenities={project.amenities} />
      ) : (
        <AmenitiesSection amenities={[]} />
      )}

      {/* Video Section */}
      {project.video_section?.video_url && (
        <VideoSection videoSection={project.video_section} />
      )}

      {/* Nearby Locations Section - using dynamic nearby_locations_section */}
      <NearbyLocationsSection 
        locationDetails={project.location_details}
        nearbyLocationsSection={project.nearby_locations_section}
      />

      {/* Specifications Accordion Section - using dynamic specifications_section */}
      <SpecsAccordionSection 
        specifications={project.specifications}
        specificationsSection={project.specifications_section}
      />

      {/* Floor Plans Download Section - using dynamic floor_plans_section */}
      <FloorPlansDownloadSection 
        floorPlans={project.floor_plans_section?.floor_plans || project.floor_plans}
      />

      {/* Brochure Download Section - using dynamic brochure_section */}
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
