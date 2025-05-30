import React from 'react';
import { MapPin, Ruler, Building2, ArrowRight } from 'lucide-react';

export const Projects = () => {
  return (
    <section className="bg-[rgba(40,45,64,1)] flex w-full flex-col overflow-hidden items-stretch font-normal justify-center mt-[120px] px-[195px] py-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-full flex-col items-center max-md:max-w-full">
        <div className="w-[620px] max-w-full text-white text-center">
          <div className="flex w-full flex-col max-md:max-w-full">
            <h2 className="text-[40px] leading-[48px] max-md:max-w-full">
              <span className="font-bold">Lorem ipsum dolor sit amet,</span>
              <br />
              <span className="italic">consectetur adipiscing elit</span>
            </h2>
            <p className="text-base leading-6 mt-6 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
            </p>
          </div>
        </div>

        <div className="flex w-[1185px] max-w-full flex-col items-center mt-[60px] max-md:mt-10">
          <div className="flex items-center gap-6 text-base text-[rgba(217,37,70,1)] justify-center flex-wrap max-md:max-w-full">
            <button className="self-stretch bg-[rgba(217,37,70,1)] min-h-12 gap-2.5 text-white whitespace-nowrap w-[174px] my-auto px-4 py-3 rounded-lg">
              Ongoing
            </button>
            <button className="self-stretch bg-white border gap-2.5 whitespace-nowrap w-[174px] my-auto px-6 py-3 rounded-lg border-[rgba(217,37,70,1)] border-solid max-md:px-5">
              Completed
            </button>
            <button className="self-stretch bg-white border gap-2.5 my-auto px-6 py-3 rounded-lg border-[rgba(217,37,70,1)] border-solid max-md:px-5">
              Future Landmark
            </button>
          </div>

          <div className="flex w-full max-w-[1185px] gap-[30px] justify-center flex-wrap mt-[30px] max-md:max-w-full">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white flex min-w-60 min-h-[616px] gap-2.5 grow shrink w-[300px] rounded-3xl">
                <div className="relative flex min-w-60 w-[375px] flex-col items-stretch">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/97e1d43cebcb1c33bcda4ba4ff04fb11f718784a?placeholderIfAbsent=true"
                    alt="Project Image"
                    className="aspect-[1.04] object-contain w-full z-0 min-h-[360px] rounded-[24px_24px_0px_0px]"
                  />
                  <div className="self-center z-0 flex min-h-56 w-[328px] max-w-full flex-col items-stretch text-base mt-4">
                    <div className="w-full text-[rgba(40,45,64,1)]">
                      <h3 className="text-2xl font-bold leading-none">JKB Sathya</h3>
                      <div className="flex w-full gap-4 leading-6 mt-4">
                        <MapPin className="w-6 h-6" />
                        <p>
                          No: 4/5, 2nd Main road, SVS Nagar,
                          <br />
                          Valasaravakkam, Chennai – 600 087.
                        </p>
                      </div>
                      <div className="flex w-full gap-4 mt-4">
                        <Ruler className="w-6 h-6" />
                        <span>1298 -1257 -977 Sq.ft Unit Sizes</span>
                      </div>
                      <div className="flex w-full gap-4 mt-4">
                        <Building2 className="w-6 h-6" />
                        <span>2 & 3 BHK</span>
                      </div>
                    </div>
                    <button className="flex items-center gap-2.5 text-[rgba(185,3,0,1)] mt-6">
                      <span>View More Details</span>
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="bg-white absolute z-0 gap-2.5 text-xs text-[rgba(217,37,70,1)] leading-6 px-4 py-1 rounded-[150px] right-[31px] top-4">
                    Handover on : Dec 2025
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
