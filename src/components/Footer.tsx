import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
                            <img className='w-24 h-24'  src='/images/file_0000000013a861f5b23b8497de71ded7-removebg-preview.png'  alt="" />
              <div className='mb-6'>
                <h3 className="text-xl font-bold">JAK Tech</h3>
                <p className="text-sm text-gray-400">Now for the future</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Especializada em soluções tecnológicas inovadoras. Conectamos o presente ao futuro 
              através da tecnologia, oferecendo serviços completos em software, hardware e 
              infraestrutura de redes.
            </p>
            <p className="text-blue-400 font-medium">now for the future</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {[
                'Desenvolvimento Web',
                'Sistemas de Gestão',
                'Montagem de Hardware',
                'Reparação de PCs',
                'Infraestrutura de Redes',
                'Suporte Técnico'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">geral.jaktech@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300 text-sm">+244 945 530 644</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300 text-sm">Angola</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 JAK Tech. Todos os direitos reservados.
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;