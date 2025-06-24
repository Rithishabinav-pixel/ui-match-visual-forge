
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [{
    content: "JKB Housing delivered our dream home at JKB Paradise exactly as promised. Their transparent approach, quality construction, and timely delivery impressed us throughout the journey. The team was responsive to all our queries and made the entire home-buying process smooth and stress-free. We're proud homeowners today thanks to JKB's commitment to excellence.",
    author: "Mr. Ramesh Kumar",
    project: "JKB Paradise A2",
    image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/a400e9697a5de28996e54d92d291ca76d8782ecc?placeholderIfAbsent=true"
  }, {
    content: "Moving to JKB Green Homes was the best decision for our family. The eco-friendly features, spacious layouts, and excellent amenities make it perfect for modern living. JKB's after-sales service through the JKB Care app is outstanding - we get regular updates and instant support whenever needed.",
    author: "Mrs. Priya Sharma",
    project: "JKB Green Homes",
    image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/446c5940036d1764d0c02e35f58d94b15c46784f?placeholderIfAbsent=true"
  }, {
    content: "As first-time home buyers, we were nervous about the process. JKB Housing's team guided us every step of the way, explaining all details clearly. The quality of construction at JKB Elite Residences exceeded our expectations. Three years later, we still receive excellent maintenance support from their team.",
    author: "Mr. Arun Patel",
    project: "JKB Elite Residences",
    image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/a400e9697a5de28996e54d92d291ca76d8782ecc?placeholderIfAbsent=true"
  }, {
    content: "JKB Housing's commitment to customer satisfaction is remarkable. From the initial site visit to possession, everything was handled professionally. The strategic location of JKB Royal Heights near IT corridors and schools made it perfect for our family. Their transparent pricing with no hidden costs was refreshing.",
    author: "Dr. Kavitha Reddy",
    project: "JKB Royal Heights",
    image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/446c5940036d1764d0c02e35f58d94b15c46784f?placeholderIfAbsent=true"
  }];

  return (
    <section className="bg-[rgba(242,242,242,1)] w-full overflow-hidden mt-[120px] py-20 max-md:mt-16">
      <div className="max-w-[1530px] mx-auto px-5">
        <div className="flex items-start justify-between gap-[30px] flex-wrap max-xl:flex-col xl:flex-row">
          <div 
            className="flex min-w-60 min-h-[344px] flex-col items-stretch justify-center w-[695px] max-xl:max-w-full xl:w-[695px]"
            data-aos="fade-right"
          >
            <h2 className="text-[rgba(40,45,64,1)] text-[40px] font-bold leading-[48px] max-md:max-w-full font-montserrat">
              What Our Happy Homeowners{" "}
              <span className="font-semibold italic text-[rgba(217,37,70,1)]">
                Say About Us
              </span>
            </h2>
            
            <div className="flex w-full flex-col items-stretch text-base font-normal mt-8 max-md:max-w-full">
              <p className="text-[rgba(40,45,64,1)] leading-6 max-md:max-w-full font-acumin">
                Over 600 satisfied families have made JKB Housing their trusted partner in finding dream homes. From our transparent processes to quality construction and on-time delivery, discover why Chennai residents choose us for their most important investment. Read genuine testimonials from our community members who have experienced the JKB difference firsthand.
              </p>
              
              <button 
                className="bg-[rgba(217,37,70,1)] flex items-center justify-center text-white gap-2.5 mt-6 px-4 py-3 rounded-[58px] w-fit btn-hover-red font-acumin"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <span>Join Our Community</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div 
            className="min-w-60 w-[765px] max-xl:max-w-full xl:w-[765px]"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-[rgba(191,42,55,0.2)] flex flex-col items-stretch text-base font-normal justify-center px-[17px] py-6 rounded-2xl"
                  data-aos="fade-up"
                  data-aos-delay={300 + (index * 200)}
                >
                  <div className="flex w-full flex-col items-stretch">
                    <p className="text-[rgba(40,45,64,1)] leading-6 text-sm font-acumin">
                      {testimonial.content}{" "}
                      <span className="text-[rgba(217,37,70,1)]">Read more</span>
                    </p>
                    
                    <div className="flex items-center gap-3 text-sm font-semibold mt-4">
                      <img src={testimonial.image} alt={testimonial.author} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[rgba(40,45,64,1)] font-acumin">{testimonial.author}</span>
                        <span className="text-[rgba(217,37,70,1)] font-acumin">{testimonial.project}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
