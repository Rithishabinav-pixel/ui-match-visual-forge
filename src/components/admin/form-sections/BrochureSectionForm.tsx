
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FileText } from 'lucide-react';
import { BrochureDownloadSection } from '@/types/project';

interface BrochureSectionFormProps {
  section: BrochureDownloadSection;
  setSection: (section: BrochureDownloadSection) => void;
}

export const BrochureSectionForm: React.FC<BrochureSectionFormProps> = ({
  section,
  setSection
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-5 h-5" />
        <h2 className="text-xl font-semibold text-[rgba(40,45,64,1)]">Brochure Download Section</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Input
          placeholder="Section Heading"
          value={section.heading || ''}
          onChange={(e) => setSection({...section, heading: e.target.value})}
        />
        <Input
          placeholder="Brochure File URL (PDF)"
          value={section.brochure_file || ''}
          onChange={(e) => setSection({...section, brochure_file: e.target.value})}
        />
      </div>
      
      <Textarea
        placeholder="Section Description"
        value={section.description || ''}
        onChange={(e) => setSection({...section, description: e.target.value})}
      />
      
      <p className="text-sm text-gray-600 mt-2">
        Note: Users will need to fill a form (name, email, etc.) before downloading. Submissions will be stored in admin.
      </p>
    </div>
  );
};
