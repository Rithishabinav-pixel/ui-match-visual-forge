
import React from 'react';
import { Amenity, AmenitiesSection as AmenitiesSectionType } from '@/types/project';

interface AmenitiesSectionProps {
  amenities: Amenity[];
  amenitiesSection?: AmenitiesSectionType;
}

export const AmenitiesSection = ({ amenities, amenitiesSection }: AmenitiesSectionProps) => {
  // Default amenities based on the screenshot
  const defaultAmenities: Amenity[] = [
    { name: "Video Door Phone", icon: "video-door-phone" },
    { name: "Security Room", icon: "security-room" },
    { name: "Rain water", icon: "rain-water" },
    { name: "Automatic Lift", icon: "automatic-lift" },
    { name: "Power Backup", icon: "power-backup" },
    { name: "CCTV Camera", icon: "cctv" },
    { name: "Genset", icon: "genset" },
    { name: "100 % Vastu Compliant", icon: "100-percent-vasti-compliant" },
    { name: "RO Plant", icon: "ro-plant" },
    { name: "Water-Automatic Sensor System", icon: "water-automatic-sensor-system" },
    { name: "Sitting place in Terrace", icon: "sitting-place-in-terrace" },
    { name: "Covered Car Parking", icon: "covered-car-parking" },
    { name: "Electrical Vehicle point", icon: "electrical-vehicle-point" },
    { name: "Heat Resistant Tiles in Terrace", icon: "heat-resistant-tiles-in-terrace" }
  ];

  // Use dynamic content from amenities_section if available, otherwise fall back to defaults
  const sectionHeading = amenitiesSection?.heading || "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  const sectionDescription = amenitiesSection?.description || "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.";
  
  // Use amenities from amenities_section if available, otherwise use the passed amenities or defaults
  let displayAmenities: Amenity[] = [];
  if (amenitiesSection?.amenities && amenitiesSection.amenities.length > 0) {
    displayAmenities = amenitiesSection.amenities.map(name => ({ name }));
  } else if (amenities && amenities.length > 0) {
    displayAmenities = amenities;
  } else {
    displayAmenities = defaultAmenities;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-[rgba(40,45,64,1)] to-[rgba(60,55,84,1)] max-md:py-8">
      <div className="w-full max-w-[1530px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 max-md:text-3xl leading-tight">
              {sectionHeading.includes('consectetur adipiscing elit') ? (
                <>
                  {sectionHeading.split('consectetur adipiscing elit')[0]}
                  <em className="text-[rgba(217,37,70,1)] not-italic font-bold">{' consectetur adipiscing elit'}</em>
                  {sectionHeading.split('consectetur adipiscing elit')[1]}
                </>
              ) : (
                <>
                  <span className="text-white font-bold">Lorem ipsum dolor sit amet, </span>
                  <em className="text-[rgba(217,37,70,1)] not-italic font-bold">consectetur adipiscing elit</em>
                </>
              )}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {sectionDescription}
            </p>
          </div>

          {/* Right Side - Amenities Tags */}
          <div>
            <div className="flex flex-wrap gap-3">
              {displayAmenities.map((amenity, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center bg-white rounded-full px-4 py-2 text-[rgba(217,37,70,1)] text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
