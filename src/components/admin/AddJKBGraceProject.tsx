
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useCreateProject } from '@/hooks/useProjects';
import { useToast } from '@/hooks/use-toast';
import { CreateProjectRequest } from '@/types/project';

export const AddJKBGraceProject = () => {
  const [isCreating, setIsCreating] = useState(false);
  const createProject = useCreateProject();
  const { toast } = useToast();

  const createJKBGraceProject = async () => {
    setIsCreating(true);

    const jkbGraceData: CreateProjectRequest = {
      title: "JKB Grace",
      subtitle: "Luxury Living in the Heart of Virugambakkam",
      client_name: "JKB Housing Pvt. Ltd.",
      status: ['ongoing'],
      type: 'residential',
      overview: "JKB Grace is an exceptional residential project offering thoughtfully designed 2.5 BHK apartments in one of Chennai's fastest-growing neighborhoods—Virugambakkam. These homes are perfect for families seeking peaceful surroundings, superior construction quality, and modern-day convenience.",
      objectives: "Premium living with excellent connectivity and modern amenities",
      highlights: [
        "Covered Car Parking",
        "CCTV Surveillance", 
        "Lift Facility",
        "Rainwater Harvesting",
        "Power Backup for Common Areas",
        "LED Street Lighting",
        "24x7 Water Supply"
      ],
      location: "Gnanamoorthy Nagar, Virugambakkam, Chennai",
      completion_date: new Date('2025-12-31'),
      unit_types: "2.5 BHK",
      unit_sizes: "1100 - 2000 sq.ft",
      cta_title: "Your Dream Home Awaits",
      cta_subtitle: "Contact us for site visit and pricing details",
      button_text: "Enquire Now",
      button_link: "/contact",
      gallery_images: [],
      timeline_steps: [
        {
          title: "Project Launch",
          status: 'completed',
          description: "Project officially launched with CMDA approvals",
          duration: "1",
          unit: "months"
        },
        {
          title: "Construction Phase",
          status: 'current',
          description: "Foundation and structural work in progress",
          duration: "18",
          unit: "months"
        },
        {
          title: "Completion & Handover",
          status: 'upcoming',
          description: "Project completion and key handover",
          duration: "6",
          unit: "months"
        }
      ],
      client_feedback: {
        name: "Rajesh Kumar",
        designation: "Home Buyer",
        company: "IT Professional",
        testimonial: "JKB Grace offers the perfect combination of location, quality, and value. The team's transparency and commitment to timelines impressed us.",
        rating: 5
      },
      
      // Hero Section
      hero_section: {
        main_image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop",
        heading: "The Key to Find a Path to a Luxurious Lifestyle",
        description: "Premium 2.5 BHK flats with elegant architecture, superior amenities, and excellent connectivity, right in the heart of West Chennai.",
        location: "Gnanamoorthy Nagar, Virugambakkam"
      },

      // Project Info Stats
      project_info_stats: [
        {
          label: "CMDA APPROVED",
          value: "Government approved residential project with all necessary clearances and certifications for secure investment"
        },
        {
          label: "1100 - 2000 SQ.FT",
          value: "Spacious unit configurations designed for modern family living with optimal space utilization and comfort"
        },
        {
          label: "STILT +3",
          value: "Well-planned vertical construction with ground floor parking and three residential floors for convenience"
        },
        {
          label: "2 & 3 BHK",
          value: "Premium apartment configurations with modern amenities and quality construction standards for luxurious living"
        }
      ],

      // Project Detail Section
      project_detail_section: {
        heading: "Premium Living, Perfectly Crafted",
        description: "JKB Grace is an exceptional residential project offering thoughtfully designed 2.5 BHK apartments in one of Chennai's fastest-growing neighborhoods—Virugambakkam. These homes are perfect for families seeking peaceful surroundings, superior construction quality, and modern-day convenience.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop"
      },

      // Amenities Section
      amenities_section: {
        heading: "Modern Amenities That Elevate Your Lifestyle",
        description: "Every apartment at JKB Grace is designed to offer a blend of functionality and comfort.",
        amenities: [
          "Covered Car Parking",
          "CCTV Surveillance",
          "Lift Facility", 
          "Rainwater Harvesting",
          "Power Backup for Common Areas",
          "LED Street Lighting",
          "24x7 Water Supply"
        ]
      },

      // Nearby Locations Section
      nearby_locations_section: {
        heading: "Connectivity That Adds Value",
        description: "Strategically located with quick access to key civic infrastructure.",
        categories: [
          {
            heading: "Hospitals",
            icon: undefined,
            places: [
              { name: "Vijaya Hospital", distance: "2.3 km" },
              { name: "SRM Clinic", distance: "1.4 km" }
            ]
          },
          {
            heading: "Schools & Colleges",
            icon: undefined,
            places: [
              { name: "Kendriya Vidyalaya", distance: "3.0 km" },
              { name: "AVM Matric", distance: "2.1 km" }
            ]
          },
          {
            heading: "IT Parks",
            icon: undefined,
            places: [
              { name: "Olympia Tech Park", distance: "5.1 km" },
              { name: "DLF IT Park", distance: "6.2 km" }
            ]
          },
          {
            heading: "Leisure",
            icon: undefined,
            places: [
              { name: "Forum Vijaya Mall", distance: "3.3 km" },
              { name: "AVM Studios", distance: "2.8 km" }
            ]
          }
        ]
      },

      // Specifications Section
      specifications_section: {
        heading: "Designed with Precision, Built with Purpose",
        specifications: [
          {
            subheading: "Structure",
            content: "RCC Framed Structure with earthquake resistant design ensuring safety and durability"
          },
          {
            subheading: "Superstructure", 
            content: "Fly Ash Brick Masonry for superior thermal insulation and eco-friendly construction"
          },
          {
            subheading: "Main Door",
            content: "Teak Wood Frame & Flush Door with safety locks for enhanced security"
          },
          {
            subheading: "Windows",
            content: "UPVC Sliding Windows with mosquito mesh for optimal ventilation and maintenance"
          },
          {
            subheading: "Flooring",
            content: "Vitrified Tiles in Living, Dining, Bedrooms for elegant finish and easy maintenance"
          },
          {
            subheading: "Sanitary Fittings",
            content: "Jaguar / Hindware or equivalent brand CP fittings with modern sanitary ware"
          },
          {
            subheading: "Electrical",
            content: "Finolex Copper Wiring & Modular Switches with adequate power points throughout"
          },
          {
            subheading: "Generator",
            content: "Power Backup for Lift & Common Areas ensuring uninterrupted essential services"
          }
        ]
      },

      // Floor Plans Section
      floor_plans_section: {
        heading: "Thoughtfully Planned Layouts",
        description: "Choose from spacious 2.5 BHK configurations tailored for modern living.",
        floor_plans: [
          {
            title: "1st Floor - 2BHK (West Facing)",
            image: "/lovable-uploads/3cbfa16f-b4dc-4ac3-86c3-f92f189294c1.png",
            description: "Spacious 2BHK layout with western exposure and modern amenities",
            area: "1200 sq.ft",
            bedrooms: "2"
          },
          {
            title: "2nd Floor - 2.5BHK (East Facing)",
            image: "/lovable-uploads/3cbfa16f-b4dc-4ac3-86c3-f92f189294c1.png",
            description: "Premium 2.5BHK layout with eastern exposure and enhanced living space",
            area: "1500 sq.ft",
            bedrooms: "2.5"
          },
          {
            title: "3rd Floor - 2.5BHK (Corner Unit)",
            image: "/lovable-uploads/3cbfa16f-b4dc-4ac3-86c3-f92f189294c1.png",
            description: "Exclusive corner unit with 2.5BHK layout and premium positioning",
            area: "1600 sq.ft",
            bedrooms: "2.5"
          }
        ]
      },

      // Brochure Section
      brochure_section: {
        heading: "Download Brochure",
        description: "Get detailed specifications, floor plans, and pricing information by downloading the official project brochure.",
        brochure_url: "#"
      },

      // Gallery Section
      gallery_section: {
        images: [
          "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop"
        ]
      }
    };

    try {
      await createProject.mutateAsync(jkbGraceData);
      toast({
        title: "Success!",
        description: "JKB Grace project has been created successfully.",
      });
    } catch (error) {
      console.error('Failed to create JKB Grace project:', error);
      toast({
        title: "Error",
        description: "Failed to create the project. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Create JKB Grace Project</h2>
        <p className="text-gray-600 mb-8">
          This will create the JKB Grace project with all the predefined content including hero section, 
          amenities, specifications, floor plans, and SEO optimization.
        </p>
        
        <Button 
          onClick={createJKBGraceProject}
          disabled={isCreating}
          className="bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] px-8 py-3 text-lg"
        >
          {isCreating ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Creating Project...
            </>
          ) : (
            'Create JKB Grace Project'
          )}
        </Button>
      </div>
    </div>
  );
};
