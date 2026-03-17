import React, { useState } from 'react';
import { projects } from '../mockData';
import { Card } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { X } from 'lucide-react';

const Projetos = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const categories = ['Todos', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = selectedCategory === 'Todos' 
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1566766804405-eed274ee46bf)',
          }}
        >
          <div className="absolute inset-0 bg-[#3D0C0A]/85"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Nossos Projetos</h1>
          <p className="text-xl text-gray-200">Conheça Nossos Cases de Sucesso</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 italic">
              Projetos que transformaram ideias em realidade
            </p>
          </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProject(project)}
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
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#6B2623] text-white text-xs font-semibold rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-[#3D0C0A]">{project.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#3D0C0A]">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="relative h-96 overflow-hidden rounded-lg">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-[#6B2623] text-white text-sm font-semibold rounded-full mb-4">
                  {selectedProject.category}
                </span>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Projetos;