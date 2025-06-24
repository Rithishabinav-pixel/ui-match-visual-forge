import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { FloorPlan } from '@/types/project';
interface FloorPlansDownloadSectionProps {
  floorPlans?: FloorPlan[];
}
export const FloorPlansDownloadSection = ({
  floorPlans
}: FloorPlansDownloadSectionProps) => {
  // Default floor plans based on screenshot
  const defaultPlans: FloorPlan[] = [{
    title: "1st Floor - 2BHK (West)",
    image: "/lovable-uploads/3cbfa16f-b4dc-4ac3-86c3-f92f189294c1.png",
    description: "Spacious 2BHK layout with western exposure",
    area: "1200 sq.ft",
    bedrooms: "2"
  }, {
    title: "1st Floor - 2BHK (West)",
    image: "/lovable-uploads/3cbfa16f-b4dc-4ac3-86c3-f92f189294c1.png",
    description: "Spacious 2BHK layout with western exposure",
    area: "1200 sq.ft",
    bedrooms: "2"
  }, {
    title: "1st Floor - 2BHK (West)",
    image: "/lovable-uploads/3cbfa16f-b4dc-4ac3-86c3-f92f189294c1.png",
    description: "Spacious 2BHK layout with western exposure",
    area: "1200 sq.ft",
    bedrooms: "2"
  }];
  const plans = floorPlans && floorPlans.length > 0 ? floorPlans : defaultPlans;
  const handleDownload = (plan: FloorPlan) => {
    // In a real implementation, this would download the actual floor plan file
    console.log('Downloading floor plan:', plan.title);
    // For now, we'll just open the image in a new tab
    window.open(plan.image, '_blank');
  };
  return <section className="py-16 bg-[#2B3544] max-md:py-8">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6 max-md:text-3xl">
            Lorem ipsum dolor sit amet, <span className="text-[rgba(217,37,70,1)]">consectetur adipiscing elit</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="flex justify-center gap-8 max-lg:flex-col max-lg:items-center max-lg:gap-6">
          {plans.slice(0, 3).map((plan, index) => <div key={index} className="flex-shrink-0">
              <Card className="bg-white rounded-2xl overflow-hidden w-[280px] max-md:w-[320px]">
                <CardContent className="p-6 px-0 py-0">
                  {/* Floor Plan Image Container */}
                  <div className="aspect-square bg-white rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    <img src={plan.image} alt={plan.title} className="max-w-full max-h-full object-contain" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#2B3544] text-center mb-4 leading-tight">
                    {plan.title}
                  </h3>
                  
                  {/* Download Icon */}
                  <div className="flex justify-center">
                    <button onClick={() => handleDownload(plan)} className="text-white hover:text-gray-300 transition-colors duration-200" aria-label={`Download ${plan.title}`}>
                      <ArrowDown className="w-6 h-6" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>)}
        </div>
      </div>
    </section>;
};