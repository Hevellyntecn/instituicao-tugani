import React from 'react';
import './HeroSlider.css';
import draWanessaImage from '../../assets/images/dra-wanessa.jpg';

export const HeroSlider: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-background-overlay"></div>
      <div className="hero-container">
        <div className="hero-content-column">
          <div className="hero-content-wrapper">
            <div className="hero-heading animated fadeInLeft">
              <h1 className="hero-title">
                Transforme sua autoestima hoje mesmo!
              </h1>
            </div>
            <div className="hero-description animated fadeInRight">
              <p>
                <strong>Dra. Wanessa</strong>
                <span> especialista em harmonização facial e corporal. Descubra como pequenos ajustes podem transformar completamente sua aparência e renovar sua confiança. Resultados naturais e duradouros que você sempre sonhou!</span>
              </p>
            </div>
            <div className="hero-button-section">
              <div className="hero-button-container">
                <div className="hero-button-wrapper">
                  <a
                    className="hero-button"
                    href="https://whatsapp.faleconosco.chat/redirect/731235a3f?utm_campaign=20365251335&utm_source=adwords&utm_medium=172629053681&utm_term=estetica%20facial&matchtype=b&device=m&network=g&loc=9101900&placement&gad_source=1&gad_campaignid=20365251335&gbraid=0AAAAAp7dcV0mLiaO9f3Ni2Z18sebrFa65&gclid=Cj0KCQjws4fEBhD-ARIsACC3d2_TNE0lfJJ1YUXaUes66Rrp72vr62YnZWTkduDhB5YHcDvJ4dypS84aAq5BEALw_wcB"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="button-content-wrapper">
                      <span className="button-text">Agendar Consulta Gratuita</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image-column">
          <div className="hero-image-wrapper">
            <div className="hero-image-placeholder">
              <img 
                src={draWanessaImage}
                alt="Dra. Wanessa - Especialista em Harmonização Facial"
                className="hero-professional-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};