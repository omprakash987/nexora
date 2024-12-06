import React from 'react';
import { Globe, Palette, Code, Instagram, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites built with modern technologies and best practices.',
  },
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Beautiful, user-friendly designs that capture your brand essence.',
  },
  {
    icon: Settings,
    title: 'Website Management',
    description: 'Ongoing maintenance and updates to keep your site running smoothly.',
  },
  {
    icon: Code,
    title: 'Feature Addition',
    description: 'Enhance your website with new functionalities and integrations.',
  },
  {
    icon: Instagram,
    title: 'Instagram Branding',
    description: 'Strategic social media presence to boost your brand visibility.',
  },
];

export function ServicePreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive web solutions to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}