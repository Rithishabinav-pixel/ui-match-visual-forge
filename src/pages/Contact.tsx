
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Create email content
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
    `;

    // Create mailto link
    const mailtoLink = `mailto:rithish.pixel@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#", color: "hover:text-blue-600" },
    { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-blue-400" },
    { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-600" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "hover:text-blue-700" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="bg-[rgba(40,45,64,1)] py-20 pt-32 max-md:py-12 max-md:pt-24">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 max-md:text-4xl">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto max-md:text-lg">
            Ready to start your next construction project? Get in touch with our expert team. We're here to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-16 max-md:py-8">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
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
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                        Message *
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project or inquiry..."
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(217,37,70,1)] focus:border-transparent resize-none"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] text-white py-3 text-lg"
                    >
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
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
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50 max-md:py-8">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-[rgba(40,45,64,1)] mb-8 text-center max-md:text-2xl">Find Our Office</h2>
          <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-xl font-semibold">Interactive Map</p>
                <p className="text-sm opacity-90">123 Construction Avenue, T Nagar, Chennai</p>
                <p className="text-xs mt-2 opacity-75">
                  In a real implementation, this would be an embedded Google Map
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button 
              variant="outline" 
              className="border-[rgba(217,37,70,1)] text-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,1)] hover:text-white"
            >
              Open in Google Maps
              <MapPin className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-16 max-md:py-8">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-[rgba(40,45,64,1)] mb-6 max-md:text-2xl">Connect With Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            Follow us on social media for updates on our latest projects and company news
          </p>
          <div className="flex justify-center gap-6 max-md:gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[rgba(217,37,70,1)] max-md:py-12">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 max-md:text-3xl">Ready to Start Your Project?</h2>
          <p className="text-xl text-white mb-8 max-md:text-lg">
            Don't wait any longer. Contact our expert team today and let's discuss how we can bring your construction vision to life.
          </p>
          <div className="flex gap-4 justify-center max-md:flex-col max-md:items-center">
            <Button className="bg-white text-[rgba(217,37,70,1)] hover:bg-gray-100 px-8 py-3 text-lg">
              Schedule a Consultation
              <Phone className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[rgba(217,37,70,1)] px-8 py-3 text-lg">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
