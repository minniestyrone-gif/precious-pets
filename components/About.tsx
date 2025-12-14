import React from 'react';
import { Heart, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-32 py-24 px-4 md:px-12 max-w-7xl mx-auto">
      {/* Main Card Container - Removed overflow-hidden to allow images to pop out */}
      <div className="bg-pet-dark rounded-[3rem] p-8 md:p-16 text-white relative">
        
        {/* Decorative Background Wrapper - Keeps gradients inside the rounded corners */}
        <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-16 relative z-10">
            <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                    <Heart size={16} className="text-pink-400 fill-pink-400" />
                    <span className="text-sm font-bold tracking-wide">ABOUT US</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                    We are a team of professional, experienced <span className="text-pink-400">animal lovers!</span>
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                    Fluffy, feathery, scaly, big or small? We love them ALL! 
                    Our goal is to provide peace of mind while you are away, knowing your precious pets are in capable, loving hands.
                </p>

                <div className="grid grid-cols-2 gap-4">
                    {['DBS Checked', 'Pet First Aid Trained', 'Fully Insured', 'Experienced Handlers'].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-400 shrink-0" />
                            <span className="font-medium text-gray-200">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center relative mt-8 md:mt-0">
                {/* Image Composition */}
                <div className="relative w-full max-w-md aspect-square">
                    
                    {/* Decorative Backing */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-[2rem] rotate-6 opacity-50 transition-transform duration-500 hover:rotate-12"></div>
                    
                    {/* Main Image - Two Dogs Running in Field */}
                    <img 
                        src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80" 
                        alt="Two energetic dogs running joyfully in an open green field" 
                        className="absolute inset-0 w-full h-full object-cover rounded-[2rem] border-4 border-white/20 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 z-10"
                    />

                    {/* Floating Info Card - Pop out effect */}
                    <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white text-gray-900 p-6 rounded-2xl shadow-xl max-w-[200px] animate-float z-30">
                        <p className="font-display font-bold text-xl mb-1">100+</p>
                        <p className="text-sm text-gray-500">Happy pets cared for in your local area.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;