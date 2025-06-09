
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Project } from '@/types/project';
import { Json } from '@/integrations/supabase/types';

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (projectId: string) => {
      // First, delete associated images from storage
      const { data: project } = await supabase
        .from('projects')
        .select('gallery_images')
        .eq('id', projectId)
        .single();

      if (project?.gallery_images?.length > 0) {
        const imageUrls = project.gallery_images;
        const filePaths = imageUrls.map(url => {
          const urlParts = url.split('/');
          return urlParts[urlParts.length - 1];
        });

        await supabase.storage
          .from('project-images')
          .remove(filePaths);
      }

      // Delete the project
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', projectId);

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast({
        title: "Success",
        description: "Project deleted successfully!",
      });
    },
    onError: (error: Error) => {
      console.error('Project deletion failed:', error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ projectId, updateData }: { projectId: string; updateData: Partial<Project> }) => {
      // Transform the data to match Supabase's expected types
      const transformedData: Record<string, any> = { ...updateData };
      
      // Cast complex types to Json for Supabase through unknown
      if (updateData.client_feedback) {
        transformedData.client_feedback = updateData.client_feedback as unknown as Json;
      }
      
      if (updateData.timeline_steps) {
        transformedData.timeline_steps = updateData.timeline_steps as unknown as Json;
      }

      // completion_date is already a string in the Project interface, no conversion needed

      const { error } = await supabase
        .from('projects')
        .update(transformedData)
        .eq('id', projectId);

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast({
        title: "Success",
        description: "Project updated successfully!",
      });
    },
    onError: (error: Error) => {
      console.error('Project update failed:', error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};
