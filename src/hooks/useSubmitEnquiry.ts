
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ProjectEnquiryData {
  name: string;
  email: string;
  phone: string;
  message: string;
  project_id?: string;
}

interface ContactEnquiryData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const useSubmitProjectEnquiry = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ProjectEnquiryData) => {
      const { error } = await supabase
        .from('project_enquiries')
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          message: data.message,
          project_id: data.project_id || null,
        });

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enquiries', 'project'] });
      toast({
        title: "Enquiry Submitted!",
        description: "Thank you for your enquiry. We'll get back to you soon.",
      });
    },
    onError: (error: Error) => {
      console.error('Error submitting project enquiry:', error);
      toast({
        title: "Error",
        description: "There was an issue submitting your enquiry. Please try again.",
        variant: "destructive",
      });
    },
  });
};

export const useSubmitContactEnquiry = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactEnquiryData) => {
      // First, save to database
      const { error } = await supabase
        .from('contact_enquiries')
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          subject: data.subject,
          message: data.message,
        });

      if (error) {
        throw new Error(error.message);
      }

      // Then, send email via edge function
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
      });

      if (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't throw error here - enquiry was saved successfully
        // Just log the email error
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enquiries', 'contact'] });
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon and you should receive a confirmation email shortly.",
      });
    },
    onError: (error: Error) => {
      console.error('Error submitting contact enquiry:', error);
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });
};
