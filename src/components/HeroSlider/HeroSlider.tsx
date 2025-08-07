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
                <strong>Dra. Wanessa Faria </strong>
                <span> é Cirurgiã-Dentista, Farmacêutica e Doutora pela UNICAMP, especialista em Estética Facial e referência em estética regenerativa. CEO do Instituto Tugani, lidera uma equipe dedicada ao cuidado integral e à valorização da saúde bucal e beleza natural. É também criadora da Tugani Cosméticos, marca orgânica e vegana desenvolvida com ativos biocompatíveis à base de café verde, unindo ciência, sustentabilidade e inovação em cuidados com a pele.</span>
              </p>
            </div>
            <div className="hero-button-section">
              <a
                className="btn-primary"
                href="https://wa.me/5565981703400?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20gratuita."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende uma consulta
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image-column">
          <div className="hero-image-wrapper">
            <img 
              src={draWanessaImage}
              alt="Dra. Wanessa - Especialista em Harmonização Facial"
              className="hero-professional-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};