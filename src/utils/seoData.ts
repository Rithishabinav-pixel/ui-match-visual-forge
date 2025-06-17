
export const seoPages = {
  home: {
    title: "JKB Housing - Premium Real Estate & Construction in Chennai",
    description: "Leading construction company in Chennai offering premium residential & commercial projects. 160+ completed projects, 600+ happy families. Quality construction guaranteed.",
    keywords: "JKB Housing, construction company Chennai, real estate Chennai, residential projects, commercial construction, premium housing",
    canonical: "/",
  },
  about: {
    title: "About JKB Housing - 15+ Years of Excellence in Construction",
    description: "Discover JKB Housing's journey of 15+ years in construction. Learn about our vision, mission, and commitment to delivering quality homes and commercial spaces.",
    keywords: "about JKB Housing, construction company history, real estate developer Chennai, building company",
    canonical: "/about",
  },
  projects: {
    title: "Projects - JKB Housing Portfolio | Residential & Commercial",
    description: "Explore JKB Housing's diverse portfolio of 160+ completed projects including residential, commercial, and mixed-use developments across Chennai.",
    keywords: "JKB Housing projects, residential projects Chennai, commercial construction, completed projects",
    canonical: "/projects",
  },
  contact: {
    title: "Contact JKB Housing - Get In Touch for Your Dream Project",
    description: "Contact JKB Housing for premium construction services. Call 97103 97104 or visit our Chennai office. Expert consultation for residential & commercial projects.",
    keywords: "contact JKB Housing, construction consultation Chennai, real estate inquiry, building contractor contact",
    canonical: "/contact",
  },
  jkbCare: {
    title: "JKB Care - Community Development & Social Responsibility",
    description: "JKB Care represents our commitment to community development through healthcare, education, and infrastructure initiatives. 50+ schools supported, 1000+ families benefited.",
    keywords: "JKB Care, community development, social responsibility, healthcare initiatives, education support",
    canonical: "/jkb-care",
  },
  jointVenture: {
    title: "Joint Ventures - Strategic Partnerships with JKB Housing",
    description: "Partner with JKB Housing for strategic real estate development opportunities. Explore land partnerships, investment opportunities, and strategic alliances.",
    keywords: "JKB Housing joint venture, real estate partnerships, land development, investment opportunities",
    canonical: "/joint-venture",
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "JKB Housing",
  "url": "https://jkbhousing.com",
  "logo": "https://jkbhousing.com/lovable-uploads/cf2c111e-2a85-4fba-af35-2d35a8e86479.png",
  "description": "Leading construction company in Chennai offering premium residential and commercial projects with 15+ years of experience.",
  "foundingDate": "2008",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Chennai",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "India"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-97103-97104",
    "contactType": "customer service",
    "availableLanguage": ["English", "Tamil"]
  },
  "sameAs": [
    "https://facebook.com/jkbhousing",
    "https://instagram.com/jkbhousing",
    "https://linkedin.com/company/jkbhousing"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Construction",
          "description": "Premium residential construction services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Construction",
          "description": "Commercial building construction services"
        }
      }
    ]
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "JKB Housing",
  "url": "https://jkbhousing.com",
  "description": "Leading construction company in Chennai offering premium residential and commercial projects",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://jkbhousing.com/projects?search={search_term_string}",
    "query-input": "required name=search_term_string"
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

export const webPageSchema = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
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
  }
});
