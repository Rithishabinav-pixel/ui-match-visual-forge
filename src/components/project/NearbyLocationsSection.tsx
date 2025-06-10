
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LocationDetails, NearbyLocationsSection as NearbyLocationsSectionType } from '@/types/project';

interface NearbyLocationsSectionProps {
  locationDetails?: LocationDetails;
  nearbyLocationsSection?: NearbyLocationsSectionType;
}

// Default icons mapping for categories
const getCategoryIcon = (heading: string) => {
  const iconMap: { [key: string]: string } = {
    'Hospitals': '🏥',
    'Schools & Colleges': '🎓', 
    'IT Parks': '🏢',
    'Leisure': '🎪'
  };
  return iconMap[heading] || '📍';
};

export const NearbyLocationsSection = ({ 
  locationDetails, 
  nearbyLocationsSection 
}: NearbyLocationsSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Use the new dynamic section if available, otherwise fall back to legacy data
  const categories = nearbyLocationsSection?.categories || [];
  const heading = nearbyLocationsSection?.heading || "Nearby Locations";
  const description = nearbyLocationsSection?.description || "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per.";

  // If no dynamic data, don't render the section
  if (categories.length === 0) {
    return null;
  }

  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCategories = categories.slice(startIndex, startIndex + itemsPerPage);

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Lorem ipsum dolor sit amet, <span className="text-red-500 italic">consectetur adipiscing elit</span>
          </h2>
          <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg border border-red-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <span className="text-2xl">{getCategoryIcon(category.heading)}</span>
                </div>
                <h3 className="text-lg font-semibold text-red-500">
                  {category.heading}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.places.map((place, placeIndex) => (
                  <div key={placeIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rotate-45 mr-3 flex-shrink-0"></div>
                    <div className="flex-1 flex justify-between items-center">
                      <span className="text-gray-700 text-sm">{place.name}</span>
                      <span className="text-red-500 font-medium text-sm ml-2">{place.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-4">
            <button 
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="p-2 rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <span className="text-sm text-gray-600">
              <span className="text-red-500 font-medium">{currentPage}</span> / {totalPages}
            </span>
            
            <button 
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
