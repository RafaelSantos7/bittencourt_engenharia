import React from 'react';
import { services } from '../mockData';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D0C0A] mb-6">
            Como Transformamos Realidades Através da Engenharia
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Na nossa empresa de engenharia civil, construímos mais que estruturas criamos espaços que inspiram e melhoram vidas. Com projetos inteligentes, técnicas precisas e compromisso sustentável, moldamos cidades e lares com excelência. Cada obra nossa carrega um propósito: unir funcionalidade e legado, tijolo por tijolo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D0C0A]/90 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/servicos">
            <Button 
              size="lg" 
              className="bg-[#6B2623] hover:bg-[#8B3330] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Veja Mais
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;