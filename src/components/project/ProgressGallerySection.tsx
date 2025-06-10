
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ProgressImage } from '@/types/project';

interface ProgressGallerySectionProps {
  progressImages: ProgressImage[];
}

export const ProgressGallerySection = ({ progressImages }: ProgressGallerySectionProps) => {
  return (
    <section className="py-16 bg-gray-50 max-md:py-8">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-8 text-center max-md:text-3xl">
          Construction Progress
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {progressImages.map((progress, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={progress.image} 
                  alt={progress.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[rgba(40,45,64,1)] mb-2">
                  {progress.title}
                </h3>
                {progress.date && (
                  <p className="text-sm text-[rgba(217,37,70,1)] mb-2">
                    {progress.date}
                  </p>
                )}
                {progress.description && (
                  <p className="text-gray-600">
                    {progress.description}
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
