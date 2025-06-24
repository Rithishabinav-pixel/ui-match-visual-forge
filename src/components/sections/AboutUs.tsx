
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AboutUs = () => {
  return (
    <section className="w-full mt-[120px] max-md:mt-16">
      <div className="max-w-[1530px] mx-auto px-5 flex items-center justify-between gap-[60px] flex-wrap">
        <div 
          className="self-stretch flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto max-md:max-w-full"
          data-aos="fade-right"
        >
          <h2 className="text-[rgba(40,45,64,1)] text-[40px] font-bold leading-[48px] max-md:max-w-full">
            Building Dreams, Creating{" "}
            <span className="font-semibold italic text-[rgba(217,37,70,1)]">
              Communities Since 2008
            </span>
          </h2>
          
          <div className="flex w-full flex-col items-stretch text-base font-normal justify-center mt-8 max-md:max-w-full">
            <p className="text-[rgba(40,45,64,1)] leading-6 max-md:max-w-full">
              For over 15 years, JKB Housing has been Chennai's most trusted name in premium residential construction. We specialize in delivering CMDA & RERA approved 2BHK and 3BHK flats and apartments across Chennai's prime locations. Our unwavering commitment to quality construction, legal transparency, and customer satisfaction has made us the preferred choice for over 600 happy families.
            </p>
            
            <p className="text-[rgba(40,45,64,1)] leading-6 mt-4 max-md:max-w-full">
              With 160+ completed projects spanning 6 lakh square feet of premium living space, we don't just build homes - we create lifestyle destinations with modern amenities, strategic locations, and guaranteed on-time delivery. Experience the JKB difference where quality meets affordability.
            </p>
            
            <button 
              className="bg-[rgba(217,37,70,1)] flex items-center justify-center text-white gap-2.5 mt-6 px-4 py-3 rounded-[58px] btn-hover-red" 
              style={{ width: 'fit-content' }}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <span>Discover Our Legacy</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="w-8 max-md:hidden"></div>
        
        <div 
          className="self-stretch min-w-60 overflow-hidden flex-1 shrink basis-[0%] my-auto max-md:max-w-full"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/6548ff2e33da161a9450d29cd00fd5e89bd091d0?placeholderIfAbsent=true"
            alt="JKB Housing - Premium Construction and Quality Homes in Chennai"
            className="aspect-[1.15] object-contain w-full max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};
