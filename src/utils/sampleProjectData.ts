
import { supabase } from '@/integrations/supabase/client';

export const sampleProjects = [
  {
    title: "JKB Grace",
    subtitle: "Premium 2.5 BHK Flats",
    client_name: "JKB Constructions",
    status: ["Under Construction"],
    type: "Residential",
    overview: "A premium residential project offering luxurious 2.5 BHK flats in the heart of Chennai.",
    objectives: "To provide affordable luxury housing with modern amenities and excellent connectivity.",
    highlights: ["Premium Location", "Modern Architecture", "Excellent Connectivity", "Top-notch Amenities"],
    location: "Ramalinga Nagar, Virugambakkam, Chennai",
    completion_date: "2025-12-31T00:00:00.000Z",
    unit_types: "2.5 BHK",
    unit_sizes: "1100 - 1400 sq.ft",
    cta_title: "Book Your Dream Home",
    cta_subtitle: "Limited units available",
    button_text: "Enquire Now",
    button_link: "#enquiry",
    gallery_images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
    ],
    timeline_steps: [
      { title: "Foundation", status: "completed", description: "Foundation work completed", duration: "3", unit: "months" },
      { title: "Structure", status: "current", description: "Structural work in progress", duration: "6", unit: "months" },
      { title: "Finishing", status: "upcoming", description: "Interior finishing work", duration: "4", unit: "months" }
    ],
    client_feedback: {
      name: "Rajesh Kumar",
      designation: "Software Engineer",
      company: "Tech Solutions",
      testimonial: "Excellent quality construction and timely delivery. Highly recommended!",
      rating: 5
    },
    hero_section: {
      heading: "JKB Grace - Premium Living",
      description: "Experience luxury living with modern amenities",
      main_image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
      location: "Ramalinga Nagar, Virugambakkam, Chennai"
    },
    project_info_stats: [
      { label: "CMDA APPROVED", value: "Fully approved residential project" },
      { label: "1100 - 1400 SQ.FT", value: "Spacious 2.5 BHK apartments" },
      { label: "STILT +3", value: "Modern multi-story design" },
      { label: "2.5 BHK", value: "Premium apartment configuration" }
    ],
    project_detail_section: {
      heading: "Project Overview",
      description: "JKB Grace offers premium 2.5 BHK flats designed for modern families seeking comfort and luxury in the heart of Chennai."
    },
    amenities_section: {
      heading: "Premium Amenities",
      amenities: ["Swimming Pool", "Gymnasium", "Kids Play Area", "24/7 Security", "Power Backup", "Landscaped Gardens"]
    },
    nearby_locations_section: {
      heading: "Nearby Locations",
      categories: [
        {
          name: "Educational",
          locations: [
            { name: "Kendriya Vidyalaya", distance: "0.5 km" },
            { name: "Anna University", distance: "8 km" }
          ]
        },
        {
          name: "Healthcare",
          locations: [
            { name: "Government Hospital", distance: "2 km" },
            { name: "Apollo Hospital", distance: "5 km" }
          ]
        }
      ]
    },
    specifications_section: {
      heading: "Project Specifications",
      specifications: [
        {
          subheading: "Structure & Foundation",
          content: "RCC framed structure with earthquake resistant design. Deep foundation with pile foundation system. High-grade concrete M25 for structural elements."
        },
        {
          subheading: "Flooring",
          content: "Premium vitrified tiles in living areas. Anti-skid ceramic tiles in bathrooms. Wooden flooring in master bedroom. Granite flooring in kitchen."
        },
        {
          subheading: "Electrical Fittings",
          content: "Modular switches and sockets from reputed brands. LED lighting throughout the apartment. Provision for AC in all rooms. Power backup for common areas."
        },
        {
          subheading: "Plumbing & Sanitary",
          content: "Concealed plumbing with premium CP fittings. Hot and cold water supply to all bathrooms. Modern sanitary ware from branded manufacturers."
        },
        {
          subheading: "Doors & Windows",
          content: "Premium hardwood doors with polish finish. UPVC windows with mosquito mesh. Main door with safety locks and digital lock provision."
        },
        {
          subheading: "Kitchen Specifications",
          content: "Modular kitchen with granite counter top. Stainless steel sink with drainage board. Provision for water purifier and dishwasher. Exhaust fan and chimney provision."
        }
      ]
    },
    floor_plans_section: {
      heading: "Floor Plans",
      floor_plans: [
        {
          name: "2.5 BHK - Type A",
          area: "1100 sq.ft",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
          download_url: "#"
        },
        {
          name: "2.5 BHK - Type B",
          area: "1400 sq.ft",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
          download_url: "#"
        }
      ]
    },
    brochure_section: {
      heading: "Download Brochure",
      description: "Get detailed information about JKB Grace",
      brochure_url: "#"
    },
    gallery_section: {
      heading: "Project Gallery",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
      ]
    }
  },
  {
    title: "Emerald Heights",
    subtitle: "Luxury 3 BHK Apartments",
    client_name: "Emerald Developers",
    status: ["Completed"],
    type: "Residential",
    overview: "A luxurious residential complex with modern amenities and excellent infrastructure.",
    objectives: "To create a premium living experience with world-class facilities.",
    highlights: ["Swimming Pool", "Gym", "Kids Play Area", "24/7 Security"],
    location: "Anna Nagar, Chennai",
    completion_date: "2024-06-30T00:00:00.000Z",
    unit_types: "3 BHK",
    unit_sizes: "1600 - 1800 sq.ft",
    cta_title: "Ready to Move",
    cta_subtitle: "Immediate possession available",
    button_text: "Book Now",
    button_link: "#enquiry",
    gallery_images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop"
    ],
    timeline_steps: [
      { title: "Planning", status: "completed", description: "Project planning and approvals", duration: "2", unit: "months" },
      { title: "Construction", status: "completed", description: "Main construction work", duration: "18", unit: "months" },
      { title: "Handover", status: "completed", description: "Project handover completed", duration: "1", unit: "months" }
    ],
    client_feedback: {
      name: "Priya Sharma",
      designation: "Marketing Manager",
      company: "Global Corp",
      testimonial: "Beautiful apartments with excellent amenities. Very satisfied with the quality.",
      rating: 5
    },
    hero_section: {
      heading: "Emerald Heights - Luxury Living",
      description: "Premium 3 BHK apartments with world-class amenities",
      main_image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
      location: "Anna Nagar, Chennai"
    },
    project_info_stats: [
      { label: "DTCP APPROVED", value: "Government approved residential project" },
      { label: "1600 - 1800 SQ.FT", value: "Spacious 3 BHK luxury apartments" },
      { label: "G+7 FLOORS", value: "Modern high-rise design" },
      { label: "3 BHK", value: "Premium apartment configuration" }
    ],
    project_detail_section: {
      heading: "Luxury Redefined",
      description: "Emerald Heights represents the pinnacle of luxury living with meticulously designed 3 BHK apartments featuring premium finishes and world-class amenities."
    },
    amenities_section: {
      heading: "World-Class Amenities",
      amenities: ["Swimming Pool", "Fully Equipped Gym", "Children's Play Area", "24/7 Security", "Power Backup", "Landscaped Gardens", "Clubhouse", "Jogging Track"]
    },
    nearby_locations_section: {
      heading: "Prime Location Benefits",
      categories: [
        {
          name: "Shopping & Entertainment",
          locations: [
            { name: "Express Avenue Mall", distance: "2 km" },
            { name: "Spencer Plaza", distance: "3 km" }
          ]
        },
        {
          name: "Transportation",
          locations: [
            { name: "Anna Nagar Metro", distance: "0.8 km" },
            { name: "Airport", distance: "15 km" }
          ]
        }
      ]
    },
    specifications_section: {
      heading: "Technical Specifications",
      specifications: [
        {
          subheading: "Structural Design",
          content: "Earthquake resistant RCC frame structure. M30 grade concrete for columns and beams. TMT bars Fe500 grade for reinforcement. Waterproof treatment for terrace and basement."
        },
        {
          subheading: "Wall Finishes",
          content: "Smooth finish internal walls with premium emulsion paint. External walls with weather shield paint. Ceramic tiles dado in bathrooms up to door height."
        },
        {
          subheading: "Electrical Systems",
          content: "100% power backup for common areas. Individual MCB distribution board for each unit. Premium modular switches and LED lighting. Intercom facility for each apartment."
        },
        {
          subheading: "Water Supply & Drainage",
          content: "24/7 water supply through bore well and corporation water. STP for waste water treatment. Rainwater harvesting system. Premium CP fittings in all bathrooms."
        },
        {
          subheading: "Security Features",
          content: "CCTV surveillance in common areas. Intercom facility from security to each flat. Visitor management system. Fire safety equipment on each floor."
        }
      ]
    },
    floor_plans_section: {
      heading: "Apartment Floor Plans",
      floor_plans: [
        {
          name: "3 BHK - Premium",
          area: "1600 sq.ft",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
          download_url: "#"
        },
        {
          name: "3 BHK - Luxury",
          area: "1800 sq.ft",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
          download_url: "#"
        }
      ]
    },
    brochure_section: {
      heading: "Project Brochure",
      description: "Comprehensive details about Emerald Heights",
      brochure_url: "#"
    },
    gallery_section: {
      heading: "Project Gallery",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop"
      ]
    }
  },
  {
    title: "Silver Oaks",
    subtitle: "Premium Villa Plots",
    client_name: "Silver Properties",
    status: ["Ready for Sale"],
    type: "Plots",
    overview: "Premium villa plots in a gated community with excellent infrastructure and connectivity.",
    objectives: "To provide ready-to-build villa plots with complete infrastructure facilities.",
    highlights: ["Gated Community", "Wide Roads", "Underground Drainage", "Park & Recreation"],
    location: "Tambaram, Chennai",
    completion_date: "2024-03-31T00:00:00.000Z",
    unit_types: "Villa Plots",
    unit_sizes: "1200 - 2400 sq.ft",
    cta_title: "Own Your Dream Plot",
    cta_subtitle: "Limited plots available",
    button_text: "View Plots",
    button_link: "#enquiry",
    gallery_images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop"
    ],
    timeline_steps: [
      { title: "Land Acquisition", status: "completed", description: "Land acquisition completed", duration: "6", unit: "months" },
      { title: "Infrastructure", status: "completed", description: "Road and utility development", duration: "12", unit: "months" },
      { title: "Ready for Sale", status: "completed", description: "Plots ready for construction", duration: "1", unit: "months" }
    ],
    client_feedback: {
      name: "Arun Krishnan",
      designation: "Business Owner",
      company: "AK Enterprises",
      testimonial: "Excellent location with great infrastructure. Perfect for building our dream home.",
      rating: 4
    },
    hero_section: {
      heading: "Silver Oaks - Premium Villa Plots",
      description: "Build your dream home in a premium gated community",
      main_image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop",
      location: "Tambaram, Chennai"
    },
    project_info_stats: [
      { label: "DTCP APPROVED", value: "Government approved villa plots" },
      { label: "1200 - 2400 SQ.FT", value: "Various plot sizes available" },
      { label: "GATED COMMUNITY", value: "Secure residential community" },
      { label: "VILLA PLOTS", value: "Ready to build plots" }
    ],
    project_detail_section: {
      heading: "Premium Plot Community",
      description: "Silver Oaks offers premium villa plots in a well-planned gated community with complete infrastructure and modern amenities for building your dream home."
    },
    amenities_section: {
      heading: "Community Amenities",
      amenities: ["Gated Community", "Wide Roads", "Underground Drainage", "Street Lighting", "Park & Recreation", "Security", "Water Supply", "Power Connection"]
    },
    nearby_locations_section: {
      heading: "Strategic Location",
      categories: [
        {
          name: "Transportation",
          locations: [
            { name: "Tambaram Railway Station", distance: "3 km" },
            { name: "GST Road", distance: "1 km" }
          ]
        },
        {
          name: "Educational",
          locations: [
            { name: "Sairam Engineering College", distance: "5 km" },
            { name: "DGP Vaishnav College", distance: "7 km" }
          ]
        }
      ]
    },
    specifications_section: {
      heading: "Plot Specifications & Infrastructure",
      specifications: [
        {
          subheading: "Plot Details",
          content: "Clear title villa plots ranging from 1200 to 2400 sq.ft. East and North facing plots available. Corner plots with premium pricing. Compound wall for entire community."
        },
        {
          subheading: "Road Infrastructure",
          content: "30 feet main road with concrete paving. 20 feet internal roads with interlocking tiles. Street lighting with LED fixtures. Avenue plantation along major roads."
        },
        {
          subheading: "Utility Connections",
          content: "Underground electrical cables for each plot. Water connection from bore well and metro water. Individual sewage connections to STP. High-speed internet connectivity provision."
        },
        {
          subheading: "Amenities & Facilities",
          content: "Children's play area with modern equipment. Community hall for functions. Landscaped gardens and walking paths. 24/7 security with CCTV monitoring."
        },
        {
          subheading: "Legal Compliance",
          content: "DTCP approved layout with clear titles. All necessary NOCs obtained. Building guidelines and restrictions clearly defined. Home loan assistance available."
        }
      ]
    },
    floor_plans_section: {
      heading: "Plot Layouts",
      floor_plans: [
        {
          name: "Standard Plot",
          area: "1200 sq.ft",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
          download_url: "#"
        },
        {
          name: "Premium Plot",
          area: "2400 sq.ft",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
          download_url: "#"
        }
      ]
    },
    brochure_section: {
      heading: "Plot Information",
      description: "Detailed plot specifications and community features",
      brochure_url: "#"
    },
    gallery_section: {
      heading: "Community Gallery",
      images: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop"
      ]
    }
  },
  {
    title: "Golden Gateway",
    subtitle: "Commercial Complex",
    client_name: "Gateway Developers",
    status: ["Under Construction"],
    type: "Commercial",
    overview: "A modern commercial complex strategically located for maximum business potential.",
    objectives: "To create a premium commercial space with state-of-the-art facilities.",
    highlights: ["Prime Location", "Modern Design", "Ample Parking", "High-speed Elevators"],
    location: "T. Nagar, Chennai",
    completion_date: "2025-09-30T00:00:00.000Z",
    unit_types: "Office Spaces",
    unit_sizes: "500 - 5000 sq.ft",
    cta_title: "Invest in Prime Commercial Space",
    cta_subtitle: "Pre-launch offers available",
    button_text: "Get Details",
    button_link: "#enquiry",
    gallery_images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    ],
    timeline_steps: [
      { title: "Foundation", status: "completed", description: "Foundation and basement completed", duration: "4", unit: "months" },
      { title: "Structure", status: "current", description: "Structural work in progress", duration: "8", unit: "months" },
      { title: "Interiors", status: "upcoming", description: "Interior finishing work", duration: "6", unit: "months" }
    ],
    client_feedback: {
      name: "Meena Patel",
      designation: "CEO",
      company: "Business Solutions",
      testimonial: "Excellent commercial project with great potential for business growth.",
      rating: 5
    },
    hero_section: {
      heading: "Golden Gateway - Commercial Excellence",
      description: "Premium commercial spaces in the heart of T. Nagar",
      main_image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
      location: "T. Nagar, Chennai"
    },
    project_info_stats: [
      { label: "COMMERCIAL COMPLEX", value: "Premium office and retail spaces" },
      { label: "500 - 5000 SQ.FT", value: "Flexible commercial units" },
      { label: "G+7 FLOORS", value: "Modern commercial tower" },
      { label: "PRIME LOCATION", value: "Heart of T. Nagar business district" }
    ],
    project_detail_section: {
      heading: "Commercial Excellence",
      description: "Golden Gateway offers premium commercial spaces designed for modern businesses, featuring state-of-the-art facilities and strategic location in T. Nagar."
    },
    amenities_section: {
      heading: "Business Amenities",
      amenities: ["High-speed Elevators", "Central AC", "Power Backup", "24/7 Security", "Ample Parking", "Conference Rooms", "Cafeteria", "High-speed Internet"]
    },
    nearby_locations_section: {
      heading: "Business Hub Location",
      categories: [
        {
          name: "Business Centers",
          locations: [
            { name: "Pondy Bazaar", distance: "0.5 km" },
            { name: "Ranganathan Street", distance: "0.8 km" }
          ]
        },
        {
          name: "Transportation",
          locations: [
            { name: "T. Nagar Metro Station", distance: "1 km" },
            { name: "Chennai Central", distance: "8 km" }
          ]
        }
      ]
    },
    specifications_section: {
      heading: "Commercial Specifications",
      specifications: [
        {
          subheading: "Building Structure",
          content: "G+7 floors commercial complex with RCC frame structure. High-speed passenger elevators with power backup. Central air conditioning for all floors. False ceiling with modern lighting."
        },
        {
          subheading: "Office Interiors",
          content: "Premium vitrified tile flooring in office areas. Partition walls with sound insulation. Modern restroom facilities on each floor. Pantry area with water purifier provision."
        },
        {
          subheading: "Electrical Infrastructure",
          content: "100% power backup with diesel generator. Three-phase electrical supply for all units. LED lighting throughout the building. Fire alarm and safety systems on all floors."
        },
        {
          subheading: "Security & Access",
          content: "Multi-tier security system with access cards. CCTV surveillance in all common areas. Professional security personnel 24/7. Visitor management system at reception."
        },
        {
          subheading: "Parking & Utilities",
          content: "Adequate car and two-wheeler parking spaces. High-speed internet connectivity provision. Cafeteria and food court on ground floor. ATM and banking services available."
        }
      ]
    },
    floor_plans_section: {
      heading: "Office Layouts",
      floor_plans: [
        {
          name: "Small Office",
          area: "500 sq.ft",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
          download_url: "#"
        },
        {
          name: "Large Office",
          area: "5000 sq.ft",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
          download_url: "#"
        }
      ]
    },
    brochure_section: {
      heading: "Commercial Brochure",
      description: "Complete commercial space details and pricing",
      brochure_url: "#"
    },
    gallery_section: {
      heading: "Project Showcase",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
      ]
    }
  },
  {
    title: "Blue Bay Residences",
    subtitle: "Waterfront Apartments",
    client_name: "Blue Bay Constructions",
    status: ["Pre-Launch"],
    type: "Residential",
    overview: "Luxury waterfront apartments with stunning views and premium amenities.",
    objectives: "To offer a resort-like living experience with waterfront views and luxury amenities.",
    highlights: ["Waterfront Views", "Resort-style Amenities", "Private Beach Access", "Marina Club"],
    location: "ECR, Chennai",
    completion_date: "2026-03-31T00:00:00.000Z",
    unit_types: "2, 3 & 4 BHK",
    unit_sizes: "1400 - 3200 sq.ft",
    cta_title: "Experience Waterfront Living",
    cta_subtitle: "Early bird offers available",
    button_text: "Register Interest",
    button_link: "#enquiry",
    gallery_images: [
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"
    ],
    timeline_steps: [
      { title: "Pre-Launch", status: "current", description: "Project planning and approvals", duration: "3", unit: "months" },
      { title: "Construction Start", status: "upcoming", description: "Foundation and construction", duration: "24", unit: "months" },
      { title: "Completion", status: "upcoming", description: "Project completion and handover", duration: "3", unit: "months" }
    ],
    client_feedback: {
      name: "Vikram Singh",
      designation: "Investment Advisor",
      company: "Wealth Management",
      testimonial: "Unique waterfront project with excellent investment potential. Premium location and amenities.",
      rating: 5
    },
    hero_section: {
      heading: "Blue Bay Residences - Waterfront Luxury",
      description: "Exclusive waterfront living with panoramic sea views",
      main_image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=1200&h=800&fit=crop",
      location: "ECR, Chennai"
    },
    project_info_stats: [
      { label: "WATERFRONT LIVING", value: "Exclusive beachfront apartments" },
      { label: "1400 - 3200 SQ.FT", value: "Luxury apartment configurations" },
      { label: "PRIVATE BEACH", value: "Exclusive beach access for residents" },
      { label: "2, 3 & 4 BHK", value: "Multiple apartment options" }
    ],
    project_detail_section: {
      heading: "Waterfront Luxury",
      description: "Blue Bay Residences offers an unparalleled waterfront living experience with luxury apartments featuring panoramic sea views, private beach access, and resort-style amenities."
    },
    amenities_section: {
      heading: "Resort-Style Amenities",
      amenities: ["Private Beach Access", "Infinity Swimming Pool", "Marina Club", "Spa & Wellness Center", "Concierge Services", "Beach Volleyball Court", "Water Sports", "Fine Dining Restaurant"]
    },
    nearby_locations_section: {
      heading: "Coastal Connectivity",
      categories: [
        {
          name: "Attractions",
          locations: [
            { name: "Mahabalipuram", distance: "25 km" },
            { name: "Covelong Beach", distance: "5 km" }
          ]
        },
        {
          name: "City Access",
          locations: [
            { name: "OMR", distance: "2 km" },
            { name: "Chennai Airport", distance: "45 km" }
          ]
        }
      ]
    },
    specifications_section: {
      heading: "Luxury Specifications",
      specifications: [
        {
          subheading: "Premium Finishes",
          content: "Italian marble flooring in living areas. Imported tiles in bedrooms and bathrooms. Designer lighting fixtures throughout. Premium hardware for doors and windows."
        },
        {
          subheading: "Kitchen & Appliances",
          content: "Modular kitchen with granite/quartz countertops. Built-in wardrobes in all bedrooms. Premium CP fittings and sanitaryware. Provision for built-in appliances."
        },
        {
          subheading: "Smart Home Features",
          content: "Home automation system for lighting and AC control. Video door phone with smartphone connectivity. Smart locks for main doors. High-speed Wi-Fi throughout the complex."
        },
        {
          subheading: "Recreational Amenities",
          content: "Private beach access for residents. Swimming pool with infinity edge. Fully equipped gymnasium and spa. Clubhouse with recreational facilities."
        },
        {
          subheading: "Sustainability Features",
          content: "Solar panels for common area lighting. Rainwater harvesting and recycling system. Organic waste management plant. Electric vehicle charging stations."
        },
        {
          subheading: "Security & Services",
          content: "Gated community with 24/7 security. Concierge services for residents. Housekeeping and maintenance services. Marina services for boat owners."
        }
      ]
    },
    floor_plans_section: {
      heading: "Waterfront Apartments",
      floor_plans: [
        {
          name: "2 BHK Seaview",
          area: "1400 sq.ft",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
          download_url: "#"
        },
        {
          name: "4 BHK Penthouse",
          area: "3200 sq.ft",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
          download_url: "#"
        }
      ]
    },
    brochure_section: {
      heading: "Waterfront Living Guide",
      description: "Comprehensive guide to luxury waterfront living",
      brochure_url: "#"
    },
    gallery_section: {
      heading: "Waterfront Views",
      images: [
        "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"
      ]
    }
  }
];

export const insertSampleProjects = async () => {
  try {
    console.log('Inserting sample projects...');
    
    for (const project of sampleProjects) {
      const { data, error } = await supabase
        .from('projects')
        .insert(project)
        .select()
        .single();

      if (error) {
        console.error('Error inserting project:', project.title, error);
        throw error;
      } else {
        console.log('Successfully inserted project:', project.title);
      }
    }
    
    console.log('Sample data insertion completed successfully!');
  } catch (error) {
    console.error('Error in insertSampleProjects:', error);
    throw error;
  }
};
