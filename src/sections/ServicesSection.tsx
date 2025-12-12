import React from 'react';
import Section from '../components/Section';
import Tag from '../components/Tag';

const services = [
  {
    category: 'Английский язык',
    items: [
      { title: 'Общий английский', price: '1000 ₽ / 60 мин.' },
      { title: 'ОГЭ по английскому', price: '1200 ₽ / 60 мин.' },
      { title: 'ЕГЭ по английскому', price: '1500 ₽ / 60 мин.' }
    ]
  },
  {
    category: 'История и обществознание',
    items: [
      { title: 'История, история России', price: '1000 ₽ / 60 мин.' },
      { title: 'ОГЭ по истории', price: '1200 ₽ / 60 мин.' },
      { title: 'ЕГЭ по истории', price: '1500 ₽ / 60 мин.' },
      { title: 'Обществознание', price: '1000 ₽ / 60 мин.' },
      { title: 'ЕГЭ по обществознанию', price: '1500 ₽ / 60 мин.' },
      { title: 'ВПР по истории / обществознанию', price: '1000–1200 ₽ / 60 мин.' }
    ]
  },
  {
    category: 'Углублённые запросы',
    items: [
      { title: 'История искусств, МХК, культурология', price: '1200 ₽ / 60 мин.' },
      { title: 'Проектная деятельность по истории/обществознанию', price: '1000–1200 ₽ / 60 мин.' },
      { title: 'Олимпиады, источниковедение, всемирная история', price: '1200–1500 ₽ / 60 мин.' }
    ]
  },
  {
    category: 'Математика для школьников',
    items: [
      { title: 'Алгебра', price: '1000 ₽ / 60 мин.' },
      { title: 'Геометрия', price: '1200 ₽ / 60 мин.' }
    ]
  }
];

const ServicesSection: React.FC = () => (
  <Section id="services" title="Услуги и цены" subtitle="Чёткие цели, прозрачные условия. Первое занятие — бесплатно и со скидкой 30% на следующий урок.">
    <div className="services-grid">
      {services.map((service) => (
        <div key={service.category} className="card service-card">
          <div className="service-card__header">
            <p className="service-card__title">{service.category}</p>
            <Tag>Онлайн</Tag>
          </div>
          <ul className="service-card__list">
            {service.items.map((item) => (
              <li key={item.title}>
                <span>{item.title}</span>
                <strong>{item.price}</strong>
              </li>
            ))}
          </ul>
          <p className="service-card__note">Гибкий график и формат: индивидуально или в мини-группе.</p>
        </div>
      ))}
    </div>
  </Section>
);

export default ServicesSection;
