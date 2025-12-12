import React from 'react';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import ServicesSection from './sections/ServicesSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import CertificatesSection from './sections/CertificatesSection';

const App: React.FC = () => {
  return (
    <div className="page">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <EducationSection />
      <ExperienceSection />
      <CertificatesSection />
      <ContactSection />
      <footer className="footer">
        <p>© {new Date().getFullYear()} Антон Макулин — репетитор истории и английского языка</p>
      </footer>
    </div>
  );
};

export default App;
