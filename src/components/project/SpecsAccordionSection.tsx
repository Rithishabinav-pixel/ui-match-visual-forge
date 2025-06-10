
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ProjectSpecifications, SpecificationsSection as SpecificationsSectionType } from '@/types/project';

interface SpecsAccordionSectionProps {
  specifications?: ProjectSpecifications;
  specificationsSection?: SpecificationsSectionType;
}

export const SpecsAccordionSection = ({ 
  specifications, 
  specificationsSection 
}: SpecsAccordionSectionProps) => {
  // Use the new dynamic section if available
  const specs = specificationsSection?.specifications || [];
  const heading = specificationsSection?.heading || "Project Specifications";

  // If no dynamic specifications, don't render the section
  if (specs.length === 0) {
    return null;
  }

  return (
    <section className="py-16 max-md:py-8">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-8 text-center max-md:text-3xl">
          {heading}
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {specs.map((spec, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {spec.subheading}
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {spec.content}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
