import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { contactInfo } from '../mockData';
import { MapPin, Phone, Mail, Clock, Instagram, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula envio do formulário
    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefone',
      value: contactInfo.phone,
      link: `https://wa.me/${contactInfo.whatsapp}`
    },
    {
      icon: Mail,
      title: 'Email',
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: contactInfo.address,
      link: null
    },
    {
      icon: Clock,
      title: 'Horário',
      value: 'Seg - Sex: 8h - 18h',
      link: null
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1565862452829-e33c0b781ea3)',
          }}
        >
          <div className="absolute inset-0 bg-[#3D0C0A]/85"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Entre em Contato</h1>
          <p className="text-xl text-gray-200">Estamos Prontos Para Atender Seu Projeto</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-[#3D0C0A] mb-6">Envie uma Mensagem</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nome Completo *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Assunto *
                        </label>
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Assunto da mensagem"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full"
                        placeholder="Descreva seu projeto ou necessidade..."
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#6B2623] hover:bg-[#8B3330] text-white py-6 text-lg font-semibold"
                    >
                      Enviar Mensagem
                      <Send className="ml-2" size={20} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#3D0C0A] mb-6">Informações de Contato</h3>
                  <div className="space-y-6">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#6B2623] rounded-lg flex items-center justify-center">
                          <method.icon className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#3D0C0A] mb-1">{method.title}</h4>
                          {method.link ? (
                            <a 
                              href={method.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-[#6B2623] transition-colors"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="text-gray-600">{method.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#3D0C0A] mb-6">Redes Sociais</h3>
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:shadow-lg transition-shadow"
                  >
                    <Instagram size={24} />
                    <span className="font-semibold">Siga-nos no Instagram</span>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl bg-gradient-to-br from-[#3D0C0A] to-[#6B2623] text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-3">Atendimento Rápido</h3>
                  <p className="text-gray-200 mb-6">Fale conosco agora pelo WhatsApp!</p>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-white text-[#3D0C0A] hover:bg-gray-100 font-semibold"
                    >
                      <Phone className="mr-2" size={20} />
                      WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;