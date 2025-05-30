import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Stats = () => {
  const stats = [
    { number: '160+', label: 'Completed Projects' },
    { number: '6L+', label: 'Sq.ft Area' },
    { number: '600+', label: 'Happy Families' },
    { number: '10+', label: 'Ongoing Projects' }
  ];

  return (
    <section className="self-center w-[1530px] max-w-full mt-[120px] max-md:mt-10">
      <div className="min-h-[520px] w-[765px] max-w-[765px] max-md:max-w-full">
        <h2 className="text-[rgba(40,45,64,1)] text-[40px] font-bold leading-[48px] max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
          <span className="font-semibold italic text-[rgba(217,37,70,1)]">
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </h2>

        <div className="flex w-full items-center gap-[30px] text-[rgba(40,45,64,1)] flex-wrap mt-8 max-md:max-w-full">
          {stats.map((stat, index) => (
            <div key={index} className="self-stretch flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
              <div className="text-[40px] font-medium leading-[1.2]">{stat.number}</div>
              <div className="text-base font-normal mt-6">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-stretch text-base font-normal justify-center mt-8 max-md:max-w-full">
          <p className="text-neutral-800 leading-6 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <button className="bg-[rgba(217,37,70,1)] flex items-center justify-center text-white gap-2.5 mt-6 px-4 py-3 rounded-[58px]">
            <span>Step Into Our World</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex w-full items-center gap-[30px] justify-center flex-wrap mt-10 max-md:max-w-full">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            <img
              src={`URL_${10 + index}`}
              alt={`Stats Image ${index + 1}`}
              className="aspect-[1.32] object-contain w-full rounded-3xl max-md:max-w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
