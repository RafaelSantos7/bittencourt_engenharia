import React from 'react';
import { services } from '../mockData';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { contactInfo } from '../mockData';
import { 
  Building2, 
  Camera, 
  Hammer, 
  ClipboardCheck, 
  Ruler, 
  Zap, 
  Droplets, 
  Flame,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Servicos = () => {
  const serviceDetails = [
    {
      icon: Building2,
      title: 'Projetos Arquitetônicos',
      items: ['Plantas baixas', 'Fachadas', 'Cortes e detalhamentos', 'Projetos de reforma']
    },
    {
      icon: Ruler,
      title: 'Cálculos Estruturais',
      items: ['Concreto armado', 'Estruturas metálicas', 'Fundações', 'Laudos estruturais']
    },
    {
      icon: Zap,
      title: 'Instalações Elétricas',
      items: ['Projeto elétrico predial', 'Dimensionamento de carga', 'Sistema de automação', 'Laudo elétrico']
    },
    {
      icon: Droplets,
      title: 'Instalações Hidrossanitárias',
      items: ['Água fria e quente', 'Esgoto sanitário', 'Águas pluviais', 'Redes de gás']
    },
    {
      icon: Flame,
      title: 'Combate a Incêndio',
      items: ['Sistema de sprinklers', 'Extintores', 'Hidrantes', 'Alarme de incêndio']
    },
    {
      icon: Camera,
      title: 'Vistoria com Drone',
      items: ['Inspeção de fachadas', 'Análise de telhados', 'Vistoria estrutural', 'Mapeamento aéreo']
    },
    {
      icon: Hammer,
      title: 'Reformas e Construções',
      items: ['Reformas internas', 'Revitalização de fachadas', 'Impermeabilização', 'Construções pequeno porte']
    },
    {
      icon: ClipboardCheck,
      title: 'Serviços Complementares',
      items: ['Laudos técnicos', 'Assessoria técnica', 'Gerenciamento de obras', 'Regularização']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551711974-faf378be34b2)',
          }}
        >
          <div className="absolute inset-0 bg-[#3D0C0A]/85"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Nossos Serviços</h1>
          <p className="text-xl text-gray-200">Soluções Completas em Engenharia Civil</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

          {/* Detailed Services Grid */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#3D0C0A] text-center mb-12">
              Serviços Detalhados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceDetails.map((service, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-[#6B2623] rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#3D0C0A] mb-4">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                          <CheckCircle size={16} className="text-[#6B2623] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#3D0C0A] to-[#6B2623] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Precisando de um Orçamento?
          </h2>
          <p className="text-xl text-gray-200 mb-10">
            Entre em contato conosco e solicite um orçamento personalizado para seu projeto. Nossa equipe está pronta para atender suas necessidades!
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
              Solicitar Orçamento
              <ArrowRight className="ml-2" size={24} />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Servicos;