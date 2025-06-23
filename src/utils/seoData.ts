
export const seoPages = {
  home: {
    title: "JKB Housing - Premium CMDA & RERA Approved Flats in Chennai",
    description: "Leading Chennai builder offering 2BHK & 3BHK CMDA & RERA approved flats. Quality construction, on-time delivery, prime locations. 15+ years of trusted excellence.",
    keywords: "JKB Housing Chennai, CMDA approved flats Chennai, RERA approved apartments, 2BHK flats Chennai, 3BHK apartments Chennai, builders in Chennai, flats for sale Chennai, real estate Chennai, premium apartments Chennai, quality construction Chennai",
    canonical: "/",
  },
  about: {
    title: "About JKB Housing - 15+ Years of Excellence in Chennai Real Estate",
    description: "Discover JKB Housing's journey as Chennai's trusted builder. CMDA & RERA approved projects, quality construction standards, on-time delivery. Your dream home awaits.",
    keywords: "about JKB Housing, Chennai builders, real estate developer Chennai, CMDA RERA approved builder, quality construction company, trusted builder Chennai, residential projects Chennai",
    canonical: "/about",
  },
  projects: {
    title: "Projects - Premium CMDA & RERA Approved Apartments | JKB Housing",
    description: "Explore JKB Housing's portfolio of CMDA & RERA approved flats and apartments across prime Chennai locations. 2BHK, 3BHK luxury homes with modern amenities.",
    keywords: "JKB Housing projects, CMDA approved flats Chennai, RERA approved apartments, 2BHK 3BHK flats Chennai, luxury apartments Chennai, premium residential projects, flats Valasaravakkam, apartments Anna Nagar",
    canonical: "/projects",
  },
  contact: {
    title: "Contact JKB Housing - Get Your Dream Home in Chennai Today",
    description: "Contact JKB Housing for CMDA & RERA approved flats in Chennai. Call 97103 97104 for site visits, project consultations. Prime locations, quality construction guaranteed.",
    keywords: "contact JKB Housing, Chennai flats inquiry, CMDA RERA approved flats contact, site visit booking Chennai, real estate consultation Chennai, JKB Housing office Chennai",
    canonical: "/contact",
  },
  jkbCare: {
    title: "JKB Care - Community Development & Social Responsibility Chennai",
    description: "JKB Care represents our commitment to Chennai's community development through healthcare, education, and infrastructure initiatives. Building homes, nurturing communities.",
    keywords: "JKB Care, community development Chennai, social responsibility builder, healthcare initiatives Chennai, education support Chennai, infrastructure development",
    canonical: "/jkb-care",
  },
  jointVenture: {
    title: "Joint Ventures - Strategic Real Estate Partnerships | JKB Housing",
    description: "Partner with JKB Housing for strategic real estate development in Chennai. CMDA & RERA compliant joint ventures, land development opportunities, investment partnerships.",
    keywords: "JKB Housing joint venture, real estate partnerships Chennai, land development Chennai, investment opportunities Chennai, strategic alliances builder, CMDA RERA joint ventures",
    canonical: "/joint-venture",
  }
};

// Location-specific keywords for Chennai areas
export const chennaiBrandingKeywords = {
  prime_locations: [
    "flats in Valasaravakkam",
    "apartments in North Usman Road", 
    "property in Chellammal Street",
    "builders in Ashok Nagar",
    "housing in West Mambalam",
    "homes for sale Saligramam",
    "real estate in Anna Nagar",
    "flats for sale in Adyar",
    "apartments in Nungambakkam",
    "property in Besant Nagar",
    "builders in T. Nagar",
    "housing in Mylapore",
    "homes for sale in Tambaram",
    "real estate in OMR",
    "flats in Porur",
    "apartments in Velachery",
    "property in Madhavaram",
    "builders in Thoraipakkam",
    "housing in Tiruvanmiyur",
    "homes for sale in Kelambakkam"
  ],
  property_types: [
    "2BHK flats Chennai",
    "3BHK apartments Chennai", 
    "luxury apartments Chennai",
    "CMDA approved flats",
    "RERA approved apartments",
    "premium residential projects"
  ],
  brand_values: [
    "quality construction Chennai",
    "on-time delivery builder",
    "customer-first approach",
    "legal transparency",
    "modern amenities",
    "trusted builder Chennai"
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "JKB Housing",
  "url": "https://jkbhousing.com",
  "logo": "https://jkbhousing.com/lovable-uploads/cf2c111e-2a85-4fba-af35-2d35a8e86479.png",
  "description": "Leading Chennai-based builder specializing in CMDA & RERA approved flats and apartments. Quality construction, on-time delivery, customer-first approach for 15+ years.",
  "foundingDate": "2008",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Chennai",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600001",
    "addressCountry": "India"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-97103-97104",
    "contactType": "customer service",
    "availableLanguage": ["English", "Tamil"],
    "serviceArea": "Chennai"
  },
  "sameAs": [
    "https://facebook.com/jkbhousing",
    "https://instagram.com/jkbhousing",
    "https://linkedin.com/company/jkbhousing"
  ],
  "areaServed": {
    "@type": "City",
    "name": "Chennai",
    "containedInPlace": {
      "@type": "State",
      "name": "Tamil Nadu"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Real Estate Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "2BHK Flats",
          "description": "CMDA & RERA approved 2BHK flats in prime Chennai locations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "3BHK Apartments",
          "description": "Luxury 3BHK apartments with modern amenities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Joint Ventures",
          "description": "Strategic real estate development partnerships"
        }
      }
    ]
  },
  "knowsAbout": [
    "Real Estate Development",
    "CMDA Approval Process",
    "RERA Compliance",
    "Chennai Property Market",
    "Residential Construction",
    "Legal Documentation"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "JKB Housing",
  "url": "https://jkbhousing.com",
  "description": "Chennai's trusted builder offering CMDA & RERA approved flats and apartments with quality construction and on-time delivery",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://jkbhousing.com/projects?search={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "JKB Housing",
    "logo": {
      "@type": "ImageObject",
      "url": "https://jkbhousing.com/lovable-uploads/cf2c111e-2a85-4fba-af35-2d35a8e86479.png"
    }
  }
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const webPageSchema = (name: string, description: string, url: string, pageType: string = "WebPage") => ({
  "@context": "https://schema.org",
  "@type": pageType,
  "name": name,
  "description": description,
  "url": url,
  "isPartOf": {
    "@type": "WebSite",
    "name": "JKB Housing",
    "url": "https://jkbhousing.com"
  },
  "about": {
    "@type": "Organization",
    "name": "JKB Housing"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://jkbhousing.com/"
      }
    ]
  }
});

// Real Estate specific schemas
export const realEstateListingSchema = (project: any) => ({
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": project.title,
  "description": project.overview,
  "url": `https://jkbhousing.com/project/${project.id}`,
  "image": project.gallery_images?.[0] || "https://jkbhousing.com/lovable-uploads/cf2c111e-2a85-4fba-af35-2d35a8e86479.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": project.location?.split(',')[0] || "Chennai",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "India"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "INR"
    }
  },
  "provider": {
    "@type": "Organization",
    "name": "JKB Housing",
    "url": "https://jkbhousing.com"
  }
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JKB Housing",
  "image": "https://jkbhousing.com/lovable-uploads/cf2c111e-2a85-4fba-af35-2d35a8e86479.png",
  "url": "https://jkbhousing.com",
  "telephone": "+91-97103-97104",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Chennai",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600001",
    "addressCountry": "India"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.0827,
    "longitude": 80.2707
  },
  "openingHours": "Mo-Sa 09:00-18:00",
  "priceRange": "₹₹₹",
  "servesCuisine": "Real Estate Services",
  "areaServed": "Chennai"
};
