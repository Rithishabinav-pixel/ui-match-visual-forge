import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown, ArrowRight } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/4efcacee27e527131b287a95ff8236af05b22057?placeholderIfAbsent=true"
        alt="JKB Housing Logo"
        className="aspect-[1.94] object-contain w-[190px] self-stretch shrink-0 my-auto"
      />
      
      <nav className={`self-stretch flex min-w-60 items-center gap-[40px_52px] text-base text-white font-normal text-center my-auto ${isMenuOpen ? 'flex' : 'hidden md:flex'}`}>
        <div className="self-stretch flex items-center gap-2 whitespace-nowrap my-auto">
          <span className="self-stretch my-auto">Projects</span>
          <ChevronDown className="w-6 h-6" />
        </div>
        <a href="#" className="self-stretch my-auto">Joint Venture</a>
        <a href="#" className="self-stretch my-auto">JKB Care</a>
      </nav>

      <div className="self-stretch flex min-w-60 gap-[29px] my-auto">
        <div className="flex min-w-60 items-center gap-6 text-base font-normal justify-center">
          <a href="tel:9710397104" className="bg-white border self-stretch flex items-center gap-2.5 text-[rgba(217,37,70,1)] justify-center my-auto px-6 py-3 rounded-[98px] border-[rgba(217,37,70,1)] border-solid max-md:px-5">
            <Phone className="w-6 h-6" />
            <span>97103 97104</span>
          </a>
          <button className="self-stretch bg-[rgba(217,37,70,1)] min-h-12 gap-2.5 text-white my-auto px-4 py-3 rounded-[98px]">
            Enquire Now
          </button>
        </div>
        
        <button 
          className="bg-[rgba(217,37,70,1)] border flex min-h-[50px] items-center gap-2.5 w-[50px] h-[50px] p-[9px] rounded-[25px] border-[rgba(217,37,70,1)] border-solid md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
        </button>
      </div>
    </header>
  );
};
