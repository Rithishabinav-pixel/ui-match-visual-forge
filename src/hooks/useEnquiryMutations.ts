
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useMarkEnquiriesAsRead = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const markProjectEnquiriesAsRead = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from('project_enquiries')
        .update({ is_read: true })
        .eq('is_read', false);

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enquiries'] });
      queryClient.invalidateQueries({ queryKey: ['enquiry-notifications'] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to mark enquiries as read",
        variant: "destructive",
      });
    },
  });

  const markContactEnquiriesAsRead = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from('contact_enquiries')
        .update({ is_read: true })
        .eq('is_read', false);

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enquiries'] });
      queryClient.invalidateQueries({ queryKey: ['enquiry-notifications'] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to mark enquiries as read",
        variant: "destructive",
      });
    },
  });

  return {
    markProjectEnquiriesAsRead,
    markContactEnquiriesAsRead
  };
};
