import React from 'react';
import Tag from '../components/Tag';
import PrimaryButton from '../components/PrimaryButton';

const HeroSection: React.FC = () => {
  return (
    <header className="hero">
      <div className="hero__content">
        <div className="hero__tags">
          <Tag>Онлайн • Индивидуально</Tag>
          <Tag>История и английский язык</Tag>
          <Tag>Первое занятие со скидкой 30%</Tag>
        </div>
        <h1 className="hero__title">
          Антон Макулин
          <span>Репетитор истории и английского языка</span>
        </h1>
        <p className="hero__subtitle">
          Помогаю школьникам и абитуриентам уверенно сдавать ВПР, ОГЭ, ЕГЭ и поступать
          в ведущие вузы. Доступным языком объясняю сложные темы, выстраиваю понятную
          траекторию подготовки и поддерживаю мотивацию на каждом шаге.
        </p>
        <div className="hero__actions">
          <PrimaryButton href="#contact">Записаться со скидкой 30%</PrimaryButton>
          <a className="hero__link" href="#services">Услуги и цены</a>
        </div>
        <div className="hero__highlight">
          <div>
            <p className="hero__mini">3 года преподавательского опыта</p>
            <p className="hero__mini">Работаю дистанционно на удобной платформе</p>
          </div>
          <div className="hero__badge">30% скидка на первое занятие</div>
        </div>
      </div>
      <div className="hero__panel">
        <div className="hero__panel-card">
          <p className="hero__panel-title">Почему ученики остаются?</p>
          <ul>
            <li>Чёткий план подготовки под цель ученика</li>
            <li>Практика по реальным КИМам и разбора сложных заданий</li>
            <li>Связь между занятиями: чек-листы, быстрые созвоны, микро-дз</li>
          </ul>
        </div>
        <div className="hero__panel-card hero__panel-card--accent">
          <p className="hero__panel-quote">«Абсолютное большинство повышало отметку минимум на 1 балл»</p>
          <p className="hero__panel-meta">Статистика по ученикам за последние годы</p>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
