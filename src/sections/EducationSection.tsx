import React from 'react';
import Section from '../components/Section';

const EducationSection: React.FC = () => (
  <Section id="education" title="Образование" subtitle="Педагогическое образование с двумя профилями подготовки">
    <div className="timeline">
      <div className="timeline__item">
        <div className="timeline__bullet" />
        <div>
          <p className="timeline__title">Кемеровский государственный университет</p>
          <p className="timeline__subtitle">Педагогическое образование (два профиля) • 2018–2023</p>
          <p className="timeline__description">
            Современные методики преподавания, проектная работа и фокус на индивидуальных траекториях обучения.
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export default EducationSection;
