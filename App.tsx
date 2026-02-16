
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { TESTIMONIALS, FAQS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Testimonials Ticker */}
        <div className="bg-blue-50 py-10 overflow-hidden whitespace-nowrap border-y border-blue-100">
          <div className="flex animate-marquee gap-8 items-center px-4">
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="inline-flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-sm border border-blue-200">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-blue-900 font-medium italic">"{t.text}"</span>
                <span className="text-gray-400 font-bold">— {t.name}</span>
              </div>
            ))}
          </div>
        </div>

        <Services />
        <About />
        
        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer open:ring-2 open:ring-blue-500 transition-all">
                  <summary className="p-6 flex justify-between items-center font-bold text-gray-800 list-none">
                    {faq.question}
                    <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-50 bg-gray-50/50">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      
      {/* AI Bot for interactive guidance */}
      <AIAssistant />

      {/* Tailwind animation for marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: flex;
          width: fit-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default App;
