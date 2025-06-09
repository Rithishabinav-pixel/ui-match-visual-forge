
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Project, CreateProjectRequest } from '@/types/project';
import { useToast } from '@/hooks/use-toast';

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

      return data || [];
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
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    enabled: !!id,
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (projectData: CreateProjectRequest): Promise<Project> => {
      // Upload images to Supabase storage if any
      let imageUrls: string[] = [];
      
      if (projectData.gallery_images && projectData.gallery_images.length > 0) {
        const uploadPromises = projectData.gallery_images.map(async (file, index) => {
          const fileExt = file.name.split('.').pop();
          const fileName = `${Date.now()}-${index}.${fileExt}`;
          
          const { data, error } = await supabase.storage
            .from('project-images')
            .upload(fileName, file);

          if (error) {
            throw new Error(`Image upload failed: ${error.message}`);
          }

          const { data: urlData } = supabase.storage
            .from('project-images')
            .getPublicUrl(data.path);

          return urlData.publicUrl;
        });

        imageUrls = await Promise.all(uploadPromises);
      }

      // Prepare data for database insertion
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
        timeline_steps: projectData.timeline_steps,
        client_feedback: projectData.client_feedback,
      };

      const { data, error } = await supabase
        .from('projects')
        .insert([dbData])
        .select()
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast({
        title: "Success",
        description: "Project created successfully!",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};
