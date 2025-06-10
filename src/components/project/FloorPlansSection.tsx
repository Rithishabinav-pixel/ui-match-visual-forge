
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FloorPlan } from '@/types/project';

interface FloorPlansSectionProps {
  floorPlans: FloorPlan[];
}

export const FloorPlansSection = ({ floorPlans }: FloorPlansSectionProps) => {
  return (
    <section className="py-16 max-md:py-8">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-8 text-center max-md:text-3xl">
          Floor Plans
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {floorPlans.map((plan, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={plan.image} 
                  alt={plan.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-2">
                  {plan.title}
                </h3>
                {plan.description && (
                  <p className="text-gray-600 mb-3">
                    {plan.description}
                  </p>
                )}
                <div className="flex justify-between text-sm text-gray-500">
                  {plan.area && <span>Area: {plan.area}</span>}
                  {plan.bedrooms && <span>Bedrooms: {plan.bedrooms}</span>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
