import React from 'react';
import Section from '../components/Section';

const CertificatesSection: React.FC = () => (
  <Section
    id="certificates"
    title="Документы и сертификаты"
    subtitle="Фото документов и подтверждений опыта доступны по запросу"
  >
    <div className="certificates-grid">
      <div className="card certificate-card">
        <p className="certificate-card__label">Диплом бакалавра</p>
        <p className="certificate-card__text">Скан-копия диплома доступна по запросу. Здесь будет превью документа.</p>
        <div className="certificate-card__placeholder">Превью диплома</div>
      </div>
    </div>
  </Section>
);

export default CertificatesSection;
