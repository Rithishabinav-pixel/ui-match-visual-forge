
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useEnquiryNotifications = () => {
  return useQuery({
    queryKey: ['enquiry-notifications'],
    queryFn: async () => {
      // Get unread project enquiries count
      const { data: projectEnquiries, error: projectError } = await supabase
        .from('project_enquiries')
        .select('id', { count: 'exact' })
        .eq('is_read', false);

      if (projectError) {
        throw new Error(projectError.message);
      }

      // Get unread contact enquiries count
      const { data: contactEnquiries, error: contactError } = await supabase
        .from('contact_enquiries')
        .select('id', { count: 'exact' })
        .eq('is_read', false);

      if (contactError) {
        throw new Error(contactError.message);
      }

      const totalUnread = (projectEnquiries?.length || 0) + (contactEnquiries?.length || 0);
      
      return {
        totalUnread,
        projectUnread: projectEnquiries?.length || 0,
        contactUnread: contactEnquiries?.length || 0
      };
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });
};
