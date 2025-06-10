
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import { AmenitiesSection } from '@/types/project';

interface AmenitiesSectionFormProps {
  section: AmenitiesSection;
  setSection: (section: AmenitiesSection) => void;
}

export const AmenitiesSectionForm: React.FC<AmenitiesSectionFormProps> = ({
  section,
  setSection
}) => {
  const addAmenity = () => {
    setSection({...section, amenities: [...section.amenities, '']});
  };

  const removeAmenity = (index: number) => {
    setSection({...section, amenities: section.amenities.filter((_, i) => i !== index)});
  };

  const updateAmenity = (index: number, value: string) => {
    const newAmenities = [...section.amenities];
    newAmenities[index] = value;
    setSection({...section, amenities: newAmenities});
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[rgba(40,45,64,1)]">Amenities Section</h2>
        <Button type="button" onClick={addAmenity} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Amenity
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Input
          placeholder="Section Heading"
          value={section.heading || ''}
          onChange={(e) => setSection({...section, heading: e.target.value})}
        />
      </div>
      
      <Textarea
        placeholder="Section Description"
        className="mb-4"
        value={section.description || ''}
        onChange={(e) => setSection({...section, description: e.target.value})}
      />

      <div className="space-y-2">
        <h3 className="font-medium">Amenities</h3>
        {section.amenities.map((amenity, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Input
              placeholder="Amenity name"
              value={amenity}
              onChange={(e) => updateAmenity(index, e.target.value)}
            />
            <Button
              type="button"
              onClick={() => removeAmenity(index)}
              variant="ghost"
              size="sm"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
