import React from 'react';
import { ArrowRight } from 'lucide-react';
export const Testimonials = () => {
  const testimonials = [{
    content: "JKB and his Team are doing great Job in construction field. JKB Housing are trusted partners, reliable people, whom with you can invest. I have recently invested a property at JKB Paradise, Valasaravakkam. From the day I went to their office for enquiry, to till the day they hand overed key to me, it was pleasant experience. They understand your requirement well, ....",
    author: "Mr. Ramesh",
    project: "JKB Paradise A2",
    image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/a400e9697a5de28996e54d92d291ca76d8782ecc?placeholderIfAbsent=true"
  }, {
    content: "JKB and his Team are doing great Job in construction field. JKB Housing are trusted partners, reliable people, whom with you can invest. I have recently invested a property at JKB Paradise, Valasaravakkam. From the day I went to their office for enquiry, to till the day they hand overed key to me, it was pleasant experience. They understand your requirement well, ....",
    author: "Mr. Ramesh",
    project: "JKB Paradise A2",
    image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/446c5940036d1764d0c02e35f58d94b15c46784f?placeholderIfAbsent=true"
  }, {
    content: "JKB and his Team are doing great Job in construction field. JKB Housing are trusted partners, reliable people, whom with you can invest. I have recently invested a property at JKB Paradise, Valasaravakkam. From the day I went to their office for enquiry, to till the day they hand overed key to me, it was pleasant experience. They understand your requirement well, ....",
    author: "Mr. Ramesh",
    project: "JKB Paradise A2",
    image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/a400e9697a5de28996e54d92d291ca76d8782ecc?placeholderIfAbsent=true"
  }, {
    content: "JKB and his Team are doing great Job in construction field. JKB Housing are trusted partners, reliable people, whom with you can invest. I have recently invested a property at JKB Paradise, Valasaravakkam. From the day I went to their office for enquiry, to till the day they hand overed key to me, it was pleasant experience. They understand your requirement well, ....",
    author: "Mr. Ramesh",
    project: "JKB Paradise A2",
    image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/446c5940036d1764d0c02e35f58d94b15c46784f?placeholderIfAbsent=true"
  }];
  return <section className="bg-[rgba(242,242,242,1)] w-full overflow-hidden mt-[120px] py-20 max-md:mt-10">
      <div className="max-w-[1530px] mx-auto px-5">
        <div className="flex items-start justify-between gap-[30px] flex-wrap max-md:flex-col flex">
          <div className="flex min-w-60 min-h-[344px] flex-col items-stretch justify-center w-[730] max-md:max-w-full">
            <h2 className="text-[rgba(40,45,64,1)] text-[40px] font-bold leading-[48px] max-md:max-w-full">
              Lorem ipsum dolor sit amet,{" "}
              <span className="font-semibold italic text-[rgba(217,37,70,1)]">
                consectetur adipiscing
              </span>
            </h2>
            
            <div className="flex w-full flex-col items-stretch text-base font-normal mt-8 max-md:max-w-full">
              <p className="text-[rgba(40,45,64,1)] leading-6 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <button className="bg-[rgba(217,37,70,1)] flex items-center justify-center text-white gap-2.5 mt-6 px-4 py-3 rounded-[58px] w-fit">
                <span>Step Into Our World</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="min-w-60 w-[765px] max-md:max-w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => <div key={index} className="bg-[rgba(191,42,55,0.2)] flex flex-col items-stretch text-base font-normal justify-center px-[17px] py-6 rounded-2xl">
                  <div className="flex w-full flex-col items-stretch">
                    <p className="text-[rgba(40,45,64,1)] leading-6 text-sm">
                      {testimonial.content}{" "}
                      <span className="text-[rgba(217,37,70,1)]">Read more</span>
                    </p>
                    
                    <div className="flex items-center gap-3 text-sm font-semibold mt-4">
                      <img src={testimonial.image} alt={testimonial.author} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[rgba(40,45,64,1)]">{testimonial.author}</span>
                        <span className="text-[rgba(217,37,70,1)]">{testimonial.project}</span>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};