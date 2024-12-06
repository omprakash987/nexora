import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const milestones = [
  { year: '2018', title: 'Company Founded', description: 'Started with a vision to transform digital presence.' },
  { year: '2019', title: '50+ Projects Completed', description: 'Reached our first major milestone in project delivery.' },
  { year: '2020', title: 'Team Expansion', description: 'Grew to a team of 15 talented professionals.' },
  { year: '2021', title: 'International Clients', description: 'Started serving clients across multiple countries.' },
  { year: '2022', title: 'Industry Recognition', description: 'Received multiple awards for web excellence.' },
];

export function About() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Crafting Digital Excellence
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We're a team of passionate developers, designers, and digital strategists dedicated to transforming businesses through innovative web solutions.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
              <p className="text-gray-600">
                Your success is our priority. We work closely with you to understand and achieve your goals.
              </p>
            </div>
            <div className="text-center p-6">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of digital trends to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The milestones that shaped our growth and success.
            </p>
          </div>
          
          <div className="relative">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="mb-8 flex">
                <div className="flex-shrink-0 w-24 text-right pr-6">
                  <div className="text-blue-600 font-bold">{milestone.year}</div>
                </div>
                <div className="flex-grow pl-6 border-l-2 border-blue-200">
                  <h3 className="text-xl font-semibold mb-1">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}