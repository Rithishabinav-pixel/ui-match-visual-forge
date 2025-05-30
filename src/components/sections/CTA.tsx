
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="w-full mt-[120px] max-md:mt-10">
      <div className="max-w-[1530px] mx-auto px-5">
        <div className="bg-[rgba(40,45,64,1)] rounded-3xl py-16 px-8 text-center">
          <h2 className="text-white text-[40px] font-bold leading-[48px] mb-6 max-md:text-[32px] max-md:leading-[40px]">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-white text-lg leading-6 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trusted JKB Housing for their dream homes. Get in touch with us today for a free consultation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-[rgba(217,37,70,1)] flex items-center justify-center text-white gap-2.5 px-6 py-3 rounded-[58px] w-fit">
              <span>Get Free Consultation</span>
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="bg-transparent border-2 border-white flex items-center justify-center text-white gap-2.5 px-6 py-3 rounded-[58px] w-fit hover:bg-white hover:text-[rgba(40,45,64,1)] transition-colors">
              <span>View Our Projects</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
