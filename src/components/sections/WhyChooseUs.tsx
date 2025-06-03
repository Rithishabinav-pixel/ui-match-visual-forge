
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CustomIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="81" viewBox="0 0 80 81" fill="none">
    <path d="M55.6664 63.7667H24.333C22.933 63.7667 21.3664 62.6667 20.8997 61.3334L7.09969 22.7334C5.13302 17.2 7.43302 15.5 12.1664 18.9L25.1664 28.2C27.333 29.7 29.7997 28.9334 30.733 26.5L36.5997 10.8667C38.4664 5.8667 41.5664 5.8667 43.433 10.8667L49.2997 26.5C50.233 28.9334 52.6997 29.7 54.833 28.2L67.033 19.5C72.233 15.7667 74.733 17.6667 72.5997 23.7L59.133 61.4C58.633 62.6667 57.0664 63.7667 55.6664 63.7667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.667 73.8335H58.3337" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M31.667 47.1665H48.3337" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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
              className="bg-[rgba(217,37,70,1)] mx-auto flex items-center justify-center gap-2.5 mt-6 px-4 py-3 rounded-[58px] w-fit transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[rgba(217,37,70,1)] hover:border-2 hover:border-[rgba(217,37,70,1)] hover:shadow-lg"
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
              <CustomIcon />
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
