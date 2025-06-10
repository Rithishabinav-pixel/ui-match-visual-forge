
import React, { useState } from 'react';
import { GallerySection as GallerySectionType } from '@/types/project';

interface GallerySectionProps {
  galleries: GallerySectionType[];
}

export const GallerySection = ({ galleries }: GallerySectionProps) => {
  const [selectedGallery, setSelectedGallery] = useState(0);

  return (
    <section className="py-16 bg-gray-50 max-md:py-8">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-8 text-center max-md:text-3xl">
          Project Gallery
        </h2>
        
        {galleries.length > 1 && (
          <div className="flex justify-center mb-8">
            <div className="flex gap-2 bg-white rounded-lg p-1">
              {galleries.map((gallery, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedGallery(index)}
                  className={`px-4 py-2 rounded-md transition-all ${
                    selectedGallery === index 
                      ? 'bg-[rgba(217,37,70,1)] text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {gallery.title}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleries[selectedGallery]?.images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
