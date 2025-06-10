
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, Trash2, FileText } from 'lucide-react';
import { SpecificationsSection, SpecificationItem } from '@/types/project';

interface SpecificationsSectionFormProps {
  section: SpecificationsSection;
  setSection: (section: SpecificationsSection) => void;
}

export const SpecificationsSectionForm: React.FC<SpecificationsSectionFormProps> = ({
  section,
  setSection
}) => {
  const addSpecification = () => {
    setSection({
      ...section,
      specifications: [...section.specifications, { subheading: '', content: '' }]
    });
  };

  const removeSpecification = (index: number) => {
    setSection({
      ...section,
      specifications: section.specifications.filter((_, i) => i !== index)
    });
  };

  const updateSpecification = (index: number, field: keyof SpecificationItem, value: string) => {
    const newSpecs = [...section.specifications];
    newSpecs[index][field] = value;
    setSection({...section, specifications: newSpecs});
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          <h2 className="text-xl font-semibold text-[rgba(40,45,64,1)]">Project Specifications</h2>
        </div>
        <Button type="button" onClick={addSpecification} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Specification
        </Button>
      </div>
      
      <Input
        placeholder="Section Heading"
        className="mb-4"
        value={section.heading || ''}
        onChange={(e) => setSection({...section, heading: e.target.value})}
      />
      
      <div className="space-y-4">
        {section.specifications.map((spec, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium">Specification {index + 1}</h3>
              <Button
                type="button"
                onClick={() => removeSpecification(index)}
                variant="ghost"
                size="sm"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            
            <Input
              placeholder="Subheading"
              className="mb-3"
              value={spec.subheading}
              onChange={(e) => updateSpecification(index, 'subheading', e.target.value)}
            />
            
            <Textarea
              placeholder="Content"
              value={spec.content}
              onChange={(e) => updateSpecification(index, 'content', e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
