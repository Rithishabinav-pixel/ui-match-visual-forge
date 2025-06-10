
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
  // New dynamic content fields
  hero_image?: string;
  hero_tags?: string[];
  hero_description?: string;
  project_details?: ProjectDetails;
  video_section?: VideoSection;
  amenities?: Amenity[];
  faq_section?: FAQ[];
  additional_gallery?: GallerySection[];
  floor_plans?: FloorPlan[];
  brochure_section?: BrochureSection;
  progress_gallery?: ProgressImage[];
  specifications?: ProjectSpecifications;
  location_details?: LocationDetails;
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

export interface ProjectDetails {
  rera_number?: string;
  possession_date?: string;
  total_area?: string;
  total_towers?: string;
  total_units?: string;
  parking?: string;
  builder?: string;
  architect?: string;
}

export interface VideoSection {
  title?: string;
  description?: string;
  video_url?: string;
  thumbnail?: string;
}

export interface Amenity {
  name: string;
  icon?: string;
  image?: string;
  description?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GallerySection {
  title: string;
  images: string[];
}

export interface FloorPlan {
  title: string;
  image: string;
  description?: string;
  area?: string;
  bedrooms?: string;
}

export interface BrochureSection {
  title?: string;
  description?: string;
  brochure_url?: string;
}

export interface ProgressImage {
  title: string;
  image: string;
  date?: string;
  description?: string;
}

export interface ProjectSpecifications {
  structure?: string;
  flooring?: string;
  doors_windows?: string;
  kitchen?: string;
  bathroom?: string;
  electrical?: string;
  safety?: string;
}

export interface LocationDetails {
  address?: string;
  nearby_landmarks?: string[];
  connectivity?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
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
  // New dynamic content fields
  hero_image?: string;
  hero_tags?: string[];
  hero_description?: string;
  project_details?: ProjectDetails;
  video_section?: VideoSection;
  amenities?: Amenity[];
  faq_section?: FAQ[];
  additional_gallery?: GallerySection[];
  floor_plans?: FloorPlan[];
  brochure_section?: BrochureSection;
  progress_gallery?: ProgressImage[];
  specifications?: ProjectSpecifications;
  location_details?: LocationDetails;
}
