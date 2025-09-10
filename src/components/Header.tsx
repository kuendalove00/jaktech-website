import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            
            <img className={`${!isScrolled ? 'w-24 h-20' : 'w-20 h-16' }`}  src={`${!isScrolled ? '/images/file_0000000013a861f5b23b8497de71ded7-removebg-preview.png' : '/images/20240910_193514-removebg-preview.png'} `} alt="" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-bold">
            {['Início', 'Serviços', 'Sobre', 'Contato'].map((item, index) => {
              const sectionIds = ['hero', 'services', 'about', 'contact'];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionIds[index])}
                  className={`transition-colors duration-300 hover:text-blue-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-lg mt-2 p-4 shadow-lg">
            {['Início', 'Serviços', 'Sobre', 'Contato'].map((item, index) => {
              const sectionIds = ['hero', 'services', 'about', 'contact'];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionIds[index])}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;