import React from 'react';
import Section from '../components/Section';

const ExperienceSection: React.FC = () => (
  <Section id="experience" title="Опыт работы" subtitle="Работаю дистанционно, адаптирую формат под ученика">
    <div className="experience-grid">
      <div className="card experience-card">
        <p className="experience-card__period">с 2022 — по настоящее время</p>
        <p className="experience-card__title">Учитель истории, обществознания и английского языка</p>
        <p className="experience-card__place">МАОУ «Металлурговская СОШ»</p>
        <p className="experience-card__description">
          Веду уроки, готовлю к экзаменам, помогаю с проектами и олимпиадами. Учу связывать факты и мыслить критически.
        </p>
      </div>
      <div className="card experience-card">
        <p className="experience-card__period">2022</p>
        <p className="experience-card__title">Научный сотрудник, хранитель фондов</p>
        <p className="experience-card__place">МАУК «Новокузнецкий краеведческий музей»</p>
        <p className="experience-card__description">
          Работа с историческими материалами, подготовка выставок и исследовательских проектов.
        </p>
      </div>
    </div>
  </Section>
);

export default ExperienceSection;
