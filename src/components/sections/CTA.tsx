
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="w-full mt-[120px] mb-[120px] max-md:mt-10 max-md:mb-10">
      <div className="max-w-[1530px] mx-auto px-5">
        <div className="bg-[rgba(40,45,64,1)] rounded-3xl py-20 px-12 text-center max-md:py-16 max-md:px-8">
          <h2 className="text-white text-[48px] font-bold leading-[56px] mb-6 max-md:text-[30px] max-md:leading-[38px] max-w-4xl mx-auto">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-white text-lg leading-7 mb-12 max-w-3xl mx-auto max-md:mb-8">
            Join hundreds of satisfied customers who trusted JKB Housing for their dream homes. Get in touch with us today for a free consultation.
          </p>
          <div className="flex gap-6 justify-center flex-wrap max-md:gap-4">
            <button className="bg-[rgba(217,37,70,1)] flex items-center justify-center text-white gap-2.5 px-8 py-4 rounded-[58px] text-lg font-medium w-fit btn-hover-red">
              <span>Get Free Consultation</span>
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="bg-transparent border-2 border-white flex items-center justify-center text-white gap-2.5 px-8 py-4 rounded-[58px] text-lg font-medium w-fit btn-hover-outline hover:bg-white hover:text-[rgba(40,45,64,1)]">
              <span>View Our Projects</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
