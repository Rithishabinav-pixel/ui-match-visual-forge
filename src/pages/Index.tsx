
import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Projects } from '@/components/sections/Projects';
import { AboutUs } from '@/components/sections/AboutUs';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { AppDownload } from '@/components/sections/AppDownload';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Projects />
      <AboutUs />
      <WhyChooseUs />
      <AppDownload />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
