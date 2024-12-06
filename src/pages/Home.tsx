import React from 'react';
import { Hero } from '../components/home/Hero';
import { ServicePreview } from '../components/home/ServicePreview';
import { ProjectShowcase } from '../components/home/ProjectShowcase';

export function Home() {
  return (
    <main>
      <Hero />
      <ServicePreview />
      <ProjectShowcase />
    </main>
  );
}