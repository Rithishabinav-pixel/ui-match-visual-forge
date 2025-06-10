
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
  LocationDetails
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
        timeline_steps: projectData.timeline_steps as any, // Cast to Json for Supabase
        client_feedback: projectData.client_feedback as any, // Cast to Json for Supabase
      };

      console.log('Inserting project data:', dbData);

      const { data, error } = await supabase
        .from('projects')
        .insert(dbData) // Insert single object, not array
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
