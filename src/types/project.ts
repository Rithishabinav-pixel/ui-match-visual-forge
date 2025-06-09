
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client_name: string;
  status: string[];
  type: string;
  overview: string;
  objectives: string;
  highlights: string[];
  location: string;
  completion_date: string;
  unit_types: string;
  unit_sizes: string;
  cta_title: string;
  cta_subtitle: string;
  button_text: string;
  button_link: string;
  gallery_images: string[];
  timeline_steps: TimelineStep[];
  client_feedback: ClientFeedback;
  created_at: string;
  updated_at: string;
}

export interface TimelineStep {
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  description: string;
  duration: string;
  unit: 'days' | 'weeks' | 'months';
}

export interface ClientFeedback {
  name: string;
  designation: string;
  company: string;
  testimonial: string;
  rating: number;
}

export interface CreateProjectRequest {
  title: string;
  subtitle: string;
  client_name: string;
  status: string[];
  type: string;
  overview: string;
  objectives: string;
  highlights: string[];
  location: string;
  completion_date: Date;
  unit_types: string;
  unit_sizes: string;
  cta_title: string;
  cta_subtitle: string;
  button_text: string;
  button_link: string;
  gallery_images?: File[];
  timeline_steps: TimelineStep[];
  client_feedback: ClientFeedback;
}
