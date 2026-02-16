
import React from 'react';
import { DOCTOR_NAME, SPECIALTY } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 -skew-x-12 transform translate-x-20 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 leading-tight">
            Transforma tu <span className="text-blue-600">Salud</span>, Controla tu Peso.
          </h1>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h2 className="text-3xl font-bold text-gray-900">{DOCTOR_NAME}</h2>
            <p className="text-xl text-gray-600 font-medium">{SPECIALTY}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="https://wa.me/526141234567?text=Hola%20Dr.%20Contreras,%20me%20gustaría%20agendar%20una%20cita%20para%20control%20de%20peso."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.89-11.891 11.89-2.003 0-3.976-.505-5.724-1.465l-6.269 1.684zm6.736-4.032c1.455.863 3.102 1.321 4.793 1.321 5.176 0 9.389-4.213 9.389-9.389 0-2.507-.977-4.864-2.753-6.64-1.775-1.776-4.131-2.753-6.637-2.753-5.176 0-9.39 4.214-9.39 9.389 0 1.778.489 3.509 1.413 5.02l-.936 3.42 3.51-.942zm9.273-5.599c-.255-.127-1.51-.745-1.744-.829-.234-.085-.403-.127-.573.127-.171.255-.658.829-.806 1-.149.171-.297.191-.552.063-.255-.127-1.077-.398-2.051-1.267-.759-.677-1.272-1.513-1.421-1.768-.149-.255-.016-.393.111-.52.114-.114.255-.297.382-.446.127-.149.17-.255.255-.425.085-.17.042-.319-.021-.446-.063-.127-.573-1.381-.786-1.891-.208-.496-.419-.427-.573-.435-.149-.008-.319-.009-.489-.009-.17 0-.446.063-.679.319-.234.255-.892.871-.892 2.124 0 1.253.913 2.463 1.041 2.633.127.17 1.796 2.743 4.35 3.843.607.262 1.082.418 1.451.535.61.194 1.166.167 1.605.101.49-.074 1.51-.617 1.722-1.211.213-.594.213-1.104.149-1.211-.063-.106-.234-.17-.489-.297z"/></svg>
              WhatsApp
            </a>
            <a 
              href="tel:6144398604"
              className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
            >
              📞 614 439 8604
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800" 
            alt="Dr. Carlos Emiliano Contreras Chong" 
            className="relative rounded-3xl shadow-2xl border-4 border-white z-10 w-full object-cover aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
