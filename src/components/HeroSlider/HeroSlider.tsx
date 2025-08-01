import React from 'react';
import './HeroSlider.css';
import draWanessaImage from '../../assets/images/dra-wanessa-manifesto.jpg';

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
                    href="https://wa.me/5565981703400?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20gratuita."
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