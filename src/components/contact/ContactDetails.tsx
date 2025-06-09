
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const contactDetails = [
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+91 44 1234 5678", "+91 44 8765 4321"],
    subtitle: "Call us anytime"
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@jkbconstruction.com", "projects@jkbconstruction.com"],
    subtitle: "Send us a message"
  },
  {
    icon: MapPin,
    title: "Office Address",
    details: ["123 Construction Avenue", "T Nagar, Chennai - 600 017", "Tamil Nadu, India"],
    subtitle: "Visit our office"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
    subtitle: "We're available"
  }
];

export const ContactDetails = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[rgba(40,45,64,1)] mb-8 max-md:text-2xl">Get In Touch</h2>
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[rgba(217,37,70,1)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <detail.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[rgba(40,45,64,1)] mb-1">{detail.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{detail.subtitle}</p>
                  <div className="space-y-1">
                    {detail.details.map((item, itemIndex) => (
                      <p key={itemIndex} className="text-gray-700">{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
