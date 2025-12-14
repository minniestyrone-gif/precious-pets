import React from 'react';
import { PawPrint, Heart, Bone } from 'lucide-react';

interface FloatingWidgetProps {
  type: 'review' | 'status' | 'love';
  className?: string;
  delay?: string;
}

const FloatingWidget: React.FC<FloatingWidgetProps> = ({ type, className = '', delay = '0s' }) => {
  const getContent = () => {
    switch (type) {
      case 'review':
        return (
          <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-xl border-2 border-pet-yellow transform hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
              <span className="text-xl">⭐</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold">New Review</p>
              <p className="text-sm font-display text-gray-800">"Best sitter ever!"</p>
            </div>
          </div>
        );
      case 'status':
        return (
          <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-xl border-2 border-pet-green transform hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <PawPrint size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold">Status Update</p>
              <p className="text-sm font-display text-gray-800">Walk Complete ✅</p>
            </div>
          </div>
        );
      case 'love':
        return (
          <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-xl border-2 border-pet-pink transform hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
              <Heart size={20} fill="currentColor" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold">Precious Pets</p>
              <p className="text-sm font-display text-gray-800">We love them ALL!</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div 
      className={`absolute ${className} animate-float`} 
      style={{ animationDelay: delay }}
    >
      {getContent()}
    </div>
  );
};

export default FloatingWidget;
