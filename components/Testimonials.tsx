import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialProps } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Sarah Jenkins",
      pet: "Barnaby (Golden Retriever)",
      text: "The team at Precious Pets is simply amazing. Barnaby gets so excited when he sees the van pull up!",
      image: "https://picsum.photos/100/100?random=1"
    },
    {
      name: "Mike Ross",
      pet: "Luna (Siamese Cat)",
      text: "I was nervous about leaving Luna for a week, but the daily updates and photos put my mind completely at ease.",
      image: "https://picsum.photos/100/100?random=2"
    },
    {
      name: "Emily Blunt",
      pet: "Coco (Parrot)",
      text: "It's hard to find sitters comfortable with birds. Precious Pets handled Coco beautifully. Highly recommended!",
      image: "https://picsum.photos/100/100?random=3"
    }
  ];

  const cardStyles = [
    { border: 'border-pet-pink', bgIcon: 'bg-pink-100', textIcon: 'text-pink-500', rotate: '-rotate-1', delay: '0s' },
    { border: 'border-pet-blue', bgIcon: 'bg-blue-100', textIcon: 'text-blue-500', rotate: 'rotate-2', delay: '2s' },
    { border: 'border-pet-yellow', bgIcon: 'bg-yellow-100', textIcon: 'text-yellow-600', rotate: '-rotate-1', delay: '1s' },
  ];

  return (
    <section id="testimonials" className="py-32 bg-[#FFFDF9] relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="text-center mb-20">
            <span className="inline-block py-2 px-4 rounded-full bg-pink-100 text-pink-600 text-sm font-bold mb-4 tracking-wide shadow-sm">
                TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                Happy Pets, Happy Owners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                Don't just take our word for it. Here's what our community has to say.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {testimonials.map((t, i) => {
                const style = cardStyles[i % cardStyles.length];
                return (
                    <div 
                        key={i} 
                        className={`animate-float group ${style.rotate} ${i === 1 ? 'md:mt-16' : ''}`}
                        style={{ animationDelay: style.delay }}
                    >
                        <div className={`bg-white p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${style.border} h-full flex flex-col relative`}>
                            
                            {/* Floating Quote Icon */}
                            <div className={`absolute -top-6 -right-4 w-14 h-14 rounded-full ${style.bgIcon} ${style.textIcon} flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                                <Quote size={24} fill="currentColor" />
                            </div>

                            <div className="flex items-center gap-1 text-yellow-400 mb-6">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} fill="currentColor" size={20} className="drop-shadow-sm" />
                                ))}
                            </div>
                            
                            <p className="text-gray-600 font-medium text-lg italic leading-relaxed mb-8">
                                "{t.text}"
                            </p>
                            
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="relative">
                                    <div className={`absolute inset-0 ${style.bgIcon} rounded-full blur-md opacity-50`}></div>
                                    <img 
                                        src={t.image} 
                                        alt={t.name} 
                                        className="relative w-16 h-16 rounded-full object-cover border-4 border-white shadow-sm" 
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 font-display text-lg">{t.name}</h4>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">{t.pet}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;