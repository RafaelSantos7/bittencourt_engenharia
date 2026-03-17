import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const WhyUsSection = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Experiência Consolidada',
      description: 'Mais de 10 anos de atuação no mercado com projetos de excelência'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e certificados pelos órgãos competentes'
    },
    {
      icon: Clock,
      title: 'Cumprimento de Prazos',
      description: 'Planejamento eficiente garantindo entregas dentro do cronograma'
    },
    {
      icon: CheckCircle,
      title: 'Qualidade Garantida',
      description: 'Processos rigorosos e materiais certificados em cada projeto'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-[#6B2623] font-semibold text-sm uppercase tracking-wider">POR QUE NÓS</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D0C0A] text-center mb-6">
          Excelência em Engenharia Civil e Soluções Personalizadas
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16">
          Na nossa empresa, unimos <strong>experiência, tecnologia e comprometimento</strong> para oferecer projetos e construções que superam expectativas. Com uma abordagem moderna e detalhista, garantimos soluções eficientes e duradouras para cada desafio da construção civil.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Equipe de engenharia"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            {reasons.slice(0, 2).map((reason, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#6B2623] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#3D0C0A] mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            {reasons.slice(2).map((reason, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#6B2623] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#3D0C0A] mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
              alt="Projeto de engenharia"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#3D0C0A] to-[#6B2623] rounded-lg p-12 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <div className="text-6xl font-bold text-[#D4AF37]">+10</div>
          </div>
          <h3 className="text-3xl font-bold mb-4">Mais de 10 Anos Transformando Ideias em Realidade</h3>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Desde nossa fundação, acumulamos expertise em <strong>projetos, reformas e construções de pequeno porte</strong>, sempre priorizando qualidade e satisfação do cliente. Nossa trajetória é marcada por obras bem-executadas, prazos cumpridos e um atendimento transparente em cada etapa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;