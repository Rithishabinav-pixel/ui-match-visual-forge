
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { LocationDetails } from '@/types/project';

interface LocationSectionProps {
  locationDetails: LocationDetails;
}

export const LocationSection = ({ locationDetails }: LocationSectionProps) => {
  return (
    <section className="py-16 max-md:py-8">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-8 text-center max-md:text-3xl">
          Location & Connectivity
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {locationDetails.address && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[rgba(217,37,70,1)]" />
                  Address
                </h3>
                <p className="text-gray-700">{locationDetails.address}</p>
              </div>
            )}
            
            {locationDetails.nearby_landmarks && locationDetails.nearby_landmarks.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-3">
                  Nearby Landmarks
                </h3>
                <ul className="space-y-2">
                  {locationDetails.nearby_landmarks.map((landmark, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[rgba(217,37,70,1)] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{landmark}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {locationDetails.connectivity && locationDetails.connectivity.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-3">
                  Connectivity
                </h3>
                <ul className="space-y-2">
                  {locationDetails.connectivity.map((connection, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[rgba(217,37,70,1)] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{connection}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div>
            <Card className="h-64 lg:h-full">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Map Integration Placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
