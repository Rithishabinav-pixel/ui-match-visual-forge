
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[rgba(40,45,64,1)] text-white py-16 px-5">
      <div className="max-w-[1530px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/4efcacee27e527131b287a95ff8236af05b22057?placeholderIfAbsent=true"
              alt="JKB Housing Logo"
              className="w-[190px] mb-6"
            />
            <p className="text-sm leading-6 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 cursor-pointer hover:text-[rgba(217,37,70,1)]" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-[rgba(217,37,70,1)]" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-[rgba(217,37,70,1)]" />
              <Youtube className="w-6 h-6 cursor-pointer hover:text-[rgba(217,37,70,1)]" />
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)]">Home</a></li>
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)]">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)]">Projects</a></li>
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)]">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)]">Construction</a></li>
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)]">Consultation</a></li>
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)]">Joint Venture</a></li>
              <li><a href="#" className="text-sm hover:text-[rgba(217,37,70,1)]">JKB Care</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3">
              <p className="text-sm">123 Main Street, Chennai</p>
              <p className="text-sm">Phone: 97103 97104</p>
              <p className="text-sm">Email: info@jkbhousing.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-sm">&copy; 2024 JKB Housing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
