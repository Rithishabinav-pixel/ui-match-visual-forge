
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ProjectDetailSection } from '@/types/project';

interface ProjectDetailSectionFormProps {
  section: ProjectDetailSection;
  setSection: (section: ProjectDetailSection) => void;
}

export const ProjectDetailSectionForm: React.FC<ProjectDetailSectionFormProps> = ({
  section,
  setSection
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-[rgba(40,45,64,1)]">Project Detail Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="Heading"
          value={section.heading || ''}
          onChange={(e) => setSection({...section, heading: e.target.value})}
        />
        <Input
          placeholder="Image URL"
          value={section.image || ''}
          onChange={(e) => setSection({...section, image: e.target.value})}
        />
      </div>
      <Textarea
        placeholder="Description"
        className="mt-4"
        value={section.description || ''}
        onChange={(e) => setSection({...section, description: e.target.value})}
      />
    </div>
  );
};
