
import React from 'react';
import { Amenity } from '@/types/project';

interface AmenitiesSectionProps {
  amenities: Amenity[];
}

export const AmenitiesSection = ({ amenities }: AmenitiesSectionProps) => {
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

  const displayAmenities = amenities && amenities.length > 0 ? amenities : defaultAmenities;

  return (
    <section className="py-16 bg-gradient-to-br from-[rgba(40,45,64,1)] to-[rgba(60,55,84,1)] max-md:py-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-white mb-6 max-md:text-3xl">
              Lorem ipsum dolor sit amet, <span className="text-[rgba(217,37,70,1)]">consectetur adipiscing elit</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
            </p>

            {/* Amenities Tags */}
            <div className="flex flex-wrap gap-3">
              {displayAmenities.map((amenity, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  {amenity.icon && (
                    <div className="w-4 h-4 text-[rgba(217,37,70,1)]">
                      {/* Icon placeholder - in a real implementation, you'd use actual icons */}
                      <div className="w-full h-full bg-[rgba(217,37,70,1)] rounded-full"></div>
                    </div>
                  )}
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Building Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(217,37,70,0.2)] to-transparent rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=500&fit=crop" 
                alt="Building"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
