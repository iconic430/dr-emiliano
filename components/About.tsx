
import React from 'react';
import { DOCTOR_NAME, SPECIALTY } from '../constants';

const About: React.FC = () => {
  return (
    <section id="especialista" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full -z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
               alt="Medicina Interna y Salud" 
               className="rounded-3xl shadow-2xl object-cover aspect-video"
             />
             <div className="absolute -bottom-8 -right-8 bg-blue-900 text-white p-8 rounded-3xl shadow-xl max-w-[250px]">
               <p className="text-4xl font-bold mb-2">+500</p>
               <p className="text-sm opacity-80 uppercase tracking-widest font-semibold">Vidas Transformadas</p>
             </div>
          </div>
          
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-5xl font-bold text-blue-900 leading-tight">{DOCTOR_NAME}</h2>
            <h3 className="text-2xl text-blue-600 font-semibold">{SPECIALTY}</h3>
            {/* Se han eliminado los datos y párrafos descriptivos anteriores */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
