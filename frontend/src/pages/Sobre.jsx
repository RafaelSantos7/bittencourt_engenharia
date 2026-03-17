import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Award, Target, Heart, Lightbulb } from 'lucide-react';
import { teamMembers } from '../mockData';

const Sobre = () => {
  const values = [
    {
      icon: Award,
      title: 'Excelência',
      description: 'Busca contínua pela qualidade superior em todos os nossos projetos e serviços.'
    },
    {
      icon: Target,
      title: 'Compromisso',
      description: 'Dedicação total ao cumprimento de prazos e especificações acordadas.'
    },
    {
      icon: Heart,
      title: 'Integridade',
      description: 'Transparência e ética em todas as nossas relações comerciais e profissionais.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Aplicação de tecnologias modernas e soluções inovadoras na engenharia civil.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1599707254554-027aeb4deacd)',
          }}
        >
          <div className="absolute inset-0 bg-[#3D0C0A]/85"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Sobre Nós</h1>
          <p className="text-xl text-gray-200">Conheça Nossa História e Valores</p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#3D0C0A] mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A <strong>Bittencourt Engenheiros</strong> nasceu com o propósito de transformar o setor da engenharia civil no Brasil, oferecendo soluções inovadoras e de alta qualidade para nossos clientes.
                </p>
                <p>
                  Com mais de 10 anos de atuação no mercado, consolidamos nossa reputação através da entrega de projetos que aliam excelência técnica, cumprimento de prazos e compromisso com a sustentabilidade.
                </p>
                <p>
                  Nossa equipe é formada por profissionais altamente qualificados, todos devidamente registrados nos órgãos competentes (CREA/CAU), garantindo segurança e confiabilidade em cada etapa do projeto.
                </p>
                <p>
                  Atuamos em diversas frentes da engenharia civil, desde projetos estruturais completos até reformas de pequeno porte, sempre mantendo o mesmo nível de dedicação e excelência que nos tornou referência no setor.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                alt="Equipe Bittencourt Engenheiros"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3D0C0A] mb-4">Nossos Valores</h2>
            <p className="text-lg text-gray-600">Os princípios que guiam nosso trabalho</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#6B2623] rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#3D0C0A] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3D0C0A] mb-4">Nossa Equipe</h2>
            <p className="text-lg text-gray-600">Profissionais qualificados e experientes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#6B2623] to-[#8B3330] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-3xl">{member.name.charAt(5)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#3D0C0A] mb-2">{member.name}</h3>
                  <p className="text-[#6B2623] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gradient-to-br from-[#3D0C0A] to-[#6B2623] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-gray-200 leading-relaxed">
                Entregar projetos de engenharia civil de excelência, combinando inovação, qualidade e compromisso para transformar ideias em realidade.
              </p>
            </div>
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-gray-200 leading-relaxed">
                Ser referência nacional em engenharia civil, reconhecida pela excelência técnica e soluções sustentáveis que impactam positivamente a sociedade.
              </p>
            </div>
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold mb-4">Compromisso</h3>
              <p className="text-gray-200 leading-relaxed">
                Manter os mais altos padrões de qualidade, ética e transparência, garantindo a satisfação de nossos clientes e o desenvolvimento sustentável.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;