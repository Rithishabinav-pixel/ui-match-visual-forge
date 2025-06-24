
import React from 'react';
import { ArrowRight } from 'lucide-react';

const QualityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="81" viewBox="0 0 80 81" fill="none">
    <path d="M55.6664 63.7667H24.333C22.933 63.7667 21.3664 62.6667 20.8997 61.3334L7.09969 22.7334C5.13302 17.2 7.43302 15.5 12.1664 18.9L25.1664 28.2C27.333 29.7 29.7997 28.9334 30.733 26.5L36.5997 10.8667C38.4664 5.8667 41.5664 5.8667 43.433 10.8667L49.2997 26.5C50.233 28.9334 52.6997 29.7 54.833 28.2L67.033 19.5C72.233 15.7667 74.733 17.6667 72.5997 23.7L59.133 61.4C58.633 62.6667 57.0664 63.7667 55.6664 63.7667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.667 73.8335H58.3337" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M31.667 47.1665H48.3337" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ComplianceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="81" viewBox="0 0 80 81" fill="none">
    <path d="M40 73.8335C58.4095 73.8335 73.3333 58.9097 73.3333 40.5002C73.3333 22.0907 58.4095 7.16683 40 7.16683C21.5905 7.16683 6.66666 22.0907 6.66666 40.5002C6.66666 58.9097 21.5905 73.8335 40 73.8335Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M25.833 40.5L35.833 50.5L55.833 30.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TimingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="81" viewBox="0 0 80 81" fill="none">
    <path d="M40 73.8335C58.4095 73.8335 73.3333 58.9097 73.3333 40.5002C73.3333 22.0907 58.4095 7.16683 40 7.16683C21.5905 7.16683 6.66666 22.0907 6.66666 40.5002C6.66666 58.9097 21.5905 73.8335 40 73.8335Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 23.8335V40.5002L50 50.5002" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CustomerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="81" viewBox="0 0 80 81" fill="none">
    <path d="M26.6667 70.5002V63.8335C26.6667 57.3085 31.8084 52.1668 38.3334 52.1668H41.6667C48.1917 52.1668 53.3334 57.3085 53.3334 63.8335V70.5002" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 41.8335C46.4434 41.8335 51.6667 36.6102 51.6667 30.1668C51.6667 23.7235 46.4434 18.5002 40 18.5002C33.5567 18.5002 28.3334 23.7235 28.3334 30.1668C28.3334 36.6102 33.5567 41.8335 40 41.8335Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.3334 70.5002V63.8335C13.3334 60.5002 15.3334 57.6668 18.3334 56.5002" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M66.6666 70.5002V63.8335C66.6666 60.5002 64.6666 57.6668 61.6666 56.5002" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const WhyChooseUs = () => {
  const features = [
    {
      title: "Premium Quality Construction",
      description: "Experience unmatched construction quality with premium materials, modern design, and attention to detail. Every JKB home is built to last generations with superior craftsmanship.",
      icon: <QualityIcon />
    },
    {
      title: "CMDA & RERA Approved",
      description: "All our projects are fully CMDA and RERA approved, ensuring complete legal transparency, clear documentation, and hassle-free ownership for absolute peace of mind.",
      icon: <ComplianceIcon />
    },
    {
      title: "Guaranteed On-Time Delivery",
      description: "With 15+ years of proven track record, we guarantee on-time project completion. No delays, no excuses - just your dream home delivered exactly when promised.",
      icon: <TimingIcon />
    },
    {
      title: "Customer-First Approach",
      description: "Join 600+ happy families who chose JKB Housing. Our customer-first approach ensures personalized service, transparent communication, and lifetime support for every homeowner.",
      icon: <CustomerIcon />
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
            Why Choose JKB Housing for Your{" "}
            <span className="font-semibold italic text-[rgba(217,37,70,1)]">
              Dream Home in Chennai?
            </span>
          </h2>
          
          <div 
            className="flex w-full flex-col items-stretch text-base font-normal justify-center mt-8 max-md:max-w-full"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="leading-6 text-center max-md:max-w-full">
              With over 15 years of excellence in Chennai's real estate market, JKB Housing stands as your most trusted partner for premium residential living. We combine quality construction, legal compliance, and customer satisfaction to deliver homes that exceed expectations.
            </p>
            
            <button 
              className="bg-[rgba(217,37,70,1)] mx-auto flex items-center justify-center gap-2.5 mt-6 px-4 py-3 rounded-[58px] w-fit transition-all duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <span>Schedule Your Site Visit</span>
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
              {feature.icon}
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
