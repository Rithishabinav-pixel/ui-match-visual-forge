
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface ProjectEnquiry {
  id: string;
  project_id: string | null;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  created_at: string;
}

export interface ContactEnquiry {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  created_at: string;
}

export const useEnquiries = (type: 'project' | 'contact') => {
  return useQuery({
    queryKey: ['enquiries', type],
    queryFn: async () => {
      if (type === 'project') {
        const { data, error } = await supabase
          .from('project_enquiries')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          throw new Error(error.message);
        }

        return data as ProjectEnquiry[];
      } else {
        const { data, error } = await supabase
          .from('contact_enquiries')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          throw new Error(error.message);
        }

        return data as ContactEnquiry[];
      }
    },
  });
};
