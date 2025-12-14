import React from 'react';
import { ArrowRight, PawPrint } from 'lucide-react';
import FloatingWidget from './FloatingWidget';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      // Manual offset calculation to ensure sticky header doesn't cover content
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative pt-12 pb-32 px-4 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Widgets - positioned relative to container */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <FloatingWidget type="status" className="top-20 left-[10%]" delay="0s" />
        <FloatingWidget type="love" className="bottom-40 right-[15%]" delay="2s" />
        <FloatingWidget type="review" className="top-40 right-[5%]" delay="4s" />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl z-10">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">
          <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            🐾 Professional Pet Sitting Services
          </span>
        </div>
        
        <div className="group relative inline-block cursor-default">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Professional Care, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                Making Happy Pets a Reality.
              </span>
            </h1>

            {/* Animated Paws for Hero */}
            <div className="absolute -right-16 bottom-10 w-20 h-16 hidden md:block pointer-events-none">
                 <PawPrint 
                    className="absolute bottom-0 left-0 w-10 h-10 text-pink-400 rotate-[-12deg] opacity-0 -translate-x-4 translate-y-4 scale-50 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out delay-75"
                    fill="currentColor"
                 />
                 <PawPrint 
                    className="absolute top-0 right-0 w-10 h-10 text-purple-400 rotate-[12deg] opacity-0 -translate-x-4 translate-y-4 scale-50 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out delay-300"
                    fill="currentColor"
                 />
            </div>
        </div>
        
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          We are a team of professional, experienced animal lovers! 
          Fluffy, feathery, scaly, big or small? We love them ALL!
        </p>

        {/* Reach Out Button with Beam Effect */}
        <div className="flex items-center justify-center mt-8">
            <a 
              href="#contact" 
              onClick={scrollToContact}
              className="relative inline-flex h-16 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff00_0%,#d8b4fe_50%,#ffffff00_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-10 py-1 text-xl font-bold text-white backdrop-blur-3xl gap-2 z-10">
                Reach Out
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform text-purple-300" />
                </span>
            </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Trust Badges placeholder */}
            <div className="text-sm font-bold text-gray-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> Verified Walkers
            </div>
             <div className="text-sm font-bold text-gray-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Fully Insured
            </div>
             <div className="text-sm font-bold text-gray-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span> 5-Star Rated
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;