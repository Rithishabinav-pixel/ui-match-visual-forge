
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LocationDetails, NearbyLocationsSection as NearbyLocationsSectionType } from '@/types/project';

interface NearbyLocationsSectionProps {
  locationDetails?: LocationDetails;
  nearbyLocationsSection?: NearbyLocationsSectionType;
}

export const NearbyLocationsSection = ({ 
  locationDetails, 
  nearbyLocationsSection 
}: NearbyLocationsSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Use the new dynamic section if available, otherwise create default categories
  const defaultCategories = [
    {
      heading: "Hospitals",
      icon: undefined,
      places: [
        { name: "Vijaya Hospital", distance: "2.3 km" },
        { name: "SRM Clinic", distance: "1.4 km" },
        { name: "Apollo Clinic", distance: "3.1 km" },
        { name: "Fortis Malar", distance: "4.2 km" }
      ]
    },
    {
      heading: "Schools & Colleges",
      icon: undefined,
      places: [
        { name: "Kendriya Vidyalaya", distance: "3.0 km" },
        { name: "AVM Matric School", distance: "2.1 km" },
        { name: "DAV School", distance: "2.8 km" },
        { name: "Anna University", distance: "5.5 km" }
      ]
    },
    {
      heading: "IT Parks",
      icon: undefined,
      places: [
        { name: "Olympia Tech Park", distance: "5.1 km" },
        { name: "DLF IT Park", distance: "6.2 km" },
        { name: "Tidel Park", distance: "8.3 km" },
        { name: "L&T Tech Park", distance: "7.1 km" }
      ]
    },
    {
      heading: "Leisure",
      icon: undefined,
      places: [
        { name: "Forum Vijaya Mall", distance: "3.3 km" },
        { name: "AVM Studios", distance: "2.8 km" },
        { name: "Phoenix MarketCity", distance: "4.7 km" },
        { name: "Express Avenue", distance: "6.5 km" }
      ]
    }
  ];

  const categories = nearbyLocationsSection?.categories || defaultCategories;
  const heading = nearbyLocationsSection?.heading || "Connectivity & Convenience";
  const description = nearbyLocationsSection?.description || "JKB Grace is strategically located in Virugambakkam, offering excellent connectivity to Chennai's major business districts, educational institutions, healthcare facilities, and entertainment hubs. Enjoy the perfect balance of urban convenience and peaceful residential living.";

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
      <div className="max-w-[1530px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Prime Location with <span className="text-red-500 italic">Unmatched Connectivity</span>
          </h2>
          <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg border border-red-200 p-6">
              {/* Icon and Title - Left aligned and stacked vertically */}
              <div className="mb-6">
                {/* Icon */}
                <div className="mb-3">
                  {category.icon ? (
                    <img 
                      src={category.icon} 
                      alt={category.heading}
                      className="w-10 h-10 object-contain"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-500 text-xl">📍</span>
                    </div>
                  )}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-red-500">
                  {category.heading}
                </h3>
              </div>
              
              {/* Places List */}
              <div className="space-y-3">
                {(category.places || []).map((place, placeIndex) => (
                  <div key={placeIndex} className="flex items-center">
                    {/* Custom list icon */}
                    <div className="mr-3 flex-shrink-0">
                      <img 
                        src="https://pixeldigitalagency.com/clients/smilex-ev/wp-content/uploads/2025/06/Icon.png"
                        alt="location marker"
                        className="w-4 h-4 object-contain"
                      />
                    </div>
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
