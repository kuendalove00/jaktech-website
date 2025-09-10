import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap, Cpu, Network } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 animate-bounce delay-100">
          <Zap className="w-8 h-8 text-blue-400 opacity-60" />
        </div>
        <div className="absolute top-40 right-32 animate-bounce delay-300">
          <Cpu className="w-10 h-10 text-teal-400 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce delay-500">
          <Network className="w-6 h-6 text-purple-400 opacity-60" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo Recreation */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 mb-4 mx-auto relative">
                {/* Animated Spherical Pattern */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 animate-pulse">
                  {Array.from({ length: 64 }, (_, i) => (
                    <div
                      key={i}
                      className={`rounded-sm opacity-80 ${
                        Math.random() > 0.7 
                          ? ['bg-blue-500', 'bg-teal-500', 'bg-purple-500', 'bg-orange-500', 'bg-yellow-500'][Math.floor(Math.random() * 5)]
                          : 'bg-transparent'
                      }`}
                      style={{
                        animationDelay: `${i * 0.05}s`,
                        transform: `scale(${0.8 + Math.random() * 0.4})`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-wider">
                JAK <span className='text-sky-500'>TECH</span>
              </h1>
              <p className="text-lg text-orange-400 font-medium">Now for the future</p>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Soluções Tecnológicas Inovadoras
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Para o Futuro Digital
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Especializados em desenvolvimento de software, hardware e infraestrutura de redes. 
            Transformamos ideias em realidade digital com tecnologias modernas.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={scrollToServices}
            className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
          >
            <span>Descobrir Serviços</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stats */}
        
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;