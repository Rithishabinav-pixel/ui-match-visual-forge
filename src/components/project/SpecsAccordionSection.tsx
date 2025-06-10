
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

  // Split specs into two columns
  const leftColumnSpecs = specs.filter((_, index) => index % 2 === 0);
  const rightColumnSpecs = specs.filter((_, index) => index % 2 === 1);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Lorem ipsum dolor sit amet, <span className="text-red-500 italic">consectetur adipiscing elit</span>
          </h2>
          <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {leftColumnSpecs.map((spec, index) => (
                <AccordionItem 
                  key={`left-${index}`} 
                  value={`left-item-${index}`}
                  className="border border-red-200 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left text-gray-800 font-medium hover:no-underline py-4">
                    {spec.subheading}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">
                      {spec.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {rightColumnSpecs.map((spec, index) => (
                <AccordionItem 
                  key={`right-${index}`} 
                  value={`right-item-${index}`}
                  className="border border-red-200 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left text-gray-800 font-medium hover:no-underline py-4">
                    {spec.subheading}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">
                      {spec.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
