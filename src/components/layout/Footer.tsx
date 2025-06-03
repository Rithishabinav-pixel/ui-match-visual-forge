import React from 'react';
import { Facebook, Instagram, Linkedin, X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-[rgba(40,45,64,1)] text-white">
      {/* Hero Section */}
      <div className="max-w-[1530px] mx-auto px-5 py-16 lg:py-16 md:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8 md:gap-6">
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl md:text-3xl sm:text-2xl font-normal leading-tight mb-4 lg:w-[81%] md:w-[80%] w-full">
              From the first handshake to the final finish,{' '}
              <span className="text-[rgba(217,37,70,1)] italic font-semibold">
                we deliver on promises and dreams alike.
              </span>
            </h2>
          </div>
          <div className="flex-shrink-0">
            <button className="bg-[rgba(217,37,70,1)] flex items-center justify-center text-white gap-2.5 px-8 py-4 lg:px-8 lg:py-4 md:px-6 md:py-3 rounded-[58px] text-lg lg:text-lg md:text-base font-medium w-fit btn-hover-red">
              <span>Contact us</span>
              <ArrowRight className="w-6 h-6 lg:w-6 lg:h-6 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="max-w-[1530px] mx-auto px-5">
        <div className="h-[1px] bg-gray-600"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1530px] mx-auto px-5 py-16 lg:py-16 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-12 lg:gap-12 md:gap-8">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-8 lg:mb-8 md:mb-6">
              <img src="https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/4efcacee27e527131b287a95ff8236af05b22057?placeholderIfAbsent=true" alt="JKB Housing Logo" className="w-[190px] lg:w-[190px] md:w-[160px] mb-4" />
              <p className="text-lg lg:text-lg md:text-base font-medium">Delivered with Integrity</p>
            </div>
            <div className="flex gap-4 lg:gap-4 md:gap-3">
              <div className="w-10 h-10 lg:w-10 lg:h-10 md:w-9 md:h-9 bg-[rgba(217,37,70,1)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[rgba(197,27,60,1)] transition-colors">
                <Facebook className="w-5 h-5 lg:w-5 lg:h-5 md:w-4 md:h-4 text-white" />
              </div>
              <div className="w-10 h-10 lg:w-10 lg:h-10 md:w-9 md:h-9 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                <X className="w-5 h-5 lg:w-5 lg:h-5 md:w-4 md:h-4 text-black" />
              </div>
              <div className="w-10 h-10 lg:w-10 lg:h-10 md:w-9 md:h-9 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                <Instagram className="w-5 h-5 lg:w-5 lg:h-5 md:w-4 md:h-4 text-[rgba(217,37,70,1)]" />
              </div>
              <div className="w-10 h-10 lg:w-10 lg:h-10 md:w-9 md:h-9 bg-[rgba(217,37,70,1)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[rgba(197,27,60,1)] transition-colors">
                <Linkedin className="w-5 h-5 lg:w-5 lg:h-5 md:w-4 md:h-4 text-white" />
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg lg:text-lg md:text-base font-semibold mb-6 lg:mb-6 md:mb-4">Quick links</h3>
            <ul className="space-y-3 lg:space-y-3 md:space-y-2">
              <li><a href="#" className="text-sm lg:text-sm md:text-xs hover:text-[rgba(217,37,70,1)] transition-colors">Home</a></li>
              <li><a href="#" className="text-sm lg:text-sm md:text-xs hover:text-[rgba(217,37,70,1)] transition-colors">About JKB</a></li>
              <li><a href="#" className="text-sm lg:text-sm md:text-xs hover:text-[rgba(217,37,70,1)] transition-colors">Joint Venture</a></li>
              <li><a href="#" className="text-sm lg:text-sm md:text-xs hover:text-[rgba(217,37,70,1)] transition-colors">JKB Care</a></li>
              <li><a href="#" className="text-sm lg:text-sm md:text-xs hover:text-[rgba(217,37,70,1)] transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          {/* News and Events */}
          <div className="lg:col-span-1">
            <h3 className="text-lg lg:text-lg md:text-base font-semibold mb-6 lg:mb-6 md:mb-4">News and Events</h3>
            <ul className="space-y-3 lg:space-y-3 md:space-y-2">
              <li><a href="#" className="text-sm lg:text-sm md:text-xs hover:text-[rgba(217,37,70,1)] transition-colors">Career</a></li>
              <li><a href="#" className="text-sm lg:text-sm md:text-xs hover:text-[rgba(217,37,70,1)] transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm lg:text-sm md:text-xs hover:text-[rgba(217,37,70,1)] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm lg:text-sm md:text-xs hover:text-[rgba(217,37,70,1)] transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Projects */}
          <div className="lg:col-span-1">
            <h3 className="text-lg lg:text-lg md:text-base font-semibold mb-6 lg:mb-6 md:mb-4">Projects</h3>
            <ul className="space-y-3 lg:space-y-3 md:space-y-2">
              <li><a href="#" className="text-sm lg:text-sm md:text-xs hover:text-[rgba(217,37,70,1)] transition-colors">Ongoing Projects</a></li>
              <li><a href="#" className="text-sm lg:text-sm md:text-xs hover:text-[rgba(217,37,70,1)] transition-colors">Completed Projects</a></li>
              <li><a href="#" className="text-sm lg:text-sm md:text-xs hover:text-[rgba(217,37,70,1)] transition-colors">Future Landmark</a></li>
            </ul>
          </div>
          
          {/* Get in touch with us */}
          <div className="lg:col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg lg:text-lg md:text-base font-semibold mb-6 lg:mb-6 md:mb-4">Get in touch with us</h3>
            <div className="space-y-4 lg:space-y-4 md:space-y-3 mb-8 lg:mb-8 md:mb-6">
              <div className="flex items-center gap-3 lg:gap-3 md:gap-2">
                <Phone className="w-5 h-5 lg:w-5 lg:h-5 md:w-4 md:h-4 text-[rgba(217,37,70,1)] flex-shrink-0" />
                <span className="text-sm lg:text-sm md:text-xs">97103 97104</span>
              </div>
              <div className="flex items-center gap-3 lg:gap-3 md:gap-2">
                <Mail className="w-5 h-5 lg:w-5 lg:h-5 md:w-4 md:h-4 text-[rgba(217,37,70,1)] flex-shrink-0" />
                <span className="text-sm lg:text-sm md:text-xs break-all">admin@jkbhousing.com</span>
              </div>
            </div>
            
            <h4 className="text-lg lg:text-lg md:text-base font-semibold mb-4 lg:mb-4 md:mb-3">Office location</h4>
            <div className="flex items-start gap-3 lg:gap-3 md:gap-2">
              <MapPin className="w-5 h-5 lg:w-5 lg:h-5 md:w-4 md:h-4 text-[rgba(217,37,70,1)] mt-0.5 flex-shrink-0" />
              <div className="text-sm lg:text-sm md:text-xs">
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
        <div className="h-[1px] bg-gray-600 mb-8 lg:mb-8 md:mb-6"></div>
        <div className="pb-8 lg:pb-8 md:pb-6 text-center">
          <p className="text-sm lg:text-sm md:text-xs">Copyright © 2025 jkbhousing, All Rights Reserved.</p>
        </div>
      </div>
    </footer>;
};