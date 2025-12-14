import React, { useState } from 'react';
import { Menu, X, PawPrint } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Manual offset calculation to ensure sticky header doesn't cover content
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full py-4 px-4 md:px-12 flex justify-between items-center z-[100] bg-[#FFFDF9]/95 backdrop-blur-md transition-all duration-300 shadow-sm border-b border-gray-100/50">
      <div className="group flex items-center gap-1 cursor-pointer select-none" onClick={scrollToTop}>
        <span className="text-3xl font-display font-bold text-gray-800 tracking-tight transition-colors group-hover:text-pink-500 duration-300">
          Precious<span className="text-pink-500 group-hover:text-gray-800 transition-colors duration-300">Pets</span>
        </span>
        
        {/* Animated Paws */}
        <div className="relative w-10 h-8 ml-1">
             <PawPrint 
                className="absolute bottom-0 left-0 w-5 h-5 text-pink-400 rotate-[-12deg] opacity-0 -translate-x-3 translate-y-2 scale-50 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out delay-75"
                fill="currentColor"
             />
             <PawPrint 
                className="absolute top-0 right-0 w-5 h-5 text-purple-400 rotate-[12deg] opacity-0 -translate-x-3 translate-y-2 scale-50 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out delay-300"
                fill="currentColor"
             />
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <a 
          href="#services" 
          onClick={(e) => scrollToSection(e, 'services')}
          className="text-gray-600 hover:text-pink-500 font-medium transition-colors cursor-pointer"
        >
          Services
        </a>
        <a 
          href="#about" 
          onClick={(e) => scrollToSection(e, 'about')}
          className="text-gray-600 hover:text-pink-500 font-medium transition-colors cursor-pointer"
        >
          About Us
        </a>
        <a 
          href="#testimonials" 
          onClick={(e) => scrollToSection(e, 'testimonials')}
          className="text-gray-600 hover:text-pink-500 font-medium transition-colors cursor-pointer"
        >
          Happy Tails
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl p-6 flex flex-col gap-4 md:hidden rounded-b-3xl border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-lg font-medium text-gray-700 py-2 border-b border-gray-50">Services</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-lg font-medium text-gray-700 py-2 border-b border-gray-50">About Us</a>
          <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="text-lg font-medium text-gray-700 py-2">Happy Tails</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;