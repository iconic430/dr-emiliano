
import React from 'react';
import { DOCTOR_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-2xl">C</div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} {DOCTOR_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
