import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const milestones = [
  { year: '2020', title: 'Company Founded', description: 'Started with a vision to transform digital presence.' },
  { year: '2021', title: '50+ Projects Completed', description: 'Reached our first major milestone in project delivery.' },
  { year: '2022', title: 'Team Expansion', description: 'Grew to a team of 3 talented professionals.' },
  { year: '2023', title: 'Industry Recognition', description: 'Received multiple awards for web excellence.' },
];

export function About() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cyan-900 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate_animated animate_fadeInLeft">
              <h1 className="text-5xl font-extrabold text-white mb-6">
                Crafting Digital Excellence
              </h1>
              <p className="text-lg text-cyan-200 mb-8">
                We're a team of passionate developers, designers, and digital strategists dedicated to transforming businesses through innovative web solutions.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">35+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">5+</div>
                  <div className="text-sm text-gray-400">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">100%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative animate_animated animate_fadeInRight">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Team collaboration"
                className="rounded-lg shadow-xl transform hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-100 mb-4 animate_animated animate_fadeInUp">
              Our Values
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto animate_animated animate_fadeInUp">
              The principles that guide our work and relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition-all hover:shadow-xl">
              <Users className="w-14 h-14 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Client-Focused</h3>
              <p className="text-gray-300">
                Your success is our priority. We work closely with you to understand and achieve your goals.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition-all hover:shadow-xl">
              <Target className="w-14 h-14 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Innovation</h3>
              <p className="text-gray-300">
                We stay ahead of digital trends to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition-all hover:shadow-xl">
              <Award className="w-14 h-14 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Excellence</h3>
              <p className="text-gray-300">
                We maintain the highest standards in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-100 mb-4 animate_animated animate_fadeInUp">
              Our Journey
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto animate_animated animate_fadeInUp">
              The milestones that shaped our growth and success.
            </p>
          </div>

          <div className="relative">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="mb-8 flex animate_animated animate_fadeInUp">
                <div className="flex-shrink-0 w-24 text-right pr-6">
                  <div className="text-cyan-400 font-bold">{milestone.year}</div>
                </div>
                <div className="flex-grow pl-6 border-l-2 border-cyan-400">
                  <h3 className="text-xl font-semibold mb-1 text-gray-100">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}