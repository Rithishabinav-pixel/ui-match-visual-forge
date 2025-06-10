
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, Trash2, MapPin } from 'lucide-react';
import { NearbyLocationsSection, NearbyLocationCategory } from '@/types/project';

interface NearbyLocationsSectionFormProps {
  section: NearbyLocationsSection;
  setSection: (section: NearbyLocationsSection) => void;
}

export const NearbyLocationsSectionForm: React.FC<NearbyLocationsSectionFormProps> = ({
  section,
  setSection
}) => {
  const addCategory = () => {
    setSection({
      ...section,
      categories: [...section.categories, { heading: '', places: [{ name: '', distance: '' }] }]
    });
  };

  const removeCategory = (index: number) => {
    setSection({
      ...section,
      categories: section.categories.filter((_, i) => i !== index)
    });
  };

  const updateCategory = (index: number, field: keyof NearbyLocationCategory, value: any) => {
    const newCategories = [...section.categories];
    newCategories[index][field] = value;
    setSection({...section, categories: newCategories});
  };

  const addPlace = (categoryIndex: number) => {
    const newCategories = [...section.categories];
    newCategories[categoryIndex].places.push({ name: '', distance: '' });
    setSection({...section, categories: newCategories});
  };

  const removePlace = (categoryIndex: number, placeIndex: number) => {
    const newCategories = [...section.categories];
    newCategories[categoryIndex].places = newCategories[categoryIndex].places.filter((_, i) => i !== placeIndex);
    setSection({...section, categories: newCategories});
  };

  const updatePlace = (categoryIndex: number, placeIndex: number, field: 'name' | 'distance', value: string) => {
    const newCategories = [...section.categories];
    newCategories[categoryIndex].places[placeIndex][field] = value;
    setSection({...section, categories: newCategories});
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          <h2 className="text-xl font-semibold text-[rgba(40,45,64,1)]">Nearby Locations Section</h2>
        </div>
        <Button type="button" onClick={addCategory} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Category
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
        className="mb-6"
        value={section.description || ''}
        onChange={(e) => setSection({...section, description: e.target.value})}
      />
      
      <div className="space-y-6">
        {section.categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white p-4 rounded-lg border">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-medium">Category {categoryIndex + 1}</h3>
              <Button
                type="button"
                onClick={() => removeCategory(categoryIndex)}
                variant="ghost"
                size="sm"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input
                placeholder="Category Heading (e.g., Hospitals)"
                value={category.heading}
                onChange={(e) => updateCategory(categoryIndex, 'heading', e.target.value)}
              />
              <Input
                placeholder="Icon URL (40px)"
                value={category.icon || ''}
                onChange={(e) => updateCategory(categoryIndex, 'icon', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-sm">Places</h4>
                <Button
                  type="button"
                  onClick={() => addPlace(categoryIndex)}
                  variant="outline"
                  size="sm"
                >
                  <Plus className="w-3 h-3 mr-1" />
                  Add Place
                </Button>
              </div>
              
              {category.places.map((place, placeIndex) => (
                <div key={placeIndex} className="flex gap-2 items-center">
                  <Input
                    placeholder="Place Name"
                    value={place.name}
                    onChange={(e) => updatePlace(categoryIndex, placeIndex, 'name', e.target.value)}
                  />
                  <Input
                    placeholder="Distance (e.g., 2 KM)"
                    value={place.distance}
                    onChange={(e) => updatePlace(categoryIndex, placeIndex, 'distance', e.target.value)}
                  />
                  <Button
                    type="button"
                    onClick={() => removePlace(categoryIndex, placeIndex)}
                    variant="ghost"
                    size="sm"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
