import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: 3,
    title: 'Social Media App',
    category: 'Feature Addition',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=800&h=600',
  },
];

export function ProjectShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of our recent work and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to="/projects"
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                <p className="text-gray-200">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}