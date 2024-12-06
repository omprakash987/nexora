import React from 'react';
import { Globe, Palette, Code, Instagram, Settings, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites built with modern technologies and best practices.',
    features: [
      'Custom website development',
      'E-commerce solutions',
      'Progressive Web Apps',
      'API integration',
      'Performance optimization',
    ],
  },
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Beautiful, user-friendly designs that capture your brand essence.',
    features: [
      'UI/UX design',
      'Responsive design',
      'Brand identity',
      'Wireframing',
      'Prototyping',
    ],
  },
  {
    icon: Settings,
    title: 'Website Management',
    description: 'Ongoing maintenance and updates to keep your site running smoothly.',
    features: [
      'Regular updates',
      'Security monitoring',
      'Performance tracking',
      'Content updates',
      'Technical support',
    ],
  },
  {
    icon: Code,
    title: 'Feature Addition',
    description: 'Enhance your website with new functionalities and integrations.',
    features: [
      'Custom features',
      'Third-party integrations',
      'Payment gateways',
      'Analytics setup',
      'Automation tools',
    ],
  },
  {
    icon: Instagram,
    title: 'Instagram Branding',
    description: 'Strategic social media presence to boost your brand visibility.',
    features: [
      'Profile optimization',
      'Content strategy',
      'Visual branding',
      'Engagement tactics',
      'Analytics reporting',
    ],
  },
];

export function Services() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <ArrowRight size={16} className="text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our comprehensive web solutions.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}