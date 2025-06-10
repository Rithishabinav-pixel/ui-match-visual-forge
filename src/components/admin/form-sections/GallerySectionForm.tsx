
import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Trash2, Image } from 'lucide-react';
import { GallerySection } from '@/types/project';

interface GallerySectionFormProps {
  section: GallerySection;
  setSection: (section: GallerySection) => void;
  selectedImages: File[];
  setSelectedImages: (images: File[]) => void;
  isUploading: boolean;
}

export const GallerySectionForm: React.FC<GallerySectionFormProps> = ({
  section,
  setSection,
  selectedImages,
  setSelectedImages,
  isUploading
}) => {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedImages([...selectedImages, ...Array.from(files)]);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Image className="w-5 h-5" />
        <h2 className="text-xl font-semibold text-[rgba(40,45,64,1)]">Gallery Section</h2>
      </div>
      
      <div className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-4">
            <label htmlFor="gallery-images" className="cursor-pointer">
              <span className="mt-2 block text-sm font-medium text-gray-900">
                {isUploading ? 'Uploading images...' : 'Upload gallery images'}
              </span>
              <span className="mt-1 block text-sm text-gray-600">
                PNG, JPG, GIF up to 10MB each (Grid format)
              </span>
            </label>
            <input
              id="gallery-images"
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
              disabled={isUploading}
            />
          </div>
        </div>
        
        {selectedImages.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {selectedImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Gallery ${index}`}
                  className="w-full h-24 object-cover rounded-lg"
                  onLoad={() => URL.revokeObjectURL(URL.createObjectURL(image))}
                />
                <button
                  type="button"
                  onClick={() => setSelectedImages(selectedImages.filter((_, i) => i !== index))}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  disabled={isUploading}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
