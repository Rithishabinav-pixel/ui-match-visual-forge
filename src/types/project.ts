

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
  hero_image?: string;
  project_info_stats?: ProjectInfoStat[];
  project_detail_section?: ProjectDetailSection;
  project_details?: ProjectDetails;
  amenities_section?: AmenitiesSection;
  amenities?: Amenity[];
  nearby_locations_section?: NearbyLocationsSection;
  specifications_section?: SpecificationsSection;
  specifications?: ProjectSpecifications;
  floor_plans_section?: FloorPlansSection;
  floor_plans?: FloorPlan[];
  brochure_section?: BrochureDownloadSection;
  gallery_section?: GallerySection;
  additional_gallery?: GallerySection[];
  video_section?: VideoSection;
  progress_gallery?: ProgressImage[];
  location_details?: LocationDetails;
  faq_section?: FAQ[];
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

export interface ProjectDetails {
  overview?: string;
  highlights?: string[];
  specifications?: string[];
  amenities?: string[];
  // Additional properties used by components
  approval_status?: string;
  floors?: string;
  rera_number?: string;
  possession_date?: string;
  total_area?: string;
  total_towers?: string;
  total_units?: string;
  builder?: string;
}

export interface AmenitiesSection {
  heading?: string;
  description?: string;
  amenities: string[];
}

export interface Amenity {
  name: string;
  icon?: string;
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
  description?: string;
  specifications: SpecificationItem[];
}

export interface SpecificationItem {
  subheading: string;
  content: string;
}

export interface ProjectSpecifications {
  [key: string]: any;
}

export interface FloorPlansSection {
  heading?: string;
  description?: string;
  floor_plans: FloorPlan[];
}

export interface FloorPlan {
  image: string;
  title: string;
  description?: string;
  area?: string;
  bedrooms?: string;
  brochure_url?: string;
}

export interface BrochureDownloadSection {
  heading?: string;
  description?: string;
  brochure_file?: string;
  brochure_url?: string;
}

export interface BrochureSection {
  title?: string;
  description?: string;
  brochure_url?: string;
}

export interface GallerySection {
  images: string[];
  title?: string;
}

export interface VideoSection {
  video_url?: string;
  thumbnail?: string;
  title?: string;
  description?: string;
}

export interface ProgressImage {
  url: string;
  caption?: string;
  date?: string;
  // Additional properties used by components
  image: string;
  title: string;
  description?: string;
}

export interface LocationDetails {
  address?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  nearby_locations?: NearbyLocationCategory[];
  // Additional properties used by components
  nearby_landmarks?: string[];
  connectivity?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
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

