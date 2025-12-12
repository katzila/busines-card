import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children }) => (
  <section id={id} className="section">
    <div className="section__header">
      <h2>{title}</h2>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
    </div>
    {children}
  </section>
);

export default Section;
