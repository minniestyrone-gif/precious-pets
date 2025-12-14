import React from 'react';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-4 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
                <div className="flex items-center gap-2">
                    <span className="text-3xl font-display font-bold text-gray-800">
                    Precious<span className="text-pink-500">Pets</span>
                    </span>
                    <span className="text-2xl">🐾</span>
                </div>
                <p className="text-gray-500 text-lg max-w-sm">
                    Professional pet sitting services tailored to your needs. Big or small, we love them all.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110">
                        <Facebook size={22} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300 hover:scale-110">
                        <Instagram size={22} />
                    </a>
                     <a href="tel:0740749397" className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110">
                        <Phone size={22} />
                    </a>
                </div>
            </div>

            <div className="col-span-1 md:col-span-2">
                <h4 className="font-bold text-gray-900 mb-8 font-display text-2xl">Contact Us</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <a href="tel:0740749397" className="flex items-center gap-4 group p-3 -ml-3 rounded-2xl hover:bg-gray-50 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 shadow-sm">
                             <Phone size={20} />
                        </div>
                        <span className="text-lg text-gray-600 font-medium group-hover:text-gray-900 transition-colors">0740749397</span>
                    </a>
                    
                    <a href="#" className="flex items-center gap-4 group p-3 -ml-3 rounded-2xl hover:bg-gray-50 transition-colors">
                         <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                            <Facebook size={20} />
                        </div>
                        <span className="text-lg text-gray-600 font-medium group-hover:text-gray-900 transition-colors">Precious Pets</span>
                    </a>

                    <a href="#" className="flex items-center gap-4 group p-3 -ml-3 rounded-2xl hover:bg-gray-50 transition-colors sm:col-span-2">
                         <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                            <Instagram size={20} />
                        </div>
                        <span className="text-lg text-gray-600 font-medium group-hover:text-gray-900 transition-colors">precious_pets_petsitting</span>
                    </a>
                </div>
            </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 Precious Pets. All rights reserved.</p>
            <div className="flex gap-8">
                <a href="#" className="hover:text-gray-600">Privacy Policy</a>
                <a href="#" className="hover:text-gray-600">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;