
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useMarkEnquiryAsRead = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ 
      enquiryId, 
      type 
    }: { 
      enquiryId: string; 
      type: 'project' | 'contact' 
    }) => {
      const table = type === 'project' ? 'project_enquiries' : 'contact_enquiries';
      
      const { error } = await supabase
        .from(table)
        .update({ is_read: true })
        .eq('id', enquiryId);

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['enquiries', variables.type] });
      queryClient.invalidateQueries({ queryKey: ['unread-count'] });
    },
    onError: (error: Error) => {
      console.error('Mark as read failed:', error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useUnreadEnquiryCount = () => {
  return useQueryClient().fetchQuery({
    queryKey: ['unread-count'],
    queryFn: async () => {
      const [projectResult, contactResult] = await Promise.all([
        supabase
          .from('project_enquiries')
          .select('id', { count: 'exact' })
          .eq('is_read', false),
        supabase
          .from('contact_enquiries')
          .select('id', { count: 'exact' })
          .eq('is_read', false)
      ]);

      if (projectResult.error) throw new Error(projectResult.error.message);
      if (contactResult.error) throw new Error(contactResult.error.message);

      return (projectResult.count || 0) + (contactResult.count || 0);
    },
  });
};
