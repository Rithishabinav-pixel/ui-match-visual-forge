
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
      } else {
        console.log('Successfully inserted project:', project.title);
      }
    }
    
    console.log('Sample data insertion completed!');
  } catch (error) {
    console.error('Error in insertSampleProjects:', error);
  }
};
