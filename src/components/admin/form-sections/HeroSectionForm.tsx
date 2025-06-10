
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { HeroSection } from '@/types/project';

interface HeroSectionFormProps {
  heroSection: HeroSection;
  setHeroSection: (section: HeroSection) => void;
}

export const HeroSectionForm: React.FC<HeroSectionFormProps> = ({
  heroSection,
  setHeroSection
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-[rgba(40,45,64,1)]">Hero Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="Main Image URL"
          value={heroSection.main_image || ''}
          onChange={(e) => setHeroSection({...heroSection, main_image: e.target.value})}
        />
        <Input
          placeholder="Heading"
          value={heroSection.heading || ''}
          onChange={(e) => setHeroSection({...heroSection, heading: e.target.value})}
        />
        <Input
          placeholder="Location"
          value={heroSection.location || ''}
          onChange={(e) => setHeroSection({...heroSection, location: e.target.value})}
        />
      </div>
      <Textarea
        placeholder="Description"
        className="mt-4"
        value={heroSection.description || ''}
        onChange={(e) => setHeroSection({...heroSection, description: e.target.value})}
      />
    </div>
  );
};
