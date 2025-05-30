
import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Projects } from '@/components/sections/Projects';
import { AboutUs } from '@/components/sections/AboutUs';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { AppDownload } from '@/components/sections/AppDownload';
import { Testimonials } from '@/components/sections/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgba(40,45,64,1)] to-[rgba(40,45,64,0.8)]">
      <Hero />
      <Stats />
      <Projects />
      <AboutUs />
      <WhyChooseUs />
      <AppDownload />
      <Testimonials />
    </div>
  );
};

export default Index;
