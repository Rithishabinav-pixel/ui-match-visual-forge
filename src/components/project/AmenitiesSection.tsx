
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Amenity } from '@/types/project';

interface AmenitiesSectionProps {
  amenities: Amenity[];
}

export const AmenitiesSection = ({ amenities }: AmenitiesSectionProps) => {
  return (
    <section className="py-16 max-md:py-8">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-8 text-center max-md:text-3xl">
          Amenities & Features
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                {amenity.image && (
                  <div className="mb-4">
                    <img 
                      src={amenity.image} 
                      alt={amenity.name}
                      className="w-16 h-16 mx-auto object-cover rounded-lg"
                    />
                  </div>
                )}
                <h3 className="font-semibold text-[rgba(40,45,64,1)] mb-2">
                  {amenity.name}
                </h3>
                {amenity.description && (
                  <p className="text-sm text-gray-600">
                    {amenity.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
