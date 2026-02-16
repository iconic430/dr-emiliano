
import React from 'react';
import { PHONE_NUMBER, LOCATION, ADDRESS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-blue-900 text-white relative overflow-hidden">
      {/* Texture bg */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Agenda tu Consulta Hoy</h2>
              <p className="text-blue-200 text-lg">Inicia tu camino hacia un peso saludable y una vida plena con supervisión médica experta.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-white/20 transition-all">📍</div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-blue-300 font-bold">Ubicación</p>
                  <p className="text-xl font-medium">{LOCATION}</p>
                  <p className="text-blue-200 opacity-80">{ADDRESS}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-white/20 transition-all">📞</div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-blue-300 font-bold">Teléfono Directo</p>
                  <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-2xl font-bold hover:text-blue-300 transition-colors">{PHONE_NUMBER}</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-white/20 transition-all">⚖️</div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-blue-300 font-bold">Especialidad</p>
                  <p className="text-xl">Manejo Clínico del Sobrepeso</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-3xl text-gray-800 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Envíame un Mensaje</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre Completo</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Juan Pérez" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Teléfono</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="614 123 4567" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Motivo</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-blue-500 transition-all">
                    <option>Control de Peso</option>
                    <option>Diabetes / Glucosa</option>
                    <option>Chequeo General</option>
                    <option>Otro</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Mensaje (opcional)</label>
                <textarea className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-blue-500 transition-all h-32" placeholder="Cuéntanos brevemente tu caso..."></textarea>
              </div>
              <button 
                className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg active:scale-95"
                onClick={() => alert('¡Gracias! Tu mensaje ha sido enviado simbólicamente.')}
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
