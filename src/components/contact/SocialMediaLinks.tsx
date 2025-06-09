
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, name: "Facebook", url: "#", color: "hover:text-blue-600" },
  { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-blue-400" },
  { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-600" },
  { icon: Linkedin, name: "LinkedIn", url: "#", color: "hover:text-blue-700" }
];

export const SocialMediaLinks = () => {
  return (
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
  );
};
