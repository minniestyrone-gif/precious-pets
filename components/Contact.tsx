import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    petName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Thanks ${formState.name}! We can't wait to meet ${formState.petName || 'your pet'}!`);
    setFormState({ name: '', petName: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="scroll-mt-32 py-24 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full border border-purple-200 mb-6">
              <Sparkles size={16} className="text-purple-500" />
              <span className="text-sm font-bold tracking-wide text-purple-700">GET IN TOUCH</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Ready to schedule a <br/>
            <span className="text-pink-500">Meet & Greet?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-10 font-medium leading-relaxed">
            We'd love to hear from you! Fill out the form or reach out directly to discuss your pet's needs.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-bold uppercase">Call or Text</p>
                <a href="tel:0740749397" className="text-lg font-bold text-gray-800 hover:text-green-600 transition-colors">0740749397</a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-bold uppercase">Email Us</p>
                <a href="mailto:hello@preciouspets.com" className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors">hello@preciouspets.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-bold uppercase">Area Covered</p>
                <p className="text-lg font-bold text-gray-800">Local Neighborhoods & Surrounds</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl border-2 border-pet-purple/20 p-8 md:p-10 relative overflow-hidden">
           {/* Decorative corner */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-pet-yellow rounded-bl-[100px] opacity-30 -mr-8 -mt-8 pointer-events-none"></div>

           <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pet-purple focus:bg-white transition-all placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Pet's Name</label>
                  <input 
                    type="text" 
                    value={formState.petName}
                    onChange={e => setFormState({...formState, petName: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pet-purple focus:bg-white transition-all placeholder-gray-400"
                    placeholder="Fluffy"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pet-purple focus:bg-white transition-all placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">How can we help?</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pet-purple focus:bg-white transition-all placeholder-gray-400 resize-none"
                  placeholder="Tell us about your pets and what dates you need..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 mt-4"
              >
                Send Message
                <Send size={20} />
              </button>
           </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;