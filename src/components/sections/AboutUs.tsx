
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AboutUs = () => {
  return (
    <section className="w-full mt-[120px] max-md:mt-10">
      <div className="max-w-[1530px] mx-auto px-5 flex items-center justify-between gap-[60px] flex-wrap">
        <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <h2 className="text-[rgba(40,45,64,1)] text-[40px] font-bold leading-[48px] max-md:max-w-full">
            Lorem ipsum dolor sit amet,{" "}
            <span className="font-semibold italic text-[rgba(217,37,70,1)]">
              consectetur adipiscing
            </span>
          </h2>
          
          <div className="flex w-full flex-col items-stretch text-base font-normal justify-center mt-8 max-md:max-w-full">
            <p className="text-[rgba(40,45,64,1)] leading-6 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <button className="bg-[rgba(217,37,70,1)] flex items-center justify-center text-white gap-2.5 mt-6 px-4 py-3 rounded-[58px]" style={{ width: 'fit-content' }}>
              <span>Step Into Our World</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="w-8 max-md:hidden"></div>
        
        <div className="self-stretch min-w-60 overflow-hidden flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/6548ff2e33da161a9450d29cd00fd5e89bd091d0?placeholderIfAbsent=true"
            alt="About Us Image"
            className="aspect-[1.15] object-contain w-full max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};
