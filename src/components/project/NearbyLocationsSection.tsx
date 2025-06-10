
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LocationDetails } from '@/types/project';

interface NearbyLocationsSectionProps {
  locationDetails?: LocationDetails;
}

interface LocationCategory {
  title: string;
  icon: string;
  items: Array<{
    name: string;
    distance: string;
  }>;
}

export const NearbyLocationsSection = ({ locationDetails }: NearbyLocationsSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Default data structure based on the screenshot
  const defaultCategories: LocationCategory[] = [
    {
      title: "Hospitals",
      icon: "🏥",
      items: [
        { name: "Apollo Medical Centre", distance: "3.1 km" },
        { name: "MGM Healthcare", distance: "4.2 km" },
        { name: "Voluntary Health Service", distance: "3.6 km" }
      ]
    },
    {
      title: "Schools & Colleges",
      icon: "🎓",
      items: [
        { name: "Anna University", distance: "1.3 km" },
        { name: "IIT", distance: "1.5 km" },
        { name: "A.M.M. School", distance: "3 km" }
      ]
    },
    {
      title: "IT Parks",
      icon: "🏢",
      items: [
        { name: "Tidel Park", distance: "5.6 km" },
        { name: "Ramanujam IT City", distance: "5.5 km" },
        { name: "Olympia Tech Park", distance: "4.4 km" }
      ]
    },
    {
      title: "Leisure",
      icon: "🎪",
      items: [
        { name: "ITC Grand Chola", distance: "2 km" },
        { name: "Phoenix Mall", distance: "5 km" },
        { name: "Elliott's Beach", distance: "6 km" },
        { name: "Guindy National Park", distance: "2 km" }
      ]
    }
  ];

  const categories = defaultCategories;
  const itemsPerSlide = 4;
  const maxSlides = Math.ceil(categories.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const getCurrentCategories = () => {
    const start = currentSlide * itemsPerSlide;
    return categories.slice(start, start + itemsPerSlide);
  };

  return (
    <section className="py-16 bg-gray-50 max-md:py-8">
      <div className="w-full max-w-[1530px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-6 max-md:text-3xl">
            Lorem ipsum dolor sit amet, <span className="text-[rgba(217,37,70,1)]">consectetur adipiscing elit</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getCurrentCategories().map((category, index) => (
              <Card key={index} className="border border-[rgba(217,37,70,1)] rounded-lg bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 flex items-center justify-center text-[rgba(217,37,70,1)]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <rect width="24" height="24" rx="4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[rgba(217,37,70,1)]">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="2" fill="#D92546"/>
                            <circle cx="8" cy="8" r="6" stroke="#D92546" strokeWidth="1"/>
                          </svg>
                        </div>
                        <div className="flex-1 text-sm">
                          <span className="text-gray-700 font-medium">{item.name}</span>
                          <span className="text-gray-500"> - {item.distance}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          {maxSlides > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="rounded-full w-10 h-10 border-gray-300 hover:bg-gray-50"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <span className="text-[rgba(217,37,70,1)] font-medium text-lg">
                {currentSlide + 1} / {maxSlides}
              </span>
              
              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="rounded-full w-10 h-10 border-gray-300 hover:bg-gray-50"
                disabled={currentSlide === maxSlides - 1}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
