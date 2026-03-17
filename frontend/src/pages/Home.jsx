import React from 'react';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import WhyUsSection from '../components/WhyUsSection';
import ProjectsSection from '../components/ProjectsSection';
import QualitySection from '../components/QualitySection';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <ProjectsSection />
      <QualitySection />
      <CTASection />
    </div>
  );
};

export default Home;