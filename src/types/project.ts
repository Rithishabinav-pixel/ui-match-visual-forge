
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
  hero_section?: HeroSection;
  project_info_stats?: ProjectInfoStat[];
  project_detail_section?: ProjectDetailSection;
  amenities_section?: AmenitiesSection;
  nearby_locations_section?: NearbyLocationsSection;
  specifications_section?: SpecificationsSection;
  floor_plans_section?: FloorPlansSection;
  brochure_section?: BrochureDownloadSection;
  gallery_section?: GallerySection;
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

export interface HeroSection {
  main_image?: string;
  heading?: string;
  description?: string;
  location?: string;
}

export interface ProjectInfoStat {
  label: string;
  value: string;
}

export interface ProjectDetailSection {
  heading?: string;
  description?: string;
  image?: string;
}

export interface AmenitiesSection {
  heading?: string;
  description?: string;
  amenities: string[];
}

export interface NearbyLocationsSection {
  heading?: string;
  description?: string;
  categories: NearbyLocationCategory[];
}

export interface NearbyLocationCategory {
  icon?: string;
  heading: string;
  places: NearbyPlace[];
}

export interface NearbyPlace {
  name: string;
  distance: string;
}

export interface SpecificationsSection {
  heading?: string;
  specifications: SpecificationItem[];
}

export interface SpecificationItem {
  subheading: string;
  content: string;
}

export interface FloorPlansSection {
  heading?: string;
  description?: string;
  floor_plans: FloorPlan[];
}

export interface FloorPlan {
  image: string;
  title: string;
  brochure_url?: string;
}

export interface BrochureDownloadSection {
  heading?: string;
  description?: string;
  brochure_file?: string;
}

export interface GallerySection {
  images: string[];
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
  // New dynamic sections
  hero_section?: HeroSection;
  project_info_stats?: ProjectInfoStat[];
  project_detail_section?: ProjectDetailSection;
  amenities_section?: AmenitiesSection;
  nearby_locations_section?: NearbyLocationsSection;
  specifications_section?: SpecificationsSection;
  floor_plans_section?: FloorPlansSection;
  brochure_section?: BrochureDownloadSection;
  gallery_section?: GallerySection;
}
