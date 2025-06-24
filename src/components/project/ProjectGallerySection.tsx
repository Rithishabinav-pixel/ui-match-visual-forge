import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface ProjectGallerySectionProps {
  galleryImages: string[];
  projectTitle: string;
}
export const ProjectGallerySection = ({
  galleryImages,
  projectTitle
}: ProjectGallerySectionProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  // Default images if none provided
  const defaultImages = ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop"];
  const images = galleryImages && galleryImages.length > 0 ? galleryImages : defaultImages;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const getCurrentPageImages = () => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    return images.slice(startIndex, startIndex + imagesPerPage);
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return <section className="py-16 bg-white max-md:py-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img src={images[selectedImageIndex]} alt={`${projectTitle} - Image ${selectedImageIndex + 1}`} className="w-full h-full object-cover" />
            </div>
            
            {/* Navigation for main image */}
            {totalPages > 1 && <div className="flex items-center justify-center gap-4 mt-6">
                <Button onClick={prevPage} variant="outline" size="icon" className="rounded-full" disabled={currentPage === 1}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <span className="text-[rgba(217,37,70,1)] font-medium">
                  {currentPage} / {totalPages}
                </span>
                
                <Button onClick={nextPage} variant="outline" size="icon" className="rounded-full" disabled={currentPage === totalPages}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>}
          </div>

          {/* Thumbnail Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              {getCurrentPageImages().map((image, index) => {
              const actualIndex = (currentPage - 1) * imagesPerPage + index;
              return <button key={actualIndex} onClick={() => setSelectedImageIndex(actualIndex)} className={`aspect-square rounded-lg overflow-hidden transition-all ${selectedImageIndex === actualIndex ? 'ring-2 ring-[rgba(217,37,70,1)] ring-offset-2' : 'hover:opacity-80'}`}>
                    <img src={image} alt={`${projectTitle} - Thumbnail ${actualIndex + 1}`} className="w-full h-full object-cover" />
                  </button>;
            })}
            </div>
          </div>
        </div>
      </div>
    </section>;
};