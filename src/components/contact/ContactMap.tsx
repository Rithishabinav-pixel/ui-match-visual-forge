
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactMap = () => {
  return (
    <section className="py-16 bg-gray-50 max-md:py-8">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-[rgba(40,45,64,1)] mb-8 text-center max-md:text-2xl">Find Our Office</h2>
        <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <div className="text-center text-white">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-xl font-semibold">Interactive Map</p>
              <p className="text-sm opacity-90">123 Construction Avenue, T Nagar, Chennai</p>
              <p className="text-xs mt-2 opacity-75">
                In a real implementation, this would be an embedded Google Map
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Button 
            variant="outline" 
            className="border-[rgba(217,37,70,1)] text-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,1)] hover:text-white"
          >
            Open in Google Maps
            <MapPin className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
