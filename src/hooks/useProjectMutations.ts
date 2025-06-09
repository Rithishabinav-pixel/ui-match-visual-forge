
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Project } from '@/types/project';

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
      const transformedData = { ...updateData };
      
      // Cast complex types to Json for Supabase
      if (updateData.client_feedback) {
        (transformedData as any).client_feedback = updateData.client_feedback as any;
      }
      
      if (updateData.timeline_steps) {
        (transformedData as any).timeline_steps = updateData.timeline_steps as any;
      }

      // Convert completion_date to string if it's a Date object
      if (updateData.completion_date && updateData.completion_date instanceof Date) {
        (transformedData as any).completion_date = updateData.completion_date.toISOString();
      }

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
