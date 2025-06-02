
import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Projects } from '@/components/sections/Projects';
import { AboutUs } from '@/components/sections/AboutUs';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { AppDownload } from '@/components/sections/AppDownload';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/layout/Footer';
import { useAOS } from '@/hooks/useAOS';

const Index = () => {
  useAOS();

  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <div id="projects">
        <Projects />
      </div>
      <AboutUs />
      <WhyChooseUs />
      <AppDownload />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
