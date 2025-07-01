
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
  const heading = specificationsSection?.heading || "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  const description = specificationsSection?.description || "Blending durability with design, ensuring every element from foundation to finish meets the highest standards. With quality materials, expert craftsmanship, and thoughtful detailing, we create spaces that are as resilient as they are refined. Each feature is carefully selected to offer long-lasting comfort, aesthetic value, and a living experience that feels effortlessly elevated.";

  // If no dynamic specifications, don't render the section
  if (specs.length === 0) {
    return null;
  }

  // Split specs into two columns
  const leftColumnSpecs = specs.filter((_, index) => index % 2 === 0);
  const rightColumnSpecs = specs.filter((_, index) => index % 2 === 1);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1270px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {heading.includes('consectetur adipiscing elit') ? (
              <>
                {heading.split('consectetur adipiscing elit')[0]}
                <span className="text-red-500 italic">consectetur adipiscing elit</span>
                {heading.split('consectetur adipiscing elit')[1]}
              </>
            ) : (
              <span className="text-red-500 italic">{heading}</span>
            )}
          </h2>
          <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {description}
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
