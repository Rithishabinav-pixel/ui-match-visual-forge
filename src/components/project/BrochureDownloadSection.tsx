
import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BrochureSection as BrochureSectionType } from '@/types/project';
import { useSubmitProjectEnquiry } from '@/hooks/useSubmitEnquiry';
import { useToast } from '@/hooks/use-toast';

interface BrochureDownloadSectionProps {
  brochureSection?: BrochureSectionType;
  projectId: string;
  projectTitle: string;
}

export const BrochureDownloadSection = ({ 
  brochureSection, 
  projectId, 
  projectTitle 
}: BrochureDownloadSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { mutate: submitEnquiry } = useSubmitProjectEnquiry();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDownload = async () => {
    if (!formData.name || !formData.mobile || !formData.email) {
      toast({
        title: "Required Fields",
        description: "Please fill all required fields to download the brochure.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      submitEnquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.mobile,
        message: `Brochure download request for ${projectTitle}`,
        project_id: projectId
      });

      // If brochure URL exists, open it
      if (brochureSection?.brochure_url) {
        window.open(brochureSection.brochure_url, '_blank');
      }

      // Reset form
      setFormData({ name: '', mobile: '', email: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50 max-md:py-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=500&fit=crop" 
                alt="Building"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-6 max-md:text-3xl">
                Download Brochure
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {brochureSection?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"}
              </p>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your name"
                    className="border-2 border-[rgba(217,37,70,0.3)] focus:border-[rgba(217,37,70,1)] rounded-full px-4 py-3"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="mobile">Mobile number *</Label>
                  <Input
                    id="mobile"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    placeholder="Enter your mobile number"
                    className="border-2 border-[rgba(217,37,70,0.3)] focus:border-[rgba(217,37,70,1)] rounded-full px-4 py-3"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    className="border-2 border-[rgba(217,37,70,0.3)] focus:border-[rgba(217,37,70,1)] rounded-full px-4 py-3"
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  onClick={handleDownload}
                  disabled={isSubmitting}
                  className="w-full bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] text-white py-3 rounded-full text-lg font-medium flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {isSubmitting ? 'Processing...' : 'Download Brochure'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
