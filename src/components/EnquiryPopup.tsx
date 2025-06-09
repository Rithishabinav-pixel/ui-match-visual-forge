
import React, { useState } from 'react';
import { X, Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSubmitProjectEnquiry } from '@/hooks/useSubmitEnquiry';

interface EnquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle?: string;
  projectId?: string;
}

export const EnquiryPopup = ({ isOpen, onClose, projectTitle, projectId }: EnquiryPopupProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const submitEnquiry = useSubmitProjectEnquiry();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      return;
    }

    try {
      await submitEnquiry.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        project_id: projectId,
      });

      // Reset form and close popup on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      onClose();
    } catch (error) {
      // Error handling is done in the mutation hook
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="text-center relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
            disabled={submitEnquiry.isPending}
          >
            <X className="w-6 h-6" />
          </button>
          <CardTitle className="text-2xl font-bold text-[rgba(40,45,64,1)]">
            Project Enquiry
          </CardTitle>
          {projectTitle && (
            <p className="text-[rgba(217,37,70,1)] font-medium">{projectTitle}</p>
          )}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                Full Name *
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="pl-10"
                  required
                  disabled={submitEnquiry.isPending}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                Email Address *
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="pl-10"
                  required
                  disabled={submitEnquiry.isPending}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                Phone Number *
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="pl-10"
                  required
                  disabled={submitEnquiry.isPending}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                Your Message *
              </Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="w-full pl-10 pt-3 pr-3 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(217,37,70,1)] focus:border-transparent resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                  required
                  disabled={submitEnquiry.isPending}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] text-white py-3 text-lg"
              disabled={submitEnquiry.isPending}
            >
              {submitEnquiry.isPending ? (
                <>
                  Submitting...
                </>
              ) : (
                <>
                  Send Enquiry
                  <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
