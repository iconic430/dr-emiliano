
import React, { useState, useEffect } from 'react';
import { DOCTOR_NAME } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">C</div>
          <span className={`font-bold hidden md:block ${isScrolled ? 'text-blue-900' : 'text-blue-900'}`}>
            {DOCTOR_NAME}
          </span>
        </div>
        
        {/* Navegación eliminada según solicitud */}

        <a 
          href="#agendar" 
          className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg"
        >
          Agendar Cita
        </a>
      </div>
    </header>
  );
};

export default Header;
