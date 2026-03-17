import React, { useState } from 'react';
import { projects } from '../mockData';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  const categories = ['Todos', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = selectedCategory === 'Todos' 
    ? projects.slice(0, 6)
    : projects.filter(p => p.category === selectedCategory).slice(0, 6);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-[#6B2623] font-semibold text-sm uppercase tracking-wider">NOSSOS PROJETOS</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D0C0A] text-center mb-4">
          Conheça Nossos Cases de Sucesso
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 italic">
          Projetos que transformaram ideias em realidade
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#6B2623] text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D0C0A] via-[#3D0C0A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-[#D4AF37] text-[#3D0C0A] text-sm font-semibold rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/projetos">
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

export default ProjectsSection;