
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';

const StatItem = ({ number, label, delay = 0 }: { number: string; label: string; delay?: number }) => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.5,
  });

  // Extract the numeric part and suffix
  const numericValue = parseInt(number.replace(/\D/g, ''));
  const suffix = number.replace(/\d/g, '');
  
  const animatedCount = useCountUp(numericValue, 2000, hasIntersected);

  return (
    <div 
      ref={elementRef} 
      className="self-stretch flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="text-[40px] font-medium leading-[1.2]">
        {animatedCount}{suffix}
      </div>
      <div className="text-base font-normal mt-6">{label}</div>
    </div>
  );
};

export const Stats = () => {
  const stats = [
    { number: '160+', label: 'Completed Projects' },
    { number: '6L+', label: 'Sq.ft Area' },
    { number: '600+', label: 'Happy Families' },
    { number: '10+', label: 'Ongoing Projects' }
  ];

  return (
    <section className="max-w-[1530px] mx-auto mt-[120px] px-5 max-md:mt-10">
      <div className="min-h-[520px] w-[765px] max-w-[765px] max-md:max-w-full">
        <h2 
          className="text-[rgba(40,45,64,1)] text-[40px] font-bold leading-[48px] max-md:max-w-full"
          data-aos="fade-right"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
          <span className="font-semibold italic text-[rgba(217,37,70,1)]">
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </h2>

        <div className="flex w-full items-center gap-[30px] text-[rgba(40,45,64,1)] flex-wrap mt-8 max-md:max-w-full">
          {stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} delay={200 + (index * 100)} />
          ))}
        </div>

        <div 
          className="flex w-full flex-col items-stretch text-base font-normal justify-center mt-8 max-md:max-w-full"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p className="text-neutral-800 leading-6 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <button 
            className="bg-[rgba(217,37,70,1)] flex items-center justify-center text-white gap-2.5 mt-6 px-4 py-3 rounded-[58px] btn-hover-red"
            style={{ width: 'fit-content' }}
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <span>Step Into Our World</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex w-full items-center gap-[30px] justify-center flex-wrap mt-10 max-md:max-w-full">
        {[1, 2, 3].map((index) => (
          <div 
            key={index}
            className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full"
            data-aos="fade-up"
            data-aos-delay={200 + (index * 200)}
          >
            <img
              src={`https://images.unsplash.com/photo-148671844${index + 1}-163732cd154${index + 3}?w=500&h=380&fit=crop`}
              alt={`Stats Image ${index + 1}`}
              className="aspect-[1.32] object-cover w-full rounded-3xl max-md:max-w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
