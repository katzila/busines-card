import React from 'react';
import Section from '../components/Section';

const CertificatesSection: React.FC = () => (
  <Section id="certificates" title="Документы и сертификаты" subtitle="Фото документов и подтверждений опыта доступны по запросу">
    <div className="certificates-grid">
      <div className="card certificate-card">
        <p className="certificate-card__label">Сертификаты и дипломы</p>
        <p className="certificate-card__text">Скан-копии документов предоставлю перед началом сотрудничества.</p>
      </div>
      <div className="card certificate-card">
        <p className="certificate-card__label">Портфолио заданий</p>
        <p className="certificate-card__text">Примеры разборов, чек-листов и планов подготовки отправлю по запросу.</p>
      </div>
    </div>
  </Section>
);

export default CertificatesSection;
