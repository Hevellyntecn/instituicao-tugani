import React from 'react';
import './Footer.css';
import logoImg from '../../assets/images/logo-tugani.png';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logoImg} alt="TUGANI Cosméticos Veganos" className="footer-logo-image" />
          <p>Instituto de Estética, Odontologia e Saúde Integrada.</p>
        </div>
        <div className="footer-contact">
          <h4 className="footer-column-title">Inicie sua jornada</h4>
          <p><a href="tel:+5565992841136">+55 (65) 99284-1136</a></p>
          <p>Rua Montevideu, 400 - Jd. das Américas, Cuiabá - MT</p>
        </div>
        <div className="footer-social">
          <h4 className="footer-column-title">Siga-nos</h4>
          <a href="https://www.instagram.com/instituto_tugani/" target="_blank" rel="noopener noreferrer">@instituto_tugani</a>
          <a href="https://www.instagram.com/drawanessa.faria/" target="_blank" rel="noopener noreferrer">@drawanessa.faria</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Instituto TUGANI. Todos os direitos reservados.</p>
        <p>
          Responsável Técnica: Wanessa Costa S Faria | CRO-MT 11535 / CRF-MT 4429
        </p>
      </div>
    </footer>
  );
};