import React, { useEffect, useRef, useState } from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  const values = [
    {
      icon: Target,
      title: 'Foco no Cliente',
      description: 'Soluções personalizadas que atendem às necessidades específicas de cada cliente.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Utilizamos as mais recentes tecnologias para criar soluções eficientes e modernas.'
    },
    {
      icon: Users,
      title: 'Trabalho em Equipa',
      description: 'Colaboramos estreitamente com os nossos clientes para garantir o sucesso dos projetos.'
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Comprometemo-nos com a excelência em todos os serviços que prestamos.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">JAK Tech</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A JAK Tech é uma empresa especializada em soluções tecnológicas inovadoras, 
              dedicada a conectar o presente ao futuro através da tecnologia. Com uma equipa 
              experiente e apaixonada pela inovação, oferecemos serviços completos em software, 
              hardware e infraestrutura de redes.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A nossa missão é transformar ideias em realidade digital, proporcionando aos 
              nossos clientes as ferramentas necessárias para prosperar na era digital.
              Oferecendo soluções tecnológicas de alta qualidade, que garantam desempenho, segurança e confiabilidade para empresas de todos os portes e para famílias que precisam de suporte tecnológico no dia a dia.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">A Nossa Visão</h3>
              <p className="text-gray-700">
                Ser reconhecida como uma referência em soluções tecnológicas em Angola e além, destacando-se pela seriedade, competência e proximidade com o cliente.
              </p>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        
      </div>
    </section>
  );
};

export default About;