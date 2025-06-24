
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AppDownload = () => {
  return (
    <section className="w-full mt-[120px] max-md:mt-16">
      <div className="max-w-[1530px] mx-auto px-5 flex items-center justify-between flex-wrap max-md:gap-12">
        <div className="self-stretch flex min-w-60 flex-col flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/e0c4bd0eeab3f837342dddd40fe6940df68bf76d?placeholderIfAbsent=true"
            alt="JKB Care Mobile App"
            className="aspect-[0.7] object-contain w-[386px] max-w-full transform transition-all duration-700 hover:scale-105 hover:rotate-2 animate-[float_3s_ease-in-out_infinite] cursor-pointer"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>
        
        <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <h2 
            className="text-[rgba(40,45,64,1)] text-[40px] font-bold leading-[48px] max-md:max-w-full"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Experience JKB Care with Our{" "}
            <span className="font-semibold italic text-[rgba(217,37,70,1)]">
              Mobile App
            </span>
          </h2>
          
          <div className="flex w-full flex-col justify-center mt-8 max-md:max-w-full">
            <p 
              className="text-neutral-800 text-base font-normal leading-6 self-stretch max-md:max-w-full"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              Download the JKB Care app and stay connected with your property investment journey. Get real-time project updates, construction progress photos, payment schedules, and direct communication with our customer care team. Experience seamless property management, instant notifications, and exclusive app-only offers from Chennai's most trusted housing developer.
            </p>
            
            <div 
              className="flex gap-[30px] text-black mt-6 max-md:flex-col max-md:gap-4"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <button className="bg-white border flex items-stretch gap-[9px] overflow-hidden text-[13px] font-normal uppercase px-[11px] py-2 rounded-lg border-black border-solid btn-hover-outline" style={{ width: 'fit-content' }}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/b3a1ba8e8be4b44fff1f0f85701796442afe8e05?placeholderIfAbsent=true"
                  alt="Google Play"
                  className="aspect-[0.87] object-contain w-[26px] shrink-0 mt-1"
                />
                <div>
                  <span>GET IT ON</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/d4cfbf1173dfc89b10b0d1a6c1b5bc5ebff8eb22?placeholderIfAbsent=true"
                    alt="Google Play"
                    className="aspect-[5.15] object-contain w-[93px] mt-1"
                  />
                </div>
              </button>
              
              <button className="bg-white border flex items-stretch gap-2.5 overflow-hidden font-medium leading-none px-[9px] py-2.5 rounded-lg border-black border-solid btn-hover-outline" style={{ width: 'fit-content' }}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/1f734a22779269d9fb7ffbd0996f03608a466856?placeholderIfAbsent=true"
                  alt="App Store"
                  className="aspect-[0.83] object-contain w-[25px] shrink-0"
                />
                <div>
                  <span className="text-[11px]">Download on the</span>
                  <span className="text-[23px] tracking-[-0.59px] block">App Store</span>
                </div>
              </button>
            </div>
            
            <button 
              className="bg-[rgba(217,37,70,1)] flex items-center justify-center text-white gap-2.5 mt-6 px-4 py-3 rounded-[58px] btn-hover-red" 
              style={{ width: 'fit-content' }}
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <span>Download JKB Care App</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
