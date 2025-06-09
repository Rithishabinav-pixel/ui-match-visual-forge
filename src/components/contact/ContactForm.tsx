
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useSubmitContactEnquiry } from '@/hooks/useSubmitEnquiry';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const submitEnquiry = useSubmitContactEnquiry();

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
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return;
    }

    try {
      await submitEnquiry.mutateAsync({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      // Error handling is done in the mutation hook
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-[rgba(40,45,64,1)] mb-8 max-md:text-2xl">Send Us a Message</h2>
      <Card className="p-8 shadow-lg">
        <CardContent className="p-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full"
                  required
                  disabled={submitEnquiry.isPending}
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full"
                  required
                  disabled={submitEnquiry.isPending}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2 block">
                Subject *
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What is this regarding?"
                className="w-full"
                required
                disabled={submitEnquiry.isPending}
              />
            </div>
            
            <div>
              <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project or inquiry..."
                rows={6}
                className="w-full"
                required
                disabled={submitEnquiry.isPending}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] text-white py-3 text-lg"
              disabled={submitEnquiry.isPending}
            >
              {submitEnquiry.isPending ? (
                "Submitting..."
              ) : (
                <>
                  Send Message
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
