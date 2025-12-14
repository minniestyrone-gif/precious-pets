import React from 'react';
import { Dog, Home, Sprout, Cat } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, tag, stat, bgColor, textColor, icon }) => (
  <div className={`p-8 rounded-[2rem] ${bgColor} flex flex-col justify-between h-96 relative group overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>
    
    {/* Decorative Circle */}
    <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white opacity-20 group-hover:scale-150 transition-transform duration-500 ease-in-out"></div>

    <div className="relative z-10">
      <div className="mb-6 flex justify-between items-start">
        <span className={`text-xs font-bold tracking-wider uppercase ${textColor} opacity-60`}>
          {tag}
        </span>
        <div className={`p-3 rounded-2xl bg-white/30 backdrop-blur-sm ${textColor}`}>
            {icon}
        </div>
      </div>
      
      <h3 className={`text-3xl font-display font-bold mb-4 ${textColor}`}>
        {title}
      </h3>
      
      <p className={`${textColor} opacity-80 font-medium leading-relaxed`}>
        {description}
      </p>
    </div>

    <div className="relative z-10 mt-auto">
      <div className={`text-sm mb-1 opacity-60 ${textColor}`}>
        Available Services
      </div>
      <div className="flex items-end justify-between">
        <span className={`text-2xl font-bold font-display ${textColor}`}>
          {stat}
        </span>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: "Active Adventures",
      description: "Energetic dog walking for pups who need to burn off steam. We explore local parks and trails.",
      tag: "Dog Walking",
      stat: "30-60 Mins",
      bgColor: "bg-[#71E3B3]", // Mint green from image 1 approx
      textColor: "text-[#1a5740]",
      icon: <Dog size={24} />
    },
    {
      title: "Home Comforts",
      description: "Overnight house sitting so your pets can stay in their safe, familiar environment while you're away.",
      tag: "House Sitting",
      stat: "Overnight",
      bgColor: "bg-[#1A1A1A]", // Black card from image 1
      textColor: "text-white",
      icon: <Home size={24} />
    },
    {
      title: "Pop-in Visits",
      description: "Quick visits for feeding, litter changing, playing, and cuddles. Perfect for cats and small pets.",
      tag: "Daily Visits",
      stat: "1-3 Visits/Day",
      bgColor: "bg-[#D4C4FF]", // Purple card
      textColor: "text-[#4B3B8B]",
      icon: <Cat size={24} />
    },
    {
      title: "Special Care",
      description: "From puppy whelping assistance to plant watering. We care for the little things too.",
      tag: "Extra Help",
      stat: "Custom",
      bgColor: "bg-[#FFF4C4]", // Yellow card
      textColor: "text-[#8B7B2B]",
      icon: <Sprout size={24} />
    }
  ];

  return (
    <section id="services" className="py-24 px-4 md:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-lg">
                Whether you need a quick check-in or a full overnight stay, we have a plan for every pet parent.
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;