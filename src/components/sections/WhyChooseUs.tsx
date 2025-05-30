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
    <section className="bg-[rgba(40,45,64,1)] flex min-h-[817px] w-full flex-col items-center text-white justify-center mt-[120px] py-[102px] max-md:max-w-full max-md:mt-10 max-md:py-[100px]">
      <div className="flex w-[1530px] max-w-full flex-col items-stretch justify-center">
        <div className="self-center flex w-[1076px] max-w-full flex-col items-stretch justify-center">
          <h2 className="text-[40px] font-bold leading-[1.2] text-center max-md:max-w-full">
            Lorem ipsum dolor sit amet,{" "}
            <span className="font-semibold italic text-[rgba(217,37,70,1)]">
              consectetur adipiscing
            </span>
          </h2>
          
          <div className="flex w-full flex-col items-stretch text-base font-normal justify-center mt-8 max-md:max-w-full">
            <p className="leading-6 text-center max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <button className="bg-[rgba(217,37,70,1)] self-center flex items-center justify-center gap-2.5 mt-6 px-4 py-3 rounded-[58px]">
              <span>Step Into Our World</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex min-h-[350px] w-full items-center justify-between flex-wrap mt-10 max-md:max-w-full">
          {features.map((feature, index) => (
            <div key={index} className="border self-stretch min-w-60 min-h-[350px] flex-1 shrink basis-[0%] my-auto p-6 border-white border-solid max-md:px-5">
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
