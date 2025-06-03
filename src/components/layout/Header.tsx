
import React, { useState, useEffect } from 'react';
import { X, Phone, ChevronDown, ArrowRight } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

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

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Header Container */}
      <div className={`w-full transition-all duration-300 ${
        isFixed 
          ? 'fixed top-0 left-0 right-0 z-50 bg-[rgba(40,45,64,0.95)] backdrop-blur-sm shadow-lg animate-slide-in-down' 
          : 'relative'
      }`}>
        <div className={`max-w-7xl mx-auto transition-all duration-300 ${
          isFixed ? 'px-5 py-4' : 'px-5 py-0'
        }`}>
          <header className="flex w-full items-center justify-between">
            {/* Logo - Left aligned */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/4efcacee27e527131b287a95ff8236af05b22057?placeholderIfAbsent=true"
              alt="JKB Housing Logo"
              className={`aspect-[1.94] object-contain transition-all duration-300 ${
                isFixed ? 'w-[150px]' : 'w-[190px]'
              } max-md:w-[100px]`}
            />
            
            {/* Desktop Navigation - Center */}
            <nav className="hidden md:flex items-center gap-[40px_52px] text-base text-white font-normal text-center font-acumin">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 whitespace-nowrap transition-colors duration-300 hover:text-[rgba(217,37,70,1)] cursor-pointer">
                  <span>Projects</span>
                  <ChevronDown className="w-6 h-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 rounded-lg shadow-lg min-w-[180px]">
                  <DropdownMenuItem 
                    onClick={() => scrollToSection('projects')}
                    className="text-[rgba(40,45,64,1)] hover:bg-[rgba(217,37,70,0.1)] hover:text-[rgba(217,37,70,1)] cursor-pointer px-4 py-2 transition-colors duration-300 font-acumin"
                  >
                    Ongoing
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => scrollToSection('projects')}
                    className="text-[rgba(40,45,64,1)] hover:bg-[rgba(217,37,70,0.1)] hover:text-[rgba(217,37,70,1)] cursor-pointer px-4 py-2 transition-colors duration-300 font-acumin"
                  >
                    Completed
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => scrollToSection('projects')}
                    className="text-[rgba(40,45,64,1)] hover:bg-[rgba(217,37,70,0.1)] hover:text-[rgba(217,37,70,1)] cursor-pointer px-4 py-2 transition-colors duration-300 font-acumin"
                  >
                    Future Landmark
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="#" className="transition-colors duration-300 hover:text-[rgba(217,37,70,1)] relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[rgba(217,37,70,1)] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Joint Venture</a>
              <a href="#" className="transition-colors duration-300 hover:text-[rgba(217,37,70,1)] relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[rgba(217,37,70,1)] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">JKB Care</a>
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center gap-6">
              {/* Desktop Phone & Enquire Buttons */}
              <div className="hidden md:flex items-center gap-6 text-base font-normal font-acumin">
                <a href="tel:9710397104" className="bg-white border flex items-center gap-2.5 text-[rgba(217,37,70,1)] justify-center px-6 py-3 rounded-[98px] border-[rgba(217,37,70,1)] border-solid btn-hover-outline hover:bg-[rgba(217,37,70,1)] hover:text-white">
                  <Phone className="w-6 h-6" />
                  <span>97103 97104</span>
                </a>
                <button className="bg-[rgba(217,37,70,1)] min-h-12 gap-2.5 text-white px-4 py-3 rounded-[98px] btn-hover-red">
                  Enquire Now
                </button>
              </div>
              
              {/* Hamburger Menu Button - Right aligned */}
              <button 
                className="transition-all duration-300 hover:scale-105 z-[60] relative"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <div className="bg-[rgba(217,37,70,1)] border flex min-h-[50px] items-center justify-center w-[50px] h-[50px] rounded-[25px] border-[rgba(217,37,70,1)] border-solid btn-hover-red">
                    <X className="w-8 h-8 text-white" />
                  </div>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" fill="#D92546"/>
                    <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" stroke="#D92546"/>
                    <path d="M13 25H37M13 33H37M21 17H37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </div>
          </header>
        </div>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Slide-in Menu - Full height, max width 300px */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-[300px] bg-[rgba(40,45,64,1)] z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'animate-slide-in-right' : 'translate-x-full'
      }`}>
        <div className="pt-20 px-6 pb-6 h-full flex flex-col overflow-y-auto">
          {/* Micro Nav */}
          <div className="border-b border-gray-600 pb-6 mb-6">
            <a href="tel:9710397104" className="bg-white border flex items-center gap-2.5 text-[rgba(217,37,70,1)] justify-center px-4 py-3 rounded-[98px] border-[rgba(217,37,70,1)] border-solid mb-4 btn-hover-outline hover:bg-[rgba(217,37,70,1)] hover:text-white font-acumin">
              <Phone className="w-5 h-5" />
              <span>97103 97104</span>
            </a>
            <button className="w-full bg-[rgba(217,37,70,1)] flex items-center justify-center text-white gap-2.5 px-4 py-3 rounded-[98px] btn-hover-red font-acumin">
              <span>Enquire Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-6 text-white font-acumin">
            <div className="flex items-center gap-2 text-lg font-medium cursor-pointer transition-colors duration-300 hover:text-[rgba(217,37,70,1)] max-md:text-[26px] max-md:leading-[34px]">
              <span>Projects</span>
              <ChevronDown className="w-5 h-5" />
            </div>
            <a href="#" className="text-lg font-medium transition-colors duration-300 hover:text-[rgba(217,37,70,1)] max-md:text-[26px] max-md:leading-[34px]">Joint Venture</a>
            <a href="#" className="text-lg font-medium transition-colors duration-300 hover:text-[rgba(217,37,70,1)] max-md:text-[26px] max-md:leading-[34px]">JKB Care</a>
          </nav>
        </div>
      </div>
    </>
  );
};
