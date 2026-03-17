import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Projetos', path: '/projetos', hasDropdown: true },
    { name: 'Contato', path: '/contato' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#3D0C0A] shadow-lg' : 'bg-[#3D0C0A]/95'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#6B2623] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-wide">BITTENCOURT</span>
              <span className="text-gray-300 text-xs tracking-wider">ENGENHEIROS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium flex items-center gap-1 ${
                    location.pathname === link.path ? 'text-[#D4AF37]' : ''
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={16} />}
                </Link>
                {location.pathname === link.path && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37]"></div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#D4AF37] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#3D0C0A] border-t border-[#6B2623]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-white hover:text-[#D4AF37] transition-colors py-2 ${
                  location.pathname === link.path ? 'text-[#D4AF37]' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;