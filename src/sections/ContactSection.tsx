import React from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import { getConfig } from '../config';

const ContactSection: React.FC = () => {
  const config = getConfig();
  
  return (
    <Section
      id="contact"
      title="Свяжемся и обсудим ваш запрос"
      subtitle="Опишите цель — подготовка к экзамену, повышение отметки или помощь с проектом"
    >
      <div className="contact-card">
        <div>
          <p className="contact-card__title">Антон Павлович Макулин</p>
          <p className="contact-card__subtitle">Работаю дистанционно. Подстроюсь под ваш график.</p>
          <ul className="contact-card__list">
            <li>Платформа по договорённости: Zoom, Teams, Skype или любая удобная</li>
            <li>Первое занятие — со скидкой 30%: познакомимся и составим план</li>
            <li>Оплата и расписание — по договорённости и после первого урока</li>
          </ul>
          <div className="contact-card__actions">
            <PrimaryButton href={`mailto:${config.contactLinks.email}`}>Написать на почту</PrimaryButton>
            <PrimaryButton href={config.contactLinks.telegram}>Связаться в Telegram</PrimaryButton>
            <PrimaryButton href={config.contactLinks.whatsapp}>Связаться в WhatsApp</PrimaryButton>
          </div>
        </div>
        <div className="contact-card__note">
          <p>Расскажите о сроках, текущем уровне и желаемом результате — подготовлю программу под вас.</p>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
