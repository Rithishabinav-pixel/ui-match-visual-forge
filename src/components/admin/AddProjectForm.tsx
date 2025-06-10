
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useCreateProject } from '@/hooks/useProjects';
import { useImageUpload } from '@/hooks/useImageUpload';
import { 
  CreateProjectRequest, 
  HeroSection,
  ProjectInfoStat,
  ProjectDetailSection,
  AmenitiesSection,
  NearbyLocationsSection,
  SpecificationsSection,
  FloorPlansSection,
  BrochureDownloadSection,
  GallerySection
} from '@/types/project';

// Import form section components
import { HeroSectionForm } from './form-sections/HeroSectionForm';
import { ProjectInfoStatsForm } from './form-sections/ProjectInfoStatsForm';
import { ProjectDetailSectionForm } from './form-sections/ProjectDetailSectionForm';
import { AmenitiesSectionForm } from './form-sections/AmenitiesSectionForm';
import { NearbyLocationsSectionForm } from './form-sections/NearbyLocationsSectionForm';
import { SpecificationsSectionForm } from './form-sections/SpecificationsSectionForm';
import { FloorPlansSectionForm } from './form-sections/FloorPlansSectionForm';
import { BrochureSectionForm } from './form-sections/BrochureSectionForm';
import { GallerySectionForm } from './form-sections/GallerySectionForm';

const projectSchema = z.object({
  title: z.string().min(1, 'Project title is required'),
  subtitle: z.string().optional(),
  client_name: z.string().min(1, 'Client name is required'),
});

type ProjectFormData = z.infer<typeof projectSchema>;

export const AddProjectForm = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  // Dynamic sections state
  const [heroSection, setHeroSection] = useState<HeroSection>({});
  const [projectInfoStats, setProjectInfoStats] = useState<ProjectInfoStat[]>([]);
  const [projectDetailSection, setProjectDetailSection] = useState<ProjectDetailSection>({});
  const [amenitiesSection, setAmenitiesSection] = useState<AmenitiesSection>({ amenities: [] });
  const [nearbyLocationsSection, setNearbyLocationsSection] = useState<NearbyLocationsSection>({ categories: [] });
  const [specificationsSection, setSpecificationsSection] = useState<SpecificationsSection>({ specifications: [] });
  const [floorPlansSection, setFloorPlansSection] = useState<FloorPlansSection>({ floor_plans: [] });
  const [brochureSection, setBrochureSection] = useState<BrochureDownloadSection>({});
  const [gallerySection, setGallerySection] = useState<GallerySection>({ images: [] });

  const createProject = useCreateProject();
  const { isUploading } = useImageUpload();

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: '',
      subtitle: '',
      client_name: '',
    },
  });

  const onSubmit = async (data: ProjectFormData) => {
    const projectData: CreateProjectRequest = {
      title: data.title,
      subtitle: data.subtitle || '',
      client_name: data.client_name,
      status: ['ongoing'], // Default status
      type: 'residential', // Default type
      overview: projectDetailSection.description || '',
      objectives: '', // Default empty
      highlights: amenitiesSection.amenities || [],
      location: heroSection.location || '',
      completion_date: new Date(), // Default to current date
      unit_types: '', // Default empty
      unit_sizes: '', // Default empty
      cta_title: '', // Default empty
      cta_subtitle: '', // Default empty
      button_text: 'Contact Now', // Default
      button_link: '/contact', // Default
      gallery_images: selectedImages,
      timeline_steps: [], // Default empty
      client_feedback: { // Default feedback
        name: '',
        designation: '',
        company: '',
        testimonial: '',
        rating: 5
      },
      // New dynamic sections
      hero_section: heroSection,
      project_info_stats: projectInfoStats,
      project_detail_section: projectDetailSection,
      amenities_section: amenitiesSection,
      nearby_locations_section: nearbyLocationsSection,
      specifications_section: specificationsSection,
      floor_plans_section: floorPlansSection,
      brochure_section: brochureSection,
      gallery_section: gallerySection,
    };

    await createProject.mutateAsync(projectData);

    // Reset form after successful submission
    form.reset();
    setSelectedImages([]);
    setHeroSection({});
    setProjectInfoStats([]);
    setProjectDetailSection({});
    setAmenitiesSection({ amenities: [] });
    setNearbyLocationsSection({ categories: [] });
    setSpecificationsSection({ specifications: [] });
    setFloorPlansSection({ floor_plans: [] });
    setBrochureSection({});
    setGallerySection({ images: [] });
  };

  const isSubmitting = createProject.isPending || isUploading;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Minimal Basic Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-[rgba(40,45,64,1)]">Project Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., JKB Sathya Residences" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="subtitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Subtitle (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Luxury Living Redefined" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="client_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Client name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Hero Section */}
          <HeroSectionForm heroSection={heroSection} setHeroSection={setHeroSection} />

          {/* Project Info Stats */}
          <ProjectInfoStatsForm stats={projectInfoStats} setStats={setProjectInfoStats} />

          {/* Project Detail Section */}
          <ProjectDetailSectionForm section={projectDetailSection} setSection={setProjectDetailSection} />

          {/* Amenities Section */}
          <AmenitiesSectionForm section={amenitiesSection} setSection={setAmenitiesSection} />

          {/* Nearby Locations Section */}
          <NearbyLocationsSectionForm section={nearbyLocationsSection} setSection={setNearbyLocationsSection} />

          {/* Specifications Section */}
          <SpecificationsSectionForm section={specificationsSection} setSection={setSpecificationsSection} />

          {/* Floor Plans Section */}
          <FloorPlansSectionForm section={floorPlansSection} setSection={setFloorPlansSection} />

          {/* Brochure Section */}
          <BrochureSectionForm section={brochureSection} setSection={setBrochureSection} />

          {/* Gallery Section */}
          <GallerySectionForm 
            section={gallerySection} 
            setSection={setGallerySection}
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
            isUploading={isUploading}
          />

          {/* Form Actions */}
          <div className="flex gap-4 pt-6">
            <Button 
              type="submit" 
              className="bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] px-8"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {isUploading ? 'Uploading Images...' : 'Creating Project...'}
                </>
              ) : (
                'Submit Project'
              )}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => {
                form.reset();
                setSelectedImages([]);
                setHeroSection({});
                setProjectInfoStats([]);
                setProjectDetailSection({});
                setAmenitiesSection({ amenities: [] });
                setNearbyLocationsSection({ categories: [] });
                setSpecificationsSection({ specifications: [] });
                setFloorPlansSection({ floor_plans: [] });
                setBrochureSection({});
                setGallerySection({ images: [] });
              }}
              className="px-8"
              disabled={isSubmitting}
            >
              Reset Form
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
