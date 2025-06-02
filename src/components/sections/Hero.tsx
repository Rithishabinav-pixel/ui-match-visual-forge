
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';

export const Hero = () => {
  return (
    <div className="relative min-h-[878px] w-full bg-gradient-to-b from-[rgba(40,45,64,1)] to-[rgba(40,45,64,0.8)]">
      <div className="max-w-[1530px] mx-auto px-5">
        <div className="pt-6">
          <Header />
        </div>
        
        <div className="flex min-h-[617px] w-[959px] max-w-full mx-auto flex-col text-white justify-center items-center mt-[163px] max-md:mt-10">
          <h1 
            className="text-[64px] font-medium leading-[72px] text-center max-md:max-w-full max-md:text-[30px] max-md:leading-[38px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="font-semibold">Lorem ipsum dolor sit amet,</span>{" "}
            <span className="font-normal">consectetur adipiscing elit,</span>{" "}
            <span className="font-normal">sed do</span>{" "}
            <span className="font-semibold italic">eiusmod tempor</span>
          </h1>
          
          <div 
            className="w-[505px] max-w-full ml-auto mt-[60px] max-md:mt-10 max-md:ml-0"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex flex-col items-start text-base font-normal max-md:items-center">
              <p className="leading-6 text-left max-md:text-center max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <button 
                className="bg-[rgba(217,37,70,1)] min-h-12 mt-6 flex items-center justify-center gap-2.5 px-4 py-3 rounded-[58px] w-fit transition-all duration-300 hover:scale-105 hover:bg-[rgba(197,27,60,1)]"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
