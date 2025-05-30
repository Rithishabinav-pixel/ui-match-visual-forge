import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative flex min-h-[878px] w-full flex-col items-stretch justify-between max-md:max-w-full">
      <div className="self-center flex min-h-[617px] w-[959px] max-w-full flex-col text-white justify-between mt-[163px] max-md:mt-10">
        <h1 className="text-[64px] font-medium leading-[72px] text-center max-md:max-w-full max-md:text-[40px] max-md:leading-[50px]">
          <span className="font-semibold">Lorem ipsum dolor sit amet,</span>{" "}
          <span className="font-normal">consectetur adipiscing elit,</span>{" "}
          <span className="font-normal">sed do</span>{" "}
          <span className="font-semibold italic">eiusmod tempor</span>
        </h1>
        
        <div className="flex flex-col items-stretch text-base font-normal mt-[233px] max-md:max-w-full max-md:mt-10">
          <p className="leading-6 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <button className="bg-[rgba(217,37,70,1)] min-h-12 mt-6 flex items-center justify-center gap-2.5 px-4 py-3 rounded-[58px]">
            <span>Enquire Now</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
