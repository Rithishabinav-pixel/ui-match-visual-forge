
import React from 'react';
import { Crown, ArrowRight } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <section className="bg-[rgba(40,45,64,1)] min-h-[817px] w-full text-white mt-[120px] py-[102px] max-md:mt-10 max-md:py-[100px]">
      <div className="max-w-[1530px] mx-auto px-5 flex flex-col items-stretch justify-center">
        <div className="flex w-[1076px] max-w-full mx-auto flex-col items-stretch justify-center">
          <h2 
            className="text-[40px] font-bold leading-[1.2] text-center max-md:max-w-full"
            data-aos="fade-up"
          >
            Lorem ipsum dolor sit amet,{" "}
            <span className="font-semibold italic text-[rgba(217,37,70,1)]">
              consectetur adipiscing
            </span>
          </h2>
          
          <div 
            className="flex w-full flex-col items-stretch text-base font-normal justify-center mt-8 max-md:max-w-full"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="leading-6 text-center max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <button 
              className="bg-[rgba(217,37,70,1)] mx-auto flex items-center justify-center gap-2.5 mt-6 px-4 py-3 rounded-[58px] w-fit transition-all duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <span>Step Into Our World</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex min-h-[350px] w-full items-center justify-between flex-wrap mt-10 max-md:max-w-full">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="border self-stretch min-w-60 min-h-[350px] flex-1 shrink basis-[0%] my-auto p-6 border-white border-solid max-md:px-5"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 200)}
            >
              <Crown className="w-20 h-20" />
              <div className="w-full mt-[94px] max-md:mt-10">
                <h3 className="text-2xl font-bold leading-none">{feature.title}</h3>
                <p className="text-base font-normal leading-6 mt-6">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
