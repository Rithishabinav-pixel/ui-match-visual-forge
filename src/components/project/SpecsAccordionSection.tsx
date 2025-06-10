
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ProjectSpecifications } from '@/types/project';

interface SpecsAccordionSectionProps {
  specifications?: ProjectSpecifications;
}

export const SpecsAccordionSection = ({ specifications }: SpecsAccordionSectionProps) => {
  const [openSpec, setOpenSpec] = useState<string | null>('structure');

  // Default specifications based on the screenshot
  const defaultSpecs = {
    structure: "The Design Of RCC Structure Shall Be Designed to withstand Seismic of Zone - III By The Reputed Structural Consultant.",
    superstructure: "High-quality superstructure with modern engineering standards and earthquake-resistant design.",
    joineries_doors: "Premium quality doors with modern hardware and finishes.",
    joineries_windows: "Energy-efficient windows with proper ventilation and security features.",
    flooring: "Premium flooring materials with anti-skid properties and easy maintenance.",
    sanitary_fittings: "High-quality sanitary fittings from reputed brands with water-saving features.",
    generator: "Backup power generator for common areas and emergency lighting.",
    electrical: "Complete electrical installation with modern safety standards and energy-efficient fixtures."
  };

  const specsData = specifications || defaultSpecs;

  const specItems = [
    { key: 'structure', label: 'Structure' },
    { key: 'superstructure', label: 'Superstructure' },
    { key: 'joineries_doors', label: 'Joineries Doors' },
    { key: 'joineries_windows', label: 'Joineries Windows' },
    { key: 'flooring', label: 'Flooring' },
    { key: 'sanitary_fittings', label: 'Sanitary Fittings' },
    { key: 'generator', label: 'Generator' },
    { key: 'electrical', label: 'Electrical' }
  ];

  return (
    <section className="py-16 bg-white max-md:py-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-6 max-md:text-3xl">
            Lorem ipsum dolor sit amet, <span className="text-[rgba(217,37,70,1)]">consectetur adipiscing elit</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {specItems.slice(0, 4).map((item) => (
              <Card key={item.key} className="border border-gray-200">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenSpec(openSpec === item.key ? null : item.key)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-[rgba(40,45,64,1)]">
                      {item.label}
                    </h3>
                    {openSpec === item.key ? (
                      <ChevronUp className="w-5 h-5 text-[rgba(217,37,70,1)] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[rgba(217,37,70,1)] flex-shrink-0" />
                    )}
                  </button>
                  {openSpec === item.key && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {specsData[item.key as keyof ProjectSpecifications] || 'Specification details will be updated soon.'}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {specItems.slice(4).map((item) => (
              <Card key={item.key} className="border border-gray-200">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenSpec(openSpec === item.key ? null : item.key)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-[rgba(40,45,64,1)]">
                      {item.label}
                    </h3>
                    {openSpec === item.key ? (
                      <ChevronUp className="w-5 h-5 text-[rgba(217,37,70,1)] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[rgba(217,37,70,1)] flex-shrink-0" />
                    )}
                  </button>
                  {openSpec === item.key && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {specsData[item.key as keyof ProjectSpecifications] || 'Specification details will be updated soon.'}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
