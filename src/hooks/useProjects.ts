
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { 
  Project, 
  CreateProjectRequest, 
  TimelineStep, 
  ClientFeedback,
  ProjectDetails,
  VideoSection,
  Amenity,
  FAQ,
  GallerySection,
  FloorPlan,
  BrochureSection,
  ProgressImage,
  ProjectSpecifications,
  LocationDetails,
  HeroSection,
  ProjectInfoStat,
  ProjectDetailSection,
  AmenitiesSection,
  NearbyLocationsSection,
  SpecificationsSection,
  FloorPlansSection,
  BrochureDownloadSection
} from '@/types/project';
import { useToast } from '@/hooks/use-toast';
import { useImageUpload } from '@/hooks/useImageUpload';

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async (): Promise<Project[]> => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      // Cast the Json types to our TypeScript interfaces with proper type checking
      return (data || []).map(project => ({
        ...project,
        timeline_steps: (project.timeline_steps as unknown) as TimelineStep[],
        client_feedback: (project.client_feedback as unknown) as ClientFeedback,
        project_details: ((project.project_details || {}) as unknown) as ProjectDetails,
        video_section: ((project.video_section || {}) as unknown) as VideoSection,
        amenities: ((project.amenities || []) as unknown) as Amenity[],
        faq_section: ((project.faq_section || []) as unknown) as FAQ[],
        additional_gallery: ((project.additional_gallery || []) as unknown) as GallerySection[],
        floor_plans: ((project.floor_plans || []) as unknown) as FloorPlan[],
        brochure_section: ((project.brochure_section || {}) as unknown) as BrochureSection,
        progress_gallery: ((project.progress_gallery || []) as unknown) as ProgressImage[],
        specifications: ((project.specifications || {}) as unknown) as ProjectSpecifications,
        location_details: ((project.location_details || {}) as unknown) as LocationDetails,
        // New dynamic sections - now properly accessing from database
        hero_section: ((project.hero_section || {}) as unknown) as HeroSection,
        project_info_stats: ((project.project_info_stats || []) as unknown) as ProjectInfoStat[],
        project_detail_section: ((project.project_detail_section || {}) as unknown) as ProjectDetailSection,
        amenities_section: ((project.amenities_section || { amenities: [] }) as unknown) as AmenitiesSection,
        nearby_locations_section: ((project.nearby_locations_section || { categories: [] }) as unknown) as NearbyLocationsSection,
        specifications_section: ((project.specifications_section || { specifications: [] }) as unknown) as SpecificationsSection,
        floor_plans_section: ((project.floor_plans_section || { floor_plans: [] }) as unknown) as FloorPlansSection,
        gallery_section: ((project.gallery_section || { images: [] }) as unknown) as GallerySection,
      }));
    },
  });
};

export const useProject = (id: string) => {
  return useQuery({
    queryKey: ['project', id],
    queryFn: async (): Promise<Project | null> => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (error) {
        throw new Error(error.message);
      }

      if (!data) {
        return null;
      }

      // Cast the Json types to our TypeScript interfaces with proper type checking
      return {
        ...data,
        timeline_steps: (data.timeline_steps as unknown) as TimelineStep[],
        client_feedback: (data.client_feedback as unknown) as ClientFeedback,
        project_details: ((data.project_details || {}) as unknown) as ProjectDetails,
        video_section: ((data.video_section || {}) as unknown) as VideoSection,
        amenities: ((data.amenities || []) as unknown) as Amenity[],
        faq_section: ((data.faq_section || []) as unknown) as FAQ[],
        additional_gallery: ((data.additional_gallery || []) as unknown) as GallerySection[],
        floor_plans: ((data.floor_plans || []) as unknown) as FloorPlan[],
        brochure_section: ((data.brochure_section || {}) as unknown) as BrochureSection,
        progress_gallery: ((data.progress_gallery || []) as unknown) as ProgressImage[],
        specifications: ((data.specifications || {}) as unknown) as ProjectSpecifications,
        location_details: ((data.location_details || {}) as unknown) as LocationDetails,
        // New dynamic sections - now properly accessing from database
        hero_section: ((data.hero_section || {}) as unknown) as HeroSection,
        project_info_stats: ((data.project_info_stats || []) as unknown) as ProjectInfoStat[],
        project_detail_section: ((data.project_detail_section || {}) as unknown) as ProjectDetailSection,
        amenities_section: ((data.amenities_section || { amenities: [] }) as unknown) as AmenitiesSection,
        nearby_locations_section: ((data.nearby_locations_section || { categories: [] }) as unknown) as NearbyLocationsSection,
        specifications_section: ((data.specifications_section || { specifications: [] }) as unknown) as SpecificationsSection,
        floor_plans_section: ((data.floor_plans_section || { floor_plans: [] }) as unknown) as FloorPlansSection,
        gallery_section: ((data.gallery_section || { images: [] }) as unknown) as GallerySection,
      };
    },
    enabled: !!id,
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { uploadImages } = useImageUpload();

  return useMutation({
    mutationFn: async (projectData: CreateProjectRequest): Promise<Project> => {
      console.log('Starting project creation with data:', projectData);
      
      // Upload images to Supabase storage if any
      let imageUrls: string[] = [];
      
      if (projectData.gallery_images && projectData.gallery_images.length > 0) {
        console.log('Uploading', projectData.gallery_images.length, 'images...');
        imageUrls = await uploadImages(projectData.gallery_images);
      }

      // Prepare data for database insertion - cast our types to Json for Supabase
      const dbData = {
        title: projectData.title,
        subtitle: projectData.subtitle,
        client_name: projectData.client_name,
        status: projectData.status,
        type: projectData.type,
        overview: projectData.overview,
        objectives: projectData.objectives,
        highlights: projectData.highlights,
        location: projectData.location,
        completion_date: projectData.completion_date.toISOString(),
        unit_types: projectData.unit_types,
        unit_sizes: projectData.unit_sizes,
        cta_title: projectData.cta_title,
        cta_subtitle: projectData.cta_subtitle,
        button_text: projectData.button_text,
        button_link: projectData.button_link,
        gallery_images: imageUrls,
        timeline_steps: projectData.timeline_steps as any,
        client_feedback: projectData.client_feedback as any,
        // Store new dynamic sections in the new database columns
        hero_section: projectData.hero_section as any,
        project_info_stats: projectData.project_info_stats as any,
        project_detail_section: projectData.project_detail_section as any,
        amenities_section: projectData.amenities_section as any,
        nearby_locations_section: projectData.nearby_locations_section as any,
        specifications_section: projectData.specifications_section as any,
        floor_plans_section: projectData.floor_plans_section as any,
        brochure_section: projectData.brochure_section as any,
        gallery_section: projectData.gallery_section as any,
      };

      console.log('Inserting project data:', dbData);

      const { data, error } = await supabase
        .from('projects')
        .insert(dbData)
        .select()
        .single();

      if (error) {
        console.error('Database insert error:', error);
        throw new Error(error.message);
      }

      console.log('Project created successfully:', data);

      // Cast the returned data back to our Project type
      return {
        ...data,
        timeline_steps: (data.timeline_steps as unknown) as TimelineStep[],
        client_feedback: (data.client_feedback as unknown) as ClientFeedback,
        project_details: ((data.project_details || {}) as unknown) as ProjectDetails,
        video_section: ((data.video_section || {}) as unknown) as VideoSection,
        amenities: ((data.amenities || []) as unknown) as Amenity[],
        faq_section: ((data.faq_section || []) as unknown) as FAQ[],
        additional_gallery: ((data.additional_gallery || []) as unknown) as GallerySection[],
        floor_plans: ((data.floor_plans || []) as unknown) as FloorPlan[],
        brochure_section: ((data.brochure_section || {}) as unknown) as BrochureSection,
        progress_gallery: ((data.progress_gallery || []) as unknown) as ProgressImage[],
        specifications: ((data.specifications || {}) as unknown) as ProjectSpecifications,
        location_details: ((data.location_details || {}) as unknown) as LocationDetails,
        // New dynamic sections - now properly accessing from database
        hero_section: ((data.hero_section || {}) as unknown) as HeroSection,
        project_info_stats: ((data.project_info_stats || []) as unknown) as ProjectInfoStat[],
        project_detail_section: ((data.project_detail_section || {}) as unknown) as ProjectDetailSection,
        amenities_section: ((data.amenities_section || { amenities: [] }) as unknown) as AmenitiesSection,
        nearby_locations_section: ((data.nearby_locations_section || { categories: [] }) as unknown) as NearbyLocationsSection,
        specifications_section: ((data.specifications_section || { specifications: [] }) as unknown) as SpecificationsSection,
        floor_plans_section: ((data.floor_plans_section || { floor_plans: [] }) as unknown) as FloorPlansSection,
        gallery_section: ((data.gallery_section || { images: [] }) as unknown) as GallerySection,
      };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast({
        title: "Success",
        description: "Project created successfully!",
      });
    },
    onError: (error: Error) => {
      console.error('Project creation failed:', error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};
