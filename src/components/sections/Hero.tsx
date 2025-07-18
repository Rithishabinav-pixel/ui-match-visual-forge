
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import video from '@/assets/jkb-banner.mp4';

export const Hero = () => {
  return (
    <div className="relative min-h-[878px] w-full bg-gradient-to-b from-[rgba(40,45,64,1)] to-[rgba(40,45,64,0.8)] overflow-hidden">

      <div className="hero_video absolute">
        <video className="bg_video" autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="max-w-[1530px] mx-auto px-5">
        <div className="pt-6">
          <Header />
        </div>
        
        <div className="flex min-h-[617px] w-[959px] max-w-full mx-auto flex-col text-white justify-center items-center mt-[163px] max-md:mt-10 px-5">
          <h1 
            className="text-[64px] font-medium leading-[72px] text-center max-md:max-w-full max-md:text-[30px] max-md:leading-[38px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="font-semibold">Premium CMDA & RERA Approved</span>{" "}
            <span className="font-normal">Flats & Apartments in</span>{" "}
            <span className="font-normal">Chennai's</span>{" "}
            <span className="font-semibold italic">Prime Locations</span>
          </h1>
          
          <div 
            className="w-[505px] max-w-full ml-auto mt-[60px] max-md:mt-10 max-md:ml-0"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex flex-col items-start text-base font-normal max-md:items-center">
              <p className="leading-6 text-left max-md:text-center max-md:max-w-full">
                Your trusted Chennai builder for 15+ years. We deliver quality 2BHK & 3BHK homes with modern amenities, legal transparency, and on-time completion. Experience the perfect blend of comfort, convenience, and affordability in Chennai's most sought-after neighborhoods.
              </p>
              
              <button 
                className="bg-[rgba(217,37,70,1)] min-h-12 mt-6 flex items-center justify-center gap-2.5 px-4 py-3 rounded-[58px] w-fit btn-hover-red"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <span>Explore Our Projects</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
