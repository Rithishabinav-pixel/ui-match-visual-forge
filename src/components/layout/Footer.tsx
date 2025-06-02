
import React from 'react';
import { Facebook, Instagram, Linkedin, X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[rgba(40,45,64,1)] text-white">
      {/* Hero Section */}
      <div className="max-w-[1530px] mx-auto px-5 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-normal leading-tight mb-4 w-[65%]">
              From the first handshake to the final finish,{' '}
              <span className="text-[rgba(217,37,70,1)] italic">
                we deliver on promises and dreams alike.
              </span>
            </h2>
          </div>
          <div className="flex-shrink-0">
            <button className="bg-[rgba(217,37,70,1)] flex items-center justify-center text-white gap-2.5 px-8 py-4 rounded-[58px] text-lg font-medium w-fit btn-hover-red">
              <span>Contact us</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="max-w-[1530px] mx-auto px-5">
        <div className="h-[1px] bg-gray-600"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1530px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <img src="https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/4efcacee27e527131b287a95ff8236af05b22057?placeholderIfAbsent=true" alt="JKB Housing Logo" className="w-[190px] mb-4" />
              <p className="text-lg font-medium">Delivered with Integrity</p>
            </div>
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 cursor-pointer hover:text-[rgba(217,37,70,1)] transition-colors" />
              <X className="w-6 h-6 cursor-pointer hover:text-[rgba(217,37,70,1)] transition-colors" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-[rgba(217,37,70,1)] transition-colors" />
              <Linkedin className="w-6 h-6 cursor-pointer hover:text-[rgba(217,37,70,1)] transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Quick links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)] transition-colors">Home</a></li>
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)] transition-colors">About JKB</a></li>
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)] transition-colors">Joint Venture</a></li>
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)] transition-colors">JKB Care</a></li>
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)] transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          {/* News and Events */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">News and Events</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)] transition-colors">Career</a></li>
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)] transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)] transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Projects */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Projects</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)] transition-colors">Ongoing Projects</a></li>
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)] transition-colors">Completed Projects</a></li>
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)] transition-colors">Future Landmark</a></li>
            </ul>
          </div>
          
          {/* Get in touch with us */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Get in touch with us</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[rgba(217,37,70,1)]" />
                <span className="text-sm">97103 97104</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[rgba(217,37,70,1)]" />
                <span className="text-sm">admin@jkbhousing.com</span>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold mb-4">Office location</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[rgba(217,37,70,1)] mt-0.5" />
              <div className="text-sm">
                <p>No: 4/5, 2nd Main road, SVS</p>
                <p>Nagar, Valasaravakkam,</p>
                <p>Chennai - 600 087.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1530px] mx-auto px-5">
        <div className="h-[1px] bg-gray-600 mb-8"></div>
        <div className="pb-8 text-center">
          <p className="text-sm">Copyright © 2025 jkbhousing, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
