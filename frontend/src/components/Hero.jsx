import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { contactInfo } from '../mockData';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1565862452829-e33c0b781ea3)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D0C0A]/95 via-[#3D0C0A]/85 to-[#3D0C0A]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Excelência em Engenharia Civil
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-200 font-light">
            Mais de 10 Anos Construindo o Futuro com Solidez e Inovação.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Projetos de alto padrão, expertise consolidada e compromisso com a qualidade para entregar obras que transcendem expectativas e desafios.
          </p>
          <div className="pt-6">
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-[#6B2623] hover:bg-[#8B3330] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Entre em Contato
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;