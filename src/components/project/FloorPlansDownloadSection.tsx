import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { FloorPlan, FloorPlansSection } from '@/types/project';
interface FloorPlansDownloadSectionProps {
  floorPlans?: FloorPlan[];
  floorPlansSection?: FloorPlansSection;
}
export const FloorPlansDownloadSection = ({
  floorPlans = [],
  floorPlansSection
}: FloorPlansDownloadSectionProps) => {
  // Use dynamic content from floor_plans_section if available
  const heading = floorPlansSection?.heading || "Floor Plans";
  const description = floorPlansSection?.description || "Download detailed floor plans for your perfect home layout.";
  const plans = floorPlansSection?.floor_plans || floorPlans;
  if (plans.length === 0) {
    return null;
  }
  return <section className="py-16 max-md:py-8 bg-[#282d40]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 max-md:text-3xl text-slate-50">
            {heading}
          </h2>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed text-slate-200">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={plan.image} alt={plan.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-3">
                  {plan.title}
                </h3>
                {plan.description && <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {plan.description}
                  </p>}
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  {plan.area && <span className="font-medium">Area: {plan.area}</span>}
                  {plan.bedrooms && <span className="font-medium">Bedrooms: {plan.bedrooms}</span>}
                </div>
                {plan.brochure_url && <Button asChild className="w-full bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)]">
                    <a href={plan.brochure_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download Floor Plan
                    </a>
                  </Button>}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};