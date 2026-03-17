import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { contactInfo } from '../mockData';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#3D0C0A] via-[#5C1F1B] to-[#6B2623] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center animate-pulse">
            <MessageCircle size={32} className="text-[#3D0C0A]" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para iniciar seu projeto?
        </h2>
        <p className="text-xl text-gray-200 mb-10 leading-relaxed">
          Entre em contato e descubra como podemos transformar seu projeto em realidade com soluções inteligentes, qualidade comprovada e atendimento especializado. Tudo que você precisa, com a excelência que só nós oferecemos!
        </p>
        <a
          href={`https://wa.me/${contactInfo.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button 
            size="lg" 
            className="bg-white text-[#3D0C0A] hover:bg-gray-100 px-10 py-7 text-xl font-bold rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            Entre em Contato
            <ArrowRight className="ml-2" size={24} />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;