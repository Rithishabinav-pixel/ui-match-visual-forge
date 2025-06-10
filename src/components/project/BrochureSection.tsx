
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrochureSection as BrochureSectionType } from '@/types/project';

interface BrochureSectionProps {
  brochureSection: BrochureSectionType;
}

export const BrochureSection = ({ brochureSection }: BrochureSectionProps) => {
  return (
    <section className="py-16 bg-[rgba(40,45,64,1)] max-md:py-8">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 max-md:text-3xl">
          {brochureSection.title || 'Download Project Brochure'}
        </h2>
        {brochureSection.description && (
          <p className="text-xl text-gray-300 mb-8 max-md:text-lg">
            {brochureSection.description}
          </p>
        )}
        <Button 
          onClick={() => window.open(brochureSection.brochure_url, '_blank')}
          className="bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] px-8 py-3 text-lg"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Brochure
        </Button>
      </div>
    </section>
  );
};
