
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FloorPlan } from '@/types/project';

interface FloorPlansDownloadSectionProps {
  floorPlans?: FloorPlan[];
}

export const FloorPlansDownloadSection = ({ floorPlans }: FloorPlansDownloadSectionProps) => {
  // Default floor plans based on screenshot
  const defaultPlans: FloorPlan[] = [
    {
      title: "1st Floor - 2BHK (West)",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
      description: "Spacious 2BHK layout with western exposure",
      area: "1200 sq.ft",
      bedrooms: "2"
    },
    {
      title: "1st Floor - 2BHK (West)",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
      description: "Spacious 2BHK layout with western exposure",
      area: "1200 sq.ft",
      bedrooms: "2"
    },
    {
      title: "1st Floor - 2BHK (West)",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
      description: "Spacious 2BHK layout with western exposure",
      area: "1200 sq.ft",
      bedrooms: "2"
    }
  ];

  const plans = floorPlans && floorPlans.length > 0 ? floorPlans : defaultPlans;

  const handleDownload = (plan: FloorPlan) => {
    // In a real implementation, this would download the actual floor plan file
    console.log('Downloading floor plan:', plan.title);
    // For now, we'll just open the image in a new tab
    window.open(plan.image, '_blank');
  };

  return (
    <section className="py-16 bg-[rgba(40,45,64,1)] max-md:py-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6 max-md:text-3xl">
            Lorem ipsum dolor sit amet, <span className="text-[rgba(217,37,70,1)]">consectetur adipiscing elit</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} className="bg-white rounded-xl overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={plan.image} 
                  alt={plan.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[rgba(40,45,64,1)] mb-2">
                    {plan.title}
                  </h3>
                  <Button
                    onClick={() => handleDownload(plan)}
                    size="icon"
                    className="bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] rounded-full"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
