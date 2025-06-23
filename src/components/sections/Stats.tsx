
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';
import card1 from '@/assets/card1.png';
import card2 from '@/assets/card2.png';
import card3 from '@/assets/card3.png';

const cards = [card1, card2, card3];

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
      className="self-stretch flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto max-md:basis-[calc(50%-15px)] max-md:min-w-[calc(50%-15px)]"
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
    { number: '160+', label: 'CMDA & RERA Approved Projects' },
    { number: '6L+', label: 'Sq.ft Premium Living Space' },
    { number: '600+', label: 'Happy Families in Chennai' },
    { number: '10+', label: 'Ongoing Premium Developments' }
  ];

  return (
    <section className="max-w-[1530px] mx-auto mt-[120px] px-5 max-md:mt-10">
      <div className="min-h-[520px] w-[765px] max-w-[765px] max-md:max-w-full">
        <h2 
          className="text-[rgba(40,45,64,1)] text-[40px] font-bold leading-[48px] max-md:max-w-full"
          data-aos="fade-right"
        >
          Chennai's Most Trusted Builder for{" "}
          <span className="font-semibold italic text-[rgba(217,37,70,1)]">
            Quality Homes & Unmatched Excellence
          </span>
        </h2>

        <div className="flex w-full items-center gap-[30px] text-[rgba(40,45,64,1)] flex-wrap mt-8 max-md:max-w-full max-md:gap-[15px]">
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
            At JKB Housing, we specialize in delivering premium 2BHK and 3BHK flats across Chennai's prime locations. Our commitment to quality construction, legal transparency, and customer satisfaction has made us the preferred choice for homebuyers seeking CMDA & RERA approved properties with modern amenities and timely delivery.
          </p>
          
          <button 
            className="bg-[rgba(217,37,70,1)] flex items-center justify-center text-white gap-2.5 mt-6 px-4 py-3 rounded-[58px] btn-hover-red"
            style={{ width: 'fit-content' }}
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <span>Discover Our Premium Projects</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex w-full items-center gap-[30px] justify-center flex-wrap mt-10 max-md:max-w-full">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full"
            data-aos="fade-up"
            data-aos-delay={200 + (index * 200)}
          >
            <img
              src={card}
              alt={`JKB Housing Premium Project ${index + 1} - Quality Construction in Chennai`}
              className="aspect-[1.32] object-cover w-full rounded-3xl max-md:max-w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
