
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ProjectSpecifications } from '@/types/project';

interface SpecificationsSectionProps {
  specifications: ProjectSpecifications;
}

export const SpecificationsSection = ({ specifications }: SpecificationsSectionProps) => {
  const specs = [
    { label: 'Structure', value: specifications.structure },
    { label: 'Flooring', value: specifications.flooring },
    { label: 'Doors & Windows', value: specifications.doors_windows },
    { label: 'Kitchen', value: specifications.kitchen },
    { label: 'Bathroom', value: specifications.bathroom },
    { label: 'Electrical', value: specifications.electrical },
    { label: 'Safety', value: specifications.safety },
  ].filter(spec => spec.value);

  if (specs.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50 max-md:py-8">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-8 text-center max-md:text-3xl">
          Specifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map((spec, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[rgba(40,45,64,1)] mb-3">
                  {spec.label}
                </h3>
                <p className="text-gray-700">
                  {spec.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
