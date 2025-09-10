import React, { useEffect, useRef, useState } from 'react';
import { Monitor, HardDrive, Network, Code, Database, Settings, Wrench, Shield } from 'lucide-react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one
            setTimeout(() => {
              setVisibleCards(prev => [...prev, 0]);
            }, 100);
            setTimeout(() => {
              setVisibleCards(prev => [...prev, 1]);
            }, 300);
            setTimeout(() => {
              setVisibleCards(prev => [...prev, 2]);
            }, 500);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Monitor,
      title: 'Software',
      description: 'Soluções digitais completas para o seu negócio',
      features: [
        'Páginas web personalizadas',
        'Sistemas de gestão customizados',
        'Instalação e suporte a software',
        'Criação de bases de dados'
      ],
      color: 'from-blue-500 to-blue-600',
      iconColor: 'text-blue-500'
    },
    {
      icon: HardDrive,
      title: 'Hardware',
      description: 'Montagem e manutenção de equipamentos',
      features: [
        'Montagem de computadores',
        'Reparação de hardware',
        'Upgrade de componentes',
        'Diagnóstico técnico'
      ],
      color: 'from-teal-500 to-teal-600',
      iconColor: 'text-teal-500'
    },
    {
      icon: Network,
      title: 'Infraestrutura de Redes',
      description: 'Conectividade e infraestrutura profissional',
      features: [
        'Planeamento de redes',
        'Instalação de cabeamento',
        'Configuração de equipamentos',
        'Manutenção de infraestrutura'
      ],
      color: 'from-purple-500 to-purple-600',
      iconColor: 'text-purple-500'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções tecnológicas completas para empresas e particulares, 
            desde desenvolvimento de software até infraestrutura de redes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } hover:-translate-y-2`}
              >
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Code, title: 'Desenvolvimento', color: 'text-blue-500' },
            { icon: Database, title: 'Base de Dados', color: 'text-teal-500' },
            { icon: Settings, title: 'Configuração', color: 'text-purple-500' },
            { icon: Shield, title: 'Segurança', color: 'text-orange-500' }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <Icon className={`w-8 h-8 ${item.color} mx-auto mb-3`} />
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;