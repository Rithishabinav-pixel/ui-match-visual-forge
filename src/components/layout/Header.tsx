
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, ArrowRight } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsFixed(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full transition-all duration-300 ${
      isFixed 
        ? 'fixed top-0 left-0 right-0 z-50 bg-[rgba(40,45,64,0.95)] backdrop-blur-sm shadow-lg animate-slide-in-down px-5 py-4' 
        : 'relative'
    }`}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/4efcacee27e527131b287a95ff8236af05b22057?placeholderIfAbsent=true"
        alt="JKB Housing Logo"
        className={`aspect-[1.94] object-contain self-stretch shrink-0 my-auto transition-all duration-300 ${
          isFixed ? 'w-[150px]' : 'w-[190px]'
        }`}
      />
      
      <nav className={`self-stretch flex min-w-60 items-center gap-[40px_52px] text-base text-white font-normal text-center my-auto ${isMenuOpen ? 'flex' : 'hidden md:flex'}`}>
        <div className="self-stretch flex items-center gap-2 whitespace-nowrap my-auto transition-colors duration-300 hover:text-[rgba(217,37,70,1)] cursor-pointer">
          <span className="self-stretch my-auto">Projects</span>
          <ChevronDown className="w-6 h-6" />
        </div>
        <a href="#" className="self-stretch my-auto transition-colors duration-300 hover:text-[rgba(217,37,70,1)] relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[rgba(217,37,70,1)] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Joint Venture</a>
        <a href="#" className="self-stretch my-auto transition-colors duration-300 hover:text-[rgba(217,37,70,1)] relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[rgba(217,37,70,1)] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">JKB Care</a>
      </nav>

      <div className="self-stretch flex min-w-60 gap-[29px] my-auto">
        <div className="flex min-w-60 items-center gap-6 text-base font-normal justify-center">
          <a href="tel:9710397104" className="bg-white border self-stretch flex items-center gap-2.5 text-[rgba(217,37,70,1)] justify-center my-auto px-6 py-3 rounded-[98px] border-[rgba(217,37,70,1)] border-solid max-md:px-5 transition-all duration-300 hover:scale-105 hover:bg-[rgba(217,37,70,1)] hover:text-white">
            <Phone className="w-6 h-6" />
            <span>97103 97104</span>
          </a>
          <button className="self-stretch bg-[rgba(217,37,70,1)] min-h-12 gap-2.5 text-white my-auto px-4 py-3 rounded-[98px] transition-all duration-300 hover:scale-105 hover:bg-[rgba(197,27,60,1)]">
            Enquire Now
          </button>
        </div>
        
        <button 
          className="bg-[rgba(217,37,70,1)] border flex min-h-[50px] items-center gap-2.5 w-[50px] h-[50px] p-[9px] rounded-[25px] border-[rgba(217,37,70,1)] border-solid md:hidden transition-all duration-300 hover:scale-105 hover:bg-[rgba(197,27,60,1)]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
        </button>
      </div>
    </header>
  );
};
