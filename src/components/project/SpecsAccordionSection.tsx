
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ProjectSpecifications, SpecificationsSection as SpecificationsSectionType } from '@/types/project';

interface SpecsAccordionSectionProps {
  specifications?: ProjectSpecifications;
  specificationsSection?: SpecificationsSectionType;
}

export const SpecsAccordionSection = ({ 
  specifications, 
  specificationsSection 
}: SpecsAccordionSectionProps) => {
  // Default specifications for JKB Grace
  const defaultSpecs = [
    {
      subheading: "Structure",
      content: "RCC Framed Structure with earthquake resistant design ensuring safety and durability for generations"
    },
    {
      subheading: "Flooring",
      content: "Premium vitrified tiles in living areas and bedrooms, anti-skid ceramic tiles in bathrooms and kitchen"
    },
    {
      subheading: "Doors & Windows",
      content: "Teak wood main door with safety locks, UPVC windows with mosquito mesh for optimal ventilation"
    },
    {
      subheading: "Kitchen",
      content: "Granite platform with stainless steel sink, provision for chimney and built-in storage solutions"
    },
    {
      subheading: "Sanitary Fittings",
      content: "Jaguar or equivalent brand CP fittings, modern sanitary ware with water-efficient fixtures"
    },
    {
      subheading: "Electrical",
      content: "Modular switches and sockets, copper wiring throughout, adequate power points in all rooms"
    },
    {
      subheading: "Paint & Finishes",
      content: "Premium emulsion paint for interiors, weather-resistant exterior paint for long-lasting finish"
    },
    {
      subheading: "Common Areas",
      content: "Landscaped entrance lobby, power backup for common areas, well-designed staircase with proper lighting"
    }
  ];

  const specs = specificationsSection?.specifications || defaultSpecs;
  const heading = specificationsSection?.heading || "Technical Specifications";

  if (specs.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50 max-md:py-8">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-8 text-center max-md:text-3xl">
          {heading}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          JKB Grace is built with premium materials and superior construction standards. Every detail is carefully planned to ensure quality, comfort, and long-term value for our residents.
        </p>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {specs.map((spec, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-[rgba(40,45,64,1)] hover:no-underline py-4">
                {spec.subheading}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 leading-relaxed">
                {spec.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
