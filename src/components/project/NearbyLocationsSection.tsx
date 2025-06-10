
import React from 'react';
import { LocationDetails, NearbyLocationsSection as NearbyLocationsSectionType } from '@/types/project';

interface NearbyLocationsSectionProps {
  locationDetails?: LocationDetails;
  nearbyLocationsSection?: NearbyLocationsSectionType;
}

export const NearbyLocationsSection = ({ 
  locationDetails, 
  nearbyLocationsSection 
}: NearbyLocationsSectionProps) => {
  // Use the new dynamic section if available, otherwise fall back to legacy data
  const categories = nearbyLocationsSection?.categories || [];
  const heading = nearbyLocationsSection?.heading || "Nearby Locations";
  const description = nearbyLocationsSection?.description || "Explore what's around this project";

  // If no dynamic data, don't render the section
  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50 max-md:py-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-6 max-md:text-3xl">
            {heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {category.icon && (
                  <img 
                    src={category.icon} 
                    alt={category.heading}
                    className="w-10 h-10 mr-3"
                  />
                )}
                <h3 className="text-xl font-bold text-[rgba(40,45,64,1)]">
                  {category.heading}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.places.map((place, placeIndex) => (
                  <div key={placeIndex} className="flex justify-between items-center py-1">
                    <span className="text-gray-700">{place.name}</span>
                    <span className="text-[rgba(217,37,70,1)] font-medium">{place.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
