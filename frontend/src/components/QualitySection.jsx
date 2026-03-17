import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { contactInfo } from '../mockData';

const QualitySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-[#6B2623] rounded-lg flex items-center justify-center">
                <Shield className="text-white" size={28} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#3D0C0A]">
                Qualidade Iniguálavel
              </h2>
            </div>
            <h3 className="text-2xl font-semibold text-[#6B2623]">
              Precisão e Compromisso em Cada Obra
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Na nossa empresa, qualidade não é apenas um padrão — é a nossa assinatura. Combinamos expertise técnica, materiais certificados e processos rigorosos para entregar projetos que superam expectativas. Cada obra é executada com o mesmo comprometimento: durabilidade que resiste ao tempo e atendimento que conquista sua confiança. Aqui, excelência não é opcional – é a base de tudo que construímos.
            </p>
            <div className="pt-4">
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-[#6B2623] hover:bg-[#8B3330] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Entre em Contato
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
            </div>
          </div>
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
              alt="Qualidade em construção"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D0C0A]/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;