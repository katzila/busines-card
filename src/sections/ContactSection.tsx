import React from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';

const ContactSection: React.FC = () => (
  <Section id="contact" title="Свяжемся и обсудим ваш запрос" subtitle="Опишите цель — подготовка к экзамену, повышение отметки или помощь с проектом">
    <div className="contact-card">
      <div>
        <p className="contact-card__title">Антон Павлович Макулин</p>
        <p className="contact-card__subtitle">Работаю дистанционно. Подстроюсь под ваш график.</p>
        <ul className="contact-card__list">
          <li>Платформа по договорённости: Zoom, Teams, Skype или любая удобная</li>
          <li>Первая встреча — бесплатно: определим цели и составим план</li>
          <li>Скидка 30% на первое оплачиваемое занятие</li>
        </ul>
        <div className="contact-card__actions">
          <PrimaryButton href="mailto:anton.tutor@example.com">Написать на почту</PrimaryButton>
          <a className="hero__link" href="https://t.me/" target="_blank" rel="noreferrer">Связаться в Telegram</a>
        </div>
      </div>
      <div className="contact-card__note">
        <p>Расскажите о сроках, текущем уровне и желаемом результате — подготовлю программу под вас.</p>
      </div>
    </div>
  </Section>
);

export default ContactSection;
