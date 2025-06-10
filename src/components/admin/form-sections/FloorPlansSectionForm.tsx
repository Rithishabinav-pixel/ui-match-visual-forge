
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import { FloorPlansSection, FloorPlan } from '@/types/project';

interface FloorPlansSectionFormProps {
  section: FloorPlansSection;
  setSection: (section: FloorPlansSection) => void;
}

export const FloorPlansSectionForm: React.FC<FloorPlansSectionFormProps> = ({
  section,
  setSection
}) => {
  const addFloorPlan = () => {
    setSection({
      ...section,
      floor_plans: [...section.floor_plans, { image: '', title: '' }]
    });
  };

  const removeFloorPlan = (index: number) => {
    setSection({
      ...section,
      floor_plans: section.floor_plans.filter((_, i) => i !== index)
    });
  };

  const updateFloorPlan = (index: number, field: keyof FloorPlan, value: string) => {
    const newPlans = [...section.floor_plans];
    newPlans[index][field] = value;
    setSection({...section, floor_plans: newPlans});
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[rgba(40,45,64,1)]">Floor Plans Section</h2>
        <Button type="button" onClick={addFloorPlan} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Floor Plan
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
      
      <div className="space-y-4">
        {section.floor_plans.map((plan, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium">Floor Plan {index + 1}</h3>
              <Button
                type="button"
                onClick={() => removeFloorPlan(index)}
                variant="ghost"
                size="sm"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Plan Title"
                value={plan.title}
                onChange={(e) => updateFloorPlan(index, 'title', e.target.value)}
              />
              <Input
                placeholder="Image URL"
                value={plan.image}
                onChange={(e) => updateFloorPlan(index, 'image', e.target.value)}
              />
            </div>
            
            <Input
              placeholder="Brochure Download URL"
              className="mt-3"
              value={plan.brochure_url || ''}
              onChange={(e) => updateFloorPlan(index, 'brochure_url', e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
