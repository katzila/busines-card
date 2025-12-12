import React from 'react';
import Section from '../components/Section';

const stats = [
  {
    title: 'Поступления в топ-вузы',
    value: 'РАНХиГС, СПбГУ, лицеи',
    description: 'Помощь с подготовкой к вступительным испытаниям и портфолио.'
  },
  {
    title: 'Рост отметки',
    value: 'от +1 балла',
    description: 'Большинство учеников выходят на более высокий уровень уже через месяц.'
  },
  {
    title: 'Экзамены без стресса',
    value: 'ВПР, ОГЭ, ЕГЭ',
    description: 'Чёткая тренировка формата заданий и уверенность на экзамене.'
  }
];

const StatsSection: React.FC = () => (
  <Section id="stats" title="Результаты учеников">
    <div className="stats-grid">
      {stats.map((stat) => (
        <div key={stat.title} className="card stat-card">
          <p className="stat-card__value">{stat.value}</p>
          <p className="stat-card__title">{stat.title}</p>
          <p className="stat-card__description">{stat.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default StatsSection;
