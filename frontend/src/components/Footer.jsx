import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail } from 'lucide-react';
import { contactInfo } from '../mockData';

const Footer = () => {
  return (
    <footer className="bg-[#2A0906] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-[#6B2623] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">BITTENCOURT</span>
                <span className="text-gray-300 text-xs">ENGENHEIROS</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Excelência em Engenharia Civil. Mais de 10 Anos Construindo o Futuro com Solidez e Inovação.
            </p>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Institucional:</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Páginas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Páginas:</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/politica" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Entre em contato:</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  <Phone size={20} />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  <Mail size={20} />
                  <span className="text-sm">{contactInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#6B2623] text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 <span className="font-semibold">WebTech</span>. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;